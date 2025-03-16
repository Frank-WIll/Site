<template>
  <div class="hero-root">
    <div class="hero-container">
      <div class="hero-content">
        <div class="logo-container">
          <div class="logo-svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="700" height="700" class="logo-svg">
              <defs>
                <mask id="logo-mask">
                  <image id="img1" width="1824" height="1496" href="~/assets/img/logo-svg.svg" />
                </mask>
              </defs>
              <rect width="2000" height="2000" fill="white" mask="url(#logo-mask)" />
              <foreignObject x="0" y="0" width="2000" height="2000" mask="url(#logo-mask)">
                <div class="aurora aurora-inside">
                  <div class="aurora__item2" />
                  <div class="aurora__item2" />
                  <div class="aurora__item2" />
                  <div class="aurora__item2" />
                </div>
              </foreignObject>
            </svg>

            <!-- Aurora behind SVG -->
            <div class="aurora aurora-behind">
              <div class="aurora__item"></div>
              <div class="aurora__item"></div>
              <div class="aurora__item"></div>
              <div class="aurora__item"></div>
            </div>
          </div>
        </div>
        <div class="heropage">
        <UPageHero
          title="DETROIT'S DIGITAL POWERHOUSE IN DEVELOPMENT"
          description="AI | APPS | FULL STACK DEV | LIVE STREAMING | CONSULTANCY"
        >
          <template #bottom>
            <div class="scroll-btn-wrapper">
              <UButton
                icon="i-heroicons-chevron-down"
                color="white"
                variant="ghost"
                size="xl"
                aria-label="Scroll Down"
                class="scroll-btn"
                @click="scrollToNextSection"
              />
            </div>
          </template>
        </UPageHero>
        </div>
      </div>

      <div class="circles-container">
        <ul class="hero-circles">
          <li v-for="n in 10" :key="n"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollToNextSection = () => {
  const nextSection = document.querySelector('#clients-section, .clients-section, .custom-clients-section');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style scoped>
/* Logo container styles */
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 60vh; /* Limits logo size to avoid overflow */
  padding: 2rem;
  overflow: visible;
  position: relative;
  z-index: 10; /* Ensure logo is above other elements */
}

/* Responsive logo size */
.logo-svg {
  width: 700px;
  height: 700px;
}

@media (max-width: 768px) {
  .logo-svg {
    width: 450px;
    height: 450px;
  }
}

@media (max-width: 480px) {
  .logo-svg {
    width: 350px;
    height: 350px;
  }
}

.hero-logo {
  display: block;
  margin: 0 auto;
}

.hero-root {
  font-family: 'Exo', sans-serif;
  /* Contain all hero styles within this root */
  position: relative;
  isolation: isolate;
}

.heropage{
  margin-top: -15rem;
  position: relative;
  z-index: 20; /* Ensure heropage is above circles */
}

.hero-container {
  position: relative;
  height: 100vh;
  padding-top: 4rem; /* Increase top padding to prevent logo from clipping */
  box-sizing: border-box; /* Ensures padding doesn't increase container size */
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 1rem; /* Reduce bottom padding slightly */
  box-sizing: border-box;
}

.scroll-btn-wrapper {
  position: absolute;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 30; /* Ensure scroll button is clickable */
  pointer-events: auto; /* Ensure pointer events work */
}

.scroll-btn {
  padding: 10px;
  border-radius: 50%;
  transition: all 0.3s ease;
  animation: hero-bounce 2s infinite;
  cursor: pointer; /* Add cursor pointer for better UX */
  position: relative; /* Ensure position context for z-index */
  z-index: 30; /* High z-index to ensure clickability */
}

.scroll-btn:hover {
  transform: translateY(5px);
  background-color: rgba(255, 255, 255, 0.2);
  animation: none;
}

.circles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 5;
  pointer-events: none; /* Prevent circles from blocking interactions */
}

.hero-circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  pointer-events: none; /* Prevent circles from blocking interactions */
}

.hero-circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: hero-animate 25s linear infinite;
  bottom: -150px;
  pointer-events: none; /* Prevent circles from blocking interactions */
}

.hero-circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.hero-circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.hero-circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.hero-circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.hero-circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.hero-circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.hero-circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.hero-circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.hero-circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.hero-circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes hero-animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

@keyframes hero-bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.logo-svg-container {
  position: relative;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6)) drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3));
}

.aurora {
  position: absolute;
  inset: 0;
  pointer-events: none;
  mix-blend-mode: screen;
}

.aurora__item {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  animation: aurora-animation 10s infinite alternate ease-in-out;
}

.aurora__item:nth-child(1) { background-color: #ff00cc; animation-duration: 12s; }
.aurora__item:nth-child(2) { background-color: #3333ff; animation-duration: 8s; }
.aurora__item:nth-child(3) { background-color: #00ff99; animation-duration: 14s; }
.aurora__item:nth-child(4) { background-color: #0099ff; animation-duration: 5s; }

.aurora__item2 {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  animation: aurora-animation 10s infinite alternate ease-in-out;
}

.aurora__item:nth-child(1) { background-color: #ff00cc; animation-duration: 12s; }
.aurora__item:nth-child(2) { background-color: #3333ff; animation-duration: 8s; }
.aurora__item:nth-child(3) { background-color: #00ff99; animation-duration: 14s; }
.aurora__item:nth-child(4) { background-color: #0099ff; animation-duration: 5s; }


@keyframes aurora-animation {
  0% { transform: translate(-30%, -50%) scale(1); }
  50% { transform: translate(0%, 0%) scale(1.2); }
  100% { transform: translate(30%, 30%) scale(1); }
}

/* Consolidated scroll-btn-wrapper styles */
.scroll-btn-wrapper {
  position: absolute;
  bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>