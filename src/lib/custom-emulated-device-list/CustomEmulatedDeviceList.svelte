<script>
    import { customEmulatedDeviceList } from '$lib/data/custom-emulated-device-list.json'

    const filteredDeviceList = customEmulatedDeviceList.filter(item => item['user-agent']);
</script>

<div>
    <table>
    {#each filteredDeviceList as item}
        <tr>
            <td>{item.title}</td>
            <td>{item['user-agent']}</td>
        </tr>
    {/each}
    </table>
</div>

<style>
    div {
        overflow: scroll;
    }
</style>
