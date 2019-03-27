export function Lesson_Math() {
  //四捨五入
  const round1 = Math.round(5.71)
  const round2 = Math.round(5.21)
  console.log("round1", round1)
  console.log("round2", round2)
  //小数点切り捨て
  const ceil1 = Math.ceil(5.71)
  const ceil2 = Math.ceil(5.21)
  console.log("ceil",ceil1)
  console.log("ceil2",ceil2)
  //小数点以下を切り捨て最大整数を返す
  const floor1 = Math.floor(5.71)
  const floor2 = Math.floor(-5.71)
  console.log('floor1', floor1)   
  console.log('floor2', floor2)
  //二乗
  const pow = Math.pow(2, 3)
  console.log('pow', pow)  
}