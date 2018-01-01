<template>
<div>
<aside class="menu">
  <p class="menu-label" >
    Search for your units
  </p>
  <ul class="menu-list">
    <li>

      <b-field>
            <b-input placeholder="Search..."
                type="search"
                icon="magnify">
            </b-input>
            <p class="control">
                <button class="button is-link">Search</button>
            </p>
        </b-field>

    </li>
  </ul>
  <p class="menu-label">
    Your curent units
  </p>
  <ul class="menu-list">
    <li><a class="is-active">CAB202</a></li>

    <li><a>CAB 203</a></li>
    <li><a>CAB204</a></li>
    <li><a>IAB330</a></li>
  </ul>
  <p class="menu-label">
    Articles
  </p>
  <ul class="menu-list">
    <li><a>Following</a></li>
    <li><a>Purchased articles</a></li>
    <li><a>Finished articles</a></li>
  </ul>
</aside>


    
</div>
  
</template>
<script>
export default {
  
}
</script>
<style scoped>

.menu-label{

    margin-bottom:20px;
}

</style>
