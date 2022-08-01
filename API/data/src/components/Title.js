import React from "react";

function Title() {
    console.log('Rendering Title');
  return <div>Using callBacks</div>;
}

export default React.memo(Title);
