export default function objectSample() {
  const a: object = {
    name: "Trahack",
    age: 28
  }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: "Japanese",
    name: "Japan"
  }
  console.log("Object sample 1:", country)

  country = {
    language: "English",
    name: "United States of America"
  }
  console.log("Object sample 2:", country)

  // オプショナルとreadonly
  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: "Yamada",
    firstName: "Torahack"
  }

  torahack.gender = 'male'
  torahack.lastName = 'Kamado'
  // torahack.firstName = 'Tanjiro'

  console.log("Object sample 3:", torahack)

  // インデックスシグネチャー
const capitals: {
  [counrtyName: string]: string
} = {
  Japan: 'Tokyo',
  Korea: 'Soul'
}

capitals.China = 'Beijing'
capitals.Canada = 'Ottawa'

console.log("Object sample 4:", capitals)

}

