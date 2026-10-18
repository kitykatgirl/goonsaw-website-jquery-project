const sawians = [
  [
    "Experiment",
    "- The original artificial hybrid, and the base for all other species. All others are in one way or another, related to it.<br />- Tend to be quite skinny, medium height.<br />- Average in just about every way. Intelligence, skill, endurance. Mentally sensitive in comparison.<br />- Their darker fur makes them better at hiding, though not by much. Supports their cowardly nature.<br />- Less social than others, and odd-minded. Can act a bit mischievous at times. Good at cracking jokes.<br />- Being the first to arrive, they are very high in numbers. Low ranking cannon fodder.<br />- Canine.<br /><br />The one we all come from?<br />Probably not natural.",
    "The base for almost all other species",
    100, /*aim*/
    100, /*reload*/
    100, /*move*/
    100, /*health*/
    100, /*lung*/
    80, /*notice*/
    100, /*jump*/
    100, /*run*/
    100, /*kick*/
    100, /*swim*/
  ],
  [
    "Orange",
    "- Reminiscent of an experiment in some ways, messed up in others.<br />- While born with four arms, many cut off two to reduce workload on the mind.<br />- Large claws, thick enough to tear into flesh. Animalistic in both social behavior and physical attributes.<br />- Bulkier than most, along with being quite tall and brutish. Clumsy and large.<br />- Mentally slow. Tend to be too brave and naive for their own good. Sweet at heart.<br />- Good at taking commands, and highly loyal, despite apparent stupidity.<br />- Canine.<br /><br />Slow and stupid brute.<br />Dangerously tough. Resilient.",
    "Tanky, but sluggish",
    75, /*aim*/
    75, /*reload*/
    86, /*move*/
    130, /*health*/
    114, /*lung*/
    110, /*notice*/
    100, /*jump*/
    100, /*run*/
    100, /*kick*/
    90, /*swim*/
  ],
  [
    "Milky",
    "- Some kind of aquatic experiment? Unsure on that.<br />- Excellent sleight of hand. Nimble and efficient with precise and calculated movement.<br />- Their unnatural dark eyes are vulnerable to the sky's changing colors. Wonder what causes that, actually...<br />- Weaker and frail, with a short stature and low weight. Even when physically overshadowed, their presence is respected and feared among peers.<br />- Strict and firm, yet respectful and fair. Logical thinkers, and fearsome tactical fighters.<br />- Emotionally awkward and close-minded, preferring to keep a professional mindset and personality.<br />- Canine.<br /><br />Good marksmen.<br />Usually have the best guns.",
    "Dexterous, but frail",
    135, /*aim*/
    150, /*reload*/
    114, /*move*/
    80, /*health*/
    83, /*lung*/
    100, /*notice*/
    100, /*jump*/
    100, /*run*/
    100, /*kick*/
    110, /*swim*/
  ],
  [
    "Leapy",
    "- Some sort of strange plant-like species.<br />- One of the lightest and fastest known species on land, able to infinitely roll-pounce and easily scale terrain.<br />- Plantigrade legs, rather than digitigrade. This doesn't hinder them whatsoever.<br />- They are hyper-regenerative, with a powerful and instant metabolism. Dangerous in combat!<br />- Competent at one-on-one combat and gun usage, but tactically braindead. They often just run in... blind.<br />- Egotistical and arrogant show-offs, acting cocky and dangerous for attention and fun.<br />- They often roughhouse with others and make terrible jokes. Despite their behavior, they have no real malice.<br />- Plant-Canine Hybrid<br /><br />Glass cannon.<br />Good to get a job done quick.",
    "Very agile, but very frail<br />Can infinitely chain roll pounces",
    110, /*aim*/
    110, /*reload*/
    136, /*move*/
    80, /*health*/
    77, /*lung*/
    100, /*notice*/
    130, /*jump*/
    100, /*run*/
    100, /*kick*/
    90, /*swim*/
  ]
];

const levels = [
  [
    "Basic Training",
    "I know this is your whole job, but you've been out of the game for a while now.<br />As such, I've found a spot that should be good for you to get back into the swing of things.<br />Resistance should be a non-factor, there's hardly anyone there.<br />Get used to your new tech, get the basics down.<br />A bit of practice doesn't hurt, after all.<br />- Z"
  ],
  [
    "Lock Break",
    "First proper job. Small outpost, relatively close-by. Only cannon fodder to be found there.<br />Do know that they'll be expecting you this time, after that first hit.<br />Training's over, expect some light resistance.<br />Shouldn't be much, but don't get careless.<br />- Z"
  ],
  [
    "Box Check",
    "A high up outpost gives some rivals a vantage point, making work hard for us.<br />Make your way in through the back, work your way up through the outpost, simple stuff.<br />Word is that they've got those orange ones around the place now. Bulky ones, might take a bit more punishment to put down than an experiment.<br />Good luck.<br />- Z"
  ],
  [
    "Green skies",
    "Weather's looking excessively green, but that's no excuse, we've got another job to do.<br />A few outposts around a small water body nearby. Hope you don't mind getting your feet wet.<br />That telekinesis of yours might help to get across the water a little quicker.<br />Resistance might be ramping up a bit now, take care out there.<br />- Z"
  ],
  [
    "Zigzag",
    "Connection established. I am looking forward to working with you, but we have a job already of high importance.<br />Some high-ranks of an opposing group have setup an encampment in an outpost that we were gearing up to take hold of.<br />Clear it out.<br />Those high ranks will be of the milky species. They have powerful weapons and high skill.<br />Do not disappoint us on your first job.<br />- Y"
  ],
  [
    "Crush Forces",
    "We have uncovered the entrance to an underground refinery under enemy control.<br />Scouting has shown us it is suffering from water failures, and is partially flooded. This is a good time for you to strike.<br />Enter the facility through the opened entrance and clear it out.<br />The refinery is still in full production, and as such crushing hazards are to be alert of.<br />Enemy force is estimated to be higher than typical. Another type of enemy has been spotted moving in and out of the facility.<br />Get to work.<br />- Y"
  ]
];

const positions = {
  c: 0,
  b: 1,
  a: 2,
  d: 3
};

const lineColors = {
  a: null,
  b: "rgba(59, 0, 155, 0.14)",
  c: "rgba(161, 0, 97, 0.14)",
  d: "rgba(160, 112, 0, 0.12)"
};

let currentScreen = "a";
let activeLineLayer = null;

let currentSaw = 0;
let currentLevel = 0;


function setSawian(id) {
  $("#saw").attr("src", `sawians/${id}.png`);
  $("#species").html(sawians[id][0]);
  $("#character").html(sawians[id][1]);
  $("#gp-2nd").html(sawians[id][2]);
  $("#aim").html(`Aim speed: ${sawians[id][3]}%`);
  $("#reload").html(`Reload speed: ${sawians[id][4]}%`);
  $("#move").html(`Move speed: ${sawians[id][5]}%`);
  $("#health").html(`Health: ${sawians[id][6]}`);
  $("#lung").html(`Lung capacity: ${sawians[id][7]}%`);
  $("#notice").html(`Noticability: ${sawians[id][8]}%`);
  $("#jump").html(`Jump force: ${sawians[id][9]}%`);
  $("#run").html(`Run force: ${sawians[id][10]}%`);
  $("#kick").html(`Kick damage: ${sawians[id][11]}%`);
  $("#swim").html(`Swim speed: ${sawians[id][12]}%`);
}


function setLevel(id) {
  $("#number").html(id + 1);
  $("#name-level").html(levels[id][0]);
  $("#middle-select-container").html(levels[id][1]);
}


function getScreenHeight() {
  const screen = document.querySelector("#screen-stack .screen");

  return screen
    ? screen.getBoundingClientRect().height
    : window.innerHeight;
}


function setupScanlines() {
  const viewport = document.querySelector("#viewport");

  if (!viewport) return null;

  let scanlines = document.querySelector("#scanlines");

  if (!scanlines) {
    scanlines = document.createElement("div");
    scanlines.id = "scanlines";
    viewport.prepend(scanlines);
  }

  let layers = scanlines.querySelectorAll(".scanline-color-layer");

  if (layers.length !== 2) {
    scanlines.innerHTML = "";

    const firstLayer = document.createElement("div");
    const secondLayer = document.createElement("div");

    firstLayer.className = "scanline-color-layer";
    secondLayer.className = "scanline-color-layer";

    scanlines.append(firstLayer, secondLayer);
    activeLineLayer = null;
  }

  return scanlines;
}


function updateScanlineColor(screen) {
  const scanlines = setupScanlines();

  if (!scanlines) return;

  const layers = scanlines.querySelectorAll(".scanline-color-layer");
  const color = lineColors[screen];

  if (!color) {
    layers.forEach(layer => {
      layer.style.opacity = "0";
    });

    activeLineLayer = null;
    return;
  }

  const nextLayer =
    activeLineLayer === layers[0]
      ? layers[1]
      : layers[0];

  const rootStyles = getComputedStyle(document.documentElement);

  const lineHeight = rootStyles
    .getPropertyValue("--line-height")
    .trim();

  const lineGap = rootStyles
    .getPropertyValue("--line-gap")
    .trim();

  nextLayer.style.transition = "none";
  nextLayer.style.opacity = "0";

  nextLayer.style.backgroundImage = `
    repeating-linear-gradient(
      to bottom,
      ${color} 0,
      ${color} ${lineHeight},
      transparent ${lineHeight},
      transparent calc(${lineHeight} + ${lineGap})
    )
  `;

  void nextLayer.offsetWidth;

  nextLayer.style.transition = "";
  nextLayer.style.opacity = "1";

  layers.forEach(layer => {
    if (layer !== nextLayer) {
      layer.style.opacity = "0";
    }
  });

  activeLineLayer = nextLayer;
}


function goToScreen(screen) {
  if (!Object.prototype.hasOwnProperty.call(positions, screen)) {
    return;
  }

  const stack = document.querySelector("#screen-stack");

  if (!stack) return;

  const screenHeight = getScreenHeight();
  const y = -(positions[screen] * screenHeight);

  const targetTransform = `translateY(${y}px)`;

  if (stack.style.transform !== targetTransform) {
    stack.style.transform = targetTransform;
  }

  updateScanlineColor(screen);

  currentScreen = screen;
}


$(document).on("click", "button[data-screen]", function () {
  const targetScreen = $(this).attr("data-screen");
  goToScreen(targetScreen);
});

$(document).on("keydown", function (event) {
  if (event.key == "Escape") {
    if (currentScreen === "b") {
      goToScreen("a");
    } else if (currentScreen === "c") {
      goToScreen("b");
    } else if (currentScreen === "d") {
      goToScreen("a");
    }
  } else if (event.key == "a") {
    if (currentScreen == "b") {
      if (currentLevel != 0) {
        currentLevel--;
        setLevel(currentLevel);
      } else {
        currentLevel = 5;
        setLevel(currentLevel);
      }
    } else if (currentScreen == "c") {
      if (currentSaw != 0) {
        currentSaw--;
        setSawian(currentSaw);
      } else {
        currentSaw = 3;
        setSawian(currentSaw);
      }
    }
  } else if (event.key == "d") {
    if (currentScreen == "b") {
      if (currentLevel != 5) {
        currentLevel++;
        setLevel(currentLevel);
      } else {
        currentLevel = 0;
        setLevel(currentLevel);
      }
    } else if (currentScreen == "c") {
      if (currentSaw != 3) {
        currentSaw++;
        setSawian(currentSaw);
      } else {
        currentSaw = 0;
        setSawian(currentSaw);
      }
    }
  }
});


let resizeFrame = null;

$(window).on("resize", function () {
  if (resizeFrame !== null) {
    cancelAnimationFrame(resizeFrame);
  }

  resizeFrame = requestAnimationFrame(function () {
    resizeFrame = null;

    const stack = document.querySelector("#screen-stack");

    if (!stack) return;

    const y = -(positions[currentScreen] * getScreenHeight());

    const previousTransition = stack.style.transition;

    stack.style.transition = "none";
    stack.style.transform = `translateY(${y}px)`;

    void stack.offsetHeight;

    stack.style.transition = previousTransition;
  });
});

$(document).ready(function () {
  setupScanlines();
  goToScreen("a");
  setSawian(0);
  setLevel(0);
});