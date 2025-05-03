export type Fruit = 'banana' | 'apple' | 'cherry'
export type Gender = 'male' | 'female'

export type Animal = {
  name: string
  species: string
  gender: Gender
  birthdate: Date
  favouriteFruit: Fruit
  height: number
  weight: number
}
