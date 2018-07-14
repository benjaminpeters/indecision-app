console.log("App.js is running");

var app = {
    title: "Indecision App",
    subTitle: "Put your life in the hands of a computer",
    options: ['One',' Two']
}

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options && app.options.length > 0 ? "Here are your options: " + app.options : "No Options" }</p>
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
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age  && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template , appRoot);