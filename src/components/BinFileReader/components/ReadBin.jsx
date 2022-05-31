const getCurrentSpacing = currentSpacing => {
  const spacing = "    ";
  let spacingPart = "";

  for (let i = 0; i < currentSpacing; i += 1) {
    spacingPart += spacing;
  }

  return spacingPart;
};

const readObject = (content, currentPosition, objectSpacing) => {
  let newPosition = currentPosition;

  const entryParts = content[currentPosition].split("=");
  const entryName = entryParts[0].replace(objectSpacing, "").replace(" ", "");
  const entryType = entryParts[1].replace(" {", "").replace(" ", "");

  while (content[newPosition] !== `${objectSpacing}}`) {
    newPosition += 1;
  }

  const entry = {
    name: entryName,
    start: currentPosition,
    type: entryType,
    end: newPosition
  };

  return { entryObject: entry, newIndex: newPosition };
};

const ReadBin = data => {
  const content = data.split("\r\n");
  const entries = [];
  let currentRow = 5;

  // TODO: Will be incremented once properties are read
  let currentSpacing = 1; // eslint-disable-line

  // Check if linked has strings
  if (content[3] !== "linked: list[string] = {}") {
    let counter = 4;

    while (content[counter] !== "}") {
      counter += 1;
    }

    currentRow = counter + 2;
  }

  for (let i = currentRow; i < content.length; i += 1) {
    const line = content[i];

    if (line[line.length - 1] === "{") {
      const { entryObject, newIndex } = readObject(
        content,
        i,
        getCurrentSpacing(currentSpacing)
      );

      i = newIndex;
      entries.push(entryObject);
    }
  }

  return entries;
};

export default ReadBin;
