<template>
  <div class="app">
    <div>
      <form @submit.prevent>
        <h4>Post creation</h4>
        <input
          v-bind:value="title"
          @input="title = $event.target.value"
          class="input"
          type="text"
          placeholder="Name"
        />
        <input
          v-bind:value="body"
          @input="body = $event.target.value"
          class="input"
          type="text"
          placeholder="Description"
        />
        <button class="btn" @click="createPost">Create</button>
      </form>
    </div>
    <div class="post" v-for="post in posts" :key="post.title">
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Name:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'An article description' },
        { id: 2, title: 'JavaScript 2', body: 'An article description 2' },
        { id: 3, title: 'JavaScript 3', body: 'An article description 3' },
        { id: 3, title: 'JavaScript 4', body: 'An article description 4' },
      ],
      title: '',
      body: '',
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
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

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.app {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>

// Single file component | |
