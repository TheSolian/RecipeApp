import { useIsFocused } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import { v4 as uuid } from 'uuid'
import { recipes as data } from '../lib/db'
import Recipe from './Recipe'

type RecipeListProps = {}

const RecipeList: React.FC<RecipeListProps> = ({}) => {
  const isFocused = useIsFocused()
  const [recipes, setRecipes] = useState(data)
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
  const [search, setSearch] = useState('')

  function handleSearch(text: string) {
    setFilteredRecipes(recipes.filter((recipe) => recipe.name.includes(text)))
  }

  useEffect(() => {
    setRecipes(data)
    handleSearch(search)
  }, [isFocused])

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: '100%',
        height: '100%',
      }}
    >
      <View style={{ width: '100%' }}>
        <TextInput
          style={styles.searchField}
          onChangeText={(text) => {
            setSearch(text)
            handleSearch(text)
          }}
          placeholder='Search Recipe...'
        />
      </View>
      <ScrollView style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {filteredRecipes.map((recipe) => {
          return <Recipe recipe={recipe} key={recipe.id} />
        })}
      </ScrollView>
    </View>
  )
}

export default RecipeList

const styles = StyleSheet.create({
  searchField: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
})
