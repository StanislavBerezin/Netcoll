


<template>
  <div>
    <nav class="navbar">

      <div class="navbar-brand">
        
          <p class="fix">LOGO</p>
        


        <button class="button navbar-burger burg" @click="makeBurger" v-bind:class="{ 'is-active': activator }" aria-haspopup="true"
          aria-controls="dropdown-menu">
            <span></span>
            <span></span>
            <span></span>
        </button>


      </div>

      <div class="navbar-menu mobile" v-bind:class="{ 'is-active': activator }">

        <div class="navbar-end">



          <b-dropdown v-model="navigation" position="is-bottom-left">
            <a class="navbar-item shadow" slot="trigger">
                        <span> John Smith</span>
                        <b-icon icon="menu-down"></b-icon>
    </a>

            <b-dropdown-item custom>
              Logged as <b>Rafael Beraldo</b>
            </b-dropdown-item>
            <hr class="dropdown-divider">
            <b-dropdown-item>
              <p>

                <router-link :to="{name: 'userProfile', params:{ id: 1}}">
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

          <b-dropdown v-model="navigation" style="margin-left:0px;" position="is-bottom-left">
            <a class="navbar-item shadow" slot="trigger"> Credit: $ 25  <b-icon icon="menu-down"></b-icon></a>
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


          
              <b-icon icon="school" class="shadow fix mob" style="margin-right:15px;"></b-icon>
                        <span class="shadow fix">Enrolled at:  {{uni}}</span>
                        
                   



        </div>
      </div>
    </nav>

  </div>
</template>
<script>
 
  export default {
    data() {
      return {
        navigation: 'home',
        uni: "QUT",
        activator: false,

      }
    },
    methods: {

      makeBurger() {
        this.activator = !this.activator
        return this.activator
      }
    }

  }

</script>
<style lang="css" scoped>
  .navbar {
   background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #56ccf2, #2f80ed); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #56ccf2, #2f80ed);
    padding: 20px;
    padding-right:10%;
    padding-left:10%;
    -webkit-box-shadow: 0 8px 6px -6px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 8px 10px -6px #999;
    border-bottom: 2px solid #95a5a6(155, 89, 182, 0.5);
  }

 .icon {
    margin-right: 10px;
  }
  
  .fix{
    color:#fff;
    margin-top:12px;
    
  }

  a.dropdown-item:hover,
  a.visited,
  a:link {
    color: #3273dc;
  }

  .shadow {
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
    0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  }


  .navbar-item:hover {
    background-color: #2980b9;
  }

  a:link,
  a:visited {
    color: #4a4a4a !important;
  }
  @media screen and (max-width: 768px) {

    .burg {
      color: #fff !important;
    }
    .mobile div{
        width:100%;
    }
    .mob{
        margin-left:15px;
    }
    .mobile {
      background-color: rgba(32, 156, 238, 0.0);
      box-shadow: none;
    }
    button:focus:not(:active),
    .button.is-focused:not(:active) {
      box-shadow: none !important;
    }
  }

  .burg {
    background-color: rgba(52, 152, 219, 0.0);
    border: none;
  }

  .form {
    display: flex !important;
    justify-content: center !important;
  }

</style>
