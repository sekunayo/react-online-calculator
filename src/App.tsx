import { useState } from "react";
import { Button } from "./components/Button";
import styles from "./app.module.scss";

const keys = {
  numbers: [".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  arithmethic: ["/", "x", "-", "+", "=", "%"],
  other: ["AC"],
};

export const App = () => {
  const [value, setValue] = useState<string[]>([]);
  const [result, setResult] = useState(0);

  const handleClick = (buttonValue: string) => {
    if (buttonValue === "=") {
      return handleResult();
    } else {
      const newArrayValue = [...value, buttonValue];
      setValue(newArrayValue);
    }
  };

  const handleMainOperations = (buttonValue: string) => {
    if (buttonValue === "AC") {
      setValue([]);
      setResult(0);
    }
  };

  const handleResult = () => {
    let result = value.toString();

    let leftSide = 0;
    let rightSide = 0;

    keys.arithmethic.map((element) => {
      if (result.includes(element)) {
        const newArray = result.split(element);

        leftSide = Number(newArray[0].split(",").join(""));
        rightSide = Number(newArray[1].split(",").join(""));

        switch (element) {
          case "+":
            let plus = leftSide + rightSide;
            setResult(plus);
            break;
          case "%":
            let modulo = leftSide % rightSide;
            setResult(modulo);
            break;
          case "-":
            let subtract = leftSide - rightSide;
            setResult(subtract);
            break;
          case "x":
            let multiply = leftSide * rightSide;
            setResult(multiply);
            break;
          case "/":
            let divide = leftSide / rightSide;
            setResult(divide);
        }
      }
    });
  };

  return (
    <div className={styles["app__calculator-container"]}>
      <div className={styles["app__calculator"]}>
        <div className={styles["app__calculator-middle"]}>
          {value.map((element, index) => {
            return (
              <p key={index} className={styles["app__calculator-display"]}>
                {element}
              </p>
            );
          })}
        </div>
        <div className={styles["app__calculator-result"]}>
          <h2>{result}</h2>
        </div>
        <div className={styles["app__calculator-bottom"]}>
          <div className={styles["app__calculator-bottom-buttons"]}>
            {keys.other.map((element, index) => {
              return (
                <Button
                  operatorType="other"
                  key={index + 1}
                  handleClick={handleMainOperations}
                >
                  {element}
                </Button>
              );
            })}
            {keys.arithmethic.map((element, index) => {
              return (
                <Button
                  operatorType="arithmetic"
                  key={index + 1}
                  handleClick={handleClick}
                >
                  {element}
                </Button>
              );
            })}
            {keys.numbers.map((element, index) => {
              return (
                <Button
                  operatorType="numbers"
                  key={index + 1}
                  handleClick={handleClick}
                >
                  {element}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
