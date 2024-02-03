// src/features/Counter.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../Redux/Slice/counterSlice';
import { RootState, AppDispatch } from '../Redux/Store/store';

export default function Counter() {
  const count = useSelector((state: RootState) => selectCount(state));
  const dispatch: AppDispatch = useDispatch();

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
}
