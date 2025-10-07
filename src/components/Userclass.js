import React from "react";

class Userclass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                login: "",
                type: "",
                location: "",
                avatar_url: "https://via.placeholder.com/150"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/charan-derangula");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }
    

    render() {

        const {login, type, avatar_url} = this.state.userInfo;
        const {count} = this.state;

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick = {() => {
                    this.setState({
                        count: count + 1
                    })
                }}>Increment</button>
                <h2>Developer: {login}</h2>
                <h3>Type of GitHub User: {type}</h3>
            </div>
        );
    }
}

export default Userclass;