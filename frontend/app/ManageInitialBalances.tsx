import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function ManageInitialBalancesScreen() {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedAccount) {
      fetchBalance();
    }
  }, [selectedAccount]);

  const fetchBalance = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/init/checkBalance', {
        account: selectedAccount,
      });
      setBalance(response.data.balance);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch balance');
    } finally {
      setLoading(false);
    }
  };

  const updateBalance = async () => {
    let endpoint = '';
    switch (selectedAccount) {
      case 'boc':
        endpoint = 'http://localhost:5000/init/updBoc';
        break;
      case 'cash':
        endpoint = 'http://localhost:5000/init/updCash';
        break;
      case 'commercial':
        endpoint = 'http://localhost:5000/init/updCommercial';
        break;
      case 'peoples':
        endpoint = 'http://localhost:5000/init/updPeoples';
        break;
      default:
        Alert.alert('Error', 'Invalid account selected');
        return;
    }

    setLoading(true);
    try {
      await axios.post(endpoint, {
        amount,
      });
      Alert.alert('Success', 'Balance updated successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to update balance');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Manage Initial Balances Screen</Text>
      <Picker
        selectedValue={selectedAccount}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedAccount(itemValue)}
      >
        <Picker.Item label="Select Account" value="" />
        <Picker.Item label="BOC" value="boc" />
        <Picker.Item label="Cash" value="cash" />
        <Picker.Item label="Commercial" value="commercial" />
        <Picker.Item label="Peoples" value="peoples" />
      </Picker>
      {selectedAccount && !loading && (
        <Text>Current Balance: {balance}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button
        title="Update Balance"
        onPress={updateBalance}
        disabled={!selectedAccount || !amount || loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  picker: {
    height: 50,
    width: 200,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
