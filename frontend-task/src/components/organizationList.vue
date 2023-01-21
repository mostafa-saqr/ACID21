<template>
<div class="accordion" id="accordionExample">
  <template v-for="department in departments" :key="department.id">
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
  name:'EmployeeList',
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