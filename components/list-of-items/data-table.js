import { DataRow } from './data-row';
import { TableHeaders } from './table-headers';

export const DataTable = ({ data }) => {
  const columnHeaders = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <TableHeaders columnHeaders={columnHeaders} />
      </thead>
      <tbody>
        <DataRow data={data} columnHeaders={columnHeaders} />
      </tbody>
    </table>
  );
};
