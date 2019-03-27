/*

インスタンスを生成しないメソッド
値を共有したいときに使用する

*/
export function Lesson_Static() {
  const class1: LessonStatic1 = new LessonStatic1()
  console.log(class1.getCount()) //LessonStatic1メソッドのgetCount()を呼び出す
  
  class1.setCount(300)
  console.log(class1.getCount())

  const class2: LessonStatic1 = new LessonStatic1()
  console.log(class2.getCount()) 
  
  //クラスを生成しなくてもstaticを直接呼ぶことができる
  const count = LessonStatic1.count
  console.log(count)
 
  //メソッドを直接呼ぶことができる
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