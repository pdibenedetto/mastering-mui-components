import React from "react";
import Button from "@mui/material/Button";
import { useDemoData } from "@mui/x-data-grid-generator";

import {
  DataGrid,
  GridToolbar,
  gridFilteredSortedRowIdsSelector,
  selectedGridRowsSelector,
} from "@mui/x-data-grid";

const getSelectedRowsToExport = ({ apiRef }) => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }

  return gridFilteredSortedRowIdsSelector(apiRef);
};

export default function CheckboxSelectionGrid() {
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    maxColumns: 5,
  });

  return (
    <div style={{ width: "100%" }}>
      <Button
        sx={{ mb: 1 }}
        onClick={() => setCheckboxSelection(!checkboxSelection)}
      >
        Toggle checkbox selection
      </Button>
      <div style={{ height: 400 }}>
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              printOptions: {
                getRowsToExport: getSelectedRowsToExport,
                includeCheckboxes: true,
              },
            },
          }}
          checkboxSelection={checkboxSelection}
          {...data}
        />
      </div>
    </div>
  );
}
