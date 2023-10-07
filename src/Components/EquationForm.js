import React, { useEffect, useState, useRef } from 'react';

function EquationForm({ data, setData, mode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    updateData()

    return () => {

    }
  }, [mode])
  const [error, setError] = useState("")
  const formRef = useRef(null);
  function updateData() {
    if (!formRef.current) return;
    const inputs = formRef.current.querySelectorAll('input[type="number"]');
    let updatedVariables = { ...data.variables };

    for (let i = 0; i < inputs.length; i++) {
      const { name, value } = inputs[i];

      if (parseFloat(value) <= 0) {
        setError(`error: ${name} cannot be less than or equal to 0!`);
        break; 
      } else if (isNaN(value)) {
        setError(`error: ${name} is not a number!`);
        break;
      } else {
        setError("")
        updatedVariables[name] = value;
      }
    }
    if (error !="")return
    setData((prevData) => ({
      ...prevData,
      data: {
        ...prevData.data,
        variables: updatedVariables,
      },
    }));
  }

  //handle changes for dynamic mode
  const handleChange = (e) => {
    if (mode == 'Performance') return
    const { name, value } = e.target;
    if (parseFloat(e.target.value) <= 0) {
      setError(`error: ${name} cannot be less than or equal to 0!`);
      setData((prevData) => ({
        ...prevData,
        data: {
          ...prevData.data,
          variables: {
            ...prevData.data.variables,
            [name]: "",
          },
        },
      }));
      return
    }
    else if (isNaN(e.target.value)) {
      setError(`error: ${name} is not a number!`);
      setData((prevData) => ({
        ...prevData,
        data: {
          ...prevData.data,
          variables: {
            ...prevData.data.variables,
            [name]: "",
          },
        },
      }));
      return
    }
    else {
      setError("")
    }
    setData((prevData) => ({
      ...prevData,
      data: {
        ...prevData.data,
        variables: {
          ...prevData.data.variables,
          [name]: value,
        },
      },
    }));
  };



  return (

    <form className="col-3" ref={formRef}>
      {error}
      {Object.keys(data.variables).map((variableName) => (
        <div key={variableName} className="mb-3">
          <label htmlFor={variableName} className="form-label">
            {data.variableLabels[variableName]}
          </label>
          <input
            type="number"
            className="form-control"
            id={variableName}
            name={variableName}
            defaultValue={data.variables[variableName]}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
      ))}
      <div>
        {mode == "Performance" ? <div className='btn btn-primary d-inline-block' onClick={() => updateData()} >Calculate</div> : <></>}
      </div>
    </form>
  );
}

export default EquationForm;
