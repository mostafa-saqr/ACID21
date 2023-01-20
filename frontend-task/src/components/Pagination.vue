<template>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item" @click="moveToPage(index)" v-for="index in (Math.ceil((paginationValues.resultsLength - 1)/paginationValues.pageSize))"><a class="page-link" href="#" >{{index }}</a></li>
   
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name:'Pagination',
  props:['paginationValues'],
  components: {},
  data(){
    return {
     

    }
  },
  methods:{
   moveToPage(pageNo:number){
    this.$emit('moveToPageNo',pageNo - 1)
   }
  }
});
</script>