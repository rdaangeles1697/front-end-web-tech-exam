// INIT assets markup
function assetsTemplate(heading, description, path) {
  return `
    <div class="asset">
      <img src="./src/images/${path}" alt="" />

      <div class="overlay overlayLeft">
        <div>
          <h4>${heading}</h4>
          <p>${description}</p>
        </div>
      </div>
    </div>
  
        `;
}

// Get assets
function getAssets() {
  const assetElement = document.querySelector(".article__assetwrapper");

  for (var asset in this) {
    assetElement.innerHTML += assetsTemplate(
      this[asset].heading,
      this[asset].description,
      this[asset].path
    );
  }
}

// Call function and pass value as this
getAssets.call({
  man: {
    heading: "Man Image",
    description: "Image of a man.",
    path: "man.jpg",
  },
  wizard: {
    heading: "Wizard Image",
    description: "Image of a wizard.",
    path: "wizard.jpg",
  },
  beast: {
    heading: "Beast Image",
    description: "Image of a beast.",
    path: "beast.jpg",
  },
});
