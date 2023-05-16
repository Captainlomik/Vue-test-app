<template >
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery"
      placeholder="Поиск...."/>
    <div class="app__btns">
      <my-button class="dialog-btn" @click="showDialog">Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
      <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost"></post-form>
      </my-dialog>
    </div>

    <post-list 
    v-if="!isPostLoading" 
    :posts="searchPosts" 
    @remove="removePost"></post-list>
    <div v-else>
      <p>Идет загрузка</p>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from '@/components/PostList.vue'
import axios from 'axios'

export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery:'',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'description', name: 'По описанию' },
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
      }
      catch (e) {
        console.error('Error!')
      }
      finally {
        this.isPostLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    searchPosts(){
      return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 20px 100px
}


.app__btns {
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
}
</style>
