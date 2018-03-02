<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Hero title
        </h1>
        <h2 class="subtitle">
          Hero subtitle
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, ligula venenatis ultricies ornare, ligula ipsum condimentum felis, ut ullamcorper ipsum nisi in est. Integer in ipsum dui. Donec ac sagittis arcu, ut lobortis mi. Phasellus sit amet tincidunt tortor, ut dapibus est. Curabitur sed est ipsum. Duis et sapien at dui maximus fermentum.
        </p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third" v-for="(topic) in topics" v-bind:key="topic.id">
        <app-topic-card :link="topic.link">
          <h3 slot="title">{{ topic.title }}</h3>
          <span slot="content">{{ topic.content }}</span>
        </app-topic-card>
      </div>
    </div>
  </section>
</template>

<script>
import TopicCard from './shared/TopicCard.vue'

export default {
  name: 'Home',
  components: {
    'app-topic-card': TopicCard
  },
  data () {
    return {
      topics: [
        { id: 1, title: 'Lorem ipsum', content: 'Nulla leo metus, dapibus non convallis maximus, pulvinar quis quam', link: 'category/chemistry' },
        { id: 2, title: 'Lorem ipsum dolor sit amet', content: 'Vestibulum ex urna, iaculis eu ipsum in, dapibus mattis magna.', link: 'category/chemistry' },
        { id: 3, title: 'Sed tristique ac justo ut ornare?', content: 'Donec eget est faucibus ante ullamcorper pellentesque. Morbi sapien odio, scelerisque ut pretium vitae, scelerisque non velit.', link: 'category/physics' },
        { id: 4, title: 'Ut auctor sed arcu interdum sagittis', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor sed arcu interdum sagittis. Sed tristique ac justo ut ornare?', link: 'category/physics' },
        { id: 5, title: 'Nulla lobortis tortor dolor', content: 'Phasellus et imperdiet est, id semper quam. Morbi ullamcorper nibh eu tortor accumsan hendrerit.', link: 'category/physics' },
        { id: 6, title: 'Pellentesque iaculis odio a felis porta imperdiet', content: 'Nulla lobortis tortor dolor, eu porta velit semper ut. Etiam ac lectus sapien.', link: 'category/physics' }
      ]
    }
  }
}
</script>
