export default function tupleSample () {
  // 一般的なタプルの型定義
  let response: [number, string] = [200, 'OK']
  // response = [400, 'Bad request', 'email parameter is missing']
  // response = ['400', 'Bad request']
  console.log('Tuple sample 1:', response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlfriends.push('Misa')
  console.log('Tuple sample 2:', girlfriends)
}