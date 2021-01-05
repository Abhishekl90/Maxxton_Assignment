import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  actionList = [
    {
      id: "1",
      icon: "sort_by_alpha",
      action: "Sort By Name",
      route: "sortByName"
    },
    {
      id: "2",
      icon: "calendar_today",
      action: "Sort By Joining Date",
      route: "joiningDate"
    },
    {
      id: "3",
      icon: "search",
      action: "Search By Name",
      route: "searchByName"
    },
    {
      id: "4",
      icon: "exposure_plus_2",
      action: "Employees with more than 2 Years exp",
      route: "searchByExp"
    },
    {
      id: "5",
      icon: "highlight",
      action: "Unique Departments",
      route: "department"
    },
    {
      id: "6",
      icon: "remove_circle_outline",
      action: "Remove Employees",
      route: "remove"
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

  routeAndDisplayData(item) {
    this._router.navigateByUrl(item.route)
  }

}
