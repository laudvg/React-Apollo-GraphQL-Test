### Brief

**Overview**

Convert the  HTML template into a clean and multi components composed react app and fill the components with mock API data provided.

**Minimum Requirements**

- Clean code, componentize and compose the layout as much as possible into re-usable components.
- Use React Hook useQuery to get data from the mock API.
- Replace all the words in the template in curly brackets with dynamic data from the API. The posts data should be a loop with the first 10 current user's post, no paginated. Use the user id: 1.

**Clarifications**

- A React app is already created inside /App. Use that for the project.
- The template uses Tailwind framework for the css. Do not change the css in the components, use the same classes in the react components. Tailwind is already installed and imported into the react app.
- The API is in graphQL and the client we use is Apollo. See the `ExampleComponent` in `./App.js` . Use [Apollo's docs](https://www.apollographql.com/docs/react/get-started/) and [mock API docs's](http://graphqlzero.almansi.me/) as reference. Look into the API playground to see all the data available: [playground](https://graphqlzero.almansi.me/api)


**Docs**

GraphQL Mock API: [https://graphqlzero.almansi.me/](https://graphqlzero.almansi.me/)

Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)

Apollo client: [https://www.apollographql.com/docs/react/get-started/](https://www.apollographql.com/docs/react/get-started/)