<template>
  <div class="d-flex flex-row justify-content-center">
    <h1 class="m-2">Coaches List</h1>
  </div>
  <div class="d-flex flex-row">
    <div v-for="coach in coaches" :key="coach.id" class="m-2">
      <base-card>
        <h5 class="card-title">
          {{ coach.data.name + " " + coach.data.lastName }}
          <router-link :to="'/contact/' + coach.id">
            <fa-icon icon="fa-solid fa-paper-plane" title="Send Message" />
          </router-link>
        </h5>
        <p class="card-text">
          <span
            v-for="keyWord in coach.data.keyWords"
            class="badge"
            :key="keyWord"
            >{{ keyWord }}</span
          >
        </p>
      </base-card>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard.vue";
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
  components: { BaseCard },
  methods: {
    ...mapActions("coaches", ["getAllCoaches"]),
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

<style scoped>
.badge {
  color: white;
  background-color: blue;
  border-radius: 5px;
  margin: 5px;
}
</style>