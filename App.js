import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div className="container">
      <Button name={"BUTTON 1"} myclass={"button-one"} />
      <Button name={"BUTTON 2"} myclass={"button-two"} />
      <Button name={"BUTTON 3"} myclass={"button-three"} />
    </div>
  );
};

export default App;
