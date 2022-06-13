<template>
  <div class="app">
    <post-form />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostForm from './components/PostForm';
import PostList from '@/components/PostList';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'An article description' },
        { id: 2, title: 'JavaScript 2', body: 'An article description 2' },
        { id: 3, title: 'JavaScript 3', body: 'An article description 3' },
        { id: 3, title: 'JavaScript 4', body: 'An article description 4' },
      ],
    };
  },
  methods: {
    createPost() {},
  },
};
</script>

"scoped" -- local styles👇
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>

// Single file component | |
