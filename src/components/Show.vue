<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 1100px;">
      <el-tab-pane label="venue嵌入主元标准差" name="ywt"><variance-venue /></el-tab-pane>
      <el-tab-pane label="FB15k237嵌入主元标准差变化" name="ewt"><variance-te class="variance"/><variance-te-10 class="variance"/><variance-te-20 class="variance-2"/></el-tab-pane>
      <el-tab-pane label="venue节点聚类（PCA）" name="swt"><pca-venue-two /></el-tab-pane>
      <el-tab-pane label="venue节点聚类（t-SNE）" name="zdy"><tsne-venue class="tsneVenue"/><tsne-venue-bad class="tsneVenue"/></el-tab-pane>
      <el-tab-pane label="author节点聚类（PCA，3D）" name="xxx"><pca-author-three /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PcaAuthorThree from '../views/PcaAuthorThree.vue';
import PcaVenueTwo from '../views/PcaVenueTwo.vue';
import TsneVenue from '../views/TsneVenue.vue';
import TsneVenueBad from '../views/TsneVenueBad.vue';
import VarianceTe from '../views/VarianceTe.vue';
import VarianceTe10 from '../views/VarianceTe10.vue';
import VarianceTe20 from '../views/VarianceTe20.vue';
import VarianceVenue from '../views/Variance_venue.vue';
//import ViolinPlot from "../views/ViolinPlot";
export default {
  data() {
    return {
      activeName: "ywt",
    };
  },
  components: {
    VarianceVenue,
    VarianceTe,
    VarianceTe10,
    VarianceTe20,
    PcaVenueTwo,
    TsneVenue,
    TsneVenueBad,
    PcaAuthorThree,
  },
  methods: {
      handleClick(tab, event) {
      console.log(tab, event);
      // this.$router.push(`/main/view/${tab.name}`);
    },
  },
};
</script>
<style>
.variance{
  display: inline-block;
}
.tsneVenue{
  display: inline-block;
}


</style>
