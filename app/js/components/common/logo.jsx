import { h } from 'preact';

const Logo = () => (
  <svg
    className="logo"
    xmlns="http://www.w3.org/2000/svg"
    width="350"
    height="100"
    viewBox="0 0 720 230"
  >
    <defs>
      <clipPath id="a">
        <path d="M376.7 975v-20.8h-81.3v25.3c0 69.2-26.3 109.8-87.8 109.8s-88-40.6-88-108.7c0-172.5 258.2-189 258.2-405.3 0-116.4-56-192.2-173.5-192.2S32 459 32 576v44h80v-49c0-69.3 28.6-110 90-110 61.6 0 90.2 40.7 90.2 110 0 171.2-257 187.7-257 404 0 118.7 55 192.3 170.2 192.3 116.4 0 171.3-75.8 171.3-192.2z"/>
      </clipPath>
      <linearGradient id="b" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(346 0 0 -346 31.9 775.2)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="c">
        <path d="M625 736.7v-346h-85.7v769H625v-346h189v346h85.5v-769H814v346H625z"/>
      </clipPath>
      <linearGradient id="d" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(360.2 0 0 -360.2 539.3 775.2)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="e">
        <path d="M1173 619.2h171.3l-86.7 443.7-84.6-444zm-11-73.6l-29.6-154.8h-79l147 768.8h124.2l147-768.8H1386l-29.5 154.8H1162z"/>
      </clipPath>
      <linearGradient id="f" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(418.5 0 0 -418.5 1053.3 775.2)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="g">
        <path d="M1776 797c68 0 108.7 22 108.7 105.6v73.6c0 69.2-25.3 105.4-89 105.4h-83.4V797h63.7zm22 362.6c120.8 0 171.3-61.5 171.3-175.7v-63c0-85-29.7-138-95.6-159 70.3-21 96.7-78 96.7-161V483c0-34 1-66 15.4-92.2H1899c-10 22-14.3 41.7-14.3 93.3v121c0 87-40.6 115-112 115h-60.4V391h-85.7v769H1798z"/>
      </clipPath>
      <linearGradient id="h" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(359.2 0 0 -359.2 1626.6 775.2)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="i">
        <path d="M2419.6 819v-76.8h-187.8V468.7h230.6v-78H2146v769h316.4v-78h-230.6V819h187.8z"/>
      </clipPath>
      <linearGradient id="j" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(316.3 0 0 -316.3 2146.1 775.2)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="k">
        <path d="M4206.6 390.8v690.8H4065v78h369v-78h-141.7V390.8h-85.7z"/>
      </clipPath>
      <linearGradient id="l" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(369 0 0 -369 4064.9 775.2)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="m">
        <path d="M4854.6 819v-76.8h-187.8V468.7h230.6v-78H4581v769h316.4v-78h-230.6V819h187.8z"/>
      </clipPath>
      <linearGradient id="n" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(316.3 0 0 -316.3 4581.1 775.2)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="o">
        <path d="M5347.7 392h-82.3L5138 1003.5V390.8h-74.7v768.8H5183l126.3-614 122 614H5551V390.8h-81.4V1009l-122-617z"/>
      </clipPath>
      <linearGradient id="p" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(487.7 0 0 -487.7 5063.3 775.2)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="q">
        <path d="M5888 770.8c63.8 0 94.6 29.6 94.6 103.2v102.2c0 70.3-25.3 105.4-88 105.4h-82.3V770.8h75.8zm6.7 388.8c120.8 0 172.4-71.4 172.4-187.8v-92.3c0-122-57-185.6-179-185.6h-75V390h-86v769h168z"/>
      </clipPath>
      <linearGradient id="r" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(340.5 0 0 -340.5 5726.6 775.2)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="s">
        <path d="M6305.5 572c0-69.2 27.4-111 90-111 61.5 0 89 41.8 89 111v587.6h80.2V576.4c0-116.4-53.8-194.4-172.5-194.4-117.5 0-171.3 78-171.3 194.4v583.2h84V572z"/>
      </clipPath>
      <linearGradient id="t" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(343.8 0 0 -343.8 6220.9 770.8)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="u">
        <path d="M7070 975v-20.8h-81.4v25.3c0 69.2-26.3 109.8-87.8 109.8-61.6 0-88-40.6-88-108.7 0-172.5 258.2-189 258.2-405.3 0-116.4-56-192.2-173.5-192.2S6725 459 6725 576v44h80.2v-49c0-69.3 28.6-110 90-110 61.6 0 90 40.7 90 110 0 171.2-257 187.7-257 404 0 118.7 55 192.3 170.4 192.3 116.4 0 171.3-75.8 171.3-192.2z"/>
      </clipPath>
      <linearGradient id="v" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(346 0 0 -346 6725 775.2)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#237533"/>
      </linearGradient>
      <clipPath id="w">
        <path d="M3457.3 359.3c69-189.2-33.8-200.6-183.4-195.6-160 5.4-312 20.7-225 200.2 26 53-197-135-197-135l109-198h656s-66 478-119 478c-16 0-30-42-42-151"/>
      </clipPath>
      <clipPath id="x">
        <path d="M2852.2 509.7h765V31.4h-765v478.3z"/>
      </clipPath>
      <linearGradient id="y" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2852.2 270.6) scale(764.9)">
        <stop offset="0" stop-color="#060f14"/>
        <stop offset=".4" stop-color="#206831"/>
        <stop offset=".5" stop-color="#206831"/>
        <stop offset=".6" stop-color="#206831"/>
        <stop offset="1" stop-color="#010508"/>
      </linearGradient>
      <clipPath id="z">
        <path d="M2961.5 1471.2l-109.3-217.7s215-204 189-150.2c-87 179.5 66 164.4 225.6 169.7 149.5 5 306.2 42.5 237.2-146.8 49.8-475.2 113 345 113 345h-655.5z"/>
      </clipPath>
      <clipPath id="A">
        <path d="M2852.2 651h765v820.2h-765V651z"/>
      </clipPath>
      <linearGradient id="B" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(764.9 0 0 -764.9 2852.2 1061.1)">
        <stop offset="0" stop-color="#060f14"/>
        <stop offset=".4" stop-color="#206831"/>
        <stop offset=".5" stop-color="#206831"/>
        <stop offset=".6" stop-color="#206831"/>
        <stop offset="1" stop-color="#010508"/>
      </linearGradient>
      <clipPath id="C">
        <path d="M2943.8 1504.8v-.2h-78.6c-64.3.2-118.3-49.2-122.6-113.5-.4-6-.6-13-.6-20 0-128 871.3-1112 846.3-1274v-1c-6-24-28-42-53.4-42h-536c-26 0-48 18-54 43-8 52 75 221 193 432 23 42 16 96-20 127-50 42-123 26-152-29-127-245-225-438-225-482C2738 1 2872 1 2872 1h788s134.3 0 131 143c0 115-802 1221-802 1221-19.4 40 10 86.6 54.4 86.6h446c44.7 0 74-46.6 54.5-86.7l-148-269c-21-38-19-98 8-131 51-64 148-55 189 14 114 198 198 352 198 391 0 5-1 10-1 15-3 67-61 119-128 119h-719z"/>
      </clipPath>
      <clipPath id="D">
        <path d="M2738.7 1504.8h1056.5V0H2738.7v1504.8z"/>
      </clipPath>
      <linearGradient id="E" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2741.9 752.4) scale(1049.7)">
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="0" stop-color="#267f39"/>
        <stop offset="1" stop-color="#081c05"/>
      </linearGradient>
    </defs>
    <g clip-path="url(#a)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#b)" d="M376.7 975v-20.8h-81.3v25.3c0 69.2-26.3 109.8-87.8 109.8s-88-40.6-88-108.7c0-172.5 258.2-189 258.2-405.3 0-116.4-56-192.2-173.5-192.2S32 459 32 576v44h80v-49c0-69.3 28.6-110 90-110 61.6 0 90.2 40.7 90.2 110 0 171.2-257 187.7-257 404 0 118.7 55 192.3 170.2 192.3 116.4 0 171.3-75.8 171.3-192.2"/>
    </g>
    <g clip-path="url(#c)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#d)" d="M625 736.7v-346h-85.7v769H625v-346h189v346h85.5v-769H814v346H625"/>
    </g>
    <g clip-path="url(#e)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#f)" d="M1173 619.2h171.3l-86.7 443.7-84.6-444zm-11-73.6l-29.6-154.8h-79l147 768.8h124.2l147-768.8H1386l-29.5 154.8H1162"/>
    </g>
    <g clip-path="url(#g)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#h)" d="M1776 797c68 0 108.7 22 108.7 105.6v73.6c0 69.2-25.3 105.4-89 105.4h-83.4V797h63.7zm22 362.6c120.8 0 171.3-61.5 171.3-175.7v-63c0-85-29.7-138-95.6-159 70.3-21 96.7-78 96.7-161V483c0-34 1-66 15.4-92.2H1899c-10 22-14.3 41.7-14.3 93.3v121c0 87-40.6 115-112 115h-60.4V391h-85.7v769H1798"/>
    </g>
    <g clip-path="url(#i)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#j)" d="M2419.6 819v-76.8h-187.8V468.7h230.6v-78H2146v769h316.4v-78h-230.6V819h187.8"/>
    </g>
    <g clip-path="url(#k)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#l)" d="M4206.6 390.8v690.8H4065v78h369v-78h-141.7V390.8h-85.7"/>
    </g>
    <g clip-path="url(#m)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#n)" d="M4854.6 819v-76.8h-187.8V468.7h230.6v-78H4581v769h316.4v-78h-230.6V819h187.8"/>
    </g>
    <g clip-path="url(#o)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#p)" d="M5347.7 392h-82.3L5138 1003.5V390.8h-74.7v768.8H5183l126.3-614 122 614H5551V390.8h-81.4V1009l-122-617"/>
    </g>
    <g clip-path="url(#q)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#r)" d="M5888 770.8c63.8 0 94.6 29.6 94.6 103.2v102.2c0 70.3-25.3 105.4-88 105.4h-82.3V770.8h75.8zm6.7 388.8c120.8 0 172.4-71.4 172.4-187.8v-92.3c0-122-57-185.6-179-185.6h-75V390h-86v769h168"/>
    </g>
    <g clip-path="url(#s)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#t)" d="M6305.5 572c0-69.2 27.4-111 90-111 61.5 0 89 41.8 89 111v587.6h80.2V576.4c0-116.4-53.8-194.4-172.5-194.4-117.5 0-171.3 78-171.3 194.4v583.2h84V572"/>
    </g>
    <g clip-path="url(#u)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <path fill="url(#v)" d="M7070 975v-20.8h-81.4v25.3c0 69.2-26.3 109.8-87.8 109.8-61.6 0-88-40.6-88-108.7 0-172.5 258.2-189 258.2-405.3 0-116.4-56-192.2-173.5-192.2S6725 459 6725 576v44h80.2v-49c0-69.3 28.6-110 90-110 61.6 0 90 40.7 90 110 0 171.2-257 187.7-257 404 0 118.7 55 192.3 170.4 192.3 116.4 0 171.3-75.8 171.3-192.2"/>
    </g>
    <g clip-path="url(#w)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <g clip-path="url(#x)">
        <path fill="url(#y)" d="M2961 31v1h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v3h1v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h2v1h1v1h1v1h2v1h1v1h2v1h1v1h2v1h1v1h2v1h1v1h1v1h2v1h1v1h2v1h2v1h1v1h2v1h1v1h2v1h1v1h2v1h2v1h2v1h1v1h2v1h2v1h2v1h3v1h2v1h7v-1h1v-5h-1v-3h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-3h-1v-2h-1v-3h-1v-2h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-4h-1v-4h-1v-4h-1v-4h-1v-6h-1v-7h-1v-27h1v-6h1v-4h1v-4h1v-3h1v-2h1v-3h1v-2h1v-2h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v-1h1v-1h1v-1h2v-1h1v-1h2v-1h1v-1h2v-1h1v-1h2v-1h2v-1h2v-1h1v-1h2v-1h2v-1h2v-1h3v-1h2v-1h2v-1h3v-1h2v-1h3v-1h3v-1h3v-1h3v-1h3v-1h4v-1h3v-1h4v-1h4v-1h5v-1h4v-1h5v-1h5v-1h6v-1h6v-1h7v-1h8v-1h8v-1h9v-1h11v-1h13v-1h15v-1h18v-1h25v-1h37v-1h26v1h26v1h13v1h9v1h8v1h6v1h5v1h5v1h4v1h4v1h4v1h3v1h3v1h3v1h2v1h3v1h2v1h2v1h2v1h2v1h2v1h2v1h1v1h2v1h2v1h1v1h2v1h1v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h1v1h1v1h1v2h1v1h1v1h1v1h1v2h1v1h1v2h1v2h1v1h1v2h1v3h1v2h1v2h1v3h1v3h1v4h1v4h1v6h1v11h1v13h-1v12h-1v8h-1v6h-1v6h-1v4h-1v5h-1v4h-1v4h-1v4h-1v4h-1v3h-1v4h-1v3h-1v3h-1v3h-1v3h-1v3h-1v3h-1v3h-1v3h-1v3h-1v8h1v9h1v9h1v8h1v8h1v7h1v7h1v6h1v7h1v6h1v5h1v6h1v5h1v5h1v5h1v4h1v4h1v4h1v4h1v3h1v3h1v3h1v3h1v3h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1h1v1h1v1h1v1h1v1h2v1h2v1h6v-1h3v-1h1v-1h1v-1h1v-1h2v-2h1v-1h1v-1h1v-1h1v-2h1v-1h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-3h1v-2h1v-2h1v-2h1v-3h1v-2h1v-3h1v-2h1v-3h1v-3h1v-2h1v-3h1v-3h1v-3h1v-3h1v-3h1v-4h1v-3h1v-3h1v-3h1v-4h1v-3h1v-4h1v-3h1v-4h1v-4h1v-4h1v-3h1v-4h1v-4h1v-4h1v-4h1v-4h1v-4h1v-4h1v-5h1v-4h1v-4h1v-5h1v-4h1v-5h1v-4h1v-5h1v-4h1v-5h1v-5h1v-4h1v-5h1v-5h1v-5h1v-5h1v-5h1v-5h1v-5h1v-5h1v-5h1v-5h1v-6h1v-5h1v-5h1v-5h1v-6h1v-5h1v-6h1v-5h1v-6h1v-6h1v-5h1v-6h1v-6h1v-5h1v-6h1v-6h1v-6h1v-6h1v-6h1v-6h1v-6h1v-6h1v-7h1v-6h1v-6h1v-6h1v-7h1v-6h1v-7h1v-6h1v-7h1v-6h1v-7h1v-7h1v-6h1v-7h1v-7h1v-7h1v-7h1v-2"/>
      </g>
    </g>
    <g clip-path="url(#z)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <g clip-path="url(#A)">
        <path fill="url(#B)" d="M3536 978v1h-1v1h-2v1h-1v2h-1v2h-1v1h-1v2h-1v2h-1v3h-1v3h-1v3h-1v3h-1v3h-1v4h-1v4h-1v4h-1v5h-1v4h-1v6h-1v5h-1v6h-1v6h-1v6h-1v7h-1v7h-1v7h-1v7h-1v8h-1v9h-1v9h-1v8h-1v13h1v3h1v2h1v3h1v3h1v3h1v4h1v3h1v4h1v3h1v4h1v5h1v4h1v5h1v7h1v7h1v25h-1v6h-1v5h-1v3h-1v3h-1v2h-1v3h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-2v1h-1v1h-2v1h-2v1h-2v1h-2v1h-2v1h-3v1h-3v1h-3v1h-3v1h-4v1h-4v1h-4v1h-6v1h-7v1h-10v1h-17v1h-31v-1h-25v-1h-18v-1h-17v-1h-16v-1h-18v-1h-23v-1h-38v-1h-41v-1h-26v-1h-17v-1h-13v-1h-10v-1h-9v-1h-6v-1h-7v-1h-5v-1h-5v-1h-4v-1h-5v-1h-3v-1h-4v-1h-3v-1h-3v-1h-3v-1h-2v-1h-3v-1h-2v-1h-2v-1h-3v-1h-1v-1h-2v-1h-2v-1h-2v-1h-1v-1h-2v-1h-1v-1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-3h-1v-2h-1v-3h-1v-4h-1v-5h-1v-27h1v-6h1v-5h1v-4h1v-4h1v-4h1v-3h1v-3h1v-3h1v-3h1v-3h1v-3h1v-2h1v-3h1v-2h1v-3h1v-2h1v-3h1v-2h1v-2h1v-2h1v-2h1v-3h1v-2h1v-2h1v-2h1v-4h1v-3h-1v-1h-6v1h-2v1h-2v1h-2v1h-1v1h-2v1h-1v1h-2v1h-1v1h-2v1h-1v1h-2v1h-1v1h-1v1h-2v1h-1v1h-1v1h-2v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v4h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1h657v-2h-1v-13h-1v-12h-1v-12h-1v-11h-1v-12h-1v-11h-1v-11h-1v-11h-1v-10h-1v-11h-1v-10h-1v-11h-1v-10h-1v-10h-1v-9h-1v-10h-1v-9h-1v-10h-1v-9h-1v-9h-1v-9h-1v-9h-1v-9h-1v-8h-1v-8h-1v-9h-1v-8h-1v-8h-1v-8h-1v-8h-1v-7h-1v-7h-1v-8h-1v-7h-1v-7h-1v-7h-1v-7h-1v-7h-1v-6h-1v-6h-1v-6h-1v-7h-1v-5h-1v-6h-1v-6h-1v-6h-1v-5h-1v-5h-1v-5h-1v-5h-1v-5h-1v-4h-1v-5h-1v-4h-1v-5h-1v-4h-1v-3h-1v-4h-1v-4h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-1h-1v-1h-1v-2h-3v-1"/>
      </g>
    </g>
    <g clip-path="url(#C)" transform="matrix(.1 0 0 -.1 0 188.1)">
      <g clip-path="url(#D)">
        <path fill="url(#E)" d="M2860 0v1h-7v1h-5v1h-5v1h-4v1h-4v1h-3v1h-3v1h-3v1h-3v1h-2v1h-3v1h-2v1h-2v1h-2v1h-2v1h-3v1h-2v1h-1v1h-2v1h-1v1h-2v1h-2v1h-1v1h-2v1h-1v1h-2v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v3h-1v3h-1v3h-1v3h-1v3h-1v3h-1v5h-1v6h-1v6h-1v6h-1v25h-1v2h1v9h1v4h1v4h1v4h1v4h1v3h1v3h1v3h1v3h1v3h1v3h1v2h1v3h1v3h1v2h1v3h1v3h1v2h1v2h1v3h1v2h1v3h1v2h1v3h1v2h1v2h1v3h1v2h1v2h1v3h1v2h1v2h1v3h1v2h1v2h1v2h1v3h1v2h1v2h1v2h1v3h1v2h1v2h1v2h1v2h1v3h1v2h1v2h1v2h1v2h1v2h1v3h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v3h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v3h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v3h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v1h1v2h1v2h1v1h1v1h1v2h1v1h1v1h1v1h1v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h1v1h2v1h1v1h2v1h1v1h2v1h1v1h2v1h2v1h2v1h2v1h2v1h3v1h2v1h3v1h3v1h3v1h4v1h5v1h7v1h23v-1h6v-1h6v-1h3v-1h3v-1h4v-1h2v-1h2v-1h3v-1h2v-1h2v-1h2v-1h2v-1h1v-1h2v-1h2v-1h1v-1h2v-1h1v-1h1v-1h2v-1h1v-1h1v-1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-2h1v-2h1v-3h1v-2h1v-2h1v-3h1v-3h1v-4h1v-4h1v-5h1v-11h1v-14h-1v-10h-1v-5h-1v-4h-1v-3h-1v-4h-1v-3h-1v-3h-1v-2h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-3h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-3h-1v-2h-1v-3h-1v-3h-1v-2h-1v-3h-1v-2h-1v-3h-1v-2h-1v-3h-1v-3h-1v-3h-1v-2h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-4h-1v-3h-1v-3h-1v-4h-1v-3h-1v-5h-1v-4h-1v-5h-1v-6h-1v-8h-1v-8h1v-7h1v-3h1v-3h1v-2h1v-2h1v-2h1v-2h1v-1h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-1h2v-1h1v-1h1v-1h1v-1h1v-1h2v-1h1v-1h2v-1h1v-1h2v-1h2v-1h2v-1h3v-1h3v-1h4v-1h8v-1h542v1h8v1h4v1h3v1h2v1h3v1h2v1h2v1h1v1h2v1h1v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h1v1h1v1h1v2h1v2h1v2h1v2h1v3h1v3h1v3h1v18h-1v5h-1v5h-1v4h-1v3h-1v4h-1v3h-1v3h-1v3h-1v3h-1v2h-1v3h-1v2h-1v3h-1v2h-1v3h-1v2h-1v2h-1v3h-1v2h-1v2h-1v2h-1v2h-1v3h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v1h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v2h-1v3h-1v2h-1v2h-1v3h-1v2h-1v3h-1v3h-1v3h-1v3h-1v4h-1v8h-1v3h1v23h1v8h1v5h1v5h1v4h1v3h1v3h1v3h1v2h1v3h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v1h1v2h1v1h1v2h1v1h1v2h1v1h1v1h1v1h1v1h1v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h2v1h1v1h2v1h1v1h2v1h2v1h1v1h2v1h2v1h2v1h2v1h2v1h3v1h2v1h3v1h3v1h3v1h3v1h4v1h4v1h6v1h7v1h825v-1h7v-1h6v-1h4v-1h4v-1h3v-1h3v-1h3v-1h3v-1h3v-1h2v-1h2v-1h2v-1h3v-1h2v-1h1v-1h2v-1h2v-1h2v-1h1v-1h2v-1h1v-1h2v-1h1v-1h2v-1h1v-1h2v-1h1v-1h1v-1h1v-1h1v-1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h1v-1h1v-1h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-2h1v-2h1v-1h1v-3h1v-2h1v-2h1v-3h1v-2h1v-3h1v-4h1v-3h1v-4h1v-5h1v-5h1v-10h1v-23h-1v-6h-1v-4h-1v-4h-1v-4h-1v-3h-1v-2h-1v-3h-1v-3h-1v-3h-1v-2h-1v-3h-1v-2h-1v-3h-1v-3h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-3h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2h-1v-1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-1v-1h-1v-1h-2v-1h-1v-1h-2v-1h-1v-1h-2v-1h-1v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-3v-1h-3v-1h-2v-1h-3v-1h-4v-1h-4v-1h-4v-1h-7v-1h-14v-1h-8v1h-10v1h-6v1h-4v1h-5v1h-3v1h-3v1h-3v1h-3v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-1v1h-2v1h-1v1h-2v1h-1v1h-2v1h-1v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v3h-1v2h-1v2h-1v3h-1v2h-1v3h-1v3h-1v4h-1v4h-1v4h-1v5h-1v8h-1v32h1v7h1v6h1v4h1v4h1v3h1v4h1v2h1v3h1v2h1v2h1v3h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v2h1v2h1v3h1v3h1v4h1v7h1v10h-1v6h-1v4h-1v4h-1v2h-1v3h-1v2h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v2h-2v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-2v1h-1v1h-2v1h-2v1h-2v1h-3v1h-3v1h-3v1h-4v1h-9v1h-450v-1h-9v-1h-5v-1h-3v-1h-3v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-1v-1h-2v-1h-1v-1h-1v-1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-2h-1v-3h-1v-2h-1v-3h-1v-4h-1v-5h-1v-17h1v-5h1v-4h1v-2h1v-3h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-2h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-2h1v-2h1v-2h1v-2h1v-2h1v-2h1v-2h1v-2h1v-2h1v-3h1v-2h1v-2h1v-2h1v-2h1v-3h1v-2h1v-2h1v-3h1v-2h1v-3h1v-2h1v-3h1v-3h1v-3h1v-3h1v-4h1v-5h1v-23h-1v-13h-1v-6h-1v-6h-1v-6h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-2h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-1v-1h-1v-1h-1v-1h-2v-1h-1v-1h-1v-1h-2v-1h-2v-1h-1v-1h-2v-1h-2v-1h-1v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-3v-1h-3V9h-2V8h-3V7h-3V6h-4V5h-3V4h-4V3h-5V2h-5V1h-7V0"/>
      </g>
    </g>
  </svg>
);

export default Logo;
