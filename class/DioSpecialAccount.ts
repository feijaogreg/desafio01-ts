import { DioAccount } from "./DioAccount"

export class DioSpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): number | void => {
    if (this.validateStatus()) {
        this.setBalance(this.getBalance() + value + 10);
        console.log("Depósito realizado");
        return this.getBalance();
    }
  }
}