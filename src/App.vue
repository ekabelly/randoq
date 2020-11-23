<template>
  <div id="app" dir="rtl">
    <div class="questions" v-if="!end">
      <div class="topic">topic: {{ selectedQ.topic }}</div>
      <div class="question">
        {{ selectedQ.he }}
      </div>
      <div class="reroll-container">
        <button class="reroll" @click="assignRandomQ">
          reroll
        </button>
      </div>
    </div>
    <div class="end" v-if="end">
      נגמרו השאלות!
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      end: false,
      selectedQ: {},
      questions: null
    };
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
body {
  margin: 0;
  padding: 0;
}

.questions,
.end {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100vh;
}

.topic,
.question,
.end {
  text-align: center;
}

.topic {
  font-size: 20px;
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
  width: 60vw;
}
</style>
