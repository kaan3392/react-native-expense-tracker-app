import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpensItem(itemData) {
  return <ExpenseItem {...itemData.item} />
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
