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
    <tr v-for="department, index in (departments.slice(paginationValues.pageIndex*paginationValues.pageSize,paginationValues.pageIndex*paginationValues.pageSize + paginationValues.pageSize) as DepartmentsDTO[]) " :key="department.id">
      <th scope="row">{{index}}</th>
      <td>{{department.name}}</td>
      <td><button @click="deleteDepartmentById(department.id)">Delete</button></td>
      
    </tr>
   
  </tbody>
</table>
<Pagination :paginationValues="paginationValues" @moveToPageNo="moveToPageNo"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pagination from '@/components/Pagination.vue';

import { DepartmentsDTO } from '@/model/organization.model';
export default defineComponent({
  name:'DepartmentList',
  props:['departments'],

  components: {Pagination},
  data(){
    return {
     paginationValues:{
      pageSize:15,
      pageIndex:0,
      resultsLength:this.departments.length
     }

    }
  },
  methods:{
    deleteDepartmentById(id:number){
      this.$emit('deleteDepartment',id)
    },
    moveToPageNo(value:number){
      this.paginationValues.pageIndex = value
    }
  }
});
</script>