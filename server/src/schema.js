const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')

const { ProductType, DeleteMessageType } = require('./type')
const {
  likeProductResolver,
  dislikeProductResolver,
  productListByCategoryResolver,
} = require('./resolver')

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    productListByCategory: {
      type: new GraphQLList(ProductType),
      description: 'List of products',
      args: {
        category: { type: GraphQLString },
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
      resolve: productListByCategoryResolver,
    },
    // TODO
    // Add productList field
    // Add wishlist field
    // Add order field
  }),
})

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    likeProduct: {
      type: GraphQLNonNull(GraphQLID),
      description: '유저 찜하기 기능',
      args: {
        userId: { type: GraphQLNonNull(GraphQLID) },
        productId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: likeProductResolver,
    },
    dislikeProduct: {
      type: DeleteMessageType,
      description: '유저 찜 취소 기능',
      args: {
        userId: { type: GraphQLNonNull(GraphQLID) },
        productId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: dislikeProductResolver,
    },
  }),
})

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
})

module.exports = schema
