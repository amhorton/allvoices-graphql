const request = require('request-promise');
const partial = require('lodash.partial');

const apiHost = process.env.NODE_SERVICE_HOST;

const makeApiRequest = (url, { context, options = {} }) => {
    const accessToken = { context };
    return request(url, {
        ...options,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        json: true
    });
};

const createEndpoint = (path) => {
    return (pathArgs) => {
        const completePath = typeof path === "function" ? path(pathArgs) : path;
        return partial(makeApiRequest, `${apiHost}${completePath}`);
    }
};

module.exports = { createEndpoint };