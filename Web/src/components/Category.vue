<template>
  <div class="columns">
    <div class="column is-one-third"
    v-for="(topic) in topics"
    v-bind:key="topic.id">
      <app-topic-card :link="topic.link">
        <h3 slot="title">{{ topic.title }}</h3>
        <span slot="content">{{ topic.description }}</span>
      </app-topic-card>
    </div>
  </div>
</template>
<script>
import TopicCard from './shared/TopicCard.vue'
import appService from '../app.service'

export default {
  components: {
    'app-topic-card': TopicCard
  },
  data () {
    return {
      id: this.$route.params.id,
      topics: []
    }
  },
  methods: {
    loadPosts () {
      let categoryId = 2
      if (this.id === 'physics') {
        categoryId = 1
      }

      appService.getTopics(categoryId).then(data => {
        this.topics = data
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.loadPosts()
    }
  },
  created () {
    this.loadPosts()
    console.log(this.$route.query.page)
  }
}
</script>
