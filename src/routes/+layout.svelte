<script>
  import '../app.css';
</script>

<div class="container">
  <nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
    <a href="/create-blog">Create Blog</a>
  </nav>

  <slot />
</div>

<style>
  nav {
    background-color: var(--secondary-color);
    padding: 1rem;
    margin-bottom: 2rem;
  }

  nav a {
    color: white;
    margin-right: 1rem;
  }
</style>