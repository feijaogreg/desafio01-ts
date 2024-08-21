import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private doc_id: number | undefined

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.setDocId(doc_id);
  }

  setDocId = (doc_id: number): void => {
    this.doc_id = doc_id;
  }

  getDocId = (): number | undefined => {
    return this.doc_id;
  }

}