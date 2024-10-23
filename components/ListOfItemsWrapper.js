export const ListOfItemsWrapper = ({ data }) => {
  const columnHeaders = Object.keys(data[0]);
  console.log(data[0], columnHeaders);

  return (
    <>
      <table>
        <thead>
          <tr>
            {columnHeaders.map((columnHeader) => (
              <th key={`key-${columnHeader}`}>{columnHeader}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataRow) => {
            return (
              <tr key={`rowKey-${dataRow.id}`}>
                {columnHeaders.map((dataItem) => {
                  return (
                    <td key={`dataKey-${dataRow.id}`}>{dataRow[dataItem]}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
