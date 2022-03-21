import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 500
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const receptionStatus = [
  {
    label: "Commande à réceptionner",
    value: "TODO"
  },
  {
    label: "Réception en cours",
    value: "IN_PROGRESS"
  },
  {
    label: "Réception clôturée",
    value: "DONE"
  }
];
const options = receptionStatus.map((r) => r.value);

const getOptionLabel = (option) => {
  return receptionStatus.find((r) => r.value === option).label;
};

const SelectWithCheckbox = () => {
  const classes = useStyles();
  const [selectedReceptionStatus, setSelectedReceptionStatus] = React.useState(
    []
  );

  const handleChange = (event) => {
    setSelectedReceptionStatus(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">
          Statut de la réception
        </InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={selectedReceptionStatus}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            return selected.map((s) => getOptionLabel(s)).join(", ");
          }}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox
                checked={selectedReceptionStatus.indexOf(option) > -1}
              />
              <ListItemText primary={getOptionLabel(option)} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectWithCheckbox;
