#### Intro
We need to build the front end web app of our ecommerce store. This project is based on an existing website that has no functionality. If you worked for this company, they may ask you to fix their current website that doesn't do anything and make it functional for people to buy products on it. You might make the decision to use React to do this. Converting normal websites to React components is a very common thing to do in the industry.

Our simple site will list out some hard coded products. Is this realistic? Would a small company only sell the same 10 items in a year? A user needs to be able to add a product to their shopping cart by clicking a button. How do you atually code the act of adding a product to the a digital shopping cart? 


https://blackrockdigital.github.io/startbootstrap-shop-homepage/

### Setup
Fork, clone, install http-server or use live server

### Building React Components
 * Create a component folder in /public/js to hold component files
 * Organize this web page into appropriate components
   * App
   * ProductDetail
   * Header
   * Footer
   * Carousel
   * Think of some other components you could make
* Look in index.html for the existing html to use for the components
* Make sure each component is in its own file and then used as a child component in App.js
* Make sure to reference each component file in a script tag in index.html
* Make sure to include type="text/babel"

### index.js
* Create a index.js file and put the code of rendering App into the div with id = root
* Provide App with a prop called "products" sending in the global products array from state.js

### App 
* Cut whatever html is left in index.html and turn it into JSX by pasting it into your App.js component. 
* Use all your other components in App
* Make sure everything is valid JSX. Remember className. HTML comments are not valid JSX.
* App should use the products prop and map the array of products into an array of ProductDetail components

### ProductDetail
* The ProductDetail should repesent only one single product
* The ProductDetail should take a prop called `product` which is an object, and use it to populate price, name, description reviews and stars.
* Remove all hard coded information and use the props
* Make the star images represent the number rating from data.
* Bonus. Notice the grey stars.



### Add Item To Cart
* Add a button to ProductDetail "Add To Cart"
* When the button is clicked it should increase the value of the state numberOfItemsInCart by 1
* The Header should update to show the current value of numberOfItemsInCart
* How does Header get that information in order to show it?
* How do you update Header so that it shows the number when it changes?
* How do you make one component affect something in another component?


### Add Item To Cart V2
* Adding 1 to a counter is not a realistic way to add an item to the shopping cart
* How would you alter the structure of the state object to represent a realistic way to do this
* How would you alter the data in the state object to represent adding an item to a cart
* How would Header now show how many items are in cart
* Add a checkout button

### Checkout
* Let's create a very simple checkout process
* When you click the checkout button, whatever products are in the cart should somehow be processed so a person knows to ship those products to the customer
* The products in the cart need to be sent to the server to be saved as an order
* When the products are recieved by the server, they need to be saved in a database 



### Server
* Create a database for this project
* Create a web server for ths project
* Create routes for products and orders


### Fetch
* Use fetch to retrieve products from your web api
* Where should the fetch call be made?
