export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private readonly status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setBalance = (value: number): void => {
    this.balance = value;
  }

  getBalance = (): number => {
    return this.balance;
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): number | void => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Voce depositou')
      return this.balance;
    }

    throw Error("Conta não ativa.")
  }

  withdraw = (value: number): number | void => {
    if(this.validateStatus()){
      if (this.balance >= value) {
        this.balance -= value
        console.log('Voce sacou')
        return this.balance;
      } else {
        throw Error("Saldo insuficiente.")
      }
    }

    throw Error("Conta não ativa.")

  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
