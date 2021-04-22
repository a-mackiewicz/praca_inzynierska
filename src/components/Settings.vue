<template>
<div class="row">
<div class="col-sm border-right" style="height:calc(100vh - 55.2px);margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto">
        <div class="row">
        <div class="col-12 px-1 pt-1 pb-1">
            <div class="card text-dark" style="width: 900px;height:168px;">
                <div class="card-header bg-warning py-1" ><b>Dodaj lekarza</b></div>
                <form @submit.prevent="handleUpdateForm">
                <div class="row no-gutters">
                    <div class="col-auto pr-2" style="width: 800px;">
                        <div class="card-body bg-white p-2">
                                <div class="form-group row mb-0">
                                    <div class="col-sm-12 pr-1">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"  style="height:25px;font-size:11px">Nazwa:</div>
                                            </div>
                                        <input type="text" v-model="settings[0].name" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-sm-12 pr-1">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"  style="height:25px;font-size:11px">Telefon:</div>
                                            </div>
                                        <input type="text" v-model="settings[0].phone" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-sm-6 pr-1">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"  style="height:25px;font-size:11px">Miasto:</div>
                                            </div>
                                        <input type="text" v-model="settings[0].city" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 px-1">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"  style="height:25px;font-size:11px">Ulicja:</div>
                                            </div>
                                        <input type="text" v-model="settings[0].street" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-sm-6 pr-1">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"  style="height:25px;font-size:11px">Nr. budynku:</div>
                                            </div>
                                        <input type="text" v-model="settings[0].property" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 px-1">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"  style="height:25px;font-size:11px">Nr. lokalu</div>
                                            </div>
                                        <input type="password" v-model="settings[0].premises" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <button class="btn btn-dark btn-block" style="height:140px;">Zmień</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 px-1 pt-1 pb-1">
            <div class="card text-dark" style="width: 900px;height:168px;">
                <div class="card-header bg-warning py-1" ><b>Dodaj lekarza</b></div>
                <form @submit.prevent="handleSubmitUpdateForm">
                <div class="row no-gutters">
                    <div class="col-auto pr-2" style="width: 800px;">
                        <div class="card-body bg-white p-2">
                                <div class="form-group row mb-0">
                                    <div class="col-sm-6 pr-1">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"  style="height:25px;font-size:11px">Imie:</div>
                                            </div>
                                        <input type="text" v-model="user.name" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 px-1">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"  style="height:25px;font-size:11px">Nazwisko:</div>
                                            </div>
                                        <input type="text" v-model="user.surname" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-sm-6 pr-1">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"  style="height:25px;font-size:11px">Login:</div>
                                            </div>
                                        <input type="text" v-model="user.login" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 px-1">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"  style="height:25px;font-size:11px">Hasło</div>
                                            </div>
                                        <input type="password" v-model="user.password" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row mb-0">
                                    
                                    <div class="col-sm-1 px-1">
                                    <p class="col-sm-12 pr-1 pt-2">Godziny pracy:</p>
                                    </div>
                                    
                                    <div class="col-sm-11">
                                        <div class="form-group row mb-0">
                                            <div class="col-sm-4 px-2">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"  style="height:25px;font-size:11px"><input class="form-check-input" v-model="user.work[0][2]" id="btnNiedz" type="checkbox">NIEDZ.</div>
                                                    </div>
                                                <input type="time" v-model="user.work[0][0]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                <input type="time" v-model="user.work[0][1]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                </div>
                                            </div>
                                            <div class="col-sm-4 px-2">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"  style="height:25px;font-size:11px"><input class="form-check-input" v-model="user.work[1][2]" id="btnPon" type="checkbox">PON.</div>
                                                    </div>
                                                <input type="time" v-model="user.work[1][0]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                <input type="time" v-model="user.work[1][1]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                </div>
                                            </div>
                                            <div class="col-sm-4 px-2">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"  style="height:25px;font-size:11px"><input class="form-check-input" v-model="user.work[2][2]" id="btnWt" type="checkbox">WT.</div>
                                                    </div>
                                                <input type="time" v-model="user.work[2][0]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                <input type="time" v-model="user.work[2][1]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row mb-0">
                                            <div class="col-sm-3 px-2">
                                                <div class="input-group mb-0">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"  style="height:25px;font-size:11px"><input class="form-check-input" v-model="user.work[3][2]" id="btnSr" type="checkbox">ŚR.</div>
                                                    </div>
                                                <input type="time" v-model="user.work[3][0]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                <input type="time" v-model="user.work[3][1]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                </div>
                                            </div>
                                            <div class="col-sm-3 px-2">
                                                <div class="input-group mb-0">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"  style="height:25px;font-size:11px"><input class="form-check-input" v-model="user.work[4][2]" id="btnCzw" type="checkbox">CZW.</div>
                                                    </div>
                                                <input type="time" v-model="user.work[4][0]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                <input type="time" v-model="user.work[4][1]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                </div>
                                            </div>
                                            <div class="col-sm-3 px-2">
                                                <div class="input-group mb-0">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"  style="height:25px;font-size:11px"><input class="form-check-input" v-model="user.work[5][2]" id="btnPt" type="checkbox">PT.</div>
                                                    </div>
                                                <input type="time" v-model="user.work[5][0]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                <input type="time" v-model="user.work[5][1]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                </div>
                                            </div>
                                            <div class="col-sm-3 px-2">
                                                <div class="input-group mb-0">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"  style="height:25px;font-size:11px"><input class="form-check-input" v-model="user.work[6][2]" id="btnSob" type="checkbox">SOB.</div>
                                                    </div>
                                                <input type="time" v-model="user.work[6][0]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                <input type="time" v-model="user.work[6][1]" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <button class="btn btn-dark btn-block" id="btnSubmitUpdate" style="height:140px;">Dodaj</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 px-1 pt-0 pb-1">
            <div class="card text-dark" style="width: 900px;height:227px;">
                <div class="card-header bg-warning py-1" ><b>Lista lekarzy</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2" style="height:200px;overflow: auto;">
<div class="card mb-1" v-for="tempUser in activeUser" :key="tempUser._id" >
  <div class="card-body p-0 m-1">
      <h6 class="card-title m-1">{{ tempUser.name }} {{ tempUser.surname }}
        <button class="btn btn-sm btn-danger btn-block m-0 m-0 p-0 d-inline float-right" v-on:click="delFunc(tempUser._id)" style="width:70px;height:18px;font-size:11px">Usuń</button>
        <button class="btn btn-sm btn-secondary btn-block m-0 p-0 d-inline float-right" v-on:click="editFunc(tempUser._id)" style="width:60px;height:18px;font-size:11px">Edytuj</button></h6>
      <h6 class="card-title m-1">Login: {{ tempUser.login }}</h6>
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
            users: [],
            settings: [],
            user: { 
                    name: '',
                    surname: '',
                    login: '',
                    password: '',
                    work: [['00:00','00:00',false],['00:00','00:00',false],['00:00','00:00',false],['00:00','00:00',false],['00:00','00:00',false],['00:00','00:00',false],['00:00','00:00',false]],
            },
            change_bt: 0,
            check_db: 0,

        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/users`;

        axios.get(apiURL).then((res) => {
            this.users = res.data;
            
            apiURL = `http://localhost:4000/api/settings`;

            axios.get(apiURL).then((res) => {
                this.settings = res.data;
                console.log(this.settings)
                if(this.settings[0] != null){
                    this.check_db = 1;
                } else {
                    this.check_db = 0;
                        this.settings[0] = {
                        name: '',
                        phone: '',
                        city: '',
                        street: '',
                        property: '',
                        premises: '',
                    }
                }
            })
        })
    },
    mounted() {
    },
    computed: {
        activeUser: function() {
        return this.users.filter(i => i.state !== '')
        }
    },
    methods: {
        delFunc(tempId){
                let apiURL = `http://localhost:4000/api/delete-user/${tempId}`;
                let indexOfArrayItem = this.users.findIndex(i => i._id === tempId);

                if (window.confirm("Chcesz usunąc wizytę?")) {
                    axios.delete(apiURL).then(() => {
                        this.users.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
        },
        editFunc(tempId){
            for(var i=0;i<this.users.length;i++){
                if(this.users[i]._id == tempId){
                    this.user._id = tempId;
                    this.user.name = this.users[i].name;
                    this.user.surname = this.users[i].surname;
                    this.user.login = this.users[i].login;
                    this.user.work = this.users[i].work;
                    document.getElementById("btnSubmitUpdate").innerHTML = "Edytuj";
                    this.change_bt = 1;
                }
            }
        },
        handleSubmitUpdateForm() {
            for(var m = 0; m < this.user.work.length; m++){
                for(var n = 0; n < this.user.work[m].length-1; n++){
                    if(this.user.work[m][n] == 0){
                        this.user.work[m][2] = false;
                    }
                }
            }
            if(this.change_bt == 0){
                let apiURL = 'http://localhost:4000/api/create-user';
                
                console.log(this.user);

                axios.post(apiURL, this.user).then(() => {
                    apiURL = `http://localhost:4000/api/users`;
                    axios.get(apiURL).then((res) => {
                        this.users = res.data;
                        
                    });
                }).catch(error => {
                    console.log(error)
                });
            } else {
                let apiURL = `http://localhost:4000/api/update-user/${this.user._id}`;
                
                axios.post(apiURL, this.user).then((res) => {
                    console.log(res)
                    for(var i=0;i<this.users.length;i++){
                        if(this.users[i]._id == this.user._id){
                            this.users[i].name = this.user.name;
                            this.users[i].surname = this.user.surname;
                            this.users[i].login = this.user.login;
                            this.users[i].work = this.user.work;
                        }
                    }
                    this.user = { 
                        name: [],
                        surname: '',
                        login: '',
                        password: '',
                        work: [['00:00','00:00',false],['00:00','00:00',false],['00:00','00:00',false],['00:00','00:00',false],['00:00','00:00',false],['00:00','00:00',false],['00:00','00:00',false]],
                    };
                    document.getElementById("btnSubmitUpdate").innerHTML = "Dodaj";
                    this.change_bt = 0;
                }).catch(error => {
                    console.log(error)
                });
            }
        },
        handleUpdateForm() {
            if(this.check_db == 0){
                let apiURL = 'http://localhost:4000/api/create-settings';
                
                axios.post(apiURL, this.settings).then(() => {
                }).catch(error => {
                    console.log(error)
                });
            } else {
                let apiURL = `http://localhost:4000/api/update-settings/${this.settings[0]._id}`;
                axios.post(apiURL, this.settings[0]).then((res) => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                });
            }
        },
    }
}
</script>