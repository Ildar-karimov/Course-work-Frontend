<template>
    <div>
        <table>
            <tr>
                <th>Автор</th>
                <th>Название теста</th>
                <th>Тема</th>
            </tr>
            
            <Test 
                v-for="test of tests"
                v-bind:test="test"
            />
        </table>
    </div>
</template>

<script>
import Test from '@/components/Test'

export default{
    props:['tests'],
    components: {
        Test
        }
}
</script>
