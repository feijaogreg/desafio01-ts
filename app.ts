import { CompanyAccount } from './class/CompanyAccount'
import { DioSpecialAccount } from './class/DioSpecialAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(12)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
console.log(companyAccount)

const specialAccount: DioSpecialAccount = new DioSpecialAccount('Nath', 10)
console.log(specialAccount)
specialAccount.deposit(12)

specialAccount.withdraw(10)