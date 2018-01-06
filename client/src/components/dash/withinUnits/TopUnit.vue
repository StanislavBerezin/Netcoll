<template>
  <div>
    <h1 class="subtitle is-4">Your purchased articles</h1>
    <div class="flex-box">
   
  
    
       <button @click="confirm" class="button is-danger">
      I've finished this unit
    </button>
    </div>
    <div class="search">
        <b-field label="Find your article">
            <b-autocomplete
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. jQuery"
                icon="magnify"
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
          <p class="content"><b>Selected:</b> {{ selected }}</p>

    </div>
         
 
    <b-dropdown v-model="isSort" class="right">
        <button class="button is-success" type="button" slot="trigger">
            <template v-if="isSort">
                <span>Recent</span>
            </template>
            <template v-else>
                <span>Most active ones</span>
            </template>
            <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item :value="true">
            <div class="media">

                <div class="media-content">
                    <h3>Recent</h3>

                </div>
            </div>
        </b-dropdown-item>

        <b-dropdown-item :value="false">
            <div class="media">
                <div class="media-content">
                    <h3>Most active ones</h3>

                </div>
            </div>
        </b-dropdown-item>
    </b-dropdown>
    <p class="right" style="margin-top:5px; margin-right:10px;">Sort by</p>
        
  </div>
</template>

<script>
  export default {
      data(){
          return{
              isSort: true,
              stars: 1,
              data: [
                    'Angular',
                    'Angular 2',
                    'Aurelia',
                    'Backbone',
                    'Ember',
                    'jQuery',
                    'Meteor',
                    'Node.js',
                    'Polymer',
                    'React',
                    'RxJS',
                    'Vue.js'
                ],
                name: '',
                selected: null
          }
      },
    methods: {
      confirm() {
        this.$dialog.confirm({
          message: 'Please confirm that you have finished the unit',
          onConfirm: () => this.$toast.open('Unit is finished')
        })
      }
    },

     computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }

  }

</script>

<style scoped>
.flex-box{
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    flex-wrap: wrap;
}
.search{
    margin-top:20px;
}
.right{
    float:right;
    
}
</style>
