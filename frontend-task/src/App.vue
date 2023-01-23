<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-4 ">
        <h1 class="mb-3"> ACID21 Frontend Task</h1>
        <div class="accounting-app">
    
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
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addDepartmentModal">Add Department</button>

      </div>
    </div>
  <DepartmentList    />
  </div>
  <div class="tab-pane fade" id="employees-tab-pane" role="tabpanel" aria-labelledby="employees-tab" tabindex="0">
    <div class="row mt-3">
      <div class="col-md-6">

      </div>
      <div class="col-md-6 text-end">
    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">Add Employee</button>

      </div>
    </div>
    
    

    <EmployeeList   />
  </div>
  <div class="tab-pane fade" id="org-tab-pane" role="tabpanel" aria-labelledby="org-tab" tabindex="0">
    
    <OrganizationTree :employees="orgStore.employees" :departments="orgStore.departments" />
    

  </div>
  
</div>
    
  </div>
      </div>

    </div>
    <hr>
    <ul>
      <li>i creating this App by using vuejs framework with typescript also use Pinia State Managment. fully supported to typescript and Recommended by <a href="https://vuex.vuejs.org/">vuex</a></li>
      <li>browse all departments</li>
      <li>browse all Employees</li>
      <li>browse organization tree</li>
      <li>create pagination feature so it's synced in all cases browseing,search,add or delete record</li>
      <li>user can add / delete department (on delete department should not have employee)</li>
      <li>user can add / delete employee</li>
      <li>user can search in departmens and employees</li>
      <li>App tested for production</li>
      
    </ul>
  </div>
  <div>
  
    <AddEmployee :departments="orgStore.departments" />
    <AddDepartment />

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DepartmentList from '@/components/DepartmentsList.vue'
import EmployeeList from '@/components/EmployeesList.vue'
import AddEmployee from '@/components/addEmployee.vue'
import AddDepartment from '@/components/addDepartment.vue'
import OrganizationTree from '@/components/organizationList.vue'
import {useOrganizationStore} from '@/store/store'
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
      orgStore: useOrganizationStore()
      
     

    }
  }

});
</script>
<style>
a{
  cursor: pointer;
  
}
a.disabled {
  pointer-events: none;
  cursor: default;
}
</style>