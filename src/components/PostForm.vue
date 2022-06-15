<template>
  <form @submit.prevent>
    <h4>Post creation</h4>
    <!-- two-way binding -- two types below: v-model || v-bind + @input -->
    <my-input v-focus v-model="post.title" type="text" placeholder="Name" />
    <my-input
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
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
  watch: {
    post: {
      handler(newVal) {
        console.log(newVal);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
