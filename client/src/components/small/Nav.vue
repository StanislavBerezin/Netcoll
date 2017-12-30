<template>
  <div>
    <nav class="navbar">

      <div class="navbar-brand">
        <a class="navbar-item">
                <img :src="Logo" alt="Netcoll">
                <img src="https://vectr.com/tmp/e6LG2rLnfi/bybsV647Z.svg?width=100&height=100&select=bybsV647Zpage0" style="height:50px;"alt="">
            </a>





        <button class="button navbar-burger" aria-haspopup="true" aria-controls="dropdown-menu">
            <span></span>
            <span></span>
            <span></span>
        </button>










      </div>

      <div class="navbar-menu ">

        <div class="navbar-end">
          <b-dropdown position="is-bottom-left">

            <a class="navbar-item" slot="trigger">
              <p>Login</p>

            </a>

            <b-dropdown-item custom paddingless>
              <form action="">
                <div class="modal-card" style="max-width:300px;">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Login</p>

                  </header>
                  <section class="modal-card-body">
                    <b-field label="Your email">
                      <b-input type="email" v-model="user.email" placeholder="Your email" required>
                      </b-input>
                    </b-field>

                    <b-field label="Password">
                      <b-input type="password" v-model="user.password" password-reveal placeholder="Your password" required>
                      </b-input>
                    </b-field>

                    <b-checkbox>Remember me</b-checkbox>
                  </section>
                  <footer class="modal-card-foot">
                    <button class="button is-primary" @click.prevent="logUser">Login</button>
                  </footer>
                </div>
              </form>
            </b-dropdown-item>
          </b-dropdown>






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

  export default {
    data() {
      return {
        Logo,
        isSignup: false,
        user: {
          password: '',
          email: ''
        }

      }
    },
    components: {
      Register
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
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (max-width: 768px) {
    .navbar-burger {
      background-color: transparent;
      margin-right: -60px;
      z-index: 0;
    }
    .navbar {
      background-color: rgba(255, 255, 255, 0.8);
      position: fixed;
      width: 100%;
    }
  }

</style>
