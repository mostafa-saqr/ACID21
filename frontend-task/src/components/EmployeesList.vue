<template>
    <input type="text" v-model="employeeSearchKeyword" @input="employeeSearchByName()" placeholder="search on employees">
   
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee</th>
      <th scope="col">Department</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <template  v-for="employee, index in (currentEmployess as EmployeeDTO[]) " :key="employee.id">
      <tr v-if="index > (pageIndex*pageSize - 1) &&
        index < (pageIndex*pageSize+pageSize) ">
      <th scope="row">{{index}}</th>
      <td>{{employee.name}}</td>
      <td>{{getDepartmentName(employee.departmentId)}}</td>
      <td><button class="btn btn-danger" @click=deleteEmployeeById(employee.id)>Delete</button></td>
      
    </tr>
    </template>
    
   
  </tbody>
</table>
<Pagination  :pageIndex="pageIndex" :pageSize="pageSize" :results="currentEmployess" @moveToPageNo="moveToPageNo"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pagination from '@/components/Pagination.vue';
import { DepartmentsDTO, EmployeeDTO } from '@/model/organization.model';
import { useOrganizationStore } from '@/store/store';
export default defineComponent({
  name:'EmployeeList',
  props:[],
  components: {Pagination},
  data(){
    return {
   
      pageSize:3,
      pageIndex:0,
      employeeSearchKeyword:'',
      orgStore:useOrganizationStore(),
    currentEmployess :[] as EmployeeDTO[]

    }
  },
  methods:{
    getEmployeesList(){
      this.currentEmployess = this.orgStore.getEmployees
    },
   
    getDepartmentName(departmentId:number){
        let selectedDepartment:DepartmentsDTO[] =  this.orgStore.departments.filter((department:DepartmentsDTO)=> department.id == departmentId)
        if(selectedDepartment.length > 0){
         return selectedDepartment[0].name

        }
    },
   
    employeeSearchByName(){
      this.pageIndex = 0
      if (this.employeeSearchKeyword.length > 0) {
      this.currentEmployess = this.orgStore.employees.filter((item)=>  item.name.toLowerCase().includes(this.employeeSearchKeyword.toLowerCase()))
      } else {
        this.currentEmployess = this.orgStore.employees
      }
      
    },
    deleteEmployeeById(id:number){
      
      this.orgStore.deleteEmployee(id)
      this.getEmployeesList()
      
      let employeeLen = this.currentEmployess.length
      if(Math.ceil(employeeLen / this.pageSize) == this.pageIndex && this.pageIndex > 0){
        this.pageIndex--
      }
    },
    moveToPageNo(value:number){
      this.pageIndex = value
      
    }
  },
  mounted(){
    this.getEmployeesList()
  }

});
</script>