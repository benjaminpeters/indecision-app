console.log("App.js is running");

const app = {
    title: "Indecision App",
    subTitle: "Put your life in the hands of a computer",
    options: ['One',' Two']
}

// JSX - JavaScript XML
const template = (
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

const user = {
    name: "Benny",
    age: 28,
    location: "TO"
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age  && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template , appRoot);