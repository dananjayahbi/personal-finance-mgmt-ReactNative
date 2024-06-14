import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ManageInitialBalancesScreen() {
  return (
    <View style={styles.container}>
      <Text>Manage Initial Balances Screen</Text>
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
