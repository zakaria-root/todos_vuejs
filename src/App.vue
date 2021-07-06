<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/" class="btn btn-info">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
<div id="app" >
  <nav class="navbar navbar-expand-lg navbar-dark bg-info mb-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TODOS</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
        <router-link to="/about" class="nav-link" href="#">About</router-link>
       
        
      </div>
    </div>
  </div>
</nav>
  <router-view/>
</div>
<!--/.Navbar-->
</template>
<script>

export default {
  
}

</script>
<style scoped>

</style>