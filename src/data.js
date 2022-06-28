import { useEffect, useState } from "react";

const useData = () => {
  const [state, setState] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
        );
        if (response.status === 200) {
          let data = await response.json();
          setState(data);
        } else {
          throw "Error fetching currency list";
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return state;
};

export default useData;
