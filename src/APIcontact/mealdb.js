export const findMealByName = async (name) => {
  const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  const respData = await resp.json()

  return respData.meals
}

export const findMealById = async (id) => {
  const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  const respData = await resp.json()

  return respData.meals[0]
}

export const getRandomMeal = async () => {
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  const respData = await resp.json()
  const food = respData.meals[0]
  
  return food
}

export const filterByArea = async (area) => {
  const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
  const respData = await resp.json()
  const foods = respData.meals

  return foods
}