import { useState } from "react";
import "./index.css";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseForm from "./Components/ExpenseForm";
import categories from "./Components/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, Description: "aaa", Amount: 10, category: "Utilities" },
    { id: 2, Description: "bbb", Amount: 10, category: "Utilities" },
    { id: 3, Description: "ccc", Amount: 10, category: "Utilities" },
    { id: 4, Description: "ddd", Amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expenses) => expenses.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) => setExpenses([...expenses, { ...data, id: 111 }])}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((item) => item.id !== id))
        }
      />
    </div>
  );
}

export default App;
