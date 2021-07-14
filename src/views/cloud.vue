<template>
<div>
  <div class="index" v-for="(item, index) in banners" :key="index">
    <img class="cy-img" :src="item.imgUrl" >
     <p class="cy-text" >{{item.name}}</p>
     </div>
</div>
</template>


<script>
//import axios from 'axios';
import field from './../assets/experts_academic_information.png'
import paper from './../assets/experts_paper.png'
import school from  './../assets/experts_information.png'

export default{
    data(){
        return{
          banners: [
              { imgUrl: field ,name:"专家领域词云"},
              { imgUrl: paper ,name:"专家发文期刊词云"},
              { imgUrl: school ,name:"专家所在高校词云"},
          ],
        }
    }
}
</script>

<style>
.index {
  display: inline-block;
  /* border:2px solid gray; */
}
.cy-img {
  width: 330px;
  height: 260px;
  margin:10px;
}
</style>
