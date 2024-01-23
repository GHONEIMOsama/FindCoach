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