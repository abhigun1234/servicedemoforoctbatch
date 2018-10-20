import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  public employees=[{"id":1,"name":"abhishek","age":20},
  {"id":2,"name":"raj","age":20}]
  constructor() { }

  public getEmpDetails()
  {

    return this.employees;
  }
}
