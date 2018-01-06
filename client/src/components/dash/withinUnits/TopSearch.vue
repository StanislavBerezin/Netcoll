<template>
  <div class="main">
    <section class="hashtag">
      <h1 class="subtitle is-3" style="margin-bottom: 1.5rem">{{unit}}</h1>
      <b-tooltip label="Add tags, e.g 'Week 4', 'Tutorial 4', 'Assignment 1' anything relevant to your unit" position="is-right"
        type="is-info" animated>
        <p style="margin-bottom:1.5rem">Tags (What is it?)</p>
      </b-tooltip>
      <b-field label="" style="margin-top:0.2rem;">
        <b-taginput v-model="tags" maxtags="10" type="is-success" rounded icon="label" placeholder="Add a tag">
        </b-taginput>

      </b-field>

    </section>
    <div class="after-hash">
      <!-- <form class="rating">
        <p style="margin-top: 1rem; margin-bottom:  1rem; margin-right: 10px;">Ratings: </p>
      <rating :items="items" :value="value" @change="update" ></rating>
    </form> -->

      <div style=" margin-top:20px;
    margin-bottom: 20px;">
        <span class="names_drop">Price:</span>
        <b-dropdown v-model="isPrice">
          <button class="button is-success" type="button" slot="trigger">
            <template v-if="isPrice">
                <span>From low to high</span>
            </template>
            <template v-else>
                <span>From high to low</span>
            </template>
            <b-icon icon="menu-down"></b-icon>
        </button>

          <b-dropdown-item :value="true">
            <div class="media">
              <div class="media-content">
                <h3>From low to high</h3>
              </div>
            </div>
          </b-dropdown-item>

          <b-dropdown-item :value="false">
            <div class="media">
              <div class="media-content">
                <h3>From high to low</h3>

              </div>
            </div>
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div style=" margin-top:20px;
    margin-bottom: 20px;">
        <div>


        </div>
        <span class="names_drop">Popularity:</span>
        <b-dropdown v-model="isPopular">
          <button class="button is-success" type="button" slot="trigger">
            <template v-if="isPopular">
                <span>From low to high</span>
            </template>
            <template v-else>
                <span>From high to low</span>
            </template>
            <b-icon icon="menu-down"></b-icon>
        </button>

          <b-dropdown-item :value="true">
            <div class="media">
              <div class="media-content">
                <h3>From low to high</h3>
              </div>
            </div>
          </b-dropdown-item>

          <b-dropdown-item :value="false">
            <div class="media">
              <div class="media-content">
                <h3>From high to low</h3>

              </div>
            </div>
          </b-dropdown-item>
        </b-dropdown>
      </div>


    </div>


    <a class="button search" @click.prevent="search">Search</a>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        tags: [
          'Week 1',
          'OOP',
          'c#'
        ],
        value: 0,
        isPrice: true,
        isPopular: true,
        title: "",
        unit: ''

      }
    },
    components: {

    },
    watch: {
        '$route' (to, from) {
            this.unit = this.$route.params.unitCode
         }
    },
  
    methods: {
      update(val) {
        this.value = val
      },
      search() {
        const loadingComponent = this.$loading.open()
        setTimeout(() => loadingComponent.close(), 2 * 1000)
      },
      
    },

  }

  /*
    {{ value }}
          <p class="content"><b>Tags:</b> {{ tags }}</p>
  */

</script>


<style scoped>
  .main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .names_drop {
    margin-top: 10px !important;
  }

  .hashtag {
    grid-column: 1/13;
    margin: 20px 0;
  }

  .after-hash {
    grid-column: 1/13;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .search {
    grid-column: 1/13;
    height: 100px;
    background-color: rgba(41, 128, 185, 1.0);
    color: #fff;
  }

</style>
