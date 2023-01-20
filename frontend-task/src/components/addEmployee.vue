<template>
<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="addEmployeeModal" tabindex="-1" aria-labelledby="addEmployeeModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addEmployeeModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
  <div class="mb-3">
    <label for="empolyeeName" class="form-label">Name</label>
    <input type="text" class="form-control" v-model="newEmployee.name" id="empolyeeName" aria-describedby="EmployeeNameHelp">
    
  </div>
  <div class="mb-3">
    <label for="empolyeeName" class="form-label">Department</label>

    <select class="form-select" aria-label="Default select example" v-model="newEmployee.departmentId">
  <option selected value="0">select Department</option>
  <option v-for="department in (departments as DepartmentsDTO[])" :value="department.id">{{department.name}}</option>

</select>
  </div>
  
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addEmployee()" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DepartmentsDTO, EmployeeDTO } from '@/model/organization.model';
export default defineComponent({
  name:'AddEmployee',
  components: {},
  props:['departments'],
  data(){
    return {
     newEmployee:{
      departmentId:0
     } as EmployeeDTO

    }
  },
  methods:{
    addEmployee(){
      let newEmployee:EmployeeDTO = {
        id:Math.random(),
        name:this.newEmployee.name,
        departmentId:this.newEmployee.departmentId
      }
      console.log(newEmployee)
      this.$emit('newEmployee',newEmployee)
    }
  }
});
</script>