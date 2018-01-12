<template>
  <div class="all">

    <!-- THROWS ERRORS IN BROWSER BUEFY WILL FIX IT in a next release -->


    <b-table :data="isEmpty ? [] : tableDataSimple" :striped="isStriped" :hoverable="isHoverable" :loading="isLoading" :mobile-cards="hasMobileCards"
      :opened-detailed="defaultOpenedDetails" detailed detail-key="name" class="fix">

      <template slot-scope="props">
        <b-table-column label="Date">
          {{ props.row.date }}
        </b-table-column>






        <b-table-column label="Time">
          <a class="button is-success color is-static" style="width:100%;">{{ props.row.time }}</a>

        </b-table-column>

        <b-table-column label="Status">
          <a class="button is-success is-static color" style="width:100%;">{{ props.row.status }}</a>

        </b-table-column>
        <b-table-column label="Unit">
          <a class="button is-success is-static color" style="width:100%;">{{ props.row.unit }}</a>

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


      <template slot="detail" slot-scope="props">
        <article class="media">
          <div class="media-content">

            <div class="content">

              <p>
                <strong>{{ props.row.name }} {{ props.row.time }}</strong>
                <small>@{{ props.row.unit }}</small>
                <small>31m</small>
                <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
              <a class="button is-success " @click="isComponentModalActive = true" style="width:100%;">Send a message</a>
            </div>
          </div>
        </article>
      </template>
    </b-table>

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <Message></Message>
    </b-modal>
    
    <b-message style="margin-top:2rem;" title="Total bookings this week" type="is-link" :closable=close>
      <h1 class="subtitle is-4"> 3 sessions </h1>
    </b-message>
  </div>

</template>
<script>
  import Message from './Message'
  export default {
    data() {
      const tableDataSimple = [{
          'date': '19.09.2018',
          'name': 'Jesica Simpson',
          'time': '12-30PM-13.00PM',
          'status': "Booked",
          'unit': "CAB201"

        },
        {
          'date': '14.09.2018',
          'name': 'Jezxmpson',
          'time': '12-31PM-13.00PM',
          'status': "Booked",
          'unit': "CAB201"
        },
        {
          'date': '13.09.2018',
          'name': 'sdimpson',
          'time': '12-32PM-13.00PM',
          'status': "Booked",
          'unit': "CAB201"
        },
        {
          'date': '12.09.2018',
          'name': 'qwexca Simpson',
          'time': '12-33PM-13.00PM',
          'status': "Booked",
          'unit': "CAB201"
        },
        {
          'date': '11.09.2018',
          'name': 'JSXXSimpson',
          'time': '12-55PM-13.00PM',
          'status': "Booked",
          'unit': "CAB201"
        }
      ]

      return {
        tableDataSimple,
        booked: true,
        close: false,
        isEmpty: false, //will need it when search is empty
        isStriped: true,
        isHoverable: true,
        isLoading: false, // will need it when fetch search
        hasMobileCards: true,
        name: '',
        defaultOpenedDetails: [],
        isComponentModalActive: false,

      }
    },
    components: {
      Message
    },


  }

</script>
<style scoped>


</style>
