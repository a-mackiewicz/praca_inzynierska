<template>
<div class="row">
<div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto">
    <div class="row">
        <div class="col-12 px-1 pt-1 pb-1">
            <div class="card text-dark mt-3" style="width: 800px;margin-bottom:calc(100vh - 265.2px)">
                <div class="card-header bg-warning py-1" ><b>Logowanie do systemu</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2" style="height:160px;overflow: auto;">
                        <div class="row justify-content-center" style="width:800px">
                            <div class="col-md-12">
                                <form @submit.prevent="loginUser">
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-12">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div id="inputLogin" class="input-group-text">Login:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="login.login" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-12">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div id="inputPass" class="input-group-text">Hasło:</div>
                                                </div>
                                                <input type="password" class="form-control" v-model="login.password" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-0">
                                        <button class="btn btn-dark btn-block">Zaloguj</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-sm border-left" style="margin-left: 15px; background-color: #f3f3f3;">

</div>
</div>
</template>

<script>
    import axios from "axios";
    axios.defaults.withCredentials = true;

    export default {
        data() {
            return {
                login: {
                    login: "",
                    password: ""
                }
            }
        },
        create(){
        },
        mounted(){
            if(this.$cookies.get('user')) {
                this.$router.push('/list_patients')
            } else {
                this.$parent.navState = 0;
                this.$parent.changeLoginType();
            }
        },
        methods: {
            loginUser() {
                let apiURL = 'http://localhost:4000/api/login';
                
                axios.post(apiURL, this.login, {withCredentials: true}).then(res => {
                    let sess = res.data;
                    console.log(sess);
                    this.$cookies.set('user', sess);
                    this.$parent.state = 1;
                    this.$parent.changeNav();
                    this.$router.push('/list_patients')
                    this.login = {
                    login: '',
                    password: '',
                    }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>
