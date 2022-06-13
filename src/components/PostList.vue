<template>
  <div v-show="posts.length > 0">
    <h3>Post list</h3>
    <post-item v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)" />
  </div>
  <h2 v-show="posts.length === 0" style="color: red">Post list is empty</h2>
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
