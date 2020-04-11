import React from "react";
import Button from "@material-ui/core/Button";

function Square(props) {
  return (
    <Button 
      variant="contained" 
      onClick={props.onClick}
      style={{height: 100, width: 100, margin: 2, fontSize: 'xx-large'}}>{props.value === null? '': props.value}</Button>
  );
}

export default Square;
