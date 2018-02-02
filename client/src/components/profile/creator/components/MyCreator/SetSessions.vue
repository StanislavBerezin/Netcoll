<template>
    <div class="all">
        <div class="date">
            <h1 class="subtitle is-3">Chose your available days</h1>
            <div class="flex">
                <div class="datepicker">
                    <b-datepicker inline v-model="date" :events="events" indicators="bars">
                    </b-datepicker>
                </div>
    
    
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
                    <a class="button is-link" @click="setBookings">Set  {{date.getDate()}} / {{date.getMonth()+1}} / 
                        {{date.getFullYear()}}</a> {{set.from.getHours() }} and {{set.from.getMinutes()}} 
                        {{set.to.getHours() }} and {{set.to.getMinutes()}}
    
                    <hr> {{set}}
    
                </div>
    
    
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
    const thisMonth = new Date().getDate()
    
    import TableBookings from '../micro/TableBookings.vue'
    export default {
    
    
    
        data() {
    
            return {
                test: new Date,
                check: '',
                set: {
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
        components: {
            TableBookings
        },
        methods: {
            setBookings() {
    
            }
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
        display:flex;
        justify-content: space-between;
        
        
       
    }
   
    .flex-column {
        flex: 1 1 300px;
        
    }
 @media screen and (max-width: 870px) {
 
  
   
}

 
</style>




