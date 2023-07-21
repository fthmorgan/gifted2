<template>
  <div class="container-fluid">

<div class="row">
  <div class="col-12" p-4>
    <h1>Gifts</h1>
  </div>
</div>

<div  v-for="gift in gifts" :key="gift.id" class="row">
  <div class="col-md-3 p-4">
    <!-- <h2 >{{ gift.tag }}</h2>
    <img :src="gift.url" :alt="gift.tag">
  </div> -->
    </div>

  </div>

</template>


<script>
import Pop from "../utils/Pop.js";
import { giftsService } from "../services/GiftsService.js";
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";

export default {
  setup(){
async function getGifts() {
  try {
    await giftsService.getGifts();
  } catch (error) {
    Pop.error(error, "[GETTING GIFTS]");
  }
}

onMounted(() => {
  logger.log("Home Page mounted");
  getGifts();
})
    return {
      gifts: computed(() => AppState.gifts),
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
