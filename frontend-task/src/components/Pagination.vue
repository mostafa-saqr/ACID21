<template>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" @click="moveToPage((pageIndex-1))"><a class="page-link" href="#!">Previous</a></li>
    <li class="page-item" @click="moveToPage(index -1)" v-for="index in (Math.ceil((results.length)/pageSize))"><a class="page-link" href="#" >{{index }}</a></li>
   
    <li class="page-item" @click="moveToPage((pageIndex+1))"><a class="page-link" href="#!">Next</a></li>
  </ul>
</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name:'Pagination',
  props:['pageSize','pageIndex','results'],
  components: {},
  data(){
    return {
     

    }
  },
  methods:{
   moveToPage(pageNo:number){
    this.$emit('moveToPageNo',pageNo)
   }

  }
});
</script>