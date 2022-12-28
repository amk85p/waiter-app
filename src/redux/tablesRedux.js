//selectors

export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, id) =>
  tables.find((table) => table.id == parseInt(id));
// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
//UPDATE-TABLES
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');
// action creators

export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables/')
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const editTableRequest = (table) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(table),
    };

    fetch('http://localhost:3131/tables/' + table.id, options)
      .then((res) => res.json())
      .then(() => dispatch(editTable(table)));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id == action.payload.id ? action.payload : table
      );
    default:
      return statePart;
  }
};
export default tablesReducer;
