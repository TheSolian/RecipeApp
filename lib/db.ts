import AsyncStorage from '@react-native-async-storage/async-storage'

export let recipes: Recipe[] = []

export const storeData = async () => {
  await AsyncStorage.setItem('@recipes', JSON.stringify(recipes))
}

export const loadData = async () => {
  const data = await AsyncStorage.getItem('@recipes')

  if (data) {
    recipes = JSON.parse(data)
  }
}

export const removeRecipe = async (slug: string) => {
  recipes = recipes.filter((recipe) => recipe.slug !== slug)
  storeData()
}
