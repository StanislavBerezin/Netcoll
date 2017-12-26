<template>
    <div>
    <nav class="navbar">

        <div class="navbar-brand">
            <a class="navbar-item">
                <img :src="Logo" alt="Netcoll">
            </a>
        </div>

        <div class="navbar-menu ">
            <div class="navbar-end">
                <b-dropdown position="is-bottom-left">
                    <a class="navbar-item" slot="trigger">
                        <span>Login</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>

                    <b-dropdown-item custom paddingless>
                        <form action="">
                            <div class="modal-card" style="width:300px;">
                                <section class="modal-card-body">
                                    <b-field label="Email">
                                        <b-input
                                            type="email"
                                            placeholder="Your email"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Password">
                                        <b-input
                                            type="password"
                                            password-reveal
                                            placeholder="Your password"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-checkbox>Remember me</b-checkbox>
                                </section>
                                <footer class="modal-card-foot">
                                    <button class="button is-primary">Login</button>
                                    <button class="button is-primary">Register</button>
                                </footer>
                            </div>
                        </form>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </nav>

    </div>
</template>
<script>
    import Logo from '@/assets/Logo.png'
export default {
    data(){
        return{
            Logo
        }
    }
  
}
</script>
<style lang="css" scoped>

.navbar{
    padding-left: 60px;
    padding-right: 60px;

}

</style>
