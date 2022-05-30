import React from "react";
import { Admin, Resource } from "react-admin";
import fakeDataProvider from "ra-data-fakerest";
import { groupNameFilterReducer } from "./GroupSwitcher";
import UsersList from "./UsersList";

import data from "./data";

const dataProvider = fakeDataProvider(data);

const App = () => (
  <Admin
    customReducers={{ groupNameFilter: groupNameFilterReducer }}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UsersList} />
  </Admin>
);

export default App;
