import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): number | void => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Voce pegou um empréstimo')
      console.log(`Voce pegou emprestado R$ ${value} e agora tem R$ ${this.balance} na conta`)
      return this.balance;
    }

    throw Error("Conta não ativa.")
  }
}
