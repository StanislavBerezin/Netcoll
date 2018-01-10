<template>
<div class="all">
  <div class="profile-img">
        <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg">
      </div>
 <div class="info">
    <h1 class="subtitle is-3"> Im viewing general details</h1>
        <div class="flex-table">
          <p class="subtitle is-5">Name: {{user.name}}</p>
          <p class="subtitle is-5">Last name: {{user.lastname}}</p>
          <p class="subtitle is-5">Username: {{user.username}}</p>
          <p class="subtitle is-5">Degree: {{user.degree}}</p>
          <p class="subtitle is-5">University: {{user.university}}</p>
        </div>
         </div>

</div>
  
</template>
<script>
export default {
   data() {
      return {
        isSwitched: false,
        isSwitchedCustom: 'Yes',
        user:{
            name: " John",
            lastname: "Wick",
            username: "Hrom",
            degree: "Bachelor of master",
            university: "Colorado springs",
        }
      }
    }
}
</script>
<style scoped>
  .flex-table {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    line-height: 3rem;
  }

.all{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}
.info{
    grid-column: 6/11;
}

  .profile-img {
    grid-column: 3/5;
    margin-top: 2rem;
  }

  .profile-img {
    max-width: 250px;
  }

  .profile-img img {
    border-radius: 100%;
  }
</style>
