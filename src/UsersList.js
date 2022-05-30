import React from "react";
import { NumberField, List, Datagrid, TextField } from "react-admin";
import { connect } from "react-redux";

import GroupSwitcher from "./GroupSwitcher";

export const UsersList = ({ groupNameFilter, ...props }) => {
  if (groupNameFilter) {
    const { filter } = props;
    props = { ...props, filter: { ...filter, group: groupNameFilter } };
  }
  return (
    <React.Fragment>
      <GroupSwitcher />
      <List {...props}>
        <Datagrid>
          <NumberField source="id" />
          <TextField source="first_name" />
          <TextField source="company_name" />
          <NumberField source="age" />
          <TextField source="group" />
        </Datagrid>
      </List>
    </React.Fragment>
  );
};

const mapStateToProps = ({ groupNameFilter }) => {
  return { groupNameFilter };
};

export default connect(
  mapStateToProps,
  {}
)(UsersList);
