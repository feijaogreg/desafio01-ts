import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): number | void => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance() + value)
      console.log('Voce pegou um empréstimo')
      console.log(`Voce pegou emprestado R$ ${value} e agora tem R$ ${this.getBalance()} na conta`)
      return this.getBalance();
    }

    throw Error("Conta não ativa.")
  }
}
