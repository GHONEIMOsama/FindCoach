<template>
  <div class="d-flex flex-row justify-content-center">
    <h1 class="m-2">Coaches List</h1>
  </div>
  <div class="d-flex flex-row">
    <div v-for="coach in coaches" :key="coach.id" class="m-2">
      <base-card>
        <h5 class="card-title">
          {{ coach.data.name + " " + coach.data.lastName }}
          <router-link
            :to="'/contact/' + coach.id"
            v-if="$store.getters['auth/getIsLoggedIn']"
          >
            <fa-icon icon="fa-solid fa-paper-plane" title="Send Message" />
          </router-link>
        </h5>
        <p class="card-text">
          <base-key-words
            :keyWords="coach.data.keyWords"
            :isReadOnlyMode="true"
          ></base-key-words>
        </p>
      </base-card>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseKeyWords from "@/components/ui/BaseKeyWords.vue";
import { useToast } from "vue-toastification";
import { mapActions } from "vuex";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  created() {
    this.listAllCoaches();
  },
  data() {
    return {
      coaches: [],
    };
  },
  components: { BaseCard, BaseKeyWords },
  methods: {
    ...mapActions("coaches", ["getAllCoaches"]),
    /**
     * Get All coaches in the databse to be listed.
     */
    listAllCoaches() {
      this.getAllCoaches()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.coaches.push({ id: doc.id, data: doc.data() });
          });
        })
        .catch((error) => {
          console.error(error);
          this.toast.error("Couldn't fetch coaches for reason : ", error.code);
        });
    },
  },
};
</script>