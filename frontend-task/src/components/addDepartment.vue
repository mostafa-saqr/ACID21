<template>
    <!-- Button trigger modal -->
    
    
    <!-- Modal -->
    <div class="modal fade" id="addDepartmentModal" tabindex="-1" aria-labelledby="addDepartmentModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="addDepartmentModalLabel">Add Department</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
      <div class="mb-3">
        <label for="departmentName" class="form-label">Name</label>
        <input type="text" class="form-control" v-model="newDepartment.name" id="departmentName" aria-describedby="DepartmentNameHelp">
        
      </div>
      
      
    </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addDepartment()"  data-bs-dismiss="modal" >Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    import { DepartmentsDTO } from '@/model/organization.model';
    export default defineComponent({
      name:'AddDepartment',
      components: {},
      props:['departments'],
      data(){
        return {
         newDepartment:{} as DepartmentsDTO
    
        }
      },
      methods:{
        addDepartment(){
          let newDepartment:DepartmentsDTO = {
            id:Math.random(),
            name:this.newDepartment.name,
          }
          console.log(newDepartment)
          this.$emit('newDepartment',newDepartment)
        }
      }
    });
    </script>