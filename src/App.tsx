import { useState } from "react";
import "./index.css";
import ExpenseList from "./Components/ExpenseList";

function App() {
  const [expenses, setexpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utility" },
    { id: 2, description: "bbb", amount: 10, category: "utility" },
    { id: 3, description: "ccc", amount: 10, category: "utility" },
    { id: 4, description: "ddd", amount: 10, category: "utility" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setexpenses(expenses.filter((item) => item.id !== id))
        }
      />
    </div>
  );
}

export default App;
