<template>
  <div class="library">
    <div class="container">
      <h1 class="title">Elektron kutubxona</h1>
      <ul class="library__tab">
        <li :class="{ active: i === 0 }" v-for="(list, i) in 6" :key="i">
          Adabiyotlar
        </li>
      </ul>
      <div class="library__filtr">
        <div class="sel-input">
          <label for="">Adabiyot nomi</label>
          <input type="text" placeholder="Adabiyot nomini kiriting" />
        </div>
        <div class="sel-input">
          <label for="">Muallif ismi sharifi</label>
          <input type="text" placeholder="Muallif ismini kiriting" />
        </div>
        <div class="library__filtr-btns">
          <SearchButton />
          <FilterButton @click="open">
            <span>Qidiruv filtri</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
            >
              <path
                d="M8.55526 13.1271C8.58636 13.3604 8.5086 13.6093 8.32973 13.7726C8.25779 13.8447 8.17233 13.9019 8.07825 13.9409C7.98417 13.9799 7.88332 14 7.78147 14C7.67962 14 7.57877 13.9799 7.48469 13.9409C7.39062 13.9019 7.30516 13.8447 7.23321 13.7726L4.11475 10.6541C4.02993 10.5712 3.96544 10.4698 3.92632 10.3578C3.88719 10.2458 3.8745 10.1263 3.88922 10.0086V6.02696L0.164173 1.25983C0.037885 1.09771 -0.0190985 0.892191 0.00567355 0.688185C0.0304456 0.48418 0.134959 0.298273 0.296377 0.171088C0.444135 0.0622138 0.607446 0 0.778534 0H11.6659C11.837 0 12.0003 0.0622138 12.1481 0.171088C12.3095 0.298273 12.414 0.48418 12.4388 0.688185C12.4636 0.892191 12.4066 1.09771 12.2803 1.25983L8.55526 6.02696V13.1271ZM2.36498 1.55534L5.44457 5.49037V9.78312L6.99991 11.3385V5.48259L10.0795 1.55534H2.36498Z"
                fill="#A20025"
              />
            </svg>
          </FilterButton>
        </div>
      </div>
      <LibraryTable />
    </div>
    <div v-show="openModal" class="overlay"></div>
    <FilterModal
      @close-modal="closeModal"
      class="modal"
      v-show="openModal"
    ></FilterModal>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openModal = ref(false);

function open() {
  openModal.value = true;
}
function closeModal() {
  openModal.value = false;
}

</script>

