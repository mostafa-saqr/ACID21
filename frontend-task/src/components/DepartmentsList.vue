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
    <template v-for="department, index in (currentDepartment as DepartmentsDTO[]) " :key="department.id">
      <tr v-if="index > (pageIndex*pageSize - 1) &&
        index < (pageIndex*pageSize+pageSize) ">
      <th scope="row">{{index}}</th>
      <td v-if="department.name">{{department.name}}</td>
      <td><button class="btn btn-danger" @click="deleteDepartmentById(department.id)">Delete</button></td>
      
    </tr>
    </template>
    
   
   
  </tbody>
</table>

<Pagination :pageIndex="pageIndex" :pageSize="pageSize" :results="currentDepartment"  @moveToPageNo="moveToPageNo"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pagination from '@/components/Pagination.vue';

import { DepartmentsDTO } from '@/model/organization.model';
import { useOrganizationStore } from '@/store/store';


export default defineComponent({
  name:'DepartmentList',
  props:['departments'],

  components: {Pagination},
  data(){
    return {
   departmentSearchKeyword:'',
      pageSize:3,
      pageIndex:0,
    orgStore:useOrganizationStore(),
    currentDepartment :[] as DepartmentsDTO[]
   

    }
  },
  methods:{
    getDepartments(){
     this.currentDepartment = this.orgStore.getDepartments
    },
    deleteDepartmentById(id:number){
      this.orgStore.deleteDepartment(id)
      this.getDepartments()
     let departmentsLen = this.currentDepartment.length
      if(Math.ceil(departmentsLen / this.pageSize) == this.pageIndex && this.pageIndex > 0){
        this.pageIndex--
      }
    },
    moveToPageNo(value:number){
      this.pageIndex = value
    },
  
    departmentSearchByName(){
            this.pageIndex = 0
            if (this.departmentSearchKeyword.length > 0) {
            this.currentDepartment = this.orgStore.departments.filter((item)=>  item.name.toLowerCase().includes(this.departmentSearchKeyword.toLowerCase()))
            } else {
              this.currentDepartment = this.orgStore.departments
            }
            
          }
  },
  mounted(){
    this.getDepartments()
  }
});
</script>