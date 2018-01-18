<template>
<div >


    <form  action="">

      <div class="modal-card" >
 <header class="modal-card-head">
      <p class="modal-card-title">Write your message</p>

    </header>
        <section class="modal-card-body">

          <b-field>
            <b-input type="textarea"
                minlength="10"
                maxlength="100"
                placeholder="Maxlength automatically counts characters">
            </b-input>
        </b-field>

        </section>

        <footer class="modal-card-foot">
          <button class="button is-primary" @click.prevent = "sendMessage">Send</button>
        </footer>
      </div>

    </form>

    
</div>
  
</template>
<script>
export default {

    methods:{
        sendMessage(){
            const loadingComponent = this.$loading.open()
            setTimeout(() => loadingComponent.close(), 2 * 1000)
        }
    }
  
}
</script>
<style scoped>
.message{
    min-width: 300px;
}

</style>
