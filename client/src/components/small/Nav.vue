<template>
  <div>
    <nav class="navbar">

      <div class="navbar-brand check">
        <a class="navbar-item">
               <p>LOGO</p>
            </a>


        <button class="button navbar-burger burg" @click="makeBurger"  v-bind:class="{ 'is-active': activator }" aria-haspopup="true" aria-controls="dropdown-menu">
            <span></span>
            <span></span>
            <span></span>
        </button>


      </div>

      <div class="navbar-menu mobile" v-bind:class="{ 'is-active': activator }">

        <div class="navbar-end">
          <b-dropdown position="is-bottom-left">

        
          </b-dropdown>



        <a class="navbar-item" slot="trigger" @click="isLogin = true">
            <p>Login</p>

          </a>
           <b-modal :active.sync="isLogin" has-modal-card>
            <Login></Login>
          </b-modal>


          <a class="navbar-item" slot="trigger" @click="isSignup = true">
            <p>Sign up</p>

          </a>

          <b-modal :active.sync="isSignup" has-modal-card>
            <Register></Register>
          </b-modal>

        </div>
      </div>
    </nav>

  </div>
</template>
<script>
  import Logo from '@/assets/logo.svg'
  import Register from './Register.vue'
  import Auth from '../../connection/Auth.js'
  import Login from './Login.vue'

  export default {
    data() {
      return {
        Logo,
        msg: '',
        activator: false,
        isSignup: false,
        isLogin:false,
        user: {
          password: '',
          email: ''
        }

      }
    },
    components: {
      Register,
      Login
    },
    methods: {
      async logUser() {

        try {

          const userData = await Auth.loginUser(this.user)

          this.$store.dispatch('setToken', userData.data.user.tokens[0].token)
          this.$store.dispatch('setExtra', userData.data.extraToken)
          this.$store.dispatch('setUni', userData.data.user.university)
          this.$store.dispatch('setUsername', userData.data.user.username)
          this.$store.dispatch('setLog', true)

        } catch (err) {
          console.log(err)
        }





        const loadingComponent = this.$loading.open()
        setTimeout(() => loadingComponent.close(), 2 * 1000)
      },

      makeBurger() {
        this.activator = !this.activator
        return this.activator
      }
    },
    computed: {
      toggleClass() {
        return {

        }
      }
    }

  }

</script>
<style lang="css" scoped>
  .navbar {
    padding:15px;
    position:fixed;
    width:100%;
    z-index: 1;
    background: linear-gradient(to left, rgba(183, 0, 185, 0.7), rgba(52, 152, 219, 0.7));

    -webkit-box-shadow: 0 6px 10px -6px rgba(32, 156, 238, 0.7);
    -moz-box-shadow: 0 6px 10px -6px rgba(32, 156, 238, 0.7);
    box-shadow: 0 6px 10px -6px rgba(32, 156, 238, 0.7);
    border-bottom: 1px solid #95a5a6(155, 89, 182, 0.5);
  }

  @media screen and (max-width: 768px) {
   
    .mobile p, button{
        color:#fff !important;
    }
  
    .mobile{
          background-color: rgba(32, 156, 238, 0.0);
          box-shadow: none;
    }
     button:focus:not(:active), .button.is-focused:not(:active) {
    box-shadow: none !important;    
  }
  }
  .burg{
      background-color:rgba(52, 152, 219, 0.0);
      border: none;
  }
 

</style>
