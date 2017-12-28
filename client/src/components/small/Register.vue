<template>
  <div>

    <form class="register" action="">

      <div class="modal-card" style="width:400px;">

        <header class="modal-card-head">
          <p class="modal-card-title">Sign up</p>

        </header>

        <section class="modal-card-body">

          <b-field label="Your email">
            <b-input type="email" placeholder="Your email" v-model="user.email" required>
            </b-input>
          </b-field>
          <b-field label="Your username" :type="form.username.icon" :message="form.username.message">
            <b-input v-model="user.username" placeholder="Your username" maxlength="10" required>
            </b-input>
          </b-field>

          <b-field label="Your universirty">
            <b-input type="email" v-model="user.university" placeholder="Your email" required>
            </b-input>
          </b-field>



          <b-field label="Password">
            <b-input type="password" v-model="user.password" password-reveal placeholder="Your password" required>
            </b-input>
          </b-field>

          <b-field label="Confirm password" style="font-weight:400;">
            <b-input type="password" password-reveal placeholder="Your password" required>
            </b-input>
          </b-field>

          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">

          <button class="button is-primary" @click.prevent="signUp">Register</button>
        </footer>


      </div>
    </form>

  </div>
</template>

<script>
  import Auth from '../../connection/Auth.js'
  export default {
    data() {
      return {

        form: {
          email: {
            icon: "is-success",
            message: ""
          },
          username: {
            icon: "is-success",
            message: "This username is available"
          }

        },
        user: {
          email: "",
          username: "",
          password: "",
          university: ""
        }

      }
    },
    methods: {
      async signUp() {

        await Auth.registerUser(this.user).then((result) => {

          console.log(result)

        })
        
        const loadingComponent = this.$loading.open()
        setTimeout(() => loadingComponent.close(), 2 * 1000)
      }
    }

  }

</script>

<style scoped>
  .register {
    text-align: left;
  }

  .test {
    border-bottom: 2px solid #00c4a7;
    width: 30%;
    padding: 0;
    margin: 0;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }

  * {
    font-weight: 400 !important;
  }

  label.label {}

  .modal-card {
    font-weight: 400 !important;
  }

</style>
