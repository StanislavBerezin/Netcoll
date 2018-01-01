<template>
<div>

    <div class="card">
  <div class="card-content">
    <p class="">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
    <p class="">
      Jeff Atwood
    </p>
  </div>
  <footer class="card-footer">
    
        <p class="card-footer-item">
      <span>
           <b-icon
                
                icon="account-multiple"
                size="is-small">
            </b-icon>
            
        Students
      </span>

 
     <p class="card-footer-item">
      <span>
           <b-icon
                
                icon="star"
                size="is-small">
            </b-icon>
            
        5 Stars
      </span>
    </p>
  </footer>
</div>

    
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
  }
</script>
<style scoped>

</style>
