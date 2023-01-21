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
    <template  v-for="employee, index in (employees as EmployeeDTO[]) " :key="employees.id">
      <tr v-if="index > (pageIndex*pageSize - 1) &&
        index < (pageIndex*pageSize+pageSize) ">
      <th scope="row">{{index}}</th>
      <td>{{employee.name}}</td>
      <td>{{employee.departmentName}}</td>
      <td><button @click=deleteEmployeeById(employee.id)>Delete</button></td>
      
    </tr>
    </template>
    
   
  </tbody>
</table>
<Pagination  :pageIndex="pageIndex" :pageSize="pageSize" :results="employees" @moveToPageNo="moveToPageNo"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pagination from '@/components/Pagination.vue';
import { DepartmentsDTO, EmployeeDTO } from '@/model/organization.model';
export default defineComponent({
  name:'EmployeeList',
  props:['employees','departments'],
  components: {Pagination},
  data(){
    return {
   
      pageSize:3,
      pageIndex:0,
      employeeSearchKeyword:'',

    }
  },
  methods:{
    getDepartmentName(departmentId:number){
        let selectedDepartment:DepartmentsDTO[] =  this.departments.filter((department:DepartmentsDTO)=> department.id == departmentId)
        return selectedDepartment[0].name
    },
    employeeSearchByName(){
      this.pageIndex=0
      this.$emit('employeeSearchResult',this.employeeSearchKeyword)
    },
    deleteEmployeeById(id:number){
      this.$emit('deleteEmployee',id)
      
    },
    moveToPageNo(value:number){
      this.pageIndex = value
      
    }
  },
  beforeMount(){
    this.employees.map((emp:EmployeeDTO)=>{
      emp.departmentName = this.departments.filter((department:DepartmentsDTO)=> department.id == emp.departmentId)[0].name
    })
  }
});
</script>