<template>
 <div>
     <h1 class="subtitle is-4">Your purchased articles</h1>
    

    <b-field label="Filter your search">
            <b-autocomplete
                v-model="name"
                placeholder="Unit code"
                :data="filteredDataObj"
                field="id"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>

    <b-table :data="isEmpty ? [] : tableDataSimple" :striped="isStriped" :hoverable="isHoverable"
      :loading="isLoading" :mobile-cards="hasMobileCards" class="fix">

      <template slot-scope="props">
        <b-table-column label="ID" >
          {{ props.row.id }}
        </b-table-column>
             

        <b-table-column label="Unit name">
          {{ props.row.first_name }}
        </b-table-column>

   


<b-table-column label="Purchased on">
          {{ props.row.purchaseDate }}
        </b-table-column>
    
    <b-table-column label="Status"> 
                <a class="button is-danger  " disabled>Finished</a>
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

 </div>
</template>

<script>
  export default {
   data() {
      const tableDataSimple = [{
          'id': 'CAB201',
          'first_name': 'Programming principles',
          'last_name': '125',
          'purchaseDate': '13.08.2017'
        },
        {
          'id': 'CAB131',
          'first_name': 'Programming principles',
          'last_name': '125',
          'purchaseDate': '13.08.2017'
        },
        {
          'id': 'CAB421',
          'first_name': 'Programming principles',
          'last_name': '125',
          'purchaseDate': '13.08.2017'
        },
        {
          'id': 'CAB125',
          'first_name': 'Programming principles',
          'last_name': '125',
          'purchaseDate': '13.08.2017'
        },
        {
          'id': 'CAB623',
          'first_name': 'Programming principles',
          'last_name': '125',
          'purchaseDate': '13.08.2017'
        }
      ]

      return {
        tableDataSimple,
        isEmpty: false, //will need it when search is empty
        isStriped: true,
        isHoverable: true,
        isLoading: false, // will need it when fetch search
        hasMobileCards: true,
        name: ''
      }
    },
    computed: {
            filteredDataObj() {
                return this.tableDataSimple.filter((option) => {
                    return option.id
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
  }
  

</script>
<style scoped>
 .fix{
     max-width: 818px;
 }
</style>
