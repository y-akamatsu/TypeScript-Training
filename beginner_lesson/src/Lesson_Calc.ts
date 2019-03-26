export function Lesson_Calc() {
  const variable: number = 1
  const resultA: number = variable + 2
  const resultB: number = variable * 2
  const resultC: number = variable / 2
  console.log("resultA", resultA)
  console.log("resultB", resultB)
  console.log("resultC", resultC)

  let resultD: number = 1
  resultD += 2
  let resultE: number = 1
  resultE *= 2
  let resultF: number = 1
  resultF /= 2
  
  console.log("resultD", resultD)
  console.log("resultE", resultE)
  console.log("resultF", resultF)
}