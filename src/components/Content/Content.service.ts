import { IRow } from "../../types/common.types";
import { findElementWithID, replaceChangedElements, replaceElementWithID } from "./utils";

export const createOrUpdateLocalData = (
  result: { changed: IRow[], current: IRow }, 
  type: string, 
  stringData: any,
  setData: React.Dispatch<React.SetStateAction<IRow[]>>,
  setRowNameValue: React.Dispatch<React.SetStateAction<string | null>>,
  setSalaryValue: React.Dispatch<React.SetStateAction<number>>,
  setEquipmentCostsValue: React.Dispatch<React.SetStateAction<number>>,
  setEstimatedProfitValue: React.Dispatch<React.SetStateAction<number>>,
  setOverheadsValue: React.Dispatch<React.SetStateAction<number>>,
) => {
  const changed = result.changed;
  const current = result.current;

  setData((prev) => {
    let oldData = [...prev];

    if (changed.length) replaceChangedElements(changed, oldData);

    const parent = stringData.id;

    if (type === 'create' && parent) {
      const parentEl = findElementWithID(oldData, parent);

      if (parentEl && parentEl.child) {
        parentEl.child.push(current);
      } else if (parentEl) {
        parentEl.child = [current];
      }

    } else if (type === 'edit') {
      replaceElementWithID(oldData, stringData.id, current);
    } else {
      oldData = [current];
      setRowNameValue('');
      setEquipmentCostsValue(0);
      setEstimatedProfitValue(0);
      setOverheadsValue(0);
      setSalaryValue(0);
    }

    return [...oldData];
  });
}