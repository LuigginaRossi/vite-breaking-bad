<script>
import {store, fetchCharacter} from '../store';
export default {
    data() {
        return {
            store,
            filter:{
                name:"",
                status:"",
                type:"",
                gender:"",
            }

        }
    },
    emits:[
        "search"
    ],
    methods:{
        onSearchClick(){
            this.$emit("search", {...this.filter})
        }
    },
    computed:{
        speciesList(){
            const toReturn =[];
            this.store.charactersList.forEach((character)=>{
                if(!toReturn.includes(character.species)){
                    toReturn.push(character.species)
                }
            });
            return toReturn;
        },
        statusList(){
            const toReturn =[];
            this.store.charactersList.forEach((character)=>{
                if(!toReturn.includes(character.status)){
                    toReturn.push(character.status)
                }
            });
            return toReturn;
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="alert alert-info">
            Sono stati trovati  {{store.paginationInfo.count}} elementi.
            Stai visualizzando la pagina {{store.currentPage}} di {{store.paginationInfo.pages}}
        </div>

        <div class="alert alert-warning">
            <h3>Statistica specie: {{speciesList.length}}</h3>

            <ul>
                <li v-for=" specie in speciesList">
                    {{specie}}
                </li>
            </ul>

            <h3>Statistica status: {{statusList.length}}</h3>
            <ul>
                <li v-for=" status in statusList">
                    {{status}}
                </li>
            </ul>
        </div>

        <form class="mb-4" @submit.prevent="onSearchClick">
            <div class="col-sm-6">
                <div class="mb-3">
                    <label for="">Nome</label>
                    <input class="form-control" name="name" type="text" v-model="filter.name">
                </div>
            </div>

            <div class="col-sm-6">
                <div class="mb-3">
                    <label for="">Status</label>
                    <input class="form-control" name="status" type="text" v-model="filter.status">
                </div>
            </div>

            <div class="col-sm-6">
                <div class="mb-3">
                    <label for="">Type</label>
                    <input class="form-control" name="type" type="text" v-model="filter.type">
                </div>
            </div>

            <div class="col-sm-6">
                <div class="mb-3">
                    <label for="">Gender</label>
                    <input class="form-control" name="gender" type="text" v-model="filter.gender">
                </div>
            </div>

            <div class="d-flex gap-3 justify-content-center">
                <button class="btn btn-secondary" type="reset">Reset</button>
                <button class="btn btn-info">Cerca</button>
            </div>

        </form>        
    </div>

</template>

<style scoped>
    .btn-info {
 
    --bs-btn-bg: #fff3cd;
    --bs-btn-border-color: #fff3cd;

    --bs-btn-hover-bg: #31d2f2;
    --bs-btn-hover-border-color: #25cff2;
    --bs-btn-focus-shadow-rgb: 11,172,204;

    --bs-btn-active-bg: #e8cf7e;
    --bs-btn-active-border-color: #e8cf7e;


    --bs-btn-disabled-bg: #fff3cd;
    --bs-btn-disabled-border-color: #fff3cd;
    }
</style>