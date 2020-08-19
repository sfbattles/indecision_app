import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";

class IndecisionApp extends React.Component {
  state = {
    options: [],
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] })); // implicidly returning  an object
  };

  handlePick = () => {
    const randonNum = this.state.options
      ? Math.floor(Math.random() * this.state.options.length)
      : "-1";
    let selection = 0;
    if (randonNum !== -1) {
      selection = this.state.options[randonNum];
    }
    console.log(randonNum);
    alert(selection);
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component  update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    const subtitle = "Put your Life in the hands of the Computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          choices={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption} //single remove
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

export default IndecisionApp;
