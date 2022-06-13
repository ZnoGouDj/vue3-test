<template>
  <form @submit.prevent>
    <h4>Post creation</h4>
    // two-way binding -- two types below: v-model || v-bind + @input
    <input v-model="post.title" class="input" type="text" placeholder="Name" />
    <input
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
      class="input"
      type="text"
      placeholder="Description"
    />
    <my-button style="align-self: flex-end; margin-top: 15px" @click="createPost">Create</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
}
</style>
