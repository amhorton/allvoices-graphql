const { GraphQLNonNull, GraphQLString } = require('graphql');
const { form } = require('../../api/endpoints');
const FormType = require('../types/FormType');

module.exports = {
    type: FormType,
    description: "gets a form by ID",
    args: {
        formId: {
            description: "Form ID",
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve(root, args, context) {
        return form(args.formId)({ context });
    }
}