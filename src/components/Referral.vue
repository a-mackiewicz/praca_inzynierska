<template>
<div class="row">
<div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto">
    <div class="row">
        <div class="col-auto px-1 pt-1 pb-1">
            <div class="card text-dark" style="width: 200px;">
                <div class="card-header bg-warning py-1" ><b>Wystawione</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2" style="height:315px;overflow: auto;">
<div class="card mb-1" v-for="tempReferral in activePatients" :key="tempReferral._id" >
  <div class="card-header p-0 ">
    <b class="ml-1">Data wystawienia: {{ tempReferral.date }}</b>
  </div>
  <div class="card-body p-0 m-1">
      <p class="card-title m-1">Skierowanie {{ referralTypes[tempReferral.type].toLowerCase() }}</p>
      <!--<footer class="blockquote-footer p-0 m-1" style="font-size:13px">koszt wizyty <cite title="Source Title">{{ tempReferral.cost }}zł</cite></footer>-->
    <div role="group" aria-label="Basic example" class="btn-group d-inline float-left">
        <button class="btn btn-sm btn-secondary btn-block m-0 p-0 d-inline" v-on:click="editFunc(tempReferral._id)" style="width:70px;height:18px;font-size:11px">Edytuj</button>
        <button class="btn btn-sm btn-danger btn-blockm-0 m-0 p-0 d-inline" v-on:click="delFunc(tempReferral._id)" style="width:80px;height:18px;font-size:11px">Usuń</button>
    </div>
  </div>
</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col px-1 pt-1 pb-1">
            <form @submit.prevent="handleSubmitUpdateForm">
            <div class="card text-dark" style="width: 600px;height:300px;">
                <div class="card-header bg-warning py-1" ><b>Skierowanie</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2" style="width:100px;height:273px;overflow: auto;">
                        <div class="form-group row m-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"  style="height:25px;font-size:11px">SKIEROWANIE </div>
                                    </div>
                                <select class="form-control form-control-sm p-0" id="formTypeReferral" v-model="referral.type" @change="selectType($event)" style="height:25px;font-size:11px" required>
                                    <option hidden></option>
                                    <option value="0">DO LARYNGOLOGA</option>
                                    <option value="1">DO STOMATOLOGA</option>
                                    <option value="2">DO CHIRURGA STOMATOLOGICZNEGO</option>
                                    <option value="3">DO CHIRURGA SZCZĘKOWO-TWARZOWEGO</option>
                                    <option value="4">NA ZDJĘCIE</option>
                                    <option value="5">INNE</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row m-0">
                            <div class="col-sm-12">
                                <div class="input-group mb-0">
                                <textarea id="ContentRef" v-model="referral.text" class="form-control form-control-sm" style="font-size:11px;resize: none;" rows="11"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mx-0 mb-0 mt-2">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Zdjęcia:</label>
                            <div class="col-sm-10 pt-1">
                                <div class="form-check form-check-inline mr-5">
                                    <input class="custom-control-input" @click="imageFunc($event)" type="checkbox" id="imgReferral1" value="Pantomograficznego">
                                    <label class="custom-control-label pt-1" for="imgReferral1">Pantomograficznego</label>
                                </div>
                                <div class="form-check form-check-inline mr-5">
                                    <input class="custom-control-input" @click="imageFunc($event)" type="checkbox" id="imgReferral2" value="Stawów Skroniowo-żuchwowych">
                                    <label class="custom-control-label pt-1" for="imgReferral2">Stawów Skroniowo-żuchwowych</label>
                                </div>
                                <div class="form-check form-check-inline mr-0">
                                    <input class="custom-control-input" @click="imageFunc($event)" type="checkbox" id="imgReferral3" value="Cefalometrycznego">
                                    <label class="custom-control-label pt-1" for="imgReferral3">Cefalometrycznego</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div role="group" aria-label="Basic example" class="btn-group d-inline float-right">
                <button class="btn btn-dark btn-block mt-1 d-inline" id="btnSubmitUpdate" style="width:400px">Wystaw skierowanie</button>
                <button type="button" class="btn btn-warning btn-block mt-1 d-inline" @click="printFunc()" style="width:200px">Drukuj</button>
            </div>
            </form>
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
            referralTypes: ["DO LARYNGOLOGA", "DO STOMATOLOGA", "DO CHIRURGA STOMATOLOGICZNEGO", "DO CHIRURGA SZCZĘKOWO-TWARZOWEGO", "NA ZDJĘCIE", ""],
            patient: [],
            referrals: [],
            referral:{
                patientId: this.$route.params.id,
                text: '',
                date: '',
                type: '',
                image: [false, false, false],
            },
            typeRef: [
                "\tProszę o kontrolę laryngologiczną drożności nosa, ocenę wielkości migdałków podniebiennych i migdałka gardłowego pacjenta/pacjentki: \n\n{DANE_PACJENTA}\n\nPacjent/pacjentka przygotowywany jest do leczenia ortodontycznego, a istniejąca wada zgryzu ma związek z nieprawidłowym oddychaniem.",
                "\tProszę o wykonanie sanacji jamy ustnej u pacjenta/pacjentki: \n\n{DANE_PACJENTA}\n\nU pacjenta/pacjentki planowane jest leczenie ortodontyczne.",
                "\tProszę o ekstrakcję zęba/zębów _______ , u pacjenta/pacjentki: \n\n{DANE_PACJENTA}\n\nEkstrakcja ze wskazań ortodontycznych.",
                "\tProszę o konsultację pacjenta/pacjentki: \n\n{DANE_PACJENTA}\n\nPacjent/pacjentka przygotowywany/a ortodontycznie do zabiegu \nchirurgicznego _______________________ . \n\nProszę o wyrażenie opinii co do dalszego postępowania i wyznaczeniu terminu zabiegu.",
                "{DANE_PACJENTA}\n\nProszę o wykonanie zdjęcia:\n",
                "\n\n{DANE_PACJENTA}\n\n",
            ],
            change_bt: 0,

        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/referral/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.referrals = res.data;
            apiURL = `http://localhost:4000/api/patient/${this.$route.params.id}`;
            axios.get(apiURL).then((res) => {
                this.patient = res.data;
            })
        })
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        this.referral.date = yyyy + '.' + mm + '.' + dd;
    },
    computed: {
        activePatients: function() {
        return this.referrals.filter(i => i.state !== '')
        }
    },
    mounted(){
        this.$parent.setMessage(1)
    },
    methods: {
        selectType(tempId){
            this.referral.text = this.typeRef[tempId.target.value];
            console.log(this.referrals);
        },
        printFunc(){
            if(document.getElementById("formTypeReferral").value){
                var tempText1 = this.referral.text.split("{DANE_PACJENTA}");
                var tempText2 = tempText1[0] + '<b>IMIĘ I NAZWISKO:</b> ' + this.patient.name + ' ' + this.patient.surname + 
                '\n<b>PESEL:</b> ' + this.patient.pesel + 
                '\n<b>ADRES:</b> ' + this.patient.street + ' ' + this.patient.property + '/' + this.patient.premises + '\n' +
                '\t\t\t&nbsp;' + this.patient.city + ', ' + this.patient.zip_code +  tempText1[1];
                var childWindow = window.open('','childWindow','location=yes, menubar=yes, toolbar=yes');
                childWindow.document.open();
                childWindow.document.write('<html><head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.3.0/paper.css"><style>@page { size: A5.landscape };</style></head><body style="width:750px;height:500px"><section class="sheet padding-10mm" style="width:750px;height:500px"><article>');
                childWindow.document.write('<p style="text-align:center;"><b>SKIEROWANIE ' + this.referralTypes[this.referral.type] + '</b></p><br />');
                childWindow.document.write('<tag-name style="white-space:pre;"></tag-name>' + tempText2.replace(/\n/gi,'<br>').replace(/\t/gi, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'));
                childWindow.document.write('<br /><br /><p style="font-size:11px;margin:0px"><b>Data skierowania:<span style="float:right;">Podpis i pieczęć lekarza: </span></b><br />' + this.referral.date + '</p></article></section></body></html>');
                childWindow.print();
                childWindow.document.close();
            }
        },
        imageFunc(tempId){
            if(tempId.target.checked) {
                this.referral.text = this.referral.text + tempId.target.value + '\n';
                if(tempId.target.id == "imgReferral1") this.referral.image[0] = true;
                if(tempId.target.id == "imgReferral2") this.referral.image[1] = true;
                if(tempId.target.id == "imgReferral3") this.referral.image[2] = true;
            } else {
                var res = this.referral.text.split(tempId.target.value + '\n');
                if(res[1]) {
                    this.referral.text = res[0] + res[1];
                } else {
                    this.referral.text = res[0];
                }
                if(tempId.target.id == "imgReferral1") this.referral.image[0] = false;
                if(tempId.target.id == "imgReferral2") this.referral.image[1] = false;
                if(tempId.target.id == "imgReferral3") this.referral.image[2] = false;
            }

        },
        delFunc(tempId){
                let apiURL = `http://localhost:4000/api/delete-referral/${tempId}`;
                let indexOfArrayItem = this.referrals.findIndex(i => i._id === tempId);

                if (window.confirm("Chcesz usunąc wizytę?")) {
                    axios.delete(apiURL).then(() => {
                        this.referrals.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
        },
        editFunc(tempId){
            for(var i=0;i<this.referrals.length;i++){
                if(this.referrals[i]._id == tempId){
                    this.referral._id = tempId;
                    this.referral.type = this.referrals[i].type;
                    this.referral.text = this.referrals[i].text;
                    this.referral.date = this.referrals[i].date;
                    document.getElementById("btnSubmitUpdate").innerHTML = "Edytuj";
                    this.change_bt = 1;
                    if(this.referrals[i].image[0] == true) {
                        document.getElementById("imgReferral1").checked = true;
                    } else if(this.referrals[i].image[0] == false) {
                        document.getElementById("imgReferral1").checked = false;
                    }
                    if(this.referrals[i].image[1] == true ) {
                        document.getElementById("imgReferral2").checked = true;
                    } else if(this.referrals[i].image[1] == false) {
                        document.getElementById("imgReferral2").checked = false;
                    }
                    if(this.referrals[i].image[2] == true ) {
                        document.getElementById("imgReferral3").checked = true;
                    } else if(this.referrals[i].image[2] == false) {
                        document.getElementById("imgReferral3").checked = false;
                    }
                    this.referral.image[0] = this.referrals[i].image[0];
                    this.referral.image[1] = this.referrals[i].image[1];
                    this.referral.image[2] = this.referrals[i].image[2];
                }
            }
        },
        handleSubmitUpdateForm() {
            if(this.change_bt == 0){
                let apiURL = 'http://localhost:4000/api/create-referral';
                
                //var addvisit = [];
                console.log(this.referral);
                axios.post(apiURL, this.referral).then(() => {
                    apiURL = `http://localhost:4000/api/referral/${this.$route.params.id}`;
                    axios.get(apiURL).then((res) => {
                        this.referrals = res.data;
                        //console.log(this.visits);
                        
                    });
                }).catch(error => {
                    console.log(error)
                });
            } else {
                let apiURL = `http://localhost:4000/api/update-referral/${this.referral._id}`;

                axios.post(apiURL, this.referral).then((res) => {
                    console.log(res)
                    for(var i=0;i<this.referrals.length;i++){
                        if(this.referrals[i]._id == this.referral._id){
                            this.referrals[i].type = this.referral.type;
                            this.referrals[i].text = this.referral.text;
                            this.referrals[i].date = this.referral.date;
                            this.referrals[i].image = this.referral.image;
                        }
                    }
                    this.referral = { 
                        patientId: this.$route.params.id,
                        type: '',
                        text: '',
                        image: [],
                    };
                    document.getElementById("btnSubmitUpdate").innerHTML = "Dodaj";
                    this.change_bt = 0;
                }).catch(error => {
                    console.log(error)
                });
            }
        },
    }
}

</script>