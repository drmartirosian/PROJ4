import React, { Component } from "react";
import AddProductForm from "../../components/AddProduct/AddProductForm";
// import "./AddProductPage.css";

class AddProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
    }

    updateMessage = msg => {
        this.setState({ message: msg });
    };

    render() {
        return (
        <div className="AddProductPage">
            <AddProductForm {...this.props} updateMessage={this.updateMessage} />
            <p>{this.state.message}</p>
        </div>
        );
    }
}

export default AddProductPage;
