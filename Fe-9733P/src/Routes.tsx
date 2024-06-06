import { createBrowserRouter } from 'react-router-dom';
import { Homepage, RootLayout, UsersPage, UsersPageDetails } from './pages';
import { usersLoader } from './pages/UsersPage';
import { userLoader } from './pages/UsersPageDetails';
import { UserAlbums, UserPosts, UserTodos } from './pages/userinfo';
import { userPostsLoader } from './pages/userinfo/UserPosts';
import { usersAlbumsLoader } from './pages/userinfo/UserAlbums';
import { userTodosLoader } from './pages/userinfo/UserTodos';




const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'users',
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path:"users/:userId",
        loader: userLoader,
        children: [
          {
            index:true,
            element:<UsersPageDetails/>,
            loader: userLoader,
          },
          {
            path:"posts",
            element:<UserPosts/>,
            loader:userPostsLoader,
          },
          {
            path:"albums",
            element:<UserAlbums/>,
            loader:usersAlbumsLoader,
          },
          {
            path:"todos",
            element:<UserTodos/>,
            loader:userTodosLoader,

          },  
        ]
      }
      
    ],
  },
];


const router = createBrowserRouter(routes);

export default router;
