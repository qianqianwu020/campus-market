<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const products = ref([
  { id: 1, title: 'iPad Air 5 (95新)', price: '38万', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80', seller: '金同学' },
  { id: 2, title: '大学物理教材 (无笔记)', price: '1.5万', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80', seller: '李同学' },
  { id: 3, title: '九成新 山地自行车', price: '12万', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80', seller: '朴同学' },
  { id: 4, title: '罗技无线鼠标 MX Master 3', price: '6万', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80', seller: '崔同学' }
])

// 点击卡片跳转到详情页
const goToDetail = (id) => {
  router.push(`/detail/${id}`)
}
</script>

<template>
  <div class="home-container">
    <div class="header-area">
      <h1>发现身边的闲置好物</h1>
      <p>CampusMarket 校园专属二手交易平台</p>
    </div>

    <div class="product-grid">
      <div class="product-card" v-for="item in products" :key="item.id" @click="goToDetail(item.id)">
        <div class="image-wrapper">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div class="card-info">
          <h3 class="title">{{ item.title }}</h3>
          <p class="price"><span>₩</span>{{ item.price }}</p>
          <div class="seller-info">
            <span class="seller">👤 {{ item.seller }}</span>
            <button class="buy-btn">查看详情</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-area { text-align: center; margin-bottom: 40px; margin-top: 10px; }
.header-area h1 { font-size: 28px; color: #2b2b2b; margin-bottom: 8px; }
.header-area p { color: #888; font-size: 15px; }

.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 25px; }
.product-card {
  background: white; border-radius: 16px; overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03); border: 1px solid #f0f0f0;
  transition: all 0.3s ease; cursor: pointer; display: flex; flex-direction: column;
}
.product-card:hover { transform: translateY(-5px); box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08); }
.image-wrapper { height: 180px; overflow: hidden; }
.image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.product-card:hover .image-wrapper img { transform: scale(1.05); }
.card-info { padding: 16px; display: flex; flex-direction: column; flex-grow: 1; }
.title { font-size: 15px; margin: 0 0 10px 0; color: #333; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.price { font-size: 20px; font-weight: 800; color: #e63946; margin: 0 0 15px 0; }
.price span { font-size: 14px; margin-right: 2px; }
.seller-info { display: flex; justify-content: space-between; align-items: center; margin-top: auto; border-top: 1px solid #f5f5f5; padding-top: 12px; }
.seller { font-size: 13px; color: #777; }
.buy-btn { background: #e0f7fa; color: #00b4d8; border: none; padding: 6px 14px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: bold; }
</style>