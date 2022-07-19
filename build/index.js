"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const node_https_1 = __importDefault(require("node:https"));
const HTTP_PORT = 8080;
const HTTPS_PORT = 8081;
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end();
};
const server = node_http_1.default.createServer(requestListener);
server.listen(HTTP_PORT, () => {
    console.log(`HTTP Server starter at PORT: ${HTTP_PORT}`);
});
const secureServer = node_https_1.default.createServer(requestListener);
secureServer.listen(HTTPS_PORT, () => {
    console.log(`HTTPS Server starter at PORT: ${HTTPS_PORT}`);
});
