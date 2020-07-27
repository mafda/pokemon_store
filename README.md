# Pokemon Store

:rocket: A demo of this project is available [here]().

<!-- gif -->

***Pokemon Store***  is a project that has the following features:

* The store is organized according to the type of Pokémon. There are [18-type Pokémon](https://bulbapedia.bulbagarden.net/wiki/Type), but the store only has two types: [Fire](https://bulbapedia.bulbagarden.net/wiki/Fire_(type)) and [Water](https://bulbapedia.bulbagarden.net/wiki/Water_(type)).

* In the **Fire Tab**, you can see the complete list of fire-type Pokemon. And in the **Water Tab**, you can see the full list of water-type Pokemon.
  * Each items in the list presented:
    * Image,
    * Name,
    * Weight [Kg],
    * Price based on its *base_experience*, and
    * Button for add to cart (Catch it!).
* In the **Cart Tab**, you can see the number of the purchased items and the detailed summary. 
  * Each purchased item presented:
    * Image,
    * Name,
    * Price = Price * quantity,
    * Quantity, and
    * Option to add or remove items.
  * Total Weight (Sum of total weight),
  * Subtotal (Sum of the total price of the items),
  * Shipping (Weight percent = Weight / 10),
  * Total (Subtotal + Shipping), and
  * Finish shopping (Catch 'em all!).


## Technologies

* The project was developed using the framework [ReactJS](https://reactjs.org/).
* CSS was used for the basic styling of the navbar, forms, and other components.
* [react-icons](https://react-icons.github.io/) was used for complementary styling, and to have a better user experience, [react-infinite-scroller](https://www.npmjs.com/package/react-infinite-scroller) was used to load content.
* The RESTful Pokemon API [PokéAPI](https://pokeapi.co/) was used to request the Pokémon.
* [Axios](https://github.com/axios/axios) was used to promise-based HTTP client.
* Finally, [Heroku](www.heroku.com) was used to deploy the project.


## Development 

```shell
# 1. Check if it is installed
node -v
npm -v

# 2. Clone the project
git clone git@github.com:mafda/pokemon_store.git

# 2.1. Go to the project directory
cd frontend

# 3. Install the project dependencies
npm install

# 5. Run the server
npm start

# 6. Enjoy it!
echo "well done! :)"
```

Done! Now navigate to http://localhost:3000/

### Heroku Deploy 

```shell
# 1. Create the app on Heroku 
heroku create awesome-pokemon-store

# 2. Deploy it :)
git push heroku master

# 3. Make 
heroku run 

# 4. Enjoy it!
echo "well done! :)"
```

Done! Now navigate to https://awesome-pokemon-store.herokuapp.com/

> The application link will depend on the application name registered on Heroku.

## About the Challenge

Develop a store using the ReactJS framework.

### Briefing

We want at least two stores for two types of Pokémon (water, fire, dragon, etc.) with different styles, maintaining the same behavior.

### Goals

The MVP (Minimum Viable Product) consists of:

* [x] Product catalog.
* [x] Side cart.
* [x] Cart summary.
* [x] 2 stores with different styles and types of Pokémon.

Bonus features:

* [ ] Search bar to filter Pokémon.
* [ ] Checkout button, restarting the purchase process.
* [ ] Modal thanks to checkout.
* [ ] Save user purchase data locally so as not to lose it when refreshing the page.

### Initial Sketch

![initial sketch](https://github.com/b2wdigital/desafio-loja-pokemon/raw/master/wireframe.jpg)

### Prototype

* HTML/CSS only
  * :file_folder: [Sketch](https://github.com/mafda/pokemon_store/tree/master/sketch) 
  * :computer: [CodePen](https://codepen.io/mafda/pen/oNbmpWx) 

![prototype pokemon store](sketch/preview/sketch02.png)

### Final Details

* Desktop
![preview desktop](preview/pokemon-water.png)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## References

* Logo [Pokémon](https://logodownload.org/pokemon-logo/).

---

**</>** with 💙 by [mafda](https://mafda.github.io/).
