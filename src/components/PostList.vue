<template>
  <div>
    <h3>User list</h3>
    <post-item v-for="post in posts" :key="post.title" :post="post" />
  </div>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
