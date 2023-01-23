import { DepartmentsDTO, EmployeeDTO } from '@/model/organization.model'
import { defineStore } from 'pinia'
import { departmentsData, employeesData } from '@/data/organizationData';

export const useOrganizationStore = defineStore('OrganizationStore', {
    state:()=> ({
        departments : departmentsData as DepartmentsDTO[],
        employees : employeesData as EmployeeDTO[],
    }),
    getters:{
       getDepartments(){
        let currentDepartment:DepartmentsDTO[] = this.departments 
          return currentDepartment
       },
       getEmployees(){
        let currentEmployess:EmployeeDTO[] = this.employees 
          return currentEmployess
       }
    },
    actions:{
        addDepartment(newDepartment:DepartmentsDTO){
            this.departments.push(newDepartment)
        },
        addEmployee(newEmployee:EmployeeDTO){
            this.employees.push(newEmployee)
        },
        deleteDepartment(deptId:number){
            let checkDepartmentHasEmployee = this.employees.filter((employee:EmployeeDTO)=> employee.departmentId == deptId)
            if (checkDepartmentHasEmployee.length > 0) {
              alert('you can not delete this department')
            } else {
                
              this.departments = this.departments.filter((department:DepartmentsDTO)=> department.id != deptId)
            }
        },
        deleteEmployee(empId:number){
            this.employees = this.employees.filter((emp:EmployeeDTO)=>emp.id != empId)
           
            
        },
     
    }
  })