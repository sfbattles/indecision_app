import React from "react";

class AddOption extends React.Component {
  state = {
    errorMessage: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault(); //stop full page refresh
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
      errorMessage: error,
    }));
  }
  render() {
    return (
      <div>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
