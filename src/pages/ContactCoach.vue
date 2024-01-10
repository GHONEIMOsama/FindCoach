<template>
  <h1>Contact Coach : {{ coach?.name + " " + coach?.lastName }}</h1>
  <form @submit.prevent="sendMessage">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="from">From</label>
          <input
            type="text"
            name="from"
            id="from"
            v-model="form.from.value"
            class="form-control"
            disabled
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="to">To</label>
          <input
            type="text"
            name="to"
            id="to"
            class="form-control"
            v-model="form.to.value"
            disabled
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Message</label>
      <textarea
        class="form-control"
        id="message"
        name="message"
        rows="10"
        v-model="form.message.value"
        @blur="form.message.isBlured = true"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Send</button>
  </form>
</template>

<script>
import { useToast } from "vue-toastification";
import { mapActions } from "vuex";
import { auth } from "@/firebase";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      coach: null,
      form: {
        from: {
          value: "",
        },
        to: {
          value: "",
        },
        message: {
          value: "",
          isBlured: false,
        },
      },
    };
  },
  created() {
    this.getCoachData();
    this.form.from.value = this.currentUser.email;
  },
  props: ["coachId"],
  computed: {
    currentUser() {
      return auth.currentUser;
    },
  },
  methods: {
    ...mapActions("coaches", ["getCoachWithId"]),
    getCoachData() {
      this.getCoachWithId({ id: this.coachId })
        .then((docSnap) => {
          if (docSnap.exists()) {
            this.coach = docSnap.data();
            console.log(this.coach);
            this.form.to.value = this.coach.email;
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
    sendMessage() {},
  },
};
</script>