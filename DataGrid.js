import React from 'react';

const DataGrid = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.field}>{column.headerName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={`${index}-${column.field}`}>{row[column.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;