<template>
  <div>
    <Nav></Nav>
    <div class="grid-wrap">


      <div class="profile-img">
        <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg">
      </div>

      <div class="profile-information">
        <h1 class="subtitle is-3"> Your profile settings</h1>
        <div class="flex-table">
          <p class="subtitle is-5">Name:</p>
          <p class="subtitle is-5">Last name:</p>
          <p class="subtitle is-5">Username:</p>
          <p class="subtitle is-5">Degree:</p>
          <p class="subtitle is-5">University</p>
          <p class="subtitle is-5">Year:</p>
        </div>
        <div class="field">
          <p class="subtitle is-5">Do you want your profile to be seen by others?</p>
          <b-switch v-model="isSwitchedCustom" true-value="Yes" false-value="No">
            {{ isSwitchedCustom }}
          </b-switch>
        </div>

      </div>


    </div>
    <Footer></Footer>

  </div>
</template>
<script>
  import Nav from '../dash/Nav'
  import Footer from '../small/Footer'
  export default {
    components: {
      Nav,
      Footer
    },
    data() {
      return {
        isSwitched: false,
        isSwitchedCustom: 'Yes'
      }
    }

  }

</script>
<style scoped>
  .grid-wrap {
    display: grid;
    grid-template-columns: repeat(12, 1fr)
  }

  .profile-img {
    grid-column: 2/4;
    margin-top: 2rem;
  }

  .profile-img {
    max-width: 250px;

  }

  .profile-information {
    margin-top: 2rem;
    grid-column: 5/10;
  }

  .flex-table {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    line-height: 3rem;
  }

  .field {
    margin-top: 3rem;
  }

</style>
