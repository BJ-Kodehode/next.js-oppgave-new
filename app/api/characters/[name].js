export default function handler(req, res) {
  const { name } = req.query;

  const characterData = {
    gimli: {
      name: "Gimli",
      race: "Dwarf",
      description: "En modig dverg fra Ringenes Herre som elsker kamp og vennskap.",
    },
    legolas: {
      name: "Legolas",
      race: "Elf",
      description: "En elegant alv med utmerket bueskyting og stil.",
    },
  };

  const character = characterData[name.toLowerCase()];

  if (character) {
    res.status(200).json(character);
  } else {
    res.status(404).json({ error: "Character not found" });
  }
}
