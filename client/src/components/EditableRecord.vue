<template>
    <v-layout row wrap>
        <v-flex xs9 class="text-xs-left">
            <slot></slot>
            <span 
                v-if="!isEditMode"
                @click="$emit('on-click')"
            >
                {{ title }}
            </span>
            <v-text-field
                autofocus
                v-if="isEditMode"
                :value="title"
                @keyup.enter="$emit('on-save')"
                @input="$emit('on-input', $event)"
            ></v-text-field>
        </v-flex>
        <v-flex xs3 class="text-xs-right">
            <v-icon 
                v-if="!isEditMode"
                @click="$emit('on-edit')"
            >
                mdi-pencil
            </v-icon>
            <v-icon 
                v-if="isEditMode"
                @click="$emit('on-save')"
            >
                mdi-check
            </v-icon>
            <v-icon @click="$emit('on-delete')">
                mdi-delete
            </v-icon>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: [
        'isEditMode',
        'title'
    ]
}
</script>