import React from "react";

const Row = ({
  row,
  index,
  removeRow,
  toggleRowStatus,
  setRowOperation,
  handleInputChange,
  inputFieldRef,
}) => {
  return (
    <div className={`calculator-row row mb-3 ${row.enabled ? "" : "disabled"}`}>
      <div className="col-4 col-md-5">
        <input
          type="number"
          className="form-control text-center"
          value={row.value || ""}
          ref={inputFieldRef}
          placeholder="Input Value"
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>

      <div className="col-2 col-md-3">
        <select
          className={`form-control text-center text-white ${
            row.operation === "+" ? "bg-success" : "bg-danger"
          }`}
          onChange={(e) => setRowOperation(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
      </div>

      <div className="col-6 col-md-4 text-end">
        <button
          className="btn btn-sm  btn-outline-danger me-2"
          onClick={() => removeRow(index)}
        >
          Remove
        </button>

        <button
          className={`btn btn-sm  ${
            row.enabled ? "btn-warning" : "btn-success"
          }`}
          onClick={toggleRowStatus}
        >
          {row.enabled ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
};

export default Row;
