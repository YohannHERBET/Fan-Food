<template>
 <header class="bg-local drop-shadow-2xl" style="background-image: url('https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_960_720.jpg')">
  <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800" >
    <div class="container flex flex-wrap justify-between items-center mx-auto md:ml-0 md:mr-0">
      <router-link
      :to="{
        name:'home',
      }" 
      class="mx-auto md:ml-0 md:mr-0 h-32 flex items-center"
      >
     
          <img src="../../src/assets/foodlogo.png" class="w-20 h-20 mr-5 h-6" alt="Food Logo" />
          <span class="text-3xl self-center font-semibold whitespace-nowrap dark:text-white text-white">FanFood</span>
      </router-link>
      <div class="w-full md:block md:w-auto md:ml-0 md:mr-0">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <router-link
            :to="{
              name:'home',
            }" 
            class="text-lg block py-2 pr-4 pl-3 border-gray-100 hover:bg-orange-300 md:hover:bg-transparent md:border-0 text-orange-400 md:hover:text-white hover:text-black border-b border-t border-orange-300 text-center mx-20 md:mx-0 md:hover:underline hover:scale-110"
            > Accueil</router-link>
          </li>
          <li>
            <router-link
            :to="{
              name:'aboutus',
            }" class="text-lg block py-2 pr-4 pl-3 text-orange-400 border-gray-100 hover:bg-orange-300 md:hover:bg-transparent md:border-0 text-orange-400 md:hover:text-white hover:text-black border-b border-orange-300 text-center mx-20 md:mx-0 md:hover:underline hover:scale-110"
            >A propos de nous</router-link>
          </li>
          <li>
            <router-link
            :to="{
              name:'contacts',
            }" class="mb-5 md:mb-0 text-lg block py-2 pr-4 pl-3 text-orange-400 border-gray-100 hover:bg-orange-300 md:hover:bg-transparent md:border-0 text-orange-400 md:hover:text-white hover:text-black border-b border-orange-300 text-center mx-20 md:mx-0 md:hover:underline hover:scale-110"
            >Contacts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 </header>
</template>

<script>
  export default {
    name: 'FanFood-Header',
  }
</script>
