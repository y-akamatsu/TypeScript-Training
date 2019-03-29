import { NodeStringDecoder } from "string_decoder";

/*
インターフェイス
継承に似ている、
*/

export function Lesson_Interface() {
  const student1: StudentDTO = { name: "Yamada", score: 100 }
  const student2: StudentDTO = { name: "Akamatsu", score: 200 }
  const student3: StudentDTO = { name: "Nakagawa", score: 300 }

  const result1: JobOfferResultPass | JobOfferResultFailure = JudgementJobOffer(student1)
  const result2: JobOfferResultPass | JobOfferResultFailure = JudgementJobOffer(student2)
  const result3: JobOfferResultPass | JobOfferResultFailure = JudgementJobOffer(student3)

  console.log(result1)
  console.log(result2)
  console.log(result3)
}

interface StudentDTO {
  name: string
  score: number
}

interface JobOfferResultDTO {
  name: string
  isJudgement: boolean
  comment: string
}
//implementsキーワードを使用して、インターフェースを実装します。
//内定クラス
class JobOfferResultPass implements JobOfferResultDTO {
  name: string
  isJudgement: boolean
  comment: string
  ceremony: string
}
//implementsキーワードを使用して、インターフェースを実装します。
//不合格クラス

class JobOfferResultFailure implements JobOfferResultDTO {
  name: string
  isJudgement: boolean
  comment: string
  isOinoriEmail: boolean
}

//合格、不合格を判定する関数を定義
function JudgementJobOffer(student: StudentDTO): JobOfferResultPass | JobOfferResultFailure {
  if (student.score >= 200) {
    const resultDTO: JobOfferResultPass = {
      name: student.name,
      isJudgement: true,
      comment: "内定！",
      ceremony: "2019/10/01 10:00:00"
    }
    return resultDTO
  } else {
    const resultDTO: JobOfferResultFailure = {
      name: student.name,
      isJudgement: false,
      comment: "不合格",
      isOinoriEmail: true
    }
    return resultDTO
  }
}