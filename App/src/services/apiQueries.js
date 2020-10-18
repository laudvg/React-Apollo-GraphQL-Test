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

export {
  GET_POSTS,
  GET_USER
}