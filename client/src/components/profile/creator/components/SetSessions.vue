<template>
  <div class="all">
    <div class="date">
      <h1 class="subtitle is-3">Chose your available days</h1>
      <div class="flex">
        
        <b-datepicker
            inline
            v-model="date" 
            :events="events"
            indicators="bars"
            >
        </b-datepicker>
   


        <b-table :data="isEmpty ? [] : tableDataSimple" :striped="isStriped" :hoverable="isHoverable" :loading="isLoading" :mobile-cards="hasMobileCards"
          class="fix">

          <template slot-scope="props">
            <b-table-column label="Date">
              {{ props.row.date }}
            </b-table-column>






            <b-table-column label="New comments">
              <a class="button is-success color is-static" style="width:100%;">{{ props.row.new_comments }}</a>

            </b-table-column>

            <b-table-column label="Sold in $">
              <a class="button is-success is-static color" style="width:100%;">{{ props.row.sold }}</a>

            </b-table-column>



            <b-table-column>
              <a class="button is-success is-rounded">Add</a>
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


      <p>{{date.getFullYear()}} / {{date.getMonth()+1}} / {{date.getDate()}}</p>



    </div>


  </div>
</template>

<script>
  const thisMonth = new Date().getDate()


  export default {

    data() {
      const tableDataSimple = [{
          'date': '19.09.2018',
          'unit_name': 'OOP c#',
          'students': '125',
          'new_comments': "2",
          'sold': "150$"

        },
        {
          'date': '19.09.2018',
          'unit_name': 'Business principles',
          'students': '125',
          'new_comments': "2",
          'sold': "150$"
        },
        {
          'date': '19.09.2018',
          'unit_name': 'Microprocessors unit',
          'students': '125',
          'new_comments': "2",
          'sold': "150$"
        },
        {
          'date': '19.09.2018',
          'unit_name': 'Preparation for final exam',
          'students': '125',
          'new_comments': "2",
          'sold': "150$"
        },
        {
          'date': '19.09.2018',
          'unit_name': 'Programming principles',
          'students': '125',
          'new_comments': "2",
          'sold': "150$"
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
  .date {
    grid-column: 1/13;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
  }

  .flex-col {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 50%;
  }

  .date_picker {
    margin-right: 30px;
    margin-bottom: 20px;
  }

</style>
