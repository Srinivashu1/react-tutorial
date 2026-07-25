import React from "react";

class Apple extends React.Component {
  render() {
    const { appleinfo } = this.props;
    const { type,color } = appleinfo;
    return <div>I am a {color} {type} Apple</div>;
  }

}

export default Apple;