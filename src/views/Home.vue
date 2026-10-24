<script setup>
import { ref } from 'vue'

// 模拟的商品数据（后续等后端接口写好后，通过 axios 获取）
const products = ref([
  { id: 1, title: 'iPad Air 5 (95新)', price: '38万', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80', seller: '金同学' },
  { id: 2, title: '大学物理教材 (无笔记)', price: '1.5万', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80', seller: '李同学' },
  { id: 3, title: '九成新 山地自行车', price: '12万', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80', seller: '朴同学' },
  { id: 4, title: '罗技无线鼠标 MX Master 3', price: '6万', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80', seller: '崔同学' }
])
</script>

<template>
  <div class="home-container">
    <div class="header-area">
      <h2>校园二手市场</h2>
      <p>发现身边的闲置好物</p>
    </div>

    <!-- 商品网格布局 -->
    <div class="product-grid">
      <div class="product-card" v-for="item in products" :key="item.id">
        <div class="image-wrapper">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div class="card-info">
          <h3 class="title">{{ item.title }}</h3>
          <p class="price">{{ item.price }}韩元</p>
          <div class="seller-info">
            <span class="seller">{{ item.seller }}</span>
            <button class="buy-btn">查看详情</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  padding: 20px;
}

.header-area {
  text-align: center;
  margin-bottom: 30px;
}

.header-area h2 {
  color: #2c3e50;
  margin-bottom: 5px;
}

.header-area p {
  color: #7f8c8d;
  font-size: 14px;
}

/* 响应式网格：手机一行1个，电脑一行2-3个 */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #f0f0f0;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.image-wrapper {
  height: 180px;
  overflow: hidden;
  background: #f9f9f9;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-info {
  padding: 15px;
}

.title {
  font-size: 16px;
  margin: 0 0 10px 0;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #e74c3c;
  margin: 0 0 15px 0;
}

.seller-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 10px;
}

.seller {
  font-size: 13px;
  color: #888;
}

.buy-btn {
  background: #e3f2fd;
  color: #1976d2;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
}

.buy-btn:hover {
  background: #bbdefb;
}
</style>