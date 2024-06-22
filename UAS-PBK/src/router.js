import { createRouter, createWebHistory } from 'vue-router';
import TodosView from './views/TodosView.vue';
import PostsView from './views/PostsView.vue';
import AlbumsView from './views/AlbumsView.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import FullPhoto from './components/FullPhoto.vue';

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/todos', component: TodosView },
  { path: '/posts', component: PostsView },
  { path: '/albums', component: AlbumsView },
  { path: '/albums/:id', component: AlbumDetail, props: true },
  { path: '/photos/:id', component: FullPhoto, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
