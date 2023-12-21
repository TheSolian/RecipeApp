import { FontAwesome } from '@expo/vector-icons'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { recipes, removeRecipe } from '../lib/db'

export default function RecipePage() {
  const params = useLocalSearchParams()
  const navigation = useNavigation()
  const [recipe, setRecipe] = useState<Recipe>()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            recipe && removeRecipe(recipe.slug)
            navigation.goBack()
          }}
        >
          <FontAwesome name='trash' size={24} />
        </Pressable>
      ),
    })
    const recipe = recipes.find((recipe) => recipe.slug === params.recipe)
    setRecipe(recipe)
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={styles.title}>{recipe?.name}</Text>
        <Text>{recipe?.description}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={styles.subTitle}>Ingredients</Text>
        <Text>{recipe?.ingredients}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={styles.subTitle}>Preparation</Text>
        <Text>{recipe?.preparation}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    padding: 20,
  },
  title: {
    fontSize: 28,
  },
  subTitle: {
    fontSize: 20,
  },
})
