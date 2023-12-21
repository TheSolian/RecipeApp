import { StyleSheet, Text, View } from 'react-native'
import RecipeList from '../../components/RecipeList'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <RecipeList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
})
