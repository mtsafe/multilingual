import React from "react";
import { FormControl, FormControlLabel, FormLabel } from "@material-ui/core";
import { Radio, RadioGroup } from "@material-ui/core";

export function LangSection(props) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Language</FormLabel>
      <RadioGroup
        aria-label="language"
        name="language"
        value={props.selectedOption}
        onChange={props.handleChange}
      >
        <FormControlLabel value="C" control={<Radio />} label="C" />
        <FormControlLabel value="Java" control={<Radio />} label="Java" />
        <FormControlLabel
          value="Javascript"
          control={<Radio />}
          label="Javascript"
        />
        <FormControlLabel
          value="Python"
          disabled
          control={<Radio />}
          label="Python (Disabled option)"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default LangSection;
