import { addManyCustomerAction } from "../store/cuctomerReducer";

export const fetchCustomers = (): any => {
  return function (dispatch: any) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addManyCustomerAction(json)));
  };
};

//аналогичная функция с тем же результатом

// export const fetchCustomers = (dispatch: any) => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => dispatch(addManyCustomerAction(json)));
// };
