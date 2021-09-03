import React, { useState } from "react";
import { countDuplicateWords } from "../../utils/utility";

const Form = () => {
  const [str, setStr] = useState("");
  const [wordMap, setWordMap] = useState(null);

  const handelChange = (e) => {
    setStr(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const wordCountMap = countDuplicateWords(str);
    setStr("");
    setWordMap(wordCountMap);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="enter task"
          value={str}
          onChange={handelChange}
          required
        />
        <button type="submit" onClick={handelSubmit}>
          SUBMIT
        </button>
      </form>

      <div>
        {wordMap && (
          <table>
            <tr>
              <th>Word</th>
              <th>No. of occurence</th>
            </tr>
            {Object.keys(wordMap).map((word) => (
              <tr>
                <th>{word}</th>
                <th> {wordMap[word]}</th>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default Form;
