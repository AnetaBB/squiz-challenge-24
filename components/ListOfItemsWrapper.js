import { DataTable } from './list-of-items/data-table';

export const ListOfItemsWrapper = ({ data }) => {
  return (
    <>
      <DataTable data={data} />
    </>
  );
};
