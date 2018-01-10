<template>
  <div class="all">
<div class="profile-img">
        <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg">
      </div>
 <div class="info">
    <h1 class="subtitle is-3"> I am the creator details</h1>
    <div class="flex-table">
      <p class="title is-5">Name</p>
      <b-field>

        <b-input v-model="user.name"></b-input>
      </b-field>

      <p class="title is-5">Last name</p>
      <b-field>

        <b-input v-model="user.lastName"></b-input>
      </b-field>
      <p class="title is-5">Email</p>
      <b-field>

        <b-input v-model="user.email" class="inField"></b-input>
      </b-field>
      <p class="title is-5">Username</p>
      <b-field>

        <b-input v-model="user.username"></b-input>
      </b-field>
      <p class="title is-5">Degree</p>
      <b-field>

        <b-input v-model="user.degree"></b-input>
      </b-field>

      <p class="title is-5">University</p>
      <b-field>
        <b-autocomplete v-model="name" placeholder="e.g QUT" :data="filteredDataObj" field="uni" @select="option => selected = option">
        </b-autocomplete>
      </b-field>

      <div class="field">
        <p class="subtitle is-5">Do you want your profile to be seen by others?</p>
        <b-switch v-model="isSwitchedCustom" true-value="Yes" false-value="No">
          {{ isSwitchedCustom }}
        </b-switch>
      </div>




    </div>
    <div class="middle">
      <a class="button is-mypurple is-large" @click="showMe"><b-icon
                pack="fa"
                icon="pencil"
                size="is-small">
            </b-icon> <span> Save </span> </a>
    </div>
    </div>
    <div class="set">
      <a class="button is-link" @click ="selectedComponent = 'CreatedArticles'">Activity of articles</a>
      <a class="button is-link" @click ="selectedComponent = 'SetSessions'">Set sessions</a>
      <component :is = "selectedComponent"></component>

    </div>

  </div>

</template>
<script>
import SetSessions from './components/SetSessions.vue'
import CreatedArticles from './components/CreatedArticles.vue'
  export default {
    data() {
      const data = [{
          'uni': "QUT"
        },
        {
          'uni': "UQ"
        },
        {
          'uni': "Griffith"
        },
        {
          'uni': "Central QU"
        },
        {
          'uni': "Captian cook"
        }
      ]
      return {
        data,
        isSwitched: false,
        isViewing: false,
        isCreator: false,
        isOwn: true,
        selectedComponent: "",
        isSwitchedCustom: 'Yes',
        user: {
          name: " John",
          lastName: "Wick",
          username: "Getthatshit",
          degree: "Bachelor of master",
          university: "Colorado springs",
          email: "test@hotmail.com"
        },

        name: '',
        selected: null

      }
    },
    methods: {
      showMe() {
        this.isChange = !this.isChange
        console.log(this.isChange)
      }
    },
    computed: {
      filteredDataObj() {
        return this.data.filter((option) => {
          return option.uni
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        })
      }
    },
    components:{
      SetSessions,
      CreatedArticles
      
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

  .middle {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
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
  .set{
    grid-column: 3/11;
  }
</style>
