import React from 'react';

function MyFirstComponent(props) {
    console.log(props)

    return (
    <React.Fragment>
        <div>
            {props.newAppText}
            <br/>
            Hello from My First Component
        </div>
        <div>
        <button onClick={() => { props.updateNewAppStateText() }}>
            Update New App State
        </button>
            
        </div>
    </React.Fragment>
    );
}
export default MyFirstComponent;
