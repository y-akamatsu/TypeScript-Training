export function Lesson_LetConst() {
  let count: number = 1
  count += 1

  let  message: string = ''
  message = `Lesson ${count}`
  console.log("変数", message)

  const name: string = "山田太郎"
  console.log("定数", name)
}