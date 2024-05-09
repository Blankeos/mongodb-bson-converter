<script>
  import '@/styles/globals.css';
  let { children } = $props();
</script>

<svelte:head>
  <title>MongoDB BSON Converter</title>
  <meta charset="UTF-8" />
  <meta
    name="description"
    content="Convert BSON from MongoDB Atlas to a valid JSON for insertOne() or insertMany()"
  />
  <meta name="keywords" content="mongodb,atlas,bson,json,converter" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="author" content="Carlo Taleon" />
  <meta name="robots" content="index, follow" />
</svelte:head>
{@render children()}
