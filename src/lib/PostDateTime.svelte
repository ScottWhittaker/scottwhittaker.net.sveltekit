<script>
    export let date;
    const formattedDate = new Date(date).toDateString();
</script>

<time datetime={date} class="post__date">{formattedDate}</time>
