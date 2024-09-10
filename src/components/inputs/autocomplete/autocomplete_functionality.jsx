import { useState } from 'react'
import { Autocomplete, TextField } from "@mui/material";

export function AutocompleteFunctionality() {
  const [value, setValue] = useState(null);
  const options = [
    { name: "Apple", year: 2022 },
    { name: "Banana", year: 2020 },
    { name: "Pear", year: 2020 },
    { name: "Orange", year: 2022 }
  ];

  console.log(value);

  return (
    <Autocomplete
        freeSolo
        value={value}
        onBlur={(event) =>
            event.target.value !== value ? setValue(event.target.value) : null
        }
        isOptionEqualToValue={(option, value) => option.name === value.name}
        onChange={(event, newValue) => setValue(newValue)}
        options={options.sort((a, b) => (a.year > b.year ? 1 : -1))}
        getOptionLabel={(option) =>
            typeof option === "string"
            ? option
            : `${option.name} - ${option.year}`
        }
        renderInput={(params) => <TextField {...params} label="Fruit" />}
    />
  );
}
