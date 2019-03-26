export function Lesson_Array() {
  const nums: number[] = [0,1,2,3]
  console.log(nums)
  console.log(nums[0], nums[1])
  console.log(nums[4])

  nums[4] = 4
  console.log(nums)
  console.log(nums[4])

  nums.push(5)
  console.log(nums)
  console.log(nums[5])

  const pop: number = nums.pop()
  console.log(`pop ${pop}`)
  console.log(nums)

  const array1: number[] = [1, 2, 3]
  console.log(array1)
  const array2 = array1
  array2[2] = 100
  console.log(array1, array2)// 配列は参照渡し　array2を変えるとarray1も変わってしまう。
}