<script setup lang="">
  import Draggable from 'vuedraggable';
  const items = ref([
    { id: 0, title: 'Item A', list: 1 },
    { id: 1, title: 'Item B', list: 1 },
    { id: 2, title: 'Item C', list: 2 },
  ]);
  const list1 = ref([
    { name: 'Islom', id: 1 },
    { name: 'Aziz', id: 2 },
    { name: 'Javohir', id: 3 },
    { name: 'Dilbek', id: 4 },
  ]);
  const list2 = ref([
    { name: 'Daler', id: 5 },
    { name: 'Asilbek', id: 6 },
    { name: 'Aziz', id: 7 },
    { name: 'Jasur', id: 8 },
  ]);

  const getList = list => {
    return items.value.filter(item => item.list == list);
  };

  const startDrag = (Event, item) => {
    console.log(item);
    Event.dataTransfer.dropEffect = 'move';
    Event.dataTransfer.effectAllowed = 'copyMove';
    Event.dataTransfer.setData('itemID', item.id);
  };

  const onDrop = (Event, list) => {
    const itemID = Event.dataTransfer.getData('itemID');
    const item = items.value.find(item => item.id === Number.parseInt(itemID));
    item.list = list;
  };
</script>

<template>
  <div>
    <h1
      class="text-center text-accent-300 shadow-lg py-4 font-semibold text-2xl"
    >
      Drag and Drop
    </h1>
    <div class="mx-auto container">
      <div class="flex items-center justify-around">
        <draggable
          v-model="list1"
          group="cardList"
          @start="drag = true"
          @end="drag = true"
          item-key="id"
          ghost-class="ghost"
          animation="500"
        >
          <template #item="{ element }">
            <div class="cursor-move bg-teal-300 text-white py-1 px-4 my-3">
              {{ element.index }} {{ element.name }}
            </div>
          </template>
        </draggable>
        <draggable
          v-model="list2"
          group="cardList"
          @start="drag = true"
          @end="drag = true"
          item-key="id"
        >
          <template #item="{ element }">
            <div class="cursor-move bg-teal-300 text-white py-1 px-4 my-3">
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </div>

      <div>
        <h3>test draggable</h3>
        <div>
          <draggable
            v-model="list2"
            item-key="id"
            @start="drag = true"
            @end="drag = true"
            animation="500"
          >
            <template #item="{ element }">
              <div class="bg-green-600 p-2 m-2">{{ element.name }}</div>
            </template>
          </draggable>
        </div>
      </div>

      <TestTodo />

      <li v-for="item in list1.value" :key="item.id">
        {{ item }}
      </li>

      <div
        class="drag-zone"
        @drop="onDrop($event, 1)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div
          v-for="item in getList(1)"
          :key="item.id"
          class="drag-el"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
      <div
        class="drag-zone"
        @drop="onDrop($event, 2)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div
          v-for="item in getList(2)"
          :key="item.id"
          class="drag-el"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
  .drag-zone {
    @apply w-1/2 mx-auto my-[50px] bg-[#ecf0f1] p-3 min-h-[10px];
  }
  .drag-el {
    @apply text-white p-[5px] mb-[10px] bg-accent-300;
  }
  .drag-el {
    @apply last:mb-0;
  }
  .ghost {
    @apply bg-success-200 z-10 text-white cursor-move;
  }
</style>
