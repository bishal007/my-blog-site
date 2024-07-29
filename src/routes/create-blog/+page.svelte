<script>
  import { goto } from '$app/navigation';

  let title = '';
  let content = '';

  async function createBlog() {
    const response = await fetch('/api/blogs');
    const blogs = await response.json();

    const newBlog = {
      id: blogs.length + 1,
      title,
      content,
      slug: title.toLowerCase().replace(/ /g, '-')
    };

    blogs.push(newBlog);

    await fetch('/api/blogs', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogs)
    });

    goto('/blog');
  }
</script>

<div class="create-blog">
  <h1>Create a New Blog Post</h1>

  <form on:submit|preventDefault={createBlog}>
    <div>
      <label for="title">Title:</label>
      <input id="title" bind:value={title} required>
    </div>
    <div>
      <label for="content">Content:</label>
      <textarea id="content" bind:value={content} required></textarea>
    </div>
    <button type="submit">Save</button>
  </form>
</div>

<style>
  .create-blog {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  form div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  textarea {
    height: 150px;
  }
</style>