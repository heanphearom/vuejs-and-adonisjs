<template>
    <Panel title="Tasks" class="ml-4">
        <div 
            v-for="task in tasks" 
            :key="task.id"
            class="task mt-2 pl-4"
        >
            <EditableRecord
                :isEditMode="task.isEditMode"
                :title="task.description"
                @on-input="setTaskDescription({ task, description: $event })"
                @on-edit="setEditMode(task)"
                @on-save="saveTask(task)"
                @on-delete="deleteTask(task)"
            >
                <v-icon @click="checkClicked(task)">
                    {{ task.complated ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
                </v-icon>
            </EditableRecord>
        </div>

        <CreateRecord
            placeholder="I need to..."
            @on-input="setNewTaskName"
            :value="newTaskName"
            @create="createTask"
        />
    </Panel>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import CreateRecord from './CreateRecord';
import EditableRecord from './EditableRecord';

export default {
    components: {
        CreateRecord,
        EditableRecord
    },
    computed: {
        ...mapState('tasks', [
            'tasks',
            'newTaskName'
        ])
    },
    methods: {
        ...mapActions('tasks', [
            'createTask',
            'deleteTask',
            'saveTask'
        ]),
        ...mapMutations('tasks', [
            'setNewTaskName',
            'setTaskDescription',
            'setEditMode',
            'toggleComplated'
        ]),
        checkClicked(task){
            this.toggleComplated(task);
            this.saveTask(task);
        }
    }
}
</script>

<style scoped>
.task {
    font-size: 18px;
}

.v-icon:hover {
    cursor: pointer;
    color: green;
}
</style>