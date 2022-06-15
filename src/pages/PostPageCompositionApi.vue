<template>
  <div>
    <h1>{{ likes }}</h1>
    <button @click="addLike">add like</button>
    <!-- <h1>Post page</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Search..." />
    <div class="app__btns">
      <my-button @click="showDialog">Create post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div> -->
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import { ref } from 'vue';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'By name' },
        { value: 'body', name: 'By description' },
      ],
    };
  },
  setup(props) {
    const likes = ref(0);

    const addLike = () => {
      likes.value++;
    };

    return {
      likes,
      addLike,
    };
  },
};
</script>

// "scoped" -- local styles👇
<style scoped>
.app > h1 {
  margin-bottom: 15px;
}
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}
.current-page {
  color: white;
  background-color: teal;
}
.observer {
  height: 30px;
  background: green;
}
</style>

// Single file component
