import { AARON, fakeAnimal } from '../../fakeData'

// This would be a database query in real life, prisma is great for that!
const ANIMALS = Array.from({ length: 49 }, () => fakeAnimal())
export const getAnimals = () => [AARON, ...ANIMALS]

export default eventHandler(() => {
  return getAnimals()
})
