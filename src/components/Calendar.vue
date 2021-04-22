<template>
    <div class="row"> 
        <div class="col-md-12 p-0">
            <div class="table-responsive">
            <table class="table table-bordered table-sm align-self-end mb-0"  style=";margin-top:0px;margin-bottom: 0;table-layout: fixed;">
                <thead class="text-light" style="background-color: #8b0000;">
                    <tr>
                        <th colspan="7"><div class="d-flex justify-content-between"><a class="p-0 bd-highlight" @click="generatemonth(-1)"><img src="../assets/icons/arrow-l.png" class="img-fluid rounded d-block" style="width:25px; height:auto;filter: invert(100%);" /></a><p class="p-0 m-0 bd-highlight h5">{{ currentMonth }}, {{ genVars[0] }}</p><a class="p-0 bd-highlight" @click="generatemonth(1)"><img src="../assets/icons/arrow-r.png" class="img-fluid rounded d-block" style="width:25px; height:auto;filter: invert(100%);" /></a></div></th>
                    </tr>
                    <tr>
                        <th>Niedziela</th> <th>Poniedziałek</th> <th>Wtorek</th> <th>Środa</th> <th>Czwartek</th> <th>Piątek</th> <th>Sobota</th>
                    </tr>
                </thead>
                <tbody id="tbodyCalendar">
                    <!--<tr style="height:calc(16.67vh - 14px)">
                        <td id="c1"><tr v-for="visit in activeVisits(this.calendar[0])" :key="visit._id" ><td><b>{{ visit.hour }}:</b> {{ activePatients(visit.patientId)[0].name }} {{ activePatients(visit.patientId)[0].surname }}, {{ activePatients(visit.patientId)[0].pesel }}</td></tr></td>-->
                    
                </tbody>
            </table>
            </div>
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
                Visits: [],
                Patients: [],
                currentMonth: '',
                month: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
                genVars: [0, 0, 0],
                pointer:[0, 0, 0],

            }
        },
        created() {
                let apiURL = 'http://localhost:4000/api/patients';
                axios.get(apiURL).then(res => {
                    
                if(this.$parent.selectedView == '0'){
                this.Patients = res.data;
                } else {
                    for(var i = 0; i < res.data.length; i++){
                        if(res.data[i].doctorId == this.$parent.selectedView){
                            
                            this.Patients.push(res.data[i]);
                            console.log(this.Patients)
                        }
                    }
                }
                    apiURL = 'http://localhost:4000/api/visits';
                    axios.get(apiURL).then(res => {

                         if(this.$parent.selectedView == '0'){
                            this.Visits = res.data;
                            } else {
                                for(var i = 0; i < res.data.length; i++){
                                    for(var j = 0; j < this.Patients.length; j++){
                                        if(res.data[i].patientId == this.Patients[j]._id){
                                            this.Visits.push(res.data[i]);
                                            console.log(this.Visits)
                                        }
                                    }
                                }
                            }

                        var today = new Date();
                        this.genVars[0] = today.getFullYear(); // rok
                        this.genVars[1] = today.getMonth(); // miesiac
                        this.genVars[2] = today.getDate(); // dzien
                        this.pointer = [this.genVars[0], this.genVars[1], this.genVars[2]];
                        this.currentMonth = this.month[today.getMonth() - 1];
                        this.generatemonth(0);
                    }).catch(error => {
                        console.log(error)
                    });
                }).catch(error => {
                    console.log(error)
                });
           
        },
        mounted(){
            this.$parent.state = 1;
            this.$parent.changeNav();
        },
        methods: {
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
                var tr = document.createElement('tr');
                tr.style.height = 'calc(' + (100 / (numerOfRows/7)) + 'vh - ' + (140 / (numerOfRows/7)) + 'px)'
                document.getElementById("tbodyCalendar").appendChild(tr);
                    for (var j=0; j<7;j++){
                        var td = document.createElement('td');
                        td.style ="padding: 0;"
                        if(this.pointer[0] == this.genVars[0] && this.pointer[1] == this.genVars[1] && this.pointer[2] == k){
                            td.className = "bg-light";
                        }
                        if((l >= startDay) && ( l < (startDay + numberOfdays))) {
                            td.appendChild(document.createTextNode(k));
                            var ul = document.createElement('ul');
                            ul.className = "list-group list-group-flush";
                            ul.style.height = 'calc(' + (100 / (numerOfRows/7)) + 'vh - ' + (140 / (numerOfRows/7)) + 'px - 18px)'
                            ul.style.overflow = "auto";
                            var res = this.activeVisits(this.genVars[0].toString(), ("0" + (this.genVars[1] + 1)).slice(-2), ("0" + k).slice(-2));
                            res = res.sort((a, b) => { return a.hour.split(':').reduce((acc,time) => (60 * acc) + +time) - b.hour.split(':').reduce((acc,time) => (60 * acc) + +time);});
                            for(var m=0; m<res.length; m++){
                                var li = document.createElement('li');
                                li.className = "list-group-item";
                                li.style = "padding: 2px;font-size:12px"
                                var span = document.createElement('span');
                                if(res[m].state == '1'){
                                    span.className = "badge badge-danger badge-pill";
                                } else {
                                    span.className = "badge badge-primary badge-pill";
                                }
                                span.appendChild(document.createTextNode(res[m].hour + ' - ' + moment.utc(res[m].hour,'HH:mm').add(res[m].duration,'minutes').format('HH:mm')));
                                li.appendChild(span);
                                var tempPatient = this.activePatients(res[m].patientId);
                                var href = document.createElement('a');
                                href.href = "./visits/" + res[m].patientId;
                                href.style.color = "black";
                                href.appendChild(document.createTextNode(' ' + tempPatient[0].name + ' ' + tempPatient[0].surname + ', ' + tempPatient[0].pesel))
                                li.appendChild(href);
                                ul.appendChild(li);
                            }
                            td.appendChild(ul);
                            k++;
                        }
                        document.getElementById("tbodyCalendar").lastElementChild.appendChild(td)
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
            activePatients(tempId) {
                return this.Patients.filter(i => i._id == tempId)
            },
            deletePatients(id){
                let apiURL = `http://localhost:4000/api/delete-patient/${id}`;

                if (window.confirm("Chcesz usunąć pacjenta?")) {
                    axios.delete(apiURL).then(() => {
                    this.$router.push('/list_patients');
                    window.location.reload();
                    }).catch(error => {
                        console.log(error)
                    });
                }
            },
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>