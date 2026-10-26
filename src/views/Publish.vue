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
.publish-page { max-width: 600px; margin: 0 auto; padding: 20px 0; }
.publish-page h2 { text-align: center; color: #2b2b2b; margin-bottom: 25px; font-size: 24px; }
.form-card { background: white; padding: 35px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); border: 1px solid #f0f0f0; }
.upload-area { border: 2px dashed #b2ebf2; background: #fafefe; padding: 50px 20px; text-align: center; border-radius: 12px; margin-bottom: 25px; transition: all 0.2s; }
.upload-area:hover { border-color: #00b4d8; background: #f0fbfc; }
.upload-area input[type="file"] { display: none; }
.upload-area label { cursor: pointer; color: #00b4d8; font-weight: bold; font-size: 16px; }
.preview-area { text-align: center; margin-bottom: 25px; }
.preview-area img { max-width: 100%; max-height: 250px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 15px; }
.preview-area button { background: transparent; border: 1px solid #ccc; color: #666; padding: 6px 12px; border-radius: 20px; cursor: pointer; font-size: 12px; }
.ai-btn { width: 100%; padding: 14px; background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%); color: white; border: none; border-radius: 10px; font-weight: bold; font-size: 16px; cursor: pointer; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0, 180, 216, 0.3); transition: transform 0.1s; }
.ai-btn:hover:not(:disabled) { transform: translateY(-2px); }
.ai-btn:disabled { background: #e0e0e0; color: #999; cursor: not-allowed; box-shadow: none; }
.input-group { margin-bottom: 20px; }
.input-group label { display: block; font-size: 14px; font-weight: 600; margin-bottom: 8px; color: #444; }
.input-group input, .input-group textarea { width: 100%; padding: 12px 15px; border: 1px solid #ddd; border-radius: 10px; font-size: 15px; font-family: inherit; background: #fafafa; transition: border 0.2s, background 0.2s; }
.input-group input:focus, .input-group textarea:focus { outline: none; border-color: #00b4d8; background: white; box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.1); }
.submit-btn { width: 100%; padding: 16px; background: #2b2b2b; color: white; border: none; border-radius: 10px; font-size: 16px; font-weight: bold; cursor: pointer; margin-top: 10px; }
.submit-btn:hover { background: #111; }
</style>