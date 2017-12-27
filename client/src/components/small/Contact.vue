<template>
  <div>
      
      <form class = "register" action="">
          
                            <div class="modal-card" style="width:400px;">
                        <header class="modal-card-head">
      <p class="modal-card-title">Contact us</p>

    </header>
                                <section class="modal-card-body">
                                    <b-field label="Your email">
                                        <b-input
                                            type="email"
                                            placeholder="Your email"
                                            required>
                                        </b-input>
                                    </b-field>
                                    <b-field label="Reason for contacting">
                                        <b-input
                                            type="email"
                                            placeholder="Your email"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Message">
                                        <b-input
                                            type="textarea"
                                            placeholder="Your message"
                                            required>
                                        </b-input>
                                    </b-field>



                                    <b-checkbox>Send a copy to my address</b-checkbox>
                                </section>
                                <footer class="modal-card-foot">
                                    <button class="button is-primary">Send</button>
                                </footer>


                            </div>
                        </form>

  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.register{
    text-align: left;
    margin: 0 auto;
}

*{
    font-weight: 400 !important;
}
label.label{
    
}
.modal-card {
    font-weight: 400 !important;
}
</style>
