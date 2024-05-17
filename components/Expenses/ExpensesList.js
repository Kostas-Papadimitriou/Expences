import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

function renderExpensesItem(itemData) {
  return <Text>{itemData.item.description}</Text>;
}
const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item) => {
        item.id;
      }}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
