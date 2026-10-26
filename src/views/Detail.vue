<script setup>
import { ref } from 'vue'

// 模拟的商品详情数据（后续从后端获取）
const product = ref({
  title: 'iPad Air 5 (95新)',
  price: '38万',
  desc: '自习室专用，无磕碰，电池健康度95%，附赠原装充电器。适合大学生日常学习使用。',
  image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
  seller: '金同学'
})

// AI 聊天相关
const chatInput = ref('')
const chatHistory = ref([
  { role: 'ai', text: '你好！我是 AI 购物助手。关于这件商品，你可以问我价格是否合理，或者适合什么场景使用哦。' }
])

const sendMessage = () => {
  if (!chatInput.value.trim()) return
  
  // 1. 把用户的话加到聊天记录
  chatHistory.value.push({ role: 'user', text: chatInput.value })
  const userQuestion = chatInput.value
  chatInput.value = ''

  // 2. 模拟 AI 回复（等队友接真实接口时替换这里）
  setTimeout(() => {
    let aiReply = '根据近期同类商品的成交数据，这个价格非常合理。'
    if (userQuestion.includes('便宜') || userQuestion.includes('砍价')) {
      aiReply = '目前这个标价已经低于市场均价约 5%，建议您可以向卖家询问是否附赠配件。'
    } else if (userQuestion.includes('续航') || userQuestion.includes('电池')) {
      aiReply = '卖家描述电池健康度为95%，按照每日轻度使用计算，完全能满足一整天的自习需求。'
    }
    chatHistory.value.push({ role: 'ai', text: aiReply })
  }, 1000)
}
</script>

<template>
  <div class="detail-container">
    <!-- 左侧商品图 -->
    <div class="product-image">
      <img :src="product.image" alt="商品图" />
    </div>

    <!-- 右侧商品信息和 AI 聊天 -->
    <div class="product-info">
      <h1 class="title">{{ product.title }}</h1>
      <p class="price">₩ {{ product.price }}</p>
      <div class="seller-info">卖家：{{ product.seller }}</div>
      
      <div class="desc-box">
        <h3>商品描述</h3>
        <p>{{ product.desc }}</p>
      </div>

      <!-- AI 助手区域 -->
      <div class="ai-assistant-box">
        <div class="ai-header">✨ AI 购物助手</div>
        <div class="chat-window">
          <div v-for="(msg, index) in chatHistory" :key="index" :class="['chat-bubble', msg.role]">
            {{ msg.text }}
          </div>
        </div>
        <div class="chat-input-area">
          <input 
            type="text" 
            v-model="chatInput" 
            @keyup.enter="sendMessage" 
            placeholder="问问AI：这个价格合理吗？" 
          />
          <button @click="sendMessage">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 20px; }
@media (max-width: 768px) { .detail-container { grid-template-columns: 1fr; } }

.product-image { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.product-image img { width: 100%; height: 100%; object-fit: cover; }

.product-info { display: flex; flex-direction: column; }
.title { font-size: 26px; color: #2b2b2b; margin-bottom: 10px; }
.price { font-size: 32px; font-weight: 800; color: #e63946; margin-bottom: 15px; }
.seller-info { color: #666; font-size: 14px; margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid #eee; }

.desc-box { margin-bottom: 30px; }
.desc-box h3 { font-size: 16px; color: #444; margin-bottom: 8px; }
.desc-box p { color: #555; line-height: 1.6; font-size: 15px; }

/* AI 助手样式 */
.ai-assistant-box { background: white; border-radius: 16px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 180, 216, 0.1); border: 1px solid #e0f7fa; }
.ai-header { font-weight: bold; color: #00b4d8; margin-bottom: 15px; font-size: 16px; border-bottom: 1px dashed #e0f7fa; padding-bottom: 10px; }
.chat-window { height: 180px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; margin-bottom: 15px; padding-right: 5px; }
.chat-bubble { padding: 10px 14px; border-radius: 12px; font-size: 14px; max-width: 85%; line-height: 1.4; }
.chat-bubble.ai { background: #f0fbfc; color: #0077b6; align-self: flex-start; border-bottom-left-radius: 4px; }
.chat-bubble.user { background: #00b4d8; color: white; align-self: flex-end; border-bottom-right-radius: 4px; }

.chat-input-area { display: flex; gap: 10px; }
.chat-input-area input { flex: 1; padding: 10px 15px; border: 1px solid #ddd; border-radius: 20px; font-size: 14px; outline: none; transition: border 0.2s; }
.chat-input-area input:focus { border-color: #00b4d8; }
.chat-input-area button { background: #00b4d8; color: white; border: none; padding: 0 20px; border-radius: 20px; font-weight: bold; cursor: pointer; transition: background 0.2s; }
.chat-input-area button:hover { background: #0096c7; }
</style>