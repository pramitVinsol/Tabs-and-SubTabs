import React from "react";

function TabContent(props) {
  return (
    <div>
      <h3>{props.heading}</h3>
      <p>{props.content}</p>
    </div>
  )
}

TabContent.defaultProps = {
  children: ''
};

export default TabContent;