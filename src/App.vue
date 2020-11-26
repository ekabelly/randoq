<template>
  <div id="app">
    <lang-select></lang-select>
    <div
      class="questions"
      v-if="!end && selectedQ"
      :class="{ rtl: appLang === 'he-il' }"
    >
      <div class="topic">{{ $t("topic") }}: {{ selectedQ.topic[appLang] }}</div>
      <div class="question">
        {{ selectedQ.text[appLang] }}
      </div>
      <div class="reroll-container">
        <button class="reroll" @click="assignRandomQ">
          {{ $t("reroll") }}
        </button>
      </div>
    </div>
    <div class="end" :class="{ rtl: appLang === 'he-il' }" v-if="end">
      {{ $t("outOfQ") }}!
    </div>
  </div>
</template>

<script>
import langSelect from "./components/lang-select.vue";
export default {
  components: { langSelect },
  name: "app",
  data() {
    return {
      end: false,
      selectedQ: null,
      questions: null
    };
  },
  computed: {
    appLang() {
      return this.$store.getters.i18n.locale;
    }
  },
  async mounted() {
    this.questions = await this.$store.dispatch("questions");
    this.assignRandomQ();
  },
  methods: {
    assignRandomQ() {
      if (this.questions.length > 0) {
        const randomQIndex = Math.floor(Math.random() * this.questions.length);
        this.selectedQ = this.questions.splice(randomQIndex, 1)[0];
      } else {
        this.end = true;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./assets/style/main.scss";

body {
  margin: 0;
  padding: 0;
}

.rtl {
  direction: rtl;
}

.questions,
.end {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100vh;
}

.questions {
  padding: 0 5px;
}

.topic,
.question,
.end {
  text-align: center;
}

.topic {
  font-size: 20px;
  margin-bottom: 20px;
}
.question,
.end {
  font-size: 30px;
}

.reroll-container {
  margin-top: 20vh;
  display: flex;
  justify-content: center;
}

.reroll {
  font-size: 30px;
  padding: 5px 20px;
}
</style>
