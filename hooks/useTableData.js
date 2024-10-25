'use client';

import { useEffect, useState } from 'react';

export const useTableData = (data) => {
  //state variables that contain values that are controlled by controlls for sorting and filtering table data
  const [tableData, setTableData] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [nameOrder, setNameOrder] = useState('');
  const [employeesOrder, setEmployeesOrder] = useState('');

  // two static variables which contain lists for selects
  // making array of countries
  const countries = [...new Set(data.map((dataItem) => dataItem.country))];

  // making array of industries
  const industries = [...new Set(data.map((dataItem) => dataItem.industry))];

  //functions used by controlls for sorting and filtering, they affect state variables
  const changeCountryFilter = (value) => {
    setCountryFilter(value);
  };

  const changeIndustryFilter = (value) => {
    setIndustryFilter(value);
  };

  const changeNameOrder = (value) => {
    setNameOrder(value);
  };

  const changeEmployeesOrder = (value) => {
    setEmployeesOrder(value);
  };

  useEffect(() => {
    if (data) {
      setTableData([...data]);
    }
  }, []);

  useEffect(() => {
    if (countryFilter && data) {
      setTableData(data.filter((item) => item.country === countryFilter));
      setIndustryFilter('');
    }
  }, [countryFilter]);

  useEffect(() => {
    if (industryFilter && data) {
      setTableData(data.filter((item) => item.industry === industryFilter));
      setCountryFilter('');
    }
  }, [industryFilter]);

  useEffect(() => {
    const names = [...tableData];
    switch (nameOrder) {
      case 'name-ascending':
        names.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        setTableData(names);
        setEmployeesOrder('');
        break;

      case 'name-descending':
        names.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
        setTableData(names);
        setEmployeesOrder('');
        break;

      default:
        break;
    }
  }, [nameOrder]);

  useEffect(() => {
    const employees = [...tableData];
    switch (employeesOrder) {
      case 'employees-ascending':
        employees.sort((a, b) => {
          if (a.numberOfEmployees < b.numberOfEmployees) {
            return -1;
          }
          if (a.numberOfEmployees > b.numberOfEmployees) {
            return 1;
          }
          return 0;
        });
        setTableData(employees);
        setNameOrder('');
        break;

      case 'employees-descending':
        employees.sort((a, b) => {
          if (a.numberOfEmployees < b.numberOfEmployees) {
            return 1;
          }
          if (a.numberOfEmployees > b.numberOfEmployees) {
            return -1;
          }
          return 0;
        });
        setTableData(employees);
        setNameOrder('');
        break;

      default:
        break;
    }
  }, [employeesOrder]);

  return {
    tableData,
    countries,
    industries,
    countryFilter,
    industryFilter,
    nameOrder,
    employeesOrder,
    changeCountryFilter,
    changeIndustryFilter,
    changeEmployeesOrder,
    changeNameOrder,
  };
};
