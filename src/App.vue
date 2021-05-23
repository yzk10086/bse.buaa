<template>
  <div id="app">
    <div id="nav">
      <router-link to="/violinplot1">SepalLength</router-link> |
      <router-link to="/violinplot2">SepalWidth</router-link> |
      <router-link to="/violinplot3">PetalLength</router-link> |
      <router-link to="/violinplot4">PetalWidth</router-link> |
      <router-link to="/pca">PCA</router-link> |
      <router-link to="/pca_3d">PCA-3D</router-link> |
      <router-link to="/tsne">TSNE</router-link> |
      <router-link to="/tsne_3d">TSNE-3D</router-link> ｜
      <router-link to="/pca_2d_venue">PCA-2D-venue</router-link> |
      <router-link to="/tsne_venuegood">tsne_venue(good)</router-link> ｜
      <router-link to="/tsne_venuebad">tsne_venue(bad)</router-link> ｜
      <router-link to="/variance_venue">std_venue</router-link> |
      <router-link to="/variance_TE">std_TransE</router-link> |
      <router-link to="/variance_TE_10">std_TransE_10</router-link>｜
      <router-link to="/variance_TE_20">std_TransE_20</router-link>｜
      <router-link to="/pca_3d_author">PCA-3D-author</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  top: 0;
}

#nav {
  padding: 30px;
  position: relative;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#test {
  position: relative;
  top: 30px;
}
</style>
