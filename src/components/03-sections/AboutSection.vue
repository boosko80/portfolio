<template>
  <section
    className="relative flex flex-col justify-center min-h-screen mx-auto md:text-lg pl-4 pr-12 md:pr-4 max-w-screen-sm md:max-w-screen-md"
  >
    <span id="about" class="absolute top-0" />
    <h2 class="flex items-baseline mb-8 text-xl font-bold text-primary">
      A propos de moi
      <span
        class="flex-grow h-px ml-4 bg-gradient-to-r from-primary to-secondary"
      />
    </h2>
    <p class="mb-4 sm:mb-2">Salut ! Moi c'est Wesley.</p>
    <p class="mb-4 sm:mb-2">
      Issu d'une formation en technicien informatique, j'ai 2 ans d'expérience
      dans un
      <a
        class="text-primary"
        href="https://www.peninsula.com/fr/paris/5-star-luxury-hotel-16th-arrondissement"
      >
        palace parisien
      </a>
      en technicien IT / ELV. J'ai eu aussi l'opportunité d'effectuer des stages
      en tant que IT Security Compliance Officer chez
      <a class="text-primary" href="https://www2.deloitte.com/be/en.html">
        un des Big Four
      </a>
      et en
      <a class="text-primary" href="https://www.akuino.net/">
        développement logiciel
      </a>
      (IoT / Microcontrôlleur).
    </p>
    <p class="mb-4 sm:mb-2">
      Je concrétise ma reconversion dans un domaine qui me passionne, le
      développement web ! Pour celà, j'ai validé avec succès le Titre
      professionnel développeur web et web mobile (Niveau 5) avec le projet
      personnel Collab'Or ainsi que la certification
      <a
        class="text-primary"
        href="https://directory.opquast.com/fr/certificat/CXM69Y/"
      >
        Opquast.
      </a>
    </p>
    <p class="mb-4 sm:mb-2">
      Voici une liste non-exhaustive des technologies avec lesquelles je
      travaille régulièrement. Je reste ouvert aux autres technologies et les
      apprendre ne me fait pas peur ! (Sauf les esolang)
    </p>
    <ul class="grid grid-cols-2">
      <li class="flex gap-2" v-for="techno in technos" :key="techno">
        <triangle-bullet />
        {{ techno }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import TriangleBullet from "../01-atoms/TriangleBullet.vue";
const technos = [
  "JavaScript (ES6+)",
  "TypeScript",
  "Vue",
  "React",
  "Node.js",
  ". . .",
];
</script>
