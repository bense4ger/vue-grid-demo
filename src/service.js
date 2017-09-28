import $ from 'jquery'
import {Promise} from 'es6-promise';

const getPageData = (page) => {
    return new Promise((resolve, reject) => {
        if (!page) reject(new Error(`page: ${page} invalid`));
        
            $.ajax({
                method: 'GET',
                url: `http://localhost:8081?page=${page}`,
                success: (data) => resolve(data),
                error: () => reject(new Error(`Error getting page data for page: ${page}`))
            });
    });
}

export default { getPageData, }