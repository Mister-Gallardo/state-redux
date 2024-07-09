const defaultState = {
  customers: [],
};

const addCustomer = "ADD_CUSTOMER";
const addManyCustomer = "ADD_MANY_CUSTOMER";
const removeCustomer = "REMOVE_CUSTOMER";

export const customerReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case addCustomer:
      return { ...state, customers: [...state.customers, action.payload] };
    case addManyCustomer:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case removeCustomer:
      return {
        ...state,
        customers: state.customers.filter(
          (customer: {name: string, id: number}) => customer.id != action.payload
        ),
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload: {}) => ({
  type: addCustomer,
  payload: payload,
});

export const addManyCustomerAction = (payload: []) => ({
  type: addManyCustomer,
  payload: payload,
});

export const removeCustomerAction = (payload: number) => ({
  type: removeCustomer,
  payload: payload,
});
