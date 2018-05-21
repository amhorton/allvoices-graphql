const { createEndpoint } = require('./createEndpoint');

const endpoints = {
    form: createEndpoint((formId) => `/v1/forms/${formId}`)
};

module.exports = endpoints;