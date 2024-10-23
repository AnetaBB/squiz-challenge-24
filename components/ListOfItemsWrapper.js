import { Table } from 'lucide-react';
import { ColumnData } from './list-of-items/column-data';
import { DataRow } from './list-of-items/data-row';
import { TableHeaders } from './list-of-items/table-headers';

export const ListOfItemsWrapper = ({ data }) => {
  const columnHeaders = Object.keys(data[0]);

  return (
    <>
      <table>
        <thead>
          <TableHeaders columnHeaders={columnHeaders} />
        </thead>
        <tbody>
          <DataRow data={data} columnHeaders={columnHeaders} />
        </tbody>
      </table>
    </>
  );
};
