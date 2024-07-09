import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/cuctomerReducer";
import { fetchCustomers } from "./asycActions/customers";
import { DecrementAction, IncrementAction } from "./store/counter";
import { test } from "./test";

function App() {
  // test();

  const dispatch = useDispatch();
  const cash = useSelector((state: any) => state.cash.cash);
  const customers = useSelector((state: any) => state.customers.customers);
  const count = useSelector((state: any) => state.counter.count)

  const addCash = (cash: number) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash: number) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name : string | null) => {
    const customer = {
      name,
      id: Date.now(),
    }
    customer && dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (id: number) => {
    dispatch(removeCustomerAction(id));
  };

  const Increment = () => {
    dispatch(IncrementAction());
  }

  const Decrement = () => {
    dispatch(DecrementAction());
  }

  return (
    <div style={{ margin: 40 }}>
      <div style={{ margin: 30, display: "flex", gap: 20 }}>
        <h1>Счёт: {cash}</h1>
        <button
          onClick={() =>
            addCash(
              Number(prompt("Введите сумму, на которую хотите пополнить:"))
            )
          }
        >
          ADD Cash
        </button>
        <button
          onClick={() =>
            getCash(Number(prompt("Введите сумму, которую хотите снять:")))
          }
        >
          GET Cash
        </button>
        <button
          onClick={() =>
            addCustomer(prompt("Введите имя пользователя:"))
          }
        >
          ADD Customer
        </button>
        <button
          onClick={() =>
            dispatch(fetchCustomers()) // эквивалетно запиши fetchCustomers()(dispatch)
            // в первом варианте dispatch тоже передаётся параметром, но через замыкание
          }
        >
          ADD Many Customers
        </button>
      </div>
      {customers.length > 0 
      ? <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          {customers.map((customer: any) => <h2 style={{border: '1px solid black'}} onClick={() => removeCustomer(customer.id)}>{customer.name}</h2>)}
        </div>
      : <h2>Кастомеры отсутствуют</h2>
      }
      <div style={{margin: 100}}>
        <h2>Счётчик: {count}</h2>
        <button style={{width: 55, padding: 5, fontSize: 22, fontWeight: 'bold'}} onClick={Increment}>+</button>
        <button style={{width: 55, padding: 5, fontSize: 22, fontWeight: 'bold'}} onClick={Decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
