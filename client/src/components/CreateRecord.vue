<template>
    <v-layout row wrap class="mt-4">
        <v-flex xs8 class="pl-4">
            <v-text-field 
                :placeholder="placeholder"
                :value="value"
                @input="$emit('on-input', $event)"
                @keyup.enter="$emit('create')"
            ></v-text-field>
        </v-flex>
        <v-flex xs4 class="text-xs-right">
            <v-btn @click="$emit('create')" color="green" dark class="ml-5 mt-2">
                <v-icon class="mr-2">mdi-plus-circle</v-icon>
                Create
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: [
        'placeholder',
        'value'
    ]
}
</script>