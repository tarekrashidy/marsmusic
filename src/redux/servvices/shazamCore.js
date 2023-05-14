    import {
        createApi,
        fetchBaseQuery
    } from '@reduxjs/toolkit/query'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1173d9b56cmsh4c4123460fb5e60p1904f1jsn53cdcf5e9de0',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
};

fetch('https://shazam.p.rapidapi.com/charts/track', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
    export const shazamCoreApi = createApi({
          reducerPath: 'shazamCoreApi',
        // Set the baseUrl for every endpoint below
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://pokeapi.co/api/v2/'
        }),
        endpoints: (builder) => ({
            getPokemonByName: builder.query({
                // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur
                query: (name) => `pokemon/${name}`,
            }),
            updatePokemon: builder.mutation({
                query: ({
                    name,
                    patch
                }) => ({
                    url: `pokemon/${name}`,
                    // When performing a mutation, you typically use a method of
                    // PATCH/PUT/POST/DELETE for REST endpoints
                    method: 'PATCH',
                    // fetchBaseQuery automatically adds `content-type: application/json` to
                    // the Headers and calls `JSON.stringify(patch)`
                    body: patch,
                }),
            }),
        }),
    })