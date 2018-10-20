import { Component, OnInit } from '@angular/core';
import {EmpService} from '..//emp.service'
@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css'],
  providers:[EmpService]
})
export class EmployelistComponent implements OnInit {
  public employees=[]
  constructor(public emp :EmpService) { }

  ngOnInit() {
    this.employees=this.emp.getEmpDetails()
  }

}
