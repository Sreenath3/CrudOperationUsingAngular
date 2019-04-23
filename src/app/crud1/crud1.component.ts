import { Component, OnInit } from '@angular/core';
import { crud1 } from './crud1';

@Component({
  selector: 'app-crud1',
  templateUrl: './crud1.component.html',
  styleUrls: ['./crud1.component.css']
})
export class Crud1Component implements OnInit {
  emp:crud1={
    id:null,
    name:null,
    salary:null,
    department:null,
    updateid:null,
    updatename:null,
    updatesalary:null,
    updatedepartment:null,
  }
  searchText;
  Employees: Array<crud1>=[];
  updatedepartment: string;
  
  addRow()
  {
    this.Employees.push(this.emp);
    this.emp=
    {
      id:null,
    name:null,
    salary:null,
    department:null,
    updateid:null,
    updatename:null,
    updatesalary:null,
    updatedepartment:null,
    };
  }
  delete(n)
  {
    this.Employees.splice(n,1);
  }
  update(emp:crud1)
  {
    emp.id=this.emp.updateid;
    emp.name=this.emp.updatename;
    emp.salary=this.emp.updatesalary;
    emp.department=this.emp.updatedepartment;
    this.emp.updateid=null;
    this.emp.updatename=null;
    this.emp.updatesalary=null;
    this.emp.updatedepartment=null;
  }

  constructor() { }

  ngOnInit() {
  }


}
