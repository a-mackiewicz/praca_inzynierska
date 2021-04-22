<template>
<div class="row">
<div class="col-sm border-right" style="margin-right: 15px;background-color: #f3f3f3;">
</div>
<div class="col-auto">
    <div class="row">
        <div class="col-12 px-1 pt-1 pb-1">
            <div class="card text-dark mt-3" style="width: 800px;margin-bottom:calc(100vh - 265.2px)">
                <div class="card-header bg-warning py-1" ><b>Wylogowywanie</b></div>
                <div class="row no-gutters">
                    <div class="card-body bg-white p-2" style="height:160px;overflow: auto;">
                        <div class="row justify-content-center" style="width:800px">
                            <div class="col-md-12">
                                Proszę czekać
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
            }
        },
        create(){
        },
        mounted(){
            let apiURL = 'http://localhost:4000/api/logout';
            axios.get(apiURL, {withCredentials: true}).then(() => {
            }).catch(error => {
                console.log(error)
            });
                this.$cookies.remove('user');
                this.$parent.state = 0;
                this.$parent.changeNav();
                this.$router.push('/login_patient')
        },
        methods: {
        }
    }
</script>
