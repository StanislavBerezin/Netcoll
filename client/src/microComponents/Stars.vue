<template>
<div>
<template v-if="showGrey">
    	<b-icon
        v-for="n in 5"
        icon="star"
        pack="fa" 
        aria-hidden="true"
        :type="n <= stars ? color : 'is-grey'"
        :key="n"
        class="color"
      />
    </template>
    <template v-else>
    	<b-icon
        class="color"
      	v-for="n in stars"
        icon="star"
        pack="fa" 
        :key="n"
        type="is-info"
      />
    </template>
</div>
</template>
<script>
export default {
    name: 'star-rating',
     props: {
      stars: {
        type: Number,
        required: true,
       
      },
      showGrey: {
        type: Boolean
      },
      color:{
          type: String,
          required: true
      }

  
}
}
</script>
<style scoped>
.color{
    font-size: 1.5rem;
    margin-right: 12px;
}


</style>



