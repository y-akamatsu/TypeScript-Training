/*

インスタンスを生成しないメソッド
値を共有したいときに使用する

*/
export function Lesson_Static() {
  const class1: LessonStatic1 = new LessonStatic1()
  console.log(class1.getCount())

  class1.setCount(200)
  console.log(class1.getCount())

  const class2: LessonStatic1 = new LessonStatic1()
  console.log(class2.getCount())

  const count = LessonStatic1.count
  console.log(count)

  const result = LessonStatic1.getResult()
  console.log(result)
}

class LessonStatic1 {
  static count: number = 10
  static getResult(){
    return `count is ${this.count}`
  }
  getCount() {
    return LessonStatic1.count
  }
  setCount(count: number) {
    LessonStatic1.count = count
  }
}

//staticの使用方法
//処理の流れが分からない
