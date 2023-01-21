<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
 
        <div class="accounting-app">
    <h1>ACID21</h1>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="departments-tab" data-bs-toggle="tab" data-bs-target="#departments-tab-pane" type="button" role="tab" aria-controls="departments-tab-pane" aria-selected="true">departments</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="employees-tab" data-bs-toggle="tab" data-bs-target="#employees-tab-pane" type="button" role="tab" aria-controls="employees-tab-pane" aria-selected="false">employees</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="org-tab" data-bs-toggle="tab" data-bs-target="#org-tab-pane" type="button" role="tab" aria-controls="org-tab-pane" aria-selected="false">Organization Tree</button>
  </li>
 
 
</ul>
<div class="tab-content" id="myTabContent">

  <div class="tab-pane fade show active" id="departments-tab-pane" role="tabpanel" aria-labelledby="departments-tab" tabindex="0">
<div class="row mt-3">
      <div class="col-md-6">

      </div>
      <div class="col-md-6 text-end">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addDepartmentModal">Add Department</button>

      </div>
    </div>
  <DepartmentList :departments="departments" @depSearchWord="departmentSearchByName"  @deleteDepartment="deleteDepartment"/>
  </div>
  <div class="tab-pane fade" id="employees-tab-pane" role="tabpanel" aria-labelledby="employees-tab" tabindex="0">
    <div class="row mt-3">
      <div class="col-md-6">

      </div>
      <div class="col-md-6 text-end">
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">Add Employee</button>

      </div>
    </div>
    
    

    <EmployeeList :employees="employees" :departments="departments" @employeeSearchResult="employeeSearchByName" @deleteEmployee="deleteEmployee"/>
  </div>
  <div class="tab-pane fade" id="org-tab-pane" role="tabpanel" aria-labelledby="org-tab" tabindex="0">
    
    <OrganizationTree :employees="employees" :departments="departments" />
    

  </div>
  
</div>
    
  </div>
      </div>
    </div>
  </div>
  <div>
  
    <AddEmployee :departments="departments" @newEmployee="addNewEmployee"/>
    <AddDepartment  @newDepartment="addNewDepartment"/>
{{ counterStore.counter }}
<button @click="counterStore.counter++">count++</button>
<button @click="counterStore.counter--">count--</button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { departmentsData, employeesData } from './data/organizationData';
import { DepartmentsDTO, EmployeeDTO } from './model/organization.model';
import DepartmentList from '@/components/DepartmentsList.vue'
import EmployeeList from '@/components/EmployeesList.vue'
import AddEmployee from '@/components/addEmployee.vue'
import AddDepartment from '@/components/addDepartment.vue'
import OrganizationTree from '@/components/organizationList.vue'
import {counterStore} from '@/store/store'
export default defineComponent({
  
  components: {
    DepartmentList,
    EmployeeList,
    AddEmployee,
    AddDepartment,
    OrganizationTree
  },
  data(){
    return {
      departments : departmentsData as DepartmentsDTO[],
      employees : employeesData as EmployeeDTO[],
      counterStore:counterStore()
     

    }
  },
  methods:{
    userStore(){
      
    
    },
    departmentSearchByName(departmentSearchKeyword:string){
      if (departmentSearchKeyword.length > 0) {
      this.departments = departmentsData.filter((item)=>  item.name.toLowerCase().includes(departmentSearchKeyword.toLowerCase()))
      } else {
        this.departments = departmentsData
      }
      
    },
    employeeSearchByName(employeeSearchKeyword:string){
      if (employeeSearchKeyword.length > 0) {
      this.employees = employeesData.filter((item)=>  item.name.toLowerCase().includes(employeeSearchKeyword.toLowerCase()))
      } else {
        this.employees = employeesData
      }
      
    },
    addNewEmployee(value:EmployeeDTO){
      
      this.employees.push(value)
    },
    addNewDepartment(value:DepartmentsDTO){
      this.departments = [...this.departments,value]
      
    },
    deleteEmployee(value:number){
      this.employees = this.employees.filter((employee:EmployeeDTO)=> employee.id != value)
    },
    deleteDepartment(value:number){
      let checkDepartmentHasEmployee = this.employees.filter((employee:EmployeeDTO)=> employee.departmentId == value)
      if (checkDepartmentHasEmployee.length > 0) {
        alert('you can not delete this department')
      } else {
        this.departments = this.departments.filter((department:DepartmentsDTO)=> department.id != value)
      }
    },
  
  },
 mounted(){
  this.userStore()
 }
});
</script>
