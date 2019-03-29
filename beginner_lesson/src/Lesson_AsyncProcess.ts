import axios from "axios"
import { sleep } from '../../src/utils/utils'

const userName: string = "yakamatsu2"
const userListUrl: string = "https://qiita.com/api/v2/users"
const userDetailUrl: string = `https://qiita.com/api/v2/users/${userName}`

export async function Lesson_AsyncProcess() {
  console.log("---- Lesson_AsyncProcess ----")
  const sleepTime: number = 1000

  LessonCallback()
  await sleep(sleepTime)

  LessonPromise()
  await sleep(sleepTime)

  LessonAsyncAwait()
  await sleep(sleepTime)

  LessonPromiseAll()
  await sleep(sleepTime)

  console.log("------------------\n")
}

function LessonCallback() {
  LessonCallbackAPIClient(userListUrl, (result?: any, error?: Error) => {
    if (error) {
      console.error('LessonCallback userList error', error)
      return
    }
    if (result) {
      console.log('LessonCallback userList', result.data.length)
    }

    LessonCallbackAPIClient(userDetailUrl, (result?: any, error?: Error) => {
      if (error) {
        console.error('LessonCallback userDetail error', error)
        return
      }
      if (result) {
        console.log('LessonCallback userDetail', result.data.profile_image_url)  // LessonCallback userDetail https://qiita-image-store.s3.amazonaws.com/0/183031/profile-images/1538072254
      }
    })
  })
}

function LessonCallbackAPIClient(url: string, callback: (result?: any, error?: Error) => void) {
  axios.get(url)
    .then((result: any) => {
      callback(result, undefined)
    }).catch((error: Error) => {
      callback(undefined, error)
    })
}

function LessonPromise() {
  LessonPromiseAPIClient(userListUrl)
    .then((result: any) => {
      console.log("LessonPromise userList", result.data.length)
      return LessonPromiseAPIClient(userDetailUrl)
    }).catch((error: Error) => {
      console.error("error", error)
    }).then((result: any) => {
      console.log("LessonPromise userDetail", result.data.profile_image_url)
    }).catch((error: Error) => {
      console.log("error", error)
    })
}

function LessonPromiseAPIClient(url: string) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((result: any) => {
        resolve(result)
      }).catch((error: Error) => {
        reject(error)
      })
  })
}

async function LessonAsyncAwait() {
  try {
    // ユーザーリストを取得して１番目のユーザーの情報を取得する
    const result1 = await axios.get(userListUrl)
    const id: string = result1.data[0].id
    console.log('LessonAsyncAwait', id)

    const result2 = await axios.get(userListUrl + `/${id}`)
    console.log('LessonAsyncAwait', id, result2.data.profile_image_url)
    /* 
      Async/Awaitを利用する場合
      通常の同期処理のように書けるため可読性が一番良い。
      注意としてawaitをする場合は関数をasyncにする必要がある。
    */
  } catch (error) {
    console.error('error', error)
  }
}

// ■ PromiseAll
// 複数の非同期処理をまとめてリクエストできる
function LessonPromiseAll() {
  Promise.all([
    LessonPromiseAPIClient(userListUrl),
    LessonPromiseAPIClient(userDetailUrl)
  ]).then((result: any[]) => {
    // 結果はPromiseが渡された順番で返される。
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    console.log('LessonPromiseAll', result[0].data.length, result[1].data.profile_image_url) // LessonPromiseAll 20 https://qiita-image-store.s3.amazonaws.com/0/183031/profile-images/1538072254
  }).catch((error: Error) => {
    console.error('error', error)
  })
}