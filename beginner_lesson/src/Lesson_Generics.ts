export function Lesson_Generics() {
  const staff = new Staff()
  staff.setData("大学生A", "イベントのスタッフです")
  const manager = new Manager()
  manager.setData("社員A", "イベントのマネージャーです")
  manager.companyName = "Company Inc."
  console.log("スタッフのプロフィール", staff.name, staff.profile)
  console.log("マネージャーのプロフィール", manager.name, manager.profile)

  salalyPay(staff)
  salalyPay(manager)
  console.log("スタッフの給料", staff.salary)
  console.log('マネージャーの給料', manager.salary)

  console.log("スタッフの活動フラグ", staff.isActive, "===", staff.isActive === true ? "活動中" : "休憩なう")
  manager.breakStaff(staff)
  console.log("スタッフの活動フラグ", staff.isActive, "===", staff.isActive === true ? "活動中" : "休憩なう")
}

function salalyPay<T extends Human>(employee: T) {
  if (employee instanceof Staff) {
    console.log("OK, I will be pay salaly to Staff.")
    employee.salary = 200_000

    const staff: Staff = employee as Staff
    console.log("スタッフの活動フラグ", staff.isActive)
  }
  if (employee instanceof Manager) {
    console.log("OK, I will be pay salary to Manager.")
    employee.salary = 500_000

    const manager: Manager = employee as Manager
    console.log("マネージャーの会社名", manager.companyName)
  }
}

interface Human {
  name: string
  profile: string
  salary: number
  setData(name: string, profile: string): void
}

class Staff implements Human {
  name: string
  profile: string
  salary: number
  isActive: boolean
  setData(name: string, profile: string) {
    this.name = name
    this.profile = profile
    this.isActive = true
  }
}

class Manager implements Human {
  name: string
  profile: string
  companyName: string
  salary: number
  setData(name: string, profile: string) {
    this.name = name
    this.profile = profile
  }
  breakStaff(staff: Staff) {
    staff.isActive = false
  }
}