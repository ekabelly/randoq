<template>
  <div class="lang-select">
    <select :value="i18n.locale" @change="changeLocale($event.target.value)">
      <option v-for="lang in ['en', 'he-il']" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "lang-select",
  computed: {
    i18n() {
      return this.$store.getters.i18n;
    }
  },
  methods: {
    changeLocale(locale) {
      this.$store.commit("appLang", locale);
    }
  }
};
</script>

<style lang="scss" scoped></style>
