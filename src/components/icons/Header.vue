<template>
	<div class="header" :class="{'dark-background': isDarkBackground, 'light-background' : !isDarkBackground}">
	  <div class="logo"
	  :class="{'white': isWhite , 'black' : !isWhite}">
		 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/>
		 </svg>
	  </div>
	  <div class="title">TO-DO-APP</div>
	  <div class="ligth" @click="onChange">
		 
		 <svg class="moon" v-if="isIconChanged" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
			<path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
		 </svg>
		 <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
			<path fill="#FFD43B" d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/>
		 </svg>
	  </div>
	  <div class="github"
	  :class="{'white': isWhite , 'black' : !isWhite}">
		 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
			<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 3"/>
		 </svg>
	  </div>
	</div>
 </template>
 
 <script>
 export default {
	data() {
	  return {
		 isDarkBackground: false, 
		 isIconChanged: false ,
		 isWhite: false
	  }
	},
	methods: {
	  onChange() {
		 this.isDarkBackground = !this.isDarkBackground;
		 this.isIconChanged = !this.isIconChanged; 
		 this.isWhite = !this.isWhite
	  }
	}
 }
 </script>
 
 <style scoped>
 .dark-background, .light-background {
  transition: background-color 1s ease, color 0.3s ease;
}
.moon, .github svg {
  transition: fill 1s ease;
}
 .dark-background {
	background-color: black;
	color: white;
 }
 .light-background {
	background-color: white;
	color: black;
 }
 .header {
	height: 100px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: grid;
	grid-template-columns: 7rem 1fr repeat(2, 4rem);
	box-shadow: 0px -5px 20px 1px;
	z-index: 5;
	font-size: 20px;
 }
 .logo {
	width: 40px;
	height: 40px;
	margin: 20px;
 }
 .title {
	justify-self: center;
	font-weight: 700;
	font-size: 1.9rem;
	margin-top: 20px;
 }
 .ligth {
	width: 35px;
	height: 35px;
	margin-right: 20px;
	margin-top: 20px;
	cursor: pointer;
 }
 .github {
	width: 40px;
	height: 40px;
	margin-right: 20px;
	margin-top: 20px;
 }
 .moon {
	width: 35px;
	height: 35px;
	margin-top: 5px;
	fill: white;
 }
 .dark {
	fill: black;
 }
 .white{
	fill:white;
 }
 </style>
 