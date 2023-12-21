import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type RecipeProps = {
  recipe: Recipe
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <Link href={`/${recipe.slug}`} style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          padding: 10,
        }}
      >
        <Text style={styles.name}>{recipe.name}</Text>
        <Text>{recipe.description}</Text>
      </View>
    </Link>
  )
}

export default Recipe

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    display: 'flex',
    gap: 10,
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  tagList: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  tag: {
    backgroundColor: '#3395FF',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
})
