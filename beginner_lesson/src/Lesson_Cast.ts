//キャスト変換 (型変換)

export function Lesson_Cast() {
  const numStr: string = "1000"
  const num: number = Number(numStr)
  if (typeof num === "number") {
    console.log(`${typeof numStr} -> ${typeof num}`, num)
  }

  const strNum: number = 2000
  const str: string = String(strNum)
  if (typeof str === "string") {
    console.log(`${typeof strNum} -> ${typeof str}`, str, strNum.toString()) //toString()数値を文字列に変換する
  }

  const classAny: any = new LessonCast1()
  if (classAny instanceof LessonCast1) {
    console.log('classAnyの型はLessonCat1です')
  }
}

class LessonCast1 { } //LessonCast1{}を宣言