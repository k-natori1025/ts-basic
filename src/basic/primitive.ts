export default function primitiveSample() {
  let name: string = "トラハック"
  console.log("primitive sample 1:", typeof name, name)

  let age: number = 28
  console.log("primitive sample 2:", typeof age, age)

  let isSingle: boolean = true
  console.log("primitive sample 3:", typeof isSingle, isSingle)

  const isOverTwenty: boolean = age >= 20
  console.log("primitive sample 4:", typeof isOverTwenty, isOverTwenty)
}