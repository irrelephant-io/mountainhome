<script lang="ts">
    import { setContext } from "svelte";
    setContext('targetDpi', 300);
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" crossorigin="anonymous" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Donegal+One&family=Farsan&display=swap" rel="stylesheet">

<style>
/* latin-ext */
@font-face {
  font-family: 'Donegal One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/donegalone/v21/m8JWjfRYea-ZnFz6fsK9FaRMTm663A.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Donegal One';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/donegalone/v21/m8JWjfRYea-ZnFz6fsK9FaRCTm4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* gujarati */
@font-face {
  font-family: 'Farsan';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/farsan/v22/VEMwRoJ0vY_zsyzKxqWo9DU.woff2) format('woff2');
  unicode-range: U+0951-0952, U+0964-0965, U+0A80-0AFF, U+200C-200D, U+20B9, U+25CC, U+A830-A839;
}
/* vietnamese */
@font-face {
  font-family: 'Farsan';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/farsan/v22/VEMwRoJ0vY_zsyzK0qWo9DU.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Farsan';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/farsan/v22/VEMwRoJ0vY_zsyzK06Wo9DU.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Farsan';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/farsan/v22/VEMwRoJ0vY_zsyzK3aWo.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
<slot/>