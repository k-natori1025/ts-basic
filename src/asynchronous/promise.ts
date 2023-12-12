export default function promiseSample() {
  const url = "https://api.github.com/users/k-natori1025"

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then((res) => {
        // レスポンスのbodyをJSONで読み取った結果を返す
        res.json()
          .then((json: Profile) => {
            console.log("Asynchronous promise sample 1:", json)
            resolve(json)
          })
          .catch((error) => {
            console.error(error)
            reject(null)
          })
      })
      .catch((error) => {
        console.error(error)
        reject(null)
      })
    })
  }

  fetchProfile()
    .then((profile) => {
      if(profile) {
        console.log("Asynchronous promise sample 2:", profile)
      }
    })
    .catch(() => {

    })

}