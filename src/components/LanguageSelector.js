import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select a Language:
        <i
          className="flag us"
          style={{ padding: "5px" }}
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          style={{ padding: "5px" }}
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
