
import React from 'react';

const MyParagraph = (props) => {
    console.log ("DEMO LOG");
    return <p> {props.showParagraph && "This is a toggle statement"}</p>
    

}

// export default React.memo(MyParagraph);

export default MyParagraph;