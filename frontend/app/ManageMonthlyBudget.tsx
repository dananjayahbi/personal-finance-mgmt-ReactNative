import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ManageMonthlyBudgetScreen() {
  return (
    <View style={styles.container}>
      <Text>Manage Monthly Budget Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
