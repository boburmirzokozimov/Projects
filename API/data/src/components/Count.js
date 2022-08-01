import React from "react";

function Count({count,text}) {
    console.log('Rendering ', text);
  return <div>{count}</div>;
}

export default React.memo(Count) ;
