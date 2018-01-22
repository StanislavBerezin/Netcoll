<template>
  <div>
    <h1 class="subtitle is-1">Unit selector</h1>


    <b-table :data="isEmpty ? [] : tableDataSimple" :striped="isStriped" :hoverable="isHoverable"
      :loading="isLoading" :mobile-cards="hasMobileCards">

      <template slot-scope="props">
        <b-table-column label="ID" >
          {{ props.row.id }}
        </b-table-column>

        <b-table-column label="Unit name">
          {{ props.row.first_name }}
        </b-table-column>

        <b-table-column label="Number of students">
          {{ props.row.last_name }}
        </b-table-column>

    

        <b-table-column>
                <a class="button is-mypurple is-rounded">Add unit</a>
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
        },
        {
          'id': 'CAB201',
          'first_name': 'Programming principles',
          'last_name': '125',
        },
        {
          'id': 'CAB201',
          'first_name': 'Programming principles',
          'last_name': '125',
        },
        {
          'id': 'CAB201',
          'first_name': 'Programming principles',
          'last_name': '125',
        },
        {
          'id': 'CAB201',
          'first_name': 'Programming principles',
          'last_name': '125',
        }
      ]

      return {
        tableDataSimple,
        isEmpty: false, //will need it when search is empty
        isStriped: true,
        isHoverable: true,
        isLoading: false, // will need it when fetch search
        hasMobileCards: true
      }
    }
  }

</script>
<style scoped>
.button{
    border-radius: 20px;
}
.button:hover{
  opacity: 0.8;
}

</style>
