export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  // [ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  // - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  // - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques


  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
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

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
