import React from "react";

function Tab(props) {
  return (
    <div onClick={props.clicked} className={"tab " + props.activeClass}>
      <div className="topic">{props.tabName}</div>
      <div className="sub-tabs">{props.children}</div>
    </div>
  )
};

Tab.defaultProps = {
  activeClass: '',
  children: '',
  clicked: () => {},
  tabName: ''
};

export default Tab;