<template>
<div class="accordion" id="accordionExample">
 <template v-for="department, index in departments" :key="department.id">
  <div class="accordion-item" v-if="index > (pageIndex*pageSize - 1) &&
        index < (pageIndex*pageSize+pageSize) " >
    <h2 class="accordion-header" :id="'headingOne-'+department.id">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseOne-'+department.id" :aria-expanded="index == 0?'true':'false'" :aria-controls="'collapseOne-'+department.id">
        {{department.name}}
      </button>
    </h2>
    <div :id="'collapseOne-'+department.id" :class="'accordion-collapse collapse'+(index==0?' show':'')" :aria-labelledby="'headingOne-'+department.id" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <template v-for="employee in employees" :key="employee.id" >
            <li v-if="employee.departmentId == department.id">{{ employee.name }}</li>
          </template>
      </div>
    </div>
  </div>
 </template>
   
  
 
</div>
<Pagination :pageIndex="pageIndex" :pageSize="pageSize" :results="departments"  @moveToPageNo="moveToPageNo"/>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Pagination from '@/components/Pagination.vue';
import { DepartmentsDTO, EmployeeDTO } from '@/model/organization.model';
export default defineComponent({
  name:'OrganizationTree',
  props:['employees','departments'],
  components: {Pagination},
  data(){
    return {
   
      pageSize:3,
      pageIndex:0,
   

    }
  },
  methods:{
    getDepartmentName(departmentId:number){
        let selectedDepartment:DepartmentsDTO[] =  this.departments.filter((department:DepartmentsDTO)=> department.id == departmentId)
        return selectedDepartment[0].name
    },
    deleteEmployeeById(id:number){
      this.$emit('deleteEmployee',id)
      
    },
    moveToPageNo(value:number){
      this.pageIndex = value
      
    }
  }
});
</script>