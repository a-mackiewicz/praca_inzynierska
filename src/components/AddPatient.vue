<template>
<div class="row">
<div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto">
    <div class="row">
        <div class="col-12 px-1 pt-1 pb-1">
            <div class="card text-dark" style="width: 800px;">
                <div class="card-header bg-warning py-1" ><b>Dodawanie pacjenta</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2" style="height:calc(100vh - 89.2px);overflow: auto;">
                        <div class="row justify-content-center" style="width:800px">
                            <div class="col-md-12">
                                <form @submit.prevent="handleSubmitForm">
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-12">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Imię:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.name" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-12">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Nazwisko:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.surname" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-6">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Płeć:</div>
                                                </div>
                                                <select class="form-control p-0" v-model="patient.gender" required>
                                                    <option hidden></option>
                                                    <option value="male">Mężczyzna</option>
                                                    <option value="female">Kobieta</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Wiek:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.age" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-12">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Data urodzenia:</div>
                                                </div>
                                                <input type="date" class="form-control" v-model="patient.birth_date" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-12">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">PESEL:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.pesel" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-12">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">KOD:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.password" disabled>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-12">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Numer Telefonu:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.phone" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-12">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Ulica:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.street" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-6">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Numer domu:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.property" required>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Numer lokalu:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.premises" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-sm-6">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Kod pocztowy:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.zip_code" required>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Miejscowość:</div>
                                                </div>
                                                <input type="text" class="form-control" v-model="patient.city" required>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <button class="btn btn-danger btn-block">Dodaj pacjenta</button>
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
                patient: {
                   name: '',
                   surname: '',
                   phone: '',
                   state: 'Nowy',
                   gender: '',
                   age: '',
                   birth_date: '',
                   pesel: '',
                   street: '',
                   property: '',
                   premises: '',
                   zip_code: '',
                   city: '',
                   password: '',
                }
            }
        },
        mounted(){
            this.patient.password = Math.random().toString(36).slice(-8);
            console.log(this.patient.password)
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-patient';
                
                axios.post(apiURL, this.patient).then(() => {
                  this.$router.push('/list_patients')
                  this.patient = {
                    name: '',
                    email: '',
                    phone: '',
                    state: 'Nowy',
                    gender: '',
                    age: '',
                    birth_date: '',
                    pesel: '',
                    street: '',
                    property: '',
                    premises: '',
                    zip_code: '',
                    city: '',
                    password: '',
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>