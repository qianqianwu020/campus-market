<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('')
const desc = ref('')
const price = ref('')
const imagePreview = ref(null)

// 真实图片预览
const handleFileChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    imagePreview.value = URL.createObjectURL(file)
  }
}

// AI 助手（目前为前端模拟，后续需替换为真实接口）
const isGenerating = ref(false)
const generateAI = () => {
  isGenerating.value = true
  setTimeout(() => {
    title.value = 'iPad Air 5 (99新)'
    desc.value = '仅拆封，自习室使用，无磕碰，电池健康度99%。'
    price.value = '38万韩元'
    isGenerating.value = false
  }, 1500)
}

// 提交发布
const submitPublish = () => {
  alert('前端验证通过！等待后端接口联调。')
  router.push('/')
}
</script>

<template>
  <div class="publish-page">
    <h2>发布闲置商品</h2>
    <div class="form-card">
      <div class="upload-area" v-if="!imagePreview">
        <input type="file" @change="handleFileChange" accept="image/*" id="file-upload" />
        <label for="file-upload">点击选择真实图片 📷</label>
      </div>
      <div v-else class="preview-area">
        <img :src="imagePreview" alt="预览图" />
        <button @click="imagePreview = null">重新选择</button>
      </div>

      <button class="ai-btn" @click="generateAI" :disabled="isGenerating || !imagePreview">
        {{ isGenerating ? 'AI 分析中...' : '✨ 一键 AI 智能生成描述' }}
      </button>

      <div class="input-group">
        <label>商品名称</label>
        <input type="text" v-model="title" placeholder="例如：iPad Air 5" />
      </div>
      <div class="input-group">
        <label>商品描述</label>
        <textarea v-model="desc" rows="4" placeholder="描述一下商品状态..."></textarea>
      </div>
      <div class="input-group">
        <label>预期价格</label>
        <input type="text" v-model="price" placeholder="例如：38万" />
      </div>
      <button class="submit-btn" @click="submitPublish">确认发布</button>
    </div>
  </div>
</template>

<style scoped>
.publish-page { padding: 20px; }
.form-card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.upload-area { border: 2px dashed #ccc; padding: 40px; text-align: center; border-radius: 8px; margin-bottom: 20px; background: #fafafa; }
.upload-area input[type="file"] { display: none; }
.upload-area label { cursor: pointer; color: #4a90e2; font-weight: bold; }
.preview-area { text-align: center; margin-bottom: 20px; }
.preview-area img { max-width: 200px; border-radius: 8px; margin-bottom: 10px; }
.ai-btn { width: 100%; padding: 12px; background: #4a90e2; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-bottom: 20px; }
.ai-btn:disabled { background: #a0c4f3; cursor: not-allowed; }
.input-group { margin-bottom: 15px; }
.input-group label { display: block; font-size: 14px; font-weight: bold; margin-bottom: 5px; }
.input-group input, .input-group textarea { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box; }
.submit-btn { width: 100%; padding: 15px; background: #10b981; color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; margin-top: 10px; }
</style>