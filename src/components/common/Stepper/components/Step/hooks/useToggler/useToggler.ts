import React from 'react';

import useList from 'react-use/lib/useList';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import between from './between';
import { useTogglerProps } from './useToggler.types';
import { StepDataType } from '@/components/common/Stepper/Stepper.types';

/**
 * It toggles the value of the key in the array of objects
 */
const useToggler = ({ data, isSingleToggle }: useTogglerProps) => {
  const [previousIndex, setPreviousIndex] = React.useState<number>(0);

  const [mutatedData, { reset: resetMutatedData, updateAt }] = useList(data);
  const [selectedItems, setSelectedItems] = React.useState<StepDataType[]>([]);

  /**
   * It toggles the selected property of the current element in the array and sets the previous index
   * to the current index only when the max selected values is 1
   * @param idx - The index of the element that was clicked
   * @returns The return value of the function is the value of the last expression evaluated.
   */
  const toggle = (idx: number) => {
    const element = mutatedData[idx];

    /* Setting the previous index to the current index only when the max selected value is 1 */
    if (isSingleToggle) {
      setPreviousIndex(idx);
    }

    if (!element.selected) {
      if (isSingleToggle) {
        updateAt(previousIndex, { ...mutatedData[previousIndex], selected: false });
        return updateAt(idx, { ...element, selected: true });
      } else {
        return updateAt(idx, { ...element, selected: true });
      }
    }

    return updateAt(idx, { ...element, selected: false });
  };

  const resetToggler = () => {
    setPreviousIndex(0);
    setSelectedItems([]);
    return resetMutatedData();
  };

  useUpdateEffect(() => {
    if (mutatedData.length > 0) {
      const selected = mutatedData.filter((item) => item.selected);
      setSelectedItems(selected);
    }
  }, [mutatedData]);

  const isValid = between(selectedItems.length, 1, isSingleToggle ? 1 : data.length);

  return { mutatedData, toggle, isValid, selectedItems, resetToggler };
};

export default useToggler;
