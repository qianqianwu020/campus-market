<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="logo">🌿 CampusMarket</div>
      <div class="nav-links">
        <router-link to="/">首页</router-link>
        <router-link to="/publish" class="publish-btn">➕ 发布闲置</router-link>
      </div>
    </nav>

    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f4f7f6; color: #333; }

.navbar {
  position: sticky; top: 0; z-index: 100;
  display: flex; justify-content: space-between; align-items: center;
  padding: 15px 40px; background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.logo { font-size: 20px; font-weight: 800; color: #00b4d8; letter-spacing: 1px; }
.nav-links { display: flex; gap: 20px; align-items: center; }
.nav-links a { text-decoration: none; color: #555; font-weight: 600; font-size: 15px; transition: color 0.2s; }
.nav-links a:hover { color: #00b4d8; }
.publish-btn { background-color: #00b4d8; color: white !important; padding: 8px 16px; border-radius: 20px; transition: all 0.2s; }
.publish-btn:hover { background-color: #0096c7; transform: scale(1.05); }

.main-content { max-width: 1000px; margin: 0 auto; padding: 30px 20px; }
</style>