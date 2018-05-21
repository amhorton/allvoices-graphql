const { GraphQLString, GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
    name: "Form",
    fields: {
        name: { type: GraphQLString },
        role: { type: GraphQLString },
        test: {
            type: GraphQLString,
            resolve: (root) => {
                console.log(root);
                return "testing a computed field";
            }
        }
    }
});