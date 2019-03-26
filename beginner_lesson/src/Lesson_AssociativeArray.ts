//連想配列
//配列と連想配列の違い:　配列は[]で宣言、連想配列は{}で宣言される
//配列は値のみ、連想配列はキーと値をセットできる

export function Lesson_AssociativeArray() {
  const itemA: any = {
    name: "Taro",
    age: 20
  }
  const itemB: any = {
    name: "Hanako",
    age: 30
  }
  const itemC: any = {
    name: "Ueda",
    age: 40
  }
  console.log(itemA)

  const items: any[] = [itemA, itemB]
  items.push(itemC)
  console.log(items)
}