// Data-base para o cálculo dos anos de experiência profissional (nov/2019).
export const EXPERIENCE_START = new Date(2019, 10, 19) // 19/11/2019

export function getYearsOfExperience(now: Date = new Date()): number {
  const start = EXPERIENCE_START
  let years = now.getFullYear() - start.getFullYear()
  const anniversaryPassed =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate())
  if (!anniversaryPassed) years -= 1
  return years
}
