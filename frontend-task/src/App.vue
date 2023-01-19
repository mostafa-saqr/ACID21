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
  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">Create</button>

  <div class="tab-pane fade show active" id="departments-tab-pane" role="tabpanel" aria-labelledby="departments-tab" tabindex="0">
    
    <DepartmentList :departments="departments"/>
  </div>
  <div class="tab-pane fade" id="employees-tab-pane" role="tabpanel" aria-labelledby="employees-tab" tabindex="0">

    <EmployeeList :employees="employees" :departments="departments"/>
  </div>
  
</div>
    
  </div>
      </div>
    </div>
  </div>
  <div>
  
    <AddEmployee :departments="departments"/>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { departmentsData, employeesData } from './data/organizationData';
import { DepartmentsDTO, EmployeeDTO } from './model/organization.model';
import DepartmentList from '@/components/DepartmentsList.vue'
import EmployeeList from '@/components/EmployeesList.vue'
import AddEmployee from '@/components/addEmployee.vue'
export default defineComponent({
  
  components: {
    DepartmentList,
    EmployeeList,
    AddEmployee
  },
  data(){
    return {
      departments : departmentsData as DepartmentsDTO[],
      employees : employeesData as EmployeeDTO[],

    }
  }
});
</script>
