<script>

  import CharacterList from './components/CharacterList.vue';
  import Filter from './components/Filter.vue';
  import { store , fetchCharacter } from './store';

export default{
  components: { Filter, CharacterList },
  data() {
    return {
      store,
    }
  },
  methods:{
 
    onSearch(filters){
      this.store.activeFilters = {};
      this.store.activeFilters = filters;
      fetchCharacter();
      console.log(filters);
    }
  }
  }


</script>

<template>
  <div class="container">

    <h1 class="py-5 text-center">Ricky e Morty</h1>
    <Filter class="mx-3" @search="onSearch"></Filter>

    <CharacterList></CharacterList>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>