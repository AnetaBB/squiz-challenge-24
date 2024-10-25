'use client';

import { useEffect, useState } from 'react';

export const useTableData = (data) => {
  const [tableData, setTableData] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [nameOrder, setNameOrder] = useState('');
  const [employeesOrder, setEmployeesOrder] = useState('');

  // making array of countries
  let countries = JSON.parse(localStorage.getItem('countries'));
  if (!countries && data) {
    countries = [...new Set(data.map((dataItem) => dataItem.country))];
    localStorage.setItem('countries', JSON.stringify(countries));
  }

  // making array of industries
  let industries = JSON.parse(localStorage.getItem('industries'));
  if (!industries && data) {
    industries = [...new Set(data.map((dataItem) => dataItem.industry))];
    localStorage.setItem('industries', JSON.stringify(industries));
  }

  const changeCountryFilter = (value) => {
    // localStorage.setItem('country-filter', value);
    setCountryFilter(value);
  };

  const changeIndustryFilter = (value) => {
    // localStorage.setItem('industry-filter', value);
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

    // localStorage.removeItem('country-filter');
    // localStorage.removeItem('industry-filter');
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
