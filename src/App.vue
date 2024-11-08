<script>
export default {
	data() {
		return {
			newText: '',
			showList: false,
			textList: [],
		}
	},
	methods: {
		addItem() {
			if(this.newText.trim() !== '') {
				this.showList = true;
				this.textList.push({ lable: this.newText, isChecked: false});
				this.newText = '';
			}
		},
		checkingItems(item) {
			item.isChecked = !item.isChecked;
		},
		removeItem(index) {
			this.textList.splice(index, 1);
		} 
	}
}
</script>

<template>
<div class="container">
 <div class="title">
	<h1>My To Do List</h1>
	<div class="input">
		<input v-model.trim="newText"
			@keyup.enter="addItem"
		type="text"
		 placeholder="type something"
		 >
	<v-btn class="btn" icon="plus-box"
	@click="addItem"
	:disabled="newText.length == 0"
	>Add</v-btn>
	</div>
	 </div>
</div>

<section class="task" v-if="showList">
      <ul>
        <li 
        v-for="(item, index) in textList" 
        :key="index"
        @click="checkingItems(item)"
        :class="{checked: item.isChecked}">
          <h3>{{item.lable}}</h3> 
          <button @click="removeItem(index)" class="remove"
			>x</button>
        </li>
      </ul>
    </section>
</template>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	color: white;
}
.title {
	text-align: center;
	color: white;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: black;
	box-shadow: 0 4px 8px rgb(0, 0, 0, 0.1);
	width: 500px;
	height: 200px;

}
.input {
	display: flex;
	justify-content: center;
	margin-top: 20px;
	align-items: center;
}
.input input{
	padding: 8px;
	font-size: 16px;
	border-radius: 4px;
	border: 1px solid #ccc;
	color: white;
}
.btn{
	font-size: 14px;
	margin-left: 10px;
}
.btn:hover {
	transform: scale(1.05);
}ul{
  padding: 1rem;
  display:table;
  width:100%;
  box-sizing:border-box;
  background-color:black;
  list-style-type: none;
  border-radius: 1rem;
}
ul li{
  width: 100%;
  position: relative;
  cursor: pointer;
  margin-bottom: 2rem;
  padding: .7rem .33rem .7rem 2.5rem;
  background-color: rgb(236, 236, 236);
  transition: 0.2s;
  border-radius: 1rem;
}
ul li:hover{
  background-color: rgb(182, 182, 182);
}
.checked {
  text-decoration: line-through;
  color: rgb(127, 140, 141);
}
ul li .remove{
  position: absolute;
  color: rgb(116, 116, 116);
  cursor: pointer;
  right: 0;
  top: 0;
  padding: .7rem 1rem;
  border: none;
  padding: 0 1.3rem;
  height: 100%;
  border-radius: 0 1rem 1rem 0;
}
ul li .remove:hover{
  color: white;
  background-color: red;
}
.btn[disabled] {
  background: #8795a1;
}

.btn[disabled]:hover {
  background: #606f7b;
}
</style>
