"use strict";
const http = require('http');
const url = require('url');
const fakeData = require('./fake-data.json');

const port = process.env.PORT || 8080;
const pageSize = process.env.PAGE_SIZE || 10;
const maxPage = Math.round(fakeData.length/pageSize);

const getData = (page) => {
    const skip = (page - 1) * pageSize;
    const end = page * pageSize;
    return {
        pages: maxPage,
        data: fakeData.slice(skip, end)
    }
};

const handler = (req, res) => {
    const query = url.parse(req.url, true).query;

    let page = parseInt(query.page) || 1;
    if (page > maxPage) page = maxPage;

    console.log(`Getting page ${page}`);

    const data = JSON.stringify(getData(page));

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data);
    res.end();
};

const server = http.createServer(handler);

server.listen(port, () => {
    console.log(`Listening on ${port}`);
});