<template>
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
    <tr v-for="employee, index in (employees.slice(paginationValues.pageIndex*paginationValues.pageSize,paginationValues.pageIndex*paginationValues.pageSize + paginationValues.pageSize) as EmployeeDTO[]) " :key="employees.id">
      <th scope="row">{{index}}</th>
      <td>{{employee.name}}</td>
      <td>{{getDepartmentName(employee.departmentId)}}</td>
      <td><button @click=deleteEmployeeById(employee.id)>Delete</button></td>
      
    </tr>
   
  </tbody>
</table>
<Pagination :paginationValues="paginationValues" @moveToPageNo="moveToPageNo"/>
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
      paginationValues:{
      pageSize:15,
      pageIndex:0,
      resultsLength:this.employees.length
     }

    }
  },
  methods:{
    getDepartmentName(departmentId:number){
        let selectedDepartment:DepartmentsDTO[] =  this.departments.filter((department:DepartmentsDTO)=> department.id == departmentId)
        return selectedDepartment[0].name
    },
    deleteEmployeeById(id:number){
      this.$emit('deleteEmployee',id)
      this.paginationValues.resultsLength = this.employees.length
      
    },
    moveToPageNo(value:number){
      this.paginationValues.pageIndex = value
    }
  }
});
</script>