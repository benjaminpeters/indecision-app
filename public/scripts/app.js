"use strict";

var showDetails = false;

var onShowDetails = function onShowDetails(e) {
    showDetails = !showDetails;
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onShowDetails },
            showDetails ? "Hide Details" : "Show Details"
        ),
        React.createElement(
            "p",
            null,
            showDetails ? "Here are some details" : undefined
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderApp();
