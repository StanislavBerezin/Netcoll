<template>
  <div>

    <footer class="foot">
      <div class="containers">
        <div class="contents has-text-centered">
            <p class="log">Start achieving more today</p>
          <div class="flex-row">
                
            <div class="flex col-1">
              <h1 class="subtitle is-6"> Netcoll</h1>
              <ul>
                  <li>What it is for</li>
                <li>How it works</li>
                <li>Pricing</li>

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
                 <li>Contact us</li>
                <li>Privacy policy</li>
                
                <li>Terms of service</li>
              </ul>
            </div>
            
          </div>
          <p class="cop"> © 2018 Netcoll Inc. </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {

  }

</script>
<style lang="css" scoped>
  .foot {
    margin-top:5rem;
    background-color: #272727;
    padding:2rem;
   
  }

  .flex-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 100px;
    justify-content: space-between;
    margin: 0 auto;
    width:60%;
    margin-top:5rem;
  }
  .flex-row ul li{
    list-style: none;
    margin:0;
    padding:10px;
    font-weight: 200 !important;
  }

  .flex{
    display: flex;
    flex-direction: column;
  }
  .flex-row h1{
    color: #fff;
    font-weight: 200 !important;
  }

.cop{
  margin-top:7rem;
  font-weight: 200;
  font-size: 1rem;
}
.content ul{
  margin:0px;
}
.log{
    color:#fff;
    font-weight: 200;
    font-size:1.5rem;
    margin-top:2rem;
    margin-bottom:2rem;
}
</style>
