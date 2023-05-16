<template >
  <div class="app">
    <h1>Страница с постами</h1>
    <div  class="app__btns"> <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost"></post-form>
      </my-dialog>
      <my-select v-model="selectedSort" :options="sortedOptions"></my-select>
    </div>

    <my-button class="dialog-btn" @click="showDialog">Создать пост</my-button>


    <post-list v-if="!isPostLoading" :posts="posts" @remove="removePost"></post-list>
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
      selectedSort:'',
      sortedOptions:[
        {value:'title', name:'По названию'},
        {value:'description', name:'По описанию'},
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

.dialog-btn {
  margin: 20px 0px;
}
.app__btns{
  display: flex;
  justify-content: space-between;
}
</style>
