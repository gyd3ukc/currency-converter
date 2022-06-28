import "./App.css";
import Select from "./components/select/Select";
import { useEffect, useState } from "react";
import useData from "./data";
import Header from "./components/header/Header";

function App() {
  const [firstSelect, setFirstSelect] = useState();
  const [firstInput, setFirstInput] = useState("");
  const [secondSelect, setSecondSelect] = useState();
  const [secondInput, setSecondInput] = useState("");
  const data = useData()?.slice(0, 2);
  const base = 1;

  const firstInputCalculate = (value) => {
    setFirstInput(value);
    if (firstSelect == base) {
      setSecondInput((value * secondSelect).toFixed(2));
    }
    if (firstSelect > base || secondSelect > base) {
      setSecondInput(((value * firstSelect) / secondSelect).toFixed(2));
    }
    if (!value) {
      setSecondInput("");
    }
  };

  const secondInputCalculate = (value) => {
    setSecondInput(value);
    if (secondSelect == base) {
      setFirstInput((value * firstSelect).toFixed(2));
    }
    if (secondSelect > base || firstSelect > base) {
      setFirstInput(((value * secondSelect) / firstSelect).toFixed(2));
    }
    if (!value) {
      setFirstInput("");
    }
  };

  useEffect(() => {
    firstInputCalculate(firstInput);
  }, [firstSelect, secondSelect]);

  return (
    <>
      {!data ? (
        <div className="w-full">
          <p className="text-center text-red-500">loading</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="mx-6">
            <Header data={data} />
            <div className="grid justify-items-center">
              <div className="flex">
                <div>
                  <Select data={data} setSelect={setFirstSelect} />
                  <input
                    onChange={(e) => firstInputCalculate(e.target.value)}
                    value={firstInput}
                    type="number"
                    className="mt-4 max-w-[200px] form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="type only numbers"
                  />
                </div>
                <div className="mx-6">
                  <Select data={data} setSelect={setSecondSelect} />
                  <input
                    onChange={(e) => secondInputCalculate(e.target.value)}
                    value={secondInput}
                    type="number"
                    className="mt-4 max-w-[200px] form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="type only numbers"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
