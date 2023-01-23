<template>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li :class="pageIndex ==0?'page-item disabled ':'page-item'" @click="moveprev()"><a class="page-link" >Previous</a></li>
    <li class="page-item" @click="moveToPage(index -1)" v-for="index in (Math.ceil((results.length)/pageSize))"><a :class="pageIndex==index -1?'page-link active':'page-link'" href="#" >{{index }}</a></li>
   
    <li :class="pageIndex+1 == (Math.ceil((results.length)/pageSize))?'page-item disabled':'page-item'" @click=" moveNext()"><a class="page-link" >Next</a></li>
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
     disableNextBtn:false,

    }
  },
  methods:{
   moveToPage(pageNo:number){
    this.$emit('moveToPageNo',pageNo)
  
   },
 
   moveNext(){
    
    let pages = Math.ceil(this.results.length/this.pageSize)

    if ( this.pageIndex < pages - 1) {
      this.moveToPage(this.pageIndex +1)
      
    } 
   },
   moveprev(){
    
   
    if ( this.pageIndex > 0) {
      this.moveToPage(this.pageIndex -1)
    }
   },
  }
});
</script>