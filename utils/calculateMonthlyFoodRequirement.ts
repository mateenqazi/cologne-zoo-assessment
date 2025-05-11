import useCalculateAgeInYears from './useCalculateAgeInYears'
import type { Animal } from '~/types'

export default ( 
  birthdate: Date,
  height: number,
  weight: number,
  favouriteFruit: string,
  gender: string,
  species: string): number => {
  if (species === 'fish') {
    return 0;
  }

  let foodRequirement = (height + weight) / 250;

  const age = useCalculateAgeInYears(birthdate);

  if (age > 20) {
    foodRequirement /= 2;
  } else if (age < 2) {
    foodRequirement *= 2;
  }

  if (favouriteFruit === 'cherry') {
    foodRequirement += 28;
  }

  if (gender === 'male') {
    foodRequirement *= 1.2;
  }

  return Math.ceil(foodRequirement * 30);
}