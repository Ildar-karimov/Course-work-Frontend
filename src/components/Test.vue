<template>
    <tr>
        <td>{{test.author}}</td>
        <td>{{test.title}}</td>
        <td>{{test.type}}</td>
    </tr>
</template>

<script>
export default {
    props:{
        test: {
            type: Object,
            required: true
        }
    }
}
</script>
