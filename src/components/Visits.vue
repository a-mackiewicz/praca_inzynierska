<template>
<div class="row">
<div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto">
    <form @submit.prevent="handleSubmitUpdateForm">
    <div class="row">
        <div class="col-12 px-1 pt-1 pb-1">
            <div class="card text-dark" style="width: 900px;height:110px;">
                <div class="row no-gutters">
                <div class="col-auto">
                    <div class="card-body bg-white p-2" style="width:800px">
                            <div class="form-group row mb-0">
                                <div class="col-sm-3 pr-1">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Data:</div>
                                        </div>
                                    <input type="date" v-model="stringdate" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                                <div class="col-sm-3 px-1">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Godzina:</div>
                                        </div>
                                    <input type="time" v-model="visit.hour" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                                <div class="col-sm-2 px-1">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Długość:</div>
                                        </div>
                                    <input type="number" v-model="visit.duration" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                                <div class="col-sm-2 px-1">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Koszt</div>
                                        </div>
                                    <input type="number" v-model="visit.cost" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                                <div class="col-sm-2 pl-1">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Wpłata</div>
                                        </div>
                                    <input type="number" v-model="visit.paid" class="form-control form-control-sm" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group mb-0">
                                    <textarea v-model="visit.description" class="form-control form-control-sm" style="font-size:11px;resize: none;" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <button class="btn btn-dark btn-block" id="btnSubmitUpdate" style="height:108px;">Dodaj</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <div class="row">
        <div class="col-12 px-1 pt-0 pb-1">
            <div class="card text-dark" style="width: 900px;height:227px;">
                <div class="card-header bg-warning py-1" ><b>Historia wizyt</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2" style="height:200px;overflow: auto;">
<div class="card mb-1" v-for="(tempVisit, index) in activePatients" :key="tempVisit._id" >
  <div class="card-header p-0 ">
    <b class="ml-1">{{ ++index }}</b>. {{ tempVisit.date[0] }}.{{ tempVisit.date[1] }}.{{ tempVisit.date[2] }}, godz. {{ tempVisit.hour }}
    <div role="group" aria-label="Basic example" class="btn-group d-inline float-right">
        <button class="btn btn-sm btn-secondary btn-block m-0 p-0 d-inline" v-on:click="editFunc(tempVisit._id)" style="width:60px;height:18px;font-size:11px">Edytuj</button>
        <button class="btn btn-sm btn-success btn-block m-0 p-0 d-inline" v-if="tempVisit.state == '1'" v-on:click="acceptFunc(tempVisit._id)" style="width:60px;height:18px;font-size:11px">Zaakceptuj</button>
        <button class="btn btn-sm btn-danger btn-block m-0 p-0 d-inline" v-if="tempVisit.state == '1'" v-on:click="delFunc(tempVisit._id)" style="width:60px;height:18px;font-size:11px">Odrzuć</button>
        <button class="btn btn-sm btn-danger btn-block m-0 m-0 p-0 d-inline" v-if="tempVisit.state == '0'" v-on:click="delFunc(tempVisit._id)" style="width:70px;height:18px;font-size:11px">Usuń</button>
    </div>
  </div>
  <div class="card-body p-0 m-1">
      <h6 class="card-title m-1">{{ tempVisit.description }}</h6>
      <footer class="blockquote-footer p-0 m-1" style="font-size:13px">koszt wizyty <cite title="Source Title">{{ tempVisit.cost }}zł</cite>, zapłacono <cite title="Source Title">{{ tempVisit.paid }}zł</cite></footer>
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
            visits: [],
            stringdate: '',
            visit: { 
                patientId: this.$route.params.id,
                    date: [],
                    hour: '',
                    duration: '60',
                    cost: '',
                    paid: '',
                    description: '',
                    state: 0,
            },
            change_bt: 0,

        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/visit/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.visits = res.data;

        })
    },
    mounted() {
            this.$parent.setMessage(1)
    },
    computed: {
        activePatients: function() {
        return this.visits.filter(i => i.state !== '')
        }
    },
    methods: {
        delFunc(tempId){
                let apiURL = `http://localhost:4000/api/delete-visit/${tempId}`;
                let indexOfArrayItem = this.visits.findIndex(i => i._id === tempId);

                if (window.confirm("Chcesz usunąc wizytę?")) {
                    axios.delete(apiURL).then(() => {
                        this.visits.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
        },
        editFunc(tempId){
            for(var i=0;i<this.visits.length;i++){
                if(this.visits[i]._id == tempId){
                    this.visit._id = tempId;
                    this.visit.description = this.visits[i].description;
                    this.visit.cost = this.visits[i].cost;
                    this.visit.paid = this.visits[i].paid;
                    this.visit.hour = this.visits[i].hour;
                    this.visit.duration = this.visits[i].duration;
                    this.stringdate = this.visits[i].date[0] + '-' + this.visits[i].date[1] + '-' + this.visits[i].date[2];
                    this.visit.state = 0;
                    document.getElementById("btnSubmitUpdate").innerHTML = "Edytuj";
                    this.change_bt = 1;
                }
            }
            console.log(this.stringdate);
        },
        handleSubmitUpdateForm() {
            if(this.change_bt == 0){
                let apiURL = 'http://localhost:4000/api/create-visit';
                
                //var addvisit = [];
                console.log(this.visit);
                this.visit.date = this.stringdate.split("-")
                axios.post(apiURL, this.visit).then(() => {
                    apiURL = `http://localhost:4000/api/visit/${this.$route.params.id}`;
                    axios.get(apiURL).then((res) => {
                        this.visits = res.data;
                        //console.log(this.visits);
                        
                    });
                }).catch(error => {
                    console.log(error)
                });
            } else {
                let apiURL = `http://localhost:4000/api/update-visit/${this.visit._id}`;
                
                this.visit.date = this.stringdate.split("-");
                axios.post(apiURL, this.visit).then((res) => {
                    console.log(res)
                    for(var i=0;i<this.visits.length;i++){
                        if(this.visits[i]._id == this.visit._id){
                            this.visits[i].description = this.visit.description;
                            this.visits[i].cost = this.visit.cost;
                            this.visits[i].paid = this.visit.paid;
                            this.visits[i].hour = this.visit.hour;
                            this.visits[i].duration = this.visit.duration;
                            this.visits[i].date = this.visit.date;
                        }
                    }
                    this.visit = { 
                        patientId: this.$route.params.id,
                        date: [],
                        hour: '',
                        duration: '',
                        cost: '',
                        paid: '',
                        description: '',
                        state: 0,
                    };
                    document.getElementById("btnSubmitUpdate").innerHTML = "Dodaj";
                    this.change_bt = 0;
                }).catch(error => {
                    console.log(error)
                });
            }
        },
        acceptFunc(tempId){
            let apiURL = `http://localhost:4000/api/update-visit/${tempId}`;
            var acceptVisit = {};
            acceptVisit._id = tempId;
            acceptVisit.state = 0;
            axios.post(apiURL, acceptVisit).then(() => {
                    for(var i=0;i<this.visits.length;i++){
                        if(this.visits[i]._id == tempId){
                            this.visits[i].state = 0;
                        }
                    }
            }).catch(error => {
                console.log(error)
            });
        },
    }
}
</script>