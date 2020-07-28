# Pokemon Store

- [Pokemon Store](#pokemon-store)
  - [Overview](#overview)
  - [Technologies](#technologies)
  - [Development](#development)
    - [Heroku Deploy](#heroku-deploy)
  - [Goals](#goals)
  - [Prototype](#prototype)
  - [Results](#results)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
  - [License](#license)
  - [References](#references)

:rocket: A demo of ***Pokemon Store*** is available [**here**](https://mafda-pokemon-store.herokuapp.com/).


## Overview

***Pokémon Store*** is a shopping cart project to purchase wild Pokémon. It was developed using the ReactJS framework.

The store is presented according to the type of Pokémon. There are [18-type Pokémon](https://bulbapedia.bulbagarden.net/wiki/Type), but the store only has two types: [Fire](https://bulbapedia.bulbagarden.net/wiki/Fire_(type)) and [Water](https://bulbapedia.bulbagarden.net/wiki/Water_(type)).

This project is organized into the following **components**:

* Cart
  * In this component, the detailed summary of the purchased items was presented. 
    * Each purchased item presents:
      * Image,
      * Name,
      * Price = Price x Quantity,
      * Quantity, and
      * Controls to add or remove items.
    * Total Weight (Sum of total weight),
    * Subtotal (Sum of the total price of the items),
    * Shipping ($0.1 per kilogram),
    * Total (Subtotal + Shipping), and
    * Finish shopping (Catch 'em all!).
* Footer
  * In this component, you can see developer info.
* Header
  * In this component, the navigation bar has two buttons to change between the types of Pokémon:
    * In the **Fire Button**, you can see the complete list of fire-type Pokémon. 
    * In the **Water Button**, you can see the full list of water-type Pokémon.
  * Also, the number of items purchased appears on the right side.
    * The **Cart Button** allows to show or hide the detailed summary of the purchased items.
* Modal
  * In this component, the modal thanks to checkout and restarting the purchase process.
* ProductsGrid
  * This component presents the list of the available Pokémon.
  * Each Pokémon card has the following features:
    * Image,
    * Name,
    * Weight [kg],
    * Price based on its `base_experience`, and
    * Button for add to cart (Catch it!).
* Styling
  * This component is used to define the color palette of each store in a dynamic way. It does not alter the application behavior.

## Technologies

* The project was developed using the framework [ReactJS](https://reactjs.org/).
* CSS was used for the basic styling of the navbar, forms, and other components.
* [react-icons](https://react-icons.github.io/) was used for complementary styling.
* [react-modal](https://github.com/reactjs/react-modal) was used in the checkout button, and restarting the purchase process.
* In order to have a better user experience, [react-infinite-scroller](https://www.npmjs.com/package/react-infinite-scroller) was used to load content.
* The RESTful Pokémon API [PokéAPI](https://pokeapi.co/) was used to request the Pokémon.
* [Axios](https://github.com/axios/axios) was used as HTTP client.
* Finally, [Heroku](www.heroku.com) was used to deploy the project.


## Development 

```shell
# 1. Check if node is installed
node -v
npm -v

# 2. Clone the project
git clone git@github.com:mafda/pokemon_store.git

# 2.1. Go to the project directory
cd pokemon_store/frontend

# 3. Install the project dependencies
npm install

# 5. Run the server
npm start

# 6. Enjoy it!
echo "Enjoy it! :)"
```

Done! Now navigate to http://localhost:3000/

### Heroku Deploy 

```shell
# 1. Create the app on Heroku 
heroku create -b https://github.com/mars/create-react-app-buildpack.git awesome-pokemon-store

# 2. Deploy it :)
git subtree push --prefix frontend heroku master

# 3. Enjoy it!
echo "Well done! :)"
```

Done! Now navigate to https://awesome-pokemon-store.herokuapp.com/

> The application link will depend on the application name registered on Heroku.

## Goals

The MVP (Minimum Viable Product) consists of:

* [x] ~~Product catalog.~~
* [x] ~~Side cart.~~
* [x] ~~Cart summary.~~
* [x] ~~2 stores with different styles and types of Pokémon.~~

Bonus features:

* [x] ~~Search bar to filter Pokémon.~~
* [x] ~~Checkout button, restarting the purchase process.~~
* [x] ~~Modal thanks to checkout.~~
* [x] ~~Save user purchase data locally so as not to lose it when refreshing the page.~~

## Prototype

* HTML/CSS only
  * :file_folder: [Sketch](https://github.com/mafda/pokemon_store/tree/master/sketch) 
  * :computer: [CodePen](https://codepen.io/mafda/pen/oNbmpWx) 

![prototype pokemon store](sketch/preview/sketch02.png)

## Results

|         Desktop          |         Mobile          |
| :----------------------: | :---------------------: |
| ![](preview/desktop.gif) | ![](preview/mobile.gif) |

### Desktop
![preview desktop](preview/mafda-pokemon-store-desktop.png)

### Mobile
![preview mobile](preview/mafda-pokemon-store-mobile.png)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## References

* [desafio-loja-pokemon](https://github.com/b2wdigital/desafio-loja-pokemon).
* Logo [Pokémon](https://logodownload.org/pokemon-logo/).

---

**</>** with 💙 by [mafda](https://mafda.github.io/).
