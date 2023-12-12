export default function callbackSample() {
  const url = "https://api.github.com/users/k-natori1025"

  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    fetch(url)
      .then((res) => {
        // レスポンスのbodyをJSONで読み取った結果を返す
        res.json()
          .then((json) => {
            console.log("Asynchronous sample 1:", json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log("Asynchronous sample 2:", profile)
  // sample1には値が入り、sample2には値が入らない。非同期で1の結果が入ってくる前に2を実行してしまうため
}