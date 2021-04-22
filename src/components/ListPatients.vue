<template>
    <div class="row"> 
        <div class="col-md-12 p-0">
            
            <div class="table-responsive">
            <table class="table table-hover table-sm align-self-end mb-0"  style="margin-top:0px;margin-bottom: 0;table-layout: fixed;">
                <thead class="text-light" style="background-color: #8b0000;">
                    <tr>
                        <th style="width:50px">Lp.</th>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Płeć</th>
                        <th>Wiek</th>
                        <th>Pesel</th>
                        <th>Numer telefonu</th>
                        <th>Status</th>
                        <th style="width:200px">Opcje</th>
                    </tr>
                </thead>
            </table>
            </div>
            
            <div id="divPatientList" class="table-responsive" style="height: calc(100vh - 371.6px);">
            <table class="table table-hover table-sm mb-0" style="table-layout: fixed;">
                <tbody>
                    <tr v-for="(patient, index) in Patients" :key="patient._id" >
                        <td style="width:50px">{{ ++index }}</td>
                        <td>{{ patient.name }}</td>
                        <td>{{ patient.surname }}</td>
                        <td>{{ patient.gender }}</td>
                        <td>{{ patient.age }}</td>
                        <td>{{ patient.pesel }}</td>
                        <td>{{ patient.phone }}</td>
                        <td>{{ patient.state }}</td>
                        <td style="width:200px">
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <router-link :to="{name: 'patient', params: { id: patient._id }}" class="btn btn-sm btn-dark">Wejdź
                            </router-link>
                            <button @click.prevent="deletePatients(patient._id)" class="btn btn-sm btn-warning">Usuń pracjenta</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    axios.defaults.withCredentials = true;

    export default {
        data() {
            return {
                Patients: [],
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api/patients';
            axios.get(apiURL, {withCredentials: true}).then(res => {
                if(this.$parent.selectedView == '0'){
                this.Patients = res.data;
                console.log(this.Patients)
                } else {
                    for(var i = 0; i < res.data.length; i++){
                        if(res.data[i].doctorId == this.$parent.selectedView){
                            
                            this.Patients.push(res.data[i]);
                        }
                    }
                }
            }).catch(error => {
                console.log(error)
            });
        },
        mounted(){
            this.$parent.setMessage(0);
            this.$parent.state = 1;
            this.$parent.changeNav();
        },
        computed: {
            activePatients: function() {
                return this.Patients.filter(function(i) {
                    if(i.state !== ''){
                        return i.state;
                    }
                })
            }
        },
        methods: {
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