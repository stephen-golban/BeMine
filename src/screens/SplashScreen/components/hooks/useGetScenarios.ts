import { useState } from 'react';
import { IScenario } from '../../SplashScreen.types';

const useGetScenarios = (scenarios: IScenario[]) => {
  const [data, setData] = useState(scenarios.map((value: IScenario, index: number) => ({ ...value, key: index })));

  function addNextElements() {
    let lastItem = data[data.length - 1].key;
    const lengthPropsData = scenarios.length - 1;

    if (lastItem === lengthPropsData) {
      lastItem = -1;
    }
    if (data.length - 1 > lengthPropsData * 2) {
      setData([...data.slice(lengthPropsData), data[lastItem + 1], data[lastItem + 2]]);
    }
    setData([...data, data[lastItem + 1], data[lastItem + 2]]);
  }

  return {
    data,
    addNextElements,
  };
};

export default useGetScenarios;
