<template>
    <div class="row"> 
        <div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
		</div>
        <div class="col-auto" style="width: 800px;">
            <div class="row">
                <div class="col-12 px-1 pt-1 pb-1">
                    <div class="card text-dark mt-0 pb-0 mb-3" style="width: 800px">
                        <div class="card-header bg-warning py-1" ><b>Informacje ogólne</b></div>
                        <div class="row no-gutters">
                            <div class="card-body bg-white p-2" style="height:292px;overflow: auto;">
                                <div class="row justify-content-center" style="width:800px">
                                    <div class="col-6 border-right">
                                        <div class="row">
                                            <div class="col-auto pr-0 mr-0">
                                                <img v-if="patient.picture != '' && patient.picture" :src="patient.picture" class="img-fluid border-right" style="height:153px;width:153px" alt="">
                                                <img v-if="patient.picture == '' || !patient.picture" src="../assets/default_user.png" class="img-fluid border-right" style="height:153px;width:153px" alt="">
                                            </div>
                                            <div class="col ml-0">
                                                <h5 class="card-title">{{ patient.name }} {{ patient.surname }}</h5>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item text-danger"><b>Najbliższa wizyta:</b> {{ lastVisit[0] }}.{{ lastVisit[1] }}.{{ lastVisit[2] }}</li>
                                                    <li class="list-group-item"><b>Saldo:</b> {{ accountBalance }}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    <div class="card mt-1 ml-0 mr-0 p-0 mb-0">
                                    <div class="card-header py-1" ><b>Wiadomość od lekarza</b></div>
                                    <div class="card-body p-1" style="height:92px;overflow: auto;">
                                        <p class="card-text">{{ patient.message }}</p>
                                    </div>
                                    </div>
                                    
                                    </div>
                                    <div class="col-6 m-0 p-0">
                                        <div class="px-2" style="height:276px;overflow: auto;">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><b>Pesel:</b> {{ patient.pesel }}</li>
                                                <li class="list-group-item"><b>Wiek:</b> {{ patient.age }}</li>
                                                <li class="list-group-item"><b>Płeć:</b> {{ patient.gender }}</li>
                                                <li class="list-group-item"><b>Data urodzenia:</b> {{ patient.birth_date }}</li>
                                                <li class="list-group-item"><b>Telefon:</b> {{ patient.phone }}</li>
                                                <li class="list-group-item"><b>Adress:</b> {{ patient.street }} {{ patient.property }}/{{ patient.premises }}
                                                <p class="pb-0 mb-0" style="padding-left:40px">{{ patient.zip_code }}, {{ patient.city }}.</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-dark btn-sm" id="btnVisitViews" @click="VisitViews()" style="width:128px;height:30px;">Historia wizyt</button>
                </div>
            </div>
            <div class="row" id="rowReservation" style="display:block">
                <div class="col-12 px-1 pt-1 pb-1">
                    <div class="card text-dark mt-0 pb-0" style="width: 800px">
                        <div class="card-header bg-warning py-1" ><b>Umów wizyte</b></div>
                        <div class="row no-gutters">
                            <div class="card-body bg-white p-2" style="height:270px;overflow: auto;">
                                <div class="row justify-content-center" style="width:800px">
                                    <div class="col-md-6">
                                        <div class="table-responsive">
                                        <table class="table table-bordered table-sm align-self-end mb-0"  style="width: 355px;margin-top:0px;margin-bottom: 0;table-layout: fixed;">
                                            <thead class="text-dark" style="background-color: #e6e6e6;">
                                                <tr>
                                                    <th colspan="7"><div class="d-flex justify-content-between"><a class="p-0 bd-highlight" @click="generatemonth(-1)"><img src="../assets/icons/arrow-l.png" class="img-fluid rounded d-block" style="width:25px; height:auto;filter: invert(0%);" /></a><p class="p-0 m-0 bd-highlight h5">{{ currentMonth }}, {{ genVars[0] }}</p><a class="p-0 bd-highlight" @click="generatemonth(1)"><img src="../assets/icons/arrow-r.png" class="img-fluid rounded d-block" style="width:25px; height:auto;filter: invert(0%);" /></a></div></th>
                                                </tr>
                                                <tr>
                                                    <th>NIEDZ.</th> <th>PON.</th> <th>WT.</th> <th>ŚR.</th> <th>CZW.</th> <th>PT.</th> <th>SOB.</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tbodyCalendar"> 
                                                <tr v-for="(rows, index) in activeCalendar" :key="index">
                                                    <td v-for="(cell, index) in activeCalendar[index]" :key="index" style="padding: 0;">
                                                        <button v-if="cell != 0" @click.prevent="day(cell)" class="btn btn-light btn-sm" style="width:50px;height:30px;"> {{ cell }} </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    <div class="col-md-6 p-0 border">
                                        <p class="p-1 pl-2 mt-0 mx-0 mb-0 bd-highlight h5 text-dark border-bottom" style="background-color: #e6e6e6;">Dostępne godziny</p>
                                        <div id="available-visits" style="visibility: hidden;width:400px">
                                            <button class="btn btn-light btn-sm" @click="reservation(0)" style="width:98px;height:30px;">00:00 - 01:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(1)" style="width:98px;height:30px;">01:00 - 02:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(2)" style="width:98px;height:30px;">02:00 - 03:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(3)" style="width:98px;height:30px;">03:00 - 04:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(4)" style="width:98px;height:30px;">04:00 - 05:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(5)" style="width:98px;height:30px;">05:00 - 06:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(6)" style="width:98px;height:30px;">06:00 - 07:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(7)" style="width:98px;height:30px;">07:00 - 08:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(8)" style="width:98px;height:30px;">08:00 - 09:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(9)" style="width:98px;height:30px;">09:00 - 10:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(10)" style="width:98px;height:30px;">10:00 - 11:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(11)" style="width:98px;height:30px;">11:00 - 12:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(12)" style="width:98px;height:30px;">12:00 - 13:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(13)" style="width:98px;height:30px;">13:00 - 14:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(14)" style="width:98px;height:30px;">14:00 - 15:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(15)" style="width:98px;height:30px;">15:00 - 16:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(16)" style="width:98px;height:30px;">16:00 - 17:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(17)" style="width:98px;height:30px;">17:00 - 18:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(18)" style="width:98px;height:30px;">18:00 - 19:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(19)" style="width:98px;height:30px;">19:00 - 20:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(20)" style="width:98px;height:30px;">20:00 - 21:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(21)" style="width:98px;height:30px;">21:00 - 22:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(22)" style="width:98px;height:30px;">22:00 - 23:00</button>
                                            <button class="btn btn-light btn-sm" @click="reservation(23)" style="width:98px;height:30px;">23:00 - 24:00</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="rowHistory" style="display:none">
                <div class="col-12 px-1 pt-1 pb-1">
                    <div class="card text-dark mt-0" style="width: 800px">
                        <div class="card-header bg-warning py-1" ><b>Historia wizyt</b></div>
                        <div class="row no-gutters">
                            <div class="card-body bg-white p-2" style="height:270px;overflow: auto;">
                                <div class="row justify-content-center" style="width:800px">
                                    <div class="col-md-12">
                                        <div id="history-visits">
                                            <div class="card mb-1" v-for="tempVisit in activePatientVisits" :key="tempVisit._id" >
                                            <div class="card-body p-0 m-1">
                                                <h6 class="card-title m-1"><p class="d-inline"><b class="ml-1">{{ tempVisit.date[0] }}.{{ tempVisit.date[1] }}.{{ tempVisit.date[2] }}</b>, godz. {{ tempVisit.hour }}</p> <p class="float-right d-inline" v-if="tempVisit.state=='0'">koszt wizyty <cite title="Source Title">{{ tempVisit.cost }}zł</cite>, Zapłacono <cite title="Source Title">{{ tempVisit.paid }}zł.</cite></p>
                                                <button class="btn btn-sm btn-danger btn-blockm-0 m-0 p-0 d-inline float-right d-inline" v-if="tempVisit.state == 1 && genVars[2] < tempVisit.date[2]" v-on:click="delFunc(tempVisit._id)" style="width:70px;height:18px;font-size:11px">Odwołaj</button>
                                                </h6>
                                                    
                                            </div>
                                            </div>
                                        </div>
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
    import moment from 'moment';
    axios.defaults.withCredentials = true;

    export default {
        data() {
            return {
                viewSwitch: 0,
                user: [],
                Visits: [],
                patient: [],
                patientVisits: [],
                Patients: [],
                currentMonth: '',
                month: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
                genVars: [0, 0, 0],
                dimensions: [],
                xx: -1,
                visit: { 
                    patientId: this.$route.params.id,
                        date: [],
                        hour: '',
                        duration: 60,
                        cost: '',
                        description: '',
                        state: 1,
                },
                lastVisit: [0, 0, 0],
                accountBalance: 0,
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api/visits-patient';
            axios.get(apiURL).then(res => {
                this.Visits = res.data;
                var today = new Date();
                this.genVars[0] = today.getFullYear(); // rok
                this.genVars[1] = today.getMonth(); // miesiac
                this.genVars[2] = today.getDate(); // dzien
                this.currentMonth = this.month[today.getMonth() - 1];
                this.generatemonth(0);

                apiURL = `http://localhost:4000/api/visit-patient`;

                axios.get(apiURL).then((res) => {
                    
                    this.lastVisit = res.data[res.data.length-1].date;
                    for(var m=0; m<res.data.length; m++){
                        this.accountBalance = this.accountBalance + (res.data[m].paid - res.data[m].cost);
                    }
                    this.patientVisits = res.data;

                    apiURL = `http://localhost:4000/api/patient-patient`;

                    axios.get(apiURL).then((res) => {
                        this.patient = res.data;

                        if(this.patient.gender == "male"){
                            this.patient.gender = 'Mężczyzna';
                        } else {
                            this.patient.gender = "Kobieta";
                        }
                        apiURL = `http://localhost:4000/api/user-patient/${this.patient.doctorId}`;

                        axios.get(apiURL).then((res) => {
                            this.user = res.data;

                        })
                    })
                })

            }).catch(error => {
                console.log(error)
            });
           
        },
        mounted(){
            this.$parent.state = 2;
            this.$parent.changeNav();
        },
        computed: {
            activeCalendar: function() {
                return this.dimensions;
            },
            activeReservation: function() {
                return this.reservation.filter(function(i) {
                    if(i !== ''){
                        return i;
                    }
                })
            },
            activePatientVisits: function() {
                return this.patientVisits.filter(i => i.state !== '')
            }
        },
        methods: {
            VisitViews(){
                if(this.viewSwitch == 1){
                    document.getElementById('btnVisitViews').innerHTML = "Historia wizyt";
                    document.getElementById("rowReservation").style.display = 'block'
                    document.getElementById("rowHistory").style.display = 'none'
                    this.viewSwitch = 0;
                } else {
                    document.getElementById('btnVisitViews').innerHTML = "Umów wizyte";
                    document.getElementById("rowReservation").style.display = 'none'
                    document.getElementById("rowHistory").style.display = 'block'
                    this.viewSwitch = 1;
                }
            },
            generatemonth(temp){
                var ty = this.genVars[0];
                var tm = this.genVars[1];
                
                if((tm + (temp)) > 11){
                    this.genVars[0] = ty + 1;
                    this.genVars[1] = 0;
                } else if((tm + (temp)) < 0) {
                    this.genVars[0] = ty - 1;
                    this.genVars[1] = 11;

                } else {
                    this.genVars[1] = tm + (temp);
                }

                document.getElementById("tbodyCalendar").innerHTML="";
                this.currentMonth = this.month[this.genVars[1]];

                var startDay = new Date(this.genVars[0], this.genVars[1], 1).getDay(); // nazwa pierwszego dnia miesiaca
                var numberOfdays = new Date(this.genVars[0], this.genVars[1]+1, 0).getDate(); // ilosc dni w miesiacu
                

                var numerOfRows = 7 - ((startDay + numberOfdays) % 7);
                if(numerOfRows == 7) numerOfRows = 0;
                numerOfRows = numerOfRows + ((startDay - 1) + numberOfdays);

                var k = 1;
                var l = 0;
                
                for(var i=0;i<(numerOfRows/7);i++) {
                this.xx++;
                this.dimensions[this.xx] = {};
                    for (var j=0; j<7;j++){
                        this.dimensions[this.xx][j] = 0;
                        if((l >= startDay) && ( l < (startDay + numberOfdays))) {
                            this.dimensions[this.xx][j] = k;
                            k++;
                        }
                        l++;
                    }
                }
            },
            activeVisits(ty, tm, td) {
                return this.Visits.filter(function(i) {
                    if(i.date[0] == ty && i.date[1] == tm && i.date[2] == td){
                        return i;
                    }
                })
            },
            day(tempDay){
                var res = this.activeVisits(this.genVars[0].toString(), ("0" + (this.genVars[1] + 1)).slice(-2), ("0" + tempDay).slice(-2));
                res = res.sort((a, b) => { return a.hour.split(':').reduce((acc,time) => (60 * acc) + +time) - b.hour.split(':').reduce((acc,time) => (60 * acc) + +time);});
                document.getElementById('available-visits').style.visibility = "visible";
                var selectedDay = new Date(this.genVars[0], this.genVars[1], tempDay).getDay();
                console.log(parseInt(this.user[0].work[selectedDay][0].slice(0, 2)));
                for(var n=0;n<24;n++){
                    if(n >= parseInt(this.user[0].work[selectedDay][0].slice(0, 2)) && n < parseInt(this.user[0].work[selectedDay][1].slice(0, 2))){
                        document.getElementById('available-visits').getElementsByTagName('button')[n].style.display = 'inline';
                    } else {
                        document.getElementById('available-visits').getElementsByTagName('button')[n].style.display = 'none';
                    }
                }
                for(var m=0; m<res.length; m++){
                    for(var tm = parseInt(res[m].hour.slice(0, 2)); tm < parseInt(moment.utc(res[m].hour,'HH:mm').add(res[m].duration,'minutes').format('HH:mm').slice(0, 2)); tm++){
                        document.getElementById('available-visits').getElementsByTagName('button')[tm].style.display = 'none';
                    }
                }
                this.visit.date[2] = ("0" + tempDay).slice(-2);
            },
            reservation(tempHour){
                let apiURL = 'http://localhost:4000/api/reservation-visit';
                
                this.visit.date[0] = this.genVars[0].toString();
                this.visit.date[1] = ("0" + (this.genVars[1] + 1)).slice(-2);
                this.visit.hour = ("0" + tempHour).slice(-2) + ':00';
                axios.post(apiURL, this.visit).then(() => {
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>