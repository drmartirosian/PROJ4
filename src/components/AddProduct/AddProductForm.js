import React, { Component } from "react";
import userService from "../../utils/userService";

class AddProductForm extends Component {
    state = {
        name: "",
        description: "",
        price: null,
    };

    handleChange = e => {
        this.props.updateMessage("");
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await userService.addProd(this.state);
            this.props.history.push("/users");
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    };

    isFormInvalid() {
        return !(
        this.state.name &&
        this.state.description &&
        this.state.price
        );
    }

    render() {
        return (
        <div className="Modal">
            <header className="header-footer">Add Product</header>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>


                <div className="form-group">
                    <div className="col-sm-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange}
                    />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-12">
                    <input
                        type="description"
                        className="form-control"
                        placeholder="Description"
                        value={this.state.description}
                        name="description"
                        onChange={this.handleChange}
                    />
                    </div>
                </div>


                <div className="form-group">
                    <div className="col-sm-12">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                        value={this.state.price}
                        name="price"
                        onChange={this.handleChange}
                    />
                    </div>
                </div>


                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-default" >Add {this.state.name}</button>
                        &nbsp;&nbsp;
                        <button onClick={() => this.props.history.push("/")}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}

export default AddProductForm;
