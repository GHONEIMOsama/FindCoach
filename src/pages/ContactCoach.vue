<template>
  <h1>Contact Coach : {{ coach?.name + " " + coach?.lastName }}</h1>
  <form @submit.prevent="sendMessageC">
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
    <div class="form-group mb-2">
      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="10"
        v-model="form.message.value"
        @blur="form.message.isBlured = true"
        :class="{
          'form-control': true,
          'is-invalid':
            this.form.message.isBlured &&
            (isMessageEmpty || isMessageReachedMaximumLength),
        }"
      ></textarea>
      <small>{{ form.message.value.length }} / 1000</small>
      <small v-if="isMessageEmpty" class="invalid-feedback"
        >*Message can't be empty</small
      >
      <small v-if="isMessageReachedMaximumLength" class="invalid-feedback"
        >*Message maximum length is 1000 caracters</small
      >
    </div>
    <div class="d-flex flex-row-reverse">
      <button type="submit" class="btn btn-primary" :disabled="isFormNotValid">
        Send
      </button>
    </div>
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
    isMessageEmpty() {
      return this.form.message.isBlured && this.form.message.value.length === 0;
    },
    isMessageReachedMaximumLength() {
      return this.form.message.value.length > 1000;
    },
    isFormNotValid() {
      return (
        this.form.message.value.length === 0 ||
        this.form.message.value.length > 1000
      );
    },
  },
  methods: {
    ...mapActions("auth", ["getUserById"]),
    ...mapActions("msg", ["sendMessage"]),
    /**
     * Get the informations of the coach with the given coachId passed in the url.
     */
    getCoachData() {
      this.getUserById({ id: this.coachId })
        .then((docSnap) => {
          if (docSnap.exists()) {
            this.coach = docSnap.data();
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
    /**
     * Send a message to the coach with id coachId.
     */
    sendMessageC() {
      this.sendMessage({
        from: this.form.from.value,
        to: this.form.to.value,
        message: this.form.message.value,
        date: new Date(),
      });
    },
  },
};
</script>