import { useState } from "react";
import axios from "axios";

const Display = (props) => {
  const [myArray, setMyArray] = useState([]);

  let valueFromForm = Object.values(props);
  let value = valueFromForm.join("");

  return (
    <div className="wrapper">
      <div className="textWrapper">
        <h1 className="instructionPoint">3</h1>
        <p>Click on the button below to return the data from the backend.</p>
        <hr />
      </div>

      <div className="buttonWrapper">
        <button
          onClick={() => {
            axios
              .get("http://localhost:8090/numbers/" + value)
              .then(function (response) {
                setMyArray(Object.values(response.data));
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .then(function () {
                //always executed
              });
          }}
        >
          Show results
        </button>
      </div>

      <div className="listWrapper">
        {myArray.map((creditCardNumber, index) => (
          <div key={index}>
            <p className="listItem">{creditCardNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
