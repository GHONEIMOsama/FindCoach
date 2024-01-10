<template>
  <h1>Coaches List</h1>
  <base-card v-for="coach in coaches" :key="coach.id">
    <h5 class="card-title">
      {{ coach.data.name + " " + coach.data.lastName }}
      <router-link :to="'/contact/' + coach.id">
        <button type="button" class="btn btn-primary">Contact</button>
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