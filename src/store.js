import axios from 'axios';
import{reactive} from 'vue';


export const store = reactive({

    charactersList:[],
    paginationInfo:{},
    currentPage: 1,
    activeFilters: null,

})

export function fetchCharacter (){
    axios.get("https://rickandmortyapi.com/api/character",{
        params:{
            page:store.currentPage,
             ...store.activeFilters,

        }
    })

    .then(resp=>{

        store.charactersList = resp.data.results;
        store.paginationInfo= resp.data.info;
        console.log(resp.data.result)
    })

    .catch((error)=>{
        console.log(error);
        console.log(error.response.status);
    
        // this.ajaxError= "A causa di un errore l'operazione non è andata a buon fine!!";
        
    });
}