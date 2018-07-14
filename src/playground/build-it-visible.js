
let showDetails = false;

const onShowDetails = (e) => {
    showDetails = !showDetails;
    renderApp();
};

const renderApp = () => {
    const template = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onShowDetails}>{showDetails ? "Hide Details" : "Show Details"}</button>
        <p>{ showDetails ? "Here are some details" : undefined}</p>
    </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderApp();