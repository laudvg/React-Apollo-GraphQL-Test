import { gql } from '@apollo/client';


const GET_USER = gql`
  query GetUser {
     user(id: 10) {
       id
       name
       address {
        street
         suite
         city
       }
       email
       phone
       company {
         name
       }
     }
   }
`

const GET_POSTS = gql`
query GetPosts {
     user(id: 10) {
     posts {
         data {
          title
          id
           }
          }
   }
  }
`

// function getUser(client){
//   client.query({query: GET_POSTS}).then(res =>console.log(res))
// }

// function getPosts(client){
//   client.query({query: GET_USER}).then(res =>console.log(res));
// }

export {
  GET_POSTS,
  GET_USER
}