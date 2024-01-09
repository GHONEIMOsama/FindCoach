<template>
  <h1>Coaches List</h1>
  <base-card v-for="coach in coaches" :key="coach.id">
    <h5 class="card-title">
      {{ coach.data.name + " " + coach.data.lastName }}
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
import { mapActions } from "vuex";

export default {
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
      this.getAllCoaches().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.coaches.push({ id: doc.id, data: doc.data() });
        });
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