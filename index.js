// require('dotenv').configure();
const express = require('express');
const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');

const app = express();

const { form } = require('./schema/queries/queries');

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            form,
        }
    })
});

app.use('/graphql', graphqlHTTP((req) => {
    const context = {
        accessToken: req.query.accessToken || "",
        req
    }
    return {
        schema,
        context,
        graphiql: true
    };
}));

console.log('listening on port 4000...');
app.listen(4000);