<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let blog = null;

  onMount(async () => {
    const response = await fetch('/api/blogs');
    const blogs = await response.json();
    blog = blogs.find(b => b.slug === $page.params.slug);
  });
</script>

<div class="blog-details">
  {#if blog}
    <h1>{blog.title}</h1>
    <p>{blog.content}</p>
  {:else}
    <p>Loading...</p>
  {/if}

  <a href="/blog" class="back-link">Back to Blog List</a>
</div>

<style>
  .blog-details {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .back-link {
    display: inline-block;
    margin-top: 20px;
  }
</style>