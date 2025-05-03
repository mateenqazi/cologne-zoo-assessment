export default (birthdate: Date) => {
  const today = new Date()
  
  const parsedDateOfBirth = new Date(birthdate)
  const differenceInMilliseconds = today.getTime() - parsedDateOfBirth.getTime()
 
  const calculatedAgeInYears = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365));
   
  if (calculatedAgeInYears === 0) {
    return 1;
  }
   
  return calculatedAgeInYears;
}


