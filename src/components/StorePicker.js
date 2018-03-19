import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {  
  myInput = React.createRef();

  goToStore = (event) => {
    // Stop the default behavior, which is 
    // submitting the form.
    event.preventDefault();

    // Get the text from the input.
    const storeName = this.myInput.value.value;

    // Use push state to change the page 
    // to /store/userInputText.
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            required 
            type="text"
            ref={this.myInput} 
            placeholder="Store Name" 
            defaultValue={getFunName()} 
          />
          <button type="submit">Visit Store →</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
