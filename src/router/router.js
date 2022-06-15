import Main from '@/pages/Main';
import PostsPage from '@/pages/PostsPage';
import About from '@/pages/About';
import CurrentPost from '@/pages/CurrentPost';
import PostsPageWithStore from '@/pages/PostsPageWithStore';
import PostPageCompositionApi from '@/pages/PostPageCompositionApi';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: CurrentPost,
  },
  {
    path: '/store',
    component: PostsPageWithStore,
  },
  {
    path: '/composition',
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
