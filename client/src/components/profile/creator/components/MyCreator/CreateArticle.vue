<template>
  <div class="alls">
    <h1 class="subtitle is-2">Create your article</h1>
    <div class="flex">
      <p class="subtitle is-5">Select unit</p>
      <b-field>
        <b-autocomplete v-model="name" placeholder="e.g QUT" :data="filteredDataObj" required field="uni" @select="option => selected = option">
        </b-autocomplete>
      </b-field>

      <p class="subtitle is-5">Select Price</p>
      <b-field>
        <button class="button" disabled>
                    <b-icon icon="currency-usd"></b-icon>
                </button>
        <b-input type="number" placeholder="0.00" required></b-input>

      </b-field>
      <p class="subtitle is-5">Select Title</p>
      <b-field>
        <b-input v-model="nameTitle" required></b-input>
      </b-field>
    </div>


    <mavon-editor language="en" v-model="value" />
    <p>{{value}}</p>
    <div class="create">
 <button class="button is-mypurple is-large" >Create</button>
    </div>
   
  </div>

</template>
<script>
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
        value: '',
        data,
        keepFirst: false,
        name: '',
        selected: null,
        nameTitle: ''
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
    }

  }

</script>
<style scoped>
  .flex {
      display:flex;
      flex-wrap:wrap;
      flex-direction: column;
      margin-bottom:2rem;
  }

.create{
    display:flex;
    justify-content: center;
    margin-top:2rem;
}
</style>
