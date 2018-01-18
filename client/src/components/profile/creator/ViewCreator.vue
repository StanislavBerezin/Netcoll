<template>
<div class="all">
    <div class="profile-img">
        <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg">
      </div>
     <div class="info">
    <h1 class="subtitle is-3"> I'm viewing the creator</h1>
        <div class="flex-table">
          <p class="subtitle is-5">Name: {{user.name}}</p>
          <p class="subtitle is-5">Last name: {{user.lastname}}</p>
          <p class="subtitle is-5">Username: {{user.username}}</p>
          <p class="subtitle is-5">Degree: {{user.degree}}</p>
          <p class="subtitle is-5">University: {{user.university}}</p>
        </div>
   </div>

        <div class="routes">
            <router-link :to ="{name: 'bookSession'}"> <a class="button is-link">Book tutorial</a></router-link>
             <router-link :to ="{name: 'createdArticles'}"> <a class="button is-link">Created articles</a></router-link>
        </div>



        <router-view class="set-width"></router-view>

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

  
.router-link-active{
  background-color:rgba(141,48,196, 0.7);
}

.all{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}
.info{
    grid-column: 6/11;
}
.routes{
    grid-column: 3/11;
    margin: 2rem 0;
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
  .set-width{
      grid-column: 3/11;
      display: flex;
      flex-direction: column;
  }
</style>
