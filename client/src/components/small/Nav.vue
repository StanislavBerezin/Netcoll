<template>
    <div>
    <nav class="navbar">

        <div class="navbar-brand">
            <a class="navbar-item">
                <img :src="Logo" alt="Netcoll">
                <img src="https://vectr.com/tmp/e6LG2rLnfi/bybsV647Z.svg?width=100&height=100&select=bybsV647Zpage0" style="height:50px;"alt="">
            </a>
        </div>

        <div class="navbar-menu ">
            <div class="navbar-end">
                <b-dropdown position="is-bottom-left">

                    <a class="navbar-item" slot="trigger">
                         <p>Login</p>
                       
                    </a>

                    <b-dropdown-item custom paddingless>
                        <form action="" >
                            <div class="modal-card" style="max-width:300px;">
                                 <header class="modal-card-head">
      <p class="modal-card-title">Login</p>

    </header>
                                <section class="modal-card-body">
                                    <b-field label="Email">
                                        <b-input
                                            type="email"
                                            placeholder="Your email"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Password">
                                        <b-input
                                            type="password"
                                            password-reveal
                                            placeholder="Your password"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-checkbox>Remember me</b-checkbox>
                                </section>
                                <footer class="modal-card-foot">
                                    <button class="button is-primary">Login</button>
                                    <button class="button is-primary">Register</button>
                                </footer>
                            </div>
                        </form>
                    </b-dropdown-item>
                </b-dropdown>





               
                    <a class="navbar-item" slot="trigger"  @click="isSignup = true">
                         <p>Sign up</p>
                       
                    </a>

                  <b-modal :active.sync="isSignup" has-modal-card>
                      <Register v-bind="formProps"></Register>
                  </b-modal>

            </div>
        </div>
    </nav>

    </div>
</template>
<script>
    import Logo from '@/assets/logo.svg'
          import Register from './Register.vue'
export default {
    data(){
        return{
            Logo,
            isSignup: false,
            formProps: {
                    email: 'evan@you.com',
                    password: 'testing'
                },
                real: true
            
        }
    },
    components:{
        Register
    }
  
}
</script>
<style lang="css" scoped>

.navbar{
    padding-left: 60px;
    padding-right: 60px;

}


</style>
