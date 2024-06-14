import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from 'expo-router';

const BalanceCard = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('http://localhost:5000/bal');
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        setBalance(0); // Display '0' if balance can't be fetched
      } finally {
        setLoading(false);
      }
    };
    fetchBalance();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.balanceText}>Balance: ${balance}</Text>
    </View>
  );
};

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BalanceCard />
      <View style={styles.buttonContainer}>
        <Button
          title="Manage Initial Balances"
          onPress={() => navigation.navigate('ManageInitialBalances')}
        />
        <Button
          title="Transfer Funds"
          onPress={() => navigation.navigate('TransferFunds')}
        />
        <Button
          title="Manage Monthly Budget"
          onPress={() => navigation.navigate('ManageMonthlyBudget')}
        />
        <Button
          title="Fix Fund Assigns"
          onPress={() => navigation.navigate('FixFundAssigns')}
        />
        <Button
          title="Transaction History"
          onPress={() => navigation.navigate('TransactionHistory')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 16,
  },
});
