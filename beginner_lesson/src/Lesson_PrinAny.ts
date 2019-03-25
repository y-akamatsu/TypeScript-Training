export function Lesson_PrinAny() {
  const num: number = 10
  const str: string = "文字列"
  const isActive: boolean = true

  console.log("num", num) //数字
  console.log("str", str) //文字列
  console.log("isActive", isActive) //真偽値

  let variable: any
  variable = 1
  console.log("number", variable)

  variable = "文字列"
  console.log("string", variable)

  variable = false
  console.log("boolean", variable)

  // variable = new Data()
  // console.log("class", variable)
}