React-Router: Routing in
React Apps
CSIS 3380

Anupama Gupta
guptaa10@douglascollege.ca

Outline
 Navigation

 Implement Not found (404) pages

 Nested Routing

 Redirecting

 Route Parameters

 Query String

Routing
 Routing is the ability to move between different parts of an application
when a user enters a URL or clicks an element (link, button, icon, image etc)
within the application.

 Routing is the process of defining endpoints for your client’s requests. These
endpoints work in conjunction with the browser’s location and history
objects. They’re used to identify requested content so that JavaScript can
load and render the appropriate user interface.

 Up until this point, we have dealt with simple projects that do not require
transitioning from one view to another, thus, we are yet to interact with
Routing in React. In this lecture, we will learn about routing in a React
application.

Adding Routing
 Unlike Angular, React does not come with a standard router because it is a
small library mainly responsible for rendering the view, nothing more.

 So to add routing to our application, we need to install a library called
React-router-DOM.

 So open up the terminal, and install React-router-dom

 npmi react-router-dom
 This is the implementation used for regular React applications that use DOM
or browser.

Adding Routing
 Now to add routing , there are two steps we need to follow:

 First, we need to go to main.jsx. On the top, we need to import a
component called BrowserRouter from react-router-dom.

 Shortcut: you don't have to type the complete name of the module, you
can simply type the first letter of every word.
 so type rrdfor react router DOM.

 Now we need to wrap the app component in BrowserRouter.

 BrowserRoutercomponent wraps the history object in browsers and passes it
down to the component tree.
 So anywhere in our component tree, we'll be able to use the history object.
 It should be used once and placed near the root of our component tree.

Adding Routing
We have the option
to assign an alias to
BrowserRouterif
needed
Adding Routing
 To demonstrate the capabilities of the React Router, we’ll build a classic
starter website complete with About, Events, Products, and Contact Us
sections.

 Although this website will feel as though it has multiple pages, there’s only
one—it’s an SPA, a single-page application.

 The router will allow us to set up routes or register the routes for each section
of the website.
 And that basically means we need to tell React what components should be
rendered based on a given URL.

 Each route is an endpoint that can be entered into the browser’s location
bar.
 When a route is requested, we can render the appropriate content.

Creating Placeholder
Components
 We can export these components
from a single file called pages.jsx (you
can get that from the starter files)

Setting Up Route Configuration/
Registering the routes
 We’re going to place this in the App.jsxfile.

 The wrapper component for any routes we want to render is called Routes.
 Inside of Routes, we’ll use a Route component for each page we want to render.
 So on the top, we need to import the Routes and Route components, from react-router-
dom.
 We also want to import all of the pages from the ./pages.jsxfile.
 Now we need to register our routes: so, we add the Route component, give it two
props, one is path , and the other is element.
 So this Route is a component, just like the components we have built so far. It has attributes, and
these attributes will be passed as props.

 When the browser’s location matches the path , the element will be displayed.

 When the location is / , the router will render the Home component. When the location is
/products , the router will render the Products component.
Setting Up Route Configuration
These routes tell the Router which component to render when the window’s
location changes. Each Route component has path and element properties.
We can physically type the routes into the browser’s location bar to watch the content change. For example, type
http://localhost:3000/about into the location bar and watch the About component render

Setting Up Route Configuration
 It’s more realistic to create a navbar to allow our users to navigate the
website by clicking the hyperlinks rather than typing routes into the location
bar.

 The react-router-dom provides a Link component that we can use to create
browser links.

 Create a NavBarcomponent and place it in the App.jsx

NavBar Component
I used bootstrap docs to get
this navigation menu
Navigation using Link Component
 If an anchor element is used to create navigation links for the React app's
routes, clicking the links results in the entire webpage being reloaded.

 For example, Home creates a Home link that reloads the
entire webpage.

 To prevent reloading , the React Router component Link produces a link
that navigates to a route without reloading the webpage.

Router Properties
 The React Router passes properties to the components it renders. For
instance, we can obtain the current location via a property.

 Let’s use the current location to help us create a 404 Not Found
component.

 First we’ll create the component:

Router Properties
 Then we’ll add this to our route configuration in App.js.

 If we visit a route that doesn’t exist, like highway, we want to display the
Whoops404 component.

 We’ll use the * as the path value and the component as the element.

 We also could display the value of the route that we’ve visited by using the
location value.

 In the Whoops404 component , create a variable called location that
returns the value of the current location (i.e., properties about which page
you’re navigated to ). Then, use the value of location.pathnameto display
the route that’s being visited:

Whoops404 with useLocation hook
The **useLocation** hook in React Router
is used to return the current location of
a React component.
The useLocation returns the current
location as an object and comes with
props such as pathname, state, search,
key, hash
Quick Recap
 So far, we have learnt the basics of implementing and working with the
React Router.

 Router is used once and wraps all components that will use routing.

 All Route components need to be wrapped with a Routes component,
which selects the component to render based on the window’s present
location.

 Link components can be used to facilitate navigation.

 These basics can get you pretty far, but they just scratch the surface of the
router’s capabilities.

Nesting Routes
 Sometimes, as users navigate our apps, we want some of the UI to stay in
place.

 In the past, solutions such as page templates and master pages have
helped web developers reuse UI elements.

 Let’s consider the simple starter website. We might want to create
subpages for the About page that will display additional content.

 When the user selects the About section, they should be defaulted to the
Company page under that section.

Nesting Routes
 The outline looks like this. The new routes that we need to create will reflect this hierarchy:

Nesting Routes – Create Placeholder
Components
 Stub the placeholder components
for our new sections in pages.jsx
 Services
 History
 Location.

Nesting Routes
 With those components
created, we can configure
the router starting with the
App.jsxfile.

 If you want to create a page
hierarchy with the routes, all
you need to do is nest the
Route components inside of
each other :

Dropdown Navigation Bar
 The simple NavBarcomponent has been replaced with a dropdown
Navbar.

 You can find that in the starter files.

Nesting Routes
 Once you’ve wrapped the nested routes with the About Route component,
you can visit these pages.

 If you open http://localhost:3000/about/history , you’ll just see the content from
the About page, but the History component doesn’t display.

 In order to get that to display, we’ll use another feature of React Router DOM:
the Outlet component.

 Outlet will let us render these nested components. We’ll just place it anywhere
we want to render child content.

 The React Router component (from react-router-dom) is used within
the parent route element to indicate where in the view a child route element
should be rendered.

Nesting Routes
 In the About component in pages.js, we’ll add
this under the

 Now this About component will be reused across
the entire section and will display the nested
components.

 The location will tell the app which subsection to
render.

 For example, when the location is
http://localhost:3000/about/history , the History
component will be rendered inside of the About
component.
The component isa placeholder within a parent
route's component that tells React Router where to render the
child routes. It acts like a dynamic container that changes its
content based on the current URL.

Redirect in React Router V6 with
Navigate Component
 Sometimes you want to redirect users from one route to another.

 For instance, we can make sure that if users try to access content via
http://localhost:3000/services , they get redirected to the correct route:
http://localhost:3000/about/services.

 Let’s modify our application to include redirects to ensure that our users
can access the correct content:

Navigate Component
 The Navigate component is among the built-in components shipped in with
React router version 6.

 It is used to programmatically redirect users to a different route within your
React application.

 It changes the current location when it is rendered

 It's a component wrapper around useNavigate hook.

 Internally it uses useNavigate to redirect the location. The props passed to
Navigate are the same as the arguments passed to the function returned by
useNavigate.
Navigate Component
Routing Parameters or URL parameters
 Another useful feature of the React Router is the ability to set up routing
parameters.

 Routing parameters, often referred to as params, aredynamic parts of the
URL that can change and are set to a specific value when a particular
route is matched.
 Routing parameters are variables that obtain their values from the URL.

 They’re extremely useful in data-driven web applications for filtering
content or managing display preferences.

Example of Route Parameters
 Product Page shows information about various products. Depending on the product that is
selected, we should see a different product id in the url. So that's a route parameter.
 For example, it can use a urlpath like “ products/1 ”.
 The product ID "1", which is called a URL parameter, can be extracted so the app can
display product information for that particular product.
 How to pass and retrieve route parameters.
 In the app.js, define a new route for our product details page.
 So route path should be something like /products and this is where we need to add a
parameter like :id.
<Route path ="/products/:id"components={ProductDetails} />
 Define the component ProductDetails and import it on the top.
 So to define a parameter we should prefix that parameter with a colon.
Route Parameters
 We can also define multiple parameters. for example, in our events route,
let's add a couple parameters, so events, for a given year, and for a given
month.

 Now back to our first route,

 Now back in the browser, let's go to the products page and click on one of
these products to see the details of that product.

Retrieving Route Parameters
 How to read route parameters in a React application.

 We can use useParamshook which lets you access the parameters defined
in your route.

 You can use theuseParamshook in the rendered component to retrieve the
parameters :

Optional Route Parameters
 What happens when we introduce two parameters, for example, year and
month for the event.

 Go to the events page, see the year and month in the url, but let's see what
happens if we exclude the month.

 We see “Page not found......”

 When we define parameters in our route, by default, those parameters are
required.

 So in this case, our urldid not match this path, because we didn't have a value
for the months parameter

 and then the matching continued and this last route matched the current url
and that's why we saw the Whoops404 component.

 So, how can we make these parameters optional.

Optional Route Parameters
 We need to append a question mark to them like this.

 This is part of regular expressions in JavaScript. In regular expressions when
you append a question mark to an expression, that means that expression is
optional.

 Now, let's save the changes, and go to our Events component. We can see
we have the value for the year parameter, but the month is empty

Query String Parameters
 Even though we can define optional parameters, but optional parameters
are still something you need to avoid.

 Sometimes, having these optional parameters in the urlmakes sense,
because they give a nice structure to our url's.

 For example, we can look at all the events, or events for a given year, or
events for a given month in a given year.

 But generally speaking, when we are dealing with optional parameters,
instead of including them in the route, we should include them in the query
string.

 Query string is what we append to a urlusing a question mark.

 Here we can have 0 or more parameters.

Query String Parameters
 For example, sortBy, newest, and approved true.

 So let's imagine we only want to see the approved events, and we want
these events to be sorted by newest.

 Now we can apply these query string parameters on a combinations of the
events route such as all events or events for a given year or a given year
and a given month.

 These optional parameters can always be added on the right side.

Retrieving Query String Parameters
 How to read Query String parameters in a React application.

 We can use useLocationhook which returns the current location object
(containing the pathname, search parameters, etc.),

 Query string parameters are in the location object:

 You can access the query string directly from the location.searchproperty,
which returns everything after the? in the URL.
 The value of this property

is our entire query string.

Query String Parameters
 Now, we don't want to manually read this string, parse it, and extract the
value for these parameters.

 There must be a better way.

 So in the terminal, let's install query-string.

 This is a very popular npm package for working with query strings.

Query String Parameters
 In the EventDetails component, if we get location.search, th e result is a
string.

 Parse this string using the query string package.

 So on the top, import, queryStringfrom query-string module.

 This object has a parse method, so,

 queryString.parse(location.search) will give us an object with properties
based on the parameters in query string.

Query String Parameters
Route parameters vs Query strings
 Route parameters are dynamic segments of the URL that are defined in the
route path. They are typically used to further personalize or specify what to
render in a particular view.

 Syntax: Route parameters are indicated by a colon: followed by the
parameter name in the route definition.

 Query strings are a way to pass additional data to the server in the URL
after the question mark ?. They are typically used for filtering, sorting, or
providing optional parameters.

 Syntax: Query strings consist of key-value pairs, separated by &. For
example, ?sort=asc&limit=10.