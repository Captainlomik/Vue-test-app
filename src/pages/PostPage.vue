<template >
    <div>
      <h1>Страница с постами</h1>
      <my-input v-model="searchQuery" placeholder="Поиск...." />
      <div class="app__btns">
        <my-button class="dialog-btn" @click="showDialog">Создать пост</my-button>
        <my-select v-model="selectedSort" :options="sortOptions"></my-select>
        <my-dialog v-model:show="dialogVisible">
          <post-form @create="createPost"></post-form>
        </my-dialog>
      </div>
  
      <post-list v-if="!isPostLoading" :posts="searchPosts" @remove="removePost"></post-list>
      <div v-else>
        <p>Идет загрузка</p>
      </div>
      <div v-intersection="loadMorePost" class="observer"></div>
      <!-- <my-pagination @my-event="page" :pages="totalPages" :pageNumber="page"></my-pagination> -->
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
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
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
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = response.data
        }
        catch (e) {
          console.error('Error!')
        }
        finally {
          this.isPostLoading = false
        }
      },
      async loadMorePost() {
        try {
          this.page += 1
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = [...this.posts, ...response.data]
        }
        catch (e) {
          console.error('Error!')
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
      searchPosts() {
        return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    watch: {
    }
  }
  </script>
  
  <style>
 
  .app__btns {
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
  }
  
  .observer {
    height: 30px;
  }
  </style>
  