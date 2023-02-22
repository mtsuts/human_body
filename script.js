

const humanBody = document.querySelector("#svg");

// arrays of spots on Human body

const humanBodySpots = [
  {
    text: "head",
    x: 98,
    y: 4,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "face",
    x: 100,
    y: 14,
    width: 100,
    height: 100,
    align: "right"
  },
  {
    text: "neck",
    x: 98,
    y: 25,
    width: 100,
    height: 100,
    align: ''
  },
  {
    text: "shoulder",
    x: 122,
    y: 36,
    width: 100,
    height: 100,
    align: 'right'
  },
  {
    text: "knee",
    x: 90,
    y: 150,
    width: 100,
    height: 100,
    align: 'right'
  },
  {
    text: "arm",
    x: 77,
    y: 60,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "upper limb",
    x: 125,
    y: 70,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "elbow",
    x: 75,
    y: 68,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "forearm",
    x: 127,
    y: 84,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "wrist",
    x: 68,
    y: 97,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "hand",
    x: 136,
    y: 105,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "lower limb",
    x: 113,
    y: 143,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "thigh",
    x: 90,
    y: 140,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "chest",
    x: 103,
    y: 50,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "leg",
    x: 90,
    y: 171,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "foot",
    x: 93,
    y: 196,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "toe",
    x: 110,
    y: 202,
    width: 100,
    height: 100,
    align: 'left'
  },
  {
    text: "toe",
    x: 111,
    y: 188,
    width: 100,
    height: 100,
    align: 'left'
  },
];

// creating function where I add paragraph and star for every spot content

humanBodySpots.forEach((d) => {
  const html = `<g transform="translate(${d.x}, ${d.y})">
    <g class="star" fill="white" stroke-width="0" transform="scale(0.2)" data-tippy-content="${d.text}">
    <circle r="9" fill="lightblue"> </circle>
    </g>
    </g>`;

  humanBody.insertAdjacentHTML("beforeend", html);
});


tippy('[data-tippy-content]', {
    trigger: 'click',
    theme: 'light',
});


