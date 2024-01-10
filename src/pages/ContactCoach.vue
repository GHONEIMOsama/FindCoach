<template>
  <h1>Contact Coach</h1>
</template>

<script>
import { useToast } from "vue-toastification";
import { mapActions } from "vuex";
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      coach: null,
    };
  },
  created() {
    this.getCoachData();
  },
  props: ["coachId"],
  methods: {
    ...mapActions("coaches", ["getCoachWithId"]),
    getCoachData() {
      this.getCoachWithId("r2o5CkknD1gYK0qGNdx3uUmCEKf2")
        .then((docSnap) => {
          if (docSnap.exists()) {
            this.coach = docSnap.data();
          } else {
            this.toast.warning("Bad coach Id");
          }
        })
        .catch((error) => {
          console.error(error);
          this.toast.error(
            "Failed Fetching coach data for reason : ",
            error.code
          );
        });
    },
  },
};
</script>