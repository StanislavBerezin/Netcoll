<template>
<div>
    <h1 class="subtitle is-3">Filter your search</h1>
    <section class="test">
        <b-tooltip label="Add tags, e.g 'Week 4', 'Tutorial 4', 'Assignment 1' anything relevant to your unit that want to know"
            position="is-right"
            type="is-info"
            animated>
            <p>Add some tags</p>
        </b-tooltip>
        <b-field label="" style="margin-top:20px;">
            <b-taginput
                v-model="tags"
                max-tags="10"
                icon="label"
                placeholder="Add a tag">
            </b-taginput>
            
        </b-field>
        <p class="content"><b>Tags:</b> {{ tags }}</p>
    </section>
    <form>
    <rating :items="items" legend="Default star rating:" :value="value" @change="update"></rating>
  </form>
  {{ value }}
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
      items: [
        {
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
    update (val) {
      this.value = val
    }
  }
    }
</script>


<style scoped>


</style>
