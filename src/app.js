console.log("App.js is running");

var app = {
    title: "Indecision App",
    subTitle: "Put your life in the hands of a computer"
}

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: "Benny",
    age: 28,
    location: "TO"
};

var userName = 'Ben'
var userAge = 28;
var userLocation = "TO"

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template , appRoot);