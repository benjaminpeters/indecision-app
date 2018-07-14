"use strict";

console.log("App.js is running");

var app = {
    title: "Indecision App",
    subTitle: "Put your life in the hands of a computer",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderApp();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            "p",
            null,
            app.subTitle
        ),
        React.createElement(
            "p",
            null,
            app.options && app.options.length > 0 ? "Here are your options: " + app.options : "No Options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        numbers.map(function (number) {
            return React.createElement(
                "p",
                { key: number },
                "Number: ",
                number
            );
        }),
        React.createElement(
            "ol",
            null,
            app.options.map(function (item) {
                return React.createElement(
                    "li",
                    { key: item },
                    "Item: ",
                    item,
                    " "
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
