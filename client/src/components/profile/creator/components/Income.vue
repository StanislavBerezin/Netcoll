<template>
 <div class="all">
     <h1 class="subtitle is-4">Your sold articles</h1>


    <b-table :data="isEmpty ? [] : tableDataSimple" :striped="isStriped" :hoverable="isHoverable"
      :loading="isLoading" :mobile-cards="hasMobileCards" class="fix">

      <template slot-scope="props">
        <b-table-column label="ID" >
          {{ props.row.id }}
        </b-table-column>
             

        <b-table-column label="Article name">
          {{ props.row.unit_name }}
        </b-table-column>
     
 <b-table-column label="Sold copies">
          {{ props.row.sold }}
        </b-table-column>
        <b-table-column label="Sold in $">
        <a class="button is-success is-static color" style="width:100%;">{{ props.row.sold }}$</a>
          
        </b-table-column>
    


        <b-table-column>
                <a class="button is-info is-rounded">Read</a>
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

  <b-message title="Default" :closable=close>
              <h1 class="subtitle is-4">Total sold: {{totalSold}}</h1>
        </b-message>
         <b-message title="Default" :closable=close>
               <h1 class="subtitle is-4">Total sold: {{totalSoldCash}}</h1>
        </b-message>


    </div>
  
  
   
 </div>
</template>

<script>
  export default {
   data() {
      const tableDataSimple = [{
          'id': 'CAB201',
          'unit_name': 'OOP c#',
          'students': '125',
          'new_comments': "2",
          'sold': "150"
          
        },
        {
          'id': 'CAB201',
          'unit_name': 'Business principles',
          'students': '125',
          'new_comments': "2",
          'sold': "150"
        },
        {
          'id': 'CAB201',
          'unit_name': 'Microprocessors unit',
          'students': '125',
          'new_comments': "2",
          'sold': "150"
        },
        {
          'id': 'CAB201',
          'unit_name': 'Preparation for final exam',
          'students': '125',
          'new_comments': "2",
          'sold': "150"
        },
        {
          'id': 'CAB201',
          'unit_name': 'Programming principles',
          'students': '125',
          'new_comments': "2",
          'sold': "150"
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
