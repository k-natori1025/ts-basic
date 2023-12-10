export default function notExistSample() {
  let name = null
  console.log("not exist sample 1:", typeof name, name)

  name = "trahack"

  if (!name) {
    console.log("primitive sample 2:", "我輩は猫である。名前はまだ"+name)
  } else {
    console.log("primitive sample 2:", "我輩は猫である。名前は"+name)
  }

  let age = undefined
  console.log("primitive sample 3:", typeof age, age)

  age = 28
  if (!age) {
    console.log("primitive sample 4:", "年齢は秘密です")
  } else {
    console.log("primitive sample 4:", "年齢は"+age+"です")
  }
}