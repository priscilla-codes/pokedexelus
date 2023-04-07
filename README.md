# Pokedexelus
Pokedexelus is an application that allows users to search for Pokemon, view information about specific Pokemon, and add Pokemon to their favorites list.
                              
![pokedexelus-preview](https://user-images.githubusercontent.com/10909592/230292598-6b0190de-d3bf-4d7a-a7a3-4262eae7ef10.png)

![pokedexelus-favorites-preview](https://user-images.githubusercontent.com/10909592/230292615-97f905f9-0e52-4875-96ac-8750250c906f.png)

## Getting Started
```
# Clone the repository 
git clone https://github.com/priscilla-codes/pokedexelus.git
```

```
# Install the required dependencies
cd pokedexelus
npm install
```

```
# Start the application 
npm start
```

## Usage
### Home Page
The home page displays a search box where users can enter the name of a Pokemon to search for. Users can also click on the "Favorites" link to view their favorite Pokemon.

### Search Results
After entering a search query, the search results page will display a list of Pokemon matching the search query. Users can click on a Pokemon to view more information about it.

### Pokemon Details
The Pokemon details page displays detailed information about a specific Pokemon, including its name, height, weight, and experience. Users can also add the Pokemon to their favorites list by clicking the heart icon.

### Favorites
The favorites page displays a list of the user's favorite Pokemon. Users can click on a Pokemon to view its details or remove it from their favorites list.

## Technical Details
- Pokedexelus is built using React.js and the [PokeAPI](https://pokeapi.co/) 
- Data is fetched from the [PokeAPI](https://pokeapi.co/) using [Axios](https://axios-http.com/) 
- The app is divided into several components, each responsible for a specific part of the UI
- Styling is done using styled components
- The app uses [React Router](https://reactrouter.com/en/main) for navigation between pages