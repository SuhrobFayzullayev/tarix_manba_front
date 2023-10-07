<template>
  <div class="filter-modal">
    <h1 class="title">Filtr oynasi</h1>
    <div class="filter-modal__content">
      <div class="filter-modal__select">
        <label for="">Asarning muallifi</label>
        <div class="filter-modal__select-item">
          <select name="" id="">
            <option value="">Asarning nomini kiriting</option>
          </select>
          <div class="select-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
            >
              <path
                d="M11 1L6 6L1 1"
                stroke="#313131"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="filter-modal__select">
        <label for="">Asar nomi</label>
        <div class="filter-modal__select-item">
          <select name="" id="">
            <option value="">Adabiyot nomini kiriting</option>
          </select>
          <div class="select-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
            >
              <path
                d="M11 1L6 6L1 1"
                stroke="#313131"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="filter-modal__select">
        <label for="">Nashr yili</label>
        <div class="filter-modal__select-item">
          <select name="" id="">
            <option value="">Nashr yilinini kiriting</option>
          </select>
          <div class="select-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
            >
              <path
                d="M11 1L6 6L1 1"
                stroke="#313131"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="filter-modal__select">
        <label for="">Asar tili</label>
        <div class="filter-modal__select-item">
          <select name="" id="">
            <option value="">Asar tilini kiriting</option>
          </select>
          <div class="select-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
            >
              <path
                d="M11 1L6 6L1 1"
                stroke="#313131"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="filter-modal__btns">
        <SearchButton />
        <FilterButton @click="$emit('closeModal')">
          <span> Filtrni yopish</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M13 1L1 13"
              stroke="#A20025"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L13 13"
              stroke="#A20025"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </FilterButton>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>