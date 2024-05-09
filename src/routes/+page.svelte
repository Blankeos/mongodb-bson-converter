<script lang="ts">
  import { debounce } from '@/lib/debounce';
  import { getRandomExample } from '@/lib/getRandomExample';
  import { scan } from '@/lib/scan';

  // Compile the Typebox schema
  const isValidJSON = (str: string) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  let bsonValue = $state('');
  let isValidating = $state(false);
  let isValid = $state(false);
  let convertedValue = $state('');
  let touched = $state(false);

  let copied = $state(false);

  const validate = debounce((str: string) => {
    isValid = isValidJSON(str);
    isValidating = false;
  }, 500);

  $effect(() => {
    isValidating = true;
    validate(bsonValue);
  });

  $effect(() => {
    if (isValid) {
      convertedValue = scan(JSON.parse(bsonValue));
    }
  });
</script>

<main class="h-full min-h-screen bg-slateblue">
  <div class="mx-auto w-full max-w-lg px-7">
    <!--  -->
    <header class="flex flex-col items-center gap-y-1 py-2 pt-5">
      <h1 class="text-center font-medium text-white">MongoDB BSON Converter</h1>
      <p class="text-center text-sm text-gray-500">
        Copy a BSON from MongoDB Atlas, paste it here and get a valid query that will work with
        <code class="code rounded-md bg-gray-800 px-1.5 py-0.5 text-gray-400">insertOne()</code> or
        <code class="code rounded-md bg-gray-800 px-1.5 py-0.5 text-gray-400">insertMany()</code>
      </p>
      <p class="text-sm text-white">
        Made with 💚 by <a
          class="text-spring opacity-90"
          target="_blank"
          href="https://carlo.vercel.app/">Carlo</a
        >
      </p>
    </header>

    <div class="h-5" />

    <div class="flex justify-end pb-5">
      <button
        class="btn btn-ghost btn-sm flex items-center gap-x-2 font-light"
        onclick={() => {
          bsonValue = getRandomExample(bsonValue);
        }}
      >
        <span>🎲</span>
        <span>Get Random Example</span></button
      >
    </div>
    <textarea
      onfocus={() => (touched = true)}
      class="textarea textarea-bordered min-h-72 w-full text-xs"
      bind:value={bsonValue}
      placeholder="Write your BSON here..."
    ></textarea>

    <div class="flex h-12 items-center gap-x-2">
      {#if isValidating}
        <span class="loading loading-infinity loading-md"></span>
        <span class="text-sm">Validating BSON...</span>
      {:else if touched && !isValid && bsonValue !== ''}
        <span class="text-sm"> 🤕 Not a valid BSON/JSON.</span>
      {/if}
    </div>

    <div class="relative">
      {#if convertedValue !== ''}
        <button
          class="btn btn-sm absolute right-2 top-2"
          onclick={() => {
            navigator.clipboard.writeText(convertedValue);
            copied = true;
            setTimeout(() => {
              copied = false;
            }, 5000);
          }}
          onmouseleave={() => {
            setTimeout(() => {
              copied = false;
            }, 1500);
          }}
        >
          {#if copied}
            ✅ Copied
          {:else}
            Copy
          {/if}</button
        >
      {/if}

      <textarea
        class="textarea textarea-bordered min-h-72 w-full text-xs"
        readonly
        value={convertedValue}
        placeholder=""
      ></textarea>
    </div>
  </div>
</main>
