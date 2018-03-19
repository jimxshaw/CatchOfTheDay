import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {  
  myInput = React.createRef();

  goToStore = (event) => {
    // Stop the default behavior, which is 
    // submitting the form.
    event.preventDefault();

    // Get the text from the input.
    console.log(this.myInput);

    // Change the page to /store/userInputText.
    console.log("Entering the store!");
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
