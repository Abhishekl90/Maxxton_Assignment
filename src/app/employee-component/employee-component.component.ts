import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.scss']
})
export class EmployeeComponentComponent implements OnInit {

  constructor(private _router: Router) { }

  searchText = "";
  showUniqueDept = false;
  uniqueDeptList = [];

  ngOnInit(): void {
  }

  actionList = [
    {
      id: "1",
      icon: "sort_by_alpha",
      action: "Sort By Name",
    },
    {
      id: "2",
      icon: "calendar_today",
      action: "Sort By Joining Date",
    },
    {
      id: "3",
      icon: "exposure_plus_2",
      action: "Employees with more than 2 Years exp",
    },
    {
      id: "4",
      icon: "highlight",
      action: "Unique Departments",
    },
    {
      id: "5",
      icon: "remove_circle_outline",
      action: "Remove Employees",
    }
  ]

  employeesList = [
    {
      "id": "11",
      "position": 1,
      "name": "Ash",
      "department": "Finance",
      "joining_date": "8/10/2016"
    },
    {
      "id": "12",
      "position": 2,
      "name": "John",
      "department": "HR",
      "joining_date": "18/1/2011"
    },
    {
      "id": "13",
      "position": 3,
      "name": "Zuri",
      "department": "Operations",
      "joining_date": "28/11/2019"
    },
    {
      "id": "14",
      "position": 4,
      "name": "Vish",
      "department": "Development",
      "joining_date": "7/7/2017"
    },
    {
      "id": "15",
      "position": 5,
      "name": "Barry",
      "department": "Operations",
      "joining_date": "19/8/2014"
    },
    {
      "id": "16",
      "position": 6,
      "name": "Ady",
      "department": "Finance",
      "joining_date": "5/10/2014"
    },
    {
      "id": "17",
      "position": 7,
      "name": "Gare",
      "department": "Development",
      "joining_date": "6/4/2014"
    },
    {
      "id": "18",
      "position": 8,
      "name": "Hola",
      "department": "Development",
      "joining_date": "8/12/2010"
    },
    {
      "id": "19",
      "position": 9,
      "name": "Ola",
      "department": "HR",
      "joining_date": "7/5/2011"
    },
    {
      "id": "20",
      "position": 10,
      "name": "Kim",
      "department": "Finance",
      "joining_date": "20/10/2010"
    }
  ]

  // funtion for showing data in table for actions
  showData(item) {
    switch (item.action) {
      case "Sort By Name":
        this.sortEmployeesData('Name')
        break;
      case "Sort By Joining Date":
        this.sortEmployeesData('JoiningDate')
        break;
      case "Employees with more than 2 Years exp":
        this.moreThanTwoYearsExperiencedEmployees()
        break;
      case "Unique Departments":
        this.showUniqueDept = true;
        this.getUniqueDept()
        break;
      case "Remove Employees":
        this.showUniqueDept = true;
        this.removeEmployeesFromDevelopmentDept()
        break;
    }
  }

  // generic function for sorting employees data based on type
  sortEmployeesData(sortBy) {
    switch (sortBy) {
      case "Name":
        this.employeesList.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)
        break;

      case "JoiningDate":
        // this.employeesList.sort((a, b) => new Date(b.joining_date).getDate() - new Date(a.joining_date).getDate())

        this.employeesList.sort((a, b) => {
          var date1 = a.joining_date.split('/').reverse().join(),
            date2 = b.joining_date.split('/').reverse().join();
          return date1 < date2 ? -1 : (date1 > date2 ? 1 : 0);
        });
        break;
    }
  }

  // function to search employees by name
  searchEmployeesByName() {
    this.employeesList = this.employeesList.filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase()))
  }

  // function to get employees with more than 2 years experience
  moreThanTwoYearsExperiencedEmployees() {
    let list = JSON.parse(JSON.stringify(this.employeesList));
    this.employeesList = [];
    list.forEach(item => {
      var d1 = item.joining_date.split("/");
      var dateObj = new Date(+d1[2], +d1[1] - 1, +d1[0])
      var currDt = new Date;
      var yearsDiff = currDt.getFullYear() - dateObj.getFullYear();
      if (yearsDiff > 2)
        this.employeesList.push(item);
    })
  }

  // function to get unique departments and the count of employees in them
  getUniqueDept() {
    this.uniqueDeptList = [];
    this.employeesList.forEach(employee => {
      let foundIndex = this.uniqueDeptList.findIndex(item => employee.department == item.dept)
      if (foundIndex == -1) {
        let uniqueData = { dept: "", count: [] }
        uniqueData.dept = employee.department;
        uniqueData.count.push(employee);
        this.uniqueDeptList.push(uniqueData);
      } else {
        if (this.uniqueDeptList && this.uniqueDeptList.length && this.uniqueDeptList.length > 0) {
          this.uniqueDeptList.map(item => {
            if (employee.department == item.dept)
              item.count.push(employee)
          })
        }
      }
    })
  }

  // function to remove employees from Development department
  removeEmployeesFromDevelopmentDept() {
    let deptList = [];
    this.showUniqueDept = false
    this.employeesList.forEach((item, index) => {
      if (item.department !== "Development")
        deptList.push(item)
    })
    this.employeesList = JSON.parse(JSON.stringify(deptList));

    if (this.uniqueDeptList && this.uniqueDeptList.length && this.uniqueDeptList.length > 0) {
      this.uniqueDeptList.forEach((item, index) => {
        if (item.dept === "Development")
          this.uniqueDeptList.splice(index, 1);
      })
    }
  }
}
