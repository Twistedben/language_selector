import React from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // Sets up context. Has to be declared exactly like this. Static adds a property to class itself (Button.contextTyoe = LanguageContext). This declaration can be used instead outside of the class
  // Context Approach: This.context
  // static contextType = LanguageContext;
  // Consumer Approach:
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {/* Use Consumer when we need multiple Contexts objects */}
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // Context Approach: This.context
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    // return <button className="ui button primary">{text}</button>;
    // Consumer Approach: A function must be passed below a Consumer as a child.
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
