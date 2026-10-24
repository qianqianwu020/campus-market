<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <nav class="navbar">
      <router-link to="/">🏠 首页</router-link>
      <router-link to="/publish">➕ 发布商品</router-link>
    </nav>

    <!-- 这里的 router-view 是页面切换时真实渲染的地方 -->
    <router-view></router-view>
  </div>
</template>

<style>
body { margin: 0; font-family: 'Arial', sans-serif; background-color: #f5f7fa; }
.navbar { display: flex; gap: 20px; padding: 15px 30px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
.navbar a { text-decoration: none; color: #333; font-weight: bold; }
.navbar a:hover { color: #4a90e2; }
.app-container { max-width: 800px; margin: 0 auto; }
</style>