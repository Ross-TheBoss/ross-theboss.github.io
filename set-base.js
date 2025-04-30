"use strict"

const fs = require('fs');
const path = require('path');

const headPath = path.join(__dirname, 'templates', 'partials', 'head.ejs');
const content = fs.readFileSync(headPath, 'utf8');

let baseurl = process.env['BASEURL'] != undefined ? process.env['BASEURL']: 'http://localhost:3000/';

const updatedContent = content.replace(
    /<base\s+href="[^"]*"\s* \/>/,
    `<base href="${baseurl}" />`
)

fs.writeFileSync(headPath, updatedContent);