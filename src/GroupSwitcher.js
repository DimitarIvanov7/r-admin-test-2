import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";

import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const choices = ["Group A", "Group B", "Group C"];

const FILTER_BY_GROUP = "FILTER_BY_GROUP";

const filterByGroupAction = groupName => ({
  type: FILTER_BY_GROUP,
  payload: groupName
});

export const groupNameFilterReducer = (state = "", action = {}) => {
  const { type, payload } = action;
  if (type === FILTER_BY_GROUP) {
    return payload;
  }
  return state;
};

export const GroupSwitcher = ({
  groupNameFilter,
  filterByGroupAction: filterByGroup
}) => (
  <FormControl>
    <InputLabel>Filter by Group Name</InputLabel>
    <Select
      value={groupNameFilter || ""}
      onChange={e => filterByGroup(e.target.value)}
    >
      <MenuItem key={-1} value={""}>
        All
      </MenuItem>
      {choices.map((name, idx) => (
        <MenuItem key={idx} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const mapStateToProps = ({ groupNameFilter }) => {
  return { groupNameFilter };
};

const enhance = compose(
  connect(
    mapStateToProps,
    { filterByGroupAction }
  )
);

export default enhance(GroupSwitcher);
