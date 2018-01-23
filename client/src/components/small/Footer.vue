<template>
  <div>

    <footer class="foot">
      <div class="containers">
        <div class="contents has-text-centered">
          <p class="log">Start learning more today</p>
          <div class="flex-row">

            <div class="flex col-1">
              <h1 class="subtitle is-6"> Netcoll</h1>
              <ul>
                <li slot="trigger" v-scroll-to="{
                                                        el: '#benefits',
                                                        offset: -113,
                                                      }">Benefits</li>
                <li slot="trigger" v-scroll-to="{
                                                        el: '#works',
                                                        offset: -80,
                                                      }">
                  How it works

                </li>
                
                <li @click="isPricing = true">Pricing</li>

              </ul>
            </div>
            <div class="flex col-2">
              <h1 class="subtitle is-6"> Community</h1>
              <ul>
                <li>Blog</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div class="flex col-3">
              <h1 class="subtitle is-6"> Company</h1>
              <ul>
                <li>About us</li>
                <li @click="isContact = true">Contact us</li>
                <li @click="isPrivacy = true">Privacy policy</li>

                <li @click="isTerms = true">Terms of service</li>
              </ul>
            </div>

          </div>
          <p class="cop"> © 2018 Netcoll Inc. </p>
        </div>
      </div>
      
    </footer>
 <b-modal :active.sync="isTerms" has-modal-card>
            <Terms class="form"></Terms>
          </b-modal>
           <b-modal :active.sync="isPrivacy" has-modal-card>
            <Privacy class="form"></Privacy>
          </b-modal>
           <b-modal :active.sync="isContact" has-modal-card>
            <Contact class="form"></Contact>
          </b-modal>
          <b-modal :active.sync="isPricing" has-modal-card>
            <Pricing class="form"></Pricing>
          </b-modal>
   
  </div>
</template>
<script>
import Terms from './Terms'
import Privacy from './Privacy'
import Contact from './Contact'
import Pricing from './Pricing'
  export default {
    data(){
      return{
         isTerms: false,
         isPrivacy: false,
         isContact:false,
         isPricing: false,
      }
    },
      components:{
        Terms,
        Privacy,
        Contact,
        Pricing
      }

  }

</script>
<style lang="css" scoped>
  .foot {
    margin-top: 5rem;
    background-color: #272727;
    padding: 2rem;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 200px;
    justify-content: space-around;
    margin: 0 auto;
    width: 80%;
    margin-top: 5rem;
  }

  .flex-row ul li {
    list-style: none;
    margin: 0;
    padding: 10px;
    font-weight: 200 !important;
    cursor: pointer;
  }

  .flex {
    display: flex;
    margin-top: 2rem;
    margin-left: 5%;
    margin-right: 5%;
    flex-direction: column;
  }

  .flex-row h1 {
    color: #fff;
    font-weight: 200 !important;
  }

  .cop {
    margin-top: 4rem;
    font-weight: 200;
    font-size: 1rem;
  }

  .content ul {
    margin: 0px;
  }

  .log {
    color: #fff;
    font-weight: 200;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

</style>
