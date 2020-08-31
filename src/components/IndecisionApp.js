import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal"

class IndecisionApp extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    options: props.options,
    selectedOption: undefined
    };
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] })); // implicidly returning  an object
  };

  handlePick = () => {
    const randonNum = Math.floor(Math.random() * this.state.options.length)
    const selection = this.state.options[randonNum];
    this.setState(() => {
      return {options: selection}
      })
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
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption} //single remove
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal 
          selectedOption = {this.state.selectedOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

export default IndecisionApp;
