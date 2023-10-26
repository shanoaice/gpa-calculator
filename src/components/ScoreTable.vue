<script setup>
import { nanoid } from 'nanoid';
import ScoreTableElement from './ScoreTableElement.vue';

const { gradeList, editList } = defineProps({
	gradeList: {
		type: Object,
		default: () => ({}),
	},
	editList: {
		type: Object,
		default: () => ({}),
	},
});
const emit = defineEmits(['set-data', 'delete-data', 'toggle-edit']);

function addData(subject, level, grade, credit) {
	emit('set-data', nanoid(), subject, level, grade, credit);
}

function setData(id, subject, level, grade, credit) {
	emit('set-data', id, subject, level, grade, credit);
}
</script>

<template>
	<div class="max-w-[75%] overflow-y-auto flex">
		<div>
			<table class="table table-pin-rows w-full">
				<colgroup>
					<col class="w-fit whitespace-normal break-normal" />
					<col span="2" />
					<col class="w-fit" />
					<col span="2" />
				</colgroup>
				<thead>
					<tr>
						<td>Subject</td>
						<td>Level</td>
						<td>Grade</td>
						<td>Credits</td>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<template v-for="(item, id) in gradeList" :key="id">
						<ScoreTableElement
							:edit="editList[id]"
							:subject="item.subject"
							:level="item.level"
							:grade="item.grade"
							:credit="item.credits"
							@delete-data="$emit('delete-data', id)"
							@edit-data="$emit('toggle-edit', id)"
							@confirm-data="
								(subject, level, grade, credit) => {
									emit('toggle-edit', id);
									setData(id, subject, level, grade, credit);
								}
							"
						/>
					</template>

					<ScoreTableElement edit="true" @confirm-data="addData" />
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped></style>
