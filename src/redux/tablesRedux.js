//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, id) =>
  tables.filter((table) => table.id === id);
// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
//UPDATE-TABLES
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
// action creators

export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables/')
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables), console.log(tables)));
    console.log('3.connected to api');
  };
};

export const addTableRequest = (table) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(table, console.log(table)),
    };

    fetch('http://localhost:3131/tables/1', options)
      .then((res) => res.json())
      .then(() => dispatch(updateTables(table), console.log(table)));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default tablesReducer;
