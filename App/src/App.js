import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import UseCreateCard from "./components_lau/Card";

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover p12"
    style = {{
      backgroundImage: "url(" + 'https://source.unsplash.com/1L71sPT5XKc' + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <ApolloProvider client={client}>
        <UseCreateCard/>
      </ApolloProvider>
    </div>
  );
}

export default App;
