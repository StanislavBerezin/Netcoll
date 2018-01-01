<template>
  <div class="main">
      <section class="hashtag">
    <h1 class="subtitle is-3" style="margin-bottom: 1rem">Filter your search</h1>
      <b-tooltip label="Add tags, e.g 'Week 4', 'Tutorial 4', 'Assignment 1' anything relevant to your unit"
        position="is-right" type="is-info" animated>
        <p style="margin-bottom:1rem">Add some tags (?)</p>
      </b-tooltip>
      <b-field label="" style="margin-top:0.2rem;">
        <b-taginput v-model="tags" max-tags="10" icon="label" placeholder="Add a tag">
        </b-taginput>

      </b-field>

    </section>
<div class="after-hash">
    <form class="rating">
        <p style="margin-top: 1rem; margin-bottom:  1rem; margin-right: 10px;">Ratings: </p>
      <rating :items="items" :value="value" @change="update" ></rating>
    </form>
    
    <b-dropdown class="price-drop">
            <button class="button is-link" slot="trigger" @click.prevent>
                <span>Price</span>
                <b-icon icon="menu-down"></b-icon>
            </button>
            <b-dropdown-item>From low to high</b-dropdown-item>
            <b-dropdown-item>From high to low</b-dropdown-item>

        </b-dropdown>
         
          <b-dropdown class="price-drop">
            <button class="button is-link" slot="trigger" @click.prevent>
                <span>Something else if needed</span>
                <b-icon icon="menu-down"></b-icon>
            </button>
            <b-dropdown-item>Can add v-model</b-dropdown-item>
            <b-dropdown-item>Test</b-dropdown-item>

        </b-dropdown>
        
     

    </div>

   
<a class="button is-info search" @click.prevent="search">Search</a>

  </div>

</template>

<script>
  import Rating from 'vue-bulma-rating'
  export default {
    data() {
      return {
        tags: [
          'Week 1',
          'OOP',
          'c#'
        ],
        value: 0,
        items: [{
            title: '5 Stars',
            value: 5
          },
          {
            title: '4 Stars',
            value: 4
          },
          {
            title: '3 Stars',
            value: 3
          },
          {
            title: '2 Stars',
            value: 2
          },
          {
            title: '1 Star',
            value: 1
          }
        ]
      }
    },
    components: {
      Rating
    },
    methods: {
      update(val) {
        this.value = val
      },
      search(){
          const loadingComponent = this.$loading.open()
            setTimeout(() => loadingComponent.close(), 2 * 1000)
      }
    }
  }
  /*
    {{ value }}
          <p class="content"><b>Tags:</b> {{ tags }}</p>
  */

</script>


<style scoped>
.main{
    display:grid;
    grid-template-columns: repeat(12, 1fr);
}
.hashtag{
    grid-column: 1/13;
}
.after-hash{
    grid-column: 1/13;
    
}
.rating{
   
}
.price-drop{
   grid-column: 1/13;
   margin-top:0em;
   margin-bottom: 1rem;
   
}
.search{
    grid-column: 1/13;
   height: 100px;
}
</style>
