import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text>Modal</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
