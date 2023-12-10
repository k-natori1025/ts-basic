export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log("unkown sample 1:", typeof maybeNumber, maybeNumber)
  
  const isFoo = maybeNumber === "foo"
  console.log("unkown sample 2:", typeof isFoo, isFoo)

  // const sum = maybeNumber + 10 ←エラー

  if(typeof maybeNumber === "number") {
    const sum = maybeNumber + 5
    console.log("unkown sample 3:", typeof sum, sum)
  }
}