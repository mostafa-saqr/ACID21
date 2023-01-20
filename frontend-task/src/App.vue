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
    <div class="dropdown">
  <button class="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    tree
  </button>
  <ul class="dropdown-menu">
   
    <li v-for="department in departments" :key="department.id">{{ department.name }}
        <ul>
          <template v-for="employee in employees" :key="employee.id" >
            <li v-if="employee.departmentId == department.id">{{ employee.name }}</li>
          </template>
        </ul>
      </li>
  </ul>
</div>
  </li>
 
</ul>
<div class="tab-content" id="myTabContent">

  <div class="tab-pane fade show active" id="departments-tab-pane" role="tabpanel" aria-labelledby="departments-tab" tabindex="0">
<div class="row mt-3">
      <div class="col-md-6">
        <input type="text" v-model="departmentSearchKeyword" @input="departmentSearchByName()" placeholder="search on departments">

      </div>
      <div class="col-md-6 text-end">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addDepartmentModal">Add Department</button>

      </div>
    </div>
  <DepartmentList :departments="departments" @deleteDepartment="deleteDepartment"/>
  </div>
  <div class="tab-pane fade" id="employees-tab-pane" role="tabpanel" aria-labelledby="employees-tab" tabindex="0">
    <div class="row mt-3">
      <div class="col-md-6">
    <input type="text" v-model="employeeSearchKeyword" @input="employeeSearchByName()" placeholder="search on employees">

      </div>
      <div class="col-md-6 text-end">
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">Add Employee</button>

      </div>
    </div>
    
    

    <EmployeeList :employees="employees" :departments="departments" @deleteEmployee="deleteEmployee"/>
  </div>
  
</div>
    
  </div>
      </div>
    </div>
  </div>
  <div>
  
    <AddEmployee :departments="departments" @newEmployee="addNewEmployee"/>
    <AddDepartment  @newDepartment="addNewDepartment"/>

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
export default defineComponent({
  
  components: {
    DepartmentList,
    EmployeeList,
    AddEmployee,
    AddDepartment
  },
  data(){
    return {
      departments : departmentsData as DepartmentsDTO[],
      employees : employeesData as EmployeeDTO[],
      departmentSearchKeyword:'',
      employeeSearchKeyword:'',

    }
  },
  methods:{
    departmentSearchByName(){
      if (this.departmentSearchKeyword.length > 0) {
      this.departments = departmentsData.filter((item)=>  item.name.toLowerCase().includes(this.departmentSearchKeyword.toLowerCase()))
      } else {
        this.departments = departmentsData
      }
      
    },
    employeeSearchByName(){
      if (this.employeeSearchKeyword.length > 0) {
      this.employees = employeesData.filter((item)=>  item.name.toLowerCase().includes(this.employeeSearchKeyword.toLowerCase()))
      } else {
        this.employees = employeesData
      }
      
    },
    addNewEmployee(value:EmployeeDTO){
      this.employees.push(value)
    },
    addNewDepartment(value:DepartmentsDTO){
      this.departments.push(value)
      
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
 
});
</script>
