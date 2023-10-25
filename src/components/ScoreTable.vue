<script setup>
import { reactive, ref } from 'vue';

const { gradeList, selectedIndex } = defineProps({
	gradeList: {
		type: Array,
		default: reactive([]),
	},
	selectedIndex: {
		type: Number,
		default: ref(-1),
	},
});
defineEmits(['rowSelect', 'addData']);

const subjectValue = ref('');
const levelValue = ref('s');
const gradeValue = ref('a+');
const creditValue = ref(0);

const showNewItemRow = ref(false);

function resetInput() {
	subjectValue.value = '';
	levelValue.value = 's';
	gradeValue.value = 'a+';
	creditValue.value = 0;
}
</script>

<template>
	<table class="table">
		<thead>
			<tr>
				<th>Subject</th>
				<th>Level</th>
				<th>Grade</th>
				<th>Credits</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<template v-for="(item, index) in gradeList" :key="item.id">
				<tr
					:class="{ rowSelected: selectedIndex == index }"
					@click="$emit('rowSelect', index)"
				>
					<td>{{ item.subject }}</td>
					<td>{{ item.level }}</td>
					<td>{{ item.grade }}</td>
					<td>{{ item.credits }}</td>
				</tr>
			</template>
			<tr v-if="gradeList.length == 0 || showNewItemRow">
				<td>
					<input
						id="subject-input"
						v-model="subjectValue"
						type="text"
						name="subject"
						class="new-input"
					/>
				</td>
				<td>
					<select
						id="level-input"
						v-model="levelValue"
						name="level"
						class="new-select"
					>
						<option value="s">S</option>
						<option value="h-">H-</option>
						<option value="h">H</option>
						<option value="ah">AH</option>
						<option value="ap">AP</option>
					</select>
				</td>
				<td>
					<select
						id="grade-input"
						v-model="gradeValue"
						name="grade"
						class="new-select"
					>
						<option value="a+">A+</option>
						<option value="a">A</option>
						<option value="a-">A-</option>
						<option value="b+">B+</option>
						<option value="b">B</option>
						<option value="b-">B-</option>
						<option value="c">C</option>
						<option value="d">D</option>
						<option value="f">F</option>
					</select>
				</td>
				<td>
					<input
						id="credit-input"
						v-model="creditValue"
						type="text"
						name="credits"
						class="new-input"
					/>
				</td>
				<td>
					<div class="flex space-x-2">
						<button
							class="group btn btn-outline btn-success btn-sm btn-square"
							@click="
								$emit(
									'addData',
									subjectValue,
									levelValue,
									gradeValue,
									creditValue
								)
							"
						>
							<div
								class="icon-[fluent--checkmark-12-regular] group-hover:icon-[fluent--checkmark-12-filled]"
							></div>
						</button>
						<button
							class="group btn btn-outline btn-error btn-sm btn-square"
							@click="resetInput"
						>
							<div
								class="icon-[fluent--dismiss-12-regular] group-hover:icon-[fluent--dismiss-12-filled]"
							></div>
						</button>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
.new-input {
	@apply input input-bordered;
}
.new-input:focus {
	@apply input-primary;
}

.new-select {
	@apply select select-bordered;
}
.new-select:focus {
	@apply select-primary;
}

.row-select {
	@apply bg-accent-focus text-accent-content;
}
</style>
