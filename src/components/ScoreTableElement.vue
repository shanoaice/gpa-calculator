<script setup>
import { ref } from 'vue';

const { subject, level, grade, credit, edit } = defineProps({
	subject: {
		type: String,
		default: () => '',
	},
	level: {
		type: String,
		default: () => 'S',
	},
	grade: {
		type: String,
		default: () => 'A+',
	},
	credit: {
		type: Number,
		default: () => 0,
	},
	edit: {
		type: Boolean,
		default: () => false,
	},
});

const emit = defineEmits([
	'confirm-data',
	'dismiss-data',
	'edit-data',
	'delete-data',
]);

const subjectValue = ref(subject);
const levelValue = ref(level);
const gradeValue = ref(grade);
const creditValue = ref(credit);

function dismissData() {
	subjectValue.value = subject;
	levelValue.value = level;
	gradeValue.value = grade;
	creditValue.value = credit;
	emit('dismiss-data');
}
</script>

<template>
	<tr v-if="edit">
		<td>
			<div class="flex">
				<input
					id="subject-input"
					v-model="subjectValue"
					type="text"
					name="subject"
					class="new-input flex-grow"
				/>
			</div>
		</td>
		<td>
			<select
				id="level-input"
				v-model="levelValue"
				name="level"
				class="new-select"
			>
				<option value="S">S</option>
				<option value="H-">H-</option>
				<option value="H">H</option>
				<option value="AH">AH</option>
				<option value="AP">AP</option>
			</select>
		</td>
		<td>
			<select
				id="grade-input"
				v-model="gradeValue"
				name="grade"
				class="new-select"
			>
				<option value="A+">A+</option>
				<option value="A">A</option>
				<option value="A-">A-</option>
				<option value="B+">B+</option>
				<option value="B">B</option>
				<option value="B-">B-</option>
				<option value="C">C</option>
				<option value="D">D</option>
				<option value="F">F</option>
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
		<th>
			<div class="flex space-x-2">
				<button
					class="group btn btn-outline btn-success btn-sm btn-square"
					@click="
						$emit(
							'confirm-data',
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
					@click="dismissData"
				>
					<div
						class="icon-[fluent--dismiss-12-regular] group-hover:icon-[fluent--dismiss-12-filled]"
					></div>
				</button>
			</div>
		</th>
	</tr>
	<tr v-else>
		<td>
			<div class="break-normal">{{ subject }}</div>
		</td>
		<td>{{ level }}</td>
		<td>{{ grade }}</td>
		<td>{{ credit }}</td>
		<th>
			<div class="flex space-x-2">
				<button
					class="group btn btn-outline btn-info btn-sm btn-square"
					@click="$emit('edit-data')"
				>
					<div
						class="icon-[fluent--edit-12-regular] group-hover:icon-[fluent--edit-12-filled]"
					></div>
				</button>
				<button
					class="group btn btn-outline btn-error btn-sm btn-square"
					@click="$emit('delete-data')"
				>
					<div
						class="icon-[fluent--dismiss-12-regular] group-hover:icon-[fluent--dismiss-12-filled]"
					></div>
				</button>
			</div>
		</th>
	</tr>
</template>

<style scoped>
.new-input {
	width: fit-content;
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
