// src/mocks/handlers.js
import { handlersInquiry } from './inquiry';

export const handlers = [
  ...handlersInquiry,
  // graphql.query('ListPosts', ({ query }) => {
  //   console.log('Intercepted a "ListPosts" GraphQL query:', query)
  // }),
  // graphql.mutation('CreatePost', ({ query, variables }) => {
  //   console.log(
  //     'Intercepted a "CreatePost" GraphQL mutation:',
  //     query,
  //     variables
  //   )
  // }),
  // graphql.mutation('DeletePost', ({ query, variables }) => {
  //   console.log('Intercepted a "DeletePost" GraphQL mutation', query, variables)
  // }),
];
