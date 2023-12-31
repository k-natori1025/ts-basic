export default function arraySample() {

  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)
  console.log('Array sample 1:', colors)

  const even: Array<number> = [2,4,6]
  even.push(8)
  // even.push('10')
  console.log('Array sample 2:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(true)
  console.log('Array sample 3:', ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const __someArray = [] // any[]
    __someArray.push(123)  // number[]
    __someArray.push('ABC')  // (number | string)[]
    return __someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  //  someArray.push(true)
  console.log('Array sample 4:', someArray)

  // イミュータブルな配列を作る
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push('git fetch')
  // commands[2] = 'git fetch'
  console.log('Array sample 5:', commands)

}