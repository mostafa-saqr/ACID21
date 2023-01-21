<template>
        <input type="text" v-model="departmentSearchKeyword" @input="departmentSearchByName()" placeholder="search on departments">

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Departments</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <template v-for="department, index in (departments as DepartmentsDTO[]) " :key="department.id">
      <tr v-if="index > (pageIndex*pageSize - 1) &&
        index < (pageIndex*pageSize+pageSize) ">
      <th scope="row">{{index}}</th>
      <td v-if="department.name">{{department.name}}</td>
      <td><button @click="deleteDepartmentById(department.id)">Delete</button></td>
      
    </tr>
    </template>
    
   
   
  </tbody>
</table>
<Pagination :pageIndex="pageIndex" :pageSize="pageSize" :results="departments"  @moveToPageNo="moveToPageNo"/>
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
   departmentSearchKeyword:'',
      pageSize:3,
      pageIndex:0
     
   

    }
  },
  methods:{
    deleteDepartmentById(id:number){
      this.$emit('deleteDepartment',id)
    },
    moveToPageNo(value:number){
      this.pageIndex = value
      console.log(value)
    },
    departmentSearchByName(){
      this.pageIndex = 0
      this.$emit('depSearchWord',this.departmentSearchKeyword)
    }
  },
  watch:{
    getNewPagination(){
    }
  }
});
</script>