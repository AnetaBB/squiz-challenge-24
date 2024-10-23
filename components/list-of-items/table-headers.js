export const TableHeaders = ({ columnHeaders }) => {
  return (
    <tr>
      {columnHeaders.map((columnHeader) => (
        <th key={`key-${columnHeader}`}>{columnHeader}</th>
      ))}
    </tr>
  );
};
