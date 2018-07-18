
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            visibility: false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button
                     onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                {(this.state.visibility  &&
                <div>
                    <p>Here are some details</p>
                </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let showDetails = false;

// const onShowDetails = (e) => {
//     showDetails = !showDetails;
//     renderApp();
// };

// const renderApp = () => {
//     const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={onShowDetails}>{showDetails ? "Hide Details" : "Show Details"}</button>
//         <p>{ showDetails ? "Here are some details" : undefined}</p>
//     </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('app');

// renderApp();