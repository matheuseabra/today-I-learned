// constructing and HTTP Request with Ajax XMLHttpRquest object

// Instatiate a new HTTP Request
const Http = new XMLHttpRequest();

// Store the URL to be fetched in a variable
const url='https://jsonplaceholder.typicode.com/posts';

// Open a connection of GET and pass the URL as a parameter
Http.open("GET", url);

//Finally, send the request
Http.send();

// Get the response and show in the console

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}
