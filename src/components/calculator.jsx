import React, { useReducer, useRef, useEffect } from "react";
import Row from "./row";
import calculatorReducer from "../reducers/calculator-reducer";

const Calculator = () => {
  const [rows, dispatch] = useReducer(
    calculatorReducer.reducer,
    calculatorReducer.initialState
  );

  const result = rows.reduce((total, row) => {
    if (row.enabled) {
      let value = row.value || 0;
      return row.operation === "+" ? total + value : total - value;
    } else {
      return total;
    }
  }, 0);

  const newAddRowReference = useRef(null);
  useEffect(() => {
    if (newAddRowReference.current) {
      newAddRowReference.current.focus();
      newAddRowReference.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [rows.length]);

  return (
    <div className="calculator">
      <h2 className="text-center my-5">Simple Calculator Test Project</h2>
      <div className="row my-2">
        <div className="col-12 col-md-6">
          <button
            className="add-button btn btn-success  me-2 mb-1"
            onClick={() => {
              dispatch({ type: calculatorReducer.ACTIONS.ADD_ROW });
            }}
          >
            Add Row
          </button>
          <button
            className="add-button btn btn-danger "
            onClick={() =>
              dispatch({ type: calculatorReducer.ACTIONS.CLEAR_ALL })
            }
          >
            Reset All
          </button>
        </div>
        <div className="col-12 col-md-6 text-end">
          <h3>Result: {result.toLocaleString("en-US")}</h3>
        </div>
      </div>

      <div className="row-container p-3">
        {rows.map((row, index) => (
          <Row
            key={index}
            row={row}
            index={index}
            setRowOperation={(operation) =>
              dispatch({
                type: calculatorReducer.ACTIONS.SET_ROW_OPERATION,
                payload: { index, value: operation },
              })
            }
            toggleRowStatus={() =>
              dispatch({
                type: calculatorReducer.ACTIONS.TOGGLE_ROW_STATUS,
                payload: index,
              })
            }
            removeRow={() =>
              dispatch({
                type: calculatorReducer.ACTIONS.REMOVE_ROW,
                payload: index,
              })
            }
            handleInputChange={(value) =>
              dispatch({
                type: calculatorReducer.ACTIONS.INPUT_CHANGE,
                payload: { index, value },
              })
            }
            inputFieldRef={
              index === rows.length - 1 ? newAddRowReference : null
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
