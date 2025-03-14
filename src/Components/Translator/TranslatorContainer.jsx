import "./TranslatorContainer.css";
import natoAlphabetObject from "../../data/nato-alphabet-data";
import { useState } from "react";

function TranslatorContainer() {
  const [inputValue, setInputValue] = useState("");
  const [renderedArray, setRenderedArray] = useState([]);

  function handleTranslate(e) {
    e.preventDefault();
    console.log(inputValue);

    const keysArray = Object.keys(natoAlphabetObject);
    const valuesArray = Object.values(natoAlphabetObject);
    const inputValueArray = inputValue.split("");
    const translationsArray = [];
    let value;
    let valueLetters;

    for (let i = 0; i < inputValueArray.length; i++) {
      let letter = inputValueArray[i];

      for (let j = 0; j < keysArray.length; j++) {
        if (letter === keysArray[j]) {
          value = valuesArray[j];

          valueLetters = value.split("");

          if (valueLetters.includes(" ") === true) {
            translationsArray.push(`"${value}"`);
          } else {
            translationsArray.push(value);
          }
        }
      }
    }

    setRenderedArray(translationsArray);
    console.log(valueLetters);
  }
  return (
    <div className="translator-container">
      <form action="">
        <h1 className="title">
          react <br /> <span>Nato alphabet translator</span>
        </h1>

        <div className="input-button-container">
          <input
            type="text"
            placeholder="word"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button onClick={handleTranslate}>translate</button>
        </div>
      </form>

      <div className="translation-container">
        {renderedArray.map((translation, i) => {
          if (i % 2 !== 0) {
            return (
              <TranslationsContainer
                key={i}
                translation={translation}
                className={"white"}
              />
            );
          } else {
            return (
              <TranslationsContainer
                key={i}
                translation={translation}
                className={"yellow"}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

function TranslationsContainer({ translation, className }) {
  return <p className={className}>{translation}</p>;
}

export default TranslatorContainer;
