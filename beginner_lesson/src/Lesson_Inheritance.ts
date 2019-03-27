import { threadId } from "worker_threads";

/*
  継承
  共通のメソッドがある場合親クラスを作成しその親クラスを継承する子クラスを用意するこで親クラスのメソッドを
  子クラスも使用することができる。これを継承という
  修飾子によってアクセスの制限ができる
  public 誰でも利用できる
  private親クラスのみ
  protected 親クラスと子クラスのみ利用できる。外部からはアクセスできない
*/

export function Lesson_Inheritance() {
  const employee1: Employee = new Employee(0)
  employee1.setProfile("Taro", "President")
  const info1: any = employee1.getMyInfo()
  console.log(employee1.name, info1)

  const employee2: Employee = new Employee(1)
  employee2.setProfile("Hanako", "Engineer")
  const info2: any = employee2.getMyInfo()
  console.log(employee2.name, info2)

  const hesokuriResult1: string = employee1.getHesokuri()
  const hesokuriResult2: string = employee2.getHesokuri()
  console.log(employee1.name, hesokuriResult1)
  console.log(employee2.name, hesokuriResult2)

  employee1.checkAsset()

}
//親クラス(スーパークラス) 
class CompanyEmployee {
  companyName: string
  companyTel: string
  employeeId: number
  protected asset: number //親と子のみ
  private hesokuri: number　//親しかわからない
  constructor () {
    this.companyName = "Develop Inc."
    this.companyTel = "0120000000"
    this.asset = 1000_000_000
    this.hesokuri = 1
  }

  getCompanyInfo() {
    return {
      name: this.companyName,
      tel: this.companyTel
    }
  }

  getHesokuri(id: number) {
    return id === 0 ? `会社のへそくりは ${this.hesokuri}円。`: "社長じゃないからわからない"
  }
}

//子クラス(サブクラス)
class Employee extends CompanyEmployee {
  name: string
  profile: string
  constructor(id: number) {
    super()                 //CompanyEmployeeのコンストラクタを呼ぶ
    this.employeeId = id	 //CompanyEmployeeのメンバを使える
  }
  setProfile(name: string, profile: string) {
    this.name = name
    this.profile = profile
  }

  getMyInfo(): any {
    const info: any = super.getCompanyInfo()
    info['id'] = this.employeeId
    info['name'] = this.name
    info['profile'] = this.profile
    return info
  }

  checkAsset() {
    console.log(`Company Asset: ${this.asset}`)
  }

  getHesokuri() {
    return super.getHesokuri(this.employeeId)
  }

}
