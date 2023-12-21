import { useNavigation } from 'expo-router'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { v4 as uuid } from 'uuid'
import { recipes, storeData } from '../../lib/db'

export default function TabTwoSceen() {
  const navigation = useNavigation()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [preparation, setPreparation] = useState('')
  const [error, setError] = useState('')

  async function handleClick() {
    const recipe: Recipe = {
      id: `${Math.random().toString()}`,
      name: title,
      slug: title.toLowerCase().replaceAll(' ', '-'),
      description,
      ingredients,
      preparation,
    }

    if (recipes.find((recipe) => recipe.name === title)) {
      return setError('Recipe title should be unique')
    }

    if (title === '' || description === '' || preparation === '') {
      return setError('All fields are required')
    }

    recipes.push(recipe)
    navigation.goBack()

    storeData()

    setTitle('')
    setDescription('')
    setIngredients('')
    setPreparation('')
    setError('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder='Title'
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.textField}
        />
        <TextInput
          placeholder='Description'
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={styles.textField}
        />
        <TextInput
          placeholder='Ingredients'
          value={ingredients}
          onChangeText={(text) => setIngredients(text)}
          style={{ ...styles.textField, height: 100 }}
          multiline={true}
          numberOfLines={5}
        />
        <TextInput
          placeholder='Preparation'
          value={preparation}
          onChangeText={(text) => setPreparation(text)}
          style={{ ...styles.textField, height: 350 }}
          multiline={true}
          numberOfLines={15}
        />
        <Pressable onPress={handleClick} style={styles.button}>
          <Text style={{ color: 'white' }}>Add</Text>
        </Pressable>
        <Text style={styles.error}>{error}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    display: 'flex',
    padding: 20,
    gap: 16,
  },
  textField: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',

    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
})
