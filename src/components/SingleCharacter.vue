<script>
export default {
    name:"SingleCharacter",
    props:{
        character:{
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            
        }
    },
    computed:{
        genderIcon(){
            let toReturn = {
                icon: "fa-genderless",
                color: "#87c21d",
            };

            if(this.character.gender === "Male"){
                toReturn.icon = "fa-mars";
                toReturn.color = "#1d82c2";
            }else if(this.character.gender === "Female"){
                toReturn.icon = "fa-venus";
                toReturn.color = "#bf2b71";
            }

            return toReturn;
        }
    }

}
</script>
<template>
    
    <div class="card">
        <img :src="character.image" class="card-img-top" :alt="character.name">
        <div class="card-body">
            <h5 class="card-title">{{character.name}}</h5>
            <a :href="character.url" class="btn btn-primary" target="_blank">General Info</a>
            <button class="btn btn-outline-dar"
            @click="$emit('cardClicked', character)">Name Specie Type</button>

            <i class="fa-solid" :class="genderIcon.icon" :style="('color:' + genderIcon.color)"></i>
        </div>
    </div>
   

</template>

<style lang="scss">
@use "../styles/general.scss" as *;

</style>