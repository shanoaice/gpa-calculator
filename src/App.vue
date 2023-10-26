<script setup>
import { ref, computed } from 'vue';
import ScoreTable from './components/ScoreTable.vue';
import gpaScale from './gpa-scale';

const gradeList = ref({});
const editList = ref({});

function setGrade(id, subject, level, grade, credits) {
	gradeList.value[id] = {
		subject,
		level,
		grade,
		credits,
	};
	editList.value[id] = false;
}

function deleteGrade(id) {
	delete gradeList.value[id];
	delete editList.value[id];
}

const gpa = computed(() => {
	const grades = Object.values(gradeList.value);
	const totalCredits = grades.reduce(
		(curVal, gradeEntry) => curVal + gradeEntry.credits,
		0
	);
	const totalGpa = grades.reduce(
		(curVal, gradeEntry) =>
			curVal +
			gpaScale[gradeEntry.level][gradeEntry.grade] * gradeEntry.credits,
		0
	);
	return totalCredits === 0 ? 0 : totalGpa / totalCredits;
});
</script>

<template>
	<div class="max-h-screen flex flex-col items-center space-y-4">
		<ScoreTable
			:grade-list="gradeList"
			:edit-list="editList"
			@set-data="setGrade"
			@delete-data="deleteGrade"
			@toggle-edit="(id) => (editList[id] = !editList[id])"
		/>
		<div class="card card-bordered card-compact shadow w-fit">
			<div class="card-body">Your GPA is {{ gpa }}</div>
		</div>
	</div>
</template>
