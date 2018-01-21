<template>
  <div class="all">
    <div class="date">
      <h1 class="subtitle is-3">Chose your available days</h1>
      <div class="flex">

        <b-datepicker inline v-model="date" :events="events" indicators="bars">
        </b-datepicker>

        <div class="flex-column">
          <b-field label="Available from">
            <b-timepicker placeholder="Click to select..." icon="clock" :hour-format="format">
            </b-timepicker>
          </b-field>
          <b-field label="To">
            <b-timepicker placeholder="Click to select..." icon="clock" :hour-format="format">
            </b-timepicker>
          </b-field>
          <b-field>
            <b-select placeholder="Duration">
              <option>$ Per/Hour </option>
              <option>$ Per Half/hour</option>
            </b-select>
            <b-input type="number" placeholder="0,00"></b-input>
          </b-field>
          <a class="button is-link">Set  {{date.getDate()}} / {{date.getMonth()+1}} / {{date.getFullYear()}}</a>


        </div>


      </div>
      <div class="bottom">


      
      <h1 class="subtitle is-3" style="margin-bottom:2rem">Your current tutoring sessions</h1>
      <b-tabs >
        <b-tab-item label="All bookings">
            <TableBookings></TableBookings>
        </b-tab-item>
        
        <b-tab-item label="This week">
            <TableBookings></TableBookings>
        </b-tab-item>
        <b-tab-item label="This month"><
            <TableBookings></TableBookings></b-tab-item>
      </b-tabs>

        </div>








    </div>


  </div>
</template>

<script>
  const thisMonth = new Date().getDate()

 import TableBookings from '../micro/TableBookings.vue'
  export default {
  
 

    data() {
   
      return {
        
        
        formatAmPm: true,
       
        
        date: new Date(2017, thisMonth, 1),
        events: [
          new Date(2017, thisMonth, 6),
          {
            date: new Date(2017, thisMonth, 6),
            type: 'is-link'
          },

        ]
      }
    },
    computed: {

      format() {
        return this.formatAmPm ? '12' : '24'
      }
    },
    components:{
        TableBookings
    }
  }

</script>
<style scoped>
  .date {
    grid-column: 1/13;
  }
  .bottom{
      margin:0 auto;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
    margin-bottom: 5rem;
    margin-top: 3rem;
  }

  .flex-col {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 50%;
  }

  .flex-column {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
  }

  .date_picker {
    margin-right: 30px;
    margin-bottom: 20px;
  }

  .test {
    color: red !important;
  }

</style>
