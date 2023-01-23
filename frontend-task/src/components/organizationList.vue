<template>
<div class="accordion" id="accordionExample">
 <template v-for="department, index in orgStore.departments" :key="index">
  <div class="accordion-item" v-if="index > (pageIndex*pageSize - 1) &&
        index < (pageIndex*pageSize+pageSize) " >
    <h2 class="accordion-header" :id="'headingOne-'+index">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseOne-'+index" :aria-expanded="index == 0?'true':'false'" :aria-controls="'collapseOne-'+index">
        {{department.name}}
      </button>
    </h2>
    <div :id="'collapseOne-'+index" :class="'accordion-collapse collapse'+(index==0?' show':'')" :aria-labelledby="'headingOne-'+index" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <template v-for="employee in orgStore.employees" :key="employee.id" >
            <li v-if="employee.departmentId == department.id">{{ employee.name }}</li>
          </template>
          
      </div>
    </div>
  </div>
 </template>
   
  
 
</div>
<Pagination :pageIndex="pageIndex" :pageSize="pageSize" :results="orgStore.departments"  @moveToPageNo="moveToPageNo"/>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Pagination from '@/components/Pagination.vue';
import { DepartmentsDTO, EmployeeDTO } from '@/model/organization.model';
import { useOrganizationStore } from '@/store/store';
export default defineComponent({
  name:'OrganizationTree',
  props:['employees','departments'],
  components: {Pagination},
  data(){
    return {
   
      pageSize:3,
      pageIndex:0,
      orgStore:useOrganizationStore()

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