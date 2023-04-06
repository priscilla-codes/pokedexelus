# Pokedexelus
Pokedexelus is a web application that allows users to search for pokemon, view information about specific pokemon, and add pokemon to their favorites list.

![pokedexelus-preview](https://user-images.githubusercontent.com/10909592/230026147-33997c38-b286-45d3-8a39-4f4cece21270.png)


## Getting Started
```bash
# Clone the repository 
git clone https://github.com/priscilla-codes/pokedexelus.git

# Install the required dependencies
npm install

# Start the application 
npm start
```

## Usage
### Home Page
The home page displays a search box where users can enter the name of a pokemon to search for. Users can also click on the "Favorites" link to view their favorite pokemon.

### Search Results
After entering a search query, the search results page will display a list of pokemon matching the search query. Users can click on a pokemon to view more information about it.

### Pokemon Details
The pokemon details page displays detailed information about a specific pokemon, including its name, height, weight, and experience. Users can also add the pokemon to their favorites list by clicking the heart icon.

### Favorites
The favorites page displays a list of the user's favorite pokemon. Users can click on a pokemon to view its details or remove it from their favorites list.

## Technical Details
- Pokedexelus is built using React.js and the [PokeAPI](https://pokeapi.co/) . 
- The app is divided into several components, each responsible for a specific part of the UI. 
- Styling is done using styled components. 
- The app uses React Router for navigation between pages. 
- Data is fetched from the [PokeAPI](https://pokeapi.co/) using [Axios](https://github.com/axios/axios).