import { ColumnData } from './column-data';

export const DataRow = ({ data, columnHeaders }) => {
  return (
    <>
      {data.map((dataRow) => {
        return (
          <tr key={`rowKey-${dataRow.id}`}>
            <ColumnData columnHeaders={columnHeaders} dataRow={dataRow} />
          </tr>
        );
      })}
    </>
  );
};
