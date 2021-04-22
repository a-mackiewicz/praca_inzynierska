<template>
    <div class="row">
        <div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
		</div>
        <div class="col-auto">
			<div class="row">
				<div class="col-auto pl-0 pr-1 pt-1 pb-1">
                    <form @submit.prevent="handleUpdateForm">
					<div class="card text-dark" style="width: 600px;height:344px;">
						<div class="card-header bg-warning py-1" ><b>Informacje ogólne</b></div>
                        <div class="row no-gutters">
                            <div class="col-auto border-bottom">
                                <img v-if="patient.picture != ''" :src="patient.picture" class="img-fluid border-right" style="height:153px;width:153px" alt="">
                                <img v-if="patient.picture == ''" src="../assets/default_user.png" class="img-fluid border-right" style="height:153px;width:153px" alt="">
                            </div>
                            <div class="col border-bottom">
                                <div class="card-body bg-white p-0">
                                    <h5 class="card-title pl-3 pt-2 pb-2 mb-0">{{ patient.name }} {{ patient.surname }}</h5>
                                    <div class='container'>
                                        <div class="row border-bottom">
                                            <div class="col-6">
                                                <p class="card-text mb-0"><b>Wiek:</b> {{ patient.age }}</p>
                                                <p class="card-text mb-0"><b>Płeć:</b> {{ patient.gender }}</p>
                                                <p class="card-text mb-0"><b>Data urodzenia:</b> {{ patient.birth_date }}</p>
                                                <p class="card-text mb-0"><b>Pesel:</b> {{ patient.pesel }}</p>
                                            </div>
                                            <div class="col-6">
                                                <p class="card-text mb-0"><b>Telefon:</b> {{ patient.phone }}</p>
                                                <p class="card-text mb-0"><b>Adress:</b> {{ patient.street }} {{ patient.property }}/{{ patient.premises }}</p>
                                                <p class="card-text mb-0" style="padding-left:40px">{{ patient.zip_code }}, {{ patient.city }}</p>
                                                <p class="card-text mb-0"><b>Status leczenia:</b> {{ patient.state }}</p>
                                            </div>
                                        </div>
                                        <div class="row border-bottom" style="background-color: rgb(243, 243, 243);">
                                            <div class="col-6">
                                                <p class="card-text mb-0" style="color:red"><b>Saldo:</b> {{ accountBalance }}</p>
                                            </div>
                                            <div class="col-6">
                                                <p class="card-text mb-0" style="color:red"><b>Najbliższa wizyta:</b> {{ lastVisit[0] }}.{{ lastVisit[1] }}.{{ lastVisit[2] }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="group" aria-label="Basic example" class="btn-group d-inline float-left">
                                    <button class="btn btn-dark btn-sm" style="width:149px">Zapisz</button>
                                    <button type="button" class="btn btn-secondary btn-sm" @click="stateFunc()" style="width:149px">Zmień status</button>
                                    <button type="button" class="btn btn-danger btn-sm" @click="delFunc()" style="width:149px">Usuń pacjenta</button>
                                </div>
                            </div>
                        </div>
                        <div style="height:280px;overflow: auto;">
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Imie</div>
                                        </div>
                                    <input type="text" class="form-control form-control-sm" v-model="patient.name" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Nazwisko</div>
                                        </div>
                                    <input type="text" class="form-control form-control-sm" v-model="patient.surname" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Płeć</div>
                                        </div>
                                    <select class="form-control form-control-sm p-0" id="formTypeReferral" v-model="patient.gender" style="height:25px;font-size:11px">
                                        <option hidden></option>
                                        <option value="Mężczyzna">Mężczyzna</option>
                                        <option value="Kobieta">Kobieta</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Wiek</div>
                                        </div>
                                    <input type="text" class="form-control form-control-sm" v-model="patient.age" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Numer telefonu</div>
                                        </div>
                                    <input type="text" class="form-control form-control-sm" v-model="patient.phone" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Pesel</div>
                                        </div>
                                    <input type="text" class="form-control form-control-sm" v-model="patient.pesel" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Ulica</div>
                                        </div>
                                    <input type="text" class="form-control form-control-sm" v-model="patient.street" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Nr. mieszkania</div>
                                        </div>
                                    <input type="text" class="form-control form-control-sm" v-model="patient.property" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Nr. Lokalu</div>
                                        </div>
                                    <input type="text" class="form-control form-control-sm" v-model="patient.premises" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Kod pocztowy</div>
                                        </div>
                                    <input type="text" class="form-control form-control-sm" v-model="patient.zip_code" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mx-1 mt-2 mb-0">
                                <div class="col-sm-12">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"  style="height:25px;font-size:11px">Miasto</div>
                                        </div>
                                    <input type="text" class="form-control form-control-sm" v-model="patient.city" style="height:25px;font-size:11px">
                                    </div>
                                </div>
                            </div>
                        </div>
					</div>
                    </form>
				</div>
				<div class="col">
                    <div class="row">
                        <div class="col-auto px-0 pt-1 pb-1">
                            <div class="card text-dark" style="width: 400px;height:170px;">
                                <div class="card-header bg-warning py-1"><b>Badanie</b></div>
                                <div class="row no-gutters">
                                    <div class="col">
                                        <div class="card-body bg-white py-2" style="height:143px;overflow: auto;">
                                            <p class="card-text" v-html="examination"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-auto px-0 pt-0 pb-1">
                            <div class="card text-dark" style="width: 400px;height:170px;">
                                <div class="card-header bg-warning py-1"><b>Wywiad</b></div>
                                <div class="row no-gutters">
                                    <div class="col">
                                        <div class="card-body bg-white py-2" style="height:143px;overflow: auto;">
                                            <p class="card-text" v-html="interview"></p>
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
axios.defaults.withCredentials = true;

    export default {
        data() {
            return {
                patient: {},
                interview: [],
                examination: [],
                teeths: [
                    "ósemka", "siódemka", "szóstka", "piątka", "czwórka", "trójka", "dwójka", "jedynka",
                    "jedynka", "dwójka", "trójka", "czwórka", "piątka", "szóstka", "siódemka", "ósemka"
                ],
                lastVisit: [],
                accountBalance: 0,
            }
        },
        created() {
            let apiURL = `http://localhost:4000/api/patient/${this.$route.params.id}`;

            axios.get(apiURL).then((res) => {
                this.patient = res.data;
            if(this.patient.gender == "male"){
                this.patient.gender = 'Mężczyzna';
            } else {
                this.patient.gender = "Kobieta";
            }
            })
            apiURL = `http://localhost:4000/api/interview/${this.$route.params.id}`;

            axios.get(apiURL).then((res) => {
                if(res.data){
                    if(res.data.allergy != ''){
                        this.interview = this.interview + '<b>Alergie:</b> ' + res.data.allergy + '<br />';
                    }
                    if(res.data.laryngology != ''){
                        this.interview = this.interview + '<b>Problemy laryngologiczne:</b> ' + res.data.allergy + '<br />';
                    }
                    if(res.data.laryngology !=  ''){
                        this.interview = this.interview + '<b>Problemy laryngologiczne:</b> ' + res.data.laryngology + '<br />';
                    }
                    if(res.data.breath != ''){
                        this.interview = this.interview + '<b>Trudności z oddychaniem przez nos:</b> ' + res.data.breath + '<br />';
                    }
                    if(res.data.snore != ''){
                        this.interview = this.interview + '<b>Pacjent chrapie:</b> ' + res.data.snore + '<br />';
                    }
                    if(res.data.epilepsy != ''){
                        this.interview = this.interview + '<b>Pacjent choruje na padaczke:</b> ' + res.data.epilepsy + '<br />';
                    }
                    if(res.data.hypertension != ''){
                        this.interview = this.interview + '<b>Pacjent choruje na nadciśnienie:</b> ' + res.data.hypertension + '<br />';
                    }
                    if(res.data.diabetes != ''){
                        this.interview = this.interview + '<b>Pacjent choruje na cukrzyce:</b> ' + res.data.diabetes + '<br />';
                    }
                    if(res.data.blood != ''){
                        this.interview = this.interview + '<b>Zaburzenia krzepnięcia krwi:</b> ' + res.data.blood + '<br />';
                    }
                    if(res.data.ort_after != ''){
                        this.interview = this.interview + '<b>Pacjent był leczony ortodontycznie:</b> ' + res.data.ort_after + '<br />';
                    }
                    if(res.data.damage != ''){
                        this.interview = this.interview + '<b>Urazy zębów:</b> ' + res.data.damage + '<br />';
                    }
                    if(res.data.malocclusion != ''){
                        this.interview = this.interview + '<b>Wady zgryzu w rodzinie:</b> ' + res.data.malocclusion + '<br />';
                    }
                } else {
                    this.interview = "";
                }
            })

            apiURL = `http://localhost:4000/api/examination/${this.$route.params.id}`;

            axios.get(apiURL).then((res) => {
                var tempI = 0;
                if(res.data){
                    for(var i=0;i<res.data.teeth.length;i++){
                        if(res.data.teeth[i]){
                            if(tempI == 0) this.examination = '<b>Usunięte zęby:</b> ', tempI++;
                            if(i <= 7 || (15 < i && i <=23)) this.examination = this.examination + 'Lewa ';
                            if((7 < i && i <=15) || i > 23) this.examination = this.examination + 'Prawa ';
                            if(i <= 15) this.examination = this.examination + 'górna ' + this.teeths[i];
                            if(i > 15) this.examination = this.examination + 'dolna ' + this.teeths[(i-16)];
                            if(i < 31) this.examination = this.examination + ', ';
                        }
                        if(i >= 31) this.examination = this.examination + '.<br />';
                    }
                    if(res.data.breath == 'usta'){
                        this.examination = this.examination + '<b>Oddychanie przez </b> ' + res.data.breath + '<br />';
                    }
                    if(res.data.joints == 'Tak'){
                        this.examination = this.examination + '<b>Bóle stawów: </b> ' + res.data.joints + '<br />';
                    }
                    if(res.data.bridle == 'Nieprawidłowe'){
                        this.examination = this.examination + '<b>Wędzidełko: </b> ' + res.data.bridle + '<br />';
                    }
                    if(res.data.suction != false || res.data.clenching != false || res.data.grinding != false){
                        this.examination = this.examination + '<b>Nawyki: </b>';
                        var j = 0;
                        if(res.data.suction) {
                            this.examination = this.examination + 'Ssanie';
                            j = 1;
                        }
                        if(j == 1) {
                            this.examination = this.examination + ', ';
                            j = 0;
                        }
                        if(res.data.clenching) {
                            this.examination = this.examination + 'Zaciskanie zębów';
                            j = 1;
                        }
                        if(j == 1) {
                            this.examination = this.examination + ', ';
                            j = 0;
                        }
                        if(res.data.grinding) this.examination = this.examination + 'Zgrzytanie';
                        this.examination = this.examination + '<br />';
                    }
                    if(res.data.class){
                        this.examination = this.examination + '<b>Klasa zębowa: </b>' + res.data.class + '<br />';
                    }
                    if(res.data.spariness == 'Tak'){
                        this.examination = this.examination + '<b>Szparowatość</b><br />';
                    }
                    if(res.data.crowding == 'Tak'){
                        this.examination = this.examination + '<b>Stłoczenie zębów</b><br />';
                    }
                    if(res.data.diastema == 'Tak'){
                        this.examination = this.examination + '<b>Diastema</b><br />';
                    }
                    if(res.data.open == 'Tak'){
                        this.examination = this.examination + '<b>Zgryz otwarty</b><br />';
                    }
                    if(res.data.deep == 'Tak'){
                        this.examination = this.examination + '<b>Zgryz głęboki</b><br />';
                    }
                    if(res.data.crossFront == 'Tak'){
                        this.examination = this.examination + '<b>Zgryz krzyżowy przedni</b><br />';
                    }
                    if(res.data.crossLateral == 'Tak'){
                        this.examination = this.examination + '<b>Zgryz krzyżowy boczny</b><br />';
                    }
                } else {
                    this.examination = "";
                }
                //if(res.data.teeth != null){
                //    this.examination = this.examination + '<b>Alergie:</b> ' + res.data.allergy + '<br>';
                //}
            })

            
            apiURL = `http://localhost:4000/api/visit/${this.$route.params.id}`;

            axios.get(apiURL).then((res) => {
                this.lastVisit = res.data[res.data.length-1].date;
                for(var m=0; m<res.data.length; m++){
                    this.accountBalance = this.accountBalance + (res.data[m].paid - res.data[m].cost);
                }
            })
        },
        mounted(){
            this.$parent.setMessage(1)
        },
        methods: {
            delFunc(){
                let apiURL = `http://localhost:4000/api/delete-patient/${this.$route.params.id}`;

                if (window.confirm("Chcesz usunąć pacjenta?")) {
                    axios.delete(apiURL).then(() => {
                    this.$router.push('/list_patients')
                    window.location.reload()
                    }).catch(error => {
                        console.log(error)
                    });
                }
            },
            stateFunc() {
                if(this.patient.state == "Leczenie zakończone") {
                    let apiURL = `http://localhost:4000/api/update-patient/${this.$route.params.id}`;
                    this.patient.state = "W trakcie Leczenia";
                    axios.post(apiURL, this.patient).then((res) => {
                        console.log(res)
                    }).catch(error => {
                        console.log(error)
                    });
                } else {
                    let apiURL = `http://localhost:4000/api/update-patient/${this.$route.params.id}`;
                    this.patient.state = "Leczenie zakończone";
                    axios.post(apiURL, this.patient).then((res) => {
                        console.log(res)
                    }).catch(error => {
                        console.log(error)
                    });
                }
                window.location.reload();
            },
            handleUpdateForm() {
                let apiURL = `http://localhost:4000/api/update-patient/${this.$route.params.id}`;

                axios.post(apiURL, this.patient).then((res) => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                });
                window.location.reload();
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>