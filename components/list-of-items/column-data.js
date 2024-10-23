export const ColumnData = ({ columnHeaders, dataRow }) => {
  return (
    <>
      {columnHeaders.map((dataItem) => {
        return <td key={`dataKey-${dataRow.id}`}>{dataRow[dataItem]}</td>;
      })}
    </>
  );
};
