<script setup>
import { reactive } from 'vue';
import ScoreTable from './components/ScoreTable.vue';

const gradeList = reactive([]);
const selectedList = reactive([]);

function gradeTableRowOnClick(rowIndex) {
	selectedList[rowIndex] = !selectedList[rowIndex];
}
</script>

<template>
	<div class="w-fit">
		<ScoreTable
			:grade-list="gradeList"
			:selected-list="selectedList"
			@row-select="gradeTableRowOnClick"
		/>
	</div>
</template>
