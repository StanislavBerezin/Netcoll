<template>
  <nav class="navbar">
    <div class="navbar-brand">
      
      <a class="navbar-item fix">
                <img  alt="Netcoll logo">
            </a>

    <b-dropdown v-model="navigation" position="is-bottom-left">
    <a class="navbar-item" slot="trigger">
                        <span>John Smith</span>
                        <b-icon icon="menu-down"></b-icon>
    </a>

    <b-dropdown-item custom>
            Logged as <b>Rafael Beraldo</b>
          </b-dropdown-item>
          <hr class="dropdown-divider">
          <b-dropdown-item>
            <p>
                
                <router-link :to="{name: 'userProfile'}">
                  <b-icon icon="account"></b-icon>
                    My profile
                </router-link>
                            
            </p>
                            
                        
          </b-dropdown-item>
            <b-dropdown-item>
            <p>
                <b-icon icon="account"></b-icon>
                            Become a content creator
            </p>
                            
                        
          </b-dropdown-item>
           <b-dropdown-item>
            
                    <router-link :to="{name: 'purchasedArticles'}">
                  <b-icon icon="basket"></b-icon>
                            My purchase history
                </router-link>
                           
                        
          </b-dropdown-item>
          
            <b-dropdown-item>
            
                            <b-icon icon="account-off"></b-icon>
                            Log out
                        
          </b-dropdown-item>
          
        </b-dropdown>

         <b-dropdown v-model="navigation" position="is-bottom-left">
      <a class="navbar-item" slot="trigger"> Credit: $ 25  <b-icon icon="menu-down"></b-icon></a>
      <b-dropdown-item custom>
            Transaction options</b>
          </b-dropdown-item>
          <hr class="dropdown-divider">
          <b-dropdown-item>
            <p>
                <b-icon icon="plus-circle"></b-icon>
                            Add credit
            </p>
                            
                        
          </b-dropdown-item>
           <b-dropdown-item>
            
                            <b-icon icon="minus-circle"></b-icon>
                            Widhdraw credit
                        
          </b-dropdown-item>
          
            <b-dropdown-item>
            
                            <b-icon icon="transfer"></b-icon>
                            Transfer credit
                        
          </b-dropdown-item>
          
            
            

            </b-dropdown>

          
            
             

    </div>

  
      <div class="navbar-end">

          <a class="navbar-item">
              <b-icon icon="school" style="margin-right:15px;"></b-icon>
                        <span>Enrolled at:  {{uni}}</span>
                        
                    </a>

          
      </div>

  </nav>
</template>

<script>
  export default {
    data() {
      return {

        navigation: 'home',
        uni: "QUT"
      }
    }
  }

</script>
<style scoped>
  nav {
    background-color: rgba(41, 128, 185,1.0);
    padding: 0px 10px;
  }

  .icon {
    margin-right: 10px; 
  }
  .navbar-end{
       margin-right: 10%;
     
  }
  .navbar-brand{
    margin-left: 5%;
  }
a.dropdown-item:hover, a.visited, a:link{
    color:#3273dc;
}
.fix{
    margin-right: 80px;
}
.navbar-item:hover{
  background-color:#2980b9;
}
a:link, a:visited{
  color: #4a4a4a !important;
}
</style>
