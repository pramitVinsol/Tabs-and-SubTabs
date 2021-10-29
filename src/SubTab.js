import React from 'react';

function SubTab(props) {
    return (
        <div onClick={props.clicked} className={"sub-tab " + props.activeClass}>
            {props.subTabName}
        </div>
    )
}

export default SubTab;