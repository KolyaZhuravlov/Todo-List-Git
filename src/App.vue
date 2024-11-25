<script>
import Header from './components/icons/Header.vue';

export default {
  components: { Header },
  data() {
    return {
      newText: '',
      showList: false,
      textList: [],
		isDarkBackground: false
    };
  },
  methods: {
    addItem() {
      if (this.newText.trim() !== '') {
        this.showList = true;
        this.textList.push({ label: this.newText, isChecked: false });  
        this.newText = '';
      }
    },
    checkingItems(item) {
      item.isChecked = !item.isChecked;
    },
    removeItem(index) {
      this.textList.splice(index, 1);
    },
	
  },
};
</script>

<template>
  <Header />
  <div class="container">
    <input
      type="text"
      placeholder="Enter Here..."
      v-model.trim="newText"
      @keyup.enter="addItem"
    />
    <button
      class="btn"
      @click="addItem"
      :disabled="newText.length === 0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
      </svg>
    </button>
  </div>

  <section class="task-container" v-if="textList.length > 0">
    <div v-for="(item, index) in textList" :key="index" class="task">
      <div class="content">
        <p>{{ item.label }}</p>
        <div class="buttons">
          <button
			  class="delete"
			  @click="removeItem(index)">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 120px;
}

/* Стиль для поля ввода */
.container input {
  background-color: #e3e3e3;
  border-radius: 15px;
  padding: 10px 15px;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
}


.btn {
  margin-left: 10px;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
}

.task-container {
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 1rem; 
  margin-top: 2rem;
  transition: transform 0.5s ease;
}


.task {
  width: 100%;
  max-width: 700px;
  padding: 15px;
  background: gray;
  border-radius: 7px;
  text-align: center;
  font-weight: 500;
  margin: 10px 0; 
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.delete {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.5s ease;
}

.delete svg {
  width: 16px;
  height: 16px;
}

.delete:hover {
	transform: scale(1.1)
}

.buttons {
  display: flex;
  align-items: center;
}

p {
  margin: 0;
  font-weight: 500;
}
.btn:hover {
	transform: scale(1.1);
	cursor: pointer;
}
</style>
