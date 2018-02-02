<template>
    <div>
    
        <form class="login" action="">
    
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Login</p>
    
                </header>
                <section class="modal-card-body">
    
                    <b-field label="Your email">
                        <b-input type="email" placeholder="Your email" v-model="user.email" required>
                        </b-input>
                    </b-field>
    
                    <b-field label="Password">
                        <b-input type="password" v-model="user.password" password-reveal placeholder="Your password" required>
                        </b-input>
                    </b-field>
    
    
                    <b-checkbox>Remember me</b-checkbox>
    
                </section>
    
                <footer class="modal-card-foot">
                    <button class="button is-primary" @click.prevent="logUser">Login</button>
                </footer>
            </div>
    
        </form>
    
    </div>
</template>

<script>
    import Auth from '../../connection/Auth.js'
    
    export default {
        data() {
            return {
                user: {
                    email: "",
                    password: ""
    
                }
            }
        },
    
        methods: {
            async logUser() {
    
    
                try {
    
                    const userData = await Auth.loginUser(this.user)

                    this.$store.dispatch('logUser', userData.data.user)
                    this.$store.dispatch('extraToken', userData.data.extraToken)
                    const loadingComponent = this.$loading.open()

                    let that = this

                    let token = userData.data.user.tokens[0].token
                    let extraToken = userData.data.extraToken
                  
                    this.$auth.setTokens(token, extraToken)
                    
                    //fancy things
                    setTimeout(() => loadingComponent.close(), 2 * 1000)
                    setTimeout(function() {
                        that.$router.push({
                            name: 'Dashboard'
                        })
                    }, 2000);

    
                } catch (err) {
                    console.log(err)
                    this.$toast.open({
                        duration: 5000,
                        message: `Wrong details`,
                        position: 'is-top',
                        type: 'is-danger'
                    })
                }
            }
    
        }
    }
</script>

<style scoped>
    .login {
        text-align: left;
    }
</style>
