<template>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Departments</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="department, index in (departments as DepartmentsDTO[]) " :key="department.id">
      <th scope="row">{{index}}</th>
      <td>{{department.name}}</td>
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
  name:'DepartmentList',
  props:['departments'],

  components: {Pagination},
  data(){
    return {
     

    }
  }
});
</script>