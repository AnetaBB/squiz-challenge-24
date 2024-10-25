import { DataRow } from './data-row';
import { TableHeaders } from './table-headers';

export const DataTable = ({ data }) => {
  if (!data || !data[0]) {
    return <div>Loading data...</div>;
  }

  const columnHeaders = Object.keys(data[0]);

  return (
    <table className='border-solid border text-center border-separate border-slate-500 border-spacing-1.5 rounded-md px-6 pt-2 pb-6'>
      <thead className='bg-sky-200'>
        <TableHeaders columnHeaders={columnHeaders} />
      </thead>
      <tbody>
        <DataRow data={data} columnHeaders={columnHeaders} />
      </tbody>
    </table>
  );
};
