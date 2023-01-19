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
    <tr v-for="employee, index in (employees as EmployeeDTO[]) " :key="employees.id">
      <th scope="row">{{index}}</th>
      <td>{{employee.name}}</td>
      <td>{{getDepartmentName(employee.departmentId)}}</td>
      <td><button >Delete</button></td>
      
    </tr>
   
  </tbody>
</table>
<Pagination />
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
     

    }
  },
  methods:{
    getDepartmentName(departmentId:number){
        let selectedDepartment:DepartmentsDTO[] =  this.departments.filter((department:DepartmentsDTO)=> department.id == departmentId)
        return selectedDepartment[0].name
    }
  }
});
</script>