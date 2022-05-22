<template>
  <Head>
    <meta
      type='description'
      content='Information about my app'
      head-key='description'
    >
  </Head>

  <section class='p-6 bg-gray-200'>
    <header class='flex justify-between'>
      <div class='flex items-center'>
        <h2 class='font-bold text-lg'>
          My App
        </h2>
      </div>
    </header>
  </section>

  <section class='p-6'>
    <div class='max-w-3xl mx-auto'>
      <slot />
    </div>
  </section>
</template>

<script>
export default {};
</script>
