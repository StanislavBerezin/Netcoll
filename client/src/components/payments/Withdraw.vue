<template>
  <div>

    <form  class = "login"action="">

      <div class="modal-card" style="width:300px;">
 <header class="modal-card-head">
      <p class="modal-card-title">Login</p>

    </header>
        <section class="modal-card-body">

        <b-field label="Your email">
            <b-input type="email" placeholder="Your email" v-model="user.email" required>
            </b-input>
          </b-field>

          <b-field label="Password">
            <b-input type="password" v-model="user.password" password-reveal placeholder="Your password" required>
            </b-input>
          </b-field>
          

          <b-checkbox>Remember me</b-checkbox>

        </section>

        <footer class="modal-card-foot">
          <button class="button is-primary" @click.prevent = "logUser">Login</button>
        </footer>
      </div>

    </form>

  </div>
</template>

<script>
  import Auth from '../../connection/Auth.js'

  export default {
    data(){
      return{
        user:{
          email: "",
          password: ""
          
        }
      }
    }
  }

</script>

<style scoped>
.login{
    text-align: left;
}


</style>
