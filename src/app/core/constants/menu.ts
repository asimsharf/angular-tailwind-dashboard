import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'DISPLAY_NAME',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/home.svg',
          label: 'MENU.USERS',
          route: '/home',
          children: [
            { label: 'MENU.SUPER_ADMINS', route: '/home/home-1' },
            { label: 'MENU.SERVICE_ADMINS', route: '/home/home-2' },
            { label: 'MENU.CLIENTS_ADMINS', route: '/home/home-3' },
            { label: 'MENU.CLERKS', route: '/home/home-4' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/heart.svg',
          label: 'MENU.CLIENTS',
          route: '/favorites',
          children: [
            { label: 'MENU.CLIENT1', route: '/favorites/favorites-1' },
            { label: 'MENU.CLIENT2', route: '/favorites/favorites-2' },
            { label: 'MENU.CLIENT3', route: '/favorites/favorites-3' },
            { label: 'MENU.CLIENT4', route: '/favorites/favorites-4' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/chat-alt.svg',
          label: 'MENU.CHAT',
          route: '/chat',
        },
      ],
    },
    {
      group: 'MAIN',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/exclamation-triangle.svg',
          label: 'Errors',
          route: '/errors',
          children: [
            { label: '404', route: '/errors/404' },
            { label: '500', route: '/errors/500' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Components',
          route: '/components',
          children: [{ label: 'Table', route: '/components/table' }],
        },
      ],
    },
    {
      group: 'Collaboration',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'Download',
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Gift Card',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Users',
          route: '/users',
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
