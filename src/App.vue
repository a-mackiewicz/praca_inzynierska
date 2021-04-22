<template>
  <div>
    <!-- Nav bar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0">
<span class="navbar-brand mb-0 h1 pt-0"><small>System zarządzania gabinetem ortodontycznym</small></span>
	<div class="collapse navbar-collapse">
    <div class="navbar-nav" id="nav0" style="display:none">
    <select @click="loadUsers()" @change="viewUser($event)" class="form-select" aria-label=".form-select-lg example">
      <option :value='0' selected>Wszyscy</option>
      <option v-for="user in this.users" :key="user._id" :value='user._id' >{{ user.name }} {{ user.surname }}</option>
    </select>
    </div>
  </div>
  <span class="navbar-text text-white" id="nav1" style="display:none">
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link class="nav-link btn btn-sm btn-dark px-3 mx-0" style="font-size:13px" :to="{name: 'add_patient'}" >Dodaj pacjenta</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link btn btn-sm btn-dark px-3 mx-0" style="font-size:13px" v-on:click.native="setMessage(0)" to="/list_patients" >Kartoteka</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link btn btn-sm btn-dark px-3 mx-0" style="font-size:13px" to="/calendar">Kalendarz</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link btn btn-sm btn-dark px-3 mx-0" style="font-size:13px" :to="{name: 'settings'}" >Ustawienia</router-link>
        </li>
      </ul>
  </span>
  <span class="navbar-text text-white" id="nav2" style="display:block">
    <button type="button" @click="pushLoginType()" id="navbt1" class="nav-link btn btn-sm btn-dark px-3 mx-0" style="font-size:13px">Panel Lekarza</button>
  </span>
  <span class="navbar-text text-white" id="nav3" style="display:none">
    
          <router-link class="nav-link btn btn-sm btn-dark px-3 mx-3" style="font-size:13px" :to="{name: 'logout'}" >
            Wyloguj
          </router-link>
  </span>
</nav>

    <!-- Router view -->
    <div class="container-fluid">
      <router-view  name="panel">
      </router-view>
    </div>
      <router-view name="toolbar">
      </router-view>
    <div class="container-fluid">
      <router-view :key="$route.fullPath">
      </router-view>
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
          barState: 0,
          navState: 0,
          state: 0,
          firstLoad: 0,
          selectedView: 0,
          currentPages: '',
          settings: [],
          check_name: 0,
          }
    },
    create(){
      this.changeNav()
      this.changeName()
    },
    computed: {
    },
    methods: {
        changeLoginType(){
          if(this.navState == 0){
            document.getElementById("navbt1").innerHTML = 'Panel klienta';
          } else {
            document.getElementById("navbt1").innerHTML = 'Panel Lekarza';
          }
        },
        pushLoginType(){
          if(this.navState == 0){
            this.changeLoginType();
            this.$router.push('/login_patient');
          } else {
            this.changeLoginType();
            this.$router.push('/login');
          }
        },
        changeNav(){
          if(this.state == 1){
            document.getElementById("nav1").style.display = document.getElementById("nav0").style.display = 'block'; // zalogowany do panelu
            document.getElementById("nav2").style.display = 'none';
            document.getElementById("nav3").style.display = 'block';
          } else if(this.state == 2) {
            document.getElementById("nav1").style.display = document.getElementById("nav0").style.display = 'none'; // zalogowany jako user
            document.getElementById("nav2").style.display = 'none';
            document.getElementById("nav3").style.display = 'block';
          } else {
            document.getElementById("nav1").style.display = document.getElementById("nav0").style.display = 'none'; //wylogowany
            document.getElementById("nav2").style.display = 'block';
            document.getElementById("nav3").style.display = 'none';
          }
        },
        changeName(){
            let apiURL = `http://localhost:4000/api/settings`;

                console.log("this.settings")
                axios.get(apiURL).then((res) => {
                    this.settings = res.data;
                    console.log(this.settings)
                    if(this.settings[0] != null){
                        this.check_name = 1;
                    } else {
                        this.check_name = 0;
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
        },
        setMessage(barState) {
          if(barState == 1){
            document.getElementById("divPatientList").style.height = "calc(100vh - 472.2px)";
          } else {
            document.getElementById("divPatientList").style.height = "calc(100vh - 81px)";
          }
            console.log(barState);
        },
        viewUser(userId){
          this.selectedView = userId.target.value;
          this.currentPages = this.$route.fullPath;
            this.$router.push('/view_change');
        },
        loadUsers(){
          if(this.firstLoad == 0) {
            let apiURL = `http://localhost:4000/api/users`;

            axios.get(apiURL).then((res) => {
                this.users = res.data;
            this.firstLoad = 1;
            })
          }
        }
    },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

