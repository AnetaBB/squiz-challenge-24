import { DataRow } from './data-row';
import { TableHeaders } from './table-headers';
import './styles.scss';

export const DataTable = ({ data }) => {
  const columnHeaders = Object.keys(data[0]);

  return (
    <table className='border-solid border border-red-800'>
      <thead>
        <TableHeaders columnHeaders={columnHeaders} />
      </thead>
      <tbody>
        <DataRow data={data} columnHeaders={columnHeaders} />
      </tbody>
    </table>
  );
};
