<script>
import SingleCharacter from './SingleCharacter.vue';
import {store, fetchCharacter} from '../store';
import Pagination from './Pagination.vue';

export default{

    name: "characterList",
    components: { SingleCharacter, Pagination },
    data() {
        return {
            store,
        }
    },
    created(){
       fetchCharacter();
       console.log(store.charactersList)
    },
    methods:{
        OnPageChange(newPage){
            console.log("catturato $emit dal componente pagination", newPage)
            this.store.currentPage = newPage;
            fetchCharacter();
        },
        OnCardClicked(clickedCharacter){
            // vedi screen
            console.log(clickedCharacter)
            alert("name: " + clickedCharacter.name + "   species: " + clickedCharacter.species + "   type: "+  clickedCharacter.type)
        }
    }
}
</script>

<template>
    <Pagination class="mt-4"
    :currentPage="store.currentPage"
    @pageChange="OnPageChange"></Pagination>

    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="(singlecharacter , i) in store.charactersList" :key="(i)">
                <SingleCharacter :character="singlecharacter"
                @cardClicked="OnCardClicked"></SingleCharacter>
            
            </div>
        </div>
    </div>

    <Pagination class="mt-4"></Pagination>
</template>