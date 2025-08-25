/*
- Convert JWt exp in days
- @param exp - number to be converted
- @returns Converted exp in days    
*/

export const jwtExpCalcConverter = (exp: number): number => {
  const currentTime = Math.floor(Date.now() / 1000)
  const secundsUntilExperition = exp - currentTime
  const secundsInDay = 60 * 60 * 24
  const daysUntilExperation = secundsUntilExperition / secundsInDay
  return daysUntilExperation
}
