<template>
  <div class="app">
    <h1>Post page</h1>
    <input type="text" v-model.trim="modificatorValue" />
    <my-button @click="showDialog">Create post</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="posts" @remove="removePost" />
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
        { id: 4, title: 'JavaScript 4', body: 'An article description 4' },
      ],
      dialogVisible: false,
      modificatorValue: '',
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

// "scoped" -- local styles👇
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app > h1 {
  margin-bottom: 15px;
}
</style>

// Single file component
