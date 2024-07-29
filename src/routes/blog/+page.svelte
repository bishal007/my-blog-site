<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let blogs = [];

  onMount(async () => {
    const response = await fetch('/api/blogs');
    blogs = await response.json();
  });

  function goToDetails(slug) {
    goto(`/blog/${slug}`);
  }
</script>

<h1>Blog Posts</h1>

{#each blogs as blog}
  <div class="blog-post">
    <h2>{blog.title}</h2>
    <p>{blog.content.substring(0, 100)}...</p>
    <button on:click={() => goToDetails(blog.slug)}>Details</button>
  </div>
{/each}

<style>
  .blog-post {
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
</style>