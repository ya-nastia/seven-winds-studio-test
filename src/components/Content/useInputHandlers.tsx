import React, { useCallback, useState } from "react";

export const useInputHandlers = () => {
  const [rowNameValue, setRowNameValue] = useState<string | null>('');
  const [salaryValue, setSalaryValue] = useState<number>(0);
  const [equipmentCostsValue, setEquipmentCostsValue] = useState<number>(0);
  const [overheadsValue, setOverheadsValue] = useState<number>(0);
  const [estimatedProfitValue, setEstimatedProfitValue] = useState<number>(0);

  const handleRowNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRowNameValue(e.target.value);
  }, []);

  const handleSalaryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSalaryValue(Number(e.target.value));
  }, []);

  const handleEquipmentCostsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEquipmentCostsValue(Number(e.target.value));
  }, []);

  const handleOverheadsValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setOverheadsValue(Number(e.target.value));
  }, []);

  const handleEstimatedProfitChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEstimatedProfitValue(Number(e.target.value));
  }, []);

  return {
    rowNameValue,
    salaryValue,
    equipmentCostsValue,
    overheadsValue,
    estimatedProfitValue,
    setRowNameValue,
    setSalaryValue,
    setEquipmentCostsValue,
    setEstimatedProfitValue,
    setOverheadsValue,
    handleRowNameChange,
    handleSalaryChange,
    handleEquipmentCostsChange,
    handleOverheadsValueChange,
    handleEstimatedProfitChange,
  };
};