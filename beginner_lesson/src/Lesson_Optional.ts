export function Lesson_Optional(){
  console.log("result1", Lesson4_1("shohei", "developer"))
  console.log("result1", Lesson4_1("shohei", undefined))
  console.log("result1", Lesson4_1("shohei", null))
}

function Lesson4_1(name: string, profile?: string): string {
  if(!profile){
    return `profileが${profile}です`
  }
  return name + "は" + profile
}

//処理の流れが理解できていない
//! ←　エクスクラメーションマークは否定文
//? ←　プロパティはオプション（必須でない）になる