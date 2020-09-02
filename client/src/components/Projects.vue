<template>
    <Panel title="Projects">
        <div v-for="project in projects" :key="project.id" class="project mt-2 pl-4">
            <EditableRecord
                :isEditMode="project.isEditMode"
                :title="project.title"
                @on-input="setProjectTitle({ project, title: $event })"
                @on-click="projectClicked(project)"
                @on-edit="setEditMode(project)"
                @on-save="saveProject(project)"
                @on-delete="deletProject(project)"
            />
        </div>
        <CreateRecord
            placeholder="My project name..."
            @on-input="setNewProjectName"
            :value="newProjectName"
            @create="createProject"
        />
    </Panel>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import CreateRecord from './CreateRecord';
import EditableRecord from './EditableRecord';

export default {
    mounted(){
        this.fetchProjects();
    },
    components: {
        CreateRecord,
        EditableRecord
    },
    computed: {
        ...mapState('projects', [
            'newProjectName',
            'projects'
        ])
    },
    methods: {
        projectClicked(project){
            this.setCurrentProject(project);
            this.fetchTasksForProject(project);
        },
        ...mapMutations('projects', [
            'setNewProjectName',
            'setEditMode',
            'setProjectTitle',
            'setCurrentProject'
        ]),
        ...mapActions('projects', [
            'createProject',
            'fetchProjects',
            'saveProject',
            'deletProject'
        ]),
        ...mapActions('tasks', [
            'fetchTasksForProject'
        ])
    }    
}
</script>

<style scoped>
.project {
    font-size: 18px;
}

.v-icon:hover {
    color: green;
}
</style>