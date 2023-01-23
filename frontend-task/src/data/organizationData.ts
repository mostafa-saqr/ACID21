import { DepartmentsDTO, EmployeeDTO } from "@/model/organization.model"


let departmentsData  = [
    {
      id:0,
      name:'Administration'
    },
    {
      id:1,
      name:'IT'
    },
    {
      id:2,
      name:'Finance'
    },
    {
      id:3,
      name:'Development'
    },
    {
      id:4,
      name:'HR'
    },
    {
      id:5,
      name:'Sales'
    },
  ] as DepartmentsDTO[];

  let employeesData  = [
    {
      id:1,
      name:'mahmoud',
      departmentId:1
    },
    {
      id:2,
      name:'ahmed',
      departmentId:1
    },
    {
      id:3,
      name:'kamel',
      departmentId:1
    },
    {
      id:4,
      name:'mina',
      departmentId:2
    },
    {
      id:5,
      name:'john',
      departmentId:2
    },
    {
      id:6,
      name:'tarek',
      departmentId:3
    },
    {
      id:7,
      name:'mostafa',
      departmentId:3
    },
    {
      id:8,
      name:'alper',
      departmentId:3
    },
    {
      id:9,
      name:'Yousef',
      departmentId:4
    },
  ] as EmployeeDTO[];

  export {departmentsData, employeesData}