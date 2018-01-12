<template>
 <div class="all">
     <h1 class="subtitle is-4">Your current bookings</h1>


    <b-table :data="isEmpty ? [] : tableDataSimple" :striped="isStriped" :hoverable="isHoverable"
      :loading="isLoading" :mobile-cards="hasMobileCards" class="fix">

      <template slot-scope="props">
        <b-table-column label="Date" >
          {{ props.row.date }}
        </b-table-column>
             

        <b-table-column label="Client">
          {{ props.row.client_name }}
        </b-table-column>
        
        <b-table-column label="Unit">
               {{props.row.unit}}
        </b-table-column>
     
 <b-table-column label="Time">
          {{ props.row.time }}
        </b-table-column>
        <b-table-column >
        <a class="button is-success" style="width:100%;">Send a message</a>
          
        </b-table-column>
    


        
        
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large">
              </b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
    <div class="sold">

  <b-message title="Total bookings" :closable=close>
              <h1 class="subtitle is-4">{{totalSold}}</h1>
        </b-message>



    </div>
  
  
   
 </div>
</template>

<script>
  export default {
   data() {
      const tableDataSimple = [{
          'date': '19.01.2018',
          'client_name': 'Jessica Simpson',
          'unit': "CAB201",
          'time': '13.00 - 14.00',
          
        },
        {
           'date': '19.01.2018',
          'client_name': 'Jessica Simpson',
          'unit': "CAB201",
          'time': '13.00 - 14.00',
        },
        {
           'date': '19.01.2018',
          'client_name': 'Jessica Simpson',
          'unit': "CAB201",
          'time': '13.00 - 14.00',
        },
        {
           'date': '19.01.2018',
          'client_name': 'Jessica Simpson',
          'unit': "CAB201",
          'time': '13.00 - 14.00',
        },
        {
           'date': '19.01.2018',
          'client_name': 'Jessica Simpson',
          'unit': "CAB201",
          'time': '13.00 - 14.00',
        }
      ]

      return {
        tableDataSimple,
        isEmpty: false, //will need it when search is empty
        isStriped: true,
        isHoverable: true,
        isLoading: false, // will need it when fetch search
        hasMobileCards: true,
        name: '',
        close: false,
        totalSold: '521',
        totalSoldCash: '1200$'
      }
    },

  }
  

</script>
<style scoped>
.color{
  background-color:rgba(46, 204, 113, 0.8);
  color: #fff;
}
 .fix-finished{
   background-color:rgba(255, 31, 75, 0.5);
   color: #fff;
 }
 .all{

     display: flex;
     flex-direction: column;
     margin-top:2rem;
 }
 .delete{
     display:none;
 }
 .sold{
     margin-top:2rem;
 }
</style>
