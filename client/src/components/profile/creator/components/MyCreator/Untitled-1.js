/*<template>
  <div class="all">
    <div class="date">
      <h1 class="subtitle is-3">Chose your available days</h1>
      <div class="flex">

        <b-datepicker inline v-model="date" :events="events" indicators="bars">
        </b-datepicker>

        <div class="flex-column">
          <b-field label="Available from">
            <b-timepicker placeholder="Click to select..." icon="clock" :hour-format="format" v-model="set.from">
            </b-timepicker>
          </b-field>
          <b-field label="To">
            <b-timepicker placeholder="Click to select..." icon="clock" :hour-format="format" v-model="set.to">
            </b-timepicker>
          </b-field>
          <b-field>
            <b-select placeholder="Duration" v-model="set.type">
              <option>$ Per/Hour </option>
              <option>$ Per Half/hour</option>
            </b-select>
            <b-input type="number" placeholder="0,00" v-model="set.price"></b-input>
          </b-field>
          <a class="button is-link" @click="setBookings">Set  {{date.getDate()}} / {{date.getMonth()+1}} / {{date.getFullYear()}}</a>
{{set.from.getHours() }} and {{set.from.getMinutes()}}
{{set.to.getHours() }} and {{set.to.getMinutes()}}

<hr>
{{set}}

        </div>


      </div>
      <div class="bottom">


      
      <h1 class="subtitle is-3" style="margin-bottom:2rem">Your current tutoring sessions</h1>
      <b-tabs expanded >
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
        test: new Date,
        check:'',
        set:{
          from: new Date,
          to: new Date,
          price: null,
          type: null
        },
        formatAmPm: true,
       
        
        date: new Date(2017, thisMonth, 1),
        events: [
          new Date(2017, thisMonth, 6),
          {
            date: new Date(2017, thisMonth, 3),
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
    },
    methods:{
      setBookings(){

      }
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






<template>
  <div class="all">
    <div class="date">
      <h1 class="subtitle is-3">Chose your available days</h1>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      <div class="flex">
  
  
  
  
  
  
  
  
        <v-calendar :attributes='attributes' is-double-paned>
          <!--=========POPOVER HEADER SLOT=========-->
          <div slot='popover-header' slot-scope='{ dayInfo }' class='popover-header'>
            {{ getPopoverHeaderLabel(dayInfo) }}
          </div>
  
          <!--============HOW TO USE ROW SLOTS===========-->
          <!--
              STEP 1: Insert element with a unique slot name ('todo-row' in this example). Make sure slot-scope is assigned, even if not used.      
              STEP 2: In Javascript, assign that unique slot name to the 'slot' property of the attribute's popover object
            -->
          <!--===============TODO ROW SLOT==============-->
          <div slot='todo-row' slot-scope='{ customData, attribute, dayInfo }' class='todo-row' :attribute='attribute'>
            <!--When we try to add new Sessions-->
            <div class='todo-content'>
              <!--Show textbox when editing todo-->
  
              <span v-if='customData.id === editId'><input class='todo-input'  
                        v-model='customData.description' 
                        @keyup.enter='editId = 0' v-focus-select />


                        
                    <b-field label="Available from">
                <b-timepicker placeholder="Click to select..." icon="clock" :hour-format="format" v-model="set.from">
                </b-timepicker>
            </b-field>
            <b-field label="To">
                <b-timepicker placeholder="Click to select..." icon="clock" :hour-format="format" v-model="set.to">
                </b-timepicker>
            </b-field>
            <b-field>
                <b-select placeholder="Duration" v-model="set.type">
                <option>$ Per/Hour </option>
                <option>$ Per Half/hour</option>
                </b-select>
                <b-input type="number" placeholder="0,00" v-model="set.price"></b-input>
            </b-field>
                </span>
                
              <!--Show status/description when not editing-->
  
              <span v-else>
                  <!--Completed checkbox-->
                  <input
                    type='checkbox'
                    v-model='customData.isComplete' />
                  <!--Description-->
                  <span
                    :class='[
                      "todo-description",
                      { "complete": customData.isComplete }]'
                    @click='toggleTodoComplete(customData)'>
                    {{ customData.description }}
                  </span>
                  
              </span>
  
             
            </div>

            <!--Edit/Done buttons-->
            <a @click.prevent='toggleTodoEdit(customData)'>

              <!--Edit button-->
              <b-icon v-if='editId !== customData.id' icon='pencil' type='is-info' size='is-small'>
              </b-icon>
              <!--Done button-->
              <b-icon v-else icon='check' type='is-success' size='is-small'>
              </b-icon>
            </a>

            <!--Delete button-->
            <a @click.prevent='deleteTodo(customData)' 
            v-if='!editId || editId !== customData.id' 
            class='delete-todo'>
              <b-icon pack="fa" icon='trash' type='is-danger' size='is-small'>
              </b-icon>
            </a>
          </div>
          <!--================ADD TODO ROW SLOT===============-->
          <div slot='add-todo' slot-scope='{ dayInfo }' class='add-todo'>
            <a @click='addTodo(dayInfo)'>
                + Add Session
              </a>
          </div>
        </v-calendar>
  
  
  
  
  
  
  
  
  
      </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      <div class="bottom">
  
        <h1 class="subtitle is-3" style="margin-bottom:2rem">Your current tutoring sessions</h1>
        <b-tabs expanded>
          <b-tab-item label="All bookings">
            <TableBookings></TableBookings>
          </b-tab-item>
  
          <b-tab-item label="This week">
            <TableBookings></TableBookings>
          </b-tab-item>
          <b-tab-item label="This month">
            < <TableBookings></TableBookings>
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
  
  
  </div>
</template>

<script>
  import TableBookings from '../micro/TableBookings.vue'
  const color = '#ff8080';
  const todos = [{
    id: 1,
    description: 'Take Noah to basketball practice.',
    isComplete: false,
    dates: new Date(),
  }];
  const thisMonth = new Date().getDate()
  
  export default {
  
  
  
    data() {
  
      return {
        mySelection: '',
        todos,
        incId: todos.length,
        editId: 0,
        set: {
          from: new Date,
          to: new Date,
          price: null,
          type: null
        },
  
      }
    },
    computed: {
      format() {
        return this.formatAmPm ? '12' : '24'
      },
      attributes() {
        return [
          // Today attribute
          {
            contentStyle: {
              fontWeight: '700',
              color: '#66b3cc',
            },
            dates: new Date(),
          },
          // Weekends are for resting...
          {
            contentStyle: {
              opacity: 0.5,
              pointerEvents: 'none',
            },
            popover: {
              visibility: 'hidden', // Hide popovers too
            },
            order: 100, // High order gives attribute high priority
          },
          // Todo attributes
          ...this.todos.map(todo => ({
            key: todo.id,
            dates: todo.dates,
            customData: todo,
            order: todo.id,
            dot: {
              backgroundColor: color,
              opacity: todo.isComplete ? 0.3 : 1,
            },
            popover: {
              slot: 'todo-row', // Matches slot from above
              visibility: 'focus',
            },
          })),
          // 'Add todo' attribute
          {
            contentHoverStyle: {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            },
            dates: {},
            popover: {
              slot: 'add-todo',
              visibility: 'focus',
              hideIndicator: true,
            },
          },
        ];
      },
    },
    methods: {
      setBookings() {},
      getPopoverHeaderLabel(dayInfo) {
        const options = {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        };
        return dayInfo.date.toLocaleDateString(window.navigator.userLanguage || window.navigator.language, options);
      },
      addTodo(dayInfo) {
        this.editId = ++this.incId;
        this.todos.push({
          id: this.editId,
          description: 'New todo',
          isComplete: false,
          dates: dayInfo.date,
        });
      },
      toggleTodoComplete(todo) {
        todo.isComplete = !todo.isComplete;
      },
      toggleTodoEdit(todo) {
        this.editId = (this.editId === todo.id) ? 0 : todo.id;
      },
      deleteTodo(todo) {
        this.todos = this.todos.filter(t => t !== todo);
      },
    },
    directives: {
      focusSelect: {
        inserted(el) {
          el.focus();
          el.select();
        },
      },
    },
    components: {
      TableBookings
    }
  }
</script>

<style scoped>
  .date {
    grid-column: 1/13;
  }
  
  .bottom {
    margin: 0 auto;
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
  
  .popover-header {
    text-align: center;
    padding-bottom: 3px;
    border-bottom: 1px solid #dadada;
    margin: 0 0 3px 0;
    opacity: 0.7;
  }
  
  .todo-row {
    display: flex;
    flex-wrap: none;
    width: 100%;
  }
  
  .todo-content {
    flex-grow: 1;
    flex-basis: 0;
    margin-right: 10px;
    min-width: 80px;
    display: flex;
    flex-direction: column;
  }
  
  .todo-input {
    width: 100%;
    min-width: 200px;
  }
  
  .todo-description {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    margin-left: 3px;
  }
  
  .todo-description:hover {
    opacity: 0.5;
  }
  
  .todo-description.complete {
    text-decoration: line-through
  }
  
  .add-todo {
    font-size: 0.8rem;
    text-align: center;
    width: 100%;
  }
  
  .delete-todo {
    margin-left: 3px;
  }
</style>
