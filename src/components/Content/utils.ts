import { IRow } from "../../types/common.types";

export  const replaceChangedElements = (changed: IRow[], data: any) => {
  changed.forEach((el: IRow) => {
    let index = data.findIndex((obj: IRow) => obj.id === el.id);
    if (index > 0) {
      data[index] = el;
    } else if (data.child) {
      replaceChangedElements(changed, data.child)
    }
  });
};

export const findElementWithID = (data: IRow[], parent: number): IRow | null => {
  for (const obj of data) {
    if (obj.id === parent) return obj;

    if (obj.child) {
      const result = findElementWithID(obj.child, parent);
      if (result) return result;
    }
  }

  return null;
};

export const replaceElementWithID = (data: IRow[] | undefined, id: number, current: IRow): void => {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        const element = data[i];
        element.rowName = current.rowName;
        element.equipmentCosts = current.equipmentCosts;
        element.estimatedProfit = current.estimatedProfit;
        element.overheads = current.overheads;
        element.salary = current.salary;
        return;
      }
  
      if (data[i].child) {
        replaceElementWithID(data[i].child, id, current);
      }
    }
  }
};

export const removeElementWithID = (data: IRow[] | undefined, id: number): void => {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data.splice(i, 1);
        return;
      }
  
      if (data[i].child) {
        removeElementWithID(data[i].child, id);
      }
    }           
  }
};