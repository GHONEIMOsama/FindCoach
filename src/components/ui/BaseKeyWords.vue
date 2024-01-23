<template>
  <span v-for="(keyWord, index) in keyWords" class="badge" :key="keyWord"
    >{{ keyWord }}
    <span v-if="!isReadOnlyMode" @click="removeKeyWord(index)" class="pointer"
      >x</span
    ></span
  >
</template>

<script>
export default {
  props: {
    keyWords: {
      type: Array,
      required: true,
    },
    isReadOnlyMode: {
      type: Boolean,
    },
  },
  methods: {
    /**
     * Send event 'remove-index' to remove keyWord with index index.
     * @param {*} index the index of the keyWord to remove.
     */
    removeKeyWord(index) {
      this.$emit("remove-index", index);
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