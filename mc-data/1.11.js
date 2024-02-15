(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/attributes.json
  var require_attributes = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/attributes.json"(exports, module) {
      module.exports = [
        {
          name: "maxHealth",
          resource: "generic.maxHealth",
          default: 20,
          min: 1,
          max: 1024
        },
        {
          name: "followRange",
          resource: "generic.followRange",
          default: 32,
          min: 0,
          max: 2048
        },
        {
          name: "knockbackResistance",
          resource: "generic.knockbackResistance",
          default: 0,
          min: 0,
          max: 1
        },
        {
          name: "movementSpeed",
          resource: "generic.movementSpeed",
          default: 0.7,
          min: 0,
          max: 1024
        },
        {
          name: "attackDamage",
          resource: "generic.attackDamage",
          default: 2,
          min: 0,
          max: 2048
        },
        {
          name: "horseJumpStrength",
          resource: "horse.jumpStrength",
          default: 0.7,
          min: 0,
          max: 2
        },
        {
          name: "zombieSpawnReinforcements",
          resource: "zombie.spawnReinforcements",
          default: 0,
          min: 0,
          max: 1
        },
        {
          name: "attackSpeed",
          resource: "generic.attackSpeed",
          default: 4,
          min: 0,
          max: 1024
        },
        {
          name: "flyingSpeed",
          resource: "generic.flyingSpeed",
          default: 0.4,
          min: 0,
          max: 1024
        },
        {
          name: "attackKnockback",
          resource: "generic.attackKnockback",
          default: 0,
          min: 0,
          max: 5
        },
        {
          name: "armorHealth",
          resource: "generic.armor",
          default: 0,
          min: 0,
          max: 30
        },
        {
          name: "armorToughness",
          resource: "generic.armorToughness",
          default: 0,
          min: 0,
          max: 20
        },
        {
          name: "luck",
          resource: "generic.luck",
          default: 0,
          min: -1024,
          max: 1024
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/blocks.json
  var require_blocks = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/blocks.json"(exports, module) {
      module.exports = [
        {
          id: 0,
          displayName: "Air",
          name: "air",
          hardness: 0,
          stackSize: 0,
          diggable: true,
          boundingBox: "empty",
          drops: [
            {
              drop: 0
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 1,
          displayName: "Stone",
          name: "stone",
          hardness: 1.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 4
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 2,
          displayName: "Grass Block",
          name: "grass",
          hardness: 0.6,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          drops: [
            {
              drop: {
                id: 3,
                metadata: 0
              }
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.6
        },
        {
          id: 3,
          displayName: "Dirt",
          name: "dirt",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          variations: [
            {
              metadata: 0,
              displayName: "Dirt"
            },
            {
              metadata: 1,
              displayName: "Coarse Dirt"
            },
            {
              metadata: 2,
              displayName: "Podzol"
            }
          ],
          drops: [
            {
              drop: 3
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.5
        },
        {
          id: 4,
          displayName: "Cobblestone",
          name: "cobblestone",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 4
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 5,
          displayName: "Wood Planks",
          name: "planks",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          variations: [
            {
              metadata: 0,
              displayName: "Oak Wood Planks"
            },
            {
              metadata: 1,
              displayName: "Spruce Wood Planks"
            },
            {
              metadata: 2,
              displayName: "Birch Wood Planks"
            },
            {
              metadata: 3,
              displayName: "Jungle Wood Planks"
            },
            {
              metadata: 4,
              displayName: "Acacia Wood Planks"
            },
            {
              metadata: 5,
              displayName: "Dark Oak Wood Planks"
            }
          ],
          drops: [
            {
              drop: 5
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3
        },
        {
          id: 6,
          displayName: "Sapling",
          name: "sapling",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 6
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 7,
          displayName: "Bedrock",
          name: "bedrock",
          hardness: null,
          stackSize: 64,
          diggable: false,
          boundingBox: "block",
          drops: [],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 36e5
        },
        {
          id: 8,
          displayName: "Water",
          name: "flowing_water",
          hardness: 100,
          stackSize: 0,
          diggable: false,
          boundingBox: "empty",
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 2,
          resistance: 100
        },
        {
          id: 9,
          displayName: "Stationary Water",
          name: "water",
          hardness: 100,
          stackSize: 0,
          diggable: false,
          boundingBox: "empty",
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 2,
          resistance: 100
        },
        {
          id: 10,
          displayName: "Lava",
          name: "flowing_lava",
          hardness: 100,
          stackSize: 0,
          diggable: false,
          boundingBox: "empty",
          drops: [],
          transparent: true,
          emitLight: 15,
          filterLight: 0,
          resistance: 100
        },
        {
          id: 11,
          displayName: "Stationary Lava",
          name: "lava",
          hardness: 100,
          stackSize: 0,
          diggable: false,
          boundingBox: "empty",
          drops: [],
          transparent: true,
          emitLight: 15,
          filterLight: 0,
          resistance: 100
        },
        {
          id: 12,
          displayName: "Sand",
          name: "sand",
          hardness: 0.5,
          stackSize: 0,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          variations: [
            {
              metadata: 0,
              displayName: "Sand"
            },
            {
              metadata: 1,
              displayName: "Red sand"
            }
          ],
          drops: [
            {
              drop: 12
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.5
        },
        {
          id: 13,
          displayName: "Gravel",
          name: "gravel",
          hardness: 0.6,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          drops: [
            {
              drop: 13,
              minCount: 0.9
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.6
        },
        {
          id: 14,
          displayName: "Gold Ore",
          name: "gold_ore",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "278": true
          },
          drops: [
            {
              drop: 14
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3
        },
        {
          id: 15,
          displayName: "Iron Ore",
          name: "iron_ore",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "274": true,
            "278": true
          },
          drops: [
            {
              drop: 15
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3
        },
        {
          id: 16,
          displayName: "Coal Ore",
          name: "coal_ore",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: {
                id: 263,
                metadata: 0
              }
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3
        },
        {
          id: 17,
          displayName: "Wood",
          name: "log",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 17
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 18,
          displayName: "Leaves",
          name: "leaves",
          hardness: 0.2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "plant",
          variations: [
            {
              metadata: 0,
              displayName: "Oak Leaves"
            },
            {
              metadata: 1,
              displayName: "Spruce Leaves"
            },
            {
              metadata: 2,
              displayName: "Birch Leaves"
            },
            {
              metadata: 3,
              displayName: "Jungle Leaves"
            },
            {
              metadata: 4,
              displayName: "Oak Leaves (no decay)"
            },
            {
              metadata: 5,
              displayName: "Spruce Leaves (no decay)"
            },
            {
              metadata: 6,
              displayName: "Birch Leaves (no decay)"
            },
            {
              metadata: 7,
              displayName: "Jungle Leaves (no decay)"
            },
            {
              metadata: 8,
              displayName: "Oak Leaves (check decay)"
            },
            {
              metadata: 9,
              displayName: "Spruce Leaves (check decay)"
            },
            {
              metadata: 10,
              displayName: "Birch Leaves (check decay)"
            },
            {
              metadata: 11,
              displayName: "Jungle Leaves (check decay)"
            },
            {
              metadata: 12,
              displayName: "Oak Leaves (no decay and check decay)"
            },
            {
              metadata: 13,
              displayName: "Spruce Leaves (no decay and check decay)"
            },
            {
              metadata: 14,
              displayName: "Birch Leaves (no decay and check decay)"
            },
            {
              metadata: 15,
              displayName: "Jungle Leaves (no decay and check decay)"
            }
          ],
          drops: [
            {
              drop: 6,
              minCount: 0,
              maxCount: 1
            },
            {
              drop: 260,
              minCount: 0,
              maxCount: 1
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 19,
          displayName: "Sponge",
          name: "sponge",
          hardness: 0.6,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          variations: [
            {
              metadata: 0,
              displayName: "Sponge"
            },
            {
              metadata: 1,
              displayName: "Wet Sponge"
            }
          ],
          drops: [
            {
              drop: 19
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.6
        },
        {
          id: 20,
          displayName: "Glass",
          name: "glass",
          hardness: 0.3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.3
        },
        {
          id: 21,
          displayName: "Lapis Lazuli Ore",
          name: "lapis_ore",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "274": true,
            "278": true
          },
          drops: [
            {
              drop: {
                id: 351,
                metadata: 4
              },
              minCount: 4,
              maxCount: 8
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3
        },
        {
          id: 22,
          displayName: "Lapis Lazuli Block",
          name: "lapis_block",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "274": true,
            "278": true
          },
          drops: [
            {
              drop: 22
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3
        },
        {
          id: 23,
          displayName: "Dispenser",
          name: "dispenser",
          hardness: 3.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 23
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3.5
        },
        {
          id: 24,
          displayName: "Sandstone",
          name: "sandstone",
          hardness: 0.8,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Sandstone"
            },
            {
              metadata: 1,
              displayName: "Chiseled sandstone"
            },
            {
              metadata: 2,
              displayName: "Smooth sandstone"
            }
          ],
          drops: [
            {
              drop: 24
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.8
        },
        {
          id: 25,
          displayName: "Note Block",
          name: "noteblock",
          hardness: 0.8,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 25
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.8
        },
        {
          id: 26,
          displayName: "Bed",
          name: "bed",
          hardness: 0.2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 26
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.2
        },
        {
          id: 27,
          displayName: "Powered Rail",
          name: "golden_rail",
          hardness: 0.7,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "rock",
          drops: [
            {
              drop: 27
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.7
        },
        {
          id: 28,
          displayName: "Detector Rail",
          name: "detector_rail",
          hardness: 0.7,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "rock",
          drops: [
            {
              drop: 28
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.7
        },
        {
          id: 29,
          displayName: "Sticky Piston",
          name: "sticky_piston",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 29
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 30,
          displayName: "Cobweb",
          name: "web",
          hardness: 4,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "web",
          harvestTools: {
            "267": true,
            "268": true,
            "272": true,
            "276": true,
            "283": true,
            "359": true
          },
          drops: [
            {
              drop: 287
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 4
        },
        {
          id: 31,
          displayName: "Grass",
          name: "tallgrass",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "dirt",
          variations: [
            {
              metadata: 0,
              displayName: "Shrub"
            },
            {
              metadata: 1,
              displayName: "Tall Grass"
            },
            {
              metadata: 2,
              displayName: "Fern"
            }
          ],
          drops: [
            {
              drop: 295,
              minCount: 0,
              maxCount: 1
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 32,
          displayName: "Dead Bush",
          name: "deadbush",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 280,
              minCount: 0,
              maxCount: 2
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 33,
          displayName: "Piston",
          name: "piston",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 33
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 34,
          displayName: "Piston Head",
          name: "piston_head",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 34
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 35,
          displayName: "Wool",
          name: "wool",
          hardness: 0.8,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wool",
          variations: [
            {
              metadata: 0,
              displayName: "White Wool"
            },
            {
              metadata: 1,
              displayName: "Orange Wool"
            },
            {
              metadata: 2,
              displayName: "Magenta Wool"
            },
            {
              metadata: 3,
              displayName: "Light blue Wool"
            },
            {
              metadata: 4,
              displayName: "Yellow Wool"
            },
            {
              metadata: 5,
              displayName: "Lime Wool"
            },
            {
              metadata: 6,
              displayName: "Pink Wool"
            },
            {
              metadata: 7,
              displayName: "Gray Wool"
            },
            {
              metadata: 8,
              displayName: "Light gray Wool"
            },
            {
              metadata: 9,
              displayName: "Cyan Wool"
            },
            {
              metadata: 10,
              displayName: "Purple Wool"
            },
            {
              metadata: 11,
              displayName: "Blue Wool"
            },
            {
              metadata: 12,
              displayName: "Brown Wool"
            },
            {
              metadata: 13,
              displayName: "Green Wool"
            },
            {
              metadata: 14,
              displayName: "Red Wool"
            },
            {
              metadata: 15,
              displayName: "Black Wool"
            }
          ],
          drops: [
            {
              drop: 35
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.8
        },
        {
          id: 36,
          displayName: "Block moved by Piston",
          name: "piston_extension",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          drops: [
            {
              drop: 36
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 37,
          displayName: "Dandelion",
          name: "yellow_flower",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 37
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 38,
          displayName: "Poppy",
          name: "red_flower",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          variations: [
            {
              metadata: 0,
              displayName: "Poppy"
            },
            {
              metadata: 1,
              displayName: "Blue Orchid"
            },
            {
              metadata: 2,
              displayName: "Allium"
            },
            {
              metadata: 3,
              displayName: "Azure Bluet"
            },
            {
              metadata: 4,
              displayName: "Red Tulip"
            },
            {
              metadata: 5,
              displayName: "Orange Tulip"
            },
            {
              metadata: 6,
              displayName: "White Tulip"
            },
            {
              metadata: 7,
              displayName: "Pink Tulip"
            },
            {
              metadata: 8,
              displayName: "Oxeye Daisy"
            }
          ],
          drops: [
            {
              drop: 38
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 39,
          displayName: "Brown Mushroom",
          name: "brown_mushroom",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 39
            }
          ],
          transparent: false,
          emitLight: 1,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 40,
          displayName: "Red Mushroom",
          name: "red_mushroom",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 40
            }
          ],
          transparent: false,
          emitLight: 1,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 41,
          displayName: "Block of Gold",
          name: "gold_block",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "278": true
          },
          drops: [
            {
              drop: 41
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 42,
          displayName: "Block of Iron",
          name: "iron_block",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "274": true,
            "278": true
          },
          drops: [
            {
              drop: 42
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 43,
          displayName: "Double Stone Slab",
          name: "double_stone_slab",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Double Stone Slab"
            },
            {
              metadata: 1,
              displayName: "Double Sandstone Slab"
            },
            {
              metadata: 2,
              displayName: "Double (Stone) Wooden Slab"
            },
            {
              metadata: 3,
              displayName: "Double Cobblestone Slab"
            },
            {
              metadata: 4,
              displayName: "Double Bricks Slab"
            },
            {
              metadata: 5,
              displayName: "Double Stone Brick Slab"
            },
            {
              metadata: 6,
              displayName: "Double Nether Brick Slab"
            },
            {
              metadata: 7,
              displayName: "Double Quartz Slab"
            },
            {
              metadata: 8,
              displayName: "Smooth Double Stone Slab"
            },
            {
              metadata: 9,
              displayName: "Smooth Double Sandstone Slab"
            },
            {
              metadata: 15,
              displayName: "Tile Double Quartz Slab (note the underside)"
            }
          ],
          drops: [
            {
              drop: {
                id: 44,
                metadata: 0
              }
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 6
        },
        {
          id: 44,
          displayName: "Stone Slab",
          name: "stone_slab",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Stone Slab"
            },
            {
              metadata: 1,
              displayName: "Sandstone Slab"
            },
            {
              metadata: 2,
              displayName: "(Stone) Wooden Slab"
            },
            {
              metadata: 3,
              displayName: "Cobblestone Slab"
            },
            {
              metadata: 4,
              displayName: "Bricks Slab"
            },
            {
              metadata: 5,
              displayName: "Stone Brick Slab"
            },
            {
              metadata: 6,
              displayName: "Nether Brick Slab"
            },
            {
              metadata: 7,
              displayName: "Quartz Slab"
            },
            {
              metadata: 8,
              displayName: "Upper Stone Slab"
            },
            {
              metadata: 9,
              displayName: "Upper Sandstone Slab"
            },
            {
              metadata: 10,
              displayName: "Upper (Stone) Wooden Slab"
            },
            {
              metadata: 11,
              displayName: "Upper Cobblestone Slab"
            },
            {
              metadata: 12,
              displayName: "Upper Bricks Slab"
            },
            {
              metadata: 13,
              displayName: "Upper Stone Brick Slab"
            },
            {
              metadata: 14,
              displayName: "Upper Nether Brick Slab"
            },
            {
              metadata: 15,
              displayName: "Upper Quartz Slab"
            }
          ],
          drops: [
            {
              drop: {
                id: 44,
                metadata: 0
              }
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 6
        },
        {
          id: 45,
          displayName: "Bricks",
          name: "brick_block",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 45
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 46,
          displayName: "TNT",
          name: "tnt",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          variations: [
            {
              metadata: 0,
              displayName: "Drops a TNT item when broken"
            },
            {
              metadata: 1,
              displayName: "Activates when broken"
            }
          ],
          drops: [
            {
              drop: 46
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 47,
          displayName: "Bookshelf",
          name: "bookshelf",
          hardness: 1.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 340,
              minCount: 3
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 1.5
        },
        {
          id: 48,
          displayName: "Moss Stone",
          name: "mossy_cobblestone",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 48
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 49,
          displayName: "Obsidian",
          name: "obsidian",
          hardness: 50,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "278": true
          },
          drops: [
            {
              drop: 49
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 1200
        },
        {
          id: 50,
          displayName: "Torch",
          name: "torch",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          variations: [
            {
              metadata: 0,
              displayName: "Torch facing east (attached to a block to its west)"
            },
            {
              metadata: 1,
              displayName: "Torch facing west (attached to a block to its east)"
            },
            {
              metadata: 2,
              displayName: "Torch facing south (attached to a block to its north)"
            },
            {
              metadata: 3,
              displayName: "Torch facing north (attached to a block to its south)"
            },
            {
              metadata: 4,
              displayName: "Torch facing up (attached to a block beneath it)"
            }
          ],
          drops: [
            {
              drop: 50
            }
          ],
          transparent: true,
          emitLight: 14,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 51,
          displayName: "Fire",
          name: "fire",
          hardness: 0,
          stackSize: 0,
          diggable: true,
          boundingBox: "empty",
          drops: [],
          transparent: true,
          emitLight: 15,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 52,
          displayName: "Monster Spawner",
          name: "mob_spawner",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 5
        },
        {
          id: 53,
          displayName: "Oak Wood Stairs",
          name: "oak_stairs",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 53
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 54,
          displayName: "Chest",
          name: "chest",
          hardness: 2.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 54
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2.5
        },
        {
          id: 55,
          displayName: "Redstone Wire",
          name: "redstone_wire",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          drops: [
            {
              drop: 331
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 56,
          displayName: "Diamond Ore",
          name: "diamond_ore",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "278": true
          },
          drops: [
            {
              drop: 264
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3
        },
        {
          id: 57,
          displayName: "Block of Diamond",
          name: "diamond_block",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "278": true
          },
          drops: [
            {
              drop: 57
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 58,
          displayName: "Crafting Table",
          name: "crafting_table",
          hardness: 2.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 58
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 2.5
        },
        {
          id: 59,
          displayName: "Wheat",
          name: "wheat",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 295
            },
            {
              drop: 295,
              minCount: 0,
              maxCount: 3
            },
            {
              drop: 296
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 60,
          displayName: "Farmland",
          name: "farmland",
          hardness: 0.6,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          drops: [
            {
              drop: {
                id: 3,
                metadata: 0
              }
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.6
        },
        {
          id: 61,
          displayName: "Furnace",
          name: "furnace",
          hardness: 3.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 61
            }
          ],
          transparent: true,
          emitLight: 13,
          filterLight: 0,
          resistance: 3.5
        },
        {
          id: 62,
          displayName: "Burning Furnace",
          name: "lit_furnace",
          hardness: 3.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 61
            }
          ],
          transparent: true,
          emitLight: 13,
          filterLight: 0,
          resistance: 3.5
        },
        {
          id: 63,
          displayName: "Standing Sign",
          name: "standing_sign",
          hardness: 1,
          stackSize: 16,
          diggable: true,
          boundingBox: "empty",
          material: "wood",
          drops: [
            {
              drop: 323
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 1
        },
        {
          id: 64,
          displayName: "Oak Door",
          name: "wooden_door",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 64
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 65,
          displayName: "Ladder",
          name: "ladder",
          hardness: 0.4,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 65
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.4
        },
        {
          id: 66,
          displayName: "Rail",
          name: "rail",
          hardness: 0.7,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "rock",
          drops: [
            {
              drop: 66
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.7
        },
        {
          id: 67,
          displayName: "Cobblestone Stairs",
          name: "stone_stairs",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 67
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 68,
          displayName: "Wall Sign",
          name: "wall_sign",
          hardness: 1,
          stackSize: 16,
          diggable: true,
          boundingBox: "empty",
          material: "wood",
          drops: [
            {
              drop: 323
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 1
        },
        {
          id: 69,
          displayName: "Lever",
          name: "lever",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          drops: [
            {
              drop: 69
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.5
        },
        {
          id: 70,
          displayName: "Stone Pressure Plate",
          name: "stone_pressure_plate",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 70
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.5
        },
        {
          id: 71,
          displayName: "Iron Door",
          name: "iron_door",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 71
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 5
        },
        {
          id: 72,
          displayName: "Wooden Pressure Plate",
          name: "wooden_pressure_plate",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "wood",
          drops: [
            {
              drop: 72
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.5
        },
        {
          id: 73,
          displayName: "Redstone Ore",
          name: "redstone_ore",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "278": true
          },
          drops: [
            {
              drop: 331,
              minCount: 4,
              maxCount: 5
            }
          ],
          transparent: true,
          emitLight: 9,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 74,
          displayName: "Glowing Redstone Ore",
          name: "lit_redstone_ore",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "278": true
          },
          drops: [
            {
              drop: 331,
              minCount: 4,
              maxCount: 5
            }
          ],
          transparent: true,
          emitLight: 9,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 75,
          displayName: "Redstone Torch (inactive)",
          name: "unlit_redstone_torch",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          variations: [
            {
              metadata: 0,
              displayName: "Redstone Torch (inactive) facing east (attached to a block to its west)"
            },
            {
              metadata: 1,
              displayName: "Redstone Torch (inactive) facing west (attached to a block to its east)"
            },
            {
              metadata: 2,
              displayName: "Redstone Torch (inactive) facing south (attached to a block to its north)"
            },
            {
              metadata: 3,
              displayName: "Redstone Torch (inactive) facing north (attached to a block to its south)"
            },
            {
              metadata: 4,
              displayName: "Redstone Torch (inactive) facing up (attached to a block beneath it)"
            }
          ],
          drops: [
            {
              drop: 75
            }
          ],
          transparent: true,
          emitLight: 7,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 76,
          displayName: "Redstone Torch (active)",
          name: "redstone_torch",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          variations: [
            {
              metadata: 0,
              displayName: "Redstone Torch (active) facing east (attached to a block to its west)"
            },
            {
              metadata: 1,
              displayName: "Redstone Torch (active) facing west (attached to a block to its east)"
            },
            {
              metadata: 2,
              displayName: "Redstone Torch (active) facing south (attached to a block to its north)"
            },
            {
              metadata: 3,
              displayName: "Redstone Torch (active) facing north (attached to a block to its south)"
            },
            {
              metadata: 4,
              displayName: "Redstone Torch (active) facing up (attached to a block beneath it)"
            }
          ],
          drops: [
            {
              drop: 76
            }
          ],
          transparent: true,
          emitLight: 7,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 77,
          displayName: "Stone Button",
          name: "stone_button",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          drops: [
            {
              drop: 77
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.5
        },
        {
          id: 78,
          displayName: "Snow (layer)",
          name: "snow_layer",
          hardness: 0.2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          harvestTools: {
            "256": true,
            "269": true,
            "273": true,
            "277": true,
            "284": true
          },
          drops: [
            {
              drop: 332,
              minCount: 2,
              maxCount: 9
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.1
        },
        {
          id: 79,
          displayName: "Ice",
          name: "ice",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.5
        },
        {
          id: 80,
          displayName: "Snow",
          name: "snow",
          hardness: 0.2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          harvestTools: {
            "256": true,
            "269": true,
            "273": true,
            "277": true,
            "284": true
          },
          drops: [
            {
              drop: 332,
              minCount: 4
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.2
        },
        {
          id: 81,
          displayName: "Cactus",
          name: "cactus",
          hardness: 0.4,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "plant",
          drops: [
            {
              drop: 81
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.4
        },
        {
          id: 82,
          displayName: "Clay",
          name: "clay",
          hardness: 0.6,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          drops: [
            {
              drop: 337,
              minCount: 4
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.6
        },
        {
          id: 83,
          displayName: "Sugar Cane",
          name: "reeds",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 83
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 84,
          displayName: "Jukebox",
          name: "jukebox",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          variations: [
            {
              metadata: 0,
              displayName: "No disc inserted"
            },
            {
              metadata: 1,
              displayName: "Contains a disc"
            }
          ],
          drops: [
            {
              drop: 84
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 85,
          displayName: "Fence",
          name: "fence",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 85
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 86,
          displayName: "Pumpkin",
          name: "pumpkin",
          hardness: 1,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "plant",
          drops: [
            {
              drop: 86
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 1
        },
        {
          id: 87,
          displayName: "Netherrack",
          name: "netherrack",
          hardness: 0.4,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 87
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.4
        },
        {
          id: 88,
          displayName: "Soul Sand",
          name: "soul_sand",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          drops: [
            {
              drop: 88
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.5
        },
        {
          id: 89,
          displayName: "Glowstone",
          name: "glowstone",
          hardness: 0.3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 348,
              minCount: 2,
              maxCount: 4
            }
          ],
          transparent: true,
          emitLight: 15,
          filterLight: 0,
          resistance: 0.3
        },
        {
          id: 90,
          displayName: "Nether Portal",
          name: "portal",
          hardness: null,
          stackSize: 0,
          diggable: false,
          boundingBox: "empty",
          drops: [],
          transparent: true,
          emitLight: 11,
          filterLight: 0,
          resistance: -1
        },
        {
          id: 91,
          displayName: "Jack o'Lantern",
          name: "lit_pumpkin",
          hardness: 1,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "plant",
          drops: [
            {
              drop: 91
            }
          ],
          transparent: true,
          emitLight: 15,
          filterLight: 15,
          resistance: 1
        },
        {
          id: 92,
          displayName: "Cake",
          name: "cake",
          hardness: 0.5,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.5
        },
        {
          id: 93,
          displayName: "Redstone Repeater (inactive)",
          name: "unpowered_repeater",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 356
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 94,
          displayName: "Redstone Repeater (active)",
          name: "powered_repeater",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 356
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 95,
          displayName: "Stained Glass",
          name: "stained_glass",
          hardness: 0.3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          variations: [
            {
              metadata: 0,
              displayName: "White Stained Glass"
            },
            {
              metadata: 1,
              displayName: "Orange Stained Glass"
            },
            {
              metadata: 2,
              displayName: "Magenta Stained Glass"
            },
            {
              metadata: 3,
              displayName: "Light Blue Stained Glass"
            },
            {
              metadata: 4,
              displayName: "Yellow Stained Glass"
            },
            {
              metadata: 5,
              displayName: "Lime Stained Glass"
            },
            {
              metadata: 6,
              displayName: "Pink Stained Glass"
            },
            {
              metadata: 7,
              displayName: "Gray Stained Glass"
            },
            {
              metadata: 8,
              displayName: "Light Gray Stained Glass"
            },
            {
              metadata: 9,
              displayName: "Cyan Stained Glass"
            },
            {
              metadata: 10,
              displayName: "Purple Stained Glass"
            },
            {
              metadata: 11,
              displayName: "Blue Stained Glass"
            },
            {
              metadata: 12,
              displayName: "Brown Stained Glass"
            },
            {
              metadata: 13,
              displayName: "Green Stained Glass"
            },
            {
              metadata: 14,
              displayName: "Red Stained Glass"
            },
            {
              metadata: 15,
              displayName: "Black Stained Glass"
            }
          ],
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.3
        },
        {
          id: 96,
          displayName: "Trapdoor",
          name: "trapdoor",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 96
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 97,
          displayName: "Monster Egg",
          name: "monster_egg",
          hardness: 0.75,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          variations: [
            {
              metadata: 0,
              displayName: "Stone Monster Egg"
            },
            {
              metadata: 1,
              displayName: "Cobblestone Monster Egg"
            },
            {
              metadata: 2,
              displayName: "Stone Brick Monster Egg"
            },
            {
              metadata: 3,
              displayName: "Mossy Stone Brick Monster Egg"
            },
            {
              metadata: 4,
              displayName: "Cracked Stone Brick Monster Egg"
            },
            {
              metadata: 5,
              displayName: "Chiseled Stone Brick Monster Egg"
            }
          ],
          drops: [],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.75
        },
        {
          id: 98,
          displayName: "Stone Bricks",
          name: "stonebrick",
          hardness: 1.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Stone brick"
            },
            {
              metadata: 1,
              displayName: "Mossy stone brick"
            },
            {
              metadata: 2,
              displayName: "Cracked stone brick"
            },
            {
              metadata: 3,
              displayName: "Chiseled stone brick"
            }
          ],
          drops: [
            {
              drop: 98
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 99,
          displayName: "Brown Mushroom (block)",
          name: "brown_mushroom_block",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          variations: [
            {
              metadata: 0,
              displayName: "Pores on all sides"
            },
            {
              metadata: 1,
              displayName: "Cap texture on top, west and north"
            },
            {
              metadata: 2,
              displayName: "Cap texture on top and north"
            },
            {
              metadata: 3,
              displayName: "Cap texture on top, north and east"
            },
            {
              metadata: 4,
              displayName: "Cap texture on top and west"
            },
            {
              metadata: 5,
              displayName: "Cap texture on top"
            },
            {
              metadata: 6,
              displayName: "Cap texture on top and east"
            },
            {
              metadata: 7,
              displayName: "Cap texture on top, south and west"
            },
            {
              metadata: 8,
              displayName: "Cap texture on top and south"
            },
            {
              metadata: 9,
              displayName: "Cap texture on top, east and south"
            },
            {
              metadata: 10,
              displayName: "Stem texture on all four sides, pores on top and bottom"
            },
            {
              metadata: 14,
              displayName: "Cap texture on all six sides"
            },
            {
              metadata: 15,
              displayName: "Stem texture on all six sides"
            }
          ],
          drops: [
            {
              drop: 40,
              minCount: 0,
              maxCount: 2
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.2
        },
        {
          id: 100,
          displayName: "Red Mushroom (block)",
          name: "red_mushroom_block",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          variations: [
            {
              metadata: 0,
              displayName: "Pores on all sides"
            },
            {
              metadata: 1,
              displayName: "Cap texture on top, west and north"
            },
            {
              metadata: 2,
              displayName: "Cap texture on top and north"
            },
            {
              metadata: 3,
              displayName: "Cap texture on top, north and east"
            },
            {
              metadata: 4,
              displayName: "Cap texture on top and west"
            },
            {
              metadata: 5,
              displayName: "Cap texture on top"
            },
            {
              metadata: 6,
              displayName: "Cap texture on top and east"
            },
            {
              metadata: 7,
              displayName: "Cap texture on top, south and west"
            },
            {
              metadata: 8,
              displayName: "Cap texture on top and south"
            },
            {
              metadata: 9,
              displayName: "Cap texture on top, east and south"
            },
            {
              metadata: 10,
              displayName: "Stem texture on all four sides, pores on top and bottom"
            },
            {
              metadata: 14,
              displayName: "Cap texture on all six sides"
            },
            {
              metadata: 15,
              displayName: "Stem texture on all six sides"
            }
          ],
          drops: [
            {
              drop: 40,
              minCount: 0,
              maxCount: 2
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.2
        },
        {
          id: 101,
          displayName: "Iron Bars",
          name: "iron_bars",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 101
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 6
        },
        {
          id: 102,
          displayName: "Glass Pane",
          name: "glass_pane",
          hardness: 0.3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.3
        },
        {
          id: 103,
          displayName: "Melon",
          name: "melon_block",
          hardness: 1,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "plant",
          drops: [
            {
              drop: 360,
              minCount: 3,
              maxCount: 7
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 1
        },
        {
          id: 104,
          displayName: "Pumpkin Stem",
          name: "pumpkin_stem",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 361,
              minCount: 0,
              maxCount: 3
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 105,
          displayName: "Melon Stem",
          name: "melon_stem",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 362,
              minCount: 0,
              maxCount: 3
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 106,
          displayName: "Vines",
          name: "vine",
          hardness: 0.2,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 106
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.2
        },
        {
          id: 107,
          displayName: "Fence Gate",
          name: "fence_gate",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 107
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 108,
          displayName: "Brick Stairs",
          name: "brick_stairs",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 108
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 109,
          displayName: "Stone Brick Stairs",
          name: "stone_brick_stairs",
          hardness: 1.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 109
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 110,
          displayName: "Mycelium",
          name: "mycelium",
          hardness: 0.6,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          drops: [
            {
              drop: {
                id: 3,
                metadata: 0
              }
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.6
        },
        {
          id: 111,
          displayName: "Lily Pad",
          name: "waterlily",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "plant",
          drops: [
            {
              drop: 111
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 112,
          displayName: "Nether Brick",
          name: "nether_brick",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 112
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 113,
          displayName: "Nether Brick Fence",
          name: "nether_brick_fence",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 113
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 6
        },
        {
          id: 114,
          displayName: "Nether Brick Stairs",
          name: "nether_brick_stairs",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 114
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 115,
          displayName: "Nether Wart",
          name: "nether_wart",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 372
            },
            {
              drop: 372,
              minCount: 2,
              maxCount: 4
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 116,
          displayName: "Enchantment Table",
          name: "enchanting_table",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 116
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 1200
        },
        {
          id: 117,
          displayName: "Brewing Stand",
          name: "brewing_stand",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 379
            }
          ],
          transparent: true,
          emitLight: 1,
          filterLight: 0,
          resistance: 0.5
        },
        {
          id: 118,
          displayName: "Cauldron",
          name: "cauldron",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 380
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 119,
          displayName: "End Portal",
          name: "end_portal",
          hardness: null,
          stackSize: 0,
          diggable: false,
          boundingBox: "empty",
          drops: [],
          transparent: true,
          emitLight: 15,
          filterLight: 0,
          resistance: 36e5
        },
        {
          id: 120,
          displayName: "End Portal Frame",
          name: "end_portal_frame",
          hardness: null,
          stackSize: 64,
          diggable: false,
          boundingBox: "block",
          drops: [
            {
              drop: 120
            }
          ],
          transparent: true,
          emitLight: 1,
          filterLight: 0,
          resistance: 36e5
        },
        {
          id: 121,
          displayName: "End Stone",
          name: "end_stone",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 121
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 9
        },
        {
          id: 122,
          displayName: "Dragon Egg",
          name: "dragon_egg",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 122
            }
          ],
          transparent: true,
          emitLight: 1,
          filterLight: 0,
          resistance: 9
        },
        {
          id: 123,
          displayName: "Redstone Lamp (inactive)",
          name: "redstone_lamp",
          hardness: 0.3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 123
            }
          ],
          transparent: true,
          emitLight: 15,
          filterLight: 0,
          resistance: 0.3
        },
        {
          id: 124,
          displayName: "Redstone Lamp (active)",
          name: "lit_redstone_lamp",
          hardness: 0.3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 124
            }
          ],
          transparent: true,
          emitLight: 15,
          filterLight: 0,
          resistance: 0.3
        },
        {
          id: 125,
          displayName: "Double Wooden Slab",
          name: "double_wooden_slab",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          variations: [
            {
              metadata: 0,
              displayName: "Double Oak Wood Slab"
            },
            {
              metadata: 1,
              displayName: "Double Spruce Wood Slab"
            },
            {
              metadata: 2,
              displayName: "Double Birch Wood Slab"
            },
            {
              metadata: 3,
              displayName: "Double Jungle Wood Slab"
            },
            {
              metadata: 4,
              displayName: "Double Acacia Wood Slab"
            },
            {
              metadata: 5,
              displayName: "Double Dark Oak Wood Slab"
            }
          ],
          drops: [
            {
              drop: {
                id: 44,
                metadata: 0
              }
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 126,
          displayName: "Wooden Slab",
          name: "wooden_slab",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          variations: [
            {
              metadata: 0,
              displayName: "Oak Wood Slab"
            },
            {
              metadata: 1,
              displayName: "Spruce Wood Slab"
            },
            {
              metadata: 2,
              displayName: "Birch Wood Slab"
            },
            {
              metadata: 3,
              displayName: "Jungle Wood Slab"
            },
            {
              metadata: 4,
              displayName: "Acacia Wood Slab"
            },
            {
              metadata: 5,
              displayName: "Dark Oak Wood Slab"
            },
            {
              metadata: 8,
              displayName: "Upper Oak Wood Slab"
            },
            {
              metadata: 9,
              displayName: "Upper Spruce Wood Slab"
            },
            {
              metadata: 10,
              displayName: "Upper Birch Wood Slab"
            },
            {
              metadata: 11,
              displayName: "Upper Jungle Wood Slab"
            },
            {
              metadata: 12,
              displayName: "Upper Acacia Wood Slab"
            },
            {
              metadata: 13,
              displayName: "Upper Dark Oak Wood Slab"
            }
          ],
          drops: [
            {
              drop: {
                id: 44,
                metadata: 0
              }
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 127,
          displayName: "Cocoa",
          name: "cocoa",
          hardness: 0.2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "plant",
          drops: [
            {
              drop: {
                id: 351,
                metadata: 3
              }
            },
            {
              drop: {
                id: 351,
                metadata: 3
              },
              minCount: 3
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 128,
          displayName: "Sandstone Stairs",
          name: "sandstone_stairs",
          hardness: 0.8,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 128
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.8
        },
        {
          id: 129,
          displayName: "Emerald Ore",
          name: "emerald_ore",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "278": true
          },
          drops: [
            {
              drop: 388
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3
        },
        {
          id: 130,
          displayName: "Ender Chest",
          name: "ender_chest",
          hardness: 22.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 49,
              minCount: 8
            }
          ],
          transparent: true,
          emitLight: 7,
          filterLight: 0,
          resistance: 600
        },
        {
          id: 131,
          displayName: "Tripwire Hook",
          name: "tripwire_hook",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          drops: [
            {
              drop: 131
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 132,
          displayName: "Tripwire",
          name: "tripwire",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          drops: [
            {
              drop: 287
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 133,
          displayName: "Block of Emerald",
          name: "emerald_block",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "278": true
          },
          drops: [
            {
              drop: 133
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 134,
          displayName: "Spruce Wood Stairs",
          name: "spruce_stairs",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 134
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 135,
          displayName: "Birch Wood Stairs",
          name: "birch_stairs",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 135
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 136,
          displayName: "Jungle Wood Stairs",
          name: "jungle_stairs",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 136
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 137,
          displayName: "Command Block",
          name: "command_block",
          hardness: null,
          stackSize: 64,
          diggable: false,
          boundingBox: "block",
          drops: [],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 36e5
        },
        {
          id: 138,
          displayName: "Beacon",
          name: "beacon",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 138
            }
          ],
          transparent: true,
          emitLight: 15,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 139,
          displayName: "Cobblestone Wall",
          name: "cobblestone_wall",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Cobblestone Wall"
            },
            {
              metadata: 1,
              displayName: "Mossy Cobblestone Wall"
            }
          ],
          drops: [
            {
              drop: 139
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 6
        },
        {
          id: 140,
          displayName: "Flower Pot",
          name: "flower_pot",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 140
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 141,
          displayName: "Carrot",
          name: "carrots",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 141
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 142,
          displayName: "Potato",
          name: "potatoes",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [
            {
              drop: 142
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 143,
          displayName: "Wooden Button",
          name: "wooden_button",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "wood",
          drops: [
            {
              drop: 143
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.5
        },
        {
          id: 144,
          displayName: "Mob head",
          name: "skull",
          hardness: 1,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          variations: [
            {
              metadata: 0,
              displayName: "Skeleton Skull"
            },
            {
              metadata: 1,
              displayName: "Wither Skeleton Skull"
            },
            {
              metadata: 2,
              displayName: "Zombie Head"
            },
            {
              metadata: 3,
              displayName: "Head"
            },
            {
              metadata: 4,
              displayName: "Creeper Head"
            }
          ],
          drops: [
            {
              drop: 144
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 1
        },
        {
          id: 145,
          displayName: "Anvil",
          name: "anvil",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Anvil"
            },
            {
              metadata: 1,
              displayName: "Slightly Damaged Anvil"
            },
            {
              metadata: 2,
              displayName: "Very Damaged Anvil"
            },
            {
              metadata: 3,
              displayName: "Anvil (North/South)"
            },
            {
              metadata: 4,
              displayName: "Anvil (East/West)"
            },
            {
              metadata: 5,
              displayName: "Anvil (South/North)"
            },
            {
              metadata: 6,
              displayName: "Anvil (West/East)"
            },
            {
              metadata: 7,
              displayName: "Slightly Damaged Anvil (North/South)"
            },
            {
              metadata: 8,
              displayName: "Slightly Damaged Anvil (East/West)"
            },
            {
              metadata: 9,
              displayName: "Slightly Damaged Anvil (West/East)"
            },
            {
              metadata: 10,
              displayName: "Slightly Damaged Anvil (South/North)"
            },
            {
              metadata: 11,
              displayName: "Very Damaged Anvil (North/South)"
            },
            {
              metadata: 12,
              displayName: "Very Damaged Anvil (East/West)"
            },
            {
              metadata: 13,
              displayName: "Very Damaged Anvil (West/East)"
            },
            {
              metadata: 14,
              displayName: "Very Damaged Anvil (South/North)"
            }
          ],
          drops: [
            {
              drop: 145
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 1200
        },
        {
          id: 146,
          displayName: "Trapped Chest",
          name: "trapped_chest",
          hardness: 2.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 146
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2.5
        },
        {
          id: 147,
          displayName: "Weighted Pressure Plate (Light)",
          name: "light_weighted_pressure_plate",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 147
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.5
        },
        {
          id: 148,
          displayName: "Weighted Pressure Plate (Heavy)",
          name: "heavy_weighted_pressure_plate",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 148
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.5
        },
        {
          id: 149,
          displayName: "Redstone Comparator",
          name: "unpowered_comparator",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 404
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 150,
          displayName: "Redstone Comparator (deprecated)",
          name: "powered_comparator",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 404
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 151,
          displayName: "Daylight Sensor",
          name: "daylight_detector",
          hardness: 0.2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 151
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 152,
          displayName: "Block of Redstone",
          name: "redstone_block",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 152
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 6
        },
        {
          id: 153,
          displayName: "Nether Quartz Ore",
          name: "quartz_ore",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 406
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3
        },
        {
          id: 154,
          displayName: "Hopper",
          name: "hopper",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 154
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 4.8
        },
        {
          id: 155,
          displayName: "Block of Quartz",
          name: "quartz_block",
          hardness: 0.8,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Block of Quartz"
            },
            {
              metadata: 1,
              displayName: "Chiseled Quartz Block"
            },
            {
              metadata: 2,
              displayName: "Pillar Quartz Block (vertical)"
            },
            {
              metadata: 3,
              displayName: "Pillar Quartz Block (north-south)"
            },
            {
              metadata: 4,
              displayName: "Pillar Quartz Block (east-west)"
            }
          ],
          drops: [
            {
              drop: 155
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.8
        },
        {
          id: 156,
          displayName: "Quartz Stairs",
          name: "quartz_stairs",
          hardness: 0.8,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 156
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.8
        },
        {
          id: 157,
          displayName: "Activator Rail",
          name: "activator_rail",
          hardness: 0.7,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "rock",
          drops: [
            {
              drop: 157
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.7
        },
        {
          id: 158,
          displayName: "Dropper",
          name: "dropper",
          hardness: 3.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 158
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 3.5
        },
        {
          id: 159,
          displayName: "Stained Clay",
          name: "stained_hardened_clay",
          hardness: 1.25,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "White hardened clay"
            },
            {
              metadata: 1,
              displayName: "Orange hardened clay"
            },
            {
              metadata: 2,
              displayName: "Magenta hardened clay"
            },
            {
              metadata: 3,
              displayName: "Light blue hardened clay"
            },
            {
              metadata: 4,
              displayName: "Yellow hardened clay"
            },
            {
              metadata: 5,
              displayName: "Lime hardened clay"
            },
            {
              metadata: 6,
              displayName: "Pink hardened clay"
            },
            {
              metadata: 7,
              displayName: "Gray hardened clay"
            },
            {
              metadata: 8,
              displayName: "Light gray hardened clay"
            },
            {
              metadata: 9,
              displayName: "Cyan hardened clay"
            },
            {
              metadata: 10,
              displayName: "Purple hardened clay"
            },
            {
              metadata: 11,
              displayName: "Blue hardened clay"
            },
            {
              metadata: 12,
              displayName: "Brown hardened clay"
            },
            {
              metadata: 13,
              displayName: "Green hardened clay"
            },
            {
              metadata: 14,
              displayName: "Red hardened clay"
            },
            {
              metadata: 15,
              displayName: "Black hardened clay"
            }
          ],
          drops: [
            {
              drop: 159
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 4.2
        },
        {
          id: 160,
          displayName: "Stained Glass Pane",
          name: "stained_glass_pane",
          hardness: 0.3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          variations: [
            {
              metadata: 0,
              displayName: "White Stained Glass Pane"
            },
            {
              metadata: 1,
              displayName: "Orange Stained Glass Pane"
            },
            {
              metadata: 2,
              displayName: "Magenta Stained Glass Pane"
            },
            {
              metadata: 3,
              displayName: "Light Blue Stained Glass Pane"
            },
            {
              metadata: 4,
              displayName: "Yellow Stained Glass Pane"
            },
            {
              metadata: 5,
              displayName: "Lime Stained Glass Pane"
            },
            {
              metadata: 6,
              displayName: "Pink Stained Glass Pane"
            },
            {
              metadata: 7,
              displayName: "Gray Stained Glass Pane"
            },
            {
              metadata: 8,
              displayName: "Light Gray Stained Glass Pane"
            },
            {
              metadata: 9,
              displayName: "Cyan Stained Glass Pane"
            },
            {
              metadata: 10,
              displayName: "Purple Stained Glass Pane"
            },
            {
              metadata: 11,
              displayName: "Blue Stained Glass Pane"
            },
            {
              metadata: 12,
              displayName: "Brown Stained Glass Pane"
            },
            {
              metadata: 13,
              displayName: "Green Stained Glass Pane"
            },
            {
              metadata: 14,
              displayName: "Red Stained Glass Pane"
            },
            {
              metadata: 15,
              displayName: "Black Stained Glass Pane"
            }
          ],
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.3
        },
        {
          id: 161,
          displayName: "Leaves (Acacia/Dark Oak)",
          name: "leaves2",
          hardness: 0.2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "plant",
          variations: [
            {
              metadata: 0,
              displayName: "Acacia Leaves"
            },
            {
              metadata: 1,
              displayName: "Dark Oak Leaves"
            },
            {
              metadata: 4,
              displayName: "Acacia Leaves (no decay)"
            },
            {
              metadata: 5,
              displayName: "Dark Oak Leaves (no decay)"
            },
            {
              metadata: 8,
              displayName: "Acacia Leaves (check decay)"
            },
            {
              metadata: 9,
              displayName: "Dark Oak Leaves (check decay)"
            },
            {
              metadata: 12,
              displayName: "Acacia Leaves (no decay and check decay)"
            },
            {
              metadata: 13,
              displayName: "Dark Oak Leaves (no decay and check decay)"
            }
          ],
          drops: [
            {
              drop: 6,
              minCount: 0,
              maxCount: 1
            },
            {
              drop: 260,
              minCount: 0,
              maxCount: 1
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 162,
          displayName: "Wood (Acacia/Dark Oak)",
          name: "log2",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 162
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 163,
          displayName: "Acacia Wood Stairs",
          name: "acacia_stairs",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 163
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 164,
          displayName: "Dark Oak Wood Stairs",
          name: "dark_oak_stairs",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 164
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 165,
          displayName: "Slime Block",
          name: "slime",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 165
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 166,
          displayName: "Barrier",
          name: "barrier",
          hardness: null,
          stackSize: 64,
          diggable: false,
          boundingBox: "block",
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 167,
          displayName: "Iron Trapdoor",
          name: "iron_trapdoor",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 167
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 5
        },
        {
          id: 168,
          displayName: "Prismarine",
          name: "prismarine",
          hardness: 1.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Prismarine"
            },
            {
              metadata: 1,
              displayName: "Prismarine Bricks"
            },
            {
              metadata: 2,
              displayName: "Dark Prismarine"
            }
          ],
          drops: [
            {
              drop: 168
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 169,
          displayName: "Sea Lantern",
          name: "sea_lantern",
          hardness: 0.3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 410,
              minCount: 2,
              maxCount: 3
            }
          ],
          transparent: true,
          emitLight: 15,
          filterLight: 0,
          resistance: 0.3
        },
        {
          id: 170,
          displayName: "Hay Bale",
          name: "hay_block",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 170
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.5
        },
        {
          id: 171,
          displayName: "Carpet",
          name: "carpet",
          hardness: 0.1,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          variations: [
            {
              metadata: 0,
              displayName: "White Carpet"
            },
            {
              metadata: 1,
              displayName: "Orange Carpet"
            },
            {
              metadata: 2,
              displayName: "Magenta Carpet"
            },
            {
              metadata: 3,
              displayName: "Light Blue Carpet"
            },
            {
              metadata: 4,
              displayName: "Yellow Carpet"
            },
            {
              metadata: 5,
              displayName: "Lime Carpet"
            },
            {
              metadata: 6,
              displayName: "Pink Carpet"
            },
            {
              metadata: 7,
              displayName: "Gray Carpet"
            },
            {
              metadata: 8,
              displayName: "Light Gray Carpet"
            },
            {
              metadata: 9,
              displayName: "Cyan Carpet"
            },
            {
              metadata: 10,
              displayName: "Purple Carpet"
            },
            {
              metadata: 11,
              displayName: "Blue Carpet"
            },
            {
              metadata: 12,
              displayName: "Brown Carpet"
            },
            {
              metadata: 13,
              displayName: "Green Carpet"
            },
            {
              metadata: 14,
              displayName: "Red Carpet"
            },
            {
              metadata: 15,
              displayName: "Black Carpet"
            }
          ],
          drops: [
            {
              drop: 171
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.1
        },
        {
          id: 172,
          displayName: "Hardened Clay",
          name: "hardened_clay",
          hardness: 1.25,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "White hardened clay"
            },
            {
              metadata: 1,
              displayName: "Orange hardened clay"
            },
            {
              metadata: 2,
              displayName: "Magenta hardened clay"
            },
            {
              metadata: 3,
              displayName: "Light blue hardened clay"
            },
            {
              metadata: 4,
              displayName: "Yellow hardened clay"
            },
            {
              metadata: 5,
              displayName: "Lime hardened clay"
            },
            {
              metadata: 6,
              displayName: "Pink hardened clay"
            },
            {
              metadata: 7,
              displayName: "Gray hardened clay"
            },
            {
              metadata: 8,
              displayName: "Light gray hardened clay"
            },
            {
              metadata: 9,
              displayName: "Cyan hardened clay"
            },
            {
              metadata: 10,
              displayName: "Purple hardened clay"
            },
            {
              metadata: 11,
              displayName: "Blue hardened clay"
            },
            {
              metadata: 12,
              displayName: "Brown hardened clay"
            },
            {
              metadata: 13,
              displayName: "Green hardened clay"
            },
            {
              metadata: 14,
              displayName: "Red hardened clay"
            },
            {
              metadata: 15,
              displayName: "Black hardened clay"
            }
          ],
          drops: [
            {
              drop: 172
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 4.2
        },
        {
          id: 173,
          displayName: "Block of Coal",
          name: "coal_block",
          hardness: 5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 173
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 174,
          displayName: "Packed Ice",
          name: "packed_ice",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          drops: [],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.5
        },
        {
          id: 175,
          displayName: "Large Flowers",
          name: "double_plant",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          variations: [
            {
              metadata: 0,
              displayName: "Sunflower"
            },
            {
              metadata: 1,
              displayName: "Lilac"
            },
            {
              metadata: 2,
              displayName: "Double Tallgrass"
            },
            {
              metadata: 3,
              displayName: "Large Fern"
            },
            {
              metadata: 4,
              displayName: "Rose Bush"
            },
            {
              metadata: 5,
              displayName: "Peony"
            },
            {
              metadata: 8,
              displayName: "Top Half of any Large Plant; low three bits 0x7 are derived from the block below."
            }
          ],
          drops: [
            {
              drop: 175
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 176,
          displayName: "Standing Banner",
          name: "standing_banner",
          hardness: 1,
          stackSize: 16,
          diggable: true,
          boundingBox: "empty",
          material: "wood",
          drops: [
            {
              drop: 176
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 1
        },
        {
          id: 177,
          displayName: "Wall Banner",
          name: "wall_banner",
          hardness: 1,
          stackSize: 16,
          diggable: true,
          boundingBox: "empty",
          material: "wood",
          drops: [
            {
              drop: 177
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 1
        },
        {
          id: 178,
          displayName: "Inverted Daylight Sensor",
          name: "daylight_detector_inverted",
          hardness: 0.2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 178
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 179,
          displayName: "Red Sandstone",
          name: "red_sandstone",
          hardness: 0.8,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Red Sandstone"
            },
            {
              metadata: 1,
              displayName: "Chiseled Red Sandstone"
            },
            {
              metadata: 2,
              displayName: "Smooth Red Sandstone"
            }
          ],
          drops: [
            {
              drop: 179
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.8
        },
        {
          id: 180,
          displayName: "Red Sandstone Stairs",
          name: "red_sandstone_stairs",
          hardness: 0.8,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 180
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.8
        },
        {
          id: 181,
          displayName: "Double Red Sandstone Slab",
          name: "double_stone_slab2",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Double Red Sandstone Slab"
            },
            {
              metadata: 8,
              displayName: "Smooth Double Red Sandstone Slab"
            }
          ],
          drops: [
            {
              drop: {
                id: 44,
                metadata: 0
              }
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 6
        },
        {
          id: 182,
          displayName: "Red Sandstone Slab",
          name: "stone_slab2",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          variations: [
            {
              metadata: 0,
              displayName: "Red Sandstone Slab"
            },
            {
              metadata: 8,
              displayName: "Upper Red Sandstone Slab"
            }
          ],
          drops: [
            {
              drop: {
                id: 44,
                metadata: 0
              }
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 6
        },
        {
          id: 183,
          displayName: "Spruce Fence Gate",
          name: "spruce_fence_gate",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 183
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 184,
          displayName: "Birch Fence Gate",
          name: "birch_fence_gate",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 184
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 185,
          displayName: "Jungle Fence Gate",
          name: "jungle_fence_gate",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 185
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 186,
          displayName: "Dark Oak Fence Gate",
          name: "dark_oak_fence_gate",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 186
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 187,
          displayName: "Acacia Fence Gate",
          name: "acacia_fence_gate",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 187
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 188,
          displayName: "Spruce Fence",
          name: "spruce_fence",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 188
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 189,
          displayName: "Birch Fence",
          name: "birch_fence",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 189
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 190,
          displayName: "Jungle Fence",
          name: "jungle_fence",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 190
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 191,
          displayName: "Dark Oak Fence",
          name: "dark_oak_fence",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 191
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 192,
          displayName: "Acacia Fence",
          name: "acacia_fence",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 192
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 193,
          displayName: "Spruce Door",
          name: "spruce_door",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 193
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 194,
          displayName: "Birch Door",
          name: "birch_door",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 194
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 195,
          displayName: "Jungle Door",
          name: "jungle_door",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 195
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 196,
          displayName: "Acacia Door",
          name: "acacia_door",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 196
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 197,
          displayName: "Dark Oak Door",
          name: "dark_oak_door",
          hardness: 3,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "wood",
          drops: [
            {
              drop: 197
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 198,
          displayName: "End Rod",
          name: "end_rod",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          variations: [
            {
              metadata: 0,
              displayName: "End Rod facing down"
            },
            {
              metadata: 1,
              displayName: "End Rod facing up"
            },
            {
              metadata: 2,
              displayName: "End Rod facing north"
            },
            {
              metadata: 3,
              displayName: "End Rod facing south"
            },
            {
              metadata: 4,
              displayName: "End Rod facing west"
            },
            {
              metadata: 5,
              displayName: "End Rod facing east"
            }
          ],
          drops: [
            {
              drop: 198
            }
          ],
          transparent: false,
          emitLight: 14,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 199,
          displayName: "Chorus Plant",
          name: "chorus_plant",
          hardness: 0.4,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 432,
              minCount: 0,
              maxCount: 1
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.4
        },
        {
          id: 200,
          displayName: "Chorus Flower",
          name: "chorus_flower",
          hardness: 0.4,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 200
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.4
        },
        {
          id: 201,
          displayName: "Purpur Block",
          name: "purpur_block",
          hardness: 1.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 201
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 202,
          displayName: "Purpur Pillar",
          name: "purpur_pillar",
          hardness: 1.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 202
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 203,
          displayName: "Purpur Stairs",
          name: "purpur_stairs",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 203
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 204,
          displayName: "Purpur Double Slab",
          name: "purpur_double_slab",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: {
                id: 44,
                metadata: 0
              }
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 6
        },
        {
          id: 205,
          displayName: "Purpur Slab",
          name: "purpur_slab",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "rock",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: {
                id: 44,
                metadata: 0
              }
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 6
        },
        {
          id: 206,
          displayName: "End Stone Bricks",
          name: "end_bricks",
          hardness: 0.8,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 206
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.8
        },
        {
          id: 207,
          displayName: "Beetroot Seeds",
          name: "beetroots",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          material: "plant",
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0
        },
        {
          id: 208,
          displayName: "Grass Path",
          name: "grass_path",
          hardness: 0.6,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          material: "dirt",
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 0.65
        },
        {
          id: 209,
          displayName: "End Gateway",
          name: "end_gateway",
          hardness: null,
          stackSize: 0,
          diggable: false,
          boundingBox: "empty",
          drops: [],
          transparent: false,
          emitLight: 15,
          filterLight: 15,
          resistance: 36e5
        },
        {
          id: 210,
          displayName: "Repeating Command Block",
          name: "repeating_command_block",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 36e5
        },
        {
          id: 211,
          displayName: "Chain Command Block",
          name: "chain_command_block",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 36e5
        },
        {
          id: 212,
          displayName: "Frosted Ice",
          name: "frosted_ice",
          hardness: 0.5,
          stackSize: 0,
          diggable: true,
          boundingBox: "block",
          drops: [],
          transparent: true,
          emitLight: 0,
          filterLight: 2,
          resistance: 0.5
        },
        {
          id: 213,
          displayName: "Magma Block",
          name: "magma",
          hardness: 0.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 213
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0.5
        },
        {
          id: 214,
          displayName: "Nether Wart Block",
          name: "nether_wart_block",
          hardness: 1,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 214
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 1
        },
        {
          id: 215,
          displayName: "Red Nether Brick",
          name: "red_nether_brick",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 215
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 6
        },
        {
          id: 216,
          displayName: "Bone Block",
          name: "bone_block",
          hardness: 2,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 216
            }
          ],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 217,
          displayName: "Structure Void",
          name: "structure_void",
          hardness: 0,
          stackSize: 64,
          diggable: true,
          boundingBox: "empty",
          variations: [
            {
              metadata: 0,
              displayName: "Save"
            },
            {
              metadata: 1,
              displayName: "Load"
            },
            {
              metadata: 2,
              displayName: "Corner"
            },
            {
              metadata: 3,
              displayName: "Data"
            }
          ],
          drops: [],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 0
        },
        {
          id: 218,
          displayName: "Observer",
          name: "observer",
          hardness: 3.5,
          stackSize: 64,
          diggable: true,
          boundingBox: "block",
          harvestTools: {
            "257": true,
            "270": true,
            "274": true,
            "278": true,
            "285": true
          },
          drops: [
            {
              drop: 218
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 3
        },
        {
          id: 219,
          displayName: "White Shulker Box",
          name: "white_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 219
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 220,
          displayName: "Orange Shulker Box",
          name: "orange_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 220
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 221,
          displayName: "Magenta Shulker Box",
          name: "magenta_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 221
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 222,
          displayName: "Light Blue Shulker Box",
          name: "light_blue_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 222
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 223,
          displayName: "Yellow Shulker Box",
          name: "yellow_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 223
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 224,
          displayName: "Lime Shulker Box",
          name: "lime_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 224
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 225,
          displayName: "Pink Shulker Box",
          name: "pink_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 225
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 226,
          displayName: "Gray Shulker Box",
          name: "gray_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 226
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 227,
          displayName: "Light Gray Shulker Box",
          name: "light_gray_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 227
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 228,
          displayName: "Cyan Shulker Box",
          name: "cyan_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 228
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 229,
          displayName: "Purple Shulker Box",
          name: "purple_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 229
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 230,
          displayName: "Blue Shulker Box",
          name: "blue_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 230
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 231,
          displayName: "Brown Shulker Box",
          name: "brown_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 231
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 232,
          displayName: "Green Shulker Box",
          name: "green_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 232
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 233,
          displayName: "Red Shulker Box",
          name: "red_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 233
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 234,
          displayName: "Black Shulker Box",
          name: "black_shulker_box",
          hardness: 2,
          stackSize: 1,
          diggable: true,
          boundingBox: "block",
          drops: [
            {
              drop: 234
            }
          ],
          transparent: true,
          emitLight: 0,
          filterLight: 0,
          resistance: 2
        },
        {
          id: 255,
          displayName: "Structure Block",
          name: "structure_block",
          hardness: null,
          stackSize: 64,
          diggable: false,
          boundingBox: "block",
          variations: [
            {
              metadata: 0,
              displayName: "Save"
            },
            {
              metadata: 1,
              displayName: "Load"
            },
            {
              metadata: 2,
              displayName: "Corner"
            },
            {
              metadata: 3,
              displayName: "Data"
            }
          ],
          drops: [],
          transparent: false,
          emitLight: 0,
          filterLight: 15,
          resistance: 36e5
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/blockCollisionShapes.json
  var require_blockCollisionShapes = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/blockCollisionShapes.json"(exports, module) {
      module.exports = {
        blocks: {
          air: 0,
          stone: 1,
          grass: 1,
          dirt: 1,
          cobblestone: 1,
          planks: 1,
          sapling: 0,
          bedrock: 1,
          flowing_water: 0,
          water: 0,
          flowing_lava: 0,
          lava: 0,
          sand: 1,
          gravel: 1,
          gold_ore: 1,
          iron_ore: 1,
          coal_ore: 1,
          log: 1,
          leaves: 1,
          sponge: 1,
          glass: 1,
          lapis_ore: 1,
          lapis_block: 1,
          dispenser: 1,
          sandstone: 1,
          noteblock: 1,
          bed: 2,
          golden_rail: 0,
          detector_rail: 0,
          sticky_piston: [1, 1, 1, 1, 1, 1, 0, 0, 3, 4, 5, 6, 7, 8, 0, 0],
          web: 0,
          tallgrass: 0,
          deadbush: 0,
          piston: [1, 1, 1, 1, 1, 1, 0, 0, 3, 4, 5, 6, 7, 8, 0, 0],
          piston_head: [10, 11, 9, 12, 13, 14, 0, 0, 10, 11, 9, 12, 13, 14, 0, 0],
          wool: 1,
          piston_extension: 0,
          yellow_flower: 0,
          red_flower: 0,
          brown_mushroom: 0,
          red_mushroom: 0,
          gold_block: 1,
          iron_block: 1,
          double_stone_slab: 1,
          stone_slab: [15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16],
          brick_block: 1,
          tnt: 1,
          bookshelf: 1,
          mossy_cobblestone: 1,
          obsidian: 1,
          torch: 0,
          fire: 0,
          mob_spawner: 1,
          oak_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          chest: 25,
          redstone_wire: 0,
          diamond_ore: 1,
          diamond_block: 1,
          crafting_table: 1,
          wheat: 0,
          farmland: 26,
          furnace: 1,
          lit_furnace: 1,
          standing_sign: 0,
          wooden_door: [28, 29, 30, 27, 29, 30, 27, 28, 28, 29, 30, 27, 29, 30, 27, 28],
          ladder: [27, 27, 27, 29, 30, 28, 27, 27, 27, 29, 30, 28, 27, 27, 27, 29],
          rail: 0,
          stone_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          wall_sign: 0,
          lever: 0,
          stone_pressure_plate: 0,
          iron_door: [28, 29, 30, 27, 29, 30, 27, 28, 28, 29, 30, 27, 29, 30, 27, 28],
          wooden_pressure_plate: 0,
          redstone_ore: 1,
          lit_redstone_ore: 1,
          unlit_redstone_torch: 0,
          redstone_torch: 0,
          stone_button: 0,
          snow_layer: [0, 31, 32, 33, 15, 34, 4, 35, 0, 31, 32, 33, 15, 34, 4, 35],
          ice: 1,
          snow: 1,
          cactus: 36,
          clay: 1,
          reeds: 0,
          jukebox: 1,
          fence: 37,
          pumpkin: 1,
          netherrack: 1,
          soul_sand: 35,
          glowstone: 1,
          portal: 0,
          lit_pumpkin: 1,
          cake: [38, 39, 40, 41, 42, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          unpowered_repeater: 31,
          powered_repeater: 31,
          stained_glass: 1,
          trapdoor: [45, 45, 45, 45, 27, 29, 30, 28, 46, 46, 46, 46, 27, 29, 30, 28],
          monster_egg: 1,
          stonebrick: 1,
          brown_mushroom_block: 1,
          red_mushroom_block: 1,
          iron_bars: 47,
          glass_pane: 47,
          melon_block: 1,
          pumpkin_stem: 0,
          melon_stem: 0,
          vine: 0,
          fence_gate: [48, 49, 48, 49, 0, 0, 0, 0, 48, 49, 48, 49, 0, 0, 0, 0],
          brick_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          stone_brick_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          mycelium: 1,
          waterlily: 50,
          nether_brick: 1,
          nether_brick_fence: 37,
          nether_brick_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          nether_wart: 0,
          enchanting_table: 4,
          brewing_stand: 51,
          cauldron: 52,
          end_portal: 0,
          end_portal_frame: [81, 81, 81, 81, 82, 82, 82, 82, 81, 81, 81, 81, 82, 82, 82, 82],
          end_stone: 1,
          dragon_egg: 53,
          redstone_lamp: 1,
          lit_redstone_lamp: 1,
          double_wooden_slab: 1,
          wooden_slab: [15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16],
          cocoa: [55, 56, 54, 57, 58, 59, 60, 61, 62, 63, 64, 65, 0, 0, 0, 0],
          sandstone_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          emerald_ore: 1,
          ender_chest: 25,
          tripwire_hook: 0,
          tripwire: 0,
          emerald_block: 1,
          spruce_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          birch_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          jungle_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          command_block: 1,
          beacon: 1,
          cobblestone_wall: 66,
          flower_pot: 67,
          carrots: 0,
          potatoes: 0,
          wooden_button: 0,
          skull: [69, 69, 68, 70, 71, 72, 69, 69, 69, 69, 68, 70, 71, 72, 69, 69],
          anvil: [73, 74, 73, 74, 73, 74, 73, 74, 73, 74, 73, 74, 0, 0, 0, 0],
          trapped_chest: 25,
          light_weighted_pressure_plate: 0,
          heavy_weighted_pressure_plate: 0,
          unpowered_comparator: 31,
          powered_comparator: 31,
          daylight_detector: 33,
          redstone_block: 1,
          quartz_ore: 1,
          hopper: 75,
          quartz_block: 1,
          quartz_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          activator_rail: 0,
          dropper: 1,
          stained_hardened_clay: 1,
          stained_glass_pane: 47,
          leaves2: 1,
          log2: 1,
          acacia_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          dark_oak_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          slime: 1,
          barrier: 1,
          iron_trapdoor: [45, 45, 45, 45, 27, 29, 30, 28, 46, 46, 46, 46, 27, 29, 30, 28],
          prismarine: 1,
          sea_lantern: 1,
          hay_block: 1,
          carpet: 76,
          hardened_clay: 1,
          coal_block: 1,
          packed_ice: 1,
          double_plant: 0,
          standing_banner: 0,
          wall_banner: 0,
          daylight_detector_inverted: 33,
          red_sandstone: 1,
          red_sandstone_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          double_stone_slab2: 1,
          stone_slab2: [15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16],
          spruce_fence_gate: [48, 49, 48, 49, 0, 0, 0, 0, 48, 49, 48, 49, 0, 0, 0, 0],
          birch_fence_gate: [48, 49, 48, 49, 0, 0, 0, 0, 48, 49, 48, 49, 0, 0, 0, 0],
          jungle_fence_gate: [48, 49, 48, 49, 0, 0, 0, 0, 48, 49, 48, 49, 0, 0, 0, 0],
          dark_oak_fence_gate: [48, 49, 48, 49, 0, 0, 0, 0, 48, 49, 48, 49, 0, 0, 0, 0],
          acacia_fence_gate: [48, 49, 48, 49, 0, 0, 0, 0, 48, 49, 48, 49, 0, 0, 0, 0],
          spruce_fence: 37,
          birch_fence: 37,
          jungle_fence: 37,
          dark_oak_fence: 37,
          acacia_fence: 37,
          spruce_door: [28, 29, 30, 27, 29, 30, 27, 28, 28, 29, 30, 27, 29, 30, 27, 28],
          birch_door: [28, 29, 30, 27, 29, 30, 27, 28, 28, 29, 30, 27, 29, 30, 27, 28],
          jungle_door: [28, 29, 30, 27, 29, 30, 27, 28, 28, 29, 30, 27, 29, 30, 27, 28],
          acacia_door: [28, 29, 30, 27, 29, 30, 27, 28, 28, 29, 30, 27, 29, 30, 27, 28],
          dark_oak_door: [28, 29, 30, 27, 29, 30, 27, 28, 28, 29, 30, 27, 29, 30, 27, 28],
          end_rod: [77, 77, 78, 78, 79, 79, 77, 77, 78, 78, 79, 79, 77, 77, 78, 78],
          chorus_plant: 80,
          chorus_flower: 1,
          purpur_block: 1,
          purpur_pillar: 1,
          purpur_stairs: [18, 19, 20, 17, 21, 22, 23, 24, 18, 19, 20, 17, 21, 22, 23, 24],
          purpur_double_slab: 1,
          purpur_slab: [15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16],
          end_bricks: 1,
          beetroots: 0,
          grass_path: 26,
          end_gateway: 0,
          repeating_command_block: 1,
          chain_command_block: 1,
          frosted_ice: 1,
          magma: 1,
          nether_wart_block: 1,
          red_nether_brick: 1,
          bone_block: 1,
          structure_void: 0,
          observer: 1,
          white_shulker_box: 1,
          orange_shulker_box: 1,
          magenta_shulker_box: 1,
          light_blue_shulker_box: 1,
          yellow_shulker_box: 1,
          lime_shulker_box: 1,
          pink_shulker_box: 1,
          gray_shulker_box: 1,
          light_gray_shulker_box: 1,
          cyan_shulker_box: 1,
          purple_shulker_box: 1,
          blue_shulker_box: 1,
          brown_shulker_box: 1,
          green_shulker_box: 1,
          red_shulker_box: 1,
          black_shulker_box: 1,
          structure_block: 1
        },
        shapes: {
          "0": [],
          "1": [[0, 0, 0, 1, 1, 1]],
          "2": [[0, 0, 0, 1, 0.5625, 1]],
          "3": [[0, 0.25, 0, 1, 1, 1]],
          "4": [[0, 0, 0, 1, 0.75, 1]],
          "5": [[0, 0, 0.25, 1, 1, 1]],
          "6": [[0, 0, 0, 1, 1, 0.75]],
          "7": [[0.25, 0, 0, 1, 1, 1]],
          "8": [[0, 0, 0, 0.75, 1, 1]],
          "9": [[0, 0, 0, 1, 1, 0.25], [0.375, 0.375, 0.25, 0.625, 0.625, 1.25]],
          "10": [[0, 0, 0, 1, 0.25, 1], [0.375, 0.25, 0.375, 0.625, 1.25, 0.625]],
          "11": [[0, 0.75, 0, 1, 1, 1], [0.375, -0.25, 0.375, 0.625, 0.75, 0.625]],
          "12": [[0, 0, 0.75, 1, 1, 1], [0.375, 0.375, -0.25, 0.625, 0.625, 0.75]],
          "13": [[0, 0, 0, 0.25, 1, 1], [0.25, 0.375, 0.375, 1.25, 0.625, 0.625]],
          "14": [[0.75, 0, 0, 1, 1, 1], [-0.25, 0.375, 0.375, 0.75, 0.625, 0.625]],
          "15": [[0, 0, 0, 1, 0.5, 1]],
          "16": [[0, 0.5, 0, 1, 1, 1]],
          "17": [[0, 0, 0, 1, 0.5, 1], [0, 0.5, 0, 1, 1, 0.5]],
          "18": [[0, 0, 0, 1, 0.5, 1], [0.5, 0.5, 0, 1, 1, 1]],
          "19": [[0, 0, 0, 1, 0.5, 1], [0, 0.5, 0, 0.5, 1, 1]],
          "20": [[0, 0, 0, 1, 0.5, 1], [0, 0.5, 0.5, 1, 1, 1]],
          "21": [[0, 0.5, 0, 1, 1, 1], [0.5, 0, 0, 1, 0.5, 1]],
          "22": [[0, 0.5, 0, 1, 1, 1], [0, 0, 0, 0.5, 0.5, 1]],
          "23": [[0, 0.5, 0, 1, 1, 1], [0, 0, 0.5, 1, 0.5, 1]],
          "24": [[0, 0.5, 0, 1, 1, 1], [0, 0, 0, 1, 0.5, 0.5]],
          "25": [[0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375]],
          "26": [[0, 0, 0, 1, 0.9375, 1]],
          "27": [[0, 0, 0.8125, 1, 1, 1]],
          "28": [[0, 0, 0, 0.1875, 1, 1]],
          "29": [[0, 0, 0, 1, 1, 0.1875]],
          "30": [[0.8125, 0, 0, 1, 1, 1]],
          "31": [[0, 0, 0, 1, 0.125, 1]],
          "32": [[0, 0, 0, 1, 0.25, 1]],
          "33": [[0, 0, 0, 1, 0.375, 1]],
          "34": [[0, 0, 0, 1, 0.625, 1]],
          "35": [[0, 0, 0, 1, 0.875, 1]],
          "36": [[0.0625, 0, 0.0625, 0.9375, 0.9375, 0.9375]],
          "37": [[0.375, 0, 0.375, 0.625, 1.5, 0.625]],
          "38": [[0.0625, 0, 0.0625, 0.9375, 0.5, 0.9375]],
          "39": [[0.1875, 0, 0.0625, 0.9375, 0.5, 0.9375]],
          "40": [[0.3125, 0, 0.0625, 0.9375, 0.5, 0.9375]],
          "41": [[0.4375, 0, 0.0625, 0.9375, 0.5, 0.9375]],
          "42": [[0.5625, 0, 0.0625, 0.9375, 0.5, 0.9375]],
          "43": [[0.6875, 0, 0.0625, 0.9375, 0.5, 0.9375]],
          "44": [[0.8125, 0, 0.0625, 0.9375, 0.5, 0.9375]],
          "45": [[0, 0, 0, 1, 0.1875, 1]],
          "46": [[0, 0.8125, 0, 1, 1, 1]],
          "47": [[0.4375, 0, 0.4375, 0.5625, 1, 0.5625]],
          "48": [[0, 0, 0.375, 1, 1.5, 0.625]],
          "49": [[0.375, 0, 0, 0.625, 1.5, 1]],
          "50": [[0.0625, 0, 0.0625, 0.9375, 0.09375, 0.9375]],
          "51": [[0.4375, 0, 0.4375, 0.5625, 0.875, 0.5625], [0, 0, 0, 1, 0.125, 1]],
          "52": [[0, 0, 0, 1, 0.3125, 1], [0, 0, 0, 0.125, 1, 1], [0, 0, 0, 1, 1, 0.125], [0.875, 0, 0, 1, 1, 1], [0, 0, 0.875, 1, 1, 1]],
          "53": [[0.0625, 0, 0.0625, 0.9375, 1, 0.9375]],
          "54": [[0.375, 0.4375, 0.0625, 0.625, 0.75, 0.3125]],
          "55": [[0.375, 0.4375, 0.6875, 0.625, 0.75, 0.9375]],
          "56": [[0.0625, 0.4375, 0.375, 0.3125, 0.75, 0.625]],
          "57": [[0.6875, 0.4375, 0.375, 0.9375, 0.75, 0.625]],
          "58": [[0.3125, 0.3125, 0.5625, 0.6875, 0.75, 0.9375]],
          "59": [[0.0625, 0.3125, 0.3125, 0.4375, 0.75, 0.6875]],
          "60": [[0.3125, 0.3125, 0.0625, 0.6875, 0.75, 0.4375]],
          "61": [[0.5625, 0.3125, 0.3125, 0.9375, 0.75, 0.6875]],
          "62": [[0.25, 0.1875, 0.4375, 0.75, 0.75, 0.9375]],
          "63": [[0.0625, 0.1875, 0.25, 0.5625, 0.75, 0.75]],
          "64": [[0.25, 0.1875, 0.0625, 0.75, 0.75, 0.5625]],
          "65": [[0.4375, 0.1875, 0.25, 0.9375, 0.75, 0.75]],
          "66": [[0.25, 0, 0.25, 0.75, 1.5, 0.75]],
          "67": [[0.3125, 0, 0.3125, 0.6875, 0.375, 0.6875]],
          "68": [[0.25, 0.25, 0.5, 0.75, 0.75, 1]],
          "69": [[0.25, 0, 0.25, 0.75, 0.5, 0.75]],
          "70": [[0.25, 0.25, 0, 0.75, 0.75, 0.5]],
          "71": [[0.5, 0.25, 0.25, 1, 0.75, 0.75]],
          "72": [[0, 0.25, 0.25, 0.5, 0.75, 0.75]],
          "73": [[0.125, 0, 0, 0.875, 1, 1]],
          "74": [[0, 0, 0.125, 1, 1, 0.875]],
          "75": [[0, 0, 0, 1, 0.625, 1], [0, 0, 0, 0.125, 1, 1], [0.875, 0, 0, 1, 1, 1], [0, 0, 0, 1, 1, 0.125], [0, 0, 0.875, 1, 1, 1]],
          "76": [[0, 0, 0, 1, 0.0625, 1]],
          "77": [[0.375, 0, 0.375, 0.625, 1, 0.625]],
          "78": [[0.375, 0.375, 0, 0.625, 0.625, 1]],
          "79": [[0, 0.375, 0.375, 1, 0.625, 0.625]],
          "80": [[0.1875, 0.1875, 0.1875, 0.8125, 0.8125, 0.8125]],
          "81": [[0, 0, 0, 1, 0.8125, 1]],
          "82": [[0, 0, 0, 1, 0.8125, 1], [0.3125, 0.8125, 0.3125, 0.6875, 1, 0.6875]]
        }
      };
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/biomes.json
  var require_biomes = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/biomes.json"(exports, module) {
      module.exports = [
        {
          id: 0,
          name: "ocean",
          category: "ocean",
          temperature: 0.5,
          precipitation: "rain",
          depth: -1,
          dimension: "overworld",
          displayName: "Ocean",
          color: 112,
          rainfall: 0.5
        },
        {
          id: 1,
          name: "plains",
          category: "plains",
          temperature: 0.8,
          precipitation: "rain",
          depth: 0.125,
          dimension: "overworld",
          displayName: "Plains",
          color: 9286496,
          rainfall: 0.4,
          child: 129
        },
        {
          id: 2,
          name: "desert",
          category: "desert",
          temperature: 2,
          precipitation: "none",
          depth: 0.125,
          dimension: "overworld",
          displayName: "Desert",
          color: 16421912,
          rainfall: 0,
          child: 130
        },
        {
          id: 3,
          name: "mountains",
          category: "extreme_hills",
          temperature: 0.2,
          precipitation: "rain",
          depth: 1,
          dimension: "overworld",
          displayName: "Mountains",
          color: 6316128,
          rainfall: 0.3,
          child: 131
        },
        {
          id: 4,
          name: "forest",
          category: "forest",
          temperature: 0.7,
          precipitation: "rain",
          depth: 0.1,
          dimension: "overworld",
          displayName: "Forest",
          color: 353825,
          rainfall: 0.8,
          child: 132
        },
        {
          id: 5,
          name: "taiga",
          category: "taiga",
          temperature: 0.25,
          precipitation: "rain",
          depth: 0.2,
          dimension: "overworld",
          displayName: "Taiga",
          color: 747097,
          rainfall: 0.8,
          child: 133
        },
        {
          id: 6,
          name: "swamp",
          category: "swamp",
          temperature: 0.8,
          precipitation: "rain",
          depth: -0.2,
          dimension: "overworld",
          displayName: "Swamp",
          color: 522674,
          rainfall: 0.9,
          child: 134
        },
        {
          id: 7,
          name: "river",
          category: "river",
          temperature: 0.5,
          precipitation: "rain",
          depth: -0.5,
          dimension: "overworld",
          displayName: "River",
          color: 255,
          rainfall: 0.5
        },
        {
          id: 8,
          name: "nether_wastes",
          category: "nether",
          temperature: 2,
          precipitation: "none",
          depth: 0.1,
          climates: [
            {
              temperature: 0,
              humidity: 0,
              altitude: 0,
              weirdness: 0,
              offset: 0
            }
          ],
          dimension: "nether",
          displayName: "Nether Wastes",
          color: 12532539,
          rainfall: 0
        },
        {
          id: 9,
          name: "the_end",
          category: "the_end",
          temperature: 0.5,
          precipitation: "none",
          depth: 0.1,
          dimension: "end",
          displayName: "The End",
          color: 8421631,
          rainfall: 0.5
        },
        {
          id: 10,
          name: "frozen_ocean",
          category: "ocean",
          temperature: 0,
          precipitation: "snow",
          depth: -1,
          dimension: "overworld",
          displayName: "Frozen Ocean",
          color: 7368918,
          rainfall: 0.5
        },
        {
          id: 11,
          name: "frozen_river",
          category: "river",
          temperature: 0,
          precipitation: "snow",
          depth: -0.5,
          dimension: "overworld",
          displayName: "Frozen River",
          color: 10526975,
          rainfall: 0.5
        },
        {
          id: 12,
          name: "snowy_tundra",
          category: "icy",
          temperature: 0,
          precipitation: "snow",
          depth: 0.125,
          dimension: "overworld",
          displayName: "Snowy Tundra",
          color: 16777215,
          rainfall: 0.5,
          child: 140
        },
        {
          id: 13,
          name: "snowy_mountains",
          category: "icy",
          temperature: 0,
          precipitation: "snow",
          depth: 0.45,
          dimension: "overworld",
          displayName: "Snowy Mountains",
          color: 10526880,
          rainfall: 0.5
        },
        {
          id: 14,
          name: "mushroom_fields",
          category: "mushroom",
          temperature: 0.9,
          precipitation: "rain",
          depth: 0.2,
          dimension: "overworld",
          displayName: "Mushroom Fields",
          color: 16711935,
          rainfall: 1
        },
        {
          id: 15,
          name: "mushroom_field_shore",
          category: "mushroom",
          temperature: 0.9,
          precipitation: "rain",
          depth: 0,
          dimension: "overworld",
          displayName: "Mushroom Fields Shore",
          color: 10486015,
          rainfall: 1
        },
        {
          id: 16,
          name: "beach",
          category: "beach",
          temperature: 0.8,
          precipitation: "rain",
          depth: 0,
          dimension: "overworld",
          displayName: "Beach",
          color: 16440917,
          rainfall: 0.4
        },
        {
          id: 17,
          name: "desert_hills",
          category: "desert",
          temperature: 2,
          precipitation: "none",
          depth: 0.45,
          dimension: "overworld",
          displayName: "Desert Hills",
          color: 13786898,
          rainfall: 0
        },
        {
          id: 18,
          name: "wooded_hills",
          category: "forest",
          temperature: 0.7,
          precipitation: "rain",
          depth: 0.45,
          dimension: "overworld",
          displayName: "Wooded Hills",
          color: 2250012,
          rainfall: 0.8
        },
        {
          id: 19,
          name: "taiga_hills",
          category: "taiga",
          temperature: 0.25,
          precipitation: "rain",
          depth: 0.45,
          dimension: "overworld",
          displayName: "Taiga Hills",
          color: 1456435,
          rainfall: 0.8
        },
        {
          id: 20,
          name: "mountain_edge",
          category: "extreme_hills",
          temperature: 0.2,
          precipitation: "rain",
          depth: 0.8,
          dimension: "overworld",
          displayName: "Mountain Edge",
          color: 7501978,
          rainfall: 0.3
        },
        {
          id: 21,
          name: "jungle",
          category: "jungle",
          temperature: 0.95,
          precipitation: "rain",
          depth: 0.1,
          dimension: "overworld",
          displayName: "Jungle",
          color: 5470985,
          rainfall: 0.9,
          child: 149
        },
        {
          id: 22,
          name: "jungle_hills",
          category: "jungle",
          temperature: 0.95,
          precipitation: "rain",
          depth: 0.45,
          dimension: "overworld",
          displayName: "Jungle Hills",
          color: 2900485,
          rainfall: 0.9
        },
        {
          id: 23,
          name: "jungle_edge",
          category: "jungle",
          temperature: 0.95,
          precipitation: "rain",
          depth: 0.1,
          dimension: "overworld",
          displayName: "Jungle Edge",
          color: 6458135,
          rainfall: 0.8,
          child: 151
        },
        {
          id: 24,
          name: "deep_ocean",
          category: "ocean",
          temperature: 0.5,
          precipitation: "rain",
          depth: -1.8,
          dimension: "overworld",
          displayName: "Deep Ocean",
          color: 48,
          rainfall: 0.5
        },
        {
          id: 25,
          name: "stone_shore",
          category: "none",
          temperature: 0.2,
          precipitation: "rain",
          depth: 0.1,
          dimension: "overworld",
          displayName: "Stone Shore",
          color: 10658436,
          rainfall: 0.3
        },
        {
          id: 26,
          name: "snowy_beach",
          category: "beach",
          temperature: 0.05,
          precipitation: "snow",
          depth: 0,
          dimension: "overworld",
          displayName: "Snowy Beach",
          color: 16445632,
          rainfall: 0.3
        },
        {
          id: 27,
          name: "birch_forest",
          category: "forest",
          temperature: 0.6,
          precipitation: "rain",
          depth: 0.1,
          dimension: "overworld",
          displayName: "Birch Forest",
          color: 3175492,
          rainfall: 0.6,
          child: 155
        },
        {
          id: 28,
          name: "birch_forest_hills",
          category: "forest",
          temperature: 0.6,
          precipitation: "rain",
          depth: 0.45,
          dimension: "overworld",
          displayName: "Birch Forest Hills",
          color: 2055986,
          rainfall: 0.6,
          child: 156
        },
        {
          id: 29,
          name: "dark_forest",
          category: "forest",
          temperature: 0.7,
          precipitation: "rain",
          depth: 0.1,
          dimension: "overworld",
          displayName: "Dark Forest",
          color: 4215066,
          rainfall: 0.8,
          child: 157
        },
        {
          id: 30,
          name: "snowy_taiga",
          category: "taiga",
          temperature: -0.5,
          precipitation: "snow",
          depth: 0.2,
          dimension: "overworld",
          displayName: "Snowy Taiga",
          color: 3233098,
          rainfall: 0.4,
          child: 158
        },
        {
          id: 31,
          name: "snowy_taiga_hills",
          category: "taiga",
          temperature: -0.5,
          precipitation: "snow",
          depth: 0.45,
          dimension: "overworld",
          displayName: "Snowy Taiga Hills",
          color: 2375478,
          rainfall: 0.4
        },
        {
          id: 32,
          name: "giant_tree_taiga",
          category: "taiga",
          temperature: 0.3,
          precipitation: "rain",
          depth: 0.2,
          dimension: "overworld",
          displayName: "Giant Tree Taiga",
          color: 5858897,
          rainfall: 0.8,
          child: 160
        },
        {
          id: 33,
          name: "giant_tree_taiga_hills",
          category: "taiga",
          temperature: 0.3,
          precipitation: "rain",
          depth: 0.45,
          dimension: "overworld",
          displayName: "Giant Tree Taiga Hills",
          color: 4542270,
          rainfall: 0.8,
          child: 161
        },
        {
          id: 34,
          name: "wooded_mountains",
          category: "extreme_hills",
          temperature: 0.2,
          precipitation: "rain",
          depth: 1,
          dimension: "overworld",
          displayName: "Wooded Mountains",
          color: 5271632,
          rainfall: 0.3,
          child: 162
        },
        {
          id: 35,
          name: "savanna",
          category: "savanna",
          temperature: 1.2,
          precipitation: "none",
          depth: 0.125,
          dimension: "overworld",
          displayName: "Savanna",
          color: 12431967,
          rainfall: 0,
          child: 163
        },
        {
          id: 36,
          name: "savanna_plateau",
          category: "savanna",
          temperature: 1,
          precipitation: "none",
          depth: 1.5,
          dimension: "overworld",
          displayName: "Savanna Plateau",
          color: 10984804,
          rainfall: 0,
          child: 164
        },
        {
          id: 37,
          name: "badlands",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: 0.1,
          dimension: "overworld",
          displayName: "Badlands",
          color: 14238997,
          rainfall: 0,
          child: 165
        },
        {
          id: 38,
          name: "wooded_badlands_plateau",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: 1.5,
          dimension: "overworld",
          displayName: "Wooded Badlands Plateau",
          color: 11573093,
          rainfall: 0,
          child: 166
        },
        {
          id: 39,
          name: "badlands_plateau",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: 1.5,
          dimension: "overworld",
          displayName: "Badlands Plateau",
          color: 13274213,
          rainfall: 0,
          child: 167
        },
        {
          id: 127,
          name: "the_void",
          category: "none",
          temperature: 0.5,
          precipitation: "none",
          depth: 0.1,
          dimension: "end",
          displayName: "the_void",
          rainfall: 0.5,
          color: 0
        },
        {
          id: 129,
          name: "sunflower_plains",
          category: "plains",
          temperature: 0.8,
          precipitation: "rain",
          depth: 0.125,
          dimension: "overworld",
          displayName: "Sunflower Plains",
          color: 11918216,
          parent: "plains",
          rainfall: 0.4
        },
        {
          id: 130,
          name: "desert_lakes",
          category: "desert",
          temperature: 2,
          precipitation: "none",
          depth: 0.125,
          dimension: "overworld",
          displayName: "Desert Lakes",
          color: 16759872,
          parent: "desert",
          rainfall: 0
        },
        {
          id: 131,
          name: "gravelly_mountains",
          category: "extreme_hills",
          temperature: 0.2,
          precipitation: "rain",
          depth: 1,
          dimension: "overworld",
          displayName: "Gravelly Mountains",
          color: 8947848,
          parent: "mountains",
          rainfall: 0.3
        },
        {
          id: 132,
          name: "flower_forest",
          category: "forest",
          temperature: 0.7,
          precipitation: "rain",
          depth: 0.1,
          dimension: "overworld",
          displayName: "Flower Forest",
          color: 2985545,
          parent: "forest",
          rainfall: 0.8
        },
        {
          id: 133,
          name: "taiga_mountains",
          category: "taiga",
          temperature: 0.25,
          precipitation: "rain",
          depth: 0.3,
          dimension: "overworld",
          displayName: "Taiga Mountains",
          color: 3378817,
          parent: "taiga",
          rainfall: 0.8
        },
        {
          id: 134,
          name: "swamp_hills",
          category: "swamp",
          temperature: 0.8,
          precipitation: "rain",
          depth: -0.1,
          dimension: "overworld",
          displayName: "Swamp Hills",
          color: 3145690,
          parent: "swamp",
          rainfall: 0.9
        },
        {
          id: 140,
          name: "ice_spikes",
          category: "icy",
          temperature: 0,
          precipitation: "snow",
          depth: 0.425,
          dimension: "overworld",
          displayName: "Ice Spikes",
          color: 11853020,
          parent: "snowy_tundra",
          rainfall: 0.5
        },
        {
          id: 149,
          name: "modified_jungle",
          category: "jungle",
          temperature: 0.95,
          precipitation: "rain",
          depth: 0.2,
          dimension: "overworld",
          displayName: "Modified Jungle",
          color: 8102705,
          parent: "jungle",
          rainfall: 0.9
        },
        {
          id: 151,
          name: "modified_jungle_edge",
          category: "jungle",
          temperature: 0.95,
          precipitation: "rain",
          depth: 0.2,
          dimension: "overworld",
          displayName: "Modified Jungle Edge",
          color: 9089855,
          parent: "jungle_edge",
          rainfall: 0.8
        },
        {
          id: 155,
          name: "tall_birch_forest",
          category: "forest",
          temperature: 0.6,
          precipitation: "rain",
          depth: 0.2,
          dimension: "overworld",
          displayName: "Tall Birch Forest",
          color: 5807212,
          parent: "birch_forest",
          rainfall: 0.6
        },
        {
          id: 156,
          name: "tall_birch_hills",
          category: "forest",
          temperature: 0.6,
          precipitation: "rain",
          depth: 0.55,
          dimension: "overworld",
          displayName: "Tall Birch Hills",
          color: 4687706,
          parent: "birch_forest_hills",
          rainfall: 0.6
        },
        {
          id: 157,
          name: "dark_forest_hills",
          category: "forest",
          temperature: 0.7,
          precipitation: "rain",
          depth: 0.2,
          dimension: "overworld",
          displayName: "Dark Forest Hills",
          color: 6846786,
          parent: "dark_forest",
          rainfall: 0.8
        },
        {
          id: 158,
          name: "snowy_taiga_mountains",
          category: "taiga",
          temperature: -0.5,
          precipitation: "snow",
          depth: 0.3,
          dimension: "overworld",
          displayName: "Snowy Taiga Mountains",
          color: 5864818,
          parent: "snowy_taiga",
          rainfall: 0.4
        },
        {
          id: 160,
          name: "giant_spruce_taiga",
          category: "taiga",
          temperature: 0.25,
          precipitation: "rain",
          depth: 0.2,
          dimension: "overworld",
          displayName: "Giant Spruce Taiga",
          color: 8490617,
          parent: "giant_tree_taiga",
          rainfall: 0.8
        },
        {
          id: 161,
          name: "giant_spruce_taiga_hills",
          category: "taiga",
          temperature: 0.25,
          precipitation: "rain",
          depth: 0.2,
          dimension: "overworld",
          displayName: "Giant Spruce Taiga Hills",
          color: 7173990,
          parent: "giant_tree_taiga_hills",
          rainfall: 0.8
        },
        {
          id: 162,
          name: "modified_gravelly_mountains",
          category: "extreme_hills",
          temperature: 0.2,
          precipitation: "rain",
          depth: 1,
          dimension: "overworld",
          displayName: "Gravelly Mountains+",
          color: 7903352,
          parent: "wooded_mountains",
          rainfall: 0.3
        },
        {
          id: 163,
          name: "shattered_savanna",
          category: "savanna",
          temperature: 1.1,
          precipitation: "none",
          depth: 0.3625,
          dimension: "overworld",
          displayName: "Shattered Savanna",
          color: 15063687,
          parent: "savanna",
          rainfall: 0
        },
        {
          id: 164,
          name: "shattered_savanna_plateau",
          category: "savanna",
          temperature: 1,
          precipitation: "none",
          depth: 1.05,
          dimension: "overworld",
          displayName: "Shattered Savanna Plateau",
          color: 13616524,
          parent: "savanna_plateau",
          rainfall: 0
        },
        {
          id: 165,
          name: "eroded_badlands",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: 0.1,
          dimension: "overworld",
          displayName: "Eroded Badlands",
          color: 16739645,
          parent: "badlands",
          rainfall: 0
        },
        {
          id: 166,
          name: "modified_wooded_badlands_plateau",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: 0.45,
          dimension: "overworld",
          displayName: "Modified Wooded Badlands Plateau",
          color: 14204813,
          parent: "wooded_badlands_plateau",
          rainfall: 0
        },
        {
          id: 167,
          name: "modified_badlands_plateau",
          category: "mesa",
          temperature: 2,
          precipitation: "none",
          depth: 0.45,
          dimension: "overworld",
          displayName: "Modified Badlands Plateau",
          color: 15905933,
          parent: "badlands_plateau",
          rainfall: 0
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/effects.json
  var require_effects = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/effects.json"(exports, module) {
      module.exports = [
        {
          id: 1,
          name: "Speed",
          displayName: "Speed",
          type: "good"
        },
        {
          id: 2,
          name: "Slowness",
          displayName: "Slowness",
          type: "bad"
        },
        {
          id: 3,
          name: "Haste",
          displayName: "Haste",
          type: "good"
        },
        {
          id: 4,
          name: "MiningFatigue",
          displayName: "Mining Fatigue",
          type: "bad"
        },
        {
          id: 5,
          name: "Strength",
          displayName: "Strength",
          type: "good"
        },
        {
          id: 6,
          name: "InstantHealth",
          displayName: "Instant Health",
          type: "good"
        },
        {
          id: 7,
          name: "InstantDamage",
          displayName: "Instant Damage",
          type: "bad"
        },
        {
          id: 8,
          name: "JumpBoost",
          displayName: "Jump Boost",
          type: "good"
        },
        {
          id: 9,
          name: "Nausea",
          displayName: "Nausea",
          type: "bad"
        },
        {
          id: 10,
          name: "Regeneration",
          displayName: "Regeneration",
          type: "good"
        },
        {
          id: 11,
          name: "Resistance",
          displayName: "Resistance",
          type: "good"
        },
        {
          id: 12,
          name: "FireResistance",
          displayName: "Fire Resistance",
          type: "good"
        },
        {
          id: 13,
          name: "WaterBreathing",
          displayName: "Water Breathing",
          type: "good"
        },
        {
          id: 14,
          name: "Invisibility",
          displayName: "Invisibility",
          type: "good"
        },
        {
          id: 15,
          name: "Blindness",
          displayName: "Blindness",
          type: "bad"
        },
        {
          id: 16,
          name: "NightVision",
          displayName: "Night Vision",
          type: "good"
        },
        {
          id: 17,
          name: "Hunger",
          displayName: "Hunger",
          type: "bad"
        },
        {
          id: 18,
          name: "Weakness",
          displayName: "Weakness",
          type: "bad"
        },
        {
          id: 19,
          name: "Poison",
          displayName: "Poison",
          type: "bad"
        },
        {
          id: 20,
          name: "Wither",
          displayName: "Wither",
          type: "bad"
        },
        {
          id: 21,
          name: "HealthBoost",
          displayName: "Health Boost",
          type: "good"
        },
        {
          id: 22,
          name: "Absorption",
          displayName: "Absorption",
          type: "good"
        },
        {
          id: 23,
          name: "Saturation",
          displayName: "Saturation",
          type: "good"
        },
        {
          id: 24,
          name: "Glowing",
          displayName: "Glowing",
          type: "bad"
        },
        {
          id: 25,
          name: "Levitation",
          displayName: "Levitation",
          type: "bad"
        },
        {
          id: 26,
          name: "Luck",
          displayName: "Luck",
          type: "good"
        },
        {
          id: 27,
          name: "BadLuck",
          displayName: "Bad Luck",
          type: "bad"
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/enchantments.json
  var require_enchantments = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/enchantments.json"(exports, module) {
      module.exports = [
        {
          id: 0,
          name: "protection",
          displayName: "Protection",
          maxLevel: 4,
          minCost: {
            a: 11,
            b: -10
          },
          maxCost: {
            a: 11,
            b: 1
          },
          exclude: [
            "blast_protection",
            "fire_protection",
            "projectile_protection"
          ],
          category: "armor",
          weight: 10,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 1,
          name: "fire_protection",
          displayName: "Fire Protection",
          maxLevel: 4,
          minCost: {
            a: 8,
            b: 2
          },
          maxCost: {
            a: 8,
            b: 10
          },
          exclude: [
            "blast_protection",
            "protection",
            "projectile_protection"
          ],
          category: "armor",
          weight: 5,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 2,
          name: "feather_falling",
          displayName: "Feather Falling",
          maxLevel: 4,
          minCost: {
            a: 6,
            b: -1
          },
          maxCost: {
            a: 6,
            b: 5
          },
          exclude: [],
          category: "armor_feet",
          weight: 5,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 3,
          name: "blast_protection",
          displayName: "Blast Protection",
          maxLevel: 4,
          minCost: {
            a: 8,
            b: -3
          },
          maxCost: {
            a: 8,
            b: 5
          },
          exclude: [
            "fire_protection",
            "protection",
            "projectile_protection"
          ],
          category: "armor",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 4,
          name: "projectile_protection",
          displayName: "Projectile Protection",
          maxLevel: 4,
          minCost: {
            a: 6,
            b: -3
          },
          maxCost: {
            a: 6,
            b: 3
          },
          exclude: [
            "protection",
            "blast_protection",
            "fire_protection"
          ],
          category: "armor",
          weight: 5,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 5,
          name: "respiration",
          displayName: "Respiration",
          maxLevel: 3,
          minCost: {
            a: 10,
            b: 0
          },
          maxCost: {
            a: 10,
            b: 30
          },
          exclude: [],
          category: "armor_head",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 6,
          name: "aqua_affinity",
          displayName: "Aqua Affinity",
          maxLevel: 1,
          minCost: {
            a: 0,
            b: 1
          },
          maxCost: {
            a: 0,
            b: 41
          },
          exclude: [],
          category: "armor_head",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 7,
          name: "thorns",
          displayName: "Thorns",
          maxLevel: 3,
          minCost: {
            a: 20,
            b: -10
          },
          maxCost: {
            a: 10,
            b: 51
          },
          exclude: [],
          category: "armor_chest",
          weight: 1,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 8,
          name: "depth_strider",
          displayName: "Depth Strider",
          maxLevel: 3,
          minCost: {
            a: 10,
            b: 0
          },
          maxCost: {
            a: 10,
            b: 15
          },
          exclude: [
            "frost_walker"
          ],
          category: "armor_feet",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 9,
          name: "frost_walker",
          displayName: "Frost Walker",
          maxLevel: 2,
          minCost: {
            a: 10,
            b: 0
          },
          maxCost: {
            a: 10,
            b: 15
          },
          exclude: [
            "depth_strider"
          ],
          category: "armor_feet",
          weight: 2,
          treasureOnly: true,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 10,
          name: "binding_curse",
          displayName: "Curse of Binding",
          maxLevel: 1,
          minCost: {
            a: 0,
            b: 25
          },
          maxCost: {
            a: 0,
            b: 50
          },
          exclude: [],
          category: "wearable",
          weight: 1,
          treasureOnly: true,
          curse: true,
          tradeable: true,
          discoverable: true
        },
        {
          id: 16,
          name: "sharpness",
          displayName: "Sharpness",
          maxLevel: 5,
          minCost: {
            a: 11,
            b: -10
          },
          maxCost: {
            a: 11,
            b: 10
          },
          exclude: [
            "smite",
            "bane_of_arthropods"
          ],
          category: "weapon",
          weight: 10,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 17,
          name: "smite",
          displayName: "Smite",
          maxLevel: 5,
          minCost: {
            a: 8,
            b: -3
          },
          maxCost: {
            a: 8,
            b: 17
          },
          exclude: [
            "sharpness",
            "bane_of_arthropods"
          ],
          category: "weapon",
          weight: 5,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 18,
          name: "bane_of_arthropods",
          displayName: "Bane of Arthropods",
          maxLevel: 5,
          minCost: {
            a: 8,
            b: -3
          },
          maxCost: {
            a: 8,
            b: 17
          },
          exclude: [
            "smite",
            "sharpness"
          ],
          category: "weapon",
          weight: 5,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 19,
          name: "knockback",
          displayName: "Knockback",
          maxLevel: 2,
          minCost: {
            a: 20,
            b: -15
          },
          maxCost: {
            a: 10,
            b: 51
          },
          exclude: [],
          category: "weapon",
          weight: 5,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 20,
          name: "fire_aspect",
          displayName: "Fire Aspect",
          maxLevel: 2,
          minCost: {
            a: 20,
            b: -10
          },
          maxCost: {
            a: 10,
            b: 51
          },
          exclude: [],
          category: "weapon",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 21,
          name: "looting",
          displayName: "Looting",
          maxLevel: 3,
          minCost: {
            a: 9,
            b: 6
          },
          maxCost: {
            a: 10,
            b: 51
          },
          exclude: [],
          category: "weapon",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 22,
          name: "sweeping_edge",
          displayName: "Sweeping Edge",
          maxLevel: 3,
          minCost: {
            a: 9,
            b: -4
          },
          maxCost: {
            a: 9,
            b: 11
          },
          exclude: [],
          category: "weapon",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 32,
          name: "efficiency",
          displayName: "Efficiency",
          maxLevel: 5,
          minCost: {
            a: 10,
            b: -9
          },
          maxCost: {
            a: 10,
            b: 51
          },
          exclude: [],
          category: "digger",
          weight: 10,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 33,
          name: "silk_touch",
          displayName: "Silk Touch",
          maxLevel: 1,
          minCost: {
            a: 0,
            b: 15
          },
          maxCost: {
            a: 10,
            b: 51
          },
          exclude: [
            "fortune"
          ],
          category: "digger",
          weight: 1,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 34,
          name: "unbreaking",
          displayName: "Unbreaking",
          maxLevel: 3,
          minCost: {
            a: 8,
            b: -3
          },
          maxCost: {
            a: 10,
            b: 51
          },
          exclude: [],
          category: "breakable",
          weight: 5,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 35,
          name: "fortune",
          displayName: "Fortune",
          maxLevel: 3,
          minCost: {
            a: 9,
            b: 6
          },
          maxCost: {
            a: 10,
            b: 51
          },
          exclude: [
            "silk_touch"
          ],
          category: "digger",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 48,
          name: "power",
          displayName: "Power",
          maxLevel: 5,
          minCost: {
            a: 10,
            b: -9
          },
          maxCost: {
            a: 10,
            b: 6
          },
          exclude: [],
          category: "bow",
          weight: 10,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 49,
          name: "punch",
          displayName: "Punch",
          maxLevel: 2,
          minCost: {
            a: 20,
            b: -8
          },
          maxCost: {
            a: 20,
            b: 17
          },
          exclude: [],
          category: "bow",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 50,
          name: "flame",
          displayName: "Flame",
          maxLevel: 1,
          minCost: {
            a: 0,
            b: 20
          },
          maxCost: {
            a: 0,
            b: 50
          },
          exclude: [],
          category: "bow",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 51,
          name: "infinity",
          displayName: "Infinity",
          maxLevel: 1,
          minCost: {
            a: 0,
            b: 20
          },
          maxCost: {
            a: 0,
            b: 50
          },
          exclude: [
            "mending"
          ],
          category: "bow",
          weight: 1,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 61,
          name: "luck_of_the_sea",
          displayName: "Luck of the Sea",
          maxLevel: 3,
          minCost: {
            a: 9,
            b: 6
          },
          maxCost: {
            a: 10,
            b: 51
          },
          exclude: [],
          category: "fishing_rod",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 62,
          name: "lure",
          displayName: "Lure",
          maxLevel: 3,
          minCost: {
            a: 9,
            b: 6
          },
          maxCost: {
            a: 10,
            b: 51
          },
          exclude: [],
          category: "fishing_rod",
          weight: 2,
          treasureOnly: false,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 70,
          name: "mending",
          displayName: "Mending",
          maxLevel: 1,
          minCost: {
            a: 25,
            b: 0
          },
          maxCost: {
            a: 25,
            b: 50
          },
          exclude: [
            "infinity"
          ],
          category: "breakable",
          weight: 2,
          treasureOnly: true,
          curse: false,
          tradeable: true,
          discoverable: true
        },
        {
          id: 71,
          name: "vanishing_curse",
          displayName: "Curse of Vanishing",
          maxLevel: 1,
          minCost: {
            a: 0,
            b: 25
          },
          maxCost: {
            a: 0,
            b: 50
          },
          exclude: [],
          category: "vanishable",
          weight: 1,
          treasureOnly: true,
          curse: true,
          tradeable: true,
          discoverable: true
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/items.json
  var require_items = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/items.json"(exports, module) {
      module.exports = [
        {
          id: 1,
          displayName: "Stone",
          name: "stone",
          stackSize: 64
        },
        {
          id: 2,
          displayName: "Grass Block",
          name: "grass",
          stackSize: 64
        },
        {
          id: 3,
          displayName: "Dirt",
          name: "dirt",
          stackSize: 64
        },
        {
          id: 4,
          displayName: "Cobblestone",
          name: "cobblestone",
          stackSize: 64
        },
        {
          id: 5,
          displayName: "Wooden Planks",
          name: "planks",
          stackSize: 64
        },
        {
          id: 6,
          displayName: "Sapling",
          name: "sapling",
          stackSize: 64
        },
        {
          id: 7,
          displayName: "Bedrock",
          name: "bedrock",
          stackSize: 64
        },
        {
          id: 12,
          displayName: "Sand",
          name: "sand",
          stackSize: 64
        },
        {
          id: 13,
          displayName: "Gravel",
          name: "gravel",
          stackSize: 64
        },
        {
          id: 14,
          displayName: "Gold Ore",
          name: "gold_ore",
          stackSize: 64
        },
        {
          id: 15,
          displayName: "Iron Ore",
          name: "iron_ore",
          stackSize: 64
        },
        {
          id: 16,
          displayName: "Coal Ore",
          name: "coal_ore",
          stackSize: 64
        },
        {
          id: 17,
          displayName: "Wood",
          name: "log",
          stackSize: 64
        },
        {
          id: 18,
          displayName: "Leaves",
          name: "leaves",
          stackSize: 64
        },
        {
          id: 19,
          displayName: "Sponge",
          name: "sponge",
          stackSize: 64
        },
        {
          id: 20,
          displayName: "Glass",
          name: "glass",
          stackSize: 64
        },
        {
          id: 21,
          displayName: "Lapis Lazuli Ore",
          name: "lapis_ore",
          stackSize: 64
        },
        {
          id: 22,
          displayName: "Lapis Lazuli Block",
          name: "lapis_block",
          stackSize: 64
        },
        {
          id: 23,
          displayName: "Dispenser",
          name: "dispenser",
          stackSize: 64
        },
        {
          id: 24,
          displayName: "Sandstone",
          name: "sandstone",
          stackSize: 64
        },
        {
          id: 25,
          displayName: "Note Block",
          name: "noteblock",
          stackSize: 64
        },
        {
          id: 27,
          displayName: "Powered Rail",
          name: "golden_rail",
          stackSize: 64
        },
        {
          id: 28,
          displayName: "Detector Rail",
          name: "detector_rail",
          stackSize: 64
        },
        {
          id: 29,
          displayName: "Sticky Piston",
          name: "sticky_piston",
          stackSize: 64
        },
        {
          id: 30,
          displayName: "Cobweb",
          name: "web",
          stackSize: 64
        },
        {
          id: 31,
          displayName: "Grass",
          name: "tallgrass",
          stackSize: 64
        },
        {
          id: 32,
          displayName: "Dead Bush",
          name: "deadbush",
          stackSize: 64
        },
        {
          id: 33,
          displayName: "Piston",
          name: "piston",
          stackSize: 64
        },
        {
          id: 35,
          displayName: "Wool",
          name: "wool",
          stackSize: 64
        },
        {
          id: 37,
          displayName: "Dandelion",
          name: "yellow_flower",
          stackSize: 64
        },
        {
          id: 38,
          displayName: "Poppy",
          name: "red_flower",
          stackSize: 64
        },
        {
          id: 39,
          displayName: "Brown Mushroom",
          name: "brown_mushroom",
          stackSize: 64
        },
        {
          id: 40,
          displayName: "Red Mushroom",
          name: "red_mushroom",
          stackSize: 64
        },
        {
          id: 41,
          displayName: "Block of Gold",
          name: "gold_block",
          stackSize: 64
        },
        {
          id: 42,
          displayName: "Block of Iron",
          name: "iron_block",
          stackSize: 64
        },
        {
          id: 44,
          displayName: "Stone Slab",
          name: "stone_slab",
          stackSize: 64
        },
        {
          id: 45,
          displayName: "Brick",
          name: "brick_block",
          stackSize: 64
        },
        {
          id: 46,
          displayName: "TNT",
          name: "tnt",
          stackSize: 64
        },
        {
          id: 47,
          displayName: "Bookshelf",
          name: "bookshelf",
          stackSize: 64
        },
        {
          id: 48,
          displayName: "Moss Stone",
          name: "mossy_cobblestone",
          stackSize: 64
        },
        {
          id: 49,
          displayName: "Obsidian",
          name: "obsidian",
          stackSize: 64
        },
        {
          id: 50,
          displayName: "Torch",
          name: "torch",
          stackSize: 64
        },
        {
          id: 52,
          displayName: "Monster Spawner",
          name: "mob_spawner",
          stackSize: 64
        },
        {
          id: 53,
          displayName: "Oak Wood Stairs",
          name: "oak_stairs",
          stackSize: 64
        },
        {
          id: 54,
          displayName: "Chest",
          name: "chest",
          stackSize: 64
        },
        {
          id: 56,
          displayName: "Diamond Ore",
          name: "diamond_ore",
          stackSize: 64
        },
        {
          id: 57,
          displayName: "Block of Diamond",
          name: "diamond_block",
          stackSize: 64
        },
        {
          id: 58,
          displayName: "Crafting Table",
          name: "crafting_table",
          stackSize: 64
        },
        {
          id: 60,
          displayName: "Farmland",
          name: "farmland",
          stackSize: 64
        },
        {
          id: 61,
          displayName: "Furnace",
          name: "furnace",
          stackSize: 64
        },
        {
          id: 65,
          displayName: "Ladder",
          name: "ladder",
          stackSize: 64
        },
        {
          id: 66,
          displayName: "Rail",
          name: "rail",
          stackSize: 64
        },
        {
          id: 67,
          displayName: "Cobblestone Stairs",
          name: "stone_stairs",
          stackSize: 64
        },
        {
          id: 69,
          displayName: "Lever",
          name: "lever",
          stackSize: 64
        },
        {
          id: 70,
          displayName: "Stone Pressure Plate",
          name: "stone_pressure_plate",
          stackSize: 64
        },
        {
          id: 72,
          displayName: "Wooden Pressure Plate",
          name: "wooden_pressure_plate",
          stackSize: 64
        },
        {
          id: 73,
          displayName: "Redstone Ore",
          name: "redstone_ore",
          stackSize: 64
        },
        {
          id: 76,
          displayName: "Redstone Torch",
          name: "redstone_torch",
          stackSize: 64
        },
        {
          id: 77,
          displayName: "Stone Button",
          name: "stone_button",
          stackSize: 64
        },
        {
          id: 78,
          displayName: "Snow",
          name: "snow_layer",
          stackSize: 64
        },
        {
          id: 79,
          displayName: "Ice",
          name: "ice",
          stackSize: 64
        },
        {
          id: 80,
          displayName: "Snow",
          name: "snow",
          stackSize: 64
        },
        {
          id: 81,
          displayName: "Cactus",
          name: "cactus",
          stackSize: 64
        },
        {
          id: 82,
          displayName: "Clay",
          name: "clay",
          stackSize: 64
        },
        {
          id: 84,
          displayName: "Jukebox",
          name: "jukebox",
          stackSize: 64
        },
        {
          id: 85,
          displayName: "Oak Fence",
          name: "fence",
          stackSize: 64
        },
        {
          id: 86,
          displayName: "Pumpkin",
          name: "pumpkin",
          stackSize: 64
        },
        {
          id: 87,
          displayName: "Netherrack",
          name: "netherrack",
          stackSize: 64
        },
        {
          id: 88,
          displayName: "Soul Sand",
          name: "soul_sand",
          stackSize: 64
        },
        {
          id: 89,
          displayName: "Glowstone",
          name: "glowstone",
          stackSize: 64
        },
        {
          id: 91,
          displayName: "Jack o'Lantern",
          name: "lit_pumpkin",
          stackSize: 64
        },
        {
          id: 95,
          displayName: "Stained Glass",
          name: "stained_glass",
          stackSize: 64
        },
        {
          id: 96,
          displayName: "Wooden Trapdoor",
          name: "trapdoor",
          stackSize: 64
        },
        {
          id: 97,
          displayName: "Monster Egg",
          name: "monster_egg",
          stackSize: 64
        },
        {
          id: 98,
          displayName: "Stone Bricks",
          name: "stonebrick",
          stackSize: 64
        },
        {
          id: 99,
          displayName: "Brown Mushroom Block",
          name: "brown_mushroom_block",
          stackSize: 64
        },
        {
          id: 100,
          displayName: "Red Mushroom Block",
          name: "red_mushroom_block",
          stackSize: 64
        },
        {
          id: 101,
          displayName: "Iron Bars",
          name: "iron_bars",
          stackSize: 64
        },
        {
          id: 102,
          displayName: "Glass Pane",
          name: "glass_pane",
          stackSize: 64
        },
        {
          id: 103,
          displayName: "Melon",
          name: "melon_block",
          stackSize: 64
        },
        {
          id: 106,
          displayName: "Vines",
          name: "vine",
          stackSize: 64
        },
        {
          id: 107,
          displayName: "Oak Fence Gate",
          name: "fence_gate",
          stackSize: 64
        },
        {
          id: 108,
          displayName: "Brick Stairs",
          name: "brick_stairs",
          stackSize: 64
        },
        {
          id: 109,
          displayName: "Stone Brick Stairs",
          name: "stone_brick_stairs",
          stackSize: 64
        },
        {
          id: 110,
          displayName: "Mycelium",
          name: "mycelium",
          stackSize: 64
        },
        {
          id: 111,
          displayName: "Lily Pad",
          name: "waterlily",
          stackSize: 64
        },
        {
          id: 112,
          displayName: "Nether Brick",
          name: "nether_brick",
          stackSize: 64
        },
        {
          id: 113,
          displayName: "Nether Brick Fence",
          name: "nether_brick_fence",
          stackSize: 64
        },
        {
          id: 114,
          displayName: "Nether Brick Stairs",
          name: "nether_brick_stairs",
          stackSize: 64
        },
        {
          id: 116,
          displayName: "Enchantment Table",
          name: "enchanting_table",
          stackSize: 64
        },
        {
          id: 120,
          displayName: "End Portal Frame",
          name: "end_portal_frame",
          stackSize: 64
        },
        {
          id: 121,
          displayName: "End Stone",
          name: "end_stone",
          stackSize: 64
        },
        {
          id: 122,
          displayName: "Dragon Egg",
          name: "dragon_egg",
          stackSize: 64
        },
        {
          id: 123,
          displayName: "Redstone Lamp",
          name: "redstone_lamp",
          stackSize: 64
        },
        {
          id: 126,
          displayName: "Wood Slab",
          name: "wooden_slab",
          stackSize: 64
        },
        {
          id: 128,
          displayName: "Sandstone Stairs",
          name: "sandstone_stairs",
          stackSize: 64
        },
        {
          id: 129,
          displayName: "Emerald Ore",
          name: "emerald_ore",
          stackSize: 64
        },
        {
          id: 130,
          displayName: "Ender Chest",
          name: "ender_chest",
          stackSize: 64
        },
        {
          id: 131,
          displayName: "Tripwire Hook",
          name: "tripwire_hook",
          stackSize: 64
        },
        {
          id: 133,
          displayName: "Block of Emerald",
          name: "emerald_block",
          stackSize: 64
        },
        {
          id: 134,
          displayName: "Spruce Wood Stairs",
          name: "spruce_stairs",
          stackSize: 64
        },
        {
          id: 135,
          displayName: "Birch Wood Stairs",
          name: "birch_stairs",
          stackSize: 64
        },
        {
          id: 136,
          displayName: "Jungle Wood Stairs",
          name: "jungle_stairs",
          stackSize: 64
        },
        {
          id: 137,
          displayName: "Command Block",
          name: "command_block",
          stackSize: 64
        },
        {
          id: 138,
          displayName: "Beacon",
          name: "beacon",
          stackSize: 64
        },
        {
          id: 139,
          displayName: "Cobblestone Wall",
          name: "cobblestone_wall",
          stackSize: 64
        },
        {
          id: 143,
          displayName: "Wooden Button",
          name: "wooden_button",
          stackSize: 64
        },
        {
          id: 145,
          displayName: "Anvil",
          name: "anvil",
          stackSize: 64
        },
        {
          id: 146,
          displayName: "Trapped Chest",
          name: "trapped_chest",
          stackSize: 64
        },
        {
          id: 147,
          displayName: "Weighted Pressure Plate (Light)",
          name: "light_weighted_pressure_plate",
          stackSize: 64
        },
        {
          id: 148,
          displayName: "Weighted Pressure Plate (Heavy)",
          name: "heavy_weighted_pressure_plate",
          stackSize: 64
        },
        {
          id: 151,
          displayName: "Daylight Detector",
          name: "daylight_detector",
          stackSize: 64
        },
        {
          id: 152,
          displayName: "Block of Redstone",
          name: "redstone_block",
          stackSize: 64
        },
        {
          id: 153,
          displayName: "Nether Quartz",
          name: "quartz_ore",
          stackSize: 64
        },
        {
          id: 154,
          displayName: "Hopper",
          name: "hopper",
          stackSize: 64
        },
        {
          id: 155,
          displayName: "Block of Quartz",
          name: "quartz_block",
          stackSize: 64
        },
        {
          id: 156,
          displayName: "Quartz Stairs",
          name: "quartz_stairs",
          stackSize: 64
        },
        {
          id: 157,
          displayName: "Activator Rail",
          name: "activator_rail",
          stackSize: 64
        },
        {
          id: 158,
          displayName: "Dropper",
          name: "dropper",
          stackSize: 64
        },
        {
          id: 159,
          displayName: "Stained Hardened Clay",
          name: "stained_hardened_clay",
          stackSize: 64
        },
        {
          id: 160,
          displayName: "Stained Glass Pane",
          name: "stained_glass_pane",
          stackSize: 64
        },
        {
          id: 161,
          displayName: "Leaves",
          name: "leaves2",
          stackSize: 64
        },
        {
          id: 162,
          displayName: "Wood",
          name: "log2",
          stackSize: 64
        },
        {
          id: 163,
          displayName: "Acacia Wood Stairs",
          name: "acacia_stairs",
          stackSize: 64
        },
        {
          id: 164,
          displayName: "Dark Oak Wood Stairs",
          name: "dark_oak_stairs",
          stackSize: 64
        },
        {
          id: 165,
          displayName: "Slime Block",
          name: "slime",
          stackSize: 64
        },
        {
          id: 166,
          displayName: "Barrier",
          name: "barrier",
          stackSize: 64
        },
        {
          id: 167,
          displayName: "Iron Trapdoor",
          name: "iron_trapdoor",
          stackSize: 64
        },
        {
          id: 168,
          displayName: "Prismarine",
          name: "prismarine",
          stackSize: 64
        },
        {
          id: 169,
          displayName: "Sea Lantern",
          name: "sea_lantern",
          stackSize: 64
        },
        {
          id: 170,
          displayName: "Hay Bale",
          name: "hay_block",
          stackSize: 64
        },
        {
          id: 171,
          displayName: "Carpet",
          name: "carpet",
          stackSize: 64
        },
        {
          id: 172,
          displayName: "Hardened Clay",
          name: "hardened_clay",
          stackSize: 64
        },
        {
          id: 173,
          displayName: "Block of Coal",
          name: "coal_block",
          stackSize: 64
        },
        {
          id: 174,
          displayName: "Packed Ice",
          name: "packed_ice",
          stackSize: 64
        },
        {
          id: 175,
          displayName: "Large Flowers",
          name: "double_plant",
          stackSize: 64
        },
        {
          id: 179,
          displayName: "Red Sandstone",
          name: "red_sandstone",
          stackSize: 64
        },
        {
          id: 180,
          displayName: "Red Sandstone Stairs",
          name: "red_sandstone_stairs",
          stackSize: 64
        },
        {
          id: 182,
          displayName: "Red Sandstone Slab",
          name: "stone_slab2",
          stackSize: 64
        },
        {
          id: 183,
          displayName: "Spruce Fence Gate",
          name: "spruce_fence_gate",
          stackSize: 64
        },
        {
          id: 184,
          displayName: "Birch Fence Gate",
          name: "birch_fence_gate",
          stackSize: 64
        },
        {
          id: 185,
          displayName: "Jungle Fence Gate",
          name: "jungle_fence_gate",
          stackSize: 64
        },
        {
          id: 186,
          displayName: "Dark Oak Fence Gate",
          name: "dark_oak_fence_gate",
          stackSize: 64
        },
        {
          id: 187,
          displayName: "Acacia Fence Gate",
          name: "acacia_fence_gate",
          stackSize: 64
        },
        {
          id: 188,
          displayName: "Spruce Fence",
          name: "spruce_fence",
          stackSize: 64
        },
        {
          id: 189,
          displayName: "Birch Fence",
          name: "birch_fence",
          stackSize: 64
        },
        {
          id: 190,
          displayName: "Jungle Fence",
          name: "jungle_fence",
          stackSize: 64
        },
        {
          id: 191,
          displayName: "Dark Oak Fence",
          name: "dark_oak_fence",
          stackSize: 64
        },
        {
          id: 192,
          displayName: "Acacia Fence",
          name: "acacia_fence",
          stackSize: 64
        },
        {
          id: 198,
          displayName: "End Rod",
          name: "end_rod",
          stackSize: 64
        },
        {
          id: 199,
          displayName: "Chorus Plant",
          name: "chorus_plant",
          stackSize: 64
        },
        {
          id: 200,
          displayName: "Chorus Flower",
          name: "chorus_flower",
          stackSize: 64
        },
        {
          id: 201,
          displayName: "Purpur Block",
          name: "purpur_block",
          stackSize: 64
        },
        {
          id: 202,
          displayName: "Purpur Pillar",
          name: "purpur_pillar",
          stackSize: 64
        },
        {
          id: 203,
          displayName: "Purpur Stairs",
          name: "purpur_stairs",
          stackSize: 64
        },
        {
          id: 205,
          displayName: "Purpur Slab",
          name: "purpur_slab",
          stackSize: 64
        },
        {
          id: 206,
          displayName: "End Stone Bricks",
          name: "end_bricks",
          stackSize: 64
        },
        {
          id: 208,
          displayName: "Grass Path",
          name: "grass_path",
          stackSize: 64
        },
        {
          id: 210,
          displayName: "Repeating Command Block",
          name: "repeating_command_block",
          stackSize: 64
        },
        {
          id: 211,
          displayName: "Chain Command Block",
          name: "chain_command_block",
          stackSize: 64
        },
        {
          id: 213,
          displayName: "Magma Block",
          name: "magma",
          stackSize: 64
        },
        {
          id: 214,
          displayName: "Nether Wart Block",
          name: "nether_wart_block",
          stackSize: 64
        },
        {
          id: 215,
          displayName: "Red Nether Brick",
          name: "red_nether_brick",
          stackSize: 64
        },
        {
          id: 216,
          displayName: "Bone Block",
          name: "bone_block",
          stackSize: 64
        },
        {
          id: 217,
          displayName: "Structure Void",
          name: "structure_void",
          stackSize: 64
        },
        {
          id: 218,
          displayName: "Observer",
          name: "observer",
          stackSize: 64
        },
        {
          id: 219,
          displayName: "White Shulker Box",
          name: "white_shulker_box",
          stackSize: 1
        },
        {
          id: 220,
          displayName: "Orange Shulker Box",
          name: "orange_shulker_box",
          stackSize: 1
        },
        {
          id: 221,
          displayName: "Magenta Shulker Box",
          name: "magenta_shulker_box",
          stackSize: 1
        },
        {
          id: 222,
          displayName: "Light Blue Shulker Box",
          name: "light_blue_shulker_box",
          stackSize: 1
        },
        {
          id: 223,
          displayName: "Yellow Shulker Box",
          name: "yellow_shulker_box",
          stackSize: 1
        },
        {
          id: 224,
          displayName: "Lime Shulker Box",
          name: "lime_shulker_box",
          stackSize: 1
        },
        {
          id: 225,
          displayName: "Pink Shulker Box",
          name: "pink_shulker_box",
          stackSize: 1
        },
        {
          id: 226,
          displayName: "Gray Shulker Box",
          name: "gray_shulker_box",
          stackSize: 1
        },
        {
          id: 227,
          displayName: "Light Gray Shulker Box",
          name: "silver_shulker_box",
          stackSize: 1
        },
        {
          id: 228,
          displayName: "Cyan Shulker Box",
          name: "cyan_shulker_box",
          stackSize: 1
        },
        {
          id: 229,
          displayName: "Purple Shulker Box",
          name: "purple_shulker_box",
          stackSize: 1
        },
        {
          id: 230,
          displayName: "Blue Shulker Box",
          name: "blue_shulker_box",
          stackSize: 1
        },
        {
          id: 231,
          displayName: "Brown Shulker Box",
          name: "brown_shulker_box",
          stackSize: 1
        },
        {
          id: 232,
          displayName: "Green Shulker Box",
          name: "green_shulker_box",
          stackSize: 1
        },
        {
          id: 233,
          displayName: "Red Shulker Box",
          name: "red_shulker_box",
          stackSize: 1
        },
        {
          id: 234,
          displayName: "Black Shulker Box",
          name: "black_shulker_box",
          stackSize: 1
        },
        {
          id: 255,
          displayName: "Structure Block",
          name: "structure_block",
          stackSize: 64
        },
        {
          id: 256,
          displayName: "Iron Shovel",
          name: "iron_shovel",
          stackSize: 1,
          maxDurability: 250,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 257,
          displayName: "Iron Pickaxe",
          name: "iron_pickaxe",
          stackSize: 1,
          maxDurability: 250,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 258,
          displayName: "Iron Axe",
          name: "iron_axe",
          stackSize: 1,
          maxDurability: 250,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 259,
          displayName: "Flint and Steel",
          name: "flint_and_steel",
          stackSize: 1,
          maxDurability: 64,
          enchantCategories: [
            "breakable",
            "vanishable"
          ]
        },
        {
          id: 260,
          displayName: "Apple",
          name: "apple",
          stackSize: 64
        },
        {
          id: 261,
          displayName: "Bow",
          name: "bow",
          stackSize: 1,
          maxDurability: 384,
          enchantCategories: [
            "breakable",
            "bow",
            "vanishable"
          ]
        },
        {
          id: 262,
          displayName: "Arrow",
          name: "arrow",
          stackSize: 64
        },
        {
          id: 263,
          displayName: "Coal",
          name: "coal",
          stackSize: 64,
          variations: [
            {
              metadata: 0,
              displayName: "Coal"
            },
            {
              metadata: 1,
              displayName: "Charcoal"
            }
          ]
        },
        {
          id: 264,
          displayName: "Diamond",
          name: "diamond",
          stackSize: 64
        },
        {
          id: 265,
          displayName: "Iron Ingot",
          name: "iron_ingot",
          stackSize: 64
        },
        {
          id: 266,
          displayName: "Gold Ingot",
          name: "gold_ingot",
          stackSize: 64
        },
        {
          id: 267,
          displayName: "Iron Sword",
          name: "iron_sword",
          stackSize: 1,
          maxDurability: 250,
          enchantCategories: [
            "weapon",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 268,
          displayName: "Wooden Sword",
          name: "wooden_sword",
          stackSize: 1,
          maxDurability: 59,
          enchantCategories: [
            "weapon",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "oak_planks",
            "spruce_planks",
            "birch_planks",
            "jungle_planks",
            "acacia_planks",
            "dark_oak_planks",
            "crimson_planks",
            "warped_planks"
          ]
        },
        {
          id: 269,
          displayName: "Wooden Shovel",
          name: "wooden_shovel",
          stackSize: 1,
          maxDurability: 59,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "oak_planks",
            "spruce_planks",
            "birch_planks",
            "jungle_planks",
            "acacia_planks",
            "dark_oak_planks",
            "crimson_planks",
            "warped_planks"
          ]
        },
        {
          id: 270,
          displayName: "Wooden Pickaxe",
          name: "wooden_pickaxe",
          stackSize: 1,
          maxDurability: 59,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "oak_planks",
            "spruce_planks",
            "birch_planks",
            "jungle_planks",
            "acacia_planks",
            "dark_oak_planks",
            "crimson_planks",
            "warped_planks"
          ]
        },
        {
          id: 271,
          displayName: "Wooden Axe",
          name: "wooden_axe",
          stackSize: 1,
          maxDurability: 59,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "oak_planks",
            "spruce_planks",
            "birch_planks",
            "jungle_planks",
            "acacia_planks",
            "dark_oak_planks",
            "crimson_planks",
            "warped_planks"
          ]
        },
        {
          id: 272,
          displayName: "Stone Sword",
          name: "stone_sword",
          stackSize: 1,
          maxDurability: 131,
          enchantCategories: [
            "weapon",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "cobblestone",
            "blackstone"
          ]
        },
        {
          id: 273,
          displayName: "Stone Shovel",
          name: "stone_shovel",
          stackSize: 1,
          maxDurability: 131,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "cobblestone",
            "blackstone"
          ]
        },
        {
          id: 274,
          displayName: "Stone Pickaxe",
          name: "stone_pickaxe",
          stackSize: 1,
          maxDurability: 131,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "cobblestone",
            "blackstone"
          ]
        },
        {
          id: 275,
          displayName: "Stone Axe",
          name: "stone_axe",
          stackSize: 1,
          maxDurability: 131,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "cobblestone",
            "blackstone"
          ]
        },
        {
          id: 276,
          displayName: "Diamond Sword",
          name: "diamond_sword",
          stackSize: 1,
          maxDurability: 1561,
          enchantCategories: [
            "weapon",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "diamond"
          ]
        },
        {
          id: 277,
          displayName: "Diamond Shovel",
          name: "diamond_shovel",
          stackSize: 1,
          maxDurability: 1561,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "diamond"
          ]
        },
        {
          id: 278,
          displayName: "Diamond Pickaxe",
          name: "diamond_pickaxe",
          stackSize: 1,
          maxDurability: 1561,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "diamond"
          ]
        },
        {
          id: 279,
          displayName: "Diamond Axe",
          name: "diamond_axe",
          stackSize: 1,
          maxDurability: 1561,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "diamond"
          ]
        },
        {
          id: 280,
          displayName: "Stick",
          name: "stick",
          stackSize: 64
        },
        {
          id: 281,
          displayName: "Bowl",
          name: "bowl",
          stackSize: 64
        },
        {
          id: 282,
          displayName: "Mushroom Stew",
          name: "mushroom_stew",
          stackSize: 1
        },
        {
          id: 283,
          displayName: "Golden Sword",
          name: "golden_sword",
          stackSize: 1,
          maxDurability: 32,
          enchantCategories: [
            "weapon",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "gold_ingot"
          ]
        },
        {
          id: 284,
          displayName: "Golden Shovel",
          name: "golden_shovel",
          stackSize: 1,
          maxDurability: 32,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "gold_ingot"
          ]
        },
        {
          id: 285,
          displayName: "Golden Pickaxe",
          name: "golden_pickaxe",
          stackSize: 1,
          maxDurability: 32,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "gold_ingot"
          ]
        },
        {
          id: 286,
          displayName: "Golden Axe",
          name: "golden_axe",
          stackSize: 1,
          maxDurability: 32,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "gold_ingot"
          ]
        },
        {
          id: 287,
          displayName: "String",
          name: "string",
          stackSize: 64
        },
        {
          id: 288,
          displayName: "Feather",
          name: "feather",
          stackSize: 64
        },
        {
          id: 289,
          displayName: "Gunpowder",
          name: "gunpowder",
          stackSize: 64
        },
        {
          id: 290,
          displayName: "Wooden Hoe",
          name: "wooden_hoe",
          stackSize: 1,
          maxDurability: 59,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "oak_planks",
            "spruce_planks",
            "birch_planks",
            "jungle_planks",
            "acacia_planks",
            "dark_oak_planks",
            "crimson_planks",
            "warped_planks"
          ]
        },
        {
          id: 291,
          displayName: "Stone Hoe",
          name: "stone_hoe",
          stackSize: 1,
          maxDurability: 131,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "cobblestone",
            "blackstone"
          ]
        },
        {
          id: 292,
          displayName: "Iron Hoe",
          name: "iron_hoe",
          stackSize: 1,
          maxDurability: 250,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 293,
          displayName: "Diamond Hoe",
          name: "diamond_hoe",
          stackSize: 1,
          maxDurability: 1561,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "diamond"
          ]
        },
        {
          id: 294,
          displayName: "Golden Hoe",
          name: "golden_hoe",
          stackSize: 1,
          maxDurability: 32,
          enchantCategories: [
            "digger",
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "gold_ingot"
          ]
        },
        {
          id: 295,
          displayName: "Seeds",
          name: "wheat_seeds",
          stackSize: 64
        },
        {
          id: 296,
          displayName: "Wheat",
          name: "wheat",
          stackSize: 64
        },
        {
          id: 297,
          displayName: "Bread",
          name: "bread",
          stackSize: 64
        },
        {
          id: 298,
          displayName: "Leather Cap",
          name: "leather_helmet",
          stackSize: 1,
          maxDurability: 55,
          enchantCategories: [
            "armor",
            "armor_head",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "leather"
          ]
        },
        {
          id: 299,
          displayName: "Leather Tunic",
          name: "leather_chestplate",
          stackSize: 1,
          maxDurability: 80,
          enchantCategories: [
            "armor",
            "armor_chest",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "leather"
          ]
        },
        {
          id: 300,
          displayName: "Leather Pants",
          name: "leather_leggings",
          stackSize: 1,
          maxDurability: 75,
          enchantCategories: [
            "armor",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "leather"
          ]
        },
        {
          id: 301,
          displayName: "Leather Boots",
          name: "leather_boots",
          stackSize: 1,
          maxDurability: 65,
          enchantCategories: [
            "armor",
            "armor_feet",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "leather"
          ]
        },
        {
          id: 302,
          displayName: "Chain Helmet",
          name: "chainmail_helmet",
          stackSize: 1,
          maxDurability: 165,
          enchantCategories: [
            "armor",
            "armor_head",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 303,
          displayName: "Chain Chestplate",
          name: "chainmail_chestplate",
          stackSize: 1,
          maxDurability: 240,
          enchantCategories: [
            "armor",
            "armor_chest",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 304,
          displayName: "Chain Leggings",
          name: "chainmail_leggings",
          stackSize: 1,
          maxDurability: 225,
          enchantCategories: [
            "armor",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 305,
          displayName: "Chain Boots",
          name: "chainmail_boots",
          stackSize: 1,
          maxDurability: 195,
          enchantCategories: [
            "armor",
            "armor_feet",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 306,
          displayName: "Iron Helmet",
          name: "iron_helmet",
          stackSize: 1,
          maxDurability: 165,
          enchantCategories: [
            "armor",
            "armor_head",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 307,
          displayName: "Iron Chestplate",
          name: "iron_chestplate",
          stackSize: 1,
          maxDurability: 240,
          enchantCategories: [
            "armor",
            "armor_chest",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 308,
          displayName: "Iron Leggings",
          name: "iron_leggings",
          stackSize: 1,
          maxDurability: 225,
          enchantCategories: [
            "armor",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 309,
          displayName: "Iron Boots",
          name: "iron_boots",
          stackSize: 1,
          maxDurability: 195,
          enchantCategories: [
            "armor",
            "armor_feet",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "iron_ingot"
          ]
        },
        {
          id: 310,
          displayName: "Diamond Helmet",
          name: "diamond_helmet",
          stackSize: 1,
          maxDurability: 363,
          enchantCategories: [
            "armor",
            "armor_head",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "diamond"
          ]
        },
        {
          id: 311,
          displayName: "Diamond Chestplate",
          name: "diamond_chestplate",
          stackSize: 1,
          maxDurability: 528,
          enchantCategories: [
            "armor",
            "armor_chest",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "diamond"
          ]
        },
        {
          id: 312,
          displayName: "Diamond Leggings",
          name: "diamond_leggings",
          stackSize: 1,
          maxDurability: 495,
          enchantCategories: [
            "armor",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "diamond"
          ]
        },
        {
          id: 313,
          displayName: "Diamond Boots",
          name: "diamond_boots",
          stackSize: 1,
          maxDurability: 429,
          enchantCategories: [
            "armor",
            "armor_feet",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "diamond"
          ]
        },
        {
          id: 314,
          displayName: "Golden Helmet",
          name: "golden_helmet",
          stackSize: 1,
          maxDurability: 77,
          enchantCategories: [
            "armor",
            "armor_head",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "gold_ingot"
          ]
        },
        {
          id: 315,
          displayName: "Golden Chestplate",
          name: "golden_chestplate",
          stackSize: 1,
          maxDurability: 112,
          enchantCategories: [
            "armor",
            "armor_chest",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "gold_ingot"
          ]
        },
        {
          id: 316,
          displayName: "Golden Leggings",
          name: "golden_leggings",
          stackSize: 1,
          maxDurability: 105,
          enchantCategories: [
            "armor",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "gold_ingot"
          ]
        },
        {
          id: 317,
          displayName: "Golden Boots",
          name: "golden_boots",
          stackSize: 1,
          maxDurability: 91,
          enchantCategories: [
            "armor",
            "armor_feet",
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "gold_ingot"
          ]
        },
        {
          id: 318,
          displayName: "Flint",
          name: "flint",
          stackSize: 64
        },
        {
          id: 319,
          displayName: "Raw Porkchop",
          name: "porkchop",
          stackSize: 64
        },
        {
          id: 320,
          displayName: "Cooked Porkchop",
          name: "cooked_porkchop",
          stackSize: 64
        },
        {
          id: 321,
          displayName: "Painting",
          name: "painting",
          stackSize: 64
        },
        {
          id: 322,
          displayName: "Golden Apple",
          name: "golden_apple",
          stackSize: 64,
          variations: [
            {
              metadata: 0,
              displayName: "Golden Apple"
            },
            {
              metadata: 1,
              displayName: "Enchanted Golden Apple"
            }
          ]
        },
        {
          id: 323,
          displayName: "Sign",
          name: "sign",
          stackSize: 16
        },
        {
          id: 324,
          displayName: "Oak Door",
          name: "wooden_door",
          stackSize: 64
        },
        {
          id: 325,
          displayName: "Bucket",
          name: "bucket",
          stackSize: 16
        },
        {
          id: 326,
          displayName: "Water Bucket",
          name: "water_bucket",
          stackSize: 1
        },
        {
          id: 327,
          displayName: "Lava Bucket",
          name: "lava_bucket",
          stackSize: 1
        },
        {
          id: 328,
          displayName: "Minecart",
          name: "minecart",
          stackSize: 1
        },
        {
          id: 329,
          displayName: "Saddle",
          name: "saddle",
          stackSize: 1
        },
        {
          id: 330,
          displayName: "Iron Door",
          name: "iron_door",
          stackSize: 64
        },
        {
          id: 331,
          displayName: "Redstone",
          name: "redstone",
          stackSize: 64
        },
        {
          id: 332,
          displayName: "Snowball",
          name: "snowball",
          stackSize: 16
        },
        {
          id: 333,
          displayName: "Boat",
          name: "boat",
          stackSize: 1
        },
        {
          id: 334,
          displayName: "Leather",
          name: "leather",
          stackSize: 64
        },
        {
          id: 335,
          displayName: "Milk",
          name: "milk_bucket",
          stackSize: 1
        },
        {
          id: 336,
          displayName: "Brick",
          name: "brick",
          stackSize: 64
        },
        {
          id: 337,
          displayName: "Clay",
          name: "clay_ball",
          stackSize: 64
        },
        {
          id: 338,
          displayName: "Sugar Canes",
          name: "reeds",
          stackSize: 64
        },
        {
          id: 339,
          displayName: "Paper",
          name: "paper",
          stackSize: 64
        },
        {
          id: 340,
          displayName: "Book",
          name: "book",
          stackSize: 64
        },
        {
          id: 341,
          displayName: "Slimeball",
          name: "slime_ball",
          stackSize: 64
        },
        {
          id: 342,
          displayName: "Minecart with Chest",
          name: "chest_minecart",
          stackSize: 1
        },
        {
          id: 343,
          displayName: "Minecart with Furnace",
          name: "furnace_minecart",
          stackSize: 1
        },
        {
          id: 344,
          displayName: "Egg",
          name: "egg",
          stackSize: 16
        },
        {
          id: 345,
          displayName: "Compass",
          name: "compass",
          stackSize: 64
        },
        {
          id: 346,
          displayName: "Fishing Rod",
          name: "fishing_rod",
          stackSize: 1,
          maxDurability: 64,
          enchantCategories: [
            "breakable",
            "fishing_rod",
            "vanishable"
          ]
        },
        {
          id: 347,
          displayName: "Clock",
          name: "clock",
          stackSize: 64
        },
        {
          id: 348,
          displayName: "Glowstone Dust",
          name: "glowstone_dust",
          stackSize: 64
        },
        {
          id: 349,
          displayName: "Fish",
          name: "fish",
          stackSize: 64,
          variations: [
            {
              metadata: 0,
              displayName: "Raw Fish"
            },
            {
              metadata: 1,
              displayName: "Raw Salmon"
            },
            {
              metadata: 2,
              displayName: "Clownfish"
            },
            {
              metadata: 3,
              displayName: "Pufferfish"
            }
          ]
        },
        {
          id: 350,
          displayName: "Cooked Fish",
          name: "cooked_fish",
          stackSize: 64
        },
        {
          id: 351,
          displayName: "Dye",
          name: "dye",
          stackSize: 64,
          variations: [
            {
              metadata: 0,
              displayName: "Ink Sac"
            },
            {
              metadata: 1,
              displayName: "Rose Red"
            },
            {
              metadata: 2,
              displayName: "Cactus Green"
            },
            {
              metadata: 3,
              displayName: "Cocoa Beans"
            },
            {
              metadata: 4,
              displayName: "Lapis Lazuli"
            },
            {
              metadata: 5,
              displayName: "Purple Dye"
            },
            {
              metadata: 6,
              displayName: "Cyan Dye"
            },
            {
              metadata: 7,
              displayName: "Light Gray Dye"
            },
            {
              metadata: 8,
              displayName: "Gray Dye"
            },
            {
              metadata: 9,
              displayName: "Pink Dye"
            },
            {
              metadata: 10,
              displayName: "Lime Dye"
            },
            {
              metadata: 11,
              displayName: "Dandelion Yellow"
            },
            {
              metadata: 12,
              displayName: "Light Blue Dye"
            },
            {
              metadata: 13,
              displayName: "Magenta Dye"
            },
            {
              metadata: 14,
              displayName: "Orange Dye"
            },
            {
              metadata: 15,
              displayName: "Bone Meal"
            }
          ]
        },
        {
          id: 352,
          displayName: "Bone",
          name: "bone",
          stackSize: 64
        },
        {
          id: 353,
          displayName: "Sugar",
          name: "sugar",
          stackSize: 64
        },
        {
          id: 354,
          displayName: "Cake",
          name: "cake",
          stackSize: 1
        },
        {
          id: 355,
          displayName: "Bed",
          name: "bed",
          stackSize: 1
        },
        {
          id: 356,
          displayName: "Redstone Repeater",
          name: "repeater",
          stackSize: 64
        },
        {
          id: 357,
          displayName: "Cookie",
          name: "cookie",
          stackSize: 64
        },
        {
          id: 358,
          displayName: "Map",
          name: "filled_map",
          stackSize: 64
        },
        {
          id: 359,
          displayName: "Shears",
          name: "shears",
          stackSize: 1,
          maxDurability: 238,
          enchantCategories: [
            "breakable",
            "vanishable"
          ]
        },
        {
          id: 360,
          displayName: "Melon",
          name: "melon",
          stackSize: 64
        },
        {
          id: 361,
          displayName: "Pumpkin Seeds",
          name: "pumpkin_seeds",
          stackSize: 64
        },
        {
          id: 362,
          displayName: "Melon Seeds",
          name: "melon_seeds",
          stackSize: 64
        },
        {
          id: 363,
          displayName: "Raw Beef",
          name: "beef",
          stackSize: 64
        },
        {
          id: 364,
          displayName: "Steak",
          name: "cooked_beef",
          stackSize: 64
        },
        {
          id: 365,
          displayName: "Raw Chicken",
          name: "chicken",
          stackSize: 64
        },
        {
          id: 366,
          displayName: "Cooked Chicken",
          name: "cooked_chicken",
          stackSize: 64
        },
        {
          id: 367,
          displayName: "Rotten Flesh",
          name: "rotten_flesh",
          stackSize: 64
        },
        {
          id: 368,
          displayName: "Ender Pearl",
          name: "ender_pearl",
          stackSize: 16
        },
        {
          id: 369,
          displayName: "Blaze Rod",
          name: "blaze_rod",
          stackSize: 64
        },
        {
          id: 370,
          displayName: "Ghast Tear",
          name: "ghast_tear",
          stackSize: 64
        },
        {
          id: 371,
          displayName: "Gold Nugget",
          name: "gold_nugget",
          stackSize: 64
        },
        {
          id: 372,
          displayName: "Nether Wart",
          name: "nether_wart",
          stackSize: 64
        },
        {
          id: 373,
          displayName: "Potion",
          name: "potion",
          stackSize: 1
        },
        {
          id: 374,
          displayName: "Glass Bottle",
          name: "glass_bottle",
          stackSize: 64
        },
        {
          id: 375,
          displayName: "Spider Eye",
          name: "spider_eye",
          stackSize: 64
        },
        {
          id: 376,
          displayName: "Fermented Spider Eye",
          name: "fermented_spider_eye",
          stackSize: 64
        },
        {
          id: 377,
          displayName: "Blaze Powder",
          name: "blaze_powder",
          stackSize: 64
        },
        {
          id: 378,
          displayName: "Magma Cream",
          name: "magma_cream",
          stackSize: 64
        },
        {
          id: 379,
          displayName: "Brewing Stand",
          name: "brewing_stand",
          stackSize: 64
        },
        {
          id: 380,
          displayName: "Cauldron",
          name: "cauldron",
          stackSize: 64
        },
        {
          id: 381,
          displayName: "Eye of Ender",
          name: "ender_eye",
          stackSize: 64
        },
        {
          id: 382,
          displayName: "Glistering Melon",
          name: "speckled_melon",
          stackSize: 64
        },
        {
          id: 383,
          displayName: "Spawn Egg",
          name: "spawn_egg",
          stackSize: 64
        },
        {
          id: 384,
          displayName: "Bottle o' Enchanting",
          name: "experience_bottle",
          stackSize: 64
        },
        {
          id: 385,
          displayName: "Fire Charge",
          name: "fire_charge",
          stackSize: 64
        },
        {
          id: 386,
          displayName: "Book and Quill",
          name: "writable_book",
          stackSize: 1
        },
        {
          id: 387,
          displayName: "Written Book",
          name: "written_book",
          stackSize: 16
        },
        {
          id: 388,
          displayName: "Emerald",
          name: "emerald",
          stackSize: 64
        },
        {
          id: 389,
          displayName: "Item Frame",
          name: "item_frame",
          stackSize: 64
        },
        {
          id: 390,
          displayName: "Flower Pot",
          name: "flower_pot",
          stackSize: 64,
          variations: [
            {
              metadata: 0,
              displayName: "Empty Flower Pot"
            },
            {
              metadata: 1,
              displayName: "Poppy Flower Pot"
            },
            {
              metadata: 2,
              displayName: "Dandelion Flower Pot"
            },
            {
              metadata: 3,
              displayName: "Oak sapling Flower Pot"
            },
            {
              metadata: 4,
              displayName: "Spruce sapling Flower Pot"
            },
            {
              metadata: 5,
              displayName: "Birch sapling Flower Pot"
            },
            {
              metadata: 6,
              displayName: "Jungle sapling Flower Pot"
            },
            {
              metadata: 7,
              displayName: "Red mushroom Flower Pot"
            },
            {
              metadata: 8,
              displayName: "Brown mushroom Flower Pot"
            },
            {
              metadata: 9,
              displayName: "Cactus Flower Pot"
            },
            {
              metadata: 10,
              displayName: "Dead bush Flower Pot"
            },
            {
              metadata: 11,
              displayName: "Fern Flower Pot"
            },
            {
              metadata: 12,
              displayName: "Acacia sapling Flower Pot"
            },
            {
              metadata: 13,
              displayName: "Dark oak sapling Flower Pot"
            }
          ]
        },
        {
          id: 391,
          displayName: "Carrot",
          name: "carrot",
          stackSize: 64
        },
        {
          id: 392,
          displayName: "Potato",
          name: "potato",
          stackSize: 64
        },
        {
          id: 393,
          displayName: "Baked Potato",
          name: "baked_potato",
          stackSize: 64
        },
        {
          id: 394,
          displayName: "Poisonous Potato",
          name: "poisonous_potato",
          stackSize: 64
        },
        {
          id: 395,
          displayName: "Empty Map",
          name: "map",
          stackSize: 64
        },
        {
          id: 396,
          displayName: "Golden Carrot",
          name: "golden_carrot",
          stackSize: 64
        },
        {
          id: 397,
          displayName: "Skull",
          name: "skull",
          stackSize: 64,
          variations: [
            {
              metadata: 0,
              displayName: "Skeleton Skull"
            },
            {
              metadata: 1,
              displayName: "Wither Skeleton Skull"
            },
            {
              metadata: 2,
              displayName: "Zombie Head"
            },
            {
              metadata: 3,
              displayName: "Head"
            },
            {
              metadata: 4,
              displayName: "Creeper Head"
            }
          ]
        },
        {
          id: 398,
          displayName: "Carrot on a Stick",
          name: "carrot_on_a_stick",
          stackSize: 1,
          maxDurability: 25,
          enchantCategories: [
            "breakable",
            "vanishable"
          ]
        },
        {
          id: 399,
          displayName: "Nether Star",
          name: "nether_star",
          stackSize: 64
        },
        {
          id: 400,
          displayName: "Pumpkin Pie",
          name: "pumpkin_pie",
          stackSize: 64
        },
        {
          id: 401,
          displayName: "Firework Rocket",
          name: "fireworks",
          stackSize: 64
        },
        {
          id: 402,
          displayName: "Firework Star",
          name: "firework_charge",
          stackSize: 64
        },
        {
          id: 403,
          displayName: "Enchanted Book",
          name: "enchanted_book",
          stackSize: 1
        },
        {
          id: 404,
          displayName: "Redstone Comparator",
          name: "comparator",
          stackSize: 64
        },
        {
          id: 405,
          displayName: "Nether Brick",
          name: "netherbrick",
          stackSize: 64
        },
        {
          id: 406,
          displayName: "Nether Quartz",
          name: "quartz",
          stackSize: 64
        },
        {
          id: 407,
          displayName: "Minecart with TNT",
          name: "tnt_minecart",
          stackSize: 1
        },
        {
          id: 408,
          displayName: "Minecart with Hopper",
          name: "hopper_minecart",
          stackSize: 1
        },
        {
          id: 409,
          displayName: "Prismarine Shard",
          name: "prismarine_shard",
          stackSize: 64
        },
        {
          id: 410,
          displayName: "Prismarine Crystals",
          name: "prismarine_crystals",
          stackSize: 64
        },
        {
          id: 411,
          displayName: "Raw Rabbit",
          name: "rabbit",
          stackSize: 64
        },
        {
          id: 412,
          displayName: "Cooked Rabbit",
          name: "cooked_rabbit",
          stackSize: 64
        },
        {
          id: 413,
          displayName: "Rabbit Stew",
          name: "rabbit_stew",
          stackSize: 1
        },
        {
          id: 414,
          displayName: "Rabbit's Foot",
          name: "rabbit_foot",
          stackSize: 64
        },
        {
          id: 415,
          displayName: "Rabbit Hide",
          name: "rabbit_hide",
          stackSize: 64
        },
        {
          id: 416,
          displayName: "Armor Stand",
          name: "armor_stand",
          stackSize: 16
        },
        {
          id: 417,
          displayName: "Iron Horse Armor",
          name: "iron_horse_armor",
          stackSize: 1
        },
        {
          id: 418,
          displayName: "Gold Horse Armor",
          name: "golden_horse_armor",
          stackSize: 1
        },
        {
          id: 419,
          displayName: "Diamond Horse Armor",
          name: "diamond_horse_armor",
          stackSize: 1
        },
        {
          id: 420,
          displayName: "Lead",
          name: "lead",
          stackSize: 64
        },
        {
          id: 421,
          displayName: "Name Tag",
          name: "name_tag",
          stackSize: 64
        },
        {
          id: 422,
          displayName: "Minecart with Command Block",
          name: "command_block_minecart",
          stackSize: 1
        },
        {
          id: 423,
          displayName: "Raw Mutton",
          name: "mutton",
          stackSize: 64
        },
        {
          id: 424,
          displayName: "Cooked Mutton",
          name: "cooked_mutton",
          stackSize: 64
        },
        {
          id: 425,
          displayName: "Banner",
          name: "banner",
          stackSize: 16
        },
        {
          id: 426,
          displayName: "End Crystal",
          name: "end_crystal",
          stackSize: 64
        },
        {
          id: 427,
          displayName: "Spruce Door",
          name: "spruce_door",
          stackSize: 64
        },
        {
          id: 428,
          displayName: "Birch Door",
          name: "birch_door",
          stackSize: 64
        },
        {
          id: 429,
          displayName: "Jungle Door",
          name: "jungle_door",
          stackSize: 64
        },
        {
          id: 430,
          displayName: "Acacia Door",
          name: "acacia_door",
          stackSize: 64
        },
        {
          id: 431,
          displayName: "Dark Oak Door",
          name: "dark_oak_door",
          stackSize: 64
        },
        {
          id: 432,
          displayName: "Chorus Fruit",
          name: "chorus_fruit",
          stackSize: 64
        },
        {
          id: 433,
          displayName: "Popped Chorus Fruit",
          name: "chorus_fruit_popped",
          stackSize: 64
        },
        {
          id: 434,
          displayName: "Beetroot",
          name: "beetroot",
          stackSize: 64
        },
        {
          id: 435,
          displayName: "Beetroot Seeds",
          name: "beetroot_seeds",
          stackSize: 64
        },
        {
          id: 436,
          displayName: "Beetroot Soup",
          name: "beetroot_soup",
          stackSize: 1
        },
        {
          id: 437,
          displayName: "Dragon's Breath",
          name: "dragon_breath",
          stackSize: 64
        },
        {
          id: 438,
          displayName: "Splash Potion",
          name: "splash_potion",
          stackSize: 1
        },
        {
          id: 439,
          displayName: "Spectral Arrow",
          name: "spectral_arrow",
          stackSize: 64
        },
        {
          id: 440,
          displayName: "Tipped Arrow",
          name: "tipped_arrow",
          stackSize: 64
        },
        {
          id: 441,
          displayName: "Lingering Potion",
          name: "lingering_potion",
          stackSize: 1
        },
        {
          id: 442,
          displayName: "Shield",
          name: "shield",
          stackSize: 1,
          maxDurability: 336,
          enchantCategories: [
            "breakable",
            "vanishable"
          ],
          repairWith: [
            "oak_planks",
            "spruce_planks",
            "birch_planks",
            "jungle_planks",
            "acacia_planks",
            "dark_oak_planks",
            "crimson_planks",
            "warped_planks"
          ]
        },
        {
          id: 443,
          displayName: "Elytra",
          name: "elytra",
          stackSize: 1,
          maxDurability: 432,
          enchantCategories: [
            "breakable",
            "wearable",
            "vanishable"
          ],
          repairWith: [
            "phantom_membrane"
          ]
        },
        {
          id: 444,
          displayName: "Spruce Boat",
          name: "spruce_boat",
          stackSize: 1
        },
        {
          id: 445,
          displayName: "Birch Boat",
          name: "birch_boat",
          stackSize: 1
        },
        {
          id: 446,
          displayName: "Jungle Boat",
          name: "jungle_boat",
          stackSize: 1
        },
        {
          id: 447,
          displayName: "Acacia Boat",
          name: "acacia_boat",
          stackSize: 1
        },
        {
          id: 448,
          displayName: "Dark Oak Boat",
          name: "dark_oak_boat",
          stackSize: 1
        },
        {
          id: 449,
          displayName: "Totem of Undying",
          name: "totem",
          stackSize: 1
        },
        {
          id: 450,
          displayName: "Shulker Shell",
          name: "shulker_shell",
          stackSize: 64
        },
        {
          id: 2256,
          displayName: "13 Disc",
          name: "record_13",
          stackSize: 64
        },
        {
          id: 2257,
          displayName: "Cat Disc",
          name: "record_cat",
          stackSize: 1
        },
        {
          id: 2258,
          displayName: "Blocks Disc",
          name: "record_blocks",
          stackSize: 1
        },
        {
          id: 2259,
          displayName: "Chirp Disc",
          name: "record_chirp",
          stackSize: 1
        },
        {
          id: 2260,
          displayName: "Far Disc",
          name: "record_far",
          stackSize: 1
        },
        {
          id: 2261,
          displayName: "Mall Disc",
          name: "record_mall",
          stackSize: 1
        },
        {
          id: 2262,
          displayName: "Mellohi Disc",
          name: "record_mellohi",
          stackSize: 1
        },
        {
          id: 2263,
          displayName: "Stal Disc",
          name: "record_stal",
          stackSize: 1
        },
        {
          id: 2264,
          displayName: "Strad Disc",
          name: "record_strad",
          stackSize: 1
        },
        {
          id: 2265,
          displayName: "Ward Disc",
          name: "record_ward",
          stackSize: 1
        },
        {
          id: 2266,
          displayName: "11 Disc",
          name: "record_11",
          stackSize: 1
        },
        {
          id: 2267,
          displayName: "Wait Disc",
          name: "record_wait",
          stackSize: 1
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/recipes.json
  var require_recipes = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/recipes.json"(exports, module) {
      module.exports = {
        "3": [
          {
            inShape: [
              [
                {
                  id: 3,
                  metadata: 0
                },
                13
              ],
              [
                13,
                {
                  id: 3,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 4,
              id: 3,
              metadata: 1
            }
          }
        ],
        "5": [
          {
            inShape: [
              [
                17
              ]
            ],
            result: {
              count: 4,
              id: 5,
              metadata: 5
            }
          }
        ],
        "22": [
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 4
                },
                {
                  id: 351,
                  metadata: 4
                },
                {
                  id: 351,
                  metadata: 4
                }
              ],
              [
                {
                  id: 351,
                  metadata: 4
                },
                {
                  id: 351,
                  metadata: 4
                },
                {
                  id: 351,
                  metadata: 4
                }
              ],
              [
                {
                  id: 351,
                  metadata: 4
                },
                {
                  id: 351,
                  metadata: 4
                },
                {
                  id: 351,
                  metadata: 4
                }
              ]
            ],
            result: {
              count: 1,
              id: 22,
              metadata: 0
            }
          }
        ],
        "23": [
          {
            inShape: [
              [
                4,
                4,
                4
              ],
              [
                4,
                261,
                4
              ],
              [
                4,
                331,
                4
              ]
            ],
            result: {
              count: 1,
              id: 23,
              metadata: 0
            }
          }
        ],
        "24": [
          {
            inShape: [
              [
                {
                  id: 12,
                  metadata: 0
                },
                {
                  id: 12,
                  metadata: 0
                }
              ],
              [
                {
                  id: 12,
                  metadata: 0
                },
                {
                  id: 12,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 24,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 24,
                  metadata: 0
                },
                {
                  id: 24,
                  metadata: 0
                }
              ],
              [
                {
                  id: 24,
                  metadata: 0
                },
                {
                  id: 24,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 4,
              id: 24,
              metadata: 2
            }
          },
          {
            inShape: [
              [
                {
                  id: 44,
                  metadata: 1
                }
              ],
              [
                {
                  id: 44,
                  metadata: 1
                }
              ]
            ],
            result: {
              count: 1,
              id: 24,
              metadata: 1
            }
          }
        ],
        "25": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                331,
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 25,
              metadata: 0
            }
          }
        ],
        "27": [
          {
            inShape: [
              [
                266,
                null,
                266
              ],
              [
                266,
                280,
                266
              ],
              [
                266,
                331,
                266
              ]
            ],
            result: {
              count: 6,
              id: 27,
              metadata: 0
            }
          }
        ],
        "28": [
          {
            inShape: [
              [
                265,
                null,
                265
              ],
              [
                265,
                70,
                265
              ],
              [
                265,
                331,
                265
              ]
            ],
            result: {
              count: 6,
              id: 28,
              metadata: 0
            }
          }
        ],
        "29": [
          {
            inShape: [
              [
                341
              ],
              [
                33
              ]
            ],
            result: {
              count: 1,
              id: 29,
              metadata: 0
            }
          }
        ],
        "33": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                4,
                265,
                4
              ],
              [
                4,
                331,
                4
              ]
            ],
            result: {
              count: 1,
              id: 33,
              metadata: 0
            }
          }
        ],
        "35": [
          {
            inShape: [
              [
                287,
                287
              ],
              [
                287,
                287
              ]
            ],
            result: {
              count: 1,
              id: 35,
              metadata: 0
            }
          },
          {
            ingredients: [
              35,
              {
                id: 351,
                metadata: 0
              }
            ],
            result: {
              count: 1,
              id: 35,
              metadata: 0
            }
          }
        ],
        "41": [
          {
            inShape: [
              [
                266,
                266,
                266
              ],
              [
                266,
                266,
                266
              ],
              [
                266,
                266,
                266
              ]
            ],
            result: {
              count: 1,
              id: 41,
              metadata: 0
            }
          }
        ],
        "42": [
          {
            inShape: [
              [
                265,
                265,
                265
              ],
              [
                265,
                265,
                265
              ],
              [
                265,
                265,
                265
              ]
            ],
            result: {
              count: 1,
              id: 42,
              metadata: 0
            }
          }
        ],
        "44": [
          {
            inShape: [
              [
                1,
                1,
                1
              ]
            ],
            result: {
              count: 6,
              id: 44,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 24,
                  metadata: 2
                },
                {
                  id: 24,
                  metadata: 2
                },
                {
                  id: 24,
                  metadata: 2
                }
              ]
            ],
            result: {
              count: 6,
              id: 44,
              metadata: 1
            }
          },
          {
            inShape: [
              [
                4,
                4,
                4
              ]
            ],
            result: {
              count: 6,
              id: 44,
              metadata: 3
            }
          },
          {
            inShape: [
              [
                45,
                45,
                45
              ]
            ],
            result: {
              count: 6,
              id: 44,
              metadata: 4
            }
          },
          {
            inShape: [
              [
                {
                  id: 98,
                  metadata: 3
                },
                {
                  id: 98,
                  metadata: 3
                },
                {
                  id: 98,
                  metadata: 3
                }
              ]
            ],
            result: {
              count: 6,
              id: 44,
              metadata: 5
            }
          },
          {
            inShape: [
              [
                405,
                405,
                405
              ]
            ],
            result: {
              count: 6,
              id: 44,
              metadata: 6
            }
          },
          {
            inShape: [
              [
                {
                  id: 155,
                  metadata: 0
                },
                {
                  id: 155,
                  metadata: 0
                },
                {
                  id: 155,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 6,
              id: 44,
              metadata: 7
            }
          }
        ],
        "45": [
          {
            inShape: [
              [
                336,
                336
              ],
              [
                336,
                336
              ]
            ],
            result: {
              count: 1,
              id: 45,
              metadata: 0
            }
          }
        ],
        "46": [
          {
            inShape: [
              [
                289,
                12,
                289
              ],
              [
                12,
                289,
                12
              ],
              [
                289,
                12,
                289
              ]
            ],
            result: {
              count: 1,
              id: 46,
              metadata: 0
            }
          }
        ],
        "47": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                340,
                340,
                340
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 47,
              metadata: 0
            }
          }
        ],
        "48": [
          {
            ingredients: [
              4,
              106
            ],
            result: {
              count: 1,
              id: 48,
              metadata: 0
            }
          }
        ],
        "50": [
          {
            inShape: [
              [
                263
              ],
              [
                280
              ]
            ],
            result: {
              count: 4,
              id: 50,
              metadata: 0
            }
          }
        ],
        "54": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                null,
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 54,
              metadata: 0
            }
          }
        ],
        "57": [
          {
            inShape: [
              [
                264,
                264,
                264
              ],
              [
                264,
                264,
                264
              ],
              [
                264,
                264,
                264
              ]
            ],
            result: {
              count: 1,
              id: 57,
              metadata: 0
            }
          }
        ],
        "58": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 58,
              metadata: 0
            }
          }
        ],
        "61": [
          {
            inShape: [
              [
                4,
                4,
                4
              ],
              [
                4,
                null,
                4
              ],
              [
                4,
                4,
                4
              ]
            ],
            result: {
              count: 1,
              id: 61,
              metadata: 0
            }
          }
        ],
        "65": [
          {
            inShape: [
              [
                280,
                null,
                280
              ],
              [
                280,
                280,
                280
              ],
              [
                280,
                null,
                280
              ]
            ],
            result: {
              count: 3,
              id: 65,
              metadata: 0
            }
          }
        ],
        "66": [
          {
            inShape: [
              [
                265,
                null,
                265
              ],
              [
                265,
                280,
                265
              ],
              [
                265,
                null,
                265
              ]
            ],
            result: {
              count: 16,
              id: 66,
              metadata: 0
            }
          }
        ],
        "67": [
          {
            inShape: [
              [
                null,
                null,
                4
              ],
              [
                null,
                4,
                4
              ],
              [
                4,
                4,
                4
              ]
            ],
            result: {
              count: 4,
              id: 67,
              metadata: 0
            }
          }
        ],
        "69": [
          {
            inShape: [
              [
                280
              ],
              [
                4
              ]
            ],
            result: {
              count: 1,
              id: 69,
              metadata: 0
            }
          }
        ],
        "70": [
          {
            inShape: [
              [
                1,
                1
              ]
            ],
            result: {
              count: 1,
              id: 70,
              metadata: 0
            }
          }
        ],
        "72": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 72,
              metadata: 0
            }
          }
        ],
        "75": [
          {
            inShape: [
              [
                331
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 75,
              metadata: 0
            }
          }
        ],
        "77": [
          {
            inShape: [
              [
                1
              ]
            ],
            result: {
              count: 1,
              id: 77,
              metadata: 0
            }
          }
        ],
        "78": [
          {
            inShape: [
              [
                80,
                80,
                80
              ]
            ],
            result: {
              count: 6,
              id: 78,
              metadata: 0
            }
          }
        ],
        "80": [
          {
            inShape: [
              [
                332,
                332
              ],
              [
                332,
                332
              ]
            ],
            result: {
              count: 1,
              id: 80,
              metadata: 0
            }
          }
        ],
        "82": [
          {
            inShape: [
              [
                337,
                337
              ],
              [
                337,
                337
              ]
            ],
            result: {
              count: 1,
              id: 82,
              metadata: 0
            }
          }
        ],
        "84": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                264,
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 84,
              metadata: 0
            }
          }
        ],
        "89": [
          {
            inShape: [
              [
                348,
                348
              ],
              [
                348,
                348
              ]
            ],
            result: {
              count: 1,
              id: 89,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                348,
                348,
                348
              ],
              [
                348,
                348,
                348
              ],
              [
                348,
                348,
                348
              ]
            ],
            result: {
              count: 1,
              id: 89,
              metadata: 0
            }
          }
        ],
        "91": [
          {
            inShape: [
              [
                86
              ],
              [
                50
              ]
            ],
            result: {
              count: 1,
              id: 91,
              metadata: 0
            }
          }
        ],
        "95": [
          {
            inShape: [
              [
                20,
                20,
                20
              ],
              [
                20,
                {
                  id: 351,
                  metadata: 0
                },
                20
              ],
              [
                20,
                20,
                20
              ]
            ],
            result: {
              count: 8,
              id: 95,
              metadata: 15
            }
          }
        ],
        "96": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 2,
              id: 96,
              metadata: 0
            }
          }
        ],
        "98": [
          {
            inShape: [
              [
                1,
                1
              ],
              [
                1,
                1
              ]
            ],
            result: {
              count: 4,
              id: 98,
              metadata: 0
            }
          },
          {
            ingredients: [
              98,
              106
            ],
            result: {
              count: 1,
              id: 98,
              metadata: 1
            }
          },
          {
            inShape: [
              [
                {
                  id: 44,
                  metadata: 5
                }
              ],
              [
                {
                  id: 44,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 98,
              metadata: 3
            }
          }
        ],
        "101": [
          {
            inShape: [
              [
                265,
                265,
                265
              ],
              [
                265,
                265,
                265
              ]
            ],
            result: {
              count: 16,
              id: 101,
              metadata: 0
            }
          }
        ],
        "102": [
          {
            inShape: [
              [
                20,
                20,
                20
              ],
              [
                20,
                20,
                20
              ]
            ],
            result: {
              count: 16,
              id: 102,
              metadata: 0
            }
          }
        ],
        "103": [
          {
            inShape: [
              [
                360,
                360,
                360
              ],
              [
                360,
                360,
                360
              ],
              [
                360,
                360,
                360
              ]
            ],
            result: {
              count: 1,
              id: 103,
              metadata: 0
            }
          }
        ],
        "108": [
          {
            inShape: [
              [
                null,
                null,
                45
              ],
              [
                null,
                45,
                45
              ],
              [
                45,
                45,
                45
              ]
            ],
            result: {
              count: 4,
              id: 108,
              metadata: 0
            }
          }
        ],
        "109": [
          {
            inShape: [
              [
                null,
                null,
                {
                  id: 98,
                  metadata: 3
                }
              ],
              [
                null,
                {
                  id: 98,
                  metadata: 3
                },
                {
                  id: 98,
                  metadata: 3
                }
              ],
              [
                {
                  id: 98,
                  metadata: 3
                },
                {
                  id: 98,
                  metadata: 3
                },
                {
                  id: 98,
                  metadata: 3
                }
              ]
            ],
            result: {
              count: 4,
              id: 109,
              metadata: 0
            }
          }
        ],
        "113": [
          {
            inShape: [
              [
                405,
                405,
                405
              ],
              [
                405,
                405,
                405
              ]
            ],
            result: {
              count: 6,
              id: 113,
              metadata: 0
            }
          }
        ],
        "114": [
          {
            inShape: [
              [
                null,
                null,
                405
              ],
              [
                null,
                405,
                405
              ],
              [
                405,
                405,
                405
              ]
            ],
            result: {
              count: 4,
              id: 114,
              metadata: 0
            }
          }
        ],
        "116": [
          {
            inShape: [
              [
                null,
                340,
                null
              ],
              [
                264,
                49,
                264
              ],
              [
                49,
                49,
                49
              ]
            ],
            result: {
              count: 1,
              id: 116,
              metadata: 0
            }
          }
        ],
        "123": [
          {
            inShape: [
              [
                null,
                331,
                null
              ],
              [
                331,
                89,
                331
              ],
              [
                null,
                331,
                null
              ]
            ],
            result: {
              count: 1,
              id: 123,
              metadata: 0
            }
          }
        ],
        "126": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 6,
              id: 126,
              metadata: 5
            }
          }
        ],
        "128": [
          {
            inShape: [
              [
                null,
                null,
                {
                  id: 24,
                  metadata: 2
                }
              ],
              [
                null,
                {
                  id: 24,
                  metadata: 2
                },
                {
                  id: 24,
                  metadata: 2
                }
              ],
              [
                {
                  id: 24,
                  metadata: 2
                },
                {
                  id: 24,
                  metadata: 2
                },
                {
                  id: 24,
                  metadata: 2
                }
              ]
            ],
            result: {
              count: 4,
              id: 128,
              metadata: 0
            }
          }
        ],
        "130": [
          {
            inShape: [
              [
                49,
                49,
                49
              ],
              [
                49,
                381,
                49
              ],
              [
                49,
                49,
                49
              ]
            ],
            result: {
              count: 1,
              id: 130,
              metadata: 0
            }
          }
        ],
        "131": [
          {
            inShape: [
              [
                265
              ],
              [
                280
              ],
              [
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 2,
              id: 131,
              metadata: 0
            }
          }
        ],
        "133": [
          {
            inShape: [
              [
                388,
                388,
                388
              ],
              [
                388,
                388,
                388
              ],
              [
                388,
                388,
                388
              ]
            ],
            result: {
              count: 1,
              id: 133,
              metadata: 0
            }
          }
        ],
        "138": [
          {
            inShape: [
              [
                20,
                20,
                20
              ],
              [
                20,
                399,
                20
              ],
              [
                49,
                49,
                49
              ]
            ],
            result: {
              count: 1,
              id: 138,
              metadata: 0
            }
          }
        ],
        "139": [
          {
            inShape: [
              [
                4,
                4,
                4
              ],
              [
                4,
                4,
                4
              ]
            ],
            result: {
              count: 6,
              id: 139,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                48,
                48,
                48
              ],
              [
                48,
                48,
                48
              ]
            ],
            result: {
              count: 6,
              id: 139,
              metadata: 1
            }
          }
        ],
        "143": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 143,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                1
              ],
              [
                1
              ]
            ],
            result: {
              count: 1,
              id: 143,
              metadata: 0
            }
          }
        ],
        "145": [
          {
            inShape: [
              [
                42,
                42,
                42
              ],
              [
                null,
                265,
                null
              ],
              [
                265,
                265,
                265
              ]
            ],
            result: {
              count: 1,
              id: 145,
              metadata: 0
            }
          }
        ],
        "146": [
          {
            ingredients: [
              131,
              54
            ],
            result: {
              count: 1,
              id: 146,
              metadata: 0
            }
          }
        ],
        "147": [
          {
            inShape: [
              [
                266,
                266
              ]
            ],
            result: {
              count: 1,
              id: 147,
              metadata: 0
            }
          }
        ],
        "148": [
          {
            inShape: [
              [
                265,
                265
              ]
            ],
            result: {
              count: 1,
              id: 148,
              metadata: 0
            }
          }
        ],
        "151": [
          {
            inShape: [
              [
                20,
                20,
                20
              ],
              [
                406,
                406,
                406
              ],
              [
                {
                  id: 126,
                  metadata: 5
                },
                {
                  id: 126,
                  metadata: 5
                },
                {
                  id: 126,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 151,
              metadata: 0
            }
          }
        ],
        "152": [
          {
            inShape: [
              [
                331,
                331,
                331
              ],
              [
                331,
                331,
                331
              ],
              [
                331,
                331,
                331
              ]
            ],
            result: {
              count: 1,
              id: 152,
              metadata: 0
            }
          }
        ],
        "154": [
          {
            inShape: [
              [
                265,
                null,
                265
              ],
              [
                265,
                54,
                265
              ],
              [
                null,
                265,
                null
              ]
            ],
            result: {
              count: 1,
              id: 154,
              metadata: 0
            }
          }
        ],
        "155": [
          {
            inShape: [
              [
                406,
                406
              ],
              [
                406,
                406
              ]
            ],
            result: {
              count: 1,
              id: 155,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 44,
                  metadata: 7
                }
              ],
              [
                {
                  id: 44,
                  metadata: 7
                }
              ]
            ],
            result: {
              count: 1,
              id: 155,
              metadata: 1
            }
          },
          {
            inShape: [
              [
                {
                  id: 155,
                  metadata: 0
                }
              ],
              [
                {
                  id: 155,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 2,
              id: 155,
              metadata: 0
            }
          }
        ],
        "156": [
          {
            inShape: [
              [
                null,
                null,
                {
                  id: 155,
                  metadata: 0
                }
              ],
              [
                null,
                {
                  id: 155,
                  metadata: 0
                },
                {
                  id: 155,
                  metadata: 0
                }
              ],
              [
                {
                  id: 155,
                  metadata: 0
                },
                {
                  id: 155,
                  metadata: 0
                },
                {
                  id: 155,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 4,
              id: 156,
              metadata: 0
            }
          }
        ],
        "157": [
          {
            inShape: [
              [
                265,
                280,
                265
              ],
              [
                265,
                75,
                265
              ],
              [
                265,
                280,
                265
              ]
            ],
            result: {
              count: 6,
              id: 157,
              metadata: 0
            }
          }
        ],
        "158": [
          {
            inShape: [
              [
                4,
                4,
                4
              ],
              [
                4,
                null,
                4
              ],
              [
                4,
                331,
                4
              ]
            ],
            result: {
              count: 1,
              id: 158,
              metadata: 0
            }
          }
        ],
        "160": [
          {
            inShape: [
              [
                {
                  id: 95,
                  metadata: 15
                },
                {
                  id: 95,
                  metadata: 15
                },
                {
                  id: 95,
                  metadata: 15
                }
              ],
              [
                {
                  id: 95,
                  metadata: 15
                },
                {
                  id: 95,
                  metadata: 15
                },
                {
                  id: 95,
                  metadata: 15
                }
              ]
            ],
            result: {
              count: 16,
              id: 160,
              metadata: 15
            }
          }
        ],
        "164": [
          {
            inShape: [
              [
                null,
                null,
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                null,
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 4,
              id: 164,
              metadata: 0
            }
          }
        ],
        "165": [
          {
            inShape: [
              [
                341,
                341,
                341
              ],
              [
                341,
                341,
                341
              ],
              [
                341,
                341,
                341
              ]
            ],
            result: {
              count: 1,
              id: 165,
              metadata: 0
            }
          }
        ],
        "167": [
          {
            inShape: [
              [
                265,
                265
              ],
              [
                265,
                265
              ]
            ],
            result: {
              count: 1,
              id: 167,
              metadata: 0
            }
          }
        ],
        "168": [
          {
            inShape: [
              [
                409,
                409,
                409
              ],
              [
                409,
                409,
                409
              ],
              [
                409,
                409,
                409
              ]
            ],
            result: {
              count: 1,
              id: 168,
              metadata: 1
            }
          },
          {
            inShape: [
              [
                409,
                409,
                409
              ],
              [
                409,
                {
                  id: 351,
                  metadata: 0
                },
                409
              ],
              [
                409,
                409,
                409
              ]
            ],
            result: {
              count: 1,
              id: 168,
              metadata: 2
            }
          }
        ],
        "170": [
          {
            inShape: [
              [
                296,
                296,
                296
              ],
              [
                296,
                296,
                296
              ],
              [
                296,
                296,
                296
              ]
            ],
            result: {
              count: 1,
              id: 170,
              metadata: 0
            }
          }
        ],
        "171": [
          {
            inShape: [
              [
                35,
                35
              ]
            ],
            result: {
              count: 3,
              id: 171,
              metadata: 15
            }
          }
        ],
        "172": [
          {
            inShape: [
              [
                172,
                172,
                172
              ],
              [
                172,
                {
                  id: 351,
                  metadata: 0
                },
                172
              ],
              [
                172,
                172,
                172
              ]
            ],
            result: {
              count: 8,
              id: 172,
              metadata: 15
            }
          }
        ],
        "173": [
          {
            inShape: [
              [
                {
                  id: 263,
                  metadata: 0
                },
                {
                  id: 263,
                  metadata: 0
                },
                {
                  id: 263,
                  metadata: 0
                }
              ],
              [
                {
                  id: 263,
                  metadata: 0
                },
                {
                  id: 263,
                  metadata: 0
                },
                {
                  id: 263,
                  metadata: 0
                }
              ],
              [
                {
                  id: 263,
                  metadata: 0
                },
                {
                  id: 263,
                  metadata: 0
                },
                {
                  id: 263,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 173,
              metadata: 0
            }
          }
        ],
        "179": [
          {
            inShape: [
              [
                {
                  id: 12,
                  metadata: 1
                },
                {
                  id: 12,
                  metadata: 1
                }
              ],
              [
                {
                  id: 12,
                  metadata: 1
                },
                {
                  id: 12,
                  metadata: 1
                }
              ]
            ],
            result: {
              count: 1,
              id: 179,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 179,
                  metadata: 0
                },
                {
                  id: 179,
                  metadata: 0
                }
              ],
              [
                {
                  id: 179,
                  metadata: 0
                },
                {
                  id: 179,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 4,
              id: 179,
              metadata: 2
            }
          },
          {
            inShape: [
              [
                {
                  id: 182,
                  metadata: 0
                }
              ],
              [
                {
                  id: 182,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 179,
              metadata: 1
            }
          }
        ],
        "180": [
          {
            inShape: [
              [
                null,
                null,
                {
                  id: 179,
                  metadata: 2
                }
              ],
              [
                null,
                {
                  id: 179,
                  metadata: 2
                },
                {
                  id: 179,
                  metadata: 2
                }
              ],
              [
                {
                  id: 179,
                  metadata: 2
                },
                {
                  id: 179,
                  metadata: 2
                },
                {
                  id: 179,
                  metadata: 2
                }
              ]
            ],
            result: {
              count: 4,
              id: 180,
              metadata: 0
            }
          }
        ],
        "182": [
          {
            inShape: [
              [
                {
                  id: 179,
                  metadata: 2
                },
                {
                  id: 179,
                  metadata: 2
                },
                {
                  id: 179,
                  metadata: 2
                }
              ]
            ],
            result: {
              count: 6,
              id: 182,
              metadata: 0
            }
          }
        ],
        "186": [
          {
            inShape: [
              [
                280,
                {
                  id: 5,
                  metadata: 5
                },
                280
              ],
              [
                280,
                {
                  id: 5,
                  metadata: 5
                },
                280
              ]
            ],
            result: {
              count: 1,
              id: 186,
              metadata: 0
            }
          }
        ],
        "191": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                280,
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                280,
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 3,
              id: 191,
              metadata: 0
            }
          }
        ],
        "198": [
          {
            inShape: [
              [
                369
              ],
              [
                433
              ]
            ],
            result: {
              count: 4,
              id: 198,
              metadata: 0
            }
          }
        ],
        "201": [
          {
            inShape: [
              [
                433,
                433
              ],
              [
                433,
                433
              ]
            ],
            result: {
              count: 4,
              id: 201,
              metadata: 0
            }
          }
        ],
        "202": [
          {
            inShape: [
              [
                205
              ],
              [
                205
              ]
            ],
            result: {
              count: 1,
              id: 202,
              metadata: 0
            }
          }
        ],
        "203": [
          {
            inShape: [
              [
                null,
                null,
                201
              ],
              [
                null,
                201,
                201
              ],
              [
                201,
                201,
                201
              ]
            ],
            result: {
              count: 4,
              id: 203,
              metadata: 0
            }
          }
        ],
        "205": [
          {
            inShape: [
              [
                201,
                201,
                201
              ]
            ],
            result: {
              count: 6,
              id: 205,
              metadata: 0
            }
          }
        ],
        "206": [
          {
            inShape: [
              [
                121,
                121
              ],
              [
                121,
                121
              ]
            ],
            result: {
              count: 4,
              id: 206,
              metadata: 0
            }
          }
        ],
        "214": [
          {
            inShape: [
              [
                372,
                372,
                372
              ],
              [
                372,
                372,
                372
              ],
              [
                372,
                372,
                372
              ]
            ],
            result: {
              count: 1,
              id: 214,
              metadata: 0
            }
          }
        ],
        "215": [
          {
            inShape: [
              [
                372,
                405
              ],
              [
                405,
                372
              ]
            ],
            result: {
              count: 1,
              id: 215,
              metadata: 0
            }
          }
        ],
        "216": [
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 15
                },
                {
                  id: 351,
                  metadata: 15
                },
                {
                  id: 351,
                  metadata: 15
                }
              ],
              [
                {
                  id: 351,
                  metadata: 15
                },
                {
                  id: 351,
                  metadata: 15
                },
                {
                  id: 351,
                  metadata: 15
                }
              ],
              [
                {
                  id: 351,
                  metadata: 15
                },
                {
                  id: 351,
                  metadata: 15
                },
                {
                  id: 351,
                  metadata: 15
                }
              ]
            ],
            result: {
              count: 1,
              id: 216,
              metadata: 0
            }
          }
        ],
        "229": [
          {
            inShape: [
              [
                450
              ],
              [
                54
              ],
              [
                450
              ]
            ],
            result: {
              count: 1,
              id: 229,
              metadata: 0
            }
          }
        ],
        "234": [
          {
            ingredients: [
              234,
              {
                id: 351,
                metadata: 0
              }
            ],
            result: {
              count: 1,
              id: 234,
              metadata: 0
            }
          }
        ],
        "256": [
          {
            inShape: [
              [
                265
              ],
              [
                280
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 256,
              metadata: 0
            }
          },
          {
            ingredients: [
              256,
              256
            ],
            result: {
              count: 1,
              id: 256,
              metadata: 0
            }
          }
        ],
        "257": [
          {
            inShape: [
              [
                265,
                265,
                265
              ],
              [
                null,
                280,
                null
              ],
              [
                null,
                280,
                null
              ]
            ],
            result: {
              count: 1,
              id: 257,
              metadata: 0
            }
          },
          {
            ingredients: [
              257,
              257
            ],
            result: {
              count: 1,
              id: 257,
              metadata: 0
            }
          }
        ],
        "258": [
          {
            inShape: [
              [
                265,
                265
              ],
              [
                265,
                280
              ],
              [
                null,
                280
              ]
            ],
            result: {
              count: 1,
              id: 258,
              metadata: 0
            }
          },
          {
            ingredients: [
              258,
              258
            ],
            result: {
              count: 1,
              id: 258,
              metadata: 0
            }
          }
        ],
        "259": [
          {
            ingredients: [
              265,
              318
            ],
            result: {
              count: 1,
              id: 259,
              metadata: 0
            }
          },
          {
            ingredients: [
              259,
              259
            ],
            result: {
              count: 1,
              id: 259,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                265,
                null
              ],
              [
                null,
                318
              ]
            ],
            result: {
              count: 1,
              id: 259,
              metadata: 0
            }
          }
        ],
        "261": [
          {
            inShape: [
              [
                null,
                280,
                287
              ],
              [
                280,
                null,
                287
              ],
              [
                null,
                280,
                287
              ]
            ],
            result: {
              count: 1,
              id: 261,
              metadata: 0
            }
          },
          {
            ingredients: [
              261,
              261
            ],
            result: {
              count: 1,
              id: 261,
              metadata: 0
            }
          }
        ],
        "262": [
          {
            inShape: [
              [
                318
              ],
              [
                280
              ],
              [
                288
              ]
            ],
            result: {
              count: 4,
              id: 262,
              metadata: 0
            }
          }
        ],
        "263": [
          {
            inShape: [
              [
                173
              ]
            ],
            result: {
              count: 9,
              id: 263,
              metadata: 0
            }
          }
        ],
        "264": [
          {
            inShape: [
              [
                57
              ]
            ],
            result: {
              count: 9,
              id: 264,
              metadata: 0
            }
          }
        ],
        "265": [
          {
            inShape: [
              [
                42
              ]
            ],
            result: {
              count: 9,
              id: 265,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                452,
                452,
                452
              ],
              [
                452,
                452,
                452
              ],
              [
                452,
                452,
                452
              ]
            ],
            result: {
              count: 1,
              id: 265,
              metadata: 0
            }
          }
        ],
        "266": [
          {
            inShape: [
              [
                41
              ]
            ],
            result: {
              count: 9,
              id: 266,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                371,
                371,
                371
              ],
              [
                371,
                371,
                371
              ],
              [
                371,
                371,
                371
              ]
            ],
            result: {
              count: 1,
              id: 266,
              metadata: 0
            }
          }
        ],
        "267": [
          {
            inShape: [
              [
                265
              ],
              [
                265
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 267,
              metadata: 0
            }
          },
          {
            ingredients: [
              267,
              267
            ],
            result: {
              count: 1,
              id: 267,
              metadata: 0
            }
          }
        ],
        "268": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 268,
              metadata: 0
            }
          },
          {
            ingredients: [
              268,
              268
            ],
            result: {
              count: 1,
              id: 268,
              metadata: 0
            }
          }
        ],
        "269": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                280
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 269,
              metadata: 0
            }
          },
          {
            ingredients: [
              269,
              269
            ],
            result: {
              count: 1,
              id: 269,
              metadata: 0
            }
          }
        ],
        "270": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                null,
                280,
                null
              ],
              [
                null,
                280,
                null
              ]
            ],
            result: {
              count: 1,
              id: 270,
              metadata: 0
            }
          },
          {
            ingredients: [
              270,
              270
            ],
            result: {
              count: 1,
              id: 270,
              metadata: 0
            }
          }
        ],
        "271": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                280
              ],
              [
                null,
                280
              ]
            ],
            result: {
              count: 1,
              id: 271,
              metadata: 0
            }
          },
          {
            ingredients: [
              271,
              271
            ],
            result: {
              count: 1,
              id: 271,
              metadata: 0
            }
          }
        ],
        "272": [
          {
            inShape: [
              [
                4
              ],
              [
                4
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 272,
              metadata: 0
            }
          },
          {
            ingredients: [
              272,
              272
            ],
            result: {
              count: 1,
              id: 272,
              metadata: 0
            }
          }
        ],
        "273": [
          {
            inShape: [
              [
                4
              ],
              [
                280
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 273,
              metadata: 0
            }
          },
          {
            ingredients: [
              273,
              273
            ],
            result: {
              count: 1,
              id: 273,
              metadata: 0
            }
          }
        ],
        "274": [
          {
            inShape: [
              [
                4,
                4,
                4
              ],
              [
                null,
                280,
                null
              ],
              [
                null,
                280,
                null
              ]
            ],
            result: {
              count: 1,
              id: 274,
              metadata: 0
            }
          },
          {
            ingredients: [
              274,
              274
            ],
            result: {
              count: 1,
              id: 274,
              metadata: 0
            }
          }
        ],
        "275": [
          {
            inShape: [
              [
                4,
                4
              ],
              [
                4,
                280
              ],
              [
                null,
                280
              ]
            ],
            result: {
              count: 1,
              id: 275,
              metadata: 0
            }
          },
          {
            ingredients: [
              275,
              275
            ],
            result: {
              count: 1,
              id: 275,
              metadata: 0
            }
          }
        ],
        "276": [
          {
            inShape: [
              [
                264
              ],
              [
                264
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 276,
              metadata: 0
            }
          },
          {
            ingredients: [
              276,
              276
            ],
            result: {
              count: 1,
              id: 276,
              metadata: 0
            }
          }
        ],
        "277": [
          {
            inShape: [
              [
                264
              ],
              [
                280
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 277,
              metadata: 0
            }
          },
          {
            ingredients: [
              277,
              277
            ],
            result: {
              count: 1,
              id: 277,
              metadata: 0
            }
          }
        ],
        "278": [
          {
            inShape: [
              [
                264,
                264,
                264
              ],
              [
                null,
                280,
                null
              ],
              [
                null,
                280,
                null
              ]
            ],
            result: {
              count: 1,
              id: 278,
              metadata: 0
            }
          },
          {
            ingredients: [
              278,
              278
            ],
            result: {
              count: 1,
              id: 278,
              metadata: 0
            }
          }
        ],
        "279": [
          {
            inShape: [
              [
                264,
                264
              ],
              [
                264,
                280
              ],
              [
                null,
                280
              ]
            ],
            result: {
              count: 1,
              id: 279,
              metadata: 0
            }
          },
          {
            ingredients: [
              279,
              279
            ],
            result: {
              count: 1,
              id: 279,
              metadata: 0
            }
          }
        ],
        "280": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 4,
              id: 280,
              metadata: 0
            }
          }
        ],
        "281": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                null,
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                null,
                {
                  id: 5,
                  metadata: 5
                },
                null
              ]
            ],
            result: {
              count: 4,
              id: 281,
              metadata: 0
            }
          }
        ],
        "282": [
          {
            ingredients: [
              40,
              39,
              281
            ],
            result: {
              count: 1,
              id: 282,
              metadata: 0
            }
          }
        ],
        "283": [
          {
            inShape: [
              [
                266
              ],
              [
                266
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 283,
              metadata: 0
            }
          },
          {
            ingredients: [
              283,
              283
            ],
            result: {
              count: 1,
              id: 283,
              metadata: 0
            }
          }
        ],
        "284": [
          {
            inShape: [
              [
                266
              ],
              [
                280
              ],
              [
                280
              ]
            ],
            result: {
              count: 1,
              id: 284,
              metadata: 0
            }
          },
          {
            ingredients: [
              284,
              284
            ],
            result: {
              count: 1,
              id: 284,
              metadata: 0
            }
          }
        ],
        "285": [
          {
            inShape: [
              [
                266,
                266,
                266
              ],
              [
                null,
                280,
                null
              ],
              [
                null,
                280,
                null
              ]
            ],
            result: {
              count: 1,
              id: 285,
              metadata: 0
            }
          },
          {
            ingredients: [
              285,
              285
            ],
            result: {
              count: 1,
              id: 285,
              metadata: 0
            }
          }
        ],
        "286": [
          {
            inShape: [
              [
                266,
                266
              ],
              [
                266,
                280
              ],
              [
                null,
                280
              ]
            ],
            result: {
              count: 1,
              id: 286,
              metadata: 0
            }
          },
          {
            ingredients: [
              286,
              286
            ],
            result: {
              count: 1,
              id: 286,
              metadata: 0
            }
          }
        ],
        "290": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                null,
                280
              ],
              [
                null,
                280
              ]
            ],
            result: {
              count: 1,
              id: 290,
              metadata: 0
            }
          },
          {
            ingredients: [
              290,
              290
            ],
            result: {
              count: 1,
              id: 290,
              metadata: 0
            }
          }
        ],
        "291": [
          {
            inShape: [
              [
                4,
                4
              ],
              [
                null,
                280
              ],
              [
                null,
                280
              ]
            ],
            result: {
              count: 1,
              id: 291,
              metadata: 0
            }
          },
          {
            ingredients: [
              291,
              291
            ],
            result: {
              count: 1,
              id: 291,
              metadata: 0
            }
          }
        ],
        "292": [
          {
            inShape: [
              [
                265,
                265
              ],
              [
                null,
                280
              ],
              [
                null,
                280
              ]
            ],
            result: {
              count: 1,
              id: 292,
              metadata: 0
            }
          },
          {
            ingredients: [
              292,
              292
            ],
            result: {
              count: 1,
              id: 292,
              metadata: 0
            }
          }
        ],
        "293": [
          {
            inShape: [
              [
                264,
                264
              ],
              [
                null,
                280
              ],
              [
                null,
                280
              ]
            ],
            result: {
              count: 1,
              id: 293,
              metadata: 0
            }
          },
          {
            ingredients: [
              293,
              293
            ],
            result: {
              count: 1,
              id: 293,
              metadata: 0
            }
          }
        ],
        "294": [
          {
            inShape: [
              [
                266,
                266
              ],
              [
                null,
                280
              ],
              [
                null,
                280
              ]
            ],
            result: {
              count: 1,
              id: 294,
              metadata: 0
            }
          },
          {
            ingredients: [
              294,
              294
            ],
            result: {
              count: 1,
              id: 294,
              metadata: 0
            }
          }
        ],
        "296": [
          {
            inShape: [
              [
                170
              ]
            ],
            result: {
              count: 9,
              id: 296,
              metadata: 0
            }
          }
        ],
        "297": [
          {
            inShape: [
              [
                296,
                296,
                296
              ]
            ],
            result: {
              count: 1,
              id: 297,
              metadata: 0
            }
          }
        ],
        "298": [
          {
            inShape: [
              [
                334,
                334,
                334
              ],
              [
                334,
                null,
                334
              ]
            ],
            result: {
              count: 1,
              id: 298,
              metadata: 0
            }
          },
          {
            ingredients: [
              298,
              298
            ],
            result: {
              count: 1,
              id: 298,
              metadata: 0
            }
          }
        ],
        "299": [
          {
            inShape: [
              [
                334,
                null,
                334
              ],
              [
                334,
                334,
                334
              ],
              [
                334,
                334,
                334
              ]
            ],
            result: {
              count: 1,
              id: 299,
              metadata: 0
            }
          },
          {
            ingredients: [
              299,
              299
            ],
            result: {
              count: 1,
              id: 299,
              metadata: 0
            }
          }
        ],
        "300": [
          {
            inShape: [
              [
                334,
                334,
                334
              ],
              [
                334,
                null,
                334
              ],
              [
                334,
                null,
                334
              ]
            ],
            result: {
              count: 1,
              id: 300,
              metadata: 0
            }
          },
          {
            ingredients: [
              300,
              300
            ],
            result: {
              count: 1,
              id: 300,
              metadata: 0
            }
          }
        ],
        "301": [
          {
            inShape: [
              [
                334,
                null,
                334
              ],
              [
                334,
                null,
                334
              ]
            ],
            result: {
              count: 1,
              id: 301,
              metadata: 0
            }
          },
          {
            ingredients: [
              301,
              301
            ],
            result: {
              count: 1,
              id: 301,
              metadata: 0
            }
          }
        ],
        "302": [
          {
            ingredients: [
              302,
              302
            ],
            result: {
              count: 1,
              id: 302,
              metadata: 0
            }
          }
        ],
        "303": [
          {
            ingredients: [
              303,
              303
            ],
            result: {
              count: 1,
              id: 303,
              metadata: 0
            }
          }
        ],
        "304": [
          {
            ingredients: [
              304,
              304
            ],
            result: {
              count: 1,
              id: 304,
              metadata: 0
            }
          }
        ],
        "305": [
          {
            ingredients: [
              305,
              305
            ],
            result: {
              count: 1,
              id: 305,
              metadata: 0
            }
          }
        ],
        "306": [
          {
            inShape: [
              [
                265,
                265,
                265
              ],
              [
                265,
                null,
                265
              ]
            ],
            result: {
              count: 1,
              id: 306,
              metadata: 0
            }
          },
          {
            ingredients: [
              306,
              306
            ],
            result: {
              count: 1,
              id: 306,
              metadata: 0
            }
          }
        ],
        "307": [
          {
            inShape: [
              [
                265,
                null,
                265
              ],
              [
                265,
                265,
                265
              ],
              [
                265,
                265,
                265
              ]
            ],
            result: {
              count: 1,
              id: 307,
              metadata: 0
            }
          },
          {
            ingredients: [
              307,
              307
            ],
            result: {
              count: 1,
              id: 307,
              metadata: 0
            }
          }
        ],
        "308": [
          {
            inShape: [
              [
                265,
                265,
                265
              ],
              [
                265,
                null,
                265
              ],
              [
                265,
                null,
                265
              ]
            ],
            result: {
              count: 1,
              id: 308,
              metadata: 0
            }
          },
          {
            ingredients: [
              308,
              308
            ],
            result: {
              count: 1,
              id: 308,
              metadata: 0
            }
          }
        ],
        "309": [
          {
            inShape: [
              [
                265,
                null,
                265
              ],
              [
                265,
                null,
                265
              ]
            ],
            result: {
              count: 1,
              id: 309,
              metadata: 0
            }
          },
          {
            ingredients: [
              309,
              309
            ],
            result: {
              count: 1,
              id: 309,
              metadata: 0
            }
          }
        ],
        "310": [
          {
            inShape: [
              [
                264,
                264,
                264
              ],
              [
                264,
                null,
                264
              ]
            ],
            result: {
              count: 1,
              id: 310,
              metadata: 0
            }
          },
          {
            ingredients: [
              310,
              310
            ],
            result: {
              count: 1,
              id: 310,
              metadata: 0
            }
          }
        ],
        "311": [
          {
            inShape: [
              [
                264,
                null,
                264
              ],
              [
                264,
                264,
                264
              ],
              [
                264,
                264,
                264
              ]
            ],
            result: {
              count: 1,
              id: 311,
              metadata: 0
            }
          },
          {
            ingredients: [
              311,
              311
            ],
            result: {
              count: 1,
              id: 311,
              metadata: 0
            }
          }
        ],
        "312": [
          {
            inShape: [
              [
                264,
                264,
                264
              ],
              [
                264,
                null,
                264
              ],
              [
                264,
                null,
                264
              ]
            ],
            result: {
              count: 1,
              id: 312,
              metadata: 0
            }
          },
          {
            ingredients: [
              312,
              312
            ],
            result: {
              count: 1,
              id: 312,
              metadata: 0
            }
          }
        ],
        "313": [
          {
            inShape: [
              [
                264,
                null,
                264
              ],
              [
                264,
                null,
                264
              ]
            ],
            result: {
              count: 1,
              id: 313,
              metadata: 0
            }
          },
          {
            ingredients: [
              313,
              313
            ],
            result: {
              count: 1,
              id: 313,
              metadata: 0
            }
          }
        ],
        "314": [
          {
            inShape: [
              [
                266,
                266,
                266
              ],
              [
                266,
                null,
                266
              ]
            ],
            result: {
              count: 1,
              id: 314,
              metadata: 0
            }
          },
          {
            ingredients: [
              314,
              314
            ],
            result: {
              count: 1,
              id: 314,
              metadata: 0
            }
          }
        ],
        "315": [
          {
            inShape: [
              [
                266,
                null,
                266
              ],
              [
                266,
                266,
                266
              ],
              [
                266,
                266,
                266
              ]
            ],
            result: {
              count: 1,
              id: 315,
              metadata: 0
            }
          },
          {
            ingredients: [
              315,
              315
            ],
            result: {
              count: 1,
              id: 315,
              metadata: 0
            }
          }
        ],
        "316": [
          {
            inShape: [
              [
                266,
                266,
                266
              ],
              [
                266,
                null,
                266
              ],
              [
                266,
                null,
                266
              ]
            ],
            result: {
              count: 1,
              id: 316,
              metadata: 0
            }
          },
          {
            ingredients: [
              316,
              316
            ],
            result: {
              count: 1,
              id: 316,
              metadata: 0
            }
          }
        ],
        "317": [
          {
            inShape: [
              [
                266,
                null,
                266
              ],
              [
                266,
                null,
                266
              ]
            ],
            result: {
              count: 1,
              id: 317,
              metadata: 0
            }
          },
          {
            ingredients: [
              317,
              317
            ],
            result: {
              count: 1,
              id: 317,
              metadata: 0
            }
          }
        ],
        "321": [
          {
            inShape: [
              [
                280,
                280,
                280
              ],
              [
                280,
                35,
                280
              ],
              [
                280,
                280,
                280
              ]
            ],
            result: {
              count: 1,
              id: 321,
              metadata: 0
            }
          }
        ],
        "322": [
          {
            inShape: [
              [
                266,
                266,
                266
              ],
              [
                266,
                260,
                266
              ],
              [
                266,
                266,
                266
              ]
            ],
            result: {
              count: 1,
              id: 322,
              metadata: 0
            }
          }
        ],
        "323": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                null,
                280,
                null
              ]
            ],
            result: {
              count: 3,
              id: 323,
              metadata: 0
            }
          }
        ],
        "325": [
          {
            inShape: [
              [
                265,
                null,
                265
              ],
              [
                null,
                265,
                null
              ]
            ],
            result: {
              count: 1,
              id: 325,
              metadata: 0
            }
          }
        ],
        "328": [
          {
            inShape: [
              [
                265,
                null,
                265
              ],
              [
                265,
                265,
                265
              ]
            ],
            result: {
              count: 1,
              id: 328,
              metadata: 0
            }
          }
        ],
        "330": [
          {
            inShape: [
              [
                265,
                265
              ],
              [
                265,
                265
              ],
              [
                265,
                265
              ]
            ],
            result: {
              count: 3,
              id: 330,
              metadata: 0
            }
          }
        ],
        "331": [
          {
            inShape: [
              [
                152
              ]
            ],
            result: {
              count: 9,
              id: 331,
              metadata: 0
            }
          }
        ],
        "333": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 0
                },
                269,
                {
                  id: 5,
                  metadata: 0
                }
              ],
              [
                {
                  id: 5,
                  metadata: 0
                },
                {
                  id: 5,
                  metadata: 0
                },
                {
                  id: 5,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 333,
              metadata: 0
            }
          }
        ],
        "334": [
          {
            inShape: [
              [
                415,
                415
              ],
              [
                415,
                415
              ]
            ],
            result: {
              count: 1,
              id: 334,
              metadata: 0
            }
          }
        ],
        "339": [
          {
            inShape: [
              [
                338,
                338,
                338
              ]
            ],
            result: {
              count: 3,
              id: 339,
              metadata: 0
            }
          }
        ],
        "340": [
          {
            ingredients: [
              339,
              339,
              339,
              334
            ],
            result: {
              count: 1,
              id: 340,
              metadata: 0
            }
          }
        ],
        "341": [
          {
            inShape: [
              [
                165
              ]
            ],
            result: {
              count: 9,
              id: 341,
              metadata: 0
            }
          }
        ],
        "342": [
          {
            inShape: [
              [
                54
              ],
              [
                328
              ]
            ],
            result: {
              count: 1,
              id: 342,
              metadata: 0
            }
          }
        ],
        "343": [
          {
            inShape: [
              [
                61
              ],
              [
                328
              ]
            ],
            result: {
              count: 1,
              id: 343,
              metadata: 0
            }
          }
        ],
        "345": [
          {
            inShape: [
              [
                null,
                265,
                null
              ],
              [
                265,
                331,
                265
              ],
              [
                null,
                265,
                null
              ]
            ],
            result: {
              count: 1,
              id: 345,
              metadata: 0
            }
          }
        ],
        "346": [
          {
            inShape: [
              [
                null,
                null,
                280
              ],
              [
                null,
                280,
                287
              ],
              [
                280,
                null,
                287
              ]
            ],
            result: {
              count: 1,
              id: 346,
              metadata: 0
            }
          },
          {
            ingredients: [
              346,
              346
            ],
            result: {
              count: 1,
              id: 346,
              metadata: 0
            }
          }
        ],
        "347": [
          {
            inShape: [
              [
                null,
                266,
                null
              ],
              [
                266,
                331,
                266
              ],
              [
                null,
                266,
                null
              ]
            ],
            result: {
              count: 1,
              id: 347,
              metadata: 0
            }
          }
        ],
        "351": [
          {
            ingredients: [
              {
                id: 351,
                metadata: 4
              },
              {
                id: 351,
                metadata: 2
              }
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 6
            }
          },
          {
            inShape: [
              [
                37
              ]
            ],
            result: {
              count: 1,
              id: 351,
              metadata: 11
            }
          },
          {
            inShape: [
              [
                {
                  id: 175,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 11
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 0
              },
              {
                id: 351,
                metadata: 15
              }
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 8
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 2
              },
              {
                id: 351,
                metadata: 15
              }
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 10
            }
          },
          {
            inShape: [
              [
                {
                  id: 38,
                  metadata: 1
                }
              ]
            ],
            result: {
              count: 1,
              id: 351,
              metadata: 12
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 4
              },
              {
                id: 351,
                metadata: 15
              }
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 12
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 4
              },
              {
                id: 351,
                metadata: 1
              }
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 5
            }
          },
          {
            inShape: [
              [
                {
                  id: 38,
                  metadata: 7
                }
              ]
            ],
            result: {
              count: 1,
              id: 351,
              metadata: 9
            }
          },
          {
            inShape: [
              [
                {
                  id: 175,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 9
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 1
              },
              {
                id: 351,
                metadata: 15
              }
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 9
            }
          },
          {
            inShape: [
              [
                {
                  id: 38,
                  metadata: 2
                }
              ]
            ],
            result: {
              count: 1,
              id: 351,
              metadata: 13
            }
          },
          {
            inShape: [
              [
                {
                  id: 175,
                  metadata: 1
                }
              ]
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 13
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 5
              },
              {
                id: 351,
                metadata: 9
              }
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 13
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 4
              },
              {
                id: 351,
                metadata: 15
              },
              {
                id: 351,
                metadata: 1
              },
              {
                id: 351,
                metadata: 1
              }
            ],
            result: {
              count: 4,
              id: 351,
              metadata: 13
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 9
              },
              {
                id: 351,
                metadata: 1
              },
              {
                id: 351,
                metadata: 4
              }
            ],
            result: {
              count: 3,
              id: 351,
              metadata: 13
            }
          },
          {
            inShape: [
              [
                {
                  id: 38,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 351,
              metadata: 14
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 1
              },
              {
                id: 351,
                metadata: 11
              }
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 14
            }
          },
          {
            inShape: [
              [
                {
                  id: 38,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 351,
              metadata: 1
            }
          },
          {
            inShape: [
              [
                {
                  id: 38,
                  metadata: 4
                }
              ]
            ],
            result: {
              count: 1,
              id: 351,
              metadata: 1
            }
          },
          {
            inShape: [
              [
                {
                  id: 175,
                  metadata: 4
                }
              ]
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 1
            }
          },
          {
            inShape: [
              [
                434
              ]
            ],
            result: {
              count: 1,
              id: 351,
              metadata: 1
            }
          },
          {
            inShape: [
              [
                38
              ]
            ],
            result: {
              count: 1,
              id: 351,
              metadata: 7
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 0
              },
              {
                id: 351,
                metadata: 15
              },
              {
                id: 351,
                metadata: 15
              }
            ],
            result: {
              count: 3,
              id: 351,
              metadata: 7
            }
          },
          {
            ingredients: [
              {
                id: 351,
                metadata: 8
              },
              {
                id: 351,
                metadata: 15
              }
            ],
            result: {
              count: 2,
              id: 351,
              metadata: 7
            }
          },
          {
            inShape: [
              [
                22
              ]
            ],
            result: {
              count: 9,
              id: 351,
              metadata: 4
            }
          },
          {
            inShape: [
              [
                352
              ]
            ],
            result: {
              count: 3,
              id: 351,
              metadata: 15
            }
          },
          {
            inShape: [
              [
                216
              ]
            ],
            result: {
              count: 9,
              id: 351,
              metadata: 15
            }
          }
        ],
        "353": [
          {
            inShape: [
              [
                338
              ]
            ],
            result: {
              count: 1,
              id: 353,
              metadata: 0
            }
          }
        ],
        "354": [
          {
            inShape: [
              [
                335,
                335,
                335
              ],
              [
                353,
                344,
                353
              ],
              [
                296,
                296,
                296
              ]
            ],
            outShape: [
              [
                325,
                325,
                325
              ],
              [
                null,
                null,
                null
              ],
              [
                null,
                null,
                null
              ]
            ],
            result: {
              count: 1,
              id: 354,
              metadata: 0
            }
          }
        ],
        "355": [
          {
            inShape: [
              [
                35,
                35,
                35
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 1,
              id: 355,
              metadata: 0
            }
          }
        ],
        "356": [
          {
            inShape: [
              [
                75,
                331,
                75
              ],
              [
                1,
                1,
                1
              ]
            ],
            result: {
              count: 1,
              id: 356,
              metadata: 0
            }
          }
        ],
        "357": [
          {
            inShape: [
              [
                296,
                {
                  id: 351,
                  metadata: 3
                },
                296
              ]
            ],
            result: {
              count: 8,
              id: 357,
              metadata: 0
            }
          }
        ],
        "359": [
          {
            inShape: [
              [
                null,
                265
              ],
              [
                265,
                null
              ]
            ],
            result: {
              count: 1,
              id: 359,
              metadata: 0
            }
          },
          {
            ingredients: [
              359,
              359
            ],
            result: {
              count: 1,
              id: 359,
              metadata: 0
            }
          }
        ],
        "361": [
          {
            inShape: [
              [
                86
              ]
            ],
            result: {
              count: 4,
              id: 361,
              metadata: 0
            }
          }
        ],
        "362": [
          {
            inShape: [
              [
                360
              ]
            ],
            result: {
              count: 1,
              id: 362,
              metadata: 0
            }
          }
        ],
        "371": [
          {
            inShape: [
              [
                266
              ]
            ],
            result: {
              count: 9,
              id: 371,
              metadata: 0
            }
          }
        ],
        "374": [
          {
            inShape: [
              [
                20,
                null,
                20
              ],
              [
                null,
                20,
                null
              ]
            ],
            result: {
              count: 3,
              id: 374,
              metadata: 0
            }
          }
        ],
        "376": [
          {
            ingredients: [
              39,
              353,
              375
            ],
            result: {
              count: 1,
              id: 376,
              metadata: 0
            }
          }
        ],
        "377": [
          {
            inShape: [
              [
                369
              ]
            ],
            result: {
              count: 2,
              id: 377,
              metadata: 0
            }
          }
        ],
        "378": [
          {
            ingredients: [
              377,
              341
            ],
            result: {
              count: 1,
              id: 378,
              metadata: 0
            }
          }
        ],
        "379": [
          {
            inShape: [
              [
                null,
                369,
                null
              ],
              [
                4,
                4,
                4
              ]
            ],
            result: {
              count: 1,
              id: 379,
              metadata: 0
            }
          }
        ],
        "380": [
          {
            inShape: [
              [
                265,
                null,
                265
              ],
              [
                265,
                null,
                265
              ],
              [
                265,
                265,
                265
              ]
            ],
            result: {
              count: 1,
              id: 380,
              metadata: 0
            }
          }
        ],
        "381": [
          {
            ingredients: [
              377,
              368
            ],
            result: {
              count: 1,
              id: 381,
              metadata: 0
            }
          }
        ],
        "382": [
          {
            inShape: [
              [
                371,
                371,
                371
              ],
              [
                371,
                360,
                371
              ],
              [
                371,
                371,
                371
              ]
            ],
            result: {
              count: 1,
              id: 382,
              metadata: 0
            }
          }
        ],
        "385": [
          {
            ingredients: [
              377,
              263,
              289
            ],
            result: {
              count: 3,
              id: 385,
              metadata: 0
            }
          }
        ],
        "386": [
          {
            ingredients: [
              340,
              {
                id: 351,
                metadata: 0
              },
              288
            ],
            result: {
              count: 1,
              id: 386,
              metadata: 0
            }
          }
        ],
        "387": [
          {
            ingredients: [
              386,
              387
            ],
            result: {
              count: 1,
              id: 387,
              metadata: 0
            }
          },
          {
            ingredients: [
              386,
              387,
              386
            ],
            result: {
              count: 2,
              id: 387,
              metadata: 0
            }
          },
          {
            ingredients: [
              386,
              387,
              386,
              386
            ],
            result: {
              count: 3,
              id: 387,
              metadata: 0
            }
          },
          {
            ingredients: [
              386,
              386,
              387,
              386,
              386
            ],
            result: {
              count: 4,
              id: 387,
              metadata: 0
            }
          },
          {
            ingredients: [
              386,
              386,
              386,
              387,
              386,
              386
            ],
            result: {
              count: 5,
              id: 387,
              metadata: 0
            }
          },
          {
            ingredients: [
              386,
              386,
              386,
              386,
              387,
              386,
              386
            ],
            result: {
              count: 6,
              id: 387,
              metadata: 0
            }
          },
          {
            ingredients: [
              386,
              386,
              386,
              386,
              387,
              386,
              386,
              386
            ],
            result: {
              count: 7,
              id: 387,
              metadata: 0
            }
          },
          {
            ingredients: [
              386,
              386,
              386,
              386,
              387,
              386,
              386,
              386,
              386
            ],
            result: {
              count: 8,
              id: 387,
              metadata: 0
            }
          }
        ],
        "388": [
          {
            inShape: [
              [
                133
              ]
            ],
            result: {
              count: 9,
              id: 388,
              metadata: 0
            }
          }
        ],
        "389": [
          {
            inShape: [
              [
                280,
                280,
                280
              ],
              [
                280,
                334,
                280
              ],
              [
                280,
                280,
                280
              ]
            ],
            result: {
              count: 1,
              id: 389,
              metadata: 0
            }
          }
        ],
        "390": [
          {
            inShape: [
              [
                336,
                null,
                336
              ],
              [
                null,
                336,
                null
              ]
            ],
            result: {
              count: 1,
              id: 390,
              metadata: 0
            }
          }
        ],
        "395": [
          {
            inShape: [
              [
                339,
                339,
                339
              ],
              [
                339,
                345,
                339
              ],
              [
                339,
                339,
                339
              ]
            ],
            result: {
              count: 1,
              id: 395,
              metadata: 0
            }
          }
        ],
        "396": [
          {
            inShape: [
              [
                371,
                371,
                371
              ],
              [
                371,
                391,
                371
              ],
              [
                371,
                371,
                371
              ]
            ],
            result: {
              count: 1,
              id: 396,
              metadata: 0
            }
          }
        ],
        "398": [
          {
            inShape: [
              [
                346,
                null
              ],
              [
                null,
                391
              ]
            ],
            result: {
              count: 1,
              id: 398,
              metadata: 0
            }
          },
          {
            ingredients: [
              398,
              398
            ],
            result: {
              count: 1,
              id: 398,
              metadata: 0
            }
          }
        ],
        "400": [
          {
            ingredients: [
              86,
              353,
              344
            ],
            result: {
              count: 1,
              id: 400,
              metadata: 0
            }
          }
        ],
        "402": [
          {
            ingredients: [
              289,
              {
                id: 351,
                metadata: 0
              },
              264
            ],
            result: {
              count: 1,
              id: 402,
              metadata: 0
            }
          },
          {
            ingredients: [
              402,
              {
                id: 351,
                metadata: 0
              }
            ],
            result: {
              count: 1,
              id: 402,
              metadata: 0
            }
          }
        ],
        "404": [
          {
            inShape: [
              [
                null,
                75,
                null
              ],
              [
                75,
                406,
                75
              ],
              [
                1,
                1,
                1
              ]
            ],
            result: {
              count: 1,
              id: 404,
              metadata: 0
            }
          }
        ],
        "405": [
          {
            inShape: [
              [
                405,
                405
              ],
              [
                405,
                405
              ]
            ],
            result: {
              count: 1,
              id: 405,
              metadata: 0
            }
          }
        ],
        "407": [
          {
            inShape: [
              [
                46
              ],
              [
                328
              ]
            ],
            result: {
              count: 1,
              id: 407,
              metadata: 0
            }
          }
        ],
        "408": [
          {
            inShape: [
              [
                154
              ],
              [
                328
              ]
            ],
            result: {
              count: 1,
              id: 408,
              metadata: 0
            }
          }
        ],
        "413": [
          {
            inShape: [
              [
                null,
                412,
                null
              ],
              [
                391,
                393,
                39
              ],
              [
                null,
                281,
                null
              ]
            ],
            result: {
              count: 1,
              id: 413,
              metadata: 0
            }
          }
        ],
        "416": [
          {
            inShape: [
              [
                280,
                280,
                280
              ],
              [
                null,
                280,
                null
              ],
              [
                280,
                {
                  id: 44,
                  metadata: 0
                },
                280
              ]
            ],
            result: {
              count: 1,
              id: 416,
              metadata: 0
            }
          }
        ],
        "420": [
          {
            inShape: [
              [
                287,
                287,
                null
              ],
              [
                287,
                341,
                null
              ],
              [
                null,
                null,
                287
              ]
            ],
            result: {
              count: 2,
              id: 420,
              metadata: 0
            }
          }
        ],
        "425": [
          {
            inShape: [
              [
                35,
                35,
                35
              ],
              [
                35,
                35,
                35
              ],
              [
                null,
                280,
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            ingredients: [
              425,
              425
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                425,
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                null,
                null
              ],
              [
                null,
                425,
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                425
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                425,
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                425
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                425,
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                null,
                null
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                null,
                425,
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                425,
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                425,
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                425,
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                425,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                null,
                425
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                425,
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                425
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                425,
                null
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                425
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                425,
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                425,
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                425,
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                425
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                425,
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                null,
                null
              ],
              [
                null,
                425
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                null
              ],
              [
                425,
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                425,
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                null,
                425,
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                425,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                null,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                425,
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                425
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                425,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                425,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                },
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            ingredients: [
              106,
              {
                id: 351,
                metadata: 0
              },
              425
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            ingredients: [
              45,
              {
                id: 351,
                metadata: 0
              },
              425
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                {
                  id: 351,
                  metadata: 0
                },
                425,
                {
                  id: 351,
                  metadata: 0
                }
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                null,
                {
                  id: 351,
                  metadata: 0
                },
                null
              ],
              [
                {
                  id: 351,
                  metadata: 0
                },
                425,
                {
                  id: 351,
                  metadata: 0
                }
              ]
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            ingredients: [
              {
                id: 397,
                metadata: 4
              },
              {
                id: 351,
                metadata: 0
              },
              425
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            ingredients: [
              {
                id: 397,
                metadata: 1
              },
              {
                id: 351,
                metadata: 0
              },
              425
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            ingredients: [
              {
                id: 38,
                metadata: 8
              },
              {
                id: 351,
                metadata: 0
              },
              425
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          },
          {
            ingredients: [
              {
                id: 322,
                metadata: 0
              },
              {
                id: 351,
                metadata: 0
              },
              425
            ],
            result: {
              count: 1,
              id: 425,
              metadata: 0
            }
          }
        ],
        "426": [
          {
            inShape: [
              [
                20,
                20,
                20
              ],
              [
                20,
                381,
                20
              ],
              [
                20,
                370,
                20
              ]
            ],
            result: {
              count: 1,
              id: 426,
              metadata: 0
            }
          }
        ],
        "431": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ]
            ],
            result: {
              count: 3,
              id: 431,
              metadata: 0
            }
          }
        ],
        "439": [
          {
            inShape: [
              [
                null,
                348,
                null
              ],
              [
                348,
                262,
                348
              ],
              [
                null,
                348,
                null
              ]
            ],
            result: {
              count: 2,
              id: 439,
              metadata: 0
            }
          }
        ],
        "442": [
          {
            inShape: [
              [
                {
                  id: 5,
                  metadata: 5
                },
                265,
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                },
                {
                  id: 5,
                  metadata: 5
                }
              ],
              [
                null,
                {
                  id: 5,
                  metadata: 5
                },
                null
              ]
            ],
            result: {
              count: 1,
              id: 442,
              metadata: 0
            }
          },
          {
            ingredients: [
              442,
              442
            ],
            result: {
              count: 1,
              id: 442,
              metadata: 0
            }
          },
          {
            ingredients: [
              442,
              425
            ],
            result: {
              count: 1,
              id: 442,
              metadata: 0
            }
          },
          {
            inShape: [
              [
                35,
                {
                  id: 5,
                  metadata: 5
                },
                null
              ],
              [
                35,
                {
                  id: 5,
                  metadata: 5
                },
                265
              ],
              [
                35,
                {
                  id: 5,
                  metadata: 5
                },
                null
              ]
            ],
            result: {
              count: 1,
              id: 442,
              metadata: 0
            }
          }
        ],
        "443": [
          {
            ingredients: [
              443,
              443
            ],
            result: {
              count: 1,
              id: 443,
              metadata: 0
            }
          }
        ],
        "452": [
          {
            inShape: [
              [
                265
              ]
            ],
            result: {
              count: 9,
              id: 452,
              metadata: 0
            }
          }
        ]
      };
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/instruments.json
  var require_instruments = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/instruments.json"(exports, module) {
      module.exports = [
        {
          id: 0,
          name: "harp"
        },
        {
          id: 1,
          name: "doubleBass"
        },
        {
          id: 2,
          name: "snareDrum"
        },
        {
          id: 3,
          name: "sticks"
        },
        {
          id: 4,
          name: "bassDrum"
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/materials.json
  var require_materials = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/materials.json"(exports, module) {
      module.exports = {
        rock: {
          "257": 6,
          "270": 2,
          "274": 4,
          "278": 8,
          "285": 12
        },
        wood: {
          "258": 6,
          "271": 2,
          "275": 4,
          "279": 8,
          "286": 12
        },
        plant: {
          "258": 6,
          "267": 1.5,
          "268": 1.5,
          "271": 2,
          "272": 1.5,
          "275": 4,
          "276": 1.5,
          "279": 8,
          "283": 1.5,
          "286": 12
        },
        melon: {
          "267": 1.5,
          "268": 1.5,
          "272": 1.5,
          "276": 1.5,
          "283": 1.5
        },
        leaves: {
          "267": 1.5,
          "268": 1.5,
          "272": 1.5,
          "276": 1.5,
          "283": 1.5,
          "359": 6
        },
        dirt: {
          "256": 6,
          "269": 2,
          "273": 4,
          "277": 8,
          "284": 12
        },
        web: {
          "267": 15,
          "268": 15,
          "272": 15,
          "276": 15,
          "283": 15,
          "359": 15
        },
        wool: {
          "359": 4.8
        }
      };
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/entities.json
  var require_entities = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/entities.json"(exports, module) {
      module.exports = [
        {
          id: 1,
          internalId: 1,
          name: "item",
          displayName: "Dropped item",
          type: "mob",
          width: 0.25,
          height: 0.25,
          category: "Drops"
        },
        {
          id: 2,
          internalId: 2,
          name: "xp_orb",
          displayName: "Experience orb",
          type: "mob",
          width: 0.5,
          height: 0.5,
          category: "Drops"
        },
        {
          id: 3,
          internalId: 3,
          name: "area_effect_cloud",
          displayName: "Area effect cloud",
          type: "mob",
          width: null,
          height: 0.5,
          category: "Immobile"
        },
        {
          id: 4,
          internalId: 4,
          name: "elder_guardian",
          displayName: "Elder guardian",
          type: "mob",
          width: 1.9975,
          height: 1.9975,
          category: "Hostile mobs"
        },
        {
          id: 5,
          internalId: 5,
          name: "wither_skeleton",
          displayName: "Wither skeleton",
          type: "mob",
          width: 0.7,
          height: 2.4,
          category: "Hostile mobs"
        },
        {
          id: 6,
          internalId: 6,
          name: "stray",
          displayName: "Stray",
          type: "mob",
          width: 0.6,
          height: 1.99,
          category: "Hostile mobs"
        },
        {
          id: 7,
          internalId: 7,
          name: "egg",
          displayName: "Thrown egg",
          type: "mob",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 8,
          internalId: 8,
          name: "leash_knot",
          displayName: "Lead knot",
          type: "mob",
          width: 0.375,
          height: 0.25,
          category: "Immobile"
        },
        {
          id: 9,
          internalId: 9,
          name: "painting",
          displayName: "Painting",
          type: "mob",
          width: 0.5,
          height: 0.5,
          category: "Immobile"
        },
        {
          id: 10,
          internalId: 10,
          name: "arrow",
          displayName: "Shot arrow",
          type: "mob",
          width: 0.5,
          height: 0.5,
          category: "Projectiles"
        },
        {
          id: 11,
          internalId: 11,
          name: "snowball",
          displayName: "Thrown snowball",
          type: "mob",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 12,
          internalId: 12,
          name: "fireball",
          displayName: "Ghast fireball",
          type: "mob",
          width: 1,
          height: 1,
          category: "Projectiles"
        },
        {
          id: 13,
          internalId: 13,
          name: "small_fireball",
          displayName: "Blaze fireball",
          type: "mob",
          width: 0.3125,
          height: 0.3125,
          category: "Projectiles"
        },
        {
          id: 14,
          internalId: 14,
          name: "ender_pearl",
          displayName: "Thrown ender pearl",
          type: "mob",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 15,
          internalId: 15,
          name: "eye_of_ender_signal",
          displayName: "Thrown eye of ender",
          type: "mob",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 16,
          internalId: 16,
          name: "potion",
          displayName: "Thrown splash potion",
          type: "mob",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 17,
          internalId: 17,
          name: "xp_bottle",
          displayName: "Thrown bottle o' enchanting",
          type: "mob",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 18,
          internalId: 18,
          name: "item_frame",
          displayName: "Item frame",
          type: "mob",
          width: null,
          height: null,
          category: "Immobile"
        },
        {
          id: 19,
          internalId: 19,
          name: "wither_skull",
          displayName: "Wither skull",
          type: "mob",
          width: 0.3125,
          height: 0.3125,
          category: "Projectiles"
        },
        {
          id: 20,
          internalId: 20,
          name: "tnt",
          displayName: "Primed TNT",
          type: "mob",
          width: 0.98,
          height: 0.98,
          category: "Blocks"
        },
        {
          id: 21,
          internalId: 21,
          name: "falling_block",
          displayName: "Falling block",
          type: "mob",
          width: 0.98,
          height: 0.98,
          category: "Blocks"
        },
        {
          id: 22,
          internalId: 22,
          name: "fireworks_rocket",
          displayName: "Firework rocket",
          type: "mob",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 23,
          internalId: 23,
          name: "husk",
          displayName: "Husk",
          type: "mob",
          width: 0.6,
          height: 1.95,
          category: "Hostile mobs"
        },
        {
          id: 24,
          internalId: 24,
          name: "spectral_arrow",
          displayName: "Shot spectral arrow",
          type: "mob",
          width: 0.5,
          height: 0.5,
          category: "Projectiles"
        },
        {
          id: 25,
          internalId: 25,
          name: "shulker_bullet",
          displayName: "Shulker bullet",
          type: "mob",
          width: 0.3125,
          height: 0.3125,
          category: "Projectiles"
        },
        {
          id: 26,
          internalId: 26,
          name: "dragon_fireball",
          displayName: "Dragon fireball",
          type: "mob",
          width: 1,
          height: 1,
          category: "Projectiles"
        },
        {
          id: 27,
          internalId: 27,
          name: "zombie_villager",
          displayName: "Zombie Villager",
          type: "mob",
          width: 0.6,
          height: 1.95,
          category: "Hostile mobs"
        },
        {
          id: 28,
          internalId: 28,
          name: "skeleton_horse",
          displayName: "Skeleton horse",
          type: "mob",
          width: 1.396484,
          height: 1.6,
          category: "Passive mobs"
        },
        {
          id: 29,
          internalId: 29,
          name: "zombie_horse",
          displayName: "Zombie horse",
          type: "mob",
          width: 1.396484,
          height: 1.6,
          category: "Passive mobs"
        },
        {
          id: 30,
          internalId: 30,
          name: "armor_stand",
          displayName: "Armor stand",
          type: "mob",
          width: 0.5,
          height: 1.7,
          category: "Immobile"
        },
        {
          id: 31,
          internalId: 31,
          name: "donkey",
          displayName: "Donkey",
          type: "mob",
          width: 1.396484,
          height: 1.6,
          category: "Passive mobs"
        },
        {
          id: 32,
          internalId: 32,
          name: "mule",
          displayName: "Mule",
          type: "mob",
          width: 1.396484,
          height: 1.6,
          category: "Passive mobs"
        },
        {
          id: 33,
          internalId: 33,
          name: "evocation_fangs",
          displayName: "Evocation fangs",
          type: "mob",
          width: 0.5,
          height: 0.8,
          category: "Immobile"
        },
        {
          id: 34,
          internalId: 34,
          name: "evocation_illager",
          displayName: "Evoker",
          type: "mob",
          width: 0.6,
          height: 1.95,
          category: "Hostile mobs"
        },
        {
          id: 35,
          internalId: 35,
          name: "vex",
          displayName: "Vex",
          type: "mob",
          width: 0.4,
          height: 0.8,
          category: "Hostile mobs"
        },
        {
          id: 36,
          internalId: 36,
          name: "vindication_illager",
          displayName: "Vindicator",
          type: "mob",
          width: 0.6,
          height: 1.95,
          category: "Hostile mobs"
        },
        {
          id: 40,
          internalId: 40,
          name: "commandblock_minecart",
          displayName: "Minecart with command block",
          type: "mob",
          width: 0.98,
          height: 0.7,
          category: "Vehicles"
        },
        {
          id: 41,
          internalId: 41,
          name: "boat",
          displayName: "Boat",
          type: "mob",
          width: 1.375,
          height: 0.5625,
          category: "Vehicles"
        },
        {
          id: 42,
          internalId: 42,
          name: "minecart",
          displayName: "Minecart",
          type: "mob",
          width: 0.98,
          height: 0.7,
          category: "Vehicles"
        },
        {
          id: 43,
          internalId: 43,
          name: "chest_minecart",
          displayName: "Minecart with chest",
          type: "mob",
          width: 0.98,
          height: 0.7,
          category: "Vehicles"
        },
        {
          id: 44,
          internalId: 44,
          name: "furnace_minecart",
          displayName: "Minecart with furnace",
          type: "mob",
          width: 0.98,
          height: 0.7,
          category: "Vehicles"
        },
        {
          id: 45,
          internalId: 45,
          name: "tnt_minecart",
          displayName: "Minecart with TNT",
          type: "mob",
          width: 0.98,
          height: 0.7,
          category: "Vehicles"
        },
        {
          id: 46,
          internalId: 46,
          name: "hopper_minecart",
          displayName: "Minecart with hopper",
          type: "mob",
          width: 0.98,
          height: 0.7,
          category: "Vehicles"
        },
        {
          id: 47,
          internalId: 47,
          name: "spawner_minecart",
          displayName: "Minecart with spawner",
          type: "mob",
          width: 0.98,
          height: 0.7,
          category: "Vehicles"
        },
        {
          id: 50,
          internalId: 50,
          name: "creeper",
          displayName: "Creeper",
          type: "mob",
          width: 0.6,
          height: 1.7,
          category: "Hostile mobs"
        },
        {
          id: 51,
          internalId: 51,
          name: "skeleton",
          displayName: "Skeleton",
          type: "mob",
          width: 0.6,
          height: 1.99,
          category: "Hostile mobs"
        },
        {
          id: 52,
          internalId: 52,
          name: "spider",
          displayName: "Spider",
          type: "mob",
          width: 1.4,
          height: 0.9,
          category: "Hostile mobs"
        },
        {
          id: 53,
          internalId: 53,
          name: "giant",
          displayName: "Giant",
          type: "mob",
          width: 3.5999999999999996,
          height: 10.8,
          category: "Hostile mobs"
        },
        {
          id: 54,
          internalId: 54,
          name: "zombie",
          displayName: "Zombie",
          type: "mob",
          width: 0.6,
          height: 1.95,
          category: "Hostile mobs"
        },
        {
          id: 55,
          internalId: 55,
          name: "slime",
          displayName: "Slime",
          type: "mob",
          width: 0.51000005,
          height: 0.51000005,
          category: "Hostile mobs"
        },
        {
          id: 56,
          internalId: 56,
          name: "ghast",
          displayName: "Ghast",
          type: "mob",
          width: 4,
          height: 4,
          category: "Hostile mobs"
        },
        {
          id: 57,
          internalId: 57,
          name: "zombie_pigman",
          displayName: "Zombie pigman",
          type: "mob",
          width: 0.6,
          height: 1.95,
          category: "Hostile mobs"
        },
        {
          id: 58,
          internalId: 58,
          name: "enderman",
          displayName: "Enderman",
          type: "mob",
          width: 0.6,
          height: 2.9,
          category: "Hostile mobs"
        },
        {
          id: 59,
          internalId: 59,
          name: "cave_spider",
          displayName: "Cave spider",
          type: "mob",
          width: 0.7,
          height: 0.5,
          category: "Hostile mobs"
        },
        {
          id: 60,
          internalId: 60,
          name: "silverfish",
          displayName: "Silverfish",
          type: "mob",
          width: 0.4,
          height: 0.3,
          category: "Hostile mobs"
        },
        {
          id: 61,
          internalId: 61,
          name: "blaze",
          displayName: "Blaze",
          type: "mob",
          width: 0.6,
          height: 1.8,
          category: "Hostile mobs"
        },
        {
          id: 62,
          internalId: 62,
          name: "magma_cube",
          displayName: "Magma cube",
          type: "mob",
          width: 0.51000005,
          height: 0.51000005,
          category: "Hostile mobs"
        },
        {
          id: 63,
          internalId: 63,
          name: "ender_dragon",
          displayName: "Ender dragon",
          type: "mob",
          width: 16,
          height: 8,
          category: "Hostile mobs"
        },
        {
          id: 64,
          internalId: 64,
          name: "wither",
          displayName: "Wither",
          type: "mob",
          width: 0.9,
          height: 3.5,
          category: "Hostile mobs"
        },
        {
          id: 65,
          internalId: 65,
          name: "bat",
          displayName: "Bat",
          type: "mob",
          width: 0.5,
          height: 0.9,
          category: "Passive mobs"
        },
        {
          id: 66,
          internalId: 66,
          name: "witch",
          displayName: "Witch",
          type: "mob",
          width: 0.6,
          height: 1.95,
          category: "Hostile mobs"
        },
        {
          id: 67,
          internalId: 67,
          name: "endermite",
          displayName: "Endermite",
          type: "mob",
          width: 0.4,
          height: 0.3,
          category: "Hostile mobs"
        },
        {
          id: 68,
          internalId: 68,
          name: "guardian",
          displayName: "Guardian",
          type: "mob",
          width: 0.85,
          height: 0.85,
          category: "Hostile mobs"
        },
        {
          id: 69,
          internalId: 69,
          name: "shulker",
          displayName: "Shulker",
          type: "mob",
          width: 1,
          height: 1,
          category: "Hostile mobs"
        },
        {
          id: 90,
          internalId: 90,
          name: "pig",
          displayName: "Pig",
          type: "mob",
          width: 0.9,
          height: 0.9,
          category: "Passive mobs"
        },
        {
          id: 91,
          internalId: 91,
          name: "sheep",
          displayName: "Sheep",
          type: "mob",
          width: 0.9,
          height: 1.3,
          category: "Passive mobs"
        },
        {
          id: 92,
          internalId: 92,
          name: "cow",
          displayName: "Cow",
          type: "mob",
          width: 0.9,
          height: 1.4,
          category: "Passive mobs"
        },
        {
          id: 93,
          internalId: 93,
          name: "chicken",
          displayName: "Chicken",
          type: "mob",
          width: 0.4,
          height: 0.7,
          category: "Passive mobs"
        },
        {
          id: 94,
          internalId: 94,
          name: "squid",
          displayName: "Squid",
          type: "mob",
          width: 0.8,
          height: 0.8,
          category: "Passive mobs"
        },
        {
          id: 95,
          internalId: 95,
          name: "wolf",
          displayName: "Wolf",
          type: "mob",
          width: 0.6,
          height: 0.85,
          category: "Passive mobs"
        },
        {
          id: 96,
          internalId: 96,
          name: "mooshroom",
          displayName: "Mooshroom",
          type: "mob",
          width: 0.9,
          height: 1.4,
          category: "Passive mobs"
        },
        {
          id: 97,
          internalId: 97,
          name: "snowman",
          displayName: "Snow golem",
          type: "mob",
          width: 0.7,
          height: 1.9,
          category: "Passive mobs"
        },
        {
          id: 98,
          internalId: 98,
          name: "ocelot",
          displayName: "Ocelot",
          type: "mob",
          width: 0.6,
          height: 0.7,
          category: "Passive mobs"
        },
        {
          id: 99,
          internalId: 99,
          name: "villager_golem",
          displayName: "Iron golem",
          type: "mob",
          width: 1.4,
          height: 2.7,
          category: "Passive mobs"
        },
        {
          id: 100,
          internalId: 100,
          name: "horse",
          displayName: "Horse",
          type: "mob",
          width: 1.396484,
          height: 1.6,
          category: "Passive mobs"
        },
        {
          id: 101,
          internalId: 101,
          name: "rabbit",
          displayName: "Rabbit",
          type: "mob",
          width: 0.4,
          height: 0.5,
          category: "Passive mobs"
        },
        {
          id: 102,
          internalId: 102,
          name: "polar_bear",
          displayName: "Polar bear",
          type: "mob",
          width: 1.3,
          height: 1.4,
          category: "Passive mobs"
        },
        {
          id: 103,
          internalId: 103,
          name: "llama",
          displayName: "Llama",
          type: "mob",
          width: 0.9,
          height: 1.87,
          category: "Passive mobs"
        },
        {
          id: 104,
          internalId: 104,
          name: "llama_spit",
          displayName: "Llama spit",
          type: "mob",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 120,
          internalId: 120,
          name: "villager",
          displayName: "Villager",
          type: "mob",
          width: 0.6,
          height: 1.95,
          category: "Passive mobs"
        },
        {
          id: 200,
          internalId: 200,
          name: "ender_crystal",
          displayName: "Ender crystal",
          type: "mob",
          width: 2,
          height: 2,
          category: "Immobile"
        },
        {
          id: 1,
          internalId: 41,
          name: "boat",
          displayName: "Boat",
          type: "object",
          width: 1.5,
          height: 0.6,
          category: "Vehicles"
        },
        {
          id: 2,
          internalId: 1,
          name: "item",
          displayName: "Dropped item",
          type: "object",
          width: 0.25,
          height: 0.25,
          category: "Drops"
        },
        {
          id: 3,
          internalId: 3,
          name: "area_effect_cloud",
          displayName: "Area effect cloud",
          type: "object",
          width: null,
          height: 0.5,
          category: "Immobile"
        },
        {
          id: 10,
          internalId: 42,
          name: "minecart",
          displayName: "Minecart",
          type: "object",
          width: 0.98,
          height: 0.7,
          category: "Vehicles"
        },
        {
          id: 50,
          internalId: 20,
          name: "tnt",
          displayName: "Primed TNT",
          type: "object",
          width: 0.98,
          height: 0.98,
          category: "Blocks"
        },
        {
          id: 51,
          internalId: 200,
          name: "ender_crystal",
          displayName: "Ender crystal",
          type: "object",
          width: 2,
          height: 2,
          category: "Immobile"
        },
        {
          id: 60,
          internalId: 10,
          name: "arrow",
          displayName: "Shot arrow",
          type: "object",
          width: 0.5,
          height: 0.5,
          category: "Projectiles"
        },
        {
          id: 61,
          internalId: 11,
          name: "snowball",
          displayName: "Thrown snowball",
          type: "object",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 62,
          internalId: 7,
          name: "egg",
          displayName: "Thrown egg",
          type: "object",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 63,
          internalId: 12,
          name: "fireball",
          displayName: "Ghast fireball",
          type: "object",
          width: 1,
          height: 1,
          category: "Projectiles"
        },
        {
          id: 64,
          internalId: 13,
          name: "small_fireball",
          displayName: "Blaze fireball",
          type: "object",
          width: 0.3125,
          height: 0.3125,
          category: "Projectiles"
        },
        {
          id: 65,
          internalId: 14,
          name: "ender_pearl",
          displayName: "Thrown ender pearl",
          type: "object",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 66,
          internalId: 19,
          name: "wither_skull",
          displayName: "Wither skull",
          type: "object",
          width: 0.3125,
          height: 0.3125,
          category: "Projectiles"
        },
        {
          id: 67,
          internalId: 25,
          name: "shulker_bullet",
          displayName: "Shulker bullet",
          type: "object",
          width: 0.3125,
          height: 0.3125,
          category: "Projectiles"
        },
        {
          id: 68,
          internalId: 104,
          name: "llama_spit",
          displayName: "Llama spit",
          type: "object",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 70,
          internalId: 21,
          name: "falling_block",
          displayName: "Falling block",
          type: "object",
          width: 0.98,
          height: 0.98,
          category: "Blocks"
        },
        {
          id: 71,
          internalId: 18,
          name: "item_frame",
          displayName: "Item frame",
          type: "object",
          width: null,
          height: null,
          category: "Immobile"
        },
        {
          id: 72,
          internalId: 15,
          name: "eye_of_ender_signal",
          displayName: "Thrown eye of ender",
          type: "object",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 73,
          internalId: 7,
          name: "egg",
          displayName: "Thrown egg",
          type: "object",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 75,
          internalId: 11,
          name: "snowball",
          displayName: "Thrown snowball",
          type: "object",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 76,
          internalId: 22,
          name: "fireworks_rocket",
          displayName: "Firework rocket",
          type: "object",
          width: 0.25,
          height: 0.25,
          category: "Projectiles"
        },
        {
          id: 77,
          internalId: 8,
          name: "leash_knot",
          displayName: "Lead knot",
          type: "object",
          width: 0.375,
          height: 0.25,
          category: "Immobile"
        },
        {
          id: 78,
          internalId: 30,
          name: "armor_stand",
          displayName: "Armor stand",
          type: "object",
          width: 0.5,
          height: 1.975,
          category: "Immobile"
        },
        {
          id: 79,
          internalId: 33,
          name: "evocation_fangs",
          displayName: "Evocation fangs",
          type: "object",
          width: 0.5,
          height: 0.8,
          category: "Immobile"
        },
        {
          id: 90,
          name: "Fishing Hook",
          displayName: "Fishing Hook",
          type: "object",
          width: 0.25,
          height: 0.25
        },
        {
          id: 91,
          internalId: 24,
          name: "spectral_arrow",
          displayName: "Shot spectral arrow",
          type: "object",
          width: 0.5,
          height: 0.5,
          category: "Projectiles"
        },
        {
          id: 93,
          internalId: 26,
          name: "dragon_fireball",
          displayName: "Dragon fireball",
          type: "object",
          width: 1,
          height: 1,
          category: "Projectiles"
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/protocol.json
  var require_protocol = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/protocol.json"(exports, module) {
      module.exports = {
        types: {
          varint: "native",
          varlong: "native",
          pstring: "native",
          u16: "native",
          u8: "native",
          i64: "native",
          buffer: "native",
          i32: "native",
          i8: "native",
          bool: "native",
          i16: "native",
          f32: "native",
          f64: "native",
          UUID: "native",
          option: "native",
          entityMetadataLoop: "native",
          bitfield: "native",
          container: "native",
          switch: "native",
          void: "native",
          array: "native",
          restBuffer: "native",
          nbt: "native",
          optionalNbt: "native",
          string: [
            "pstring",
            {
              countType: "varint"
            }
          ],
          slot: [
            "container",
            [
              {
                name: "blockId",
                type: "i16"
              },
              {
                anon: true,
                type: [
                  "switch",
                  {
                    compareTo: "blockId",
                    fields: {
                      "-1": "void"
                    },
                    default: [
                      "container",
                      [
                        {
                          name: "itemCount",
                          type: "i8"
                        },
                        {
                          name: "itemDamage",
                          type: "i16"
                        },
                        {
                          name: "nbtData",
                          type: "optionalNbt"
                        }
                      ]
                    ]
                  }
                ]
              }
            ]
          ],
          position: [
            "bitfield",
            [
              {
                name: "x",
                size: 26,
                signed: true
              },
              {
                name: "y",
                size: 12,
                signed: true
              },
              {
                name: "z",
                size: 26,
                signed: true
              }
            ]
          ],
          entityMetadataItem: [
            "switch",
            {
              compareTo: "$compareTo",
              fields: {
                "0": "i8",
                "1": "varint",
                "2": "f32",
                "3": "string",
                "4": "string",
                "5": "slot",
                "6": "bool",
                "7": [
                  "container",
                  [
                    {
                      name: "pitch",
                      type: "f32"
                    },
                    {
                      name: "yaw",
                      type: "f32"
                    },
                    {
                      name: "roll",
                      type: "f32"
                    }
                  ]
                ],
                "8": "position",
                "9": [
                  "option",
                  "position"
                ],
                "10": "varint",
                "11": [
                  "option",
                  "UUID"
                ],
                "12": "varint"
              }
            }
          ],
          entityMetadata: [
            "entityMetadataLoop",
            {
              endVal: 255,
              type: [
                "container",
                [
                  {
                    anon: true,
                    type: [
                      "container",
                      [
                        {
                          name: "key",
                          type: "u8"
                        },
                        {
                          name: "type",
                          type: "i8"
                        }
                      ]
                    ]
                  },
                  {
                    name: "value",
                    type: [
                      "entityMetadataItem",
                      {
                        compareTo: "type"
                      }
                    ]
                  }
                ]
              ]
            }
          ]
        },
        handshaking: {
          toClient: {
            types: {
              packet: [
                "container",
                [
                  {
                    name: "name",
                    type: [
                      "mapper",
                      {
                        type: "varint",
                        mappings: {}
                      }
                    ]
                  },
                  {
                    name: "params",
                    type: [
                      "switch",
                      {
                        compareTo: "name",
                        fields: {}
                      }
                    ]
                  }
                ]
              ]
            }
          },
          toServer: {
            types: {
              packet_set_protocol: [
                "container",
                [
                  {
                    name: "protocolVersion",
                    type: "varint"
                  },
                  {
                    name: "serverHost",
                    type: "string"
                  },
                  {
                    name: "serverPort",
                    type: "u16"
                  },
                  {
                    name: "nextState",
                    type: "varint"
                  }
                ]
              ],
              packet_legacy_server_list_ping: [
                "container",
                [
                  {
                    name: "payload",
                    type: "u8"
                  }
                ]
              ],
              packet: [
                "container",
                [
                  {
                    name: "name",
                    type: [
                      "mapper",
                      {
                        type: "varint",
                        mappings: {
                          "0x00": "set_protocol",
                          "0xfe": "legacy_server_list_ping"
                        }
                      }
                    ]
                  },
                  {
                    name: "params",
                    type: [
                      "switch",
                      {
                        compareTo: "name",
                        fields: {
                          set_protocol: "packet_set_protocol",
                          legacy_server_list_ping: "packet_legacy_server_list_ping"
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          }
        },
        status: {
          toClient: {
            types: {
              packet_server_info: [
                "container",
                [
                  {
                    name: "response",
                    type: "string"
                  }
                ]
              ],
              packet_ping: [
                "container",
                [
                  {
                    name: "time",
                    type: "i64"
                  }
                ]
              ],
              packet: [
                "container",
                [
                  {
                    name: "name",
                    type: [
                      "mapper",
                      {
                        type: "varint",
                        mappings: {
                          "0x00": "server_info",
                          "0x01": "ping"
                        }
                      }
                    ]
                  },
                  {
                    name: "params",
                    type: [
                      "switch",
                      {
                        compareTo: "name",
                        fields: {
                          server_info: "packet_server_info",
                          ping: "packet_ping"
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          },
          toServer: {
            types: {
              packet_ping_start: [
                "container",
                []
              ],
              packet_ping: [
                "container",
                [
                  {
                    name: "time",
                    type: "i64"
                  }
                ]
              ],
              packet: [
                "container",
                [
                  {
                    name: "name",
                    type: [
                      "mapper",
                      {
                        type: "varint",
                        mappings: {
                          "0x00": "ping_start",
                          "0x01": "ping"
                        }
                      }
                    ]
                  },
                  {
                    name: "params",
                    type: [
                      "switch",
                      {
                        compareTo: "name",
                        fields: {
                          ping_start: "packet_ping_start",
                          ping: "packet_ping"
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          }
        },
        login: {
          toClient: {
            types: {
              packet_disconnect: [
                "container",
                [
                  {
                    name: "reason",
                    type: "string"
                  }
                ]
              ],
              packet_encryption_begin: [
                "container",
                [
                  {
                    name: "serverId",
                    type: "string"
                  },
                  {
                    name: "publicKey",
                    type: [
                      "buffer",
                      {
                        countType: "varint"
                      }
                    ]
                  },
                  {
                    name: "verifyToken",
                    type: [
                      "buffer",
                      {
                        countType: "varint"
                      }
                    ]
                  }
                ]
              ],
              packet_success: [
                "container",
                [
                  {
                    name: "uuid",
                    type: "string"
                  },
                  {
                    name: "username",
                    type: "string"
                  }
                ]
              ],
              packet_compress: [
                "container",
                [
                  {
                    name: "threshold",
                    type: "varint"
                  }
                ]
              ],
              packet: [
                "container",
                [
                  {
                    name: "name",
                    type: [
                      "mapper",
                      {
                        type: "varint",
                        mappings: {
                          "0x00": "disconnect",
                          "0x01": "encryption_begin",
                          "0x02": "success",
                          "0x03": "compress"
                        }
                      }
                    ]
                  },
                  {
                    name: "params",
                    type: [
                      "switch",
                      {
                        compareTo: "name",
                        fields: {
                          disconnect: "packet_disconnect",
                          encryption_begin: "packet_encryption_begin",
                          success: "packet_success",
                          compress: "packet_compress"
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          },
          toServer: {
            types: {
              packet_login_start: [
                "container",
                [
                  {
                    name: "username",
                    type: "string"
                  }
                ]
              ],
              packet_encryption_begin: [
                "container",
                [
                  {
                    name: "sharedSecret",
                    type: [
                      "buffer",
                      {
                        countType: "varint"
                      }
                    ]
                  },
                  {
                    name: "verifyToken",
                    type: [
                      "buffer",
                      {
                        countType: "varint"
                      }
                    ]
                  }
                ]
              ],
              packet: [
                "container",
                [
                  {
                    name: "name",
                    type: [
                      "mapper",
                      {
                        type: "varint",
                        mappings: {
                          "0x00": "login_start",
                          "0x01": "encryption_begin"
                        }
                      }
                    ]
                  },
                  {
                    name: "params",
                    type: [
                      "switch",
                      {
                        compareTo: "name",
                        fields: {
                          login_start: "packet_login_start",
                          encryption_begin: "packet_encryption_begin"
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          }
        },
        play: {
          toClient: {
            types: {
              packet_spawn_entity: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "objectUUID",
                    type: "UUID"
                  },
                  {
                    name: "type",
                    type: "i8"
                  },
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  },
                  {
                    name: "pitch",
                    type: "i8"
                  },
                  {
                    name: "yaw",
                    type: "i8"
                  },
                  {
                    name: "objectData",
                    type: "i32"
                  },
                  {
                    name: "velocityX",
                    type: "i16"
                  },
                  {
                    name: "velocityY",
                    type: "i16"
                  },
                  {
                    name: "velocityZ",
                    type: "i16"
                  }
                ]
              ],
              packet_spawn_entity_experience_orb: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  },
                  {
                    name: "count",
                    type: "i16"
                  }
                ]
              ],
              packet_spawn_entity_weather: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "type",
                    type: "i8"
                  },
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  }
                ]
              ],
              packet_spawn_entity_living: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "entityUUID",
                    type: "UUID"
                  },
                  {
                    name: "type",
                    type: "varint"
                  },
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  },
                  {
                    name: "yaw",
                    type: "i8"
                  },
                  {
                    name: "pitch",
                    type: "i8"
                  },
                  {
                    name: "headPitch",
                    type: "i8"
                  },
                  {
                    name: "velocityX",
                    type: "i16"
                  },
                  {
                    name: "velocityY",
                    type: "i16"
                  },
                  {
                    name: "velocityZ",
                    type: "i16"
                  },
                  {
                    name: "metadata",
                    type: "entityMetadata"
                  }
                ]
              ],
              packet_spawn_entity_painting: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "entityUUID",
                    type: "UUID"
                  },
                  {
                    name: "title",
                    type: "string"
                  },
                  {
                    name: "location",
                    type: "position"
                  },
                  {
                    name: "direction",
                    type: "u8"
                  }
                ]
              ],
              packet_named_entity_spawn: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "playerUUID",
                    type: "UUID"
                  },
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  },
                  {
                    name: "yaw",
                    type: "i8"
                  },
                  {
                    name: "pitch",
                    type: "i8"
                  },
                  {
                    name: "metadata",
                    type: "entityMetadata"
                  }
                ]
              ],
              packet_animation: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "animation",
                    type: "u8"
                  }
                ]
              ],
              packet_statistics: [
                "container",
                [
                  {
                    name: "entries",
                    type: [
                      "array",
                      {
                        countType: "varint",
                        type: [
                          "container",
                          [
                            {
                              name: "name",
                              type: "string"
                            },
                            {
                              name: "value",
                              type: "varint"
                            }
                          ]
                        ]
                      }
                    ]
                  }
                ]
              ],
              packet_block_break_animation: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "location",
                    type: "position"
                  },
                  {
                    name: "destroyStage",
                    type: "i8"
                  }
                ]
              ],
              packet_tile_entity_data: [
                "container",
                [
                  {
                    name: "location",
                    type: "position"
                  },
                  {
                    name: "action",
                    type: "u8"
                  },
                  {
                    name: "nbtData",
                    type: "optionalNbt"
                  }
                ]
              ],
              packet_block_action: [
                "container",
                [
                  {
                    name: "location",
                    type: "position"
                  },
                  {
                    name: "byte1",
                    type: "u8"
                  },
                  {
                    name: "byte2",
                    type: "u8"
                  },
                  {
                    name: "blockId",
                    type: "varint"
                  }
                ]
              ],
              packet_block_change: [
                "container",
                [
                  {
                    name: "location",
                    type: "position"
                  },
                  {
                    name: "type",
                    type: "varint"
                  }
                ]
              ],
              packet_boss_bar: [
                "container",
                [
                  {
                    name: "entityUUID",
                    type: "UUID"
                  },
                  {
                    name: "action",
                    type: "varint"
                  },
                  {
                    name: "title",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "0": "string",
                          "3": "string"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "health",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "0": "f32",
                          "2": "f32"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "color",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "0": "varint",
                          "4": "varint"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "dividers",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "0": "varint",
                          "4": "varint"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "flags",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "0": "u8",
                          "5": "u8"
                        },
                        default: "void"
                      }
                    ]
                  }
                ]
              ],
              packet_difficulty: [
                "container",
                [
                  {
                    name: "difficulty",
                    type: "u8"
                  }
                ]
              ],
              packet_tab_complete: [
                "container",
                [
                  {
                    name: "matches",
                    type: [
                      "array",
                      {
                        countType: "varint",
                        type: "string"
                      }
                    ]
                  }
                ]
              ],
              packet_chat: [
                "container",
                [
                  {
                    name: "message",
                    type: "string"
                  },
                  {
                    name: "position",
                    type: "i8"
                  }
                ]
              ],
              packet_multi_block_change: [
                "container",
                [
                  {
                    name: "chunkX",
                    type: "i32"
                  },
                  {
                    name: "chunkZ",
                    type: "i32"
                  },
                  {
                    name: "records",
                    type: [
                      "array",
                      {
                        countType: "varint",
                        type: [
                          "container",
                          [
                            {
                              name: "horizontalPos",
                              type: "u8"
                            },
                            {
                              name: "y",
                              type: "u8"
                            },
                            {
                              name: "blockId",
                              type: "varint"
                            }
                          ]
                        ]
                      }
                    ]
                  }
                ]
              ],
              packet_transaction: [
                "container",
                [
                  {
                    name: "windowId",
                    type: "i8"
                  },
                  {
                    name: "action",
                    type: "i16"
                  },
                  {
                    name: "accepted",
                    type: "bool"
                  }
                ]
              ],
              packet_close_window: [
                "container",
                [
                  {
                    name: "windowId",
                    type: "u8"
                  }
                ]
              ],
              packet_open_window: [
                "container",
                [
                  {
                    name: "windowId",
                    type: "u8"
                  },
                  {
                    name: "inventoryType",
                    type: "string"
                  },
                  {
                    name: "windowTitle",
                    type: "string"
                  },
                  {
                    name: "slotCount",
                    type: "u8"
                  },
                  {
                    name: "entityId",
                    type: [
                      "switch",
                      {
                        compareTo: "inventoryType",
                        fields: {
                          EntityHorse: "i32"
                        },
                        default: "void"
                      }
                    ]
                  }
                ]
              ],
              packet_window_items: [
                "container",
                [
                  {
                    name: "windowId",
                    type: "u8"
                  },
                  {
                    name: "items",
                    type: [
                      "array",
                      {
                        countType: "i16",
                        type: "slot"
                      }
                    ]
                  }
                ]
              ],
              packet_craft_progress_bar: [
                "container",
                [
                  {
                    name: "windowId",
                    type: "u8"
                  },
                  {
                    name: "property",
                    type: "i16"
                  },
                  {
                    name: "value",
                    type: "i16"
                  }
                ]
              ],
              packet_set_slot: [
                "container",
                [
                  {
                    name: "windowId",
                    type: "i8"
                  },
                  {
                    name: "slot",
                    type: "i16"
                  },
                  {
                    name: "item",
                    type: "slot"
                  }
                ]
              ],
              packet_set_cooldown: [
                "container",
                [
                  {
                    name: "itemID",
                    type: "varint"
                  },
                  {
                    name: "cooldownTicks",
                    type: "varint"
                  }
                ]
              ],
              packet_custom_payload: [
                "container",
                [
                  {
                    name: "channel",
                    type: "string"
                  },
                  {
                    name: "data",
                    type: "restBuffer"
                  }
                ]
              ],
              packet_named_sound_effect: [
                "container",
                [
                  {
                    name: "soundName",
                    type: "string"
                  },
                  {
                    name: "soundCategory",
                    type: "varint"
                  },
                  {
                    name: "x",
                    type: "i32"
                  },
                  {
                    name: "y",
                    type: "i32"
                  },
                  {
                    name: "z",
                    type: "i32"
                  },
                  {
                    name: "volume",
                    type: "f32"
                  },
                  {
                    name: "pitch",
                    type: "f32"
                  }
                ]
              ],
              packet_kick_disconnect: [
                "container",
                [
                  {
                    name: "reason",
                    type: "string"
                  }
                ]
              ],
              packet_entity_status: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "i32"
                  },
                  {
                    name: "entityStatus",
                    type: "i8"
                  }
                ]
              ],
              packet_explosion: [
                "container",
                [
                  {
                    name: "x",
                    type: "f32"
                  },
                  {
                    name: "y",
                    type: "f32"
                  },
                  {
                    name: "z",
                    type: "f32"
                  },
                  {
                    name: "radius",
                    type: "f32"
                  },
                  {
                    name: "affectedBlockOffsets",
                    type: [
                      "array",
                      {
                        countType: "i32",
                        type: [
                          "container",
                          [
                            {
                              name: "x",
                              type: "i8"
                            },
                            {
                              name: "y",
                              type: "i8"
                            },
                            {
                              name: "z",
                              type: "i8"
                            }
                          ]
                        ]
                      }
                    ]
                  },
                  {
                    name: "playerMotionX",
                    type: "f32"
                  },
                  {
                    name: "playerMotionY",
                    type: "f32"
                  },
                  {
                    name: "playerMotionZ",
                    type: "f32"
                  }
                ]
              ],
              packet_unload_chunk: [
                "container",
                [
                  {
                    name: "chunkX",
                    type: "i32"
                  },
                  {
                    name: "chunkZ",
                    type: "i32"
                  }
                ]
              ],
              packet_game_state_change: [
                "container",
                [
                  {
                    name: "reason",
                    type: "u8"
                  },
                  {
                    name: "gameMode",
                    type: "f32"
                  }
                ]
              ],
              packet_keep_alive: [
                "container",
                [
                  {
                    name: "keepAliveId",
                    type: "varint"
                  }
                ]
              ],
              packet_map_chunk: [
                "container",
                [
                  {
                    name: "x",
                    type: "i32"
                  },
                  {
                    name: "z",
                    type: "i32"
                  },
                  {
                    name: "groundUp",
                    type: "bool"
                  },
                  {
                    name: "bitMap",
                    type: "varint"
                  },
                  {
                    name: "chunkData",
                    type: [
                      "buffer",
                      {
                        countType: "varint"
                      }
                    ]
                  },
                  {
                    name: "blockEntities",
                    type: [
                      "array",
                      {
                        countType: "varint",
                        type: "nbt"
                      }
                    ]
                  }
                ]
              ],
              packet_world_event: [
                "container",
                [
                  {
                    name: "effectId",
                    type: "i32"
                  },
                  {
                    name: "location",
                    type: "position"
                  },
                  {
                    name: "data",
                    type: "i32"
                  },
                  {
                    name: "global",
                    type: "bool"
                  }
                ]
              ],
              packet_world_particles: [
                "container",
                [
                  {
                    name: "particleId",
                    type: "i32"
                  },
                  {
                    name: "longDistance",
                    type: "bool"
                  },
                  {
                    name: "x",
                    type: "f32"
                  },
                  {
                    name: "y",
                    type: "f32"
                  },
                  {
                    name: "z",
                    type: "f32"
                  },
                  {
                    name: "offsetX",
                    type: "f32"
                  },
                  {
                    name: "offsetY",
                    type: "f32"
                  },
                  {
                    name: "offsetZ",
                    type: "f32"
                  },
                  {
                    name: "particleData",
                    type: "f32"
                  },
                  {
                    name: "particles",
                    type: "i32"
                  },
                  {
                    name: "data",
                    type: [
                      "switch",
                      {
                        compareTo: "particleId",
                        fields: {
                          "36": ["array", { count: 2, type: "varint" }],
                          "37": ["array", { count: 1, type: "varint" }],
                          "38": ["array", { count: 1, type: "varint" }]
                        },
                        default: "void"
                      }
                    ]
                  }
                ]
              ],
              packet_login: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "i32"
                  },
                  {
                    name: "gameMode",
                    type: "u8"
                  },
                  {
                    name: "dimension",
                    type: "i32"
                  },
                  {
                    name: "difficulty",
                    type: "u8"
                  },
                  {
                    name: "maxPlayers",
                    type: "u8"
                  },
                  {
                    name: "levelType",
                    type: "string"
                  },
                  {
                    name: "reducedDebugInfo",
                    type: "bool"
                  }
                ]
              ],
              packet_map: [
                "container",
                [
                  {
                    name: "itemDamage",
                    type: "varint"
                  },
                  {
                    name: "scale",
                    type: "i8"
                  },
                  {
                    name: "trackingPosition",
                    type: "bool"
                  },
                  {
                    name: "icons",
                    type: [
                      "array",
                      {
                        countType: "varint",
                        type: [
                          "container",
                          [
                            {
                              name: "directionAndType",
                              type: "i8"
                            },
                            {
                              name: "x",
                              type: "i8"
                            },
                            {
                              name: "z",
                              type: "i8"
                            }
                          ]
                        ]
                      }
                    ]
                  },
                  {
                    name: "columns",
                    type: "i8"
                  },
                  {
                    name: "rows",
                    type: [
                      "switch",
                      {
                        compareTo: "columns",
                        fields: {
                          "0": "void"
                        },
                        default: "i8"
                      }
                    ]
                  },
                  {
                    name: "x",
                    type: [
                      "switch",
                      {
                        compareTo: "columns",
                        fields: {
                          "0": "void"
                        },
                        default: "i8"
                      }
                    ]
                  },
                  {
                    name: "y",
                    type: [
                      "switch",
                      {
                        compareTo: "columns",
                        fields: {
                          "0": "void"
                        },
                        default: "i8"
                      }
                    ]
                  },
                  {
                    name: "data",
                    type: [
                      "switch",
                      {
                        compareTo: "columns",
                        fields: {
                          "0": "void"
                        },
                        default: [
                          "buffer",
                          {
                            countType: "varint"
                          }
                        ]
                      }
                    ]
                  }
                ]
              ],
              packet_rel_entity_move: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "dX",
                    type: "i16"
                  },
                  {
                    name: "dY",
                    type: "i16"
                  },
                  {
                    name: "dZ",
                    type: "i16"
                  },
                  {
                    name: "onGround",
                    type: "bool"
                  }
                ]
              ],
              packet_entity_move_look: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "dX",
                    type: "i16"
                  },
                  {
                    name: "dY",
                    type: "i16"
                  },
                  {
                    name: "dZ",
                    type: "i16"
                  },
                  {
                    name: "yaw",
                    type: "i8"
                  },
                  {
                    name: "pitch",
                    type: "i8"
                  },
                  {
                    name: "onGround",
                    type: "bool"
                  }
                ]
              ],
              packet_entity_look: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "yaw",
                    type: "i8"
                  },
                  {
                    name: "pitch",
                    type: "i8"
                  },
                  {
                    name: "onGround",
                    type: "bool"
                  }
                ]
              ],
              packet_entity: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  }
                ]
              ],
              packet_vehicle_move: [
                "container",
                [
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  },
                  {
                    name: "yaw",
                    type: "f32"
                  },
                  {
                    name: "pitch",
                    type: "f32"
                  }
                ]
              ],
              packet_open_sign_entity: [
                "container",
                [
                  {
                    name: "location",
                    type: "position"
                  }
                ]
              ],
              packet_abilities: [
                "container",
                [
                  {
                    name: "flags",
                    type: "i8"
                  },
                  {
                    name: "flyingSpeed",
                    type: "f32"
                  },
                  {
                    name: "walkingSpeed",
                    type: "f32"
                  }
                ]
              ],
              packet_combat_event: [
                "container",
                [
                  {
                    name: "event",
                    type: "varint"
                  },
                  {
                    name: "duration",
                    type: [
                      "switch",
                      {
                        compareTo: "event",
                        fields: {
                          "1": "varint"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "playerId",
                    type: [
                      "switch",
                      {
                        compareTo: "event",
                        fields: {
                          "2": "varint"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "entityId",
                    type: [
                      "switch",
                      {
                        compareTo: "event",
                        fields: {
                          "1": "i32",
                          "2": "i32"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "message",
                    type: [
                      "switch",
                      {
                        compareTo: "event",
                        fields: {
                          "2": "string"
                        },
                        default: "void"
                      }
                    ]
                  }
                ]
              ],
              packet_player_info: [
                "container",
                [
                  {
                    name: "action",
                    type: "varint"
                  },
                  {
                    name: "data",
                    type: [
                      "array",
                      {
                        countType: "varint",
                        type: [
                          "container",
                          [
                            {
                              name: "UUID",
                              type: "UUID"
                            },
                            {
                              name: "name",
                              type: [
                                "switch",
                                {
                                  compareTo: "../action",
                                  fields: {
                                    "0": "string"
                                  },
                                  default: "void"
                                }
                              ]
                            },
                            {
                              name: "properties",
                              type: [
                                "switch",
                                {
                                  compareTo: "../action",
                                  fields: {
                                    "0": [
                                      "array",
                                      {
                                        countType: "varint",
                                        type: [
                                          "container",
                                          [
                                            {
                                              name: "name",
                                              type: "string"
                                            },
                                            {
                                              name: "value",
                                              type: "string"
                                            },
                                            {
                                              name: "signature",
                                              type: [
                                                "option",
                                                "string"
                                              ]
                                            }
                                          ]
                                        ]
                                      }
                                    ]
                                  },
                                  default: "void"
                                }
                              ]
                            },
                            {
                              name: "gamemode",
                              type: [
                                "switch",
                                {
                                  compareTo: "../action",
                                  fields: {
                                    "0": "varint",
                                    "1": "varint"
                                  },
                                  default: "void"
                                }
                              ]
                            },
                            {
                              name: "ping",
                              type: [
                                "switch",
                                {
                                  compareTo: "../action",
                                  fields: {
                                    "0": "varint",
                                    "2": "varint"
                                  },
                                  default: "void"
                                }
                              ]
                            },
                            {
                              name: "displayName",
                              type: [
                                "switch",
                                {
                                  compareTo: "../action",
                                  fields: {
                                    "0": [
                                      "option",
                                      "string"
                                    ],
                                    "3": [
                                      "option",
                                      "string"
                                    ]
                                  },
                                  default: "void"
                                }
                              ]
                            }
                          ]
                        ]
                      }
                    ]
                  }
                ]
              ],
              packet_position: [
                "container",
                [
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  },
                  {
                    name: "yaw",
                    type: "f32"
                  },
                  {
                    name: "pitch",
                    type: "f32"
                  },
                  {
                    name: "flags",
                    type: "i8"
                  },
                  {
                    name: "teleportId",
                    type: "varint"
                  }
                ]
              ],
              packet_bed: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "location",
                    type: "position"
                  }
                ]
              ],
              packet_entity_destroy: [
                "container",
                [
                  {
                    name: "entityIds",
                    type: [
                      "array",
                      {
                        countType: "varint",
                        type: "varint"
                      }
                    ]
                  }
                ]
              ],
              packet_remove_entity_effect: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "effectId",
                    type: "i8"
                  }
                ]
              ],
              packet_resource_pack_send: [
                "container",
                [
                  {
                    name: "url",
                    type: "string"
                  },
                  {
                    name: "hash",
                    type: "string"
                  }
                ]
              ],
              packet_respawn: [
                "container",
                [
                  {
                    name: "dimension",
                    type: "i32"
                  },
                  {
                    name: "difficulty",
                    type: "u8"
                  },
                  {
                    name: "gamemode",
                    type: "u8"
                  },
                  {
                    name: "levelType",
                    type: "string"
                  }
                ]
              ],
              packet_entity_head_rotation: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "headYaw",
                    type: "i8"
                  }
                ]
              ],
              packet_world_border: [
                "container",
                [
                  {
                    name: "action",
                    type: "varint"
                  },
                  {
                    name: "radius",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "0": "f64"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "x",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "2": "f64",
                          "3": "f64"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "z",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "2": "f64",
                          "3": "f64"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "old_radius",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "1": "f64",
                          "3": "f64"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "new_radius",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "1": "f64",
                          "3": "f64"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "speed",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "1": "varlong",
                          "3": "varlong"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "portalBoundary",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "3": "varint"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "warning_time",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "3": "varint",
                          "4": "varint"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "warning_blocks",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "3": "varint",
                          "5": "varint"
                        },
                        default: "void"
                      }
                    ]
                  }
                ]
              ],
              packet_camera: [
                "container",
                [
                  {
                    name: "cameraId",
                    type: "varint"
                  }
                ]
              ],
              packet_held_item_slot: [
                "container",
                [
                  {
                    name: "slot",
                    type: "i8"
                  }
                ]
              ],
              packet_scoreboard_display_objective: [
                "container",
                [
                  {
                    name: "position",
                    type: "i8"
                  },
                  {
                    name: "name",
                    type: "string"
                  }
                ]
              ],
              packet_entity_metadata: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "metadata",
                    type: "entityMetadata"
                  }
                ]
              ],
              packet_attach_entity: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "i32"
                  },
                  {
                    name: "vehicleId",
                    type: "i32"
                  }
                ]
              ],
              packet_entity_velocity: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "velocityX",
                    type: "i16"
                  },
                  {
                    name: "velocityY",
                    type: "i16"
                  },
                  {
                    name: "velocityZ",
                    type: "i16"
                  }
                ]
              ],
              packet_entity_equipment: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "slot",
                    type: "varint"
                  },
                  {
                    name: "item",
                    type: "slot"
                  }
                ]
              ],
              packet_experience: [
                "container",
                [
                  {
                    name: "experienceBar",
                    type: "f32"
                  },
                  {
                    name: "level",
                    type: "varint"
                  },
                  {
                    name: "totalExperience",
                    type: "varint"
                  }
                ]
              ],
              packet_update_health: [
                "container",
                [
                  {
                    name: "health",
                    type: "f32"
                  },
                  {
                    name: "food",
                    type: "varint"
                  },
                  {
                    name: "foodSaturation",
                    type: "f32"
                  }
                ]
              ],
              packet_scoreboard_objective: [
                "container",
                [
                  {
                    name: "name",
                    type: "string"
                  },
                  {
                    name: "action",
                    type: "i8"
                  },
                  {
                    name: "displayText",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "0": "string",
                          "2": "string"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "type",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "0": "string",
                          "2": "string"
                        },
                        default: "void"
                      }
                    ]
                  }
                ]
              ],
              packet_set_passengers: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "passengers",
                    type: [
                      "array",
                      {
                        countType: "varint",
                        type: "varint"
                      }
                    ]
                  }
                ]
              ],
              packet_teams: [
                "container",
                [
                  {
                    name: "team",
                    type: "string"
                  },
                  {
                    name: "mode",
                    type: "i8"
                  },
                  {
                    name: "name",
                    type: [
                      "switch",
                      {
                        compareTo: "mode",
                        fields: {
                          "0": "string",
                          "2": "string"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "prefix",
                    type: [
                      "switch",
                      {
                        compareTo: "mode",
                        fields: {
                          "0": "string",
                          "2": "string"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "suffix",
                    type: [
                      "switch",
                      {
                        compareTo: "mode",
                        fields: {
                          "0": "string",
                          "2": "string"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "friendlyFire",
                    type: [
                      "switch",
                      {
                        compareTo: "mode",
                        fields: {
                          "0": "i8",
                          "2": "i8"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "nameTagVisibility",
                    type: [
                      "switch",
                      {
                        compareTo: "mode",
                        fields: {
                          "0": "string",
                          "2": "string"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "collisionRule",
                    type: [
                      "switch",
                      {
                        compareTo: "mode",
                        fields: {
                          "0": "string",
                          "2": "string"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "color",
                    type: [
                      "switch",
                      {
                        compareTo: "mode",
                        fields: {
                          "0": "i8",
                          "2": "i8"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "players",
                    type: [
                      "switch",
                      {
                        compareTo: "mode",
                        fields: {
                          "0": [
                            "array",
                            {
                              countType: "varint",
                              type: "string"
                            }
                          ],
                          "3": [
                            "array",
                            {
                              countType: "varint",
                              type: "string"
                            }
                          ],
                          "4": [
                            "array",
                            {
                              countType: "varint",
                              type: "string"
                            }
                          ]
                        },
                        default: "void"
                      }
                    ]
                  }
                ]
              ],
              packet_scoreboard_score: [
                "container",
                [
                  {
                    name: "itemName",
                    type: "string"
                  },
                  {
                    name: "action",
                    type: "varint"
                  },
                  {
                    name: "scoreName",
                    type: "string"
                  },
                  {
                    name: "value",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "1": "void"
                        },
                        default: "varint"
                      }
                    ]
                  }
                ]
              ],
              packet_spawn_position: [
                "container",
                [
                  {
                    name: "location",
                    type: "position"
                  }
                ]
              ],
              packet_update_time: [
                "container",
                [
                  {
                    name: "age",
                    type: "i64"
                  },
                  {
                    name: "time",
                    type: "i64"
                  }
                ]
              ],
              packet_title: [
                "container",
                [
                  {
                    name: "action",
                    type: "varint"
                  },
                  {
                    name: "text",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "0": "string",
                          "1": "string",
                          "2": "string"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "fadeIn",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "3": "i32"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "stay",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "3": "i32"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "fadeOut",
                    type: [
                      "switch",
                      {
                        compareTo: "action",
                        fields: {
                          "3": "i32"
                        },
                        default: "void"
                      }
                    ]
                  }
                ]
              ],
              packet_sound_effect: [
                "container",
                [
                  {
                    name: "soundId",
                    type: "varint"
                  },
                  {
                    name: "soundCategory",
                    type: "varint"
                  },
                  {
                    name: "x",
                    type: "i32"
                  },
                  {
                    name: "y",
                    type: "i32"
                  },
                  {
                    name: "z",
                    type: "i32"
                  },
                  {
                    name: "volume",
                    type: "f32"
                  },
                  {
                    name: "pitch",
                    type: "f32"
                  }
                ]
              ],
              packet_playerlist_header: [
                "container",
                [
                  {
                    name: "header",
                    type: "string"
                  },
                  {
                    name: "footer",
                    type: "string"
                  }
                ]
              ],
              packet_collect: [
                "container",
                [
                  {
                    name: "collectedEntityId",
                    type: "varint"
                  },
                  {
                    name: "collectorEntityId",
                    type: "varint"
                  },
                  {
                    name: "pickupItemCount",
                    type: "varint"
                  }
                ]
              ],
              packet_entity_teleport: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  },
                  {
                    name: "yaw",
                    type: "i8"
                  },
                  {
                    name: "pitch",
                    type: "i8"
                  },
                  {
                    name: "onGround",
                    type: "bool"
                  }
                ]
              ],
              packet_entity_update_attributes: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "properties",
                    type: [
                      "array",
                      {
                        countType: "i32",
                        type: [
                          "container",
                          [
                            {
                              name: "key",
                              type: "string"
                            },
                            {
                              name: "value",
                              type: "f64"
                            },
                            {
                              name: "modifiers",
                              type: [
                                "array",
                                {
                                  countType: "varint",
                                  type: [
                                    "container",
                                    [
                                      {
                                        name: "uuid",
                                        type: "UUID"
                                      },
                                      {
                                        name: "amount",
                                        type: "f64"
                                      },
                                      {
                                        name: "operation",
                                        type: "i8"
                                      }
                                    ]
                                  ]
                                }
                              ]
                            }
                          ]
                        ]
                      }
                    ]
                  }
                ]
              ],
              packet_entity_effect: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "effectId",
                    type: "i8"
                  },
                  {
                    name: "amplifier",
                    type: "i8"
                  },
                  {
                    name: "duration",
                    type: "varint"
                  },
                  {
                    name: "hideParticles",
                    type: "i8"
                  }
                ]
              ],
              packet: [
                "container",
                [
                  {
                    name: "name",
                    type: [
                      "mapper",
                      {
                        type: "varint",
                        mappings: {
                          "0x00": "spawn_entity",
                          "0x01": "spawn_entity_experience_orb",
                          "0x02": "spawn_entity_weather",
                          "0x03": "spawn_entity_living",
                          "0x04": "spawn_entity_painting",
                          "0x05": "named_entity_spawn",
                          "0x06": "animation",
                          "0x07": "statistics",
                          "0x08": "block_break_animation",
                          "0x09": "tile_entity_data",
                          "0x0a": "block_action",
                          "0x0b": "block_change",
                          "0x0c": "boss_bar",
                          "0x0d": "difficulty",
                          "0x0e": "tab_complete",
                          "0x0f": "chat",
                          "0x10": "multi_block_change",
                          "0x11": "transaction",
                          "0x12": "close_window",
                          "0x13": "open_window",
                          "0x14": "window_items",
                          "0x15": "craft_progress_bar",
                          "0x16": "set_slot",
                          "0x17": "set_cooldown",
                          "0x18": "custom_payload",
                          "0x19": "named_sound_effect",
                          "0x1a": "kick_disconnect",
                          "0x1b": "entity_status",
                          "0x1c": "explosion",
                          "0x1d": "unload_chunk",
                          "0x1e": "game_state_change",
                          "0x1f": "keep_alive",
                          "0x20": "map_chunk",
                          "0x21": "world_event",
                          "0x22": "world_particles",
                          "0x23": "login",
                          "0x24": "map",
                          "0x25": "rel_entity_move",
                          "0x26": "entity_move_look",
                          "0x27": "entity_look",
                          "0x28": "entity",
                          "0x29": "vehicle_move",
                          "0x2a": "open_sign_entity",
                          "0x2b": "abilities",
                          "0x2c": "combat_event",
                          "0x2d": "player_info",
                          "0x2e": "position",
                          "0x2f": "bed",
                          "0x30": "entity_destroy",
                          "0x31": "remove_entity_effect",
                          "0x32": "resource_pack_send",
                          "0x33": "respawn",
                          "0x34": "entity_head_rotation",
                          "0x35": "world_border",
                          "0x36": "camera",
                          "0x37": "held_item_slot",
                          "0x38": "scoreboard_display_objective",
                          "0x39": "entity_metadata",
                          "0x3a": "attach_entity",
                          "0x3b": "entity_velocity",
                          "0x3c": "entity_equipment",
                          "0x3d": "experience",
                          "0x3e": "update_health",
                          "0x3f": "scoreboard_objective",
                          "0x40": "set_passengers",
                          "0x41": "teams",
                          "0x42": "scoreboard_score",
                          "0x43": "spawn_position",
                          "0x44": "update_time",
                          "0x45": "title",
                          "0x46": "sound_effect",
                          "0x47": "playerlist_header",
                          "0x48": "collect",
                          "0x49": "entity_teleport",
                          "0x4a": "entity_update_attributes",
                          "0x4b": "entity_effect"
                        }
                      }
                    ]
                  },
                  {
                    name: "params",
                    type: [
                      "switch",
                      {
                        compareTo: "name",
                        fields: {
                          spawn_entity: "packet_spawn_entity",
                          spawn_entity_experience_orb: "packet_spawn_entity_experience_orb",
                          spawn_entity_weather: "packet_spawn_entity_weather",
                          spawn_entity_living: "packet_spawn_entity_living",
                          spawn_entity_painting: "packet_spawn_entity_painting",
                          named_entity_spawn: "packet_named_entity_spawn",
                          animation: "packet_animation",
                          statistics: "packet_statistics",
                          block_break_animation: "packet_block_break_animation",
                          tile_entity_data: "packet_tile_entity_data",
                          block_action: "packet_block_action",
                          block_change: "packet_block_change",
                          boss_bar: "packet_boss_bar",
                          difficulty: "packet_difficulty",
                          tab_complete: "packet_tab_complete",
                          chat: "packet_chat",
                          multi_block_change: "packet_multi_block_change",
                          transaction: "packet_transaction",
                          close_window: "packet_close_window",
                          open_window: "packet_open_window",
                          window_items: "packet_window_items",
                          craft_progress_bar: "packet_craft_progress_bar",
                          set_slot: "packet_set_slot",
                          set_cooldown: "packet_set_cooldown",
                          custom_payload: "packet_custom_payload",
                          named_sound_effect: "packet_named_sound_effect",
                          kick_disconnect: "packet_kick_disconnect",
                          entity_status: "packet_entity_status",
                          explosion: "packet_explosion",
                          unload_chunk: "packet_unload_chunk",
                          game_state_change: "packet_game_state_change",
                          keep_alive: "packet_keep_alive",
                          map_chunk: "packet_map_chunk",
                          world_event: "packet_world_event",
                          world_particles: "packet_world_particles",
                          login: "packet_login",
                          map: "packet_map",
                          rel_entity_move: "packet_rel_entity_move",
                          entity_move_look: "packet_entity_move_look",
                          entity_look: "packet_entity_look",
                          entity: "packet_entity",
                          vehicle_move: "packet_vehicle_move",
                          open_sign_entity: "packet_open_sign_entity",
                          abilities: "packet_abilities",
                          combat_event: "packet_combat_event",
                          player_info: "packet_player_info",
                          position: "packet_position",
                          bed: "packet_bed",
                          entity_destroy: "packet_entity_destroy",
                          remove_entity_effect: "packet_remove_entity_effect",
                          resource_pack_send: "packet_resource_pack_send",
                          respawn: "packet_respawn",
                          entity_update_attributes: "packet_entity_update_attributes",
                          world_border: "packet_world_border",
                          camera: "packet_camera",
                          held_item_slot: "packet_held_item_slot",
                          scoreboard_display_objective: "packet_scoreboard_display_objective",
                          entity_metadata: "packet_entity_metadata",
                          attach_entity: "packet_attach_entity",
                          entity_velocity: "packet_entity_velocity",
                          entity_equipment: "packet_entity_equipment",
                          experience: "packet_experience",
                          update_health: "packet_update_health",
                          scoreboard_objective: "packet_scoreboard_objective",
                          set_passengers: "packet_set_passengers",
                          teams: "packet_teams",
                          scoreboard_score: "packet_scoreboard_score",
                          spawn_position: "packet_spawn_position",
                          update_time: "packet_update_time",
                          title: "packet_title",
                          sound_effect: "packet_sound_effect",
                          playerlist_header: "packet_playerlist_header",
                          collect: "packet_collect",
                          entity_teleport: "packet_entity_teleport",
                          entity_head_rotation: "packet_entity_head_rotation",
                          entity_effect: "packet_entity_effect"
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          },
          toServer: {
            types: {
              packet_teleport_confirm: [
                "container",
                [
                  {
                    name: "teleportId",
                    type: "varint"
                  }
                ]
              ],
              packet_tab_complete: [
                "container",
                [
                  {
                    name: "text",
                    type: "string"
                  },
                  {
                    name: "assumeCommand",
                    type: "bool"
                  },
                  {
                    name: "lookedAtBlock",
                    type: [
                      "option",
                      "position"
                    ]
                  }
                ]
              ],
              packet_chat: [
                "container",
                [
                  {
                    name: "message",
                    type: "string"
                  }
                ]
              ],
              packet_client_command: [
                "container",
                [
                  {
                    name: "actionId",
                    type: "varint"
                  }
                ]
              ],
              packet_settings: [
                "container",
                [
                  {
                    name: "locale",
                    type: "string"
                  },
                  {
                    name: "viewDistance",
                    type: "i8"
                  },
                  {
                    name: "chatFlags",
                    type: "varint"
                  },
                  {
                    name: "chatColors",
                    type: "bool"
                  },
                  {
                    name: "skinParts",
                    type: "u8"
                  },
                  {
                    name: "mainHand",
                    type: "varint"
                  }
                ]
              ],
              packet_transaction: [
                "container",
                [
                  {
                    name: "windowId",
                    type: "i8"
                  },
                  {
                    name: "action",
                    type: "i16"
                  },
                  {
                    name: "accepted",
                    type: "bool"
                  }
                ]
              ],
              packet_enchant_item: [
                "container",
                [
                  {
                    name: "windowId",
                    type: "i8"
                  },
                  {
                    name: "enchantment",
                    type: "i8"
                  }
                ]
              ],
              packet_window_click: [
                "container",
                [
                  {
                    name: "windowId",
                    type: "u8"
                  },
                  {
                    name: "slot",
                    type: "i16"
                  },
                  {
                    name: "mouseButton",
                    type: "i8"
                  },
                  {
                    name: "action",
                    type: "i16"
                  },
                  {
                    name: "mode",
                    type: "i8"
                  },
                  {
                    name: "item",
                    type: "slot"
                  }
                ]
              ],
              packet_close_window: [
                "container",
                [
                  {
                    name: "windowId",
                    type: "u8"
                  }
                ]
              ],
              packet_custom_payload: [
                "container",
                [
                  {
                    name: "channel",
                    type: "string"
                  },
                  {
                    name: "data",
                    type: "restBuffer"
                  }
                ]
              ],
              packet_use_entity: [
                "container",
                [
                  {
                    name: "target",
                    type: "varint"
                  },
                  {
                    name: "mouse",
                    type: "varint"
                  },
                  {
                    name: "x",
                    type: [
                      "switch",
                      {
                        compareTo: "mouse",
                        fields: {
                          "2": "f32"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "y",
                    type: [
                      "switch",
                      {
                        compareTo: "mouse",
                        fields: {
                          "2": "f32"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "z",
                    type: [
                      "switch",
                      {
                        compareTo: "mouse",
                        fields: {
                          "2": "f32"
                        },
                        default: "void"
                      }
                    ]
                  },
                  {
                    name: "hand",
                    type: [
                      "switch",
                      {
                        compareTo: "mouse",
                        fields: {
                          "0": "varint",
                          "2": "varint"
                        },
                        default: "void"
                      }
                    ]
                  }
                ]
              ],
              packet_keep_alive: [
                "container",
                [
                  {
                    name: "keepAliveId",
                    type: "varint"
                  }
                ]
              ],
              packet_position: [
                "container",
                [
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  },
                  {
                    name: "onGround",
                    type: "bool"
                  }
                ]
              ],
              packet_position_look: [
                "container",
                [
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  },
                  {
                    name: "yaw",
                    type: "f32"
                  },
                  {
                    name: "pitch",
                    type: "f32"
                  },
                  {
                    name: "onGround",
                    type: "bool"
                  }
                ]
              ],
              packet_look: [
                "container",
                [
                  {
                    name: "yaw",
                    type: "f32"
                  },
                  {
                    name: "pitch",
                    type: "f32"
                  },
                  {
                    name: "onGround",
                    type: "bool"
                  }
                ]
              ],
              packet_flying: [
                "container",
                [
                  {
                    name: "onGround",
                    type: "bool"
                  }
                ]
              ],
              packet_vehicle_move: [
                "container",
                [
                  {
                    name: "x",
                    type: "f64"
                  },
                  {
                    name: "y",
                    type: "f64"
                  },
                  {
                    name: "z",
                    type: "f64"
                  },
                  {
                    name: "yaw",
                    type: "f32"
                  },
                  {
                    name: "pitch",
                    type: "f32"
                  }
                ]
              ],
              packet_steer_boat: [
                "container",
                [
                  {
                    name: "leftPaddle",
                    type: "bool"
                  },
                  {
                    name: "rightPaddle",
                    type: "bool"
                  }
                ]
              ],
              packet_abilities: [
                "container",
                [
                  {
                    name: "flags",
                    type: "i8"
                  },
                  {
                    name: "flyingSpeed",
                    type: "f32"
                  },
                  {
                    name: "walkingSpeed",
                    type: "f32"
                  }
                ]
              ],
              packet_block_dig: [
                "container",
                [
                  {
                    name: "status",
                    type: "varint"
                  },
                  {
                    name: "location",
                    type: "position"
                  },
                  {
                    name: "face",
                    type: "i8"
                  }
                ]
              ],
              packet_entity_action: [
                "container",
                [
                  {
                    name: "entityId",
                    type: "varint"
                  },
                  {
                    name: "actionId",
                    type: "varint"
                  },
                  {
                    name: "jumpBoost",
                    type: "varint"
                  }
                ]
              ],
              packet_steer_vehicle: [
                "container",
                [
                  {
                    name: "sideways",
                    type: "f32"
                  },
                  {
                    name: "forward",
                    type: "f32"
                  },
                  {
                    name: "jump",
                    type: "u8"
                  }
                ]
              ],
              packet_resource_pack_receive: [
                "container",
                [
                  {
                    name: "result",
                    type: "varint"
                  }
                ]
              ],
              packet_held_item_slot: [
                "container",
                [
                  {
                    name: "slotId",
                    type: "i16"
                  }
                ]
              ],
              packet_set_creative_slot: [
                "container",
                [
                  {
                    name: "slot",
                    type: "i16"
                  },
                  {
                    name: "item",
                    type: "slot"
                  }
                ]
              ],
              packet_update_sign: [
                "container",
                [
                  {
                    name: "location",
                    type: "position"
                  },
                  {
                    name: "text1",
                    type: "string"
                  },
                  {
                    name: "text2",
                    type: "string"
                  },
                  {
                    name: "text3",
                    type: "string"
                  },
                  {
                    name: "text4",
                    type: "string"
                  }
                ]
              ],
              packet_arm_animation: [
                "container",
                [
                  {
                    name: "hand",
                    type: "varint"
                  }
                ]
              ],
              packet_spectate: [
                "container",
                [
                  {
                    name: "target",
                    type: "UUID"
                  }
                ]
              ],
              packet_block_place: [
                "container",
                [
                  {
                    name: "location",
                    type: "position"
                  },
                  {
                    name: "direction",
                    type: "varint"
                  },
                  {
                    name: "hand",
                    type: "varint"
                  },
                  {
                    name: "cursorX",
                    type: "f32"
                  },
                  {
                    name: "cursorY",
                    type: "f32"
                  },
                  {
                    name: "cursorZ",
                    type: "f32"
                  }
                ]
              ],
              packet_use_item: [
                "container",
                [
                  {
                    name: "hand",
                    type: "varint"
                  }
                ]
              ],
              packet: [
                "container",
                [
                  {
                    name: "name",
                    type: [
                      "mapper",
                      {
                        type: "varint",
                        mappings: {
                          "0x00": "teleport_confirm",
                          "0x01": "tab_complete",
                          "0x02": "chat",
                          "0x03": "client_command",
                          "0x04": "settings",
                          "0x05": "transaction",
                          "0x06": "enchant_item",
                          "0x07": "window_click",
                          "0x08": "close_window",
                          "0x09": "custom_payload",
                          "0x0a": "use_entity",
                          "0x0b": "keep_alive",
                          "0x0c": "position",
                          "0x0d": "position_look",
                          "0x0e": "look",
                          "0x0f": "flying",
                          "0x10": "vehicle_move",
                          "0x11": "steer_boat",
                          "0x12": "abilities",
                          "0x13": "block_dig",
                          "0x14": "entity_action",
                          "0x15": "steer_vehicle",
                          "0x16": "resource_pack_receive",
                          "0x17": "held_item_slot",
                          "0x18": "set_creative_slot",
                          "0x19": "update_sign",
                          "0x1a": "arm_animation",
                          "0x1b": "spectate",
                          "0x1c": "block_place",
                          "0x1d": "use_item"
                        }
                      }
                    ]
                  },
                  {
                    name: "params",
                    type: [
                      "switch",
                      {
                        compareTo: "name",
                        fields: {
                          teleport_confirm: "packet_teleport_confirm",
                          tab_complete: "packet_tab_complete",
                          chat: "packet_chat",
                          client_command: "packet_client_command",
                          settings: "packet_settings",
                          transaction: "packet_transaction",
                          enchant_item: "packet_enchant_item",
                          window_click: "packet_window_click",
                          close_window: "packet_close_window",
                          custom_payload: "packet_custom_payload",
                          use_entity: "packet_use_entity",
                          keep_alive: "packet_keep_alive",
                          position: "packet_position",
                          position_look: "packet_position_look",
                          look: "packet_look",
                          flying: "packet_flying",
                          vehicle_move: "packet_vehicle_move",
                          steer_boat: "packet_steer_boat",
                          abilities: "packet_abilities",
                          block_dig: "packet_block_dig",
                          entity_action: "packet_entity_action",
                          steer_vehicle: "packet_steer_vehicle",
                          resource_pack_receive: "packet_resource_pack_receive",
                          held_item_slot: "packet_held_item_slot",
                          set_creative_slot: "packet_set_creative_slot",
                          update_sign: "packet_update_sign",
                          arm_animation: "packet_arm_animation",
                          spectate: "packet_spectate",
                          block_place: "packet_block_place",
                          use_item: "packet_use_item"
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          }
        }
      };
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11.2/protocolComments.json
  var require_protocolComments = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11.2/protocolComments.json"(exports, module) {
      module.exports = {
        handshaking: {
          toClient: {},
          toServer: {
            set_protocol: {
              before: [
                "This causes the server to switch into the target state.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x00"
            },
            legacy_server_list_ping: {
              before: [
                'While not technically part of the current protocol, legacy clients may send this packet to initiate [Server List Ping](Server_List_Ping "wikilink"), and modern servers should handle it correctly.',
                ""
              ],
              after: [
                'See [Server List Ping\\#1.6](Server_List_Ping#1.6 "wikilink") for the details of the protocol that follows this packet.',
                ""
              ],
              id: "0xfe"
            }
          }
        },
        status: {
          toClient: {
            ping: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x01"
            },
            server_info: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x00"
            }
          },
          toServer: {
            ping: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x01"
            },
            ping_start: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x00"
            }
          }
        },
        login: {
          toServer: {
            login_start: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x00"
            },
            encryption_begin: {
              before: [
                "",
                ""
              ],
              after: [
                'See [Protocol Encryption](Protocol_Encryption "wikilink") for details.',
                "",
                '[Category:Protocol Details](Category:Protocol_Details "wikilink") [Category:Minecraft Modern](Category:Minecraft_Modern "wikilink")',
                ""
              ],
              id: "0x01"
            }
          },
          toClient: {
            encryption_begin: {
              before: [
                "",
                ""
              ],
              after: [
                'See [Protocol Encryption](Protocol_Encryption "wikilink") for details.',
                ""
              ],
              id: "0x01"
            },
            success: {
              before: [
                "",
                ""
              ],
              after: [
                'This packet switches the connection state to [play](#play "wikilink").',
                ""
              ],
              id: "0x02"
            },
            compress: {
              before: [
                'Enables compression. If compression is enabled, all following packets are encoded in the [compressed packet format](#with_compression "wikilink"). Negative values will disable compression, meaning the packet format should remain in the [uncompressed packet format](#without_compression "wikilink"). However, this packet is entirely optional, and if not sent, compression will also not be enabled (the notchian server does not send the packet when compression is disabled).',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x03"
            },
            disconnect: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x00"
            }
          }
        },
        play: {
          toClient: {
            block_break_animation: {
              before: [
                "0\u20139 are the displayable destroy stages and each other number means that there is no animation on this coordinate.",
                "",
                "Block break animations can still be applied on air; the animation will remain visible although there is no block being broken. However, if this is applied to a transparent block, odd graphical effects may happen, including water losing its transparency. (An effect similar to this can be seen in normal gameplay when breaking ice blocks)",
                "",
                "If you need to display several break animations at the same time you have to give each of them a unique Entity ID.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x08"
            },
            tile_entity_data: {
              before: [
                "Sets tile entity associated with the block at the given location.",
                ""
              ],
              after: [
                "*Action* field:",
                "",
                "-   **1**: Set data of a mob spawner (everything except for SpawnPotentials: current delay, min/max delay, mob to be spawned, spawn count, spawn range, etc.)",
                "-   **2**: Set command block text (command and last execution status)",
                "-   **3**: Set the level, primary, and secondary powers of a beacon",
                "-   **4**: Set rotation and skin of mob head",
                "-   **5**: Set type of flower in flower pot",
                "-   **6**: Set base color and patterns on a banner",
                "-   **7**: Set the data for a Structure tile entity",
                "-   **8**: Set the destination for a end gateway",
                "-   **9**: Set the text on a sign",
                "-   **10**: Declare a shulker box (unclear if there is any actual data)",
                "",
                ""
              ],
              id: "0x09"
            },
            difficulty: {
              before: [
                "Changes the difficulty setting in the client's option menu",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0d"
            },
            tab_complete: {
              before: [
                "The server responds with a list of auto-completions of the last word sent to it. In the case of regular chat, this is a player username. Command names and parameters are also supported. The client sorts these alphabetically before listing them.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0e"
            },
            chat: {
              before: [
                "Identifying the difference between Chat/System Message is important as it helps respect the user's chat visibility options. While Position 2 accepts json formatting it will not display, old style formatting works",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0f"
            },
            multi_block_change: {
              before: [
                "Fired whenever 2 or more blocks are changed within the same chunk on the same tick.",
                ""
              ],
              after: [
                "To decode the position into a world position:",
                "",
                "``` java",
                "worldX = (horizPos >> 4 & 15) + (chunkX * 16);",
                "worldY = vertPos;",
                "worldZ = (horizPos & 15) + (chunkZ * 16);",
                "```",
                ""
              ],
              id: "0x10"
            },
            transaction: {
              before: [
                'A packet from the server indicating whether a request from the client was accepted, or whether there was a conflict (due to lag). If the packet was not accepted, the client must respond with a [serverbound confirm transaction](#confirm_transaction "wikilink") packet.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x11"
            },
            close_window: {
              before: [
                "This packet is sent from the server to the client when a window is forcibly closed, such as when a chest is destroyed while it's open.",
                "",
                'Note, notchian clients send a close window packet with Window ID 0 to close their inventory even though there is never an [Open Window](#open_window "wikilink") packet for inventory.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x12"
            },
            open_window: {
              before: [
                "This is sent to the client when it should open an inventory, such as a chest, workbench, or furnace. This message is not sent anywhere for clients opening their own inventory.",
                ""
              ],
              after: [
                'See [Inventory](Inventory "wikilink") for further information.',
                ""
              ],
              id: "0x13"
            },
            window_items: {
              before: [
                '![The inventory slots](Inventory-slots.png "The inventory slots")',
                "",
                "Sent by the server when items in multiple slots (in a window) are added/removed. This includes the main inventory, equipped armour and crafting slots.",
                ""
              ],
              after: [
                'See [inventory windows](Inventory#Windows "wikilink") for further information about how slots are indexed.',
                ""
              ],
              id: "0x14"
            },
            craft_progress_bar: {
              before: [
                "This packet is used to inform the client that part of a GUI window should be updated.",
                ""
              ],
              after: [
                "The meaning of the Property field depends on the type of the window. The following table shows the known combinations of window type and property, and how the value is to be interpreted.",
                "",
                "| Window type                                                         | Property                                                                                                                                                                                                                                                                                                                       | Value                                                               |",
                "|---------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|",
                "| Furnace                                                             | 0: Fire icon (fuel left)                                                                                                                                                                                                                                                                                                       | counting from fuel burn time down to 0 (in-game ticks)              |",
                "| 1: Maximum fuel burn time                                           | fuel burn time or 0 (in-game ticks)                                                                                                                                                                                                                                                                                            |",
                "| 2: Progress arrow                                                   | counting from 0 to maximum progress (in-game ticks)                                                                                                                                                                                                                                                                            |",
                "| 3: Maximum progress                                                 | always 200 on the notchian server                                                                                                                                                                                                                                                                                              |",
                "| Enchantment Table                                                   | 0: Level requirement for top enchantment slot                                                                                                                                                                                                                                                                                  | The enchantment's xp level requirement                              |",
                "| 1: Level requirement for middle enchantment slot                    |",
                "| 2: Level requirement for bottom enchantment slot                    |",
                '| 3: The enchantment seed                                             | Used for drawing the enchantment names (in [SGA](Wikipedia:Standard_Galactic_Alphabet "wikilink")) clientside. The same seed *is* used to calculate enchantments, but some of the data isn\'t sent to the client to prevent easily guessing the entire list (the seed value here is the regular seed bitwise and `0xFFFFFFF0`). |',
                "| 4: Enchantment ID shown on mouse hover over top enchantment slot    | The enchantment id (set to -1 to hide it)                                                                                                                                                                                                                                                                                      |",
                "| 5: Enchantment ID shown on mouse hover over middle enchantment slot |",
                "| 6: Enchantment ID shown on mouse hover over bottom enchantment slot |",
                "| 7: Enchantment level shown on mouse hover over the top slot         | The enchantment level (1 = I, 2 = II, 6 = VI, etc.), or -1 if no enchant                                                                                                                                                                                                                                                       |",
                "| 8: Enchantment level shown on mouse hover over the middle slot      |",
                "| 9: Enchantment level shown on mouse hover over the bottom slot      |",
                "| Beacon                                                              | 0: Power level                                                                                                                                                                                                                                                                                                                 | 0-4, controls what effect buttons are enabled                       |",
                "| 1: First potion effect                                              | for the first effect, or -1 if no effect                                                                                                                                                                                                                                                                                       |",
                "| 2: Second potion effect                                             | for the second effect, or -1 if no effect                                                                                                                                                                                                                                                                                      |",
                "| Anvil                                                               | 0: Repair cost                                                                                                                                                                                                                                                                                                                 | The repair's cost in xp levels                                      |",
                "| Brewing Stand                                                       | 0: Brew time                                                                                                                                                                                                                                                                                                                   | 0\u2013400, with 400 making the arrow empty, and 0 making the arrow full |",
                "",
                "",
                ""
              ],
              id: "0x15"
            },
            set_slot: {
              before: [
                "Sent by the server when an item in a slot (in a window) is added/removed.",
                ""
              ],
              after: [
                "To set the cursor (the item currently dragged with the mouse), use -1 as Window ID and as Slot.",
                "",
                "This packet can only be used to edit the hotbar of the player's inventory if window ID is set to 0 (slots 36 through 44). If the window ID is set to -2, then any slot in the inventory can be used but no add item animation will be played.",
                ""
              ],
              id: "0x16"
            },
            set_cooldown: {
              before: [
                "Applies a cooldown period to all items with the given type. Used by the Notchian server with enderpearls. This packet should be sent when the cooldown starts and also when the cooldown ends (to compensate for lag), although the client will end the cooldown automatically.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x17"
            },
            custom_payload: {
              before: [
                'Mods and plugins can use this to send their data. Minecraft itself uses a number of [plugin channels](plugin_channel "wikilink"). These internal channels are prefixed with `MC|`.',
                "",
                "More documentation on this: [<http://dinnerbone.com/blog/2012/01/13/minecraft-plugin-channels-messaging/>](http://dinnerbone.com/blog/2012/01/13/minecraft-plugin-channels-messaging/)",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x18"
            },
            named_sound_effect: {
              before: [
                "Used to play a sound effect on the client. Custom sounds may be added by resource packs.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x19"
            },
            kick_disconnect: {
              before: [
                "Sent by the server before it disconnects a client. The client assumes that the server has already closed the connection by the time the packet arrives.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x1a"
            },
            entity_status: {
              before: [
                "Entity statuses generally trigger an animation for an entity. The available statuses vary by the entity's type (and are available to subclasses of that type as well).",
                ""
              ],
              after: [
                'See [entities](entities "wikilink") for a list of which statuses are valid for each type of entity.',
                ""
              ],
              id: "0x1b"
            },
            explosion: {
              before: [
                "Sent when an explosion occurs (creepers, TNT, and ghast fireballs).",
                "",
                "Each block in Records is set to air. Coordinates for each axis in record is int(X) + record.x",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x1c"
            },
            unload_chunk: {
              before: [
                "Tells the client to unload a chunk column.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x1d"
            },
            game_state_change: {
              before: [
                "Used for a wide variety of game state things, from weather to bed use to game mode to demo messages.",
                ""
              ],
              after: [
                "*Reason codes*:",
                "",
                "| Reason | Effect                                                | Value                                                                                                                                                                                                                                                       |",
                "|--------|-------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|",
                "| 0      | Invalid Bed                                           | Would be used to switch between messages, but the only used message is 0 for invalid bed                                                                                                                                                                    |",
                "| 1      | End raining                                           |                                                                                                                                                                                                                                                             |",
                "| 2      | Begin raining                                         |                                                                                                                                                                                                                                                             |",
                "| 3      | Change game mode                                      | 0: Survival, 1: Creative, 2: Adventure, 3: Spectator                                                                                                                                                                                                        |",
                "| 4      | Exit end                                              | 0: Immediately send Client Status of respawn without showing end credits; 1: Show end credits and respawn at the end (or when esc is pressed). 1 is sent if the player has not yet received the \u201CThe end?\u201D achievement, while if they do have it 0 is used. |",
                "| 5      | Demo message                                          | 0: Show welcome to demo screen, 101: Tell movement controls, 102: Tell jump control, 103: Tell inventory control                                                                                                                                            |",
                "| 6      | Arrow hitting player                                  | Appears to be played when an arrow strikes another player in Multiplayer                                                                                                                                                                                    |",
                "| 7      | Fade value                                            | The current darkness value. 1 = Dark, 0 = Bright, Setting the value higher causes the game to change color and freeze                                                                                                                                       |",
                "| 8      | Fade time                                             | Time in ticks for the sky to fade                                                                                                                                                                                                                           |",
                "| 10     | Play elder guardian mob appearance (effect and sound) |                                                                                                                                                                                                                                                             |",
                "",
                "",
                ""
              ],
              id: "0x1e"
            },
            keep_alive: {
              before: [
                "The server will frequently send out a keep-alive, each containing a random ID. The client must respond with the same packet. If the client does not respond to them for over 30 seconds, the server kicks the client. Vice versa, if the server does not send any keep-alives for 20 seconds, the client will disconnect and yields a \u201CTimed out\u201D exception.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x1f"
            },
            map_chunk: {
              before: [
                `The server only sends skylight information for chunk pillars in the , it's up to the client to know in which dimenison the player is currently located. You can also infer this information from the primary bitmask and the amount of uncompressed bytes sent. This packet also sends all block entities in the chunk (though sending them is not required; it is still legal to send them with [Update Block Entity](#update_block_entity "wikilink") later).`,
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x20"
            },
            world_event: {
              before: [
                "Sent when a client is to play a sound or particle effect.",
                "",
                "By default, the Minecraft client adjusts the volume of sound effects based on distance. The final boolean field is used to disable this, and instead the effect is played from 2 blocks away in the correct direction. Currently this is only used for effect 1023 (wither spawn) and effect 1028 (enderdragon death); it is ignored on other effects.",
                ""
              ],
              after: [
                "Effect IDs:",
                "",
                "| ID       | Name                                                      | Data                                                                                  |",
                "|----------|-----------------------------------------------------------|---------------------------------------------------------------------------------------|",
                "| Sound    |",
                "| 1000     | Dispenser dispenses                                       |                                                                                       |",
                "| 1001     | Dispenser fails to dispense                               |                                                                                       |",
                "| 1002     | Dispenser shoots                                          |                                                                                       |",
                "| 1003     | Ender eye launched                                        |                                                                                       |",
                "| 1004     | Firework shot                                             |                                                                                       |",
                "| 1005     | Iron door opened                                          |                                                                                       |",
                "| 1006     | Wooden door opened                                        |                                                                                       |",
                "| 1007     | Wooden trapdoor opened                                    |                                                                                       |",
                "| 1008     | Fence gate opened                                         |                                                                                       |",
                "| 1009     | Fire extinguished                                         |                                                                                       |",
                "| 1010     | Play record                                               |                                                                                       |",
                "| 1011     | Iron door closed                                          |                                                                                       |",
                "| 1012     | Wooden door closed                                        |                                                                                       |",
                "| 1013     | Wooden trapdoor closed                                    |                                                                                       |",
                "| 1014     | Fence gate closed                                         |                                                                                       |",
                "| 1015     | Ghast warns                                               |                                                                                       |",
                "| 1016     | Ghast shoots                                              |                                                                                       |",
                "| 1017     | Enderdragon shoots                                        |                                                                                       |",
                "| 1018     | Blaze shoots                                              |                                                                                       |",
                "| 1019     | Zombie attacks wood door                                  |                                                                                       |",
                "| 1020     | Zombie attacks iron door                                  |                                                                                       |",
                "| 1021     | Zombie breaks wood door                                   |                                                                                       |",
                "| 1022     | Wither breaks block                                       |                                                                                       |",
                "| 1023     | Wither spawned                                            |                                                                                       |",
                "| 1024     | Wither shoots                                             |                                                                                       |",
                "| 1025     | Bat takes off                                             |                                                                                       |",
                "| 1026     | Zombie infects                                            |                                                                                       |",
                "| 1027     | Zombie villager converted                                 |                                                                                       |",
                "| 1028     | Ender dragon death                                        |                                                                                       |",
                "| 1029     | Anvil destroyed                                           |                                                                                       |",
                "| 1030     | Anvil used                                                |                                                                                       |",
                "| 1031     | Anvil landed                                              |                                                                                       |",
                "| 1032     | Portal travel                                             |                                                                                       |",
                "| 1033     | Chorus flower grown                                       |                                                                                       |",
                "| 1034     | Chorus flower died                                        |                                                                                       |",
                "| 1035     | Brewing stand brewed                                      |                                                                                       |",
                "| 1036     | Iron trapdoor opened                                      |                                                                                       |",
                "| 1037     | Iron trapdoor closed                                      |                                                                                       |",
                "| Particle |",
                "| 2000     | Spawns 10 smoke particles, e.g. from a fire               | Direction, see below                                                                  |",
                "| 2001     | Block break + block break sound                           |                                                                                       |",
                "| 2002     | Splash potion. Particle effect + glass break sound.       | [Potion ID](https://minecraft.wiki/w/Java_Edition_data_values/Pre-flattening#Potions) |",
                "| 2003     | Eye of Ender entity break animation \u2014 particles and sound |                                                                                       |",
                "| 2004     | Mob spawn particle effect: smoke + flames                 |                                                                                       |",
                "| 2005     | Bonemeal particles                                        | How many particles to spawn (if set to 0, 15 are spawned)                             |",
                "| 2006     | Dragon breath                                             |                                                                                       |",
                "| 3000     | End gateway spawn                                         |                                                                                       |",
                "| 3001     | Enderdragon growl                                         |                                                                                       |",
                "",
                "Smoke directions:",
                "",
                "| ID  | Direction        |",
                "|-----|------------------|",
                "| 0   | South-East       |",
                "| 1   | South            |",
                "| 2   | South-West       |",
                "| 3   | East             |",
                "| 4   | (Up or middle ?) |",
                "| 5   | West             |",
                "| 6   | North-East       |",
                "| 7   | North            |",
                "| 8   | North-West       |",
                "",
                "",
                ""
              ],
              id: "0x21"
            },
            world_particles: {
              before: [
                "Displays the named particle",
                ""
              ],
              after: [
                "Particle IDs:",
                "",
                "| Particle Name                     | Particle ID |",
                "|-----------------------------------|-------------|",
                "| explode                           | 0           |",
                "| largeexplosion                    | 1           |",
                "| hugeexplosion                     | 2           |",
                "| fireworksSpark                    | 3           |",
                "| bubble                            | 4           |",
                "| splash                            | 5           |",
                "| wake                              | 6           |",
                "| suspended                         | 7           |",
                "| depthsuspend                      | 8           |",
                "| crit                              | 9           |",
                "| magicCrit                         | 10          |",
                "| smoke                             | 11          |",
                "| largesmoke                        | 12          |",
                "| spell                             | 13          |",
                "| instantSpell                      | 14          |",
                "| mobSpell                          | 15          |",
                "| mobSpellAmbient                   | 16          |",
                "| witchMagic                        | 17          |",
                "| dripWater                         | 18          |",
                "| dripLava                          | 19          |",
                "| angryVillager                     | 20          |",
                "| happyVillager                     | 21          |",
                "| townaura                          | 22          |",
                "| note                              | 23          |",
                "| portal                            | 24          |",
                "| enchantmenttable                  | 25          |",
                "| flame                             | 26          |",
                "| lava                              | 27          |",
                "| footstep                          | 28          |",
                "| cloud                             | 29          |",
                "| reddust                           | 30          |",
                "| snowballpoof                      | 31          |",
                "| snowshovel                        | 32          |",
                "| slime                             | 33          |",
                "| heart                             | 34          |",
                "| barrier                           | 35          |",
                "| iconcrack\\_(id)\\_(data)           | 36          |",
                "| blockcrack\\_(id+(data&lt;&lt;12)) | 37          |",
                "| blockdust\\_(id)                   | 38          |",
                "| droplet                           | 39          |",
                "| take                              | 40          |",
                "| mobappearance                     | 41          |",
                "| dragonbreath                      | 42          |",
                "| endrod                            | 43          |",
                "| damageindicator                   | 44          |",
                "| sweepattack                       | 45          |",
                "| fallingdust                       | 46          |",
                "",
                "",
                ""
              ],
              id: "0x22"
            },
            login: {
              before: [
                'See [Protocol Encryption](Protocol_Encryption "wikilink") for information on logging in.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x23"
            },
            map: {
              before: [
                "Updates a rectangular area on a item.",
                ""
              ],
              after: [
                "For icons, a direction of 0 is a vertical icon and increments by 22.5\xB0 (360/16).",
                "",
                "Types are based off of rows and columns in `map_icons.png`:",
                "",
                "| Icon type | Result                                   |",
                "|-----------|------------------------------------------|",
                "| 0         | White arrow (players)                    |",
                "| 1         | Green arrow (item frames)                |",
                "| 2         | Red arrow                                |",
                "| 3         | Blue arrow                               |",
                "| 4         | White cross                              |",
                "| 5         | Red pointer                              |",
                "| 6         | White circle (off-map players)           |",
                "| 7         | Small white circle (far-off-map players) |",
                "| 8         | Mansion                                  |",
                "| 9         | Temple                                   |",
                "| 10-15     | Unused (blue square)                     |",
                "",
                "",
                ""
              ],
              id: "0x24"
            },
            rel_entity_move: {
              before: [
                'This packet is sent by the server when an entity moves less then 8 blocks; if an entity moves more than 8 blocks [Entity Teleport](#entity_teleport "wikilink") ([Play](#play "wikilink"), 0x4A, clientbound) should be sent instead.',
                "",
                "This packet allows at most 8 blocks movement in any direction, because short range is from -32768 to 32767. And `32768 / (128 * 32)` = 8.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x25"
            },
            entity_move_look: {
              before: [
                "This packet is sent by the server when an entity rotates and moves. Since a short range is limited from -32768 to 32767, and movement is offset of fixed-point numbers, this packet allows at most 8 blocks movement in any direction. (`-32768 / (32 * 128) == -8`)",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x26"
            },
            entity_look: {
              before: [
                "This packet is sent by the server when an entity rotates.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x27"
            },
            entity: {
              before: [
                "This packet may be used to initialize an entity.",
                "",
                "For player entities, either this packet or any move/look packet is sent every game tick. So the meaning of this packet is basically that the entity did not move/look since the last such packet.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x28"
            },
            vehicle_move: {
              before: [
                "Note that all fields use absolute positioning and do not allow for relative positioning.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x29"
            },
            open_sign_entity: {
              before: [
                'Sent when the client has placed a sign and is allowed to send [Update Sign](#update_sign "wikilink").',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x2a"
            },
            abilities: {
              before: [
                "The latter 2 floats are used to indicate the field of view and flying speed respectively, while the first byte is used to determine the value of 4 booleans.",
                ""
              ],
              after: [
                "About the flags:",
                "",
                "| Field         | Bit  |",
                "|---------------|------|",
                "| Invulnerable  | 0x01 |",
                "| Flying        | 0x02 |",
                "| Allow Flying  | 0x04 |",
                "| Creative Mode | 0x08 |",
                "",
                "",
                ""
              ],
              id: "0x2b"
            },
            combat_event: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x2c"
            },
            player_info: {
              before: [
                "Sent by the server to update the user list (<tab> in the client).",
                ""
              ],
              after: [
                'The Property field looks as in the response of [Mojang API\\#UUID -&gt; Profile + Skin/Cape](Mojang_API#UUID_->_Profile_+_Skin/Cape "wikilink"), except of course using the protocol format instead of JSON. That is, each player will usually have one property with Name \u201Ctextures\u201D and Value being a base64-encoded JSON string as documented at [Mojang API\\#UUID -&gt; Profile + Skin/Cape](Mojang_API#UUID_->_Profile_+_Skin/Cape "wikilink"). An empty properties array is also acceptable, and will cause clients to display the player with one of the two default skins depending on UUID.',
                ""
              ],
              id: "0x2d"
            },
            position: {
              before: [
                "Updates the player's position on the server. This packet will also close the \u201CDownloading Terrain\u201D screen when joining/respawning.",
                "",
                "If the distance between the last known position of the player on the server and the new position set by this packet is greater than 100 meters, the client will be kicked for \u201CYou moved too quickly :( (Hacking?)\u201D.",
                "",
                "Also if the fixed-point number of X or Z is set greater than `3.2E7D` the client will be kicked for \u201CIllegal position\u201D.",
                "",
                "Yaw is measured in degrees, and does not follow classical trigonometry rules. The unit circle of yaw on the XZ-plane starts at (0, 1) and turns counterclockwise, with 90 at (-1, 0), 180 at (0, -1) and 270 at (1, 0). Additionally, yaw is not clamped to between 0 and 360 degrees; any number is valid, including negative numbers and numbers greater than 360.",
                "",
                "Pitch is measured in degrees, where 0 is looking straight ahead, -90 is looking straight up, and 90 is looking straight down.",
                ""
              ],
              after: [
                "About the Flags field:",
                "",
                "<Dinnerbone>`\xA0It's\xA0a\xA0bitfield,\xA0X/Y/Z/Y_ROT/X_ROT.\xA0If\xA0X\xA0is\xA0set,\xA0the\xA0x\xA0value\xA0is\xA0relative\xA0and\xA0not\xA0absolute.`",
                "",
                "| Field  | Bit  |",
                "|--------|------|",
                "| X      | 0x01 |",
                "| Y      | 0x02 |",
                "| Z      | 0x04 |",
                "| Y\\_ROT | 0x08 |",
                "| X\\_ROT | 0x10 |",
                "",
                "",
                ""
              ],
              id: "0x2e"
            },
            bed: {
              before: [
                "This packet tells that a player goes to bed.",
                "",
                "The client with the matching Entity ID will go into bed mode.",
                "",
                "This Packet is sent to all nearby players including the one sent to bed.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x2f"
            },
            entity_destroy: {
              before: [
                "Sent by the server when a list of entities is to be destroyed on the client.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x30"
            },
            remove_entity_effect: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x31"
            },
            resource_pack_send: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x32"
            },
            respawn: {
              before: [
                "To change the player's dimension (overworld/nether/end), send them a respawn packet with the appropriate dimension, followed by prechunks/chunks for the new dimension, and finally a position and look packet. You do not need to unload chunks, the client will do it automatically.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x33"
            },
            entity_head_rotation: {
              before: [
                "Changes the direction an entity's head is facing.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x34"
            },
            world_border: {
              before: [
                "",
                ""
              ],
              after: [
                "The Notchian client determines how solid to display the warning by comparing to whichever is higher, the warning distance or whichever is lower, the distance from the current diameter to the target diameter or the place the border will be after warningTime seconds. In pseudocode:",
                "",
                "``` java",
                "distance = max(min(resizeSpeed * 1000 * warningTime, abs(targetDiameter - currentDiameter)), warningDistance);",
                "if (playerDistance < distance) {",
                "    warning = 1.0 - playerDistance / distance;",
                "} else {",
                "    warning = 0.0;",
                "}",
                "```",
                ""
              ],
              id: "0x35"
            },
            camera: {
              before: [
                "Sets the entity that the player renders from. This is normally used when the player left-clicks an entity while in spectator mode.",
                "",
                "The player's camera will move with the entity and look where it is looking. The entity is often another player, but can be any type of entity. The player is unable to move this entity (move packets will act as if they are coming from the other entity).",
                "",
                "If the given entity is not loaded by the player, this packet is ignored. To return control to the player, send this packet with their entity ID.",
                "",
                "The Notchian server resets this (sends it back to the default entity) whenever the spectated entity is killed or the player sneaks, but only if they were spectating an entity. It also sends this packet whenever the player switches out of spectator mode (even if they weren't spectating an entity).",
                ""
              ],
              after: [
                "The notchian also loads certain shaders for given entities:",
                "",
                "-   Creeper \u2192 `shaders/post/creeper.json`",
                "-   Spider (and cave spider) \u2192 `shaders/post/spider.json`",
                "-   Enderman \u2192 `shaders/post/invert.json`",
                "-   Anything else \u2192 the current shader is unloaded",
                "",
                ""
              ],
              id: "0x36"
            },
            held_item_slot: {
              before: [
                "Sent to change the player's slot selection.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x37"
            },
            scoreboard_display_objective: {
              before: [
                "This is sent to the client when it should display a scoreboard.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x38"
            },
            entity_metadata: {
              before: [
                'Updates one or more [metadata](Entities#Entity_Metadata_Format "wikilink") properties for an existing entity. Any properties not included in the Metadata field are left unchanged.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x39"
            },
            attach_entity: {
              before: [
                "This packet is sent when an entity has been to another entity.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x3a"
            },
            entity_velocity: {
              before: [
                "Velocity is believed to be in units of 1/8000 of a block per server tick (50ms); for example, -1343 would move (-1343 / 8000) = \u22120.167875 blocks per tick (or \u22123,3575 blocks per second).",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x3b"
            },
            entity_equipment: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x3c"
            },
            experience: {
              before: [
                "Sent by the server when the client should change experience levels.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x3d"
            },
            update_health: {
              before: [
                "Sent by the server to update/set the health of the player it is sent to.",
                "",
                "Food acts as a food \u201Covercharge\u201D. Food values will not decrease while the saturation is over zero. Players logging in automatically get a saturation of 5.0. Eating food increases the saturation as well as the food bar.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x3e"
            },
            scoreboard_objective: {
              before: [
                "This is sent to the client when it should create a new objective or remove one.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x3f"
            },
            set_passengers: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x40"
            },
            teams: {
              before: [
                "Creates and updates teams.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x41"
            },
            scoreboard_score: {
              before: [
                "This is sent to the client when it should update a scoreboard item.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x42"
            },
            spawn_position: {
              before: [
                "Sent by the server after login to specify the coordinates of the spawn point (the point at which players spawn at, and which the compass points to). It can be sent at any time to update the point compasses point at.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x43"
            },
            update_time: {
              before: [
                "Time is based on ticks, where 20 ticks happen every second. There are 24000 ticks in a day, making Minecraft days exactly 20 minutes long.",
                "",
                "The time of day is based on the timestamp modulo 24000. 0 is sunrise, 6000 is noon, 12000 is sunset, and 18000 is midnight.",
                "",
                "The default SMP server increments the time by `20` every second.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x44"
            },
            title: {
              before: [
                "",
                ""
              ],
              after: [
                "\u201CHide\u201D makes the title disappear, but if you run times again the same title will appear. \u201CReset\u201D erases the text.",
                "",
                "The title is visible on screen for Fade In + Stay + Fade Out ticks.",
                ""
              ],
              id: "0x45"
            },
            sound_effect: {
              before: [
                'This packet is used to play a number of hardcoded sound events. For custom sounds, use [Named Sound Effect](#named_sound_effect "wikilink") ([Play](#play "wikilink"), 0x19, clientbound).',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x46"
            },
            playerlist_header: {
              before: [
                "This packet may be used by custom servers to display additional information above/below the player list. It is never sent by the Notchian server.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x47"
            },
            collect: {
              before: [
                `Sent by the server when someone picks up an item lying on the ground \u2014 its sole purpose appears to be the animation of the item flying towards you. It doesn't destroy the entity in the client memory, and it doesn't add it to your inventory. The server only checks for items to be picked up after each [Player Position](#player_position "wikilink") (and [Player Position And Look](#player_position_and_look "wikilink")) packet sent by the client.`,
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x48"
            },
            entity_teleport: {
              before: [
                "This packet is sent by the server when an entity moves more than 4 blocks.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x49"
            },
            entity_update_attributes: {
              before: [
                "Sets on the given entity.",
                ""
              ],
              after: [
                "Known Key values (see also ):",
                "",
                "| Key                         | Default           | Min | Max    | Label                       |",
                "|-----------------------------|-------------------|-----|--------|-----------------------------|",
                "| generic.maxHealth           | 20.0              | 0.0 | 1024.0 | Max Health                  |",
                "| generic.followRange         | 32.0              | 0.0 | 2048.0 | Follow Range                |",
                "| generic.knockbackResistance | 0.0               | 0.0 | 1.0    | Knockback Resistance        |",
                "| generic.movementSpeed       | 0.699999988079071 | 0.0 | 1024.0 | Movement Speed              |",
                "| generic.attackDamage        | 2.0               | 0.0 | 2048.0 | Attack Damage               |",
                "| generic.attackSpeed         | 4.0               | 0.0 | 1024.0 | Attack Speed                |",
                "| horse.jumpStrength          | 0.7               | 0.0 | 2.0    | Jump Strength               |",
                "| zombie.spawnReinforcements  | 0.0               | 0.0 | 1.0    | Spawn Reinforcements Chance |",
                "",
                "*Modifier Data* structure:",
                "",
                "| Field Name | Field Type | Notes                       |",
                "|------------|------------|-----------------------------|",
                "| UUID       | UUID       |                             |",
                "| Amount     | Double     | May be positive or negative |",
                "| Operation  | Byte       | See below                   |",
                "",
                "The operation controls how the base value of the modifier is changed.",
                "",
                "-   0: Add/subtract amount",
                "-   1: Add/subtract amount percent of the current value",
                "-   2: Multiply by amount percent",
                "",
                "All of the 0's are applied first, and then the 1's, and then the 2's.",
                ""
              ],
              id: "0x4a"
            },
            entity_effect: {
              before: [
                "",
                ""
              ],
              after: [
                "Within flags:",
                "",
                '-   0x01: Is ambient - was the effect spawned from a beacon? All beacon-generated effects are ambient. Ambient effects use a different icon in the HUD (blue border rather than gray). If all effects on an entity are ambient, the [\u201CIs potion effect ambient\u201D living metadata field](Entities#Living "wikilink") should be set to true. Usually should not be enabled.',
                "-   0x02: Show particles - should all particles from this effect be hidden? Effects with particles hidden are not included in the calculation of the effect color, and are not rendered on the HUD (but are still rendered within the inventory). Usually should be enabled.",
                "",
                ""
              ],
              id: "0x4b"
            },
            spawn_entity_painting: {
              before: [
                "This packet shows location, name, and type of painting.",
                ""
              ],
              after: [
                "Calculating the center of an image: given a (width \xD7 height) grid of cells, with `(0, 0)` being the top left corner, the center is `(max(0, width / 2 - 1), height / 2)`. E.g. `(1, 0)` for a 2\xD71 painting, or `(1, 2)` for a 4\xD74 painting.",
                "",
                "List of paintings by coordinates in `paintings_kristoffer_zetterstrand.png` (where x and y are in pixels from the top left and width and height are in pixels or 16ths of a block):",
                "",
                "| Name            | x   | y   | width | height |",
                "|-----------------|-----|-----|-------|--------|",
                "| `Kebab`         | 0   | 0   | 16    | 16     |",
                "| `Aztec`         | 16  | 0   | 16    | 16     |",
                "| `Alban`         | 32  | 0   | 16    | 16     |",
                "| `Aztec2`        | 48  | 0   | 16    | 16     |",
                "| `Bomb`          | 64  | 0   | 16    | 16     |",
                "| `Plant`         | 80  | 0   | 16    | 16     |",
                "| `Wasteland`     | 96  | 0   | 16    | 16     |",
                "| `Pool`          | 0   | 32  | 32    | 16     |",
                "| `Courbet`       | 32  | 32  | 32    | 16     |",
                "| `Sea`           | 64  | 32  | 32    | 16     |",
                "| `Sunset`        | 96  | 32  | 32    | 16     |",
                "| `Creebet`       | 128 | 32  | 32    | 16     |",
                "| `Wanderer`      | 0   | 64  | 16    | 32     |",
                "| `Graham`        | 16  | 64  | 16    | 32     |",
                "| `Match`         | 0   | 128 | 32    | 32     |",
                "| `Bust`          | 32  | 128 | 32    | 32     |",
                "| `Stage`         | 64  | 128 | 32    | 32     |",
                "| `Void`          | 96  | 128 | 32    | 32     |",
                "| `SkullAndRoses` | 128 | 128 | 32    | 32     |",
                "| `Wither`        | 160 | 128 | 32    | 32     |",
                "| `Fighters`      | 0   | 96  | 64    | 32     |",
                "| `Pointer`       | 0   | 192 | 64    | 64     |",
                "| `Pigscene`      | 64  | 192 | 64    | 64     |",
                "| `BurningSkull`  | 128 | 192 | 64    | 64     |",
                "| `Skeleton`      | 192 | 64  | 64    | 48     |",
                "| `DonkeyKong`    | 192 | 112 | 64    | 48     |",
                "",
                "The also provides a list of painting names to the actual images.",
                ""
              ],
              id: "0x04"
            },
            spawn_entity: {
              before: [
                "Sent by the server when a vehicle or other object is created.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x00"
            },
            spawn_entity_experience_orb: {
              before: [
                "Spawns one or more experience orbs.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x01"
            },
            animation: {
              before: [
                "Sent whenever an entity should change animation.",
                ""
              ],
              after: [
                "Animation can be one of the following values:",
                "",
                "| ID  | Animation             |",
                "|-----|-----------------------|",
                "| 0   | Swing main arm        |",
                "| 1   | Take damage           |",
                "| 2   | Leave bed             |",
                "| 3   | Swing offhand         |",
                "| 4   | Critical effect       |",
                "| 5   | Magic critical effect |",
                "",
                "",
                ""
              ],
              id: "0x06"
            },
            statistics: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x07"
            },
            boss_bar: {
              before: [
                "",
                ""
              ],
              after: [
                "| ID  | Color  |",
                "|-----|--------|",
                "| 0   | Pink   |",
                "| 1   | Blue   |",
                "| 2   | Red    |",
                "| 3   | Green  |",
                "| 4   | Yellow |",
                "| 5   | Purple |",
                "| 6   | White  |",
                "",
                "| ID  | Type of division |",
                "|-----|------------------|",
                "| 0   | No division      |",
                "| 1   | 6 notches        |",
                "| 2   | 10 notches       |",
                "| 3   | 12 notches       |",
                "| 4   | 20 notches       |",
                "",
                "",
                ""
              ],
              id: "0x0c"
            },
            spawn_entity_weather: {
              before: [
                "With this packet, the server notifies the client of thunderbolts striking within a 512 block radius around the player. The coordinates specify where exactly the thunderbolt strikes.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x02"
            },
            block_action: {
              before: [
                "This packet is used for a number of actions and animations performed by blocks, usually non-persistent.",
                "",
                'See [Block Actions](Block_Actions "wikilink") for a list of values.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0a"
            },
            block_change: {
              before: [
                "Fired whenever a block is changed within the render distance.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0b"
            },
            named_entity_spawn: {
              before: [
                "This packet is sent by the server when a player comes into visible range, *not* when a player joins.",
                "",
                'This packet must be sent after the [Player List Item](#player_list_item "wikilink") ([Play](#play "wikilink"), 0x38, clientbound) packet that adds the player data for the client to use when spawning a player. If the Player List Item for the player spawned by this packet is not present when this packet arrives, Notchian clients will not spawn the player entity. The Player List Item packet includes skin/cape data.',
                "",
                "Servers can, however, safely spawn player entities for players not in visible range. The client appears to handle it correctly.",
                ""
              ],
              after: [
                "When in , the UUIDs must be valid and have valid skin blobs.",
                "",
                'In offline mode, [UUID v3](Wikipedia:Universally_unique_identifier#Versions_3_and_5_(namespace_name-based) "wikilink") is used with the String `OfflinePlayer:<player name>`, encoded in UTF-8 (and case-sensitive).',
                "",
                "For NPCs UUID v2 should be used. Note:",
                "",
                "`<+Grum>\xA0i\xA0will\xA0never\xA0confirm\xA0this\xA0as\xA0a\xA0feature\xA0you\xA0know\xA0that\xA0:)`",
                "",
                "In an example UUID, `xxxxxxxx-xxxx-Yxxx-xxxx-xxxxxxxxxxxx`, the UUID version is specified by `Y`. So, for UUID v3, `Y` will always be `3`, and for UUID v2, `Y` will always be `2`.",
                ""
              ],
              id: "0x05"
            },
            spawn_entity_living: {
              before: [
                "Sent by the server when a mob entity is spawned.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x03"
            }
          },
          toServer: {
            teleport_confirm: {
              before: [
                'Sent by client as confirmation of [Player Position And Look](#player_position_and_look "wikilink") ([Play](#play "wikilink"), 0x2E, clientbound).',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x00"
            },
            tab_complete: {
              before: [
                "Sent when the user presses *tab* while writing text.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x01"
            },
            chat: {
              before: [
                "Used to send a chat message to the server. The message may not be longer than 256 characters or else the server will kick the client.",
                "",
                'If the message starts with a `/`, the server will attempt to interpret it as a command. Otherwise, the server will broadcast the same chat message to all players on the server (including the player that sent the message), prepended with player\'s name. Specifically, it will respond with a translate [chat](chat "wikilink") component, \u201C`chat.type.text`\u201D with the first parameter set to the display name of the player (including some chat component logic to support clicking the name to send a PM) and the second parameter set to the message.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x02"
            },
            client_command: {
              before: [
                "Sent when the client is ready to complete login and when the client is ready to respawn after death.",
                ""
              ],
              after: [
                "*Action ID* values:",
                "",
                "| Action ID | Action          |",
                "|-----------|-----------------|",
                "| 0         | Perform respawn |",
                "| 1         | Request stats   |",
                "| 2         | Open inventory  |",
                "",
                "",
                ""
              ],
              id: "0x03"
            },
            settings: {
              before: [
                "Sent when the player connects, or when settings are changed.",
                ""
              ],
              after: [
                "*Displayed Skin Parts* flags:",
                "",
                "-   Bit 0 (0x01): Cape enabled",
                "-   Bit 1 (0x02): Jacket enabled",
                "-   Bit 2 (0x04): Left Sleeve enabled",
                "-   Bit 3 (0x08): Right Sleeve enabled",
                "-   Bit 4 (0x10): Left Pants Leg enabled",
                "-   Bit 5 (0x20): Right Pants Leg enabled",
                "-   Bit 6 (0x40): Hat enabled",
                "",
                "The most significant bit (bit 7, 0x80) appears to be unused.",
                ""
              ],
              id: "0x04"
            },
            transaction: {
              before: [
                'If a transaction sent by the client was not accepted, the server will reply with a [Confirm Transaction (clientbound)](#confirm_transaction "wikilink") packet with the Accepted field set to false. When this happens, the client must send this packet to apologize (as with movement), otherwise the server ignores any successive transactions.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x05"
            },
            enchant_item: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x06"
            },
            window_click: {
              before: [
                "This packet is sent by the player when it clicks on a slot in a window.",
                ""
              ],
              after: [
                'See [Inventory](Inventory "wikilink") for further information about how slots are indexed.',
                "",
                "When right-clicking on a stack of items, half the stack will be picked up and half left in the slot. If the stack is an odd number, the half left in the slot will be smaller of the amounts.",
                "",
                "The distinct type of click performed by the client is determined by the combination of the Mode and Button fields.",
                "",
                "| Mode | Button   | Slot                                                                                                                                                                                                                                        | Trigger                                                                    |",
                "|------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|",
                "| 0    | 0        | Normal                                                                                                                                                                                                                                      | Left mouse click                                                           |",
                "| 1    | Normal   | Right mouse click                                                                                                                                                                                                                           |",
                "| 1    | 0        | Normal                                                                                                                                                                                                                                      | Shift + left mouse click                                                   |",
                "| 1    | Normal   | Shift + right mouse click *(identical behavior)*                                                                                                                                                                                            |",
                "| 2    | 0        | Normal                                                                                                                                                                                                                                      | Number key 1                                                               |",
                "| 1    | Normal   | Number key 2                                                                                                                                                                                                                                |",
                "| 2    | Normal   | Number key 3                                                                                                                                                                                                                                |",
                "| \u22EE    | \u22EE        | \u22EE                                                                                                                                                                                                                                           |",
                "| 8    | Normal   | Number key 9                                                                                                                                                                                                                                |",
                "| 3    | 2        | Normal                                                                                                                                                                                                                                      | Middle click, only defined for creative players in non-player inventories. |",
                "| 4    | 0        | Normal\\*                                                                                                                                                                                                                                    | Drop key (Q) (\\* Clicked item is different, see above)                     |",
                "| 1    | Normal\\* | Ctrl + Drop key (Ctrl-Q) *(drops full stack)*                                                                                                                                                                                               |",
                "| 0    | -999     | Left click outside inventory holding nothing *(no-op)*                                                                                                                                                                                      |",
                "| 1    | -999     | Right click outside inventory holding nothing *(no-op)*                                                                                                                                                                                     |",
                "| 5    | 0        | -999                                                                                                                                                                                                                                        | Starting left mouse drag                                                   |",
                "| 4    | -999     | Starting right mouse drag                                                                                                                                                                                                                   |",
                "| 8    | -999     | Starting middle mouse drag, only defined for creative players in non-player inventories. (Note: the vanilla client will still incorrectly send this for non-creative players - see [MC-46584](https://bugs.mojang.com/browse/MC-46584))     |",
                "| 1    | Normal   | Add slot for left-mouse drag                                                                                                                                                                                                                |",
                "| 5    | Normal   | Add slot for right-mouse drag                                                                                                                                                                                                               |",
                "| 9    | Normal   | Add slot for middle-mouse drag, only defined for creative players in non-player inventories. (Note: the vanilla client will still incorrectly send this for non-creative players - see [MC-46584](https://bugs.mojang.com/browse/MC-46584)) |",
                "| 2    | -999     | Ending left mouse drag                                                                                                                                                                                                                      |",
                "| 6    | -999     | Ending right mouse drag                                                                                                                                                                                                                     |",
                "| 10   | -999     | Ending middle mouse drag, only defined for creative players in non-player inventories. (Note: the vanilla client will still incorrectly send this for non-creative players - see [MC-46584](https://bugs.mojang.com/browse/MC-46584))       |",
                "| 6    | 0        | Normal                                                                                                                                                                                                                                      | Double click                                                               |",
                "",
                "Starting from version 1.5, \u201Cpainting mode\u201D is available for use in inventory windows. It is done by picking up stack of something (more than 1 item), then holding mouse button (left, right or middle) and dragging held stack over empty (or same type in case of right button) slots. In that case client sends the following to server after mouse button release (omitting first pickup packet which is sent as usual):",
                "",
                "1.  packet with mode 5, slot -999, button (0 for left | 4 for right);",
                "2.  packet for every slot painted on, mode is still 5, button (1 | 5);",
                "3.  packet with mode 5, slot -999, button (2 | 6);",
                "",
                "If any of the painting packets other than the \u201Cprogress\u201D ones are sent out of order (for example, a start, some slots, then another start; or a left-click in the middle) the painting status will be reset.",
                "",
                'The server will send back a [Confirm Transaction](#confirm_transaction "wikilink") packet. If the click was not accepted, the client must send a matching [serverbound confirm transaction](#confirm_transaction "wikilink") packet before sending more [Click Window](#click_window "wikilink") packets, otherwise the server will reject them silently. The Notchian server also sends a [Window Items](#window_items "wikilink") packet for the open window and [Set Slot](#set_slot "wikilink") packets for the clicked and cursor slot, but only when the click was not accepted, probably to resynchronize client and server.',
                ""
              ],
              id: "0x07"
            },
            close_window: {
              before: [
                "This packet is sent by the client when closing a window.",
                "",
                'Notchian clients send a Close Window packet with Window ID 0 to close their inventory even though there is never an [Open Window](#open_window "wikilink") packet for the inventory.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x08"
            },
            custom_payload: {
              before: [
                'Mods and plugins can use this to send their data. Minecraft itself uses a number of [plugin channels](plugin_channel "wikilink"). These internal channels are prefixed with `MC|`.',
                "",
                "More documentation on this: [<http://dinnerbone.com/blog/2012/01/13/minecraft-plugin-channels-messaging/>](http://dinnerbone.com/blog/2012/01/13/minecraft-plugin-channels-messaging/)",
                "",
                "Note that the length of Data is known only from the packet length, since the packet has no length field of any kind.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x09"
            },
            use_entity: {
              before: [
                "This packet is sent from the client to the server when the client attacks or right-clicks another entity (a player, minecart, etc).",
                "",
                "A Notchian server only accepts this packet if the entity being attacked/used is visible without obstruction and within a 4-unit radius of the player's position.",
                "",
                'Note that middle-click in creative mode is interpreted by the client and sent as a [Creative Inventory Action](#creative_inventory_action "wikilink") packet instead.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0a"
            },
            keep_alive: {
              before: [
                "The server will frequently send out a keep-alive, each containing a random ID. The client must respond with the same packet.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0b"
            },
            position: {
              before: [
                "Updates the player's XYZ position on the server.",
                "",
                "Checking for moving too fast is achieved like this:",
                "",
                "-   Each server tick, the player's current position is stored",
                "-   When a player moves, the changes in x, y, and z coordinates are compared with the positions from the previous tick (\u0394x, \u0394y, \u0394z)",
                "-   Total movement distance squared is computed as \u0394x\xB2 + \u0394y\xB2 + \u0394z\xB2",
                "-   The expected movement distance squared is computed as velocityX\xB2 + veloctyY\xB2 + velocityZ\xB2",
                "-   If the total movement distance squared value minus the expected movement distance squared value is more than 100 (300 if the player is using an elytra), they are moving too fast.",
                "",
                'If the player is moving too fast, it will be logged that "<player> moved too quickly! " followed by the change in x, y, and z, and the player will be teleported back to their current (before this packet) serverside position.',
                "",
                "Also, if the absolute value of X or the absolute value of Z is a value greater than 3.2\xD710<sup>7</sup>, or X, Y, or Z are not finite (either positive infinity, negative infinity, or NaN), the client will be kicked for \u201CInvalid move player packet received\u201D.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0c"
            },
            position_look: {
              before: [
                'A combination of [Player Look](#player_look "wikilink") and [Player Position](#player_position "wikilink").',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0d"
            },
            look: {
              before: [
                '![The unit circle for yaw](Minecraft-trig-yaw.png "fig:The unit circle for yaw") ![The unit circle of yaw, redrawn](Yaw.png "fig:The unit circle of yaw, redrawn")',
                "",
                "Updates the direction the player is looking in.",
                "",
                "Yaw is measured in degrees, and does not follow classical trigonometry rules. The unit circle of yaw on the XZ-plane starts at (0, 1) and turns counterclockwise, with 90 at (-1, 0), 180 at (0,-1) and 270 at (1, 0). Additionally, yaw is not clamped to between 0 and 360 degrees; any number is valid, including negative numbers and numbers greater than 360.",
                "",
                "Pitch is measured in degrees, where 0 is looking straight ahead, -90 is looking straight up, and 90 is looking straight down.",
                "",
                "The yaw and pitch of player (in degrees), standing at point (x0, y0, z0) and looking towards point (x, y, z) can be calculated with:",
                "",
                "`dx\xA0=\xA0x-x0`",
                "`dy\xA0=\xA0y-y0`",
                "`dz\xA0=\xA0z-z0`",
                "`r\xA0=\xA0sqrt(\xA0dx*dx\xA0+\xA0dy*dy\xA0+\xA0dz*dz\xA0)`",
                "`yaw\xA0=\xA0-atan2(dx,dz)/PI*180`",
                "`if\xA0yaw\xA0<\xA00\xA0then`",
                "`\xA0\xA0\xA0\xA0yaw\xA0=\xA0360\xA0-\xA0yaw`",
                "`pitch\xA0=\xA0-arcsin(dy/r)/PI*180`",
                "",
                "You can get a unit vector from a given yaw/pitch via:",
                "",
                "`x\xA0=\xA0-cos(pitch)\xA0*\xA0sin(yaw)`",
                "`y\xA0=\xA0-sin(pitch)`",
                "`z\xA0=\xA0\xA0cos(pitch)\xA0*\xA0cos(yaw)`",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0e"
            },
            flying: {
              before: [
                'This packet as well as [Player Position](#player_position "wikilink") ([Play](#play "wikilink"), 0x04, serverbound), [Player Look](#player_look "wikilink") ([Play](#play "wikilink"), 0x05, serverbound), and [Player Position And Look](#player_position_and_look_2 "wikilink") ([Play](#play "wikilink"), 0x06, serverbound) are called the \u201Cserverbound movement packets\u201D. At least one of them must be sent on each tick to ensure that servers will update things like player health correctly. Vanilla clients will send Player Position once every 20 ticks even for a stationary player, and Player on every other tick.',
                "",
                "This packet is used to indicate whether the player is on ground (walking/swimming), or airborne (jumping/falling).",
                "",
                "When dropping from sufficient height, fall damage is applied when this state goes from false to true. The amount of damage applied is based on the point where it last changed from true to false. Note that there are several movement related packets containing this state.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x0f"
            },
            vehicle_move: {
              before: [
                'Sent when a player moves in a vehicle. Fields are the same as in [Player Position And Look](#player_position_and_look "wikilink") ([Play](#play "wikilink"), 0x2E, serverbound). Note that all fields use absolute positioning and do not allow for relative positioning.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x10"
            },
            steer_boat: {
              before: [
                'Used to *visually* update whether boat paddles are turning. The server will update the [Boat entity metadata](Entities#Boat "wikilink") to match the values here.',
                ""
              ],
              after: [
                "Right paddle turning is set to true when the left button or forward button is held; left paddle turning is set to true when the right button or forward button is set to true.",
                ""
              ],
              id: "0x11"
            },
            abilities: {
              before: [
                "The latter 2 bytes are used to indicate the walking and flying speeds respectively, while the first byte is used to determine the value of 4 booleans.",
                "",
                "The vanilla client sends this packet when the player starts/stops flying with the Flags parameter changed accordingly. All other parameters are ignored by the vanilla server.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x12"
            },
            block_dig: {
              before: [
                "Sent when the player mines a block. A Notchian server only accepts digging packets with coordinates within a 6-unit radius between the center of the block and 1.5 units from the player's feet (*not* their eyes).",
                ""
              ],
              after: [
                "Status can be one of seven values:",
                "",
                "| Value | Meaning                     | Notes                                                                                                                                                                                      |",
                "|-------|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|",
                "| 0     | Started digging             |                                                                                                                                                                                            |",
                "| 1     | Cancelled digging           | Sent when the player lets go of the Mine Block key (default: left click)                                                                                                                   |",
                "| 2     | Finished digging            | Sent when the client thinks it is finished                                                                                                                                                 |",
                "| 3     | Drop item stack             | Triggered by using the Drop Item key (default: Q) with the modifier to drop the entire selected stack (default: depends on OS). Location is always set to 0/0/0, Face is always set to -Y. |",
                "| 4     | Drop item                   | Triggered by using the Drop Item key (default: Q). Location is always set to 0/0/0, Face is always set to -Y.                                                                              |",
                "| 5     | Shoot arrow / finish eating | Location is always set to 0/0/0, Face is always set to Special.                                                                                                                            |",
                "| 6     | Swap item in hand           | Used to swap or assign an item to the second hand. Location is always set to 0/0/0, Face is always set to -Y.                                                                              |",
                "",
                "The Face field can be one of the following values, representing the face being hit (or the Special value used for \u201Cshoot arrow / finish eating\u201D):",
                "",
                "| Value | Offset | Face    |",
                "|-------|--------|---------|",
                "| 0     | -Y     | Bottom  |",
                "| 1     | +Y     | Top     |",
                "| 2     | -Z     | North   |",
                "| 3     | +Z     | South   |",
                "| 4     | -X     | West    |",
                "| 5     | +X     | East    |",
                "| 255   | \u2014      | Special |",
                "",
                "",
                ""
              ],
              id: "0x13"
            },
            entity_action: {
              before: [
                "Sent by the client to indicate that it has performed certain actions: sneaking (crouching), sprinting, exiting a bed, jumping with a horse, and opening a horse's inventory while riding it.",
                ""
              ],
              after: [
                "Action ID can be one of the following values:",
                "",
                "| ID  | Action                   |",
                "|-----|--------------------------|",
                "| 0   | Start sneaking           |",
                "| 1   | Stop sneaking            |",
                "| 2   | Leave bed                |",
                "| 3   | Start sprinting          |",
                "| 4   | Stop sprinting           |",
                "| 5   | Start jump with horse    |",
                "| 6   | Stop jump with horse     |",
                "| 7   | Open horse inventory     |",
                "| 8   | Start flying with elytra |",
                "",
                "Leave bed is only sent when the \u201CLeave Bed\u201D button is clicked on the sleep GUI, not when waking up due today time.",
                "",
                "Open horse inventory is only sent when pressing the inventory key (default: E) while on a horse \u2014 all other methods of opening a horse's inventory (involving right-clicking or shift-right-clicking it) do not use this packet.",
                "",
                '\u201COpen inventory\u201D is now sent via the [Client Status](#client_status "wikilink") ([Play](#play "wikilink"), 0x03, serverbound) packet.',
                ""
              ],
              id: "0x14"
            },
            resource_pack_receive: {
              before: [
                "",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x16"
            },
            held_item_slot: {
              before: [
                "Sent when the player changes the slot selection",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x17"
            },
            spectate: {
              before: [
                "Teleports the player to the given entity. The player must be in spectator mode.",
                "",
                "The Notchian client only uses this to teleport to players, but it appears to accept any type of entity. The entity does not need to be in the same dimension as the player; if necessary, the player will be respawned in the right world. If the given entity cannot be found (or isn't loaded), this packet will be ignored. It will also be ignored if the player attempts to teleport to themselves.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x1b"
            },
            use_item: {
              before: [
                "Sent when pressing the Use Item key (default: right click) with an item in hand.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x1d"
            },
            update_sign: {
              before: [
                "This message is sent from the client to the server when the \u201CDone\u201D button is pushed after placing a sign.",
                "",
                'The server only accepts this packet after [Open Sign Editor](#open_sign_editor "wikilink") ([Play](#play "wikilink"), 0x2A, clientbound), otherwise this packet is silently ignored.',
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x19"
            },
            set_creative_slot: {
              before: [
                "While the user is in the standard inventory (i.e., not a crafting bench) in Creative mode, the player will send this packet.",
                "",
                "Clicking in the creative inventory menu is quite different from non-creative inventory management. Picking up an item with the mouse actually deletes the item from the server, and placing an item into a slot or dropping it out of the inventory actually tells the server to create the item from scratch. (This can be verified by clicking an item that you don't mind deleting, then severing the connection to the server; the item will be nowhere to be found when you log back in.) As a result of this implementation strategy, the \u201CDestroy Item\u201D slot is just a client-side implementation detail that means \u201CI don't intend to recreate this item.\u201D. Additionally, the long listings of items (by category, etc.) are a client-side interface for choosing which item to create. Picking up an item from such listings sends no packets to the server; only when you put it somewhere does it tell the server to create the item in that location.",
                "",
                "This action can be described as \u201Cset inventory slot\u201D. Picking up an item sets the slot to item ID -1. Placing an item into an inventory slot sets the slot to the specified item. Dropping an item (by clicking outside the window) effectively sets slot -1 to the specified item, which causes the server to spawn the item entity, etc.. All other inventory slots are numbered the same as the non-creative inventory (including slots for the 2x2 crafting menu, even though they aren't visible in the vanilla client).",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x18"
            },
            steer_vehicle: {
              before: [
                "",
                ""
              ],
              after: [
                "Also known as 'Input' packet.",
                ""
              ],
              id: "0x15"
            },
            arm_animation: {
              before: [
                "Sent when the player's arm swings.",
                ""
              ],
              after: [
                "",
                ""
              ],
              id: "0x1a"
            },
            block_place: {
              before: [
                "",
                ""
              ],
              after: [
                "In normal operation (i.e. placing a block), this packet is sent once, with the values set normally.",
                "",
                "The Cursor Position X/Y/Z fields (also known as in-block coordinates) are calculated using raytracing. The unit corresponds to sixteen pixel in the default resource pack. For example, let's say a slab is being placed against the south face of a full block. The Cursor Position X will be higher if the player was pointing near the right (east) edge of the face, lower if pointing near the left. The Cursor Position Y will be used to determine whether it will appear as a bottom slab (values 0.0\u20130.5) or as a top slab (values 0.5-1.0). The Cursor Position Z should be 1.0 since the player was looking at the southernmost part of the block.",
                "",
                "This packet has a special case where X, Y, Z, and Face are all -1. (Note that Y is unsigned so set to 255.) This special packet indicates that the currently held item for the player should have its state updated such as eating food, pulling back bows, using buckets, etc.",
                "",
                "Special note on using buckets: When using buckets, the Notchian client might send two packets: first a normal and then a special case. The first normal packet is sent when you're looking at a block (e.g. the water you want to scoop up). This normal packet does not appear to do anything with a Notchian server. The second, special case packet appears to perform the action \u2014 based on current position/orientation and with a distance check \u2014 it appears that buckets can only be used within a radius of 6 units.",
                ""
              ],
              id: "0x1c"
            }
          }
        }
      };
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/windows.json
  var require_windows = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/windows.json"(exports, module) {
      module.exports = [
        {
          id: "",
          name: "Player",
          slots: [
            {
              name: "craft result",
              index: 0
            },
            {
              name: "craft grid",
              index: 1,
              size: 4
            },
            {
              name: "armor",
              index: 5,
              size: 4
            },
            {
              name: "helmet",
              index: 5
            },
            {
              name: "chestplate",
              index: 6
            },
            {
              name: "leggings",
              index: 7
            },
            {
              name: "boots",
              index: 8
            }
          ]
        },
        {
          id: "EntityHorse",
          name: "Horse",
          slots: [
            {
              name: "saddle",
              index: 0
            },
            {
              name: "armor",
              index: 1
            },
            {
              name: "storage",
              index: 2,
              size: 15
            }
          ],
          openedWith: [
            {
              type: "entity",
              id: 100
            }
          ]
        },
        {
          id: "minecraft:anvil",
          name: "Anvil",
          slots: [
            {
              name: "tool",
              index: 0
            },
            {
              name: "combined",
              index: 1
            },
            {
              name: "result",
              index: 2
            }
          ],
          properties: [
            "repair cost"
          ]
        },
        {
          id: "minecraft:beacon",
          name: "Beacon",
          slots: [
            {
              name: "input",
              index: 0
            }
          ],
          properties: [
            "level",
            "effect 1",
            "effect 2"
          ],
          openedWith: [
            {
              type: "block",
              id: 138
            }
          ]
        },
        {
          id: "minecraft:brewing_stand",
          name: "Brewing Stand",
          slots: [
            {
              name: "ingredient",
              index: 0
            },
            {
              name: "result",
              index: 1,
              size: 3
            }
          ],
          properties: [
            "brew time"
          ],
          openedWith: [
            {
              type: "block",
              id: 117
            }
          ]
        },
        {
          id: "minecraft:chest",
          name: "Chest"
        },
        {
          id: "minecraft:container",
          name: "Container"
        },
        {
          id: "minecraft:crafting_table",
          name: "Workbench",
          slots: [
            {
              name: "craft result",
              index: 0
            },
            {
              name: "craft grid",
              index: 1,
              size: 9
            }
          ]
        },
        {
          id: "minecraft:dispenser",
          name: "Dispenser"
        },
        {
          id: "minecraft:dropper",
          name: "Dropper"
        },
        {
          id: "minecraft:enchanting_table",
          name: "Enchantment Table",
          slots: [
            {
              name: "enchanted",
              index: 0
            },
            {
              name: "lapis",
              index: 1
            }
          ],
          properties: [
            "xp 1",
            "xp 2",
            "xp 3",
            "seed",
            "tooltip 1",
            "tooltip 2",
            "tooltip 3"
          ]
        },
        {
          id: "minecraft:furnace",
          name: "Furnace",
          slots: [
            {
              name: "smelted",
              index: 0
            },
            {
              name: "fuel",
              index: 1
            },
            {
              name: "result",
              index: 2
            }
          ],
          properties: [
            "fuel",
            "fuel max",
            "progress",
            "progress max"
          ]
        },
        {
          id: "minecraft:hopper",
          name: "Hopper"
        },
        {
          id: "minecraft:villager",
          name: "NPC Trade",
          slots: [
            {
              name: "give 1",
              index: 0
            },
            {
              name: "give 2",
              index: 1
            },
            {
              name: "take",
              index: 2
            }
          ]
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/version.json
  var require_version = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/version.json"(exports, module) {
      module.exports = {
        minecraftVersion: "1.11",
        version: 315,
        majorVersion: "1.11"
      };
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/language.json
  var require_language = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/language.json"(exports, module) {
      module.exports = {
        "language.name": "English",
        "language.region": "United States",
        "language.code": "en_us",
        "gui.done": "Done",
        "gui.cancel": "Cancel",
        "gui.back": "Back",
        "gui.toTitle": "Back to title screen",
        "gui.toMenu": "Back to server list",
        "gui.up": "Up",
        "gui.down": "Down",
        "gui.yes": "Yes",
        "gui.no": "No",
        "gui.none": "None",
        "gui.all": "All",
        "translation.test.none": "Hello, world!",
        "translation.test.complex": "Prefix, %s%2$s again %s and %1$s lastly %s and also %1$s again!",
        "translation.test.escape": "%%s %%%s %%%%s %%%%%s",
        "translation.test.invalid": "hi %",
        "translation.test.invalid2": "hi %  s",
        "translation.test.args": "%s %s",
        "translation.test.world": "world",
        "menu.game": "Game Menu",
        "menu.singleplayer": "Singleplayer",
        "menu.multiplayer": "Multiplayer",
        "menu.online": "Minecraft Realms",
        "menu.options": "Options...",
        "menu.quit": "Quit Game",
        "menu.returnToMenu": "Save and Quit to Title",
        "menu.disconnect": "Disconnect",
        "menu.returnToGame": "Back to Game",
        "menu.generatingLevel": "Generating world",
        "menu.loadingLevel": "Loading world",
        "menu.generatingTerrain": "Building terrain",
        "menu.convertingLevel": "Converting world",
        "menu.respawning": "Respawning",
        "menu.shareToLan": "Open to LAN",
        "selectWorld.title": "Select World",
        "selectWorld.empty": "empty",
        "selectWorld.world": "World",
        "selectWorld.select": "Play Selected World",
        "selectWorld.create": "Create New World",
        "selectWorld.recreate": "Re-Create",
        "selectWorld.createDemo": "Play New Demo World",
        "selectWorld.delete": "Delete",
        "selectWorld.edit": "Edit",
        "selectWorld.edit.title": "Edit World",
        "selectWorld.edit.resetIcon": "Reset Icon",
        "selectWorld.edit.openFolder": "Open Folder",
        "selectWorld.edit.save": "Save World",
        "selectWorld.deleteQuestion": "Are you sure you want to delete this world?",
        "selectWorld.deleteWarning": "will be lost forever! (A long time!)",
        "selectWorld.deleteButton": "Delete",
        "selectWorld.conversion": "Must be converted!",
        "selectWorld.newWorld": "New World",
        "selectWorld.newWorld.copyOf": "Copy of %s",
        "selectWorld.enterName": "World Name",
        "selectWorld.resultFolder": "Will be saved in:",
        "selectWorld.enterSeed": "Seed for the world generator",
        "selectWorld.seedInfo": "Leave blank for a random seed",
        "selectWorld.cheats": "Cheats",
        "selectWorld.customizeType": "Customize",
        "selectWorld.version": "Version:",
        "selectWorld.versionUnknown": "unknown",
        "selectWorld.versionQuestion": "Do you really want to load this world?",
        "selectWorld.versionWarning": "This world was saved in version '%s' and loading it in this version could cause corruption!",
        "selectWorld.versionJoinButton": "Use anyway",
        "selectWorld.tooltip.fromNewerVersion1": "World was saved in a newer version,",
        "selectWorld.tooltip.fromNewerVersion2": "loading this world could cause problems!",
        "selectWorld.tooltip.snapshot1": "Don't forget to backup this world",
        "selectWorld.tooltip.snapshot2": "before you load it in this snapshot.",
        "selectWorld.unable_to_load": "Unable to load worlds",
        "selectWorld.load_folder_access": "Unable to read or access folder where game worlds are saved!",
        "createWorld.customize.presets": "Presets",
        "createWorld.customize.presets.title": "Select a Preset",
        "createWorld.customize.presets.select": "Use Preset",
        "createWorld.customize.presets.share": "Want to share your preset with someone? Use the below box!",
        "createWorld.customize.presets.list": "Alternatively, here's some we made earlier!",
        "createWorld.customize.flat.title": "Superflat Customization",
        "createWorld.customize.flat.tile": "Layer Material",
        "createWorld.customize.flat.height": "Height",
        "createWorld.customize.flat.addLayer": "Add Layer",
        "createWorld.customize.flat.editLayer": "Edit Layer",
        "createWorld.customize.flat.removeLayer": "Remove Layer",
        "createWorld.customize.flat.layer.top": "Top - %s",
        "createWorld.customize.flat.layer": "%s",
        "createWorld.customize.flat.layer.bottom": "Bottom - %s",
        "createWorld.customize.preset.classic_flat": "Classic Flat",
        "createWorld.customize.preset.tunnelers_dream": "Tunnelers' Dream",
        "createWorld.customize.preset.water_world": "Water World",
        "createWorld.customize.preset.overworld": "Overworld",
        "createWorld.customize.preset.snowy_kingdom": "Snowy Kingdom",
        "createWorld.customize.preset.bottomless_pit": "Bottomless Pit",
        "createWorld.customize.preset.desert": "Desert",
        "createWorld.customize.preset.redstone_ready": "Redstone Ready",
        "createWorld.customize.preset.the_void": "The Void",
        "createWorld.customize.custom.page0": "Basic Settings",
        "createWorld.customize.custom.page1": "Ore Settings",
        "createWorld.customize.custom.page2": "Advanced Settings (Expert Users Only!)",
        "createWorld.customize.custom.page3": "Extra Advanced Settings (Expert Users Only!)",
        "createWorld.customize.custom.randomize": "Randomize",
        "createWorld.customize.custom.prev": "Previous Page",
        "createWorld.customize.custom.next": "Next Page",
        "createWorld.customize.custom.defaults": "Defaults",
        "createWorld.customize.custom.confirm1": "This will overwrite your current",
        "createWorld.customize.custom.confirm2": "settings and cannot be undone.",
        "createWorld.customize.custom.confirmTitle": "Warning!",
        "createWorld.customize.custom.mainNoiseScaleX": "Main Noise Scale X",
        "createWorld.customize.custom.mainNoiseScaleY": "Main Noise Scale Y",
        "createWorld.customize.custom.mainNoiseScaleZ": "Main Noise Scale Z",
        "createWorld.customize.custom.depthNoiseScaleX": "Depth Noise Scale X",
        "createWorld.customize.custom.depthNoiseScaleZ": "Depth Noise Scale Z",
        "createWorld.customize.custom.depthNoiseScaleExponent": "Depth Noise Exponent",
        "createWorld.customize.custom.baseSize": "Depth Base Size",
        "createWorld.customize.custom.coordinateScale": "Coordinate Scale",
        "createWorld.customize.custom.heightScale": "Height Scale",
        "createWorld.customize.custom.stretchY": "Height Stretch",
        "createWorld.customize.custom.upperLimitScale": "Upper Limit Scale",
        "createWorld.customize.custom.lowerLimitScale": "Lower Limit Scale",
        "createWorld.customize.custom.biomeDepthWeight": "Biome Depth Weight",
        "createWorld.customize.custom.biomeDepthOffset": "Biome Depth Offset",
        "createWorld.customize.custom.biomeScaleWeight": "Biome Scale Weight",
        "createWorld.customize.custom.biomeScaleOffset": "Biome Scale Offset",
        "createWorld.customize.custom.seaLevel": "Sea Level",
        "createWorld.customize.custom.useCaves": "Caves",
        "createWorld.customize.custom.useStrongholds": "Strongholds",
        "createWorld.customize.custom.useVillages": "Villages",
        "createWorld.customize.custom.useMineShafts": "Mineshafts",
        "createWorld.customize.custom.useTemples": "Temples",
        "createWorld.customize.custom.useMonuments": "Ocean Monuments",
        "createWorld.customize.custom.useMansions": "Woodland Mansions",
        "createWorld.customize.custom.useRavines": "Ravines",
        "createWorld.customize.custom.useDungeons": "Dungeons",
        "createWorld.customize.custom.dungeonChance": "Dungeon Count",
        "createWorld.customize.custom.useWaterLakes": "Water Lakes",
        "createWorld.customize.custom.waterLakeChance": "Water Lake Rarity",
        "createWorld.customize.custom.useLavaLakes": "Lava Lakes",
        "createWorld.customize.custom.lavaLakeChance": "Lava Lake Rarity",
        "createWorld.customize.custom.useLavaOceans": "Lava Oceans",
        "createWorld.customize.custom.fixedBiome": "Biome",
        "createWorld.customize.custom.biomeSize": "Biome Size",
        "createWorld.customize.custom.riverSize": "River Size",
        "createWorld.customize.custom.size": "Spawn Size",
        "createWorld.customize.custom.count": "Spawn Tries",
        "createWorld.customize.custom.minHeight": "Min. Height",
        "createWorld.customize.custom.maxHeight": "Max. Height",
        "createWorld.customize.custom.center": "Center Height",
        "createWorld.customize.custom.spread": "Spread Height",
        "createWorld.customize.custom.presets.title": "Customize World Presets",
        "createWorld.customize.custom.presets": "Presets",
        "createWorld.customize.custom.preset.waterWorld": "Water World",
        "createWorld.customize.custom.preset.isleLand": "Isle Land",
        "createWorld.customize.custom.preset.caveDelight": "Caver's Delight",
        "createWorld.customize.custom.preset.mountains": "Mountain Madness",
        "createWorld.customize.custom.preset.drought": "Drought",
        "createWorld.customize.custom.preset.caveChaos": "Caves of Chaos",
        "createWorld.customize.custom.preset.goodLuck": "Good Luck",
        "gameMode.survival": "Survival Mode",
        "gameMode.creative": "Creative Mode",
        "gameMode.adventure": "Adventure Mode",
        "gameMode.spectator": "Spectator Mode",
        "gameMode.hardcore": "Hardcore Mode!",
        "gameMode.changed": "Your game mode has been updated to %s",
        "spectatorMenu.previous_page": "Previous Page",
        "spectatorMenu.next_page": "Next Page",
        "spectatorMenu.close": "Close Menu",
        "spectatorMenu.teleport": "Teleport to Player",
        "spectatorMenu.teleport.prompt": "Select a player to teleport to",
        "spectatorMenu.team_teleport": "Teleport to Team Member",
        "spectatorMenu.team_teleport.prompt": "Select a team to teleport to",
        "spectatorMenu.root.prompt": "Press a key to select a command, and again to use it.",
        "selectWorld.gameMode": "Game Mode",
        "selectWorld.gameMode.survival": "Survival",
        "selectWorld.gameMode.survival.line1": "Search for resources, crafting, gain",
        "selectWorld.gameMode.survival.line2": "levels, health and hunger",
        "selectWorld.gameMode.creative": "Creative",
        "selectWorld.gameMode.creative.line1": "Unlimited resources, free flying and",
        "selectWorld.gameMode.creative.line2": "destroy blocks instantly",
        "selectWorld.gameMode.spectator": "Spectator",
        "selectWorld.gameMode.spectator.line1": "You can look but don't touch",
        "selectWorld.gameMode.hardcore": "Hardcore",
        "selectWorld.gameMode.hardcore.line1": "Same as survival mode, locked at hardest",
        "selectWorld.gameMode.hardcore.line2": "difficulty, and one life only",
        "selectWorld.gameMode.adventure": "Adventure",
        "selectWorld.gameMode.adventure.line1": "Same as survival mode, but blocks can't",
        "selectWorld.gameMode.adventure.line2": "be added or removed",
        "selectWorld.moreWorldOptions": "More World Options...",
        "selectWorld.mapFeatures": "Generate Structures:",
        "selectWorld.mapFeatures.info": "Villages, dungeons etc",
        "selectWorld.mapType": "World Type:",
        "selectWorld.mapType.normal": "Normal",
        "selectWorld.allowCommands": "Allow Cheats:",
        "selectWorld.allowCommands.info": "Commands like /gamemode, /xp",
        "selectWorld.hardcoreMode": "Hardcore:",
        "selectWorld.hardcoreMode.info": "World is deleted upon death",
        "selectWorld.bonusItems": "Bonus Chest:",
        "generator.default": "Default",
        "generator.flat": "Superflat",
        "generator.largeBiomes": "Large Biomes",
        "generator.amplified": "AMPLIFIED",
        "generator.customized": "Customized",
        "generator.debug_all_block_states": "Debug Mode",
        "generator.amplified.info": "Notice: Just for fun, requires beefy computer",
        "selectServer.title": "Select Server",
        "selectServer.empty": "empty",
        "selectServer.select": "Join Server",
        "selectServer.direct": "Direct Connect",
        "selectServer.edit": "Edit",
        "selectServer.delete": "Delete",
        "selectServer.add": "Add Server",
        "selectServer.defaultName": "Minecraft Server",
        "selectServer.deleteQuestion": "Are you sure you want to remove this server?",
        "selectServer.deleteWarning": "will be lost forever! (A long time!)",
        "selectServer.deleteButton": "Delete",
        "selectServer.refresh": "Refresh",
        "selectServer.hiddenAddress": "(Hidden)",
        "addServer.title": "Edit Server Info",
        "addServer.enterName": "Server Name",
        "addServer.enterIp": "Server Address",
        "addServer.add": "Done",
        "addServer.hideAddress": "Hide Address",
        "addServer.resourcePack": "Server Resource Packs",
        "addServer.resourcePack.enabled": "Enabled",
        "addServer.resourcePack.disabled": "Disabled",
        "addServer.resourcePack.prompt": "Prompt",
        "lanServer.title": "LAN World",
        "lanServer.scanning": "Scanning for games on your local network",
        "lanServer.start": "Start LAN World",
        "lanServer.otherPlayers": "Settings for Other Players",
        "mcoServer.title": "Minecraft Online World",
        "multiplayer.title": "Play Multiplayer",
        "multiplayer.connect": "Connect",
        "multiplayer.ipinfo": "Enter the IP of a server to connect to it:",
        "multiplayer.texturePrompt.line1": "This server recommends the use of a custom resource pack.",
        "multiplayer.texturePrompt.line2": "Would you like to download and install it automagically?",
        "multiplayer.downloadingTerrain": "Loading terrain",
        "multiplayer.downloadingStats": "Downloading statistics & achievements...",
        "multiplayer.stopSleeping": "Leave Bed",
        "multiplayer.player.joined": "%s joined the game",
        "multiplayer.player.joined.renamed": "%s (formerly known as %s) joined the game",
        "multiplayer.player.left": "%s left the game",
        "chat.cannotSend": "Cannot send chat message",
        "chat.type.text": "<%s> %s",
        "chat.type.emote": "* %s %s",
        "chat.type.announcement": "[%s] %s",
        "chat.type.admin": "[%s: %s]",
        "chat.type.achievement": "%s has just earned the achievement %s",
        "chat.type.achievement.taken": "%s has lost the achievement %s",
        "chat.link.confirm": "Are you sure you want to open the following website?",
        "chat.link.warning": "Never open links from people that you don't trust!",
        "chat.copy": "Copy to Clipboard",
        "chat.link.confirmTrusted": "Do you want to open this link or copy it to your clipboard?",
        "chat.link.open": "Open in browser",
        "menu.playdemo": "Play Demo World",
        "menu.resetdemo": "Reset Demo World",
        "demo.day.1": "This demo will last five game days, do your best!",
        "demo.day.2": "Day Two",
        "demo.day.3": "Day Three",
        "demo.day.4": "Day Four",
        "demo.day.5": "This is your last day!",
        "demo.day.warning": "Your time is almost up!",
        "demo.day.6": "You have passed your fifth day, use F2 to save a screenshot of your creation",
        "demo.reminder": "The demo time has expired, buy the game to continue or start a new world!",
        "demo.remainingTime": "Remaining time: %s",
        "demo.demoExpired": "Demo time's up!",
        "demo.help.movement": "Use %1$s, %2$s, %3$s, %4$s and the mouse to move around",
        "demo.help.movementShort": "Move by pressing %1$s, %2$s, %3$s, %4$s",
        "demo.help.movementMouse": "Look around using the mouse",
        "demo.help.jump": "Jump by pressing %1$s",
        "demo.help.inventory": "Use %1$s to open your inventory",
        "demo.help.title": "Minecraft Demo Mode",
        "demo.help.fullWrapped": "This demo will last 5 ingame days (about 1 hour and 40 minutes of real time). Check the achievements for hints! Have fun!",
        "demo.help.buy": "Purchase Now!",
        "demo.help.later": "Continue Playing!",
        "connect.connecting": "Connecting to the server...",
        "connect.authorizing": "Logging in...",
        "connect.failed": "Failed to connect to the server",
        "disconnect.genericReason": "%s",
        "disconnect.disconnected": "Disconnected by Server",
        "disconnect.lost": "Connection Lost",
        "disconnect.kicked": "Was kicked from the game",
        "disconnect.timeout": "Timed out",
        "disconnect.closed": "Connection closed",
        "disconnect.loginFailed": "Failed to login",
        "disconnect.loginFailedInfo": "Failed to login: %s",
        "disconnect.loginFailedInfo.serversUnavailable": "The authentication servers are currently down for maintenance.",
        "disconnect.loginFailedInfo.invalidSession": "Invalid session (Try restarting your game)",
        "disconnect.quitting": "Quitting",
        "disconnect.endOfStream": "End of stream",
        "disconnect.overflow": "Buffer overflow",
        "disconnect.spam": "Kicked for spamming",
        "soundCategory.master": "Master Volume",
        "soundCategory.music": "Music",
        "soundCategory.record": "Jukebox/Note Blocks",
        "soundCategory.weather": "Weather",
        "soundCategory.hostile": "Hostile Creatures",
        "soundCategory.neutral": "Friendly Creatures",
        "soundCategory.player": "Players",
        "soundCategory.block": "Blocks",
        "soundCategory.ambient": "Ambient/Environment",
        "soundCategory.voice": "Voice/Speech",
        "record.nowPlaying": "Now playing: %s",
        "options.off": "OFF",
        "options.on": "ON",
        "options.visible": "Shown",
        "options.hidden": "Hidden",
        "options.title": "Options",
        "options.controls": "Controls...",
        "options.video": "Video Settings...",
        "options.language": "Language...",
        "options.sounds": "Music & Sounds...",
        "options.sounds.title": "Music & Sound Options",
        "options.languageWarning": "Language translations may not be 100%% accurate",
        "options.videoTitle": "Video Settings",
        "options.customizeTitle": "Customize World Settings",
        "options.music": "Music",
        "options.sound": "Sound",
        "options.invertMouse": "Invert Mouse",
        "options.fov": "FOV",
        "options.fov.min": "Normal",
        "options.fov.max": "Quake Pro",
        "options.saturation": "Saturation",
        "options.gamma": "Brightness",
        "options.gamma.min": "Moody",
        "options.gamma.max": "Bright",
        "options.sensitivity": "Sensitivity",
        "options.sensitivity.min": "*yawn*",
        "options.sensitivity.max": "HYPERSPEED!!!",
        "options.renderDistance": "Render Distance",
        "options.viewBobbing": "View Bobbing",
        "options.ao": "Smooth Lighting",
        "options.ao.off": "OFF",
        "options.ao.min": "Minimum",
        "options.ao.max": "Maximum",
        "options.anaglyph": "3D Anaglyph",
        "options.chunks": "%s chunks",
        "options.framerate": "%s fps",
        "options.framerateLimit": "Max Framerate",
        "options.framerateLimit.max": "Unlimited",
        "options.difficulty": "Difficulty",
        "options.difficulty.peaceful": "Peaceful",
        "options.difficulty.easy": "Easy",
        "options.difficulty.normal": "Normal",
        "options.difficulty.hard": "Hard",
        "options.difficulty.hardcore": "Hardcore",
        "options.graphics": "Graphics",
        "options.graphics.fancy": "Fancy",
        "options.graphics.fast": "Fast",
        "options.guiScale": "GUI Scale",
        "options.guiScale.auto": "Auto",
        "options.guiScale.small": "Small",
        "options.guiScale.normal": "Normal",
        "options.guiScale.large": "Large",
        "options.postProcessEnable": "Enable Post-Processing",
        "options.renderClouds": "Clouds",
        "options.postButton": "Post-Processing Settings...",
        "options.postVideoTitle": "Post-Processing Settings",
        "options.farWarning1": "A 64 bit Java installation is recommended",
        "options.farWarning2": "for 'Far' render distance (you have 32 bit)",
        "options.particles": "Particles",
        "options.particles.all": "All",
        "options.particles.decreased": "Decreased",
        "options.particles.minimal": "Minimal",
        "options.multiplayer.title": "Multiplayer Settings...",
        "options.chat.title": "Chat Settings...",
        "options.chat.visibility": "Chat",
        "options.chat.visibility.full": "Shown",
        "options.chat.visibility.system": "Commands Only",
        "options.chat.visibility.hidden": "Hidden",
        "options.chat.color": "Colors",
        "options.chat.opacity": "Opacity",
        "options.chat.links": "Web Links",
        "options.chat.links.prompt": "Prompt on Links",
        "options.chat.scale": "Scale",
        "options.chat.width": "Width",
        "options.chat.height.focused": "Focused Height",
        "options.chat.height.unfocused": "Unfocused Height",
        "options.skinCustomisation": "Skin Customization...",
        "options.skinCustomisation.title": "Skin Customization",
        "options.modelPart.cape": "Cape",
        "options.modelPart.hat": "Hat",
        "options.modelPart.jacket": "Jacket",
        "options.modelPart.left_sleeve": "Left Sleeve",
        "options.modelPart.right_sleeve": "Right Sleeve",
        "options.modelPart.left_pants_leg": "Left Pants Leg",
        "options.modelPart.right_pants_leg": "Right Pants Leg",
        "options.snooper": "Allow Snooper",
        "options.snooper.view": "Snooper Settings...",
        "options.snooper.title": "Feed us data!",
        "options.snooper.desc": "We always want to improve Minecraft and, to help us do that, we'd like to collect some information. This lets us know what hardware to support and where the big problems are. It also gives us a sense of the size of our active player base, so we know if we're doing a good job. You can view all the information we collect below. If you want to opt out then you can simply toggle it off!",
        "options.resourcepack": "Resource Packs...",
        "options.fullscreen": "Fullscreen",
        "options.vsync": "Use VSync",
        "options.vbo": "Use VBOs",
        "options.touchscreen": "Touchscreen Mode",
        "options.reducedDebugInfo": "Reduced Debug Info",
        "options.entityShadows": "Entity Shadows",
        "options.mainHand": "Main Hand",
        "options.mainHand.left": "Left",
        "options.mainHand.right": "Right",
        "options.attackIndicator": "Attack Indicator",
        "options.attack.crosshair": "Crosshair",
        "options.attack.hotbar": "Hotbar",
        "options.showSubtitles": "Show Subtitles",
        "options.realmsNotifications": "Realms Notifications",
        "options.autoJump": "Auto-Jump",
        "options.mipmapLevels": "Mipmap Levels",
        "options.forceUnicodeFont": "Force Unicode Font",
        "difficulty.lock.title": "Lock World Difficulty",
        "difficulty.lock.question": "Are you sure you want to lock the difficulty of this world? This will set this world to always be %1$s, and you will never be able to change that again.",
        "title.oldgl1": "Old graphics card detected; this may prevent you from",
        "title.oldgl2": "playing in the future as OpenGL 2.0 will be required.",
        "title.oldjava1": "Old java detected; this will prevent you from playing",
        "title.oldjava2": "in the future as Java 8 will be required.",
        "controls.title": "Controls",
        "controls.reset": "Reset",
        "controls.resetAll": "Reset Keys",
        "key.sprint": "Sprint",
        "key.forward": "Walk Forwards",
        "key.left": "Strafe Left",
        "key.back": "Walk Backwards",
        "key.right": "Strafe Right",
        "key.jump": "Jump",
        "key.inventory": "Open/Close Inventory",
        "key.drop": "Drop Selected Item",
        "key.swapHands": "Swap Item In Hands",
        "key.chat": "Open Chat",
        "key.sneak": "Sneak",
        "key.playerlist": "List Players",
        "key.attack": "Attack/Destroy",
        "key.use": "Use Item/Place Block",
        "key.pickItem": "Pick Block",
        "key.mouseButton": "Button %1$s",
        "key.command": "Open Command",
        "key.screenshot": "Take Screenshot",
        "key.togglePerspective": "Toggle Perspective",
        "key.smoothCamera": "Toggle Cinematic Camera",
        "key.fullscreen": "Toggle Fullscreen",
        "key.spectatorOutlines": "Highlight Players (Spectators)",
        "key.hotbar.1": "Hotbar Slot 1",
        "key.hotbar.2": "Hotbar Slot 2",
        "key.hotbar.3": "Hotbar Slot 3",
        "key.hotbar.4": "Hotbar Slot 4",
        "key.hotbar.5": "Hotbar Slot 5",
        "key.hotbar.6": "Hotbar Slot 6",
        "key.hotbar.7": "Hotbar Slot 7",
        "key.hotbar.8": "Hotbar Slot 8",
        "key.hotbar.9": "Hotbar Slot 9",
        "key.categories.movement": "Movement",
        "key.categories.misc": "Miscellaneous",
        "key.categories.multiplayer": "Multiplayer",
        "key.categories.gameplay": "Gameplay",
        "key.categories.ui": "Game Interface",
        "key.categories.inventory": "Inventory",
        "resourcePack.openFolder": "Open Resource Pack Folder",
        "resourcePack.title": "Select Resource Packs",
        "resourcePack.available.title": "Available Resource Packs",
        "resourcePack.selected.title": "Selected Resource Packs",
        "resourcePack.folderInfo": "(Place resource pack files here)",
        "resourcePack.incompatible": "Incompatible",
        "resourcePack.incompatible.old": "(Made for an older version of Minecraft)",
        "resourcePack.incompatible.new": "(Made for a newer version of Minecraft)",
        "resourcePack.incompatible.confirm.title": "Are you sure you want to load this resource pack?",
        "resourcePack.incompatible.confirm.old": "This resource pack was made for an older version of Minecraft and may no longer work correctly.",
        "resourcePack.incompatible.confirm.new": "This resource pack was made for a newer version of Minecraft and may no longer work correctly.",
        "sign.edit": "Edit sign message",
        "book.pageIndicator": "Page %1$s of %2$s",
        "book.byAuthor": "by %1$s",
        "book.signButton": "Sign",
        "book.editTitle": "Enter Book Title:",
        "book.finalizeButton": "Sign and Close",
        "book.finalizeWarning": "Note! When you sign the book, it will no longer be editable.",
        "book.generation.0": "Original",
        "book.generation.1": "Copy of original",
        "book.generation.2": "Copy of a copy",
        "book.generation.3": "Tattered",
        "merchant.deprecated": "Trade something else to unlock!",
        "tile.air.name": "Air",
        "tile.barrier.name": "Barrier",
        "tile.stone.stone.name": "Stone",
        "tile.stone.granite.name": "Granite",
        "tile.stone.graniteSmooth.name": "Polished Granite",
        "tile.stone.diorite.name": "Diorite",
        "tile.stone.dioriteSmooth.name": "Polished Diorite",
        "tile.stone.andesite.name": "Andesite",
        "tile.stone.andesiteSmooth.name": "Polished Andesite",
        "tile.hayBlock.name": "Hay Bale",
        "tile.grass.name": "Grass Block",
        "tile.dirt.name": "Dirt",
        "tile.dirt.default.name": "Dirt",
        "tile.dirt.coarse.name": "Coarse Dirt",
        "tile.dirt.podzol.name": "Podzol",
        "tile.stonebrick.name": "Cobblestone",
        "tile.wood.name": "Wooden Planks",
        "tile.wood.oak.name": "Oak Wood Planks",
        "tile.wood.spruce.name": "Spruce Wood Planks",
        "tile.wood.birch.name": "Birch Wood Planks",
        "tile.wood.jungle.name": "Jungle Wood Planks",
        "tile.wood.acacia.name": "Acacia Wood Planks",
        "tile.wood.big_oak.name": "Dark Oak Wood Planks",
        "tile.sapling.oak.name": "Oak Sapling",
        "tile.sapling.spruce.name": "Spruce Sapling",
        "tile.sapling.birch.name": "Birch Sapling",
        "tile.sapling.jungle.name": "Jungle Sapling",
        "tile.sapling.acacia.name": "Acacia Sapling",
        "tile.sapling.big_oak.name": "Dark Oak Sapling",
        "tile.deadbush.name": "Dead Bush",
        "tile.bedrock.name": "Bedrock",
        "tile.water.name": "Water",
        "tile.lava.name": "Lava",
        "tile.sand.name": "Sand",
        "tile.sand.default.name": "Sand",
        "tile.sand.red.name": "Red Sand",
        "tile.sandStone.name": "Sandstone",
        "tile.sandStone.default.name": "Sandstone",
        "tile.sandStone.chiseled.name": "Chiseled Sandstone",
        "tile.sandStone.smooth.name": "Smooth Sandstone",
        "tile.redSandStone.name": "Red Sandstone",
        "tile.redSandStone.default.name": "Red Sandstone",
        "tile.redSandStone.chiseled.name": "Chiseled Red Sandstone",
        "tile.redSandStone.smooth.name": "Smooth Red Sandstone",
        "tile.gravel.name": "Gravel",
        "tile.oreGold.name": "Gold Ore",
        "tile.oreIron.name": "Iron Ore",
        "tile.oreCoal.name": "Coal Ore",
        "tile.log.name": "Wood",
        "tile.log.oak.name": "Oak Wood",
        "tile.log.spruce.name": "Spruce Wood",
        "tile.log.birch.name": "Birch Wood",
        "tile.log.jungle.name": "Jungle Wood",
        "tile.log.acacia.name": "Acacia Wood",
        "tile.log.big_oak.name": "Dark Oak Wood",
        "tile.leaves.name": "Leaves",
        "tile.leaves.oak.name": "Oak Leaves",
        "tile.leaves.spruce.name": "Spruce Leaves",
        "tile.leaves.birch.name": "Birch Leaves",
        "tile.leaves.jungle.name": "Jungle Leaves",
        "tile.leaves.acacia.name": "Acacia Leaves",
        "tile.leaves.big_oak.name": "Dark Oak Leaves",
        "tile.tallgrass.name": "Grass",
        "tile.tallgrass.shrub.name": "Shrub",
        "tile.tallgrass.grass.name": "Grass",
        "tile.tallgrass.fern.name": "Fern",
        "tile.sponge.dry.name": "Sponge",
        "tile.sponge.wet.name": "Wet Sponge",
        "tile.glass.name": "Glass",
        "tile.stainedGlass.name": "Stained Glass",
        "tile.stainedGlass.black.name": "Black Stained Glass",
        "tile.stainedGlass.red.name": "Red Stained Glass",
        "tile.stainedGlass.green.name": "Green Stained Glass",
        "tile.stainedGlass.brown.name": "Brown Stained Glass",
        "tile.stainedGlass.blue.name": "Blue Stained Glass",
        "tile.stainedGlass.purple.name": "Purple Stained Glass",
        "tile.stainedGlass.cyan.name": "Cyan Stained Glass",
        "tile.stainedGlass.silver.name": "Light Gray Stained Glass",
        "tile.stainedGlass.gray.name": "Gray Stained Glass",
        "tile.stainedGlass.pink.name": "Pink Stained Glass",
        "tile.stainedGlass.lime.name": "Lime Stained Glass",
        "tile.stainedGlass.yellow.name": "Yellow Stained Glass",
        "tile.stainedGlass.lightBlue.name": "Light Blue Stained Glass",
        "tile.stainedGlass.magenta.name": "Magenta Stained Glass",
        "tile.stainedGlass.orange.name": "Orange Stained Glass",
        "tile.stainedGlass.white.name": "White Stained Glass",
        "tile.thinStainedGlass.name": "Stained Glass Pane",
        "tile.thinStainedGlass.black.name": "Black Stained Glass Pane",
        "tile.thinStainedGlass.red.name": "Red Stained Glass Pane",
        "tile.thinStainedGlass.green.name": "Green Stained Glass Pane",
        "tile.thinStainedGlass.brown.name": "Brown Stained Glass Pane",
        "tile.thinStainedGlass.blue.name": "Blue Stained Glass Pane",
        "tile.thinStainedGlass.purple.name": "Purple Stained Glass Pane",
        "tile.thinStainedGlass.cyan.name": "Cyan Stained Glass Pane",
        "tile.thinStainedGlass.silver.name": "Light Gray Stained Glass Pane",
        "tile.thinStainedGlass.gray.name": "Gray Stained Glass Pane",
        "tile.thinStainedGlass.pink.name": "Pink Stained Glass Pane",
        "tile.thinStainedGlass.lime.name": "Lime Stained Glass Pane",
        "tile.thinStainedGlass.yellow.name": "Yellow Stained Glass Pane",
        "tile.thinStainedGlass.lightBlue.name": "Light Blue Stained Glass Pane",
        "tile.thinStainedGlass.magenta.name": "Magenta Stained Glass Pane",
        "tile.thinStainedGlass.orange.name": "Orange Stained Glass Pane",
        "tile.thinStainedGlass.white.name": "White Stained Glass Pane",
        "tile.thinGlass.name": "Glass Pane",
        "tile.cloth.name": "Wool",
        "tile.flower1.name": "Flower",
        "tile.flower1.dandelion.name": "Dandelion",
        "tile.flower2.name": "Flower",
        "tile.flower2.poppy.name": "Poppy",
        "tile.flower2.blueOrchid.name": "Blue Orchid",
        "tile.flower2.allium.name": "Allium",
        "tile.flower2.houstonia.name": "Azure Bluet",
        "tile.flower2.tulipRed.name": "Red Tulip",
        "tile.flower2.tulipOrange.name": "Orange Tulip",
        "tile.flower2.tulipWhite.name": "White Tulip",
        "tile.flower2.tulipPink.name": "Pink Tulip",
        "tile.flower2.oxeyeDaisy.name": "Oxeye Daisy",
        "tile.doublePlant.name": "Plant",
        "tile.doublePlant.sunflower.name": "Sunflower",
        "tile.doublePlant.syringa.name": "Lilac",
        "tile.doublePlant.grass.name": "Double Tallgrass",
        "tile.doublePlant.fern.name": "Large Fern",
        "tile.doublePlant.rose.name": "Rose Bush",
        "tile.doublePlant.paeonia.name": "Peony",
        "tile.mushroom.name": "Mushroom",
        "tile.blockGold.name": "Block of Gold",
        "tile.blockIron.name": "Block of Iron",
        "tile.stoneSlab.name": "Stone Slab",
        "tile.stoneSlab.stone.name": "Stone Slab",
        "tile.stoneSlab.sand.name": "Sandstone Slab",
        "tile.stoneSlab.wood.name": "Wooden Slab",
        "tile.stoneSlab.cobble.name": "Cobblestone Slab",
        "tile.stoneSlab.brick.name": "Bricks Slab",
        "tile.stoneSlab.smoothStoneBrick.name": "Stone Bricks Slab",
        "tile.stoneSlab.netherBrick.name": "Nether Brick Slab",
        "tile.stoneSlab.quartz.name": "Quartz Slab",
        "tile.stoneSlab2.red_sandstone.name": "Red Sandstone Slab",
        "tile.woodSlab.name": "Wood Slab",
        "tile.woodSlab.oak.name": "Oak Wood Slab",
        "tile.woodSlab.spruce.name": "Spruce Wood Slab",
        "tile.woodSlab.birch.name": "Birch Wood Slab",
        "tile.woodSlab.jungle.name": "Jungle Wood Slab",
        "tile.woodSlab.acacia.name": "Acacia Wood Slab",
        "tile.woodSlab.big_oak.name": "Dark Oak Wood Slab",
        "tile.brick.name": "Bricks",
        "tile.tnt.name": "TNT",
        "tile.bookshelf.name": "Bookshelf",
        "tile.stoneMoss.name": "Moss Stone",
        "tile.obsidian.name": "Obsidian",
        "tile.torch.name": "Torch",
        "tile.fire.name": "Fire",
        "tile.mobSpawner.name": "Monster Spawner",
        "tile.stairsWood.name": "Oak Wood Stairs",
        "tile.stairsWoodSpruce.name": "Spruce Wood Stairs",
        "tile.stairsWoodBirch.name": "Birch Wood Stairs",
        "tile.stairsWoodJungle.name": "Jungle Wood Stairs",
        "tile.stairsWoodAcacia.name": "Acacia Wood Stairs",
        "tile.stairsWoodDarkOak.name": "Dark Oak Wood Stairs",
        "tile.chest.name": "Chest",
        "tile.chestTrap.name": "Trapped Chest",
        "tile.redstoneDust.name": "Redstone Dust",
        "tile.oreDiamond.name": "Diamond Ore",
        "tile.blockCoal.name": "Block of Coal",
        "tile.blockDiamond.name": "Block of Diamond",
        "tile.workbench.name": "Crafting Table",
        "tile.crops.name": "Crops",
        "tile.farmland.name": "Farmland",
        "tile.furnace.name": "Furnace",
        "tile.sign.name": "Sign",
        "tile.doorWood.name": "Wooden Door",
        "tile.ladder.name": "Ladder",
        "tile.rail.name": "Rail",
        "tile.goldenRail.name": "Powered Rail",
        "tile.activatorRail.name": "Activator Rail",
        "tile.detectorRail.name": "Detector Rail",
        "tile.stairsStone.name": "Cobblestone Stairs",
        "tile.stairsSandStone.name": "Sandstone Stairs",
        "tile.stairsRedSandStone.name": "Red Sandstone Stairs",
        "tile.lever.name": "Lever",
        "tile.pressurePlateStone.name": "Stone Pressure Plate",
        "tile.pressurePlateWood.name": "Wooden Pressure Plate",
        "tile.weightedPlate_light.name": "Weighted Pressure Plate (Light)",
        "tile.weightedPlate_heavy.name": "Weighted Pressure Plate (Heavy)",
        "tile.doorIron.name": "Iron Door",
        "tile.oreRedstone.name": "Redstone Ore",
        "tile.notGate.name": "Redstone Torch",
        "tile.button.name": "Button",
        "tile.snow.name": "Snow",
        "tile.woolCarpet.name": "Carpet",
        "tile.woolCarpet.black.name": "Black Carpet",
        "tile.woolCarpet.red.name": "Red Carpet",
        "tile.woolCarpet.green.name": "Green Carpet",
        "tile.woolCarpet.brown.name": "Brown Carpet",
        "tile.woolCarpet.blue.name": "Blue Carpet",
        "tile.woolCarpet.purple.name": "Purple Carpet",
        "tile.woolCarpet.cyan.name": "Cyan Carpet",
        "tile.woolCarpet.silver.name": "Light Gray Carpet",
        "tile.woolCarpet.gray.name": "Gray Carpet",
        "tile.woolCarpet.pink.name": "Pink Carpet",
        "tile.woolCarpet.lime.name": "Lime Carpet",
        "tile.woolCarpet.yellow.name": "Yellow Carpet",
        "tile.woolCarpet.lightBlue.name": "Light Blue Carpet",
        "tile.woolCarpet.magenta.name": "Magenta Carpet",
        "tile.woolCarpet.orange.name": "Orange Carpet",
        "tile.woolCarpet.white.name": "White Carpet",
        "tile.ice.name": "Ice",
        "tile.frostedIce.name": "Frosted Ice",
        "tile.icePacked.name": "Packed Ice",
        "tile.cactus.name": "Cactus",
        "tile.clay.name": "Clay",
        "tile.clayHardenedStained.name": "Stained Hardened Clay",
        "tile.clayHardenedStained.black.name": "Black Hardened Clay",
        "tile.clayHardenedStained.red.name": "Red Hardened Clay",
        "tile.clayHardenedStained.green.name": "Green Hardened Clay",
        "tile.clayHardenedStained.brown.name": "Brown Hardened Clay",
        "tile.clayHardenedStained.blue.name": "Blue Hardened Clay",
        "tile.clayHardenedStained.purple.name": "Purple Hardened Clay",
        "tile.clayHardenedStained.cyan.name": "Cyan Hardened Clay",
        "tile.clayHardenedStained.silver.name": "Light Gray Hardened Clay",
        "tile.clayHardenedStained.gray.name": "Gray Hardened Clay",
        "tile.clayHardenedStained.pink.name": "Pink Hardened Clay",
        "tile.clayHardenedStained.lime.name": "Lime Hardened Clay",
        "tile.clayHardenedStained.yellow.name": "Yellow Hardened Clay",
        "tile.clayHardenedStained.lightBlue.name": "Light Blue Hardened Clay",
        "tile.clayHardenedStained.magenta.name": "Magenta Hardened Clay",
        "tile.clayHardenedStained.orange.name": "Orange Hardened Clay",
        "tile.clayHardenedStained.white.name": "White Hardened Clay",
        "tile.clayHardened.name": "Hardened Clay",
        "tile.reeds.name": "Sugar cane",
        "tile.jukebox.name": "Jukebox",
        "tile.fence.name": "Oak Fence",
        "tile.spruceFence.name": "Spruce Fence",
        "tile.birchFence.name": "Birch Fence",
        "tile.jungleFence.name": "Jungle Fence",
        "tile.darkOakFence.name": "Dark Oak Fence",
        "tile.acaciaFence.name": "Acacia Fence",
        "tile.fenceGate.name": "Oak Fence Gate",
        "tile.spruceFenceGate.name": "Spruce Fence Gate",
        "tile.birchFenceGate.name": "Birch Fence Gate",
        "tile.jungleFenceGate.name": "Jungle Fence Gate",
        "tile.darkOakFenceGate.name": "Dark Oak Fence Gate",
        "tile.acaciaFenceGate.name": "Acacia Fence Gate",
        "tile.pumpkinStem.name": "Pumpkin Stem",
        "tile.pumpkin.name": "Pumpkin",
        "tile.litpumpkin.name": "Jack o'Lantern",
        "tile.hellrock.name": "Netherrack",
        "tile.hellsand.name": "Soul Sand",
        "tile.lightgem.name": "Glowstone",
        "tile.portal.name": "Portal",
        "tile.cloth.black.name": "Black Wool",
        "tile.cloth.red.name": "Red Wool",
        "tile.cloth.green.name": "Green Wool",
        "tile.cloth.brown.name": "Brown Wool",
        "tile.cloth.blue.name": "Blue Wool",
        "tile.cloth.purple.name": "Purple Wool",
        "tile.cloth.cyan.name": "Cyan Wool",
        "tile.cloth.silver.name": "Light Gray Wool",
        "tile.cloth.gray.name": "Gray Wool",
        "tile.cloth.pink.name": "Pink Wool",
        "tile.cloth.lime.name": "Lime Wool",
        "tile.cloth.yellow.name": "Yellow Wool",
        "tile.cloth.lightBlue.name": "Light Blue Wool",
        "tile.cloth.magenta.name": "Magenta Wool",
        "tile.cloth.orange.name": "Orange Wool",
        "tile.cloth.white.name": "White Wool",
        "tile.oreLapis.name": "Lapis Lazuli Ore",
        "tile.blockLapis.name": "Lapis Lazuli Block",
        "tile.dispenser.name": "Dispenser",
        "tile.dropper.name": "Dropper",
        "tile.musicBlock.name": "Note Block",
        "tile.cake.name": "Cake",
        "tile.bed.name": "Bed",
        "tile.bed.occupied": "This bed is occupied",
        "tile.bed.noSleep": "You can only sleep at night",
        "tile.bed.tooFarAway": "You may not rest now, the bed is too far away",
        "tile.bed.notSafe": "You may not rest now, there are monsters nearby",
        "tile.bed.notValid": "Your home bed was missing or obstructed",
        "tile.lockedchest.name": "Locked chest",
        "tile.trapdoor.name": "Wooden Trapdoor",
        "tile.ironTrapdoor.name": "Iron Trapdoor",
        "tile.web.name": "Cobweb",
        "tile.stonebricksmooth.name": "Stone Bricks",
        "tile.stonebricksmooth.default.name": "Stone Bricks",
        "tile.stonebricksmooth.mossy.name": "Mossy Stone Bricks",
        "tile.stonebricksmooth.cracked.name": "Cracked Stone Bricks",
        "tile.stonebricksmooth.chiseled.name": "Chiseled Stone Bricks",
        "tile.monsterStoneEgg.name": "Stone Monster Egg",
        "tile.monsterStoneEgg.stone.name": "Stone Monster Egg",
        "tile.monsterStoneEgg.cobble.name": "Cobblestone Monster Egg",
        "tile.monsterStoneEgg.brick.name": "Stone Brick Monster Egg",
        "tile.monsterStoneEgg.mossybrick.name": "Mossy Stone Brick Monster Egg",
        "tile.monsterStoneEgg.crackedbrick.name": "Cracked Stone Brick Monster Egg",
        "tile.monsterStoneEgg.chiseledbrick.name": "Chiseled Stone Brick Monster Egg",
        "tile.pistonBase.name": "Piston",
        "tile.pistonStickyBase.name": "Sticky Piston",
        "tile.fenceIron.name": "Iron Bars",
        "tile.melon.name": "Melon",
        "tile.stairsBrick.name": "Brick Stairs",
        "tile.stairsStoneBrickSmooth.name": "Stone Brick Stairs",
        "tile.vine.name": "Vines",
        "tile.netherBrick.name": "Nether Brick",
        "tile.netherFence.name": "Nether Brick Fence",
        "tile.stairsNetherBrick.name": "Nether Brick Stairs",
        "tile.netherStalk.name": "Nether Wart",
        "tile.cauldron.name": "Cauldron",
        "tile.enchantmentTable.name": "Enchantment Table",
        "tile.anvil.name": "Anvil",
        "tile.anvil.intact.name": "Anvil",
        "tile.anvil.slightlyDamaged.name": "Slightly Damaged Anvil",
        "tile.anvil.veryDamaged.name": "Very Damaged Anvil",
        "tile.whiteStone.name": "End Stone",
        "tile.endPortalFrame.name": "End Portal",
        "tile.mycel.name": "Mycelium",
        "tile.waterlily.name": "Lily Pad",
        "tile.dragonEgg.name": "Dragon Egg",
        "tile.redstoneLight.name": "Redstone Lamp",
        "tile.cocoa.name": "Cocoa",
        "tile.enderChest.name": "Ender Chest",
        "tile.oreEmerald.name": "Emerald Ore",
        "tile.blockEmerald.name": "Block of Emerald",
        "tile.blockRedstone.name": "Block of Redstone",
        "tile.tripWire.name": "Tripwire",
        "tile.tripWireSource.name": "Tripwire Hook",
        "tile.commandBlock.name": "Command Block",
        "tile.repeatingCommandBlock.name": "Repeating Command Block",
        "tile.chainCommandBlock.name": "Chain Command Block",
        "tile.beacon.name": "Beacon",
        "tile.beacon.primary": "Primary Power",
        "tile.beacon.secondary": "Secondary Power",
        "tile.cobbleWall.normal.name": "Cobblestone Wall",
        "tile.cobbleWall.mossy.name": "Mossy Cobblestone Wall",
        "tile.carrots.name": "Carrots",
        "tile.potatoes.name": "Potatoes",
        "tile.daylightDetector.name": "Daylight Sensor",
        "tile.netherquartz.name": "Nether Quartz Ore",
        "tile.hopper.name": "Hopper",
        "tile.quartzBlock.name": "Block of Quartz",
        "tile.quartzBlock.default.name": "Block of Quartz",
        "tile.quartzBlock.chiseled.name": "Chiseled Quartz Block",
        "tile.quartzBlock.lines.name": "Pillar Quartz Block",
        "tile.stairsQuartz.name": "Quartz Stairs",
        "tile.slime.name": "Slime Block",
        "tile.prismarine.rough.name": "Prismarine",
        "tile.prismarine.bricks.name": "Prismarine Bricks",
        "tile.prismarine.dark.name": "Dark Prismarine",
        "tile.seaLantern.name": "Sea Lantern",
        "tile.endRod.name": "End Rod",
        "tile.chorusPlant.name": "Chorus Plant",
        "tile.chorusFlower.name": "Chorus Flower",
        "tile.purpurBlock.name": "Purpur Block",
        "tile.purpurPillar.name": "Purpur Pillar",
        "tile.stairsPurpur.name": "Purpur Stairs",
        "tile.purpurSlab.name": "Purpur Slab",
        "tile.endBricks.name": "End Stone Bricks",
        "tile.beetroots.name": "Beetroots",
        "tile.grassPath.name": "Grass Path",
        "tile.magma.name": "Magma Block",
        "tile.netherWartBlock.name": "Nether Wart Block",
        "tile.redNetherBrick.name": "Red Nether Brick",
        "tile.boneBlock.name": "Bone Block",
        "tile.observer.name": "Observer",
        "tile.shulkerBoxWhite.name": "White Shulker Box",
        "tile.shulkerBoxOrange.name": "Orange Shulker Box",
        "tile.shulkerBoxMagenta.name": "Magenta Shulker Box",
        "tile.shulkerBoxLightBlue.name": "Light Blue Shulker Box",
        "tile.shulkerBoxYellow.name": "Yellow Shulker Box",
        "tile.shulkerBoxLime.name": "Lime Shulker Box",
        "tile.shulkerBoxPink.name": "Pink Shulker Box",
        "tile.shulkerBoxGray.name": "Gray Shulker Box",
        "tile.shulkerBoxSilver.name": "Light Gray Shulker Box",
        "tile.shulkerBoxCyan.name": "Cyan Shulker Box",
        "tile.shulkerBoxPurple.name": "Purple Shulker Box",
        "tile.shulkerBoxBlue.name": "Blue Shulker Box",
        "tile.shulkerBoxBrown.name": "Brown Shulker Box",
        "tile.shulkerBoxGreen.name": "Green Shulker Box",
        "tile.shulkerBoxRed.name": "Red Shulker Box",
        "tile.shulkerBoxBlack.name": "Black Shulker Box",
        "tile.structureVoid.name": "Structure Void",
        "tile.structureBlock.name": "Structure Block",
        "item.nameTag.name": "Name Tag",
        "item.leash.name": "Lead",
        "item.shovelIron.name": "Iron Shovel",
        "item.pickaxeIron.name": "Iron Pickaxe",
        "item.hatchetIron.name": "Iron Axe",
        "item.flintAndSteel.name": "Flint and Steel",
        "item.apple.name": "Apple",
        "item.cookie.name": "Cookie",
        "item.bow.name": "Bow",
        "item.arrow.name": "Arrow",
        "item.spectral_arrow.name": "Spectral Arrow",
        "item.tipped_arrow.name": "Tipped Arrow",
        "item.coal.name": "Coal",
        "item.charcoal.name": "Charcoal",
        "item.diamond.name": "Diamond",
        "item.emerald.name": "Emerald",
        "item.ingotIron.name": "Iron Ingot",
        "item.ingotGold.name": "Gold Ingot",
        "item.swordIron.name": "Iron Sword",
        "item.swordWood.name": "Wooden Sword",
        "item.shovelWood.name": "Wooden Shovel",
        "item.pickaxeWood.name": "Wooden Pickaxe",
        "item.hatchetWood.name": "Wooden Axe",
        "item.swordStone.name": "Stone Sword",
        "item.shovelStone.name": "Stone Shovel",
        "item.pickaxeStone.name": "Stone Pickaxe",
        "item.hatchetStone.name": "Stone Axe",
        "item.swordDiamond.name": "Diamond Sword",
        "item.shovelDiamond.name": "Diamond Shovel",
        "item.pickaxeDiamond.name": "Diamond Pickaxe",
        "item.hatchetDiamond.name": "Diamond Axe",
        "item.stick.name": "Stick",
        "item.bowl.name": "Bowl",
        "item.mushroomStew.name": "Mushroom Stew",
        "item.swordGold.name": "Golden Sword",
        "item.shovelGold.name": "Golden Shovel",
        "item.pickaxeGold.name": "Golden Pickaxe",
        "item.hatchetGold.name": "Golden Axe",
        "item.string.name": "String",
        "item.feather.name": "Feather",
        "item.sulphur.name": "Gunpowder",
        "item.hoeWood.name": "Wooden Hoe",
        "item.hoeStone.name": "Stone Hoe",
        "item.hoeIron.name": "Iron Hoe",
        "item.hoeDiamond.name": "Diamond Hoe",
        "item.hoeGold.name": "Golden Hoe",
        "item.seeds.name": "Seeds",
        "item.seeds_pumpkin.name": "Pumpkin Seeds",
        "item.seeds_melon.name": "Melon Seeds",
        "item.melon.name": "Melon",
        "item.wheat.name": "Wheat",
        "item.bread.name": "Bread",
        "item.helmetCloth.name": "Leather Cap",
        "item.chestplateCloth.name": "Leather Tunic",
        "item.leggingsCloth.name": "Leather Pants",
        "item.bootsCloth.name": "Leather Boots",
        "item.helmetChain.name": "Chain Helmet",
        "item.chestplateChain.name": "Chain Chestplate",
        "item.leggingsChain.name": "Chain Leggings",
        "item.bootsChain.name": "Chain Boots",
        "item.helmetIron.name": "Iron Helmet",
        "item.chestplateIron.name": "Iron Chestplate",
        "item.leggingsIron.name": "Iron Leggings",
        "item.bootsIron.name": "Iron Boots",
        "item.helmetDiamond.name": "Diamond Helmet",
        "item.chestplateDiamond.name": "Diamond Chestplate",
        "item.leggingsDiamond.name": "Diamond Leggings",
        "item.bootsDiamond.name": "Diamond Boots",
        "item.helmetGold.name": "Golden Helmet",
        "item.chestplateGold.name": "Golden Chestplate",
        "item.leggingsGold.name": "Golden Leggings",
        "item.bootsGold.name": "Golden Boots",
        "item.flint.name": "Flint",
        "item.porkchopRaw.name": "Raw Porkchop",
        "item.porkchopCooked.name": "Cooked Porkchop",
        "item.chickenRaw.name": "Raw Chicken",
        "item.chickenCooked.name": "Cooked Chicken",
        "item.muttonRaw.name": "Raw Mutton",
        "item.muttonCooked.name": "Cooked Mutton",
        "item.rabbitRaw.name": "Raw Rabbit",
        "item.rabbitCooked.name": "Cooked Rabbit",
        "item.rabbitStew.name": "Rabbit Stew",
        "item.rabbitFoot.name": "Rabbit's Foot",
        "item.rabbitHide.name": "Rabbit Hide",
        "item.beefRaw.name": "Raw Beef",
        "item.beefCooked.name": "Steak",
        "item.painting.name": "Painting",
        "item.frame.name": "Item Frame",
        "item.appleGold.name": "Golden Apple",
        "item.sign.name": "Sign",
        "item.doorOak.name": "Oak Door",
        "item.doorSpruce.name": "Spruce Door",
        "item.doorBirch.name": "Birch Door",
        "item.doorJungle.name": "Jungle Door",
        "item.doorAcacia.name": "Acacia Door",
        "item.doorDarkOak.name": "Dark Oak Door",
        "item.bucket.name": "Bucket",
        "item.bucketWater.name": "Water Bucket",
        "item.bucketLava.name": "Lava Bucket",
        "item.minecart.name": "Minecart",
        "item.saddle.name": "Saddle",
        "item.doorIron.name": "Iron Door",
        "item.redstone.name": "Redstone",
        "item.snowball.name": "Snowball",
        "item.boat.oak.name": "Oak Boat",
        "item.boat.spruce.name": "Spruce Boat",
        "item.boat.birch.name": "Birch Boat",
        "item.boat.jungle.name": "Jungle Boat",
        "item.boat.acacia.name": "Acacia Boat",
        "item.boat.dark_oak.name": "Dark Oak Boat",
        "item.leather.name": "Leather",
        "item.milk.name": "Milk",
        "item.brick.name": "Brick",
        "item.clay.name": "Clay",
        "item.reeds.name": "Sugar Canes",
        "item.paper.name": "Paper",
        "item.book.name": "Book",
        "item.slimeball.name": "Slimeball",
        "item.minecartChest.name": "Minecart with Chest",
        "item.minecartFurnace.name": "Minecart with Furnace",
        "item.minecartTnt.name": "Minecart with TNT",
        "item.minecartHopper.name": "Minecart with Hopper",
        "item.minecartCommandBlock.name": "Minecart with Command Block",
        "item.egg.name": "Egg",
        "item.compass.name": "Compass",
        "item.fishingRod.name": "Fishing Rod",
        "item.clock.name": "Clock",
        "item.yellowDust.name": "Glowstone Dust",
        "item.fish.cod.raw.name": "Raw Fish",
        "item.fish.salmon.raw.name": "Raw Salmon",
        "item.fish.pufferfish.raw.name": "Pufferfish",
        "item.fish.clownfish.raw.name": "Clownfish",
        "item.fish.cod.cooked.name": "Cooked Fish",
        "item.fish.salmon.cooked.name": "Cooked Salmon",
        "item.record.name": "Music Disc",
        "item.record.13.desc": "C418 - 13",
        "item.record.cat.desc": "C418 - cat",
        "item.record.blocks.desc": "C418 - blocks",
        "item.record.chirp.desc": "C418 - chirp",
        "item.record.far.desc": "C418 - far",
        "item.record.mall.desc": "C418 - mall",
        "item.record.mellohi.desc": "C418 - mellohi",
        "item.record.stal.desc": "C418 - stal",
        "item.record.strad.desc": "C418 - strad",
        "item.record.ward.desc": "C418 - ward",
        "item.record.11.desc": "C418 - 11",
        "item.record.wait.desc": "C418 - wait",
        "item.bone.name": "Bone",
        "item.dyePowder.black.name": "Ink Sac",
        "item.dyePowder.red.name": "Rose Red",
        "item.dyePowder.green.name": "Cactus Green",
        "item.dyePowder.brown.name": "Cocoa Beans",
        "item.dyePowder.blue.name": "Lapis Lazuli",
        "item.dyePowder.purple.name": "Purple Dye",
        "item.dyePowder.cyan.name": "Cyan Dye",
        "item.dyePowder.silver.name": "Light Gray Dye",
        "item.dyePowder.gray.name": "Gray Dye",
        "item.dyePowder.pink.name": "Pink Dye",
        "item.dyePowder.lime.name": "Lime Dye",
        "item.dyePowder.yellow.name": "Dandelion Yellow",
        "item.dyePowder.lightBlue.name": "Light Blue Dye",
        "item.dyePowder.magenta.name": "Magenta Dye",
        "item.dyePowder.orange.name": "Orange Dye",
        "item.dyePowder.white.name": "Bone Meal",
        "item.sugar.name": "Sugar",
        "item.cake.name": "Cake",
        "item.bed.name": "Bed",
        "item.diode.name": "Redstone Repeater",
        "item.comparator.name": "Redstone Comparator",
        "item.map.name": "Map",
        "item.leaves.name": "Leaves",
        "item.shears.name": "Shears",
        "item.rottenFlesh.name": "Rotten Flesh",
        "item.enderPearl.name": "Ender Pearl",
        "item.blazeRod.name": "Blaze Rod",
        "item.ghastTear.name": "Ghast Tear",
        "item.netherStalkSeeds.name": "Nether Wart",
        "item.potion.name": "Potion",
        "item.splash_potion.name": "Splash Potion",
        "item.lingering_potion.name": "Lingering Potion",
        "item.end_crystal.name": "End Crystal",
        "item.goldNugget.name": "Gold Nugget",
        "item.glassBottle.name": "Glass Bottle",
        "item.spiderEye.name": "Spider Eye",
        "item.fermentedSpiderEye.name": "Fermented Spider Eye",
        "item.blazePowder.name": "Blaze Powder",
        "item.magmaCream.name": "Magma Cream",
        "item.cauldron.name": "Cauldron",
        "item.brewingStand.name": "Brewing Stand",
        "item.eyeOfEnder.name": "Eye of Ender",
        "item.speckledMelon.name": "Glistering Melon",
        "item.monsterPlacer.name": "Spawn",
        "item.expBottle.name": "Bottle o' Enchanting",
        "item.fireball.name": "Fire Charge",
        "item.writingBook.name": "Book and Quill",
        "item.writtenBook.name": "Written Book",
        "item.flowerPot.name": "Flower Pot",
        "item.emptyMap.name": "Empty Map",
        "item.carrots.name": "Carrot",
        "item.carrotGolden.name": "Golden Carrot",
        "item.potato.name": "Potato",
        "item.potatoBaked.name": "Baked Potato",
        "item.potatoPoisonous.name": "Poisonous Potato",
        "item.skull.skeleton.name": "Skeleton Skull",
        "item.skull.wither.name": "Wither Skeleton Skull",
        "item.skull.zombie.name": "Zombie Head",
        "item.skull.char.name": "Head",
        "item.skull.player.name": "%s's Head",
        "item.skull.creeper.name": "Creeper Head",
        "item.skull.dragon.name": "Dragon Head",
        "item.carrotOnAStick.name": "Carrot on a Stick",
        "item.netherStar.name": "Nether Star",
        "item.pumpkinPie.name": "Pumpkin Pie",
        "item.enchantedBook.name": "Enchanted Book",
        "item.fireworks.name": "Firework Rocket",
        "item.fireworks.flight": "Flight Duration:",
        "item.fireworksCharge.name": "Firework Star",
        "item.fireworksCharge.black": "Black",
        "item.fireworksCharge.red": "Red",
        "item.fireworksCharge.green": "Green",
        "item.fireworksCharge.brown": "Brown",
        "item.fireworksCharge.blue": "Blue",
        "item.fireworksCharge.purple": "Purple",
        "item.fireworksCharge.cyan": "Cyan",
        "item.fireworksCharge.silver": "Light Gray",
        "item.fireworksCharge.gray": "Gray",
        "item.fireworksCharge.pink": "Pink",
        "item.fireworksCharge.lime": "Lime",
        "item.fireworksCharge.yellow": "Yellow",
        "item.fireworksCharge.lightBlue": "Light Blue",
        "item.fireworksCharge.magenta": "Magenta",
        "item.fireworksCharge.orange": "Orange",
        "item.fireworksCharge.white": "White",
        "item.fireworksCharge.customColor": "Custom",
        "item.fireworksCharge.fadeTo": "Fade to",
        "item.fireworksCharge.flicker": "Twinkle",
        "item.fireworksCharge.trail": "Trail",
        "item.fireworksCharge.type.0": "Small Ball",
        "item.fireworksCharge.type.1": "Large Ball",
        "item.fireworksCharge.type.2": "Star-shaped",
        "item.fireworksCharge.type.3": "Creeper-shaped",
        "item.fireworksCharge.type.4": "Burst",
        "item.fireworksCharge.type": "Unknown Shape",
        "item.netherbrick.name": "Nether Brick",
        "item.netherquartz.name": "Nether Quartz",
        "item.armorStand.name": "Armor Stand",
        "item.horsearmormetal.name": "Iron Horse Armor",
        "item.horsearmorgold.name": "Gold Horse Armor",
        "item.horsearmordiamond.name": "Diamond Horse Armor",
        "item.prismarineShard.name": "Prismarine Shard",
        "item.prismarineCrystals.name": "Prismarine Crystals",
        "item.chorusFruit.name": "Chorus Fruit",
        "item.chorusFruitPopped.name": "Popped Chorus Fruit",
        "item.beetroot.name": "Beetroot",
        "item.beetroot_seeds.name": "Beetroot Seeds",
        "item.beetroot_soup.name": "Beetroot Soup",
        "item.dragon_breath.name": "Dragon's Breath",
        "item.elytra.name": "Elytra",
        "item.totem.name": "Totem of Undying",
        "item.shulkerShell.name": "Shulker Shell",
        "item.ironNugget.name": "Iron Nugget",
        "container.inventory": "Inventory",
        "container.hopper": "Item Hopper",
        "container.crafting": "Crafting",
        "container.dispenser": "Dispenser",
        "container.dropper": "Dropper",
        "container.furnace": "Furnace",
        "container.enchant": "Enchant",
        "container.enchant.lapis.one": "1 Lapis Lazuli",
        "container.enchant.lapis.many": "%s Lapis Lazuli",
        "container.enchant.level.one": "1 Enchantment Level",
        "container.enchant.level.many": "%s Enchantment Levels",
        "container.enchant.clue": "%s . . . ?",
        "container.repair": "Repair & Name",
        "container.repair.cost": "Enchantment Cost: %1$s",
        "container.repair.expensive": "Too Expensive!",
        "container.creative": "Item Selection",
        "container.brewing": "Brewing Stand",
        "container.chest": "Chest",
        "container.chestDouble": "Large Chest",
        "container.enderchest": "Ender Chest",
        "container.beacon": "Beacon",
        "container.shulkerBox": "Shulker Box",
        "container.shulkerBox.more": "and %s more...",
        "container.spectatorCantOpen": "Unable to open. Loot not generated yet.",
        "container.isLocked": "%s is locked!",
        "structure_block.save_success": "Structure saved as '%s'",
        "structure_block.save_failure": "Unable to save structure '%s'",
        "structure_block.load_success": "Structure loaded from '%s'",
        "structure_block.load_prepare": "Structure '%s' position prepared",
        "structure_block.load_not_found": "Structure '%s' is not available",
        "structure_block.size_success": "Size successfully detected for '%s'",
        "structure_block.size_failure": "Unable to detect structure size, add corners with matching structure names",
        "structure_block.mode.save": "[S]",
        "structure_block.mode.load": "[L]",
        "structure_block.mode.data": "[D]",
        "structure_block.mode.corner": "[C]",
        "structure_block.hover.save": "Save: %s",
        "structure_block.hover.load": "Load: %s",
        "structure_block.hover.data": "Data: %s",
        "structure_block.hover.corner": "Corner: %s",
        "structure_block.mode_info.save": "Save mode - write to file",
        "structure_block.mode_info.load": "Load mode - load from file",
        "structure_block.mode_info.data": "Data mode - game logic marker",
        "structure_block.mode_info.corner": "Corner mode - placement and size marker",
        "structure_block.structure_name": "Structure Name",
        "structure_block.custom_data": "Custom Data Tag Name",
        "structure_block.position": "Relative Position",
        "structure_block.size": "Structure Size",
        "structure_block.integrity": "Structure Integrity and Seed",
        "structure_block.include_entities": "Include entities:",
        "structure_block.detect_size": "Detect structure size and position:",
        "structure_block.button.detect_size": "DETECT",
        "structure_block.button.save": "SAVE",
        "structure_block.button.load": "LOAD",
        "structure_block.show_air": "Show invisible blocks:",
        "structure_block.show_boundingbox": "Show bounding box:",
        "item.dyed": "Dyed",
        "item.unbreakable": "Unbreakable",
        "item.canBreak": "Can break:",
        "item.canPlace": "Can be placed on:",
        "item.color": "Color: %s",
        "item.nbt_tags": "NBT: %s tag(s)",
        "item.durability": "Durability: %s / %s",
        "filled_map.mansion": "Woodland Explorer Map",
        "filled_map.monument": "Ocean Explorer Map",
        "entity.Item.name": "Item",
        "entity.XPOrb.name": "Experience Orb",
        "entity.SmallFireball.name": "Small Fireball",
        "entity.Fireball.name": "Fireball",
        "entity.DragonFireball.name": "Dragon Fireball",
        "entity.ThrownPotion.name": "Potion",
        "entity.Arrow.name": "Arrow",
        "entity.Snowball.name": "Snowball",
        "entity.Painting.name": "Painting",
        "entity.ArmorStand.name": "Armor Stand",
        "entity.Mob.name": "Mob",
        "entity.Monster.name": "Monster",
        "entity.Creeper.name": "Creeper",
        "entity.Skeleton.name": "Skeleton",
        "entity.WitherSkeleton.name": "Wither Skeleton",
        "entity.Stray.name": "Stray",
        "entity.Spider.name": "Spider",
        "entity.Giant.name": "Giant",
        "entity.Zombie.name": "Zombie",
        "entity.Husk.name": "Husk",
        "entity.Slime.name": "Slime",
        "entity.Ghast.name": "Ghast",
        "entity.PigZombie.name": "Zombie Pigman",
        "entity.Enderman.name": "Enderman",
        "entity.Endermite.name": "Endermite",
        "entity.Silverfish.name": "Silverfish",
        "entity.CaveSpider.name": "Cave Spider",
        "entity.Blaze.name": "Blaze",
        "entity.LavaSlime.name": "Magma Cube",
        "entity.MushroomCow.name": "Mooshroom",
        "entity.Villager.name": "Villager",
        "entity.ZombieVillager.name": "Zombie Villager",
        "entity.VillagerGolem.name": "Iron Golem",
        "entity.SnowMan.name": "Snow Golem",
        "entity.EnderDragon.name": "Ender Dragon",
        "entity.WitherBoss.name": "Wither",
        "entity.Witch.name": "Witch",
        "entity.Guardian.name": "Guardian",
        "entity.ElderGuardian.name": "Elder Guardian",
        "entity.Shulker.name": "Shulker",
        "entity.PolarBear.name": "Polar Bear",
        "entity.EvocationIllager.name": "Evoker",
        "entity.Vex.name": "Vex",
        "entity.VindicationIllager.name": "Vindicator",
        "entity.Villager.farmer": "Farmer",
        "entity.Villager.fisherman": "Fisherman",
        "entity.Villager.shepherd": "Shepherd",
        "entity.Villager.fletcher": "Fletcher",
        "entity.Villager.librarian": "Librarian",
        "entity.Villager.cleric": "Cleric",
        "entity.Villager.armor": "Armorer",
        "entity.Villager.weapon": "Weapon Smith",
        "entity.Villager.tool": "Tool Smith",
        "entity.Villager.butcher": "Butcher",
        "entity.Villager.leather": "Leatherworker",
        "entity.Villager.nitwit": "Nitwit",
        "entity.Villager.cartographer": "Cartographer",
        "entity.Pig.name": "Pig",
        "entity.Sheep.name": "Sheep",
        "entity.Cow.name": "Cow",
        "entity.Chicken.name": "Chicken",
        "entity.Squid.name": "Squid",
        "entity.Wolf.name": "Wolf",
        "entity.Ozelot.name": "Ocelot",
        "entity.Cat.name": "Cat",
        "entity.Bat.name": "Bat",
        "entity.Horse.name": "Horse",
        "entity.Donkey.name": "Donkey",
        "entity.Mule.name": "Mule",
        "entity.SkeletonHorse.name": "Skeleton Horse",
        "entity.ZombieHorse.name": "Zombie Horse",
        "entity.Rabbit.name": "Rabbit",
        "entity.KillerBunny.name": "The Killer Bunny",
        "entity.Llama.name": "Llama",
        "entity.PrimedTnt.name": "Block of TNT",
        "entity.FallingSand.name": "Falling Block",
        "entity.Minecart.name": "Minecart",
        "entity.MinecartHopper.name": "Minecart with Hopper",
        "entity.MinecartChest.name": "Minecart with Chest",
        "entity.Boat.name": "Boat",
        "entity.generic.name": "unknown",
        "death.fell.accident.ladder": "%1$s fell off a ladder",
        "death.fell.accident.vines": "%1$s fell off some vines",
        "death.fell.accident.water": "%1$s fell out of the water",
        "death.fell.accident.generic": "%1$s fell from a high place",
        "death.fell.killer": "%1$s was doomed to fall",
        "death.fell.assist": "%1$s was doomed to fall by %2$s",
        "death.fell.assist.item": "%1$s was doomed to fall by %2$s using %3$s",
        "death.fell.finish": "%1$s fell too far and was finished by %2$s",
        "death.fell.finish.item": "%1$s fell too far and was finished by %2$s using %3$s",
        "death.attack.lightningBolt": "%1$s was struck by lightning",
        "death.attack.inFire": "%1$s went up in flames",
        "death.attack.inFire.player": "%1$s walked into fire whilst fighting %2$s",
        "death.attack.onFire": "%1$s burned to death",
        "death.attack.onFire.player": "%1$s was burnt to a crisp whilst fighting %2$s",
        "death.attack.lava": "%1$s tried to swim in lava",
        "death.attack.lava.player": "%1$s tried to swim in lava to escape %2$s",
        "death.attack.hotFloor": "%1$s discovered floor was lava",
        "death.attack.hotFloor.player": "%1$s walked into danger zone due to %2$s",
        "death.attack.inWall": "%1$s suffocated in a wall",
        "death.attack.cramming": "%1$s was squished too much",
        "death.attack.drown": "%1$s drowned",
        "death.attack.drown.player": "%1$s drowned whilst trying to escape %2$s",
        "death.attack.starve": "%1$s starved to death",
        "death.attack.cactus": "%1$s was pricked to death",
        "death.attack.cactus.player": "%1$s walked into a cactus whilst trying to escape %2$s",
        "death.attack.generic": "%1$s died",
        "death.attack.explosion": "%1$s blew up",
        "death.attack.explosion.player": "%1$s was blown up by %2$s",
        "death.attack.magic": "%1$s was killed by magic",
        "death.attack.wither": "%1$s withered away",
        "death.attack.anvil": "%1$s was squashed by a falling anvil",
        "death.attack.fallingBlock": "%1$s was squashed by a falling block",
        "death.attack.mob": "%1$s was slain by %2$s",
        "death.attack.player": "%1$s was slain by %2$s",
        "death.attack.player.item": "%1$s was slain by %2$s using %3$s",
        "death.attack.arrow": "%1$s was shot by %2$s",
        "death.attack.arrow.item": "%1$s was shot by %2$s using %3$s",
        "death.attack.fireball": "%1$s was fireballed by %2$s",
        "death.attack.fireball.item": "%1$s was fireballed by %2$s using %3$s",
        "death.attack.thrown": "%1$s was pummeled by %2$s",
        "death.attack.thrown.item": "%1$s was pummeled by %2$s using %3$s",
        "death.attack.indirectMagic": "%1$s was killed by %2$s using magic",
        "death.attack.indirectMagic.item": "%1$s was killed by %2$s using %3$s",
        "death.attack.thorns": "%1$s was killed trying to hurt %2$s",
        "death.attack.fall": "%1$s hit the ground too hard",
        "death.attack.outOfWorld": "%1$s fell out of the world",
        "death.attack.dragonBreath": "%1$s was roasted in dragon breath",
        "death.attack.flyIntoWall": "%1$s experienced kinetic energy",
        "death.attack.fireworks": "%1$s went off with a bang",
        "deathScreen.respawn": "Respawn",
        "deathScreen.spectate": "Spectate world",
        "deathScreen.deleteWorld": "Delete world",
        "deathScreen.titleScreen": "Title screen",
        "deathScreen.score": "Score",
        "deathScreen.title.hardcore": "Game over!",
        "deathScreen.title": "You died!",
        "deathScreen.leaveServer": "Leave server",
        "deathScreen.quit.confirm": "Are you sure you want to quit?",
        "effect.none": "No Effects",
        "effect.moveSpeed": "Speed",
        "effect.moveSlowdown": "Slowness",
        "effect.digSpeed": "Haste",
        "effect.digSlowDown": "Mining Fatigue",
        "effect.damageBoost": "Strength",
        "effect.heal": "Instant Health",
        "effect.harm": "Instant Damage",
        "effect.jump": "Jump Boost",
        "effect.confusion": "Nausea",
        "effect.regeneration": "Regeneration",
        "effect.resistance": "Resistance",
        "effect.fireResistance": "Fire Resistance",
        "effect.waterBreathing": "Water Breathing",
        "effect.invisibility": "Invisibility",
        "effect.blindness": "Blindness",
        "effect.nightVision": "Night Vision",
        "effect.hunger": "Hunger",
        "effect.weakness": "Weakness",
        "effect.poison": "Poison",
        "effect.wither": "Wither",
        "effect.healthBoost": "Health Boost",
        "effect.absorption": "Absorption",
        "effect.saturation": "Saturation",
        "effect.glowing": "Glowing",
        "effect.luck": "Luck",
        "effect.unluck": "Bad Luck",
        "effect.levitation": "Levitation",
        "tipped_arrow.effect.empty": "Uncraftable Tipped Arrow",
        "tipped_arrow.effect.water": "Arrow of Splashing",
        "tipped_arrow.effect.mundane": "Tipped Arrow",
        "tipped_arrow.effect.thick": "Tipped Arrow",
        "tipped_arrow.effect.awkward": "Tipped Arrow",
        "tipped_arrow.effect.night_vision": "Arrow of Night Vision",
        "tipped_arrow.effect.invisibility": "Arrow of Invisibility",
        "tipped_arrow.effect.leaping": "Arrow of Leaping",
        "tipped_arrow.effect.fire_resistance": "Arrow of Fire Resistance",
        "tipped_arrow.effect.swiftness": "Arrow of Swiftness",
        "tipped_arrow.effect.slowness": "Arrow of Slowness",
        "tipped_arrow.effect.water_breathing": "Arrow of Water Breathing",
        "tipped_arrow.effect.healing": "Arrow of Healing",
        "tipped_arrow.effect.harming": "Arrow of Harming",
        "tipped_arrow.effect.poison": "Arrow of Poison",
        "tipped_arrow.effect.regeneration": "Arrow of Regeneration",
        "tipped_arrow.effect.strength": "Arrow of Strength",
        "tipped_arrow.effect.weakness": "Arrow of Weakness",
        "tipped_arrow.effect.levitation": "Arrow of Levitation",
        "tipped_arrow.effect.luck": "Arrow of Luck",
        "potion.whenDrank": "When Applied:",
        "potion.effect.empty": "Uncraftable Potion",
        "potion.effect.water": "Water Bottle",
        "potion.effect.mundane": "Mundane Potion",
        "potion.effect.thick": "Thick Potion",
        "potion.effect.awkward": "Awkward Potion",
        "potion.effect.night_vision": "Potion of Night Vision",
        "potion.effect.invisibility": "Potion of Invisibility",
        "potion.effect.leaping": "Potion of Leaping",
        "potion.effect.fire_resistance": "Potion of Fire Resistance",
        "potion.effect.swiftness": "Potion of Swiftness",
        "potion.effect.slowness": "Potion of Slowness",
        "potion.effect.water_breathing": "Potion of Water Breathing",
        "potion.effect.healing": "Potion of Healing",
        "potion.effect.harming": "Potion of Harming",
        "potion.effect.poison": "Potion of Poison",
        "potion.effect.regeneration": "Potion of Regeneration",
        "potion.effect.strength": "Potion of Strength",
        "potion.effect.weakness": "Potion of Weakness",
        "potion.effect.levitation": "Potion of Levitation",
        "potion.effect.luck": "Potion of Luck",
        "splash_potion.effect.empty": "Splash Uncraftable Potion",
        "splash_potion.effect.water": "Splash Water Bottle",
        "splash_potion.effect.mundane": "Mundane Splash Potion",
        "splash_potion.effect.thick": "Thick Splash Potion",
        "splash_potion.effect.awkward": "Awkward Splash Potion",
        "splash_potion.effect.night_vision": "Splash Potion of Night Vision",
        "splash_potion.effect.invisibility": "Splash Potion of Invisibility",
        "splash_potion.effect.leaping": "Splash Potion of Leaping",
        "splash_potion.effect.fire_resistance": "Splash Potion of Fire Resistance",
        "splash_potion.effect.swiftness": "Splash Potion of Swiftness",
        "splash_potion.effect.slowness": "Splash Potion of Slowness",
        "splash_potion.effect.water_breathing": "Splash Potion of Water Breathing",
        "splash_potion.effect.healing": "Splash Potion of Healing",
        "splash_potion.effect.harming": "Splash Potion of Harming",
        "splash_potion.effect.poison": "Splash Potion of Poison",
        "splash_potion.effect.regeneration": "Splash Potion of Regeneration",
        "splash_potion.effect.strength": "Splash Potion of Strength",
        "splash_potion.effect.weakness": "Splash Potion of Weakness",
        "splash_potion.effect.levitation": "Splash Potion of Levitation",
        "splash_potion.effect.luck": "Splash Potion of Luck",
        "lingering_potion.effect.empty": "Lingering Uncraftable Potion",
        "lingering_potion.effect.water": "Lingering Water Bottle",
        "lingering_potion.effect.mundane": "Mundane Lingering Potion",
        "lingering_potion.effect.thick": "Thick Lingering Potion",
        "lingering_potion.effect.awkward": "Awkward Lingering Potion",
        "lingering_potion.effect.night_vision": "Lingering Potion of Night Vision",
        "lingering_potion.effect.invisibility": "Lingering Potion of Invisibility",
        "lingering_potion.effect.leaping": "Lingering Potion of Leaping",
        "lingering_potion.effect.fire_resistance": "Lingering Potion of Fire Resistance",
        "lingering_potion.effect.swiftness": "Lingering Potion of Swiftness",
        "lingering_potion.effect.slowness": "Lingering Potion of Slowness",
        "lingering_potion.effect.water_breathing": "Lingering Potion of Water Breathing",
        "lingering_potion.effect.healing": "Lingering Potion of Healing",
        "lingering_potion.effect.harming": "Lingering Potion of Harming",
        "lingering_potion.effect.poison": "Lingering Potion of Poison",
        "lingering_potion.effect.regeneration": "Lingering Potion of Regeneration",
        "lingering_potion.effect.strength": "Lingering Potion of Strength",
        "lingering_potion.effect.weakness": "Lingering Potion of Weakness",
        "lingering_potion.effect.levitation": "Lingering Potion of Levitation",
        "lingering_potion.effect.luck": "Lingering Potion of Luck",
        "potion.potency.1": "II",
        "potion.potency.2": "III",
        "enchantment.damage.all": "Sharpness",
        "enchantment.damage.undead": "Smite",
        "enchantment.damage.arthropods": "Bane of Arthropods",
        "enchantment.knockback": "Knockback",
        "enchantment.fire": "Fire Aspect",
        "enchantment.sweeping": "Sweeping Edge",
        "enchantment.protect.all": "Protection",
        "enchantment.protect.fire": "Fire Protection",
        "enchantment.protect.fall": "Feather Falling",
        "enchantment.protect.explosion": "Blast Protection",
        "enchantment.protect.projectile": "Projectile Protection",
        "enchantment.oxygen": "Respiration",
        "enchantment.waterWorker": "Aqua Affinity",
        "enchantment.waterWalker": "Depth Strider",
        "enchantment.frostWalker": "Frost Walker",
        "enchantment.digging": "Efficiency",
        "enchantment.untouching": "Silk Touch",
        "enchantment.durability": "Unbreaking",
        "enchantment.lootBonus": "Looting",
        "enchantment.lootBonusDigger": "Fortune",
        "enchantment.lootBonusFishing": "Luck of the Sea",
        "enchantment.fishingSpeed": "Lure",
        "enchantment.arrowDamage": "Power",
        "enchantment.arrowFire": "Flame",
        "enchantment.arrowKnockback": "Punch",
        "enchantment.arrowInfinite": "Infinity",
        "enchantment.thorns": "Thorns",
        "enchantment.mending": "Mending",
        "enchantment.binding_curse": "Curse of Binding",
        "enchantment.vanishing_curse": "Curse of Vanishing",
        "enchantment.level.1": "I",
        "enchantment.level.2": "II",
        "enchantment.level.3": "III",
        "enchantment.level.4": "IV",
        "enchantment.level.5": "V",
        "enchantment.level.6": "VI",
        "enchantment.level.7": "VII",
        "enchantment.level.8": "VIII",
        "enchantment.level.9": "IX",
        "enchantment.level.10": "X",
        "gui.achievements": "Achievements",
        "gui.stats": "Statistics",
        "stats.tooltip.type.achievement": "Achievement",
        "stats.tooltip.type.statistic": "Statistic",
        "stat.generalButton": "General",
        "stat.blocksButton": "Blocks",
        "stat.itemsButton": "Items",
        "stat.mobsButton": "Mobs",
        "stat.used": "Times Used",
        "stat.mined": "Times Mined",
        "stat.depleted": "Times Depleted",
        "stat.crafted": "Times Crafted",
        "stat.entityKills": "You killed %s %s",
        "stat.entityKilledBy": "%s killed you %s time(s)",
        "stat.entityKills.none": "You have never killed %s",
        "stat.entityKilledBy.none": "You have never been killed by %s",
        "stat.startGame": "Times Played",
        "stat.createWorld": "Worlds Created",
        "stat.loadWorld": "Saves Loaded",
        "stat.joinMultiplayer": "Multiplayer Joins",
        "stat.leaveGame": "Games Quit",
        "stat.playOneMinute": "Minutes Played",
        "stat.timeSinceDeath": "Since Last Death",
        "stat.sneakTime": "Sneak Time",
        "stat.walkOneCm": "Distance Walked",
        "stat.crouchOneCm": "Distance Crouched",
        "stat.sprintOneCm": "Distance Sprinted",
        "stat.fallOneCm": "Distance Fallen",
        "stat.swimOneCm": "Distance Swum",
        "stat.flyOneCm": "Distance Flown",
        "stat.climbOneCm": "Distance Climbed",
        "stat.diveOneCm": "Distance Dove",
        "stat.minecartOneCm": "Distance by Minecart",
        "stat.boatOneCm": "Distance by Boat",
        "stat.pigOneCm": "Distance by Pig",
        "stat.horseOneCm": "Distance by Horse",
        "stat.aviateOneCm": "Distance by Elytra",
        "stat.jump": "Jumps",
        "stat.drop": "Items Dropped",
        "stat.dropped": "Dropped",
        "stat.pickup": "Picked Up",
        "stat.damageDealt": "Damage Dealt",
        "stat.damageTaken": "Damage Taken",
        "stat.deaths": "Number of Deaths",
        "stat.mobKills": "Mob Kills",
        "stat.animalsBred": "Animals Bred",
        "stat.playerKills": "Player Kills",
        "stat.fishCaught": "Fish Caught",
        "stat.treasureFished": "Treasure Fished",
        "stat.junkFished": "Junk Fished",
        "stat.talkedToVillager": "Talked to Villagers",
        "stat.tradedWithVillager": "Traded with Villagers",
        "stat.cakeSlicesEaten": "Cake Slices Eaten",
        "stat.cauldronFilled": "Cauldrons Filled",
        "stat.cauldronUsed": "Water Taken from Cauldron",
        "stat.armorCleaned": "Armor Pieces Cleaned",
        "stat.bannerCleaned": "Banners Cleaned",
        "stat.brewingstandInteraction": "Interactions with Brewing Stand",
        "stat.beaconInteraction": "Interactions with Beacon",
        "stat.dropperInspected": "Droppers Searched",
        "stat.hopperInspected": "Hoppers Searched",
        "stat.dispenserInspected": "Dispensers Searched",
        "stat.noteblockPlayed": "Note Blocks Played",
        "stat.noteblockTuned": "Note Blocks Tuned",
        "stat.flowerPotted": "Plants Potted",
        "stat.trappedChestTriggered": "Trapped Chests Triggered",
        "stat.enderchestOpened": "Ender Chests Opened",
        "stat.itemEnchanted": "Items Enchanted",
        "stat.recordPlayed": "Records Played",
        "stat.furnaceInteraction": "Interactions with Furnace",
        "stat.workbenchInteraction": "Interactions with Crafting Table",
        "stat.chestOpened": "Chests Opened",
        "stat.shulkerBoxOpened": "Shulker Boxes Opened",
        "stat.sleepInBed": "Times Slept in a Bed",
        "stat.mineBlock": "%1$s Mined",
        "stat.craftItem": "%1$s Crafted",
        "stat.useItem": "%1$s Used",
        "stat.breakItem": "%1$s Depleted",
        "achievement.get": "Achievement get!",
        "achievement.taken": "Taken!",
        "achievement.unknown": "???",
        "achievement.requires": "Requires '%1$s'",
        "achievement.openInventory": "Taking Inventory",
        "achievement.openInventory.desc": "Press '%1$s' to open your inventory",
        "achievement.mineWood": "Getting Wood",
        "achievement.mineWood.desc": "Attack a tree until a block of wood pops out",
        "achievement.buildWorkBench": "Benchmarking",
        "achievement.buildWorkBench.desc": "Craft a workbench with four blocks of planks",
        "achievement.buildPickaxe": "Time to Mine!",
        "achievement.buildPickaxe.desc": "Use planks and sticks to make a pickaxe",
        "achievement.buildFurnace": "Hot Topic",
        "achievement.buildFurnace.desc": "Construct a furnace out of eight cobblestone blocks",
        "achievement.acquireIron": "Acquire Hardware",
        "achievement.acquireIron.desc": "Smelt an iron ingot",
        "achievement.buildHoe": "Time to Farm!",
        "achievement.buildHoe.desc": "Use planks and sticks to make a hoe",
        "achievement.makeBread": "Bake Bread",
        "achievement.makeBread.desc": "Turn wheat into bread",
        "achievement.bakeCake": "The Lie",
        "achievement.bakeCake.desc": "Wheat, sugar, milk and eggs!",
        "achievement.buildBetterPickaxe": "Getting an Upgrade",
        "achievement.buildBetterPickaxe.desc": "Construct a better pickaxe",
        "achievement.overpowered": "Overpowered",
        "achievement.overpowered.desc": "Eat a Notch apple",
        "achievement.cookFish": "Delicious Fish",
        "achievement.cookFish.desc": "Catch and cook fish!",
        "achievement.onARail": "On A Rail",
        "achievement.onARail.desc": "Travel by minecart at least 1 km from where you started",
        "achievement.buildSword": "Time to Strike!",
        "achievement.buildSword.desc": "Use planks and sticks to make a sword",
        "achievement.killEnemy": "Monster Hunter",
        "achievement.killEnemy.desc": "Attack and destroy a monster",
        "achievement.killCow": "Cow Tipper",
        "achievement.killCow.desc": "Harvest some leather",
        "achievement.breedCow": "Repopulation",
        "achievement.breedCow.desc": "Breed two cows with wheat",
        "achievement.flyPig": "When Pigs Fly",
        "achievement.flyPig.desc": "Fly a pig off a cliff",
        "achievement.snipeSkeleton": "Sniper Duel",
        "achievement.snipeSkeleton.desc": "Kill a skeleton with an arrow from more than 50 meters",
        "achievement.diamonds": "DIAMONDS!",
        "achievement.diamonds.desc": "Acquire diamonds with your iron tools",
        "achievement.diamondsToYou": "Diamonds to you!",
        "achievement.diamondsToYou.desc": "Throw diamonds at another player",
        "achievement.portal": "We Need to Go Deeper",
        "achievement.portal.desc": "Build a portal to the Nether",
        "achievement.ghast": "Return to Sender",
        "achievement.ghast.desc": "Destroy a Ghast with a fireball",
        "achievement.blazeRod": "Into Fire",
        "achievement.blazeRod.desc": "Relieve a Blaze of its rod",
        "achievement.potion": "Local Brewery",
        "achievement.potion.desc": "Brew a potion",
        "achievement.theEnd": "The End?",
        "achievement.theEnd.desc": "Locate the End",
        "achievement.theEnd2": "The End.",
        "achievement.theEnd2.desc": "Defeat the Ender Dragon",
        "achievement.spawnWither": "The Beginning?",
        "achievement.spawnWither.desc": "Spawn the Wither",
        "achievement.killWither": "The Beginning.",
        "achievement.killWither.desc": "Kill the Wither",
        "achievement.fullBeacon": "Beaconator",
        "achievement.fullBeacon.desc": "Create a full beacon",
        "achievement.exploreAllBiomes": "Adventuring Time",
        "achievement.exploreAllBiomes.desc": "Discover all biomes",
        "achievement.enchantments": "Enchanter",
        "achievement.enchantments.desc": "Use a book, obsidian and diamonds to construct an enchantment table",
        "achievement.overkill": "Overkill",
        "achievement.overkill.desc": "Deal nine hearts of damage in a single hit",
        "achievement.bookcase": "Librarian",
        "achievement.bookcase.desc": "Build some bookshelves to improve your enchantment table",
        "commands.generic.exception": "An unknown error occurred while attempting to perform this command",
        "commands.generic.permission": "You do not have permission to use this command",
        "commands.generic.syntax": "Invalid command syntax",
        "commands.generic.player.notFound": "Player '%s' cannot be found",
        "commands.generic.entity.notFound": "Entity '%s' cannot be found",
        "commands.generic.selector.notFound": "Selector '%s' found nothing",
        "commands.generic.entity.invalidUuid": "The entity UUID '%s' is in an invalid format",
        "commands.generic.entity.invalidType": "Entity type '%s' is invalid",
        "commands.generic.notFound": "Unknown command. Try /help for a list of commands",
        "commands.generic.parameter.invalid": "'%s' is not a valid parameter",
        "commands.generic.num.invalid": "'%s' is not a valid number",
        "commands.generic.boolean.invalid": "'%s' is not true or false",
        "commands.generic.num.tooSmall": "The number you have entered (%s) is too small, it must be at least %s",
        "commands.generic.num.tooBig": "The number you have entered (%s) is too big, it must be at most %s",
        "commands.generic.blockstate.invalid": "'%s' is not a state for block %s",
        "commands.generic.usage": "Usage: %s",
        "commands.generic.selector_argument": "Invalid selector argument: '%s'",
        "commands.generic.player.unspecified": "You must specify which player you wish to perform this action on.",
        "commands.setidletimeout.usage": "/setidletimeout <Minutes until kick>",
        "commands.setidletimeout.success": "Successfully set the idle timeout to %s minutes.",
        "commands.xp.failure.widthdrawXp": "Cannot give player negative experience points",
        "commands.xp.success": "Given %s experience to %s",
        "commands.xp.success.levels": "Given %s levels to %s",
        "commands.xp.success.negative.levels": "Taken %s levels from %s",
        "commands.xp.usage": "/xp <amount> [player] OR /xp <amount>L [player]",
        "commands.playsound.usage": "/playsound <sound> <source> <player> [x] [y] [z] [volume] [pitch] [minimumVolume]",
        "commands.playsound.success": "Played sound '%s' to %s",
        "commands.playsound.playerTooFar": "Player %s is too far away to hear the sound",
        "commands.playsound.unknownSoundSource": "Source %s is unknown",
        "commands.give.usage": "/give <player> <item> [amount] [data] [dataTag]",
        "commands.give.item.notFound": "There is no such item with name %s",
        "commands.give.block.notFound": "There is no such block with name %s",
        "commands.give.success": "Given %s * %s to %s",
        "commands.give.tagError": "Data tag parsing failed: %s",
        "commands.replaceitem.usage": "/replaceitem <entity|block> ...",
        "commands.replaceitem.entity.usage": "/replaceitem entity <selector> <slot> <item> [amount] [data] [dataTag]",
        "commands.replaceitem.block.usage": "/replaceitem block <x> <y> <z> <slot> <item> [amount] [data] [dataTag]",
        "commands.replaceitem.tagError": "Data tag parsing failed: %s",
        "commands.replaceitem.noContainer": "Block at %s, %s, %s is not a container",
        "commands.replaceitem.failed": "Could not replace slot %s with %s * %s",
        "commands.replaceitem.success": "Replaced slot %s with %s * %s",
        "commands.stats.usage": "/stats <entity|block> ...",
        "commands.stats.entity.usage": "/stats entity <selector> <mode> ...",
        "commands.stats.entity.set.usage": "/stats entity <selector> set <stat> <selector> <objective>",
        "commands.stats.entity.clear.usage": "/stats entity <selector> clear <stat>",
        "commands.stats.block.usage": "/stats block <x> <y> <z> <mode> ...",
        "commands.stats.block.set.usage": "/stats block <x> <y> <z> set <stat> <selector> <objective>",
        "commands.stats.block.clear.usage": "/stats block <x> <y> <z> clear <stat>",
        "commands.stats.noCompatibleBlock": "Block at %s, %s, %s can not track stats",
        "commands.stats.failed": "Invalid parameters",
        "commands.stats.cleared": "Cleared %s stats",
        "commands.stats.success": "Storing %s stats in %s on %s",
        "commands.summon.usage": "/summon <entityname> [x] [y] [z] [dataTag]",
        "commands.summon.success": "Object successfully summoned",
        "commands.summon.failed": "Unable to summon object",
        "commands.summon.tagError": "Data tag parsing failed: %s",
        "commands.summon.outOfWorld": "Cannot summon the object out of the world",
        "commands.testforblock.usage": "/testforblock <x> <y> <z> <block> [dataValue|-1|state|*] [dataTag]",
        "commands.testforblock.failed.tile": "The block at %s, %s, %s is %s (expected: %s)",
        "commands.testforblock.failed.data": "The block at %s, %s, %s had the data value of %s (expected: %s)",
        "commands.testforblock.failed.nbt": "The block at %s, %s, %s did not have the required NBT keys",
        "commands.testforblock.failed.tileEntity": "The block at %s, %s, %s is not a block entity and cannot support tag matching",
        "commands.testforblock.success": "Successfully found the block at %s, %s, %s",
        "commands.testforblock.outOfWorld": "Cannot test for block outside of the world",
        "commands.setblock.usage": "/setblock <x> <y> <z> <block> [dataValue|state] [oldBlockHandling] [dataTag]",
        "commands.setblock.success": "Block placed",
        "commands.setblock.failed": "Unable to place block",
        "commands.setblock.tagError": "Data tag parsing failed: %s",
        "commands.setblock.outOfWorld": "Cannot place block outside of the world",
        "commands.setblock.notFound": "There is no such block with ID/name %s",
        "commands.setblock.noChange": "The block couldn't be placed",
        "commands.fill.usage": "/fill <x1> <y1> <z1> <x2> <y2> <z2> <block> [dataValue|state] [oldBlockHandling] [dataTag]",
        "commands.fill.outOfWorld": "Cannot place blocks outside of the world",
        "commands.fill.tagError": "Data tag parsing failed: %s",
        "commands.fill.success": "%s blocks filled",
        "commands.fill.failed": "No blocks filled",
        "commands.fill.tooManyBlocks": "Too many blocks in the specified area (%s > %s)",
        "commands.clone.usage": "/clone <x1> <y1> <z1> <x2> <y2> <z2> <x> <y> <z> [maskMode] [cloneMode]",
        "commands.clone.outOfWorld": "Cannot access blocks outside of the world",
        "commands.clone.noOverlap": "Source and destination can not overlap",
        "commands.clone.success": "%s blocks cloned",
        "commands.clone.failed": "No blocks cloned",
        "commands.clone.tooManyBlocks": "Too many blocks in the specified area (%s > %s)",
        "commands.compare.usage": "/testforblocks <x1> <y1> <z1> <x2> <y2> <z2> <x> <y> <z> [mode]",
        "commands.compare.outOfWorld": "Cannot access blocks outside of the world",
        "commands.compare.failed": "Source and destination are not identical",
        "commands.compare.success": "%s blocks compared",
        "commands.compare.tooManyBlocks": "Too many blocks in the specified area (%s > %s)",
        "commands.blockdata.usage": "/blockdata <x> <y> <z> <dataTag>",
        "commands.blockdata.success": "Block data updated to: %s",
        "commands.blockdata.tagError": "Data tag parsing failed: %s",
        "commands.blockdata.outOfWorld": "Cannot change block outside of the world",
        "commands.blockdata.notValid": "The target block is not a data holder block",
        "commands.blockdata.failed": "The data tag did not change: %s",
        "commands.entitydata.usage": "/entitydata <entity> <dataTag>",
        "commands.entitydata.success": "Entity data updated to: %s",
        "commands.entitydata.tagError": "Data tag parsing failed: %s",
        "commands.entitydata.noPlayers": "%s is a player and cannot be changed",
        "commands.entitydata.failed": "The data tag did not change: %s",
        "commands.effect.usage": "/effect <player> <effect> [seconds] [amplifier] [hideParticles] OR /effect <player> clear",
        "commands.effect.notFound": "There is no such mob effect with ID %s",
        "commands.effect.success": "Given %1$s (ID %2$s) * %3$s to %4$s for %5$s seconds",
        "commands.effect.success.removed": "Took %1$s from %2$s",
        "commands.effect.success.removed.all": "Took all effects from %s",
        "commands.effect.failure.notActive": "Couldn't take %1$s from %2$s as they do not have the effect",
        "commands.effect.failure.notActive.all": "Couldn't take any effects from %s as they do not have any",
        "commands.enchant.usage": "/enchant <player> <enchantment ID> [level]",
        "commands.enchant.notFound": "There is no such enchantment with ID %s",
        "commands.enchant.noItem": "The target doesn't hold an item",
        "commands.enchant.cantEnchant": "The selected enchantment can't be added to the target item",
        "commands.enchant.cantCombine": "%1$s can't be combined with %2$s",
        "commands.enchant.success": "Enchanting succeeded",
        "commands.particle.usage": "/particle <name> <x> <y> <z> <xd> <yd> <zd> <speed> [count] [mode] [player] [params]",
        "commands.particle.success": "Playing effect %s for %s times",
        "commands.particle.notFound": "Unknown effect name (%s)",
        "commands.particle.invalidParam": "Invalid param given (%s)",
        "commands.clear.usage": "/clear [player] [item] [data] [maxCount] [dataTag]",
        "commands.clear.success": "Cleared the inventory of %s, removing %s items",
        "commands.clear.testing": "%s has %s items that match the criteria",
        "commands.clear.failure": "Could not clear the inventory of %s, no items to remove",
        "commands.clear.tagError": "Data tag parsing failed: %s",
        "commands.downfall.usage": "/toggledownfall",
        "commands.downfall.success": "Toggled downfall",
        "commands.time.usage": "/time <set|add|query> <value>",
        "commands.time.added": "Added %s to the time",
        "commands.time.set": "Set the time to %s",
        "commands.time.query": "Time is %s",
        "commands.players.usage": "/list",
        "commands.players.list": "There are %s/%s players online:",
        "commands.banlist.ips": "There are %s total banned IP addresses:",
        "commands.banlist.players": "There are %s total banned players:",
        "commands.banlist.usage": "/banlist [ips|players]",
        "commands.kill.usage": "/kill [player|entity]",
        "commands.kill.successful": "Killed %s",
        "commands.kick.success": "Kicked %s from the game",
        "commands.kick.success.reason": "Kicked %s from the game: '%s'",
        "commands.kick.usage": "/kick <player> [reason ...]",
        "commands.op.success": "Opped %s",
        "commands.op.failed": "Could not op %s",
        "commands.op.usage": "/op <player>",
        "commands.deop.success": "De-opped %s",
        "commands.deop.failed": "Could not de-op %s",
        "commands.deop.usage": "/deop <player>",
        "commands.say.usage": "/say <message ...>",
        "commands.ban.success": "Banned player %s",
        "commands.ban.failed": "Could not ban player %s",
        "commands.ban.usage": "/ban <name> [reason ...]",
        "commands.unban.success": "Unbanned player %s",
        "commands.unban.failed": "Could not unban player %s",
        "commands.unban.usage": "/pardon <name>",
        "commands.banip.invalid": "You have entered an invalid IP address or a player that is not online",
        "commands.banip.success": "Banned IP address %s",
        "commands.banip.success.players": "Banned IP address %s belonging to %s",
        "commands.banip.usage": "/ban-ip <address|name> [reason ...]",
        "commands.unbanip.invalid": "You have entered an invalid IP address",
        "commands.unbanip.success": "Unbanned IP address %s",
        "commands.unbanip.usage": "/pardon-ip <address>",
        "commands.save.usage": "/save-all [flush]",
        "commands.save-on.alreadyOn": "Saving is already turned on",
        "commands.save-on.usage": "/save-on",
        "commands.save-off.alreadyOff": "Saving is already turned off",
        "commands.save-off.usage": "/save-off",
        "commands.save.enabled": "Turned on world auto-saving",
        "commands.save.disabled": "Turned off world auto-saving",
        "commands.save.start": "Saving...",
        "commands.save.success": "Saved the world",
        "commands.save.failed": "Saving failed: %s",
        "commands.save.flushStart": "Flushing all saves...",
        "commands.save.flushEnd": "Flushing completed",
        "commands.stop.usage": "/stop",
        "commands.stop.start": "Stopping the server",
        "commands.tp.usage": "/tp [target player] <destination player> OR /tp [target player] <x> <y> <z> [<yaw> <pitch>]",
        "commands.tp.success": "Teleported %s to %s",
        "commands.tp.success.coordinates": "Teleported %s to %s, %s, %s",
        "commands.tp.notSameDimension": "Unable to teleport because players are not in the same dimension",
        "commands.teleport.usage": "/teleport <entity> <x> <y> <z> [<y-rot> <x-rot>]",
        "commands.teleport.success.coordinates": "Teleported %s to %s, %s, %s",
        "commands.whitelist.list": "There are %s (out of %s seen) whitelisted players:",
        "commands.whitelist.enabled": "Turned on the whitelist",
        "commands.whitelist.disabled": "Turned off the whitelist",
        "commands.whitelist.reloaded": "Reloaded the whitelist",
        "commands.whitelist.add.success": "Added %s to the whitelist",
        "commands.whitelist.add.failed": "Could not add %s to the whitelist",
        "commands.whitelist.add.usage": "/whitelist add <player>",
        "commands.whitelist.remove.success": "Removed %s from the whitelist",
        "commands.whitelist.remove.failed": "Could not remove %s from the whitelist",
        "commands.whitelist.remove.usage": "/whitelist remove <player>",
        "commands.whitelist.usage": "/whitelist <on|off|list|add|remove|reload>",
        "commands.scoreboard.usage": "/scoreboard <objectives|players|teams> ...",
        "commands.scoreboard.noMultiWildcard": "Only one user wildcard allowed",
        "commands.scoreboard.allMatchesFailed": "All matches failed",
        "commands.scoreboard.teamNotFound": "No team was found by the name '%s'",
        "commands.scoreboard.objectiveNotFound": "No objective was found by the name '%s'",
        "commands.scoreboard.objectiveReadOnly": "The objective '%s' is read-only and cannot be set",
        "commands.scoreboard.objectives.usage": "/scoreboard objectives <list|add|remove|setdisplay> ...",
        "commands.scoreboard.objectives.setdisplay.usage": "/scoreboard objectives setdisplay <slot> [objective]",
        "commands.scoreboard.objectives.setdisplay.invalidSlot": "No such display slot '%s'",
        "commands.scoreboard.objectives.setdisplay.successCleared": "Cleared objective display slot '%s'",
        "commands.scoreboard.objectives.setdisplay.successSet": "Set the display objective in slot '%s' to '%s'",
        "commands.scoreboard.objectives.add.usage": "/scoreboard objectives add <name> <criteriaType> [display name ...]",
        "commands.scoreboard.objectives.add.wrongType": "Invalid objective criteria type '%s'",
        "commands.scoreboard.objectives.add.alreadyExists": "An objective with the name '%s' already exists",
        "commands.scoreboard.objectives.add.tooLong": "The name '%s' is too long for an objective, it can be at most %s characters long",
        "commands.scoreboard.objectives.add.displayTooLong": "The display name '%s' is too long for an objective, it can be at most %s characters long",
        "commands.scoreboard.objectives.add.success": "Added new objective '%s' successfully",
        "commands.scoreboard.objectives.remove.usage": "/scoreboard objectives remove <name>",
        "commands.scoreboard.objectives.remove.success": "Removed objective '%s' successfully",
        "commands.scoreboard.objectives.list.count": "Showing %s objective(s) on scoreboard:",
        "commands.scoreboard.objectives.list.entry": "- %s: displays as '%s' and is type '%s'",
        "commands.scoreboard.objectives.list.empty": "There are no objectives on the scoreboard",
        "commands.scoreboard.players.usage": "/scoreboard players <set|add|remove|reset|list|enable|test|operation|tag> ...",
        "commands.scoreboard.players.name.tooLong": "The name '%s' is too long for a player, it can be at most %s characters long",
        "commands.scoreboard.players.set.success": "Set score of %s for player %s to %s",
        "commands.scoreboard.players.set.tagMismatch": "The dataTag does not match for %s",
        "commands.scoreboard.players.set.tagError": "Could not parse dataTag, reason: %s",
        "commands.scoreboard.players.set.usage": "/scoreboard players set <player> <objective> <score> [dataTag]",
        "commands.scoreboard.players.add.usage": "/scoreboard players add <player> <objective> <count> [dataTag]",
        "commands.scoreboard.players.remove.usage": "/scoreboard players remove <player> <objective> <count> [dataTag]",
        "commands.scoreboard.players.reset.usage": "/scoreboard players reset <player> [objective]",
        "commands.scoreboard.players.reset.success": "Reset scores of player %s",
        "commands.scoreboard.players.resetscore.success": "Reset score %s of player %s",
        "commands.scoreboard.players.list.usage": "/scoreboard players list [name]",
        "commands.scoreboard.players.list.count": "Showing %s tracked players on the scoreboard:",
        "commands.scoreboard.players.list.empty": "There are no tracked players on the scoreboard",
        "commands.scoreboard.players.list.player.count": "Showing %s tracked objective(s) for %s:",
        "commands.scoreboard.players.list.player.entry": "- %2$s: %1$s (%3$s)",
        "commands.scoreboard.players.list.player.empty": "Player %s has no scores recorded",
        "commands.scoreboard.players.enable.usage": "/scoreboard players enable <player> <trigger>",
        "commands.scoreboard.players.enable.success": "Enabled trigger %s for %s",
        "commands.scoreboard.players.enable.noTrigger": "Objective %s is not a trigger",
        "commands.scoreboard.players.test.usage": "/scoreboard players test <player> <objective> <min> [max]",
        "commands.scoreboard.players.test.notFound": "No %s score for %s found",
        "commands.scoreboard.players.test.failed": "Score %s is NOT in range %s to %s",
        "commands.scoreboard.players.test.success": "Score %s is in range %s to %s",
        "commands.scoreboard.players.operation.usage": "/scoreboard players operation <targetName> <targetObjective> <operation> <selector> <objective>",
        "commands.scoreboard.players.operation.notFound": "No %s score for %s found",
        "commands.scoreboard.players.operation.invalidOperation": "Invalid operation %s",
        "commands.scoreboard.players.operation.success": "Operation applied successfully",
        "commands.scoreboard.players.tag.usage": "/scoreboard players tag <player> <add|remove|list> <tagName> [dataTag]",
        "commands.scoreboard.players.tag.tagMismatch": "The dataTag does not match for %s",
        "commands.scoreboard.players.tag.tooMany": "Can't add more than %s tags to an entity",
        "commands.scoreboard.players.tag.notFound": "Entity didn't have the %s tag",
        "commands.scoreboard.players.tag.success.add": "Tag %s added",
        "commands.scoreboard.players.tag.success.remove": "Tag %s removed",
        "commands.scoreboard.players.tag.list": "Tags on entity %s are:",
        "commands.scoreboard.players.tag.tagError": "Players tag command failed, reason: %s",
        "commands.scoreboard.teams.usage": "/scoreboard teams <list|add|remove|empty|join|leave|option> ...",
        "commands.scoreboard.teams.add.usage": "/scoreboard teams add <name> [display name ...]",
        "commands.scoreboard.teams.add.alreadyExists": "A team with the name '%s' already exists",
        "commands.scoreboard.teams.add.tooLong": "The name '%s' is too long for a team, it can be at most %s characters long",
        "commands.scoreboard.teams.add.displayTooLong": "The display name '%s' is too long for a team, it can be at most %s characters long",
        "commands.scoreboard.teams.add.success": "Added new team '%s' successfully",
        "commands.scoreboard.teams.list.usage": "/scoreboard teams list [name]",
        "commands.scoreboard.teams.list.count": "Showing %s teams on the scoreboard:",
        "commands.scoreboard.teams.list.entry": "- %1$s: '%2$s' has %3$s players",
        "commands.scoreboard.teams.list.empty": "There are no teams registered on the scoreboard",
        "commands.scoreboard.teams.list.player.count": "Showing %s player(s) in team %s:",
        "commands.scoreboard.teams.list.player.entry": "- %2$s: %1$s (%3$s)",
        "commands.scoreboard.teams.list.player.empty": "Team %s has no players",
        "commands.scoreboard.teams.empty.usage": "/scoreboard teams empty <team>",
        "commands.scoreboard.teams.empty.alreadyEmpty": "Team %s is already empty, cannot remove nonexistant players",
        "commands.scoreboard.teams.empty.success": "Removed all %s player(s) from team %s",
        "commands.scoreboard.teams.remove.usage": "/scoreboard teams remove <name>",
        "commands.scoreboard.teams.remove.success": "Removed team %s",
        "commands.scoreboard.teams.join.usage": "/scoreboard teams join <team> [player]",
        "commands.scoreboard.teams.join.success": "Added %s player(s) to team %s: %s",
        "commands.scoreboard.teams.join.failure": "Could not add %s player(s) to team %s: %s",
        "commands.scoreboard.teams.leave.usage": "/scoreboard teams leave [player]",
        "commands.scoreboard.teams.leave.success": "Removed %s player(s) from their teams: %s",
        "commands.scoreboard.teams.leave.failure": "Could not remove %s player(s) from their teams: %s",
        "commands.scoreboard.teams.leave.noTeam": "You are not in a team",
        "commands.scoreboard.teams.option.usage": "/scoreboard teams option <team> <friendlyfire|color|seeFriendlyInvisibles|nametagVisibility|deathMessageVisibility|collisionRule> <value>",
        "commands.scoreboard.teams.option.noValue": "Valid values for option %s are: %s",
        "commands.scoreboard.teams.option.success": "Set option %s for team %s to %s",
        "commands.execute.usage": "/execute <entity> <x> <y> <z> <command> OR /execute <entity> <x> <y> <z> detect <x> <y> <z> <block> <dataValue|-1|state|*> <command>",
        "commands.execute.allInvocationsFailed": "All invocations failed: '%s'",
        "commands.execute.failed": "Failed to execute '%s' as %s",
        "commands.gamemode.success.self": "Set own game mode to %s",
        "commands.gamemode.success.other": "Set %s's game mode to %s",
        "commands.gamemode.usage": "/gamemode <mode> [player]",
        "commands.defaultgamemode.usage": "/defaultgamemode <mode>",
        "commands.defaultgamemode.success": "The world's default game mode is now %s",
        "commands.me.usage": "/me <action ...>",
        "commands.help.header": "--- Showing help page %s of %s (/help <page>) ---",
        "commands.help.footer": "Tip: Use the <tab> key while typing a command to auto-complete the command or its arguments",
        "commands.help.usage": "/help [page|command name]",
        "commands.trigger.usage": "/trigger <objective> <add|set> <value>",
        "commands.trigger.invalidObjective": "Invalid trigger name %s",
        "commands.trigger.invalidMode": "Invalid trigger mode %s",
        "commands.trigger.disabled": "Trigger %s is not enabled",
        "commands.trigger.invalidPlayer": "Only players can use the /trigger command",
        "commands.trigger.success": "Trigger %s changed with %s %s",
        "commands.publish.usage": "/publish",
        "commands.publish.started": "Local game hosted on port %s",
        "commands.publish.failed": "Unable to host local game",
        "commands.debug.start": "Started debug profiling",
        "commands.debug.stop": "Stopped debug profiling after %s seconds (%s ticks)",
        "commands.debug.notStarted": "Can't stop profiling when we haven't started yet!",
        "commands.debug.usage": "/debug <start|stop>",
        "commands.chunkinfo.usage": "/chunkinfo [<x> <y> <z>]",
        "commands.chunkinfo.location": "Chunk location: (%s, %s, %s)",
        "commands.chunkinfo.noChunk": "No chunk found at chunk position %s, %s, %s",
        "commands.chunkinfo.notEmpty": "Chunk is not empty.",
        "commands.chunkinfo.empty": "Chunk is empty.",
        "commands.chunkinfo.notCompiled": "Chunk is not compiled.",
        "commands.chunkinfo.compiled": "Chunk is compiled.",
        "commands.chunkinfo.hasNoRenderableLayers": "Chunk has no renderable layers.",
        "commands.chunkinfo.hasLayers": "Chunk has layers: %s",
        "commands.chunkinfo.isEmpty": "Chunk has empty layers: %s",
        "commands.chunkinfo.vertices": "%s layer's buffer contains %s vertices",
        "commands.chunkinfo.data": "First 64 vertices are: %s",
        "commands.tellraw.usage": "/tellraw <player> <raw json message>",
        "commands.tellraw.jsonException": "Invalid json: %s",
        "commands.message.usage": "/tell <player> <private message ...>",
        "commands.message.sameTarget": "You can't send a private message to yourself!",
        "commands.message.display.outgoing": "You whisper to %s: %s",
        "commands.message.display.incoming": "%s whispers to you: %s",
        "commands.difficulty.usage": "/difficulty <new difficulty>",
        "commands.difficulty.success": "Set game difficulty to %s",
        "commands.spawnpoint.usage": "/spawnpoint [player] [<x> <y> <z>]",
        "commands.spawnpoint.success": "Set %s's spawn point to (%s, %s, %s)",
        "commands.setworldspawn.usage": "/setworldspawn [<x> <y> <z>]",
        "commands.setworldspawn.success": "Set the world spawn point to (%s, %s, %s)",
        "commands.gamerule.usage": "/gamerule <rule name> [value]",
        "commands.gamerule.success": "Game rule %s has been updated to %s",
        "commands.gamerule.norule": "No game rule called '%s' is available",
        "commands.gamerule.nopermission": "Only server owners can change '%s'",
        "commands.weather.usage": "/weather <clear|rain|thunder> [duration in seconds]",
        "commands.weather.clear": "Changing to clear weather",
        "commands.weather.rain": "Changing to rainy weather",
        "commands.weather.thunder": "Changing to rain and thunder",
        "commands.testfor.usage": "/testfor <player> [dataTag]",
        "commands.testfor.failure": "%s did not match the required data structure",
        "commands.testfor.success": "Found %s",
        "commands.testfor.tagError": "Data tag parsing failed: %s",
        "commands.seed.usage": "/seed",
        "commands.seed.success": "Seed: %s",
        "commands.spreadplayers.noop": "No players found to spread",
        "commands.spreadplayers.usage": "/spreadplayers <x> <z> <spreadDistance> <maxRange> <respectTeams true|false> <player ...>",
        "commands.spreadplayers.spreading.teams": "Spreading %s team(s) %s blocks around %s,%s (min %s blocks apart)",
        "commands.spreadplayers.spreading.players": "Spreading %s player(s) %s blocks around %s,%s (min %s blocks apart)",
        "commands.spreadplayers.success.teams": "Successfully spread %s team(s) around %s,%s",
        "commands.spreadplayers.success.players": "Successfully spread %s player(s) around %s,%s",
        "commands.spreadplayers.info.teams": "(Average distance between teams is %s blocks apart after %s iterations)",
        "commands.spreadplayers.info.players": "(Average distance between players is %s blocks apart after %s iterations)",
        "commands.spreadplayers.failure.teams": "Could not spread %s team(s) around %s,%s (too many players for space - try using spread of at most %s)",
        "commands.spreadplayers.failure.players": "Could not spread %s player(s) around %s,%s (too many players for space - try using spread of at most %s)",
        "commands.achievement.usage": "/achievement <give|take> <name|*> [player]",
        "commands.achievement.unknownAchievement": "Unknown achievement '%s'",
        "commands.achievement.alreadyHave": "Player %s already has achievement %s",
        "commands.achievement.dontHave": "Player %s doesn't have achievement %s",
        "commands.achievement.give.success.all": "Successfully given all achievements to %s",
        "commands.achievement.give.success.one": "Successfully given %s the achievement %s",
        "commands.achievement.take.success.all": "Successfully taken all achievements from %s",
        "commands.achievement.take.success.one": "Successfully taken the achievement %s from %s",
        "commands.worldborder.usage": "/worldborder <set|center|damage|warning|get|add> ...",
        "commands.worldborder.add.usage": "/worldborder add <sizeInBlocks> [timeInSeconds]",
        "commands.worldborder.set.usage": "/worldborder set <sizeInBlocks> [timeInSeconds]",
        "commands.worldborder.set.success": "Set world border to %s blocks wide (from %s blocks)",
        "commands.worldborder.get.success": "World border is currently %s blocks wide",
        "commands.worldborder.setSlowly.shrink.success": "Shrinking world border to %s blocks wide (down from %s blocks) over %s seconds",
        "commands.worldborder.setSlowly.grow.success": "Growing world border to %s blocks wide (up from %s blocks) over %s seconds",
        "commands.worldborder.center.usage": "/worldborder center <x> <z>",
        "commands.worldborder.center.success": "Set world border center to %s,%s",
        "commands.worldborder.damage.usage": "/worldborder damage <buffer|amount> ...",
        "commands.worldborder.damage.buffer.usage": "/worldborder damage buffer <sizeInBlocks>",
        "commands.worldborder.damage.buffer.success": "Set world border damage buffer to %s blocks (from %s blocks)",
        "commands.worldborder.damage.amount.usage": "/worldborder damage amount <damagePerBlock>",
        "commands.worldborder.damage.amount.success": "Set world border damage amount to %s per block (from %s per block)",
        "commands.worldborder.warning.usage": "/worldborder warning <time|distance> ...",
        "commands.worldborder.warning.time.usage": "/worldborder warning time <seconds>",
        "commands.worldborder.warning.time.success": "Set world border warning to %s seconds away (from %s seconds)",
        "commands.worldborder.warning.distance.usage": "/worldborder warning distance <distance>",
        "commands.worldborder.warning.distance.success": "Set world border warning to %s blocks away (from %s blocks)",
        "commands.title.usage": "/title <player> title|subtitle|actionbar|clear|reset|times ...",
        "commands.title.usage.title": "/title <player> title|subtitle|actionbar <raw json title>",
        "commands.title.usage.clear": "/title <player> clear|reset",
        "commands.title.usage.times": "/title <player> times <fadeIn> <stay> <fadeOut>",
        "commands.title.success": "Title command successfully executed",
        "commands.stopsound.usage": "/stopsound <player> [source] [sound]",
        "commands.stopsound.unknownSoundSource": "Source %s is unknown",
        "commands.stopsound.success.individualSound": "Stopped sound '%s' with source '%s' for %s",
        "commands.stopsound.success.soundSource": "Stopped source '%s' for %s",
        "commands.stopsound.success.all": "Stopped all sounds for %s",
        "commands.locate.usage": "/locate <feature>",
        "commands.locate.success": "Located %s at %s (y?) %s",
        "commands.locate.failure": "Unable to locate any %s feature",
        "itemGroup.buildingBlocks": "Building Blocks",
        "itemGroup.decorations": "Decoration Blocks",
        "itemGroup.redstone": "Redstone",
        "itemGroup.transportation": "Transportation",
        "itemGroup.misc": "Miscellaneous",
        "itemGroup.search": "Search Items",
        "itemGroup.food": "Foodstuffs",
        "itemGroup.tools": "Tools",
        "itemGroup.combat": "Combat",
        "itemGroup.brewing": "Brewing",
        "itemGroup.materials": "Materials",
        "itemGroup.inventory": "Survival Inventory",
        "inventory.binSlot": "Destroy Item",
        "advMode.setCommand": "Set Console Command for Block",
        "advMode.setCommand.success": "Command set: %s",
        "advMode.command": "Console Command",
        "advMode.nearestPlayer": 'Use "@p" to target nearest player',
        "advMode.randomPlayer": 'Use "@r" to target random player',
        "advMode.allPlayers": 'Use "@a" to target all players',
        "advMode.allEntities": 'Use "@e" to target all entities',
        "advMode.previousOutput": "Previous Output",
        "advMode.mode.sequence": "Chain",
        "advMode.mode.auto": "Repeat",
        "advMode.mode.redstone": "Impulse",
        "advMode.mode.conditional": "Conditional",
        "advMode.mode.unconditional": "Unconditional",
        "advMode.mode.redstoneTriggered": "Needs Redstone",
        "advMode.mode.autoexec.bat": "Always Active",
        "advMode.notEnabled": "Command blocks are not enabled on this server",
        "advMode.notAllowed": "Must be an opped player in creative mode",
        "mount.onboard": "Press %1$s to dismount",
        "build.tooHigh": "Height limit for building is %s blocks",
        "item.modifiers.mainhand": "When in main hand:",
        "item.modifiers.offhand": "When in off hand:",
        "item.modifiers.feet": "When on feet:",
        "item.modifiers.legs": "When on legs:",
        "item.modifiers.chest": "When on body:",
        "item.modifiers.head": "When on head:",
        "attribute.modifier.plus.0": "+%s %s",
        "attribute.modifier.plus.1": "+%s%% %s",
        "attribute.modifier.plus.2": "+%s%% %s",
        "attribute.modifier.take.0": "-%s %s",
        "attribute.modifier.take.1": "-%s%% %s",
        "attribute.modifier.take.2": "-%s%% %s",
        "attribute.modifier.equals.0": "%s %s",
        "attribute.modifier.equals.1": "%s%% %s",
        "attribute.modifier.equals.2": "%s%% %s",
        "attribute.name.horse.jumpStrength": "Horse Jump Strength",
        "attribute.name.zombie.spawnReinforcements": "Zombie Reinforcements",
        "attribute.name.generic.maxHealth": "Max Health",
        "attribute.name.generic.followRange": "Mob Follow Range",
        "attribute.name.generic.knockbackResistance": "Knockback Resistance",
        "attribute.name.generic.movementSpeed": "Speed",
        "attribute.name.generic.attackDamage": "Attack Damage",
        "attribute.name.generic.attackSpeed": "Attack Speed",
        "attribute.name.generic.luck": "Luck",
        "attribute.name.generic.armor": "Armor",
        "attribute.name.generic.armorToughness": "Armor Toughness",
        "screenshot.success": "Saved screenshot as %s",
        "screenshot.failure": "Couldn't save screenshot: %s",
        "item.banner.black.name": "Black Banner",
        "item.banner.red.name": "Red Banner",
        "item.banner.green.name": "Green Banner",
        "item.banner.brown.name": "Brown Banner",
        "item.banner.blue.name": "Blue Banner",
        "item.banner.purple.name": "Purple Banner",
        "item.banner.cyan.name": "Cyan Banner",
        "item.banner.silver.name": "Light Gray Banner",
        "item.banner.gray.name": "Gray Banner",
        "item.banner.pink.name": "Pink Banner",
        "item.banner.lime.name": "Lime Banner",
        "item.banner.yellow.name": "Yellow Banner",
        "item.banner.lightBlue.name": "Light Blue Banner",
        "item.banner.magenta.name": "Magenta Banner",
        "item.banner.orange.name": "Orange Banner",
        "item.banner.white.name": "White Banner",
        "item.shield.name": "Shield",
        "item.shield.black.name": "Black Shield",
        "item.shield.red.name": "Red Shield",
        "item.shield.green.name": "Green Shield",
        "item.shield.brown.name": "Brown Shield",
        "item.shield.blue.name": "Blue Shield",
        "item.shield.purple.name": "Purple Shield",
        "item.shield.cyan.name": "Cyan Shield",
        "item.shield.silver.name": "Light Gray Shield",
        "item.shield.gray.name": "Gray Shield",
        "item.shield.pink.name": "Pink Shield",
        "item.shield.lime.name": "Lime Shield",
        "item.shield.yellow.name": "Yellow Shield",
        "item.shield.lightBlue.name": "Light Blue Shield",
        "item.shield.magenta.name": "Magenta Shield",
        "item.shield.orange.name": "Orange Shield",
        "item.shield.white.name": "White Shield",
        "item.banner.square_bottom_left.black": "Black Base Dexter Canton",
        "item.banner.square_bottom_left.red": "Red Base Dexter Canton",
        "item.banner.square_bottom_left.green": "Green Base Dexter Canton",
        "item.banner.square_bottom_left.brown": "Brown Base Dexter Canton",
        "item.banner.square_bottom_left.blue": "Blue Base Dexter Canton",
        "item.banner.square_bottom_left.purple": "Purple Base Dexter Canton",
        "item.banner.square_bottom_left.cyan": "Cyan Base Dexter Canton",
        "item.banner.square_bottom_left.silver": "Light Gray Base Dexter Canton",
        "item.banner.square_bottom_left.gray": "Gray Base Dexter Canton",
        "item.banner.square_bottom_left.pink": "Pink Base Dexter Canton",
        "item.banner.square_bottom_left.lime": "Lime Base Dexter Canton",
        "item.banner.square_bottom_left.yellow": "Yellow Base Dexter Canton",
        "item.banner.square_bottom_left.lightBlue": "Light Blue Base Dexter Canton",
        "item.banner.square_bottom_left.magenta": "Magenta Base Dexter Canton",
        "item.banner.square_bottom_left.orange": "Orange Base Dexter Canton",
        "item.banner.square_bottom_left.white": "White Base Dexter Canton",
        "item.banner.square_bottom_right.black": "Black Base Sinister Canton",
        "item.banner.square_bottom_right.red": "Red Base Sinister Canton",
        "item.banner.square_bottom_right.green": "Green Base Sinister Canton",
        "item.banner.square_bottom_right.brown": "Brown Base Sinister Canton",
        "item.banner.square_bottom_right.blue": "Blue Base Sinister Canton",
        "item.banner.square_bottom_right.purple": "Purple Base Sinister Canton",
        "item.banner.square_bottom_right.cyan": "Cyan Base Sinister Canton",
        "item.banner.square_bottom_right.silver": "Light Gray Base Sinister Canton",
        "item.banner.square_bottom_right.gray": "Gray Base Sinister Canton",
        "item.banner.square_bottom_right.pink": "Pink Base Sinister Canton",
        "item.banner.square_bottom_right.lime": "Lime Base Sinister Canton",
        "item.banner.square_bottom_right.yellow": "Yellow Base Sinister Canton",
        "item.banner.square_bottom_right.lightBlue": "Light Blue Base Sinister Canton",
        "item.banner.square_bottom_right.magenta": "Magenta Base Sinister Canton",
        "item.banner.square_bottom_right.orange": "Orange Base Sinister Canton",
        "item.banner.square_bottom_right.white": "White Base Sinister Canton",
        "item.banner.square_top_left.black": "Black Chief Dexter Canton",
        "item.banner.square_top_left.red": "Red Chief Dexter Canton",
        "item.banner.square_top_left.green": "Green Chief Dexter Canton",
        "item.banner.square_top_left.brown": "Brown Chief Dexter Canton",
        "item.banner.square_top_left.blue": "Blue Chief Dexter Canton",
        "item.banner.square_top_left.purple": "Purple Chief Dexter Canton",
        "item.banner.square_top_left.cyan": "Cyan Chief Dexter Canton",
        "item.banner.square_top_left.silver": "Light Gray Chief Dexter Canton",
        "item.banner.square_top_left.gray": "Gray Chief Dexter Canton",
        "item.banner.square_top_left.pink": "Pink Chief Dexter Canton",
        "item.banner.square_top_left.lime": "Lime Chief Dexter Canton",
        "item.banner.square_top_left.yellow": "Yellow Chief Dexter Canton",
        "item.banner.square_top_left.lightBlue": "Light Blue Chief Dexter Canton",
        "item.banner.square_top_left.magenta": "Magenta Chief Dexter Canton",
        "item.banner.square_top_left.orange": "Orange Chief Dexter Canton",
        "item.banner.square_top_left.white": "White Chief Dexter Canton",
        "item.banner.square_top_right.black": "Black Chief Sinister Canton",
        "item.banner.square_top_right.red": "Red Chief Sinister Canton",
        "item.banner.square_top_right.green": "Green Chief Sinister Canton",
        "item.banner.square_top_right.brown": "Brown Chief Sinister Canton",
        "item.banner.square_top_right.blue": "Blue Chief Sinister Canton",
        "item.banner.square_top_right.purple": "Purple Chief Sinister Canton",
        "item.banner.square_top_right.cyan": "Cyan Chief Sinister Canton",
        "item.banner.square_top_right.silver": "Light Gray Chief Sinister Canton",
        "item.banner.square_top_right.gray": "Gray Chief Sinister Canton",
        "item.banner.square_top_right.pink": "Pink Chief Sinister Canton",
        "item.banner.square_top_right.lime": "Lime Chief Sinister Canton",
        "item.banner.square_top_right.yellow": "Yellow Chief Sinister Canton",
        "item.banner.square_top_right.lightBlue": "Light Blue Chief Sinister Canton",
        "item.banner.square_top_right.magenta": "Magenta Chief Sinister Canton",
        "item.banner.square_top_right.orange": "Orange Chief Sinister Canton",
        "item.banner.square_top_right.white": "White Chief Sinister Canton",
        "item.banner.stripe_bottom.black": "Black Base Fess",
        "item.banner.stripe_bottom.red": "Red Base Fess",
        "item.banner.stripe_bottom.green": "Green Base Fess",
        "item.banner.stripe_bottom.brown": "Brown Base Fess",
        "item.banner.stripe_bottom.blue": "Blue Base Fess",
        "item.banner.stripe_bottom.purple": "Purple Base Fess",
        "item.banner.stripe_bottom.cyan": "Cyan Base Fess",
        "item.banner.stripe_bottom.silver": "Light Gray Base Fess",
        "item.banner.stripe_bottom.gray": "Gray Base Fess",
        "item.banner.stripe_bottom.pink": "Pink Base Fess",
        "item.banner.stripe_bottom.lime": "Lime Base Fess",
        "item.banner.stripe_bottom.yellow": "Yellow Base Fess",
        "item.banner.stripe_bottom.lightBlue": "Light Blue Base Fess",
        "item.banner.stripe_bottom.magenta": "Magenta Base Fess",
        "item.banner.stripe_bottom.orange": "Orange Base Fess",
        "item.banner.stripe_bottom.white": "White Base Fess",
        "item.banner.stripe_top.black": "Black Chief Fess",
        "item.banner.stripe_top.red": "Red Chief Fess",
        "item.banner.stripe_top.green": "Green Chief Fess",
        "item.banner.stripe_top.brown": "Brown Chief Fess",
        "item.banner.stripe_top.blue": "Blue Chief Fess",
        "item.banner.stripe_top.purple": "Purple Chief Fess",
        "item.banner.stripe_top.cyan": "Cyan Chief Fess",
        "item.banner.stripe_top.silver": "Light Gray Chief Fess",
        "item.banner.stripe_top.gray": "Gray Chief Fess",
        "item.banner.stripe_top.pink": "Pink Chief Fess",
        "item.banner.stripe_top.lime": "Lime Chief Fess",
        "item.banner.stripe_top.yellow": "Yellow Chief Fess",
        "item.banner.stripe_top.lightBlue": "Light Blue Chief Fess",
        "item.banner.stripe_top.magenta": "Magenta Chief Fess",
        "item.banner.stripe_top.orange": "Orange Chief Fess",
        "item.banner.stripe_top.white": "White Chief Fess",
        "item.banner.stripe_left.black": "Black Pale Dexter",
        "item.banner.stripe_left.red": "Red Pale Dexter",
        "item.banner.stripe_left.green": "Green Pale Dexter",
        "item.banner.stripe_left.brown": "Brown Pale Dexter",
        "item.banner.stripe_left.blue": "Blue Pale Dexter",
        "item.banner.stripe_left.purple": "Purple Pale Dexter",
        "item.banner.stripe_left.cyan": "Cyan Pale Dexter",
        "item.banner.stripe_left.silver": "Light Gray Pale Dexter",
        "item.banner.stripe_left.gray": "Gray Pale Dexter",
        "item.banner.stripe_left.pink": "Pink Pale Dexter",
        "item.banner.stripe_left.lime": "Lime Pale Dexter",
        "item.banner.stripe_left.yellow": "Yellow Pale Dexter",
        "item.banner.stripe_left.lightBlue": "Light Blue Pale Dexter",
        "item.banner.stripe_left.magenta": "Magenta Pale Dexter",
        "item.banner.stripe_left.orange": "Orange Pale Dexter",
        "item.banner.stripe_left.white": "White Pale Dexter",
        "item.banner.stripe_right.black": "Black Pale Sinister",
        "item.banner.stripe_right.red": "Red Pale Sinister",
        "item.banner.stripe_right.green": "Green Pale Sinister",
        "item.banner.stripe_right.brown": "Brown Pale Sinister",
        "item.banner.stripe_right.blue": "Blue Pale Sinister",
        "item.banner.stripe_right.purple": "Purple Pale Sinister",
        "item.banner.stripe_right.cyan": "Cyan Pale Sinister",
        "item.banner.stripe_right.silver": "Light Gray Pale Sinister",
        "item.banner.stripe_right.gray": "Gray Pale Sinister",
        "item.banner.stripe_right.pink": "Pink Pale Sinister",
        "item.banner.stripe_right.lime": "Lime Pale Sinister",
        "item.banner.stripe_right.yellow": "Yellow Pale Sinister",
        "item.banner.stripe_right.lightBlue": "Light Blue Pale Sinister",
        "item.banner.stripe_right.magenta": "Magenta Pale Sinister",
        "item.banner.stripe_right.orange": "Orange Pale Sinister",
        "item.banner.stripe_right.white": "White Pale Sinister",
        "item.banner.stripe_center.black": "Black Pale",
        "item.banner.stripe_center.red": "Red Pale",
        "item.banner.stripe_center.green": "Green Pale",
        "item.banner.stripe_center.brown": "Brown Pale",
        "item.banner.stripe_center.blue": "Blue Pale",
        "item.banner.stripe_center.purple": "Purple Pale",
        "item.banner.stripe_center.cyan": "Cyan Pale",
        "item.banner.stripe_center.silver": "Light Gray Pale",
        "item.banner.stripe_center.gray": "Gray Pale",
        "item.banner.stripe_center.pink": "Pink Pale",
        "item.banner.stripe_center.lime": "Lime Pale",
        "item.banner.stripe_center.yellow": "Yellow Pale",
        "item.banner.stripe_center.lightBlue": "Light Blue Pale",
        "item.banner.stripe_center.magenta": "Magenta Pale",
        "item.banner.stripe_center.orange": "Orange Pale",
        "item.banner.stripe_center.white": "White Pale",
        "item.banner.stripe_middle.black": "Black Fess",
        "item.banner.stripe_middle.red": "Red Fess",
        "item.banner.stripe_middle.green": "Green Fess",
        "item.banner.stripe_middle.brown": "Brown Fess",
        "item.banner.stripe_middle.blue": "Blue Fess",
        "item.banner.stripe_middle.purple": "Purple Fess",
        "item.banner.stripe_middle.cyan": "Cyan Fess",
        "item.banner.stripe_middle.silver": "Light Gray Fess",
        "item.banner.stripe_middle.gray": "Gray Fess",
        "item.banner.stripe_middle.pink": "Pink Fess",
        "item.banner.stripe_middle.lime": "Lime Fess",
        "item.banner.stripe_middle.yellow": "Yellow Fess",
        "item.banner.stripe_middle.lightBlue": "Light Blue Fess",
        "item.banner.stripe_middle.magenta": "Magenta Fess",
        "item.banner.stripe_middle.orange": "Orange Fess",
        "item.banner.stripe_middle.white": "White Fess",
        "item.banner.stripe_downright.black": "Black Bend",
        "item.banner.stripe_downright.red": "Red Bend",
        "item.banner.stripe_downright.green": "Green Bend",
        "item.banner.stripe_downright.brown": "Brown Bend",
        "item.banner.stripe_downright.blue": "Blue Bend",
        "item.banner.stripe_downright.purple": "Purple Bend",
        "item.banner.stripe_downright.cyan": "Cyan Bend",
        "item.banner.stripe_downright.silver": "Light Gray Bend",
        "item.banner.stripe_downright.gray": "Gray Bend",
        "item.banner.stripe_downright.pink": "Pink Bend",
        "item.banner.stripe_downright.lime": "Lime Bend",
        "item.banner.stripe_downright.yellow": "Yellow Bend",
        "item.banner.stripe_downright.lightBlue": "Light Blue Bend",
        "item.banner.stripe_downright.magenta": "Magenta Bend",
        "item.banner.stripe_downright.orange": "Orange Bend",
        "item.banner.stripe_downright.white": "White Bend",
        "item.banner.stripe_downleft.black": "Black Bend Sinister",
        "item.banner.stripe_downleft.red": "Red Bend Sinister",
        "item.banner.stripe_downleft.green": "Green Bend Sinister",
        "item.banner.stripe_downleft.brown": "Brown Bend Sinister",
        "item.banner.stripe_downleft.blue": "Blue Bend Sinister",
        "item.banner.stripe_downleft.purple": "Purple Bend Sinister",
        "item.banner.stripe_downleft.cyan": "Cyan Bend Sinister",
        "item.banner.stripe_downleft.silver": "Light Gray Bend Sinister",
        "item.banner.stripe_downleft.gray": "Gray Bend Sinister",
        "item.banner.stripe_downleft.pink": "Pink Bend Sinister",
        "item.banner.stripe_downleft.lime": "Lime Bend Sinister",
        "item.banner.stripe_downleft.yellow": "Yellow Bend Sinister",
        "item.banner.stripe_downleft.lightBlue": "Light Blue Bend Sinister",
        "item.banner.stripe_downleft.magenta": "Magenta Bend Sinister",
        "item.banner.stripe_downleft.orange": "Orange Bend Sinister",
        "item.banner.stripe_downleft.white": "White Bend Sinister",
        "item.banner.small_stripes.black": "Black Paly",
        "item.banner.small_stripes.red": "Red Paly",
        "item.banner.small_stripes.green": "Green Paly",
        "item.banner.small_stripes.brown": "Brown Paly",
        "item.banner.small_stripes.blue": "Blue Paly",
        "item.banner.small_stripes.purple": "Purple Paly",
        "item.banner.small_stripes.cyan": "Cyan Paly",
        "item.banner.small_stripes.silver": "Light Gray Paly",
        "item.banner.small_stripes.gray": "Gray Paly",
        "item.banner.small_stripes.pink": "Pink Paly",
        "item.banner.small_stripes.lime": "Lime Paly",
        "item.banner.small_stripes.yellow": "Yellow Paly",
        "item.banner.small_stripes.lightBlue": "Light Blue Paly",
        "item.banner.small_stripes.magenta": "Magenta Paly",
        "item.banner.small_stripes.orange": "Orange Paly",
        "item.banner.small_stripes.white": "White Paly",
        "item.banner.cross.black": "Black Saltire",
        "item.banner.cross.red": "Red Saltire",
        "item.banner.cross.green": "Green Saltire",
        "item.banner.cross.brown": "Brown Saltire",
        "item.banner.cross.blue": "Blue Saltire",
        "item.banner.cross.purple": "Purple Saltire",
        "item.banner.cross.cyan": "Cyan Saltire",
        "item.banner.cross.silver": "Light Gray Saltire",
        "item.banner.cross.gray": "Gray Saltire",
        "item.banner.cross.pink": "Pink Saltire",
        "item.banner.cross.lime": "Lime Saltire",
        "item.banner.cross.yellow": "Yellow Saltire",
        "item.banner.cross.lightBlue": "Light Blue Saltire",
        "item.banner.cross.magenta": "Magenta Saltire",
        "item.banner.cross.orange": "Orange Saltire",
        "item.banner.cross.white": "White Saltire",
        "item.banner.triangle_bottom.black": "Black Chevron",
        "item.banner.triangle_bottom.red": "Red Chevron",
        "item.banner.triangle_bottom.green": "Green Chevron",
        "item.banner.triangle_bottom.brown": "Brown Chevron",
        "item.banner.triangle_bottom.blue": "Blue Chevron",
        "item.banner.triangle_bottom.purple": "Purple Chevron",
        "item.banner.triangle_bottom.cyan": "Cyan Chevron",
        "item.banner.triangle_bottom.silver": "Light Gray Chevron",
        "item.banner.triangle_bottom.gray": "Gray Chevron",
        "item.banner.triangle_bottom.pink": "Pink Chevron",
        "item.banner.triangle_bottom.lime": "Lime Chevron",
        "item.banner.triangle_bottom.yellow": "Yellow Chevron",
        "item.banner.triangle_bottom.lightBlue": "Light Blue Chevron",
        "item.banner.triangle_bottom.magenta": "Magenta Chevron",
        "item.banner.triangle_bottom.orange": "Orange Chevron",
        "item.banner.triangle_bottom.white": "White Chevron",
        "item.banner.triangle_top.black": "Black Inverted Chevron",
        "item.banner.triangle_top.red": "Red Inverted Chevron",
        "item.banner.triangle_top.green": "Green Inverted Chevron",
        "item.banner.triangle_top.brown": "Brown Inverted Chevron",
        "item.banner.triangle_top.blue": "Blue Inverted Chevron",
        "item.banner.triangle_top.purple": "Purple Inverted Chevron",
        "item.banner.triangle_top.cyan": "Cyan Inverted Chevron",
        "item.banner.triangle_top.silver": "Light Gray Inverted Chevron",
        "item.banner.triangle_top.gray": "Gray Inverted Chevron",
        "item.banner.triangle_top.pink": "Pink Inverted Chevron",
        "item.banner.triangle_top.lime": "Lime Inverted Chevron",
        "item.banner.triangle_top.yellow": "Yellow Inverted Chevron",
        "item.banner.triangle_top.lightBlue": "Light Blue Inverted Chevron",
        "item.banner.triangle_top.magenta": "Magenta Inverted Chevron",
        "item.banner.triangle_top.orange": "Orange Inverted Chevron",
        "item.banner.triangle_top.white": "White Inverted Chevron",
        "item.banner.triangles_bottom.black": "Black Base Indented",
        "item.banner.triangles_bottom.red": "Red Base Indented",
        "item.banner.triangles_bottom.green": "Green Base Indented",
        "item.banner.triangles_bottom.brown": "Brown Base Indented",
        "item.banner.triangles_bottom.blue": "Blue Base Indented",
        "item.banner.triangles_bottom.purple": "Purple Base Indented",
        "item.banner.triangles_bottom.cyan": "Cyan Base Indented",
        "item.banner.triangles_bottom.silver": "Light Gray Base Indented",
        "item.banner.triangles_bottom.gray": "Gray Base Indented",
        "item.banner.triangles_bottom.pink": "Pink Base Indented",
        "item.banner.triangles_bottom.lime": "Lime Base Indented",
        "item.banner.triangles_bottom.yellow": "Yellow Base Indented",
        "item.banner.triangles_bottom.lightBlue": "Light Blue Base Indented",
        "item.banner.triangles_bottom.magenta": "Magenta Base Indented",
        "item.banner.triangles_bottom.orange": "Orange Base Indented",
        "item.banner.triangles_bottom.white": "White Base Indented",
        "item.banner.triangles_top.black": "Black Chief Indented",
        "item.banner.triangles_top.red": "Red Chief Indented",
        "item.banner.triangles_top.green": "Green Chief Indented",
        "item.banner.triangles_top.brown": "Brown Chief Indented",
        "item.banner.triangles_top.blue": "Blue Chief Indented",
        "item.banner.triangles_top.purple": "Purple Chief Indented",
        "item.banner.triangles_top.cyan": "Cyan Chief Indented",
        "item.banner.triangles_top.silver": "Light Gray Chief Indented",
        "item.banner.triangles_top.gray": "Gray Chief Indented",
        "item.banner.triangles_top.pink": "Pink Chief Indented",
        "item.banner.triangles_top.lime": "Lime Chief Indented",
        "item.banner.triangles_top.yellow": "Yellow Chief Indented",
        "item.banner.triangles_top.lightBlue": "Light Blue Chief Indented",
        "item.banner.triangles_top.magenta": "Magenta Chief Indented",
        "item.banner.triangles_top.orange": "Orange Chief Indented",
        "item.banner.triangles_top.white": "White Chief Indented",
        "item.banner.diagonal_left.black": "Black Per Bend Sinister",
        "item.banner.diagonal_left.red": "Red Per Bend Sinister",
        "item.banner.diagonal_left.green": "Green Per Bend Sinister",
        "item.banner.diagonal_left.brown": "Brown Per Bend Sinister",
        "item.banner.diagonal_left.blue": "Blue Per Bend Sinister",
        "item.banner.diagonal_left.purple": "Purple Per Bend Sinister",
        "item.banner.diagonal_left.cyan": "Cyan Per Bend Sinister",
        "item.banner.diagonal_left.silver": "Light Gray Per Bend Sinister",
        "item.banner.diagonal_left.gray": "Gray Per Bend Sinister",
        "item.banner.diagonal_left.pink": "Pink Per Bend Sinister",
        "item.banner.diagonal_left.lime": "Lime Per Bend Sinister",
        "item.banner.diagonal_left.yellow": "Yellow Per Bend Sinister",
        "item.banner.diagonal_left.lightBlue": "Light Blue Per Bend Sinister",
        "item.banner.diagonal_left.magenta": "Magenta Per Bend Sinister",
        "item.banner.diagonal_left.orange": "Orange Per Bend Sinister",
        "item.banner.diagonal_left.white": "White Per Bend Sinister",
        "item.banner.diagonal_right.black": "Black Per Bend",
        "item.banner.diagonal_right.red": "Red Per Bend",
        "item.banner.diagonal_right.green": "Green Per Bend",
        "item.banner.diagonal_right.brown": "Brown Per Bend",
        "item.banner.diagonal_right.blue": "Blue Per Bend",
        "item.banner.diagonal_right.purple": "Purple Per Bend",
        "item.banner.diagonal_right.cyan": "Cyan Per Bend",
        "item.banner.diagonal_right.silver": "Light Gray Per Bend",
        "item.banner.diagonal_right.gray": "Gray Per Bend",
        "item.banner.diagonal_right.pink": "Pink Per Bend",
        "item.banner.diagonal_right.lime": "Lime Per Bend",
        "item.banner.diagonal_right.yellow": "Yellow Per Bend",
        "item.banner.diagonal_right.lightBlue": "Light Blue Per Bend",
        "item.banner.diagonal_right.magenta": "Magenta Per Bend",
        "item.banner.diagonal_right.orange": "Orange Per Bend",
        "item.banner.diagonal_right.white": "White Per Bend",
        "item.banner.diagonal_up_left.black": "Black Per Bend Inverted",
        "item.banner.diagonal_up_left.red": "Red Per Bend Inverted",
        "item.banner.diagonal_up_left.green": "Green Per Bend Inverted",
        "item.banner.diagonal_up_left.brown": "Brown Per Bend Inverted",
        "item.banner.diagonal_up_left.blue": "Blue Per Bend Inverted",
        "item.banner.diagonal_up_left.purple": "Purple Per Bend Inverted",
        "item.banner.diagonal_up_left.cyan": "Cyan Per Bend Inverted",
        "item.banner.diagonal_up_left.silver": "Light Gray Per Bend Inverted",
        "item.banner.diagonal_up_left.gray": "Gray Per Bend Inverted",
        "item.banner.diagonal_up_left.pink": "Pink Per Bend Inverted",
        "item.banner.diagonal_up_left.lime": "Lime Per Bend Inverted",
        "item.banner.diagonal_up_left.yellow": "Yellow Per Bend Inverted",
        "item.banner.diagonal_up_left.lightBlue": "Light Blue Per Bend Inverted",
        "item.banner.diagonal_up_left.magenta": "Magenta Per Bend Inverted",
        "item.banner.diagonal_up_left.orange": "Orange Per Bend Inverted",
        "item.banner.diagonal_up_left.white": "White Per Bend Inverted",
        "item.banner.diagonal_up_right.black": "Black Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.red": "Red Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.green": "Green Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.brown": "Brown Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.blue": "Blue Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.purple": "Purple Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.cyan": "Cyan Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.silver": "Light Gray Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.gray": "Gray Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.pink": "Pink Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.lime": "Lime Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.yellow": "Yellow Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.lightBlue": "Light Blue Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.magenta": "Magenta Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.orange": "Orange Per Bend Sinister Inverted",
        "item.banner.diagonal_up_right.white": "White Per Bend Sinister Inverted",
        "item.banner.circle.black": "Black Roundel",
        "item.banner.circle.red": "Red Roundel",
        "item.banner.circle.green": "Green Roundel",
        "item.banner.circle.brown": "Brown Roundel",
        "item.banner.circle.blue": "Blue Roundel",
        "item.banner.circle.purple": "Purple Roundel",
        "item.banner.circle.cyan": "Cyan Roundel",
        "item.banner.circle.silver": "Light Gray Roundel",
        "item.banner.circle.gray": "Gray Roundel",
        "item.banner.circle.pink": "Pink Roundel",
        "item.banner.circle.lime": "Lime Roundel",
        "item.banner.circle.yellow": "Yellow Roundel",
        "item.banner.circle.lightBlue": "Light Blue Roundel",
        "item.banner.circle.magenta": "Magenta Roundel",
        "item.banner.circle.orange": "Orange Roundel",
        "item.banner.circle.white": "White Roundel",
        "item.banner.rhombus.black": "Black Lozenge",
        "item.banner.rhombus.red": "Red Lozenge",
        "item.banner.rhombus.green": "Green Lozenge",
        "item.banner.rhombus.brown": "Brown Lozenge",
        "item.banner.rhombus.blue": "Blue Lozenge",
        "item.banner.rhombus.purple": "Purple Lozenge",
        "item.banner.rhombus.cyan": "Cyan Lozenge",
        "item.banner.rhombus.silver": "Light Gray Lozenge",
        "item.banner.rhombus.gray": "Gray Lozenge",
        "item.banner.rhombus.pink": "Pink Lozenge",
        "item.banner.rhombus.lime": "Lime Lozenge",
        "item.banner.rhombus.yellow": "Yellow Lozenge",
        "item.banner.rhombus.lightBlue": "Light Blue Lozenge",
        "item.banner.rhombus.magenta": "Magenta Lozenge",
        "item.banner.rhombus.orange": "Orange Lozenge",
        "item.banner.rhombus.white": "White Lozenge",
        "item.banner.half_vertical.black": "Black Per Pale",
        "item.banner.half_vertical.red": "Red Per Pale",
        "item.banner.half_vertical.green": "Green Per Pale",
        "item.banner.half_vertical.brown": "Brown Per Pale",
        "item.banner.half_vertical.blue": "Blue Per Pale",
        "item.banner.half_vertical.purple": "Purple Per Pale",
        "item.banner.half_vertical.cyan": "Cyan Per Pale",
        "item.banner.half_vertical.silver": "Light Gray Per Pale",
        "item.banner.half_vertical.gray": "Gray Per Pale",
        "item.banner.half_vertical.pink": "Pink Per Pale",
        "item.banner.half_vertical.lime": "Lime Per Pale",
        "item.banner.half_vertical.yellow": "Yellow Per Pale",
        "item.banner.half_vertical.lightBlue": "Light Blue Per Pale",
        "item.banner.half_vertical.magenta": "Magenta Per Pale",
        "item.banner.half_vertical.orange": "Orange Per Pale",
        "item.banner.half_vertical.white": "White Per Pale",
        "item.banner.half_horizontal.black": "Black Per Fess",
        "item.banner.half_horizontal.red": "Red Per Fess",
        "item.banner.half_horizontal.green": "Green Per Fess",
        "item.banner.half_horizontal.brown": "Brown Per Fess",
        "item.banner.half_horizontal.blue": "Blue Per Fess",
        "item.banner.half_horizontal.purple": "Purple Per Fess",
        "item.banner.half_horizontal.cyan": "Cyan Per Fess",
        "item.banner.half_horizontal.silver": "Light Gray Per Fess",
        "item.banner.half_horizontal.gray": "Gray Per Fess",
        "item.banner.half_horizontal.pink": "Pink Per Fess",
        "item.banner.half_horizontal.lime": "Lime Per Fess",
        "item.banner.half_horizontal.yellow": "Yellow Per Fess",
        "item.banner.half_horizontal.lightBlue": "Light Blue Per Fess",
        "item.banner.half_horizontal.magenta": "Magenta Per Fess",
        "item.banner.half_horizontal.orange": "Orange Per Fess",
        "item.banner.half_horizontal.white": "White Per Fess",
        "item.banner.half_vertical_right.black": "Black Per Pale Inverted",
        "item.banner.half_vertical_right.red": "Red Per Pale Inverted",
        "item.banner.half_vertical_right.green": "Green Per Pale Inverted",
        "item.banner.half_vertical_right.brown": "Brown Per Pale Inverted",
        "item.banner.half_vertical_right.blue": "Blue Per Pale Inverted",
        "item.banner.half_vertical_right.purple": "Purple Per Pale Inverted",
        "item.banner.half_vertical_right.cyan": "Cyan Per Pale Inverted",
        "item.banner.half_vertical_right.silver": "Light Gray Per Pale Inverted",
        "item.banner.half_vertical_right.gray": "Gray Per Pale Inverted",
        "item.banner.half_vertical_right.pink": "Pink Per Pale Inverted",
        "item.banner.half_vertical_right.lime": "Lime Per Pale Inverted",
        "item.banner.half_vertical_right.yellow": "Yellow Per Pale Inverted",
        "item.banner.half_vertical_right.lightBlue": "Light Blue Per Pale Inverted",
        "item.banner.half_vertical_right.magenta": "Magenta Per Pale Inverted",
        "item.banner.half_vertical_right.orange": "Orange Per Pale Inverted",
        "item.banner.half_vertical_right.white": "White Per Pale Inverted",
        "item.banner.half_horizontal_bottom.black": "Black Per Fess Inverted",
        "item.banner.half_horizontal_bottom.red": "Red Per Fess Inverted",
        "item.banner.half_horizontal_bottom.green": "Green Per Fess Inverted",
        "item.banner.half_horizontal_bottom.brown": "Brown Per Fess Inverted",
        "item.banner.half_horizontal_bottom.blue": "Blue Per Fess Inverted",
        "item.banner.half_horizontal_bottom.purple": "Purple Per Fess Inverted",
        "item.banner.half_horizontal_bottom.cyan": "Cyan Per Fess Inverted",
        "item.banner.half_horizontal_bottom.silver": "Light Gray Per Fess Inverted",
        "item.banner.half_horizontal_bottom.gray": "Gray Per Fess Inverted",
        "item.banner.half_horizontal_bottom.pink": "Pink Per Fess Inverted",
        "item.banner.half_horizontal_bottom.lime": "Lime Per Fess Inverted",
        "item.banner.half_horizontal_bottom.yellow": "Yellow Per Fess Inverted",
        "item.banner.half_horizontal_bottom.lightBlue": "Light Blue Per Fess Inverted",
        "item.banner.half_horizontal_bottom.magenta": "Magenta Per Fess Inverted",
        "item.banner.half_horizontal_bottom.orange": "Orange Per Fess Inverted",
        "item.banner.half_horizontal_bottom.white": "White Per Fess Inverted",
        "item.banner.creeper.black": "Black Creeper Charge",
        "item.banner.creeper.red": "Red Creeper Charge",
        "item.banner.creeper.green": "Green Creeper Charge",
        "item.banner.creeper.brown": "Brown Creeper Charge",
        "item.banner.creeper.blue": "Blue Creeper Charge",
        "item.banner.creeper.purple": "Purple Creeper Charge",
        "item.banner.creeper.cyan": "Cyan Creeper Charge",
        "item.banner.creeper.silver": "Light Gray Creeper Charge",
        "item.banner.creeper.gray": "Gray Creeper Charge",
        "item.banner.creeper.pink": "Pink Creeper Charge",
        "item.banner.creeper.lime": "Lime Creeper Charge",
        "item.banner.creeper.yellow": "Yellow Creeper Charge",
        "item.banner.creeper.lightBlue": "Light Blue Creeper Charge",
        "item.banner.creeper.magenta": "Magenta Creeper Charge",
        "item.banner.creeper.orange": "Orange Creeper Charge",
        "item.banner.creeper.white": "White Creeper Charge",
        "item.banner.bricks.black": "Black Field Masoned",
        "item.banner.bricks.red": "Red Field Masoned",
        "item.banner.bricks.green": "Green Field Masoned",
        "item.banner.bricks.brown": "Brown Field Masoned",
        "item.banner.bricks.blue": "Blue Field Masoned",
        "item.banner.bricks.purple": "Purple Field Masoned",
        "item.banner.bricks.cyan": "Cyan Field Masoned",
        "item.banner.bricks.silver": "Light Gray Field Masoned",
        "item.banner.bricks.gray": "Gray Field Masoned",
        "item.banner.bricks.pink": "Pink Field Masoned",
        "item.banner.bricks.lime": "Lime Field Masoned",
        "item.banner.bricks.yellow": "Yellow Field Masoned",
        "item.banner.bricks.lightBlue": "Light Blue Field Masoned",
        "item.banner.bricks.magenta": "Magenta Field Masoned",
        "item.banner.bricks.orange": "Orange Field Masoned",
        "item.banner.bricks.white": "White Field Masoned",
        "item.banner.gradient.black": "Black Gradient",
        "item.banner.gradient.red": "Red Gradient",
        "item.banner.gradient.green": "Green Gradient",
        "item.banner.gradient.brown": "Brown Gradient",
        "item.banner.gradient.blue": "Blue Gradient",
        "item.banner.gradient.purple": "Purple Gradient",
        "item.banner.gradient.cyan": "Cyan Gradient",
        "item.banner.gradient.silver": "Light Gray Gradient",
        "item.banner.gradient.gray": "Gray Gradient",
        "item.banner.gradient.pink": "Pink Gradient",
        "item.banner.gradient.lime": "Lime Gradient",
        "item.banner.gradient.yellow": "Yellow Gradient",
        "item.banner.gradient.lightBlue": "Light Blue Gradient",
        "item.banner.gradient.magenta": "Magenta Gradient",
        "item.banner.gradient.orange": "Orange Gradient",
        "item.banner.gradient.white": "White Gradient",
        "item.banner.gradient_up.black": "Black Base Gradient",
        "item.banner.gradient_up.red": "Red Base Gradient",
        "item.banner.gradient_up.green": "Green Base Gradient",
        "item.banner.gradient_up.brown": "Brown Base Gradient",
        "item.banner.gradient_up.blue": "Blue Base Gradient",
        "item.banner.gradient_up.purple": "Purple Base Gradient",
        "item.banner.gradient_up.cyan": "Cyan Base Gradient",
        "item.banner.gradient_up.silver": "Light Gray Base Gradient",
        "item.banner.gradient_up.gray": "Gray Base Gradient",
        "item.banner.gradient_up.pink": "Pink Base Gradient",
        "item.banner.gradient_up.lime": "Lime Base Gradient",
        "item.banner.gradient_up.yellow": "Yellow Base Gradient",
        "item.banner.gradient_up.lightBlue": "Light Blue Base Gradient",
        "item.banner.gradient_up.magenta": "Magenta Base Gradient",
        "item.banner.gradient_up.orange": "Orange Base Gradient",
        "item.banner.gradient_up.white": "White Base Gradient",
        "item.banner.skull.black": "Black Skull Charge",
        "item.banner.skull.red": "Red Skull Charge",
        "item.banner.skull.green": "Green Skull Charge",
        "item.banner.skull.brown": "Brown Skull Charge",
        "item.banner.skull.blue": "Blue Skull Charge",
        "item.banner.skull.purple": "Purple Skull Charge",
        "item.banner.skull.cyan": "Cyan Skull Charge",
        "item.banner.skull.silver": "Light Gray Skull Charge",
        "item.banner.skull.gray": "Gray Skull Charge",
        "item.banner.skull.pink": "Pink Skull Charge",
        "item.banner.skull.lime": "Lime Skull Charge",
        "item.banner.skull.yellow": "Yellow Skull Charge",
        "item.banner.skull.lightBlue": "Light Blue Skull Charge",
        "item.banner.skull.magenta": "Magenta Skull Charge",
        "item.banner.skull.orange": "Orange Skull Charge",
        "item.banner.skull.white": "White Skull Charge",
        "item.banner.flower.black": "Black Flower Charge",
        "item.banner.flower.red": "Red Flower Charge",
        "item.banner.flower.green": "Green Flower Charge",
        "item.banner.flower.brown": "Brown Flower Charge",
        "item.banner.flower.blue": "Blue Flower Charge",
        "item.banner.flower.purple": "Purple Flower Charge",
        "item.banner.flower.cyan": "Cyan Flower Charge",
        "item.banner.flower.silver": "Light Gray Flower Charge",
        "item.banner.flower.gray": "Gray Flower Charge",
        "item.banner.flower.pink": "Pink Flower Charge",
        "item.banner.flower.lime": "Lime Flower Charge",
        "item.banner.flower.yellow": "Yellow Flower Charge",
        "item.banner.flower.lightBlue": "Light Blue Flower Charge",
        "item.banner.flower.magenta": "Magenta Flower Charge",
        "item.banner.flower.orange": "Orange Flower Charge",
        "item.banner.flower.white": "White Flower Charge",
        "item.banner.border.black": "Black Bordure",
        "item.banner.border.red": "Red Bordure",
        "item.banner.border.green": "Green Bordure",
        "item.banner.border.brown": "Brown Bordure",
        "item.banner.border.blue": "Blue Bordure",
        "item.banner.border.purple": "Purple Bordure",
        "item.banner.border.cyan": "Cyan Bordure",
        "item.banner.border.silver": "Light Gray Bordure",
        "item.banner.border.gray": "Gray Bordure",
        "item.banner.border.pink": "Pink Bordure",
        "item.banner.border.lime": "Lime Bordure",
        "item.banner.border.yellow": "Yellow Bordure",
        "item.banner.border.lightBlue": "Light Blue Bordure",
        "item.banner.border.magenta": "Magenta Bordure",
        "item.banner.border.orange": "Orange Bordure",
        "item.banner.border.white": "White Bordure",
        "item.banner.curly_border.black": "Black Bordure Indented",
        "item.banner.curly_border.red": "Red Bordure Indented",
        "item.banner.curly_border.green": "Green Bordure Indented",
        "item.banner.curly_border.brown": "Brown Bordure Indented",
        "item.banner.curly_border.blue": "Blue Bordure Indented",
        "item.banner.curly_border.purple": "Purple Bordure Indented",
        "item.banner.curly_border.cyan": "Cyan Bordure Indented",
        "item.banner.curly_border.silver": "Light Gray Bordure Indented",
        "item.banner.curly_border.gray": "Gray Bordure Indented",
        "item.banner.curly_border.pink": "Pink Bordure Indented",
        "item.banner.curly_border.lime": "Lime Bordure Indented",
        "item.banner.curly_border.yellow": "Yellow Bordure Indented",
        "item.banner.curly_border.lightBlue": "Light Blue Bordure Indented",
        "item.banner.curly_border.magenta": "Magenta Bordure Indented",
        "item.banner.curly_border.orange": "Orange Bordure Indented",
        "item.banner.curly_border.white": "White Bordure Indented",
        "item.banner.mojang.black": "Black Thing",
        "item.banner.mojang.red": "Red Thing",
        "item.banner.mojang.green": "Green Thing",
        "item.banner.mojang.brown": "Brown Thing",
        "item.banner.mojang.blue": "Blue Thing",
        "item.banner.mojang.purple": "Purple Thing",
        "item.banner.mojang.cyan": "Cyan Thing",
        "item.banner.mojang.silver": "Light Gray Thing",
        "item.banner.mojang.gray": "Gray Thing",
        "item.banner.mojang.pink": "Pink Thing",
        "item.banner.mojang.lime": "Lime Thing",
        "item.banner.mojang.yellow": "Yellow Thing",
        "item.banner.mojang.lightBlue": "Light Blue Thing",
        "item.banner.mojang.magenta": "Magenta Thing",
        "item.banner.mojang.orange": "Orange Thing",
        "item.banner.mojang.white": "White Thing",
        "item.banner.straight_cross.black": "Black Cross",
        "item.banner.straight_cross.red": "Red Cross",
        "item.banner.straight_cross.green": "Green Cross",
        "item.banner.straight_cross.brown": "Brown Cross",
        "item.banner.straight_cross.blue": "Blue Cross",
        "item.banner.straight_cross.purple": "Purple Cross",
        "item.banner.straight_cross.cyan": "Cyan Cross",
        "item.banner.straight_cross.silver": "Light Gray Cross",
        "item.banner.straight_cross.gray": "Gray Cross",
        "item.banner.straight_cross.pink": "Pink Cross",
        "item.banner.straight_cross.lime": "Lime Cross",
        "item.banner.straight_cross.yellow": "Yellow Cross",
        "item.banner.straight_cross.lightBlue": "Light Blue Cross",
        "item.banner.straight_cross.magenta": "Magenta Cross",
        "item.banner.straight_cross.orange": "Orange Cross",
        "item.banner.straight_cross.white": "White Cross",
        "subtitles.ambient.cave": "Eerie noise",
        "subtitles.block.anvil.destroy": "Anvil destroyed",
        "subtitles.block.anvil.land": "Anvil landed",
        "subtitles.block.anvil.use": "Anvil used",
        "subtitles.block.brewing_stand.brew": "Brewing Stand bubbles",
        "subtitles.block.button.click": "Button clicks",
        "subtitles.block.chest.close": "Chest closes",
        "subtitles.block.chest.locked": "Chest locked",
        "subtitles.block.chest.open": "Chest opens",
        "subtitles.block.chorus_flower.death": "Chorus Flower withers",
        "subtitles.block.chorus_flower.grow": "Chorus Flower grows",
        "subtitles.block.comparator.click": "Comparator clicks",
        "subtitles.block.dispenser.dispense": "Dispensed item",
        "subtitles.block.dispenser.fail": "Dispenser failed",
        "subtitles.block.door.toggle": "Door creaks",
        "subtitles.block.fence_gate.toggle": "Fence Gate creaks",
        "subtitles.block.fire.ambient": "Fire crackles",
        "subtitles.block.fire.extinguish": "Fire extinguished",
        "subtitles.block.furnace.fire_crackle": "Furnace crackles",
        "subtitles.block.generic.break": "Block broken",
        "subtitles.block.generic.footsteps": "Footsteps",
        "subtitles.block.generic.hit": "Block breaking",
        "subtitles.block.generic.place": "Block placed",
        "subtitles.block.iron_trapdoor.close": "Trapdoor opens",
        "subtitles.block.iron_trapdoor.open": "Trapdoor closes",
        "subtitles.block.lava.ambient": "Lava pops",
        "subtitles.block.lava.extinguish": "Lava hisses",
        "subtitles.block.lever.click": "Lever clicks",
        "subtitles.block.note.note": "Note Block plays",
        "subtitles.block.piston.move": "Piston moves",
        "subtitles.block.portal.ambient": "Portal whooshes",
        "subtitles.block.pressure_plate.click": "Pressure Plate clicks",
        "subtitles.block.redstone_torch.burnout": "Torch fizzes",
        "subtitles.block.shulker_box.close": "Shulker closes",
        "subtitles.block.shulker_box.open": "Shulker opens",
        "subtitles.block.trapdoor.toggle": "Trapdoor creaks",
        "subtitles.block.tripwire.attach": "Tripwire attaches",
        "subtitles.block.tripwire.click": "Tripwire clicks",
        "subtitles.block.tripwire.detach": "Tripwire detaches",
        "subtitles.block.water.ambient": "Water flows",
        "subtitles.enchant.thorns.hit": "Thorns prick",
        "subtitles.entity.armorstand.fall": "Something fell",
        "subtitles.entity.arrow.hit": "Arrow hits",
        "subtitles.entity.arrow.hit_player": "Player hit",
        "subtitles.entity.arrow.shoot": "Arrow fired",
        "subtitles.entity.bat.ambient": "Bat screeches",
        "subtitles.entity.bat.death": "Bat dies",
        "subtitles.entity.bat.hurt": "Bat hurts",
        "subtitles.entity.bat.takeoff": "Bat takes off",
        "subtitles.entity.blaze.ambient": "Blaze breathes",
        "subtitles.entity.blaze.burn": "Blaze crackles",
        "subtitles.entity.blaze.death": "Blaze dies",
        "subtitles.entity.blaze.hurt": "Blaze hurts",
        "subtitles.entity.blaze.shoot": "Blaze shoots",
        "subtitles.entity.bobber.splash": "Fishing hook splashes",
        "subtitles.entity.bobber.throw": "Bobber thrown",
        "subtitles.entity.cat.ambient": "Cat meows",
        "subtitles.entity.cat.death": "Cat dies",
        "subtitles.entity.cat.hurt": "Cat hurts",
        "subtitles.entity.chicken.ambient": "Chicken clucks",
        "subtitles.entity.chicken.death": "Chicken dies",
        "subtitles.entity.chicken.egg": "Chicken plops",
        "subtitles.entity.chicken.hurt": "Chicken hurts",
        "subtitles.entity.cow.ambient": "Cow moos",
        "subtitles.entity.cow.death": "Cow dies",
        "subtitles.entity.cow.hurt": "Cow hurts",
        "subtitles.entity.cow.milk": "Cow gets milked",
        "subtitles.entity.creeper.death": "Creeper dies",
        "subtitles.entity.creeper.hurt": "Creeper hurts",
        "subtitles.entity.creeper.primed": "Creeper hisses",
        "subtitles.entity.donkey.ambient": "Donkey hee-haws",
        "subtitles.entity.donkey.angry": "Donkey neighs",
        "subtitles.entity.donkey.chest": "Donkey Chest equips",
        "subtitles.entity.donkey.death": "Donkey dies",
        "subtitles.entity.donkey.hurt": "Donkey hurts",
        "subtitles.entity.egg.throw": "Egg flies",
        "subtitles.entity.elder_guardian.ambient.land": "Elder Guardian flaps",
        "subtitles.entity.elder_guardian.ambient": "Elder Guardian moans",
        "subtitles.entity.elder_guardian.attack": "Elder Guardian shoots",
        "subtitles.entity.elder_guardian.curse": "Elder Guardian curses",
        "subtitles.entity.elder_guardian.death": "Elder Guardian dies",
        "subtitles.entity.elder_guardian.flop": "Elder Guardian flops",
        "subtitles.entity.elder_guardian.hurt": "Elder Guardian hurts",
        "subtitles.entity.enderdragon.ambient": "Dragon roars",
        "subtitles.entity.enderdragon.death": "Dragon dies",
        "subtitles.entity.enderdragon.flap": "Dragon flaps",
        "subtitles.entity.enderdragon.growl": "Dragon growls",
        "subtitles.entity.enderdragon.hurt": "Dragon hurts",
        "subtitles.entity.enderdragon.shoot": "Dragon shoots",
        "subtitles.entity.endereye.launch": "Eye of Ender shoots",
        "subtitles.entity.enderman.ambient": "Enderman vwoops",
        "subtitles.entity.enderman.death": "Enderman dies",
        "subtitles.entity.enderman.hurt": "Enderman hurts",
        "subtitles.entity.enderman.stare": "Enderman cries out",
        "subtitles.entity.enderman.teleport": "Enderman teleports",
        "subtitles.entity.endermite.ambient": "Endermite scuttles",
        "subtitles.entity.endermite.death": "Endermite dies",
        "subtitles.entity.endermite.hurt": "Endermite hurts",
        "subtitles.entity.enderpearl.throw": "Ender Pearl flies",
        "subtitles.entity.evocation_fangs.attack": "Fangs snap",
        "subtitles.entity.evocation_illager.ambient": "Evoker murmurs",
        "subtitles.entity.evocation_illager.cast_spell": "Evoker casts spell",
        "subtitles.entity.evocation_illager.death": "Evoker dies",
        "subtitles.entity.evocation_illager.hurt": "Evoker hurts",
        "subtitles.entity.evocation_illager.prepare_attack": "Evoker prepares attack",
        "subtitles.entity.evocation_illager.prepare_summon": "Evoker prepares summoning",
        "subtitles.entity.evocation_illager.prepare_wololo": "Evoker prepares charming",
        "subtitles.entity.experience_orb.pickup": "Experience gained",
        "subtitles.entity.firework.blast": "Firework blasts",
        "subtitles.entity.firework.launch": "Firework launches",
        "subtitles.entity.firework.twinkle": "Firework twinkles",
        "subtitles.entity.generic.big_fall": "Something fell",
        "subtitles.entity.generic.burn": "Burning",
        "subtitles.entity.generic.death": "Dying",
        "subtitles.entity.generic.drink": "Sipping",
        "subtitles.entity.generic.eat": "Eating",
        "subtitles.entity.generic.explode": "Explosion",
        "subtitles.entity.generic.extinguish_fire": "Fire extinguishes",
        "subtitles.entity.generic.hurt": "Something hurts",
        "subtitles.entity.generic.small_fall": "Something tripped",
        "subtitles.entity.generic.splash": "Splashing",
        "subtitles.entity.generic.swim": "Swimming",
        "subtitles.entity.ghast.ambient": "Ghast cries",
        "subtitles.entity.ghast.death": "Ghast dies",
        "subtitles.entity.ghast.hurt": "Ghast hurts",
        "subtitles.entity.ghast.shoot": "Ghast shoots",
        "subtitles.entity.guardian.ambient.land": "Guardian flaps",
        "subtitles.entity.guardian.ambient": "Guardian moans",
        "subtitles.entity.guardian.attack": "Guardian shoots",
        "subtitles.entity.guardian.curse": "Guardian curses",
        "subtitles.entity.guardian.death": "Guardian dies",
        "subtitles.entity.guardian.flop": "Guardian flops",
        "subtitles.entity.guardian.hurt": "Guardian hurts",
        "subtitles.entity.horse.ambient": "Horse neighs",
        "subtitles.entity.horse.angry": "Horse neighs",
        "subtitles.entity.horse.armor": "Horse armor equips",
        "subtitles.entity.horse.breathe": "Horse breathes",
        "subtitles.entity.horse.death": "Horse dies",
        "subtitles.entity.horse.eat": "Horse eats",
        "subtitles.entity.horse.gallop": "Horse gallops",
        "subtitles.entity.horse.hurt": "Horse hurts",
        "subtitles.entity.horse.jump": "Horse jumps",
        "subtitles.entity.horse.saddle": "Saddle equips",
        "subtitles.entity.husk.ambient": "Husk groans",
        "subtitles.entity.husk.death": "Husk dies",
        "subtitles.entity.husk.hurt": "Husk hurts",
        "subtitles.entity.iron_golem.attack": "Iron Golem attacks",
        "subtitles.entity.iron_golem.death": "Iron Golem dies",
        "subtitles.entity.iron_golem.hurt": "Iron Golem hurts",
        "subtitles.entity.item.break": "Item breaks",
        "subtitles.entity.item.pickup": "Item plops",
        "subtitles.entity.itemframe.add_item": "Item Frame fills",
        "subtitles.entity.itemframe.break": "Item Frame breaks",
        "subtitles.entity.itemframe.place": "Item Frame placed",
        "subtitles.entity.itemframe.remove_item": "Item Frame empties",
        "subtitles.entity.itemframe.rotate_item": "Item Frame clicks",
        "subtitles.entity.leashknot.break": "Leash knot breaks",
        "subtitles.entity.leashknot.place": "Leash knot tied",
        "subtitles.entity.lightning.impact": "Lightning strikes",
        "subtitles.entity.lightning.thunder": "Thunder roars",
        "subtitles.entity.llama.ambient": "Llama bleats",
        "subtitles.entity.llama.angry": "Llama bleats angry",
        "subtitles.entity.llama.chest": "Llama Chest equips",
        "subtitles.entity.llama.death": "Llama dies",
        "subtitles.entity.llama.eat": "Llama eats",
        "subtitles.entity.llama.hurt": "Llama hurts",
        "subtitles.entity.llama.spit": "Llama spits",
        "subtitles.entity.llama.step": "Llama steps",
        "subtitles.entity.llama.swag": "Llama is decorated",
        "subtitles.entity.magmacube.death": "Magma Cube dies",
        "subtitles.entity.magmacube.hurt": "Magma Cube hurts",
        "subtitles.entity.magmacube.squish": "Magma Cube squishes",
        "subtitles.entity.minecart.riding": "Minecart rolls",
        "subtitles.entity.mule.ambient": "Mule hee-haws",
        "subtitles.entity.mule.chest": "Mule Chest equips",
        "subtitles.entity.mule.death": "Mule dies",
        "subtitles.entity.mule.hurt": "Mule hurts",
        "subtitles.entity.painting.break": "Painting breaks",
        "subtitles.entity.painting.place": "Painting placed",
        "subtitles.entity.pig.ambient": "Pig oinks",
        "subtitles.entity.pig.death": "Pig dies",
        "subtitles.entity.pig.hurt": "Pig hurts",
        "subtitles.entity.pig.saddle": "Saddle equips",
        "subtitles.entity.player.burp": "Burp",
        "subtitles.entity.player.death": "Player dies",
        "subtitles.entity.player.hurt": "Player hurts",
        "subtitles.entity.player.levelup": "Player dings",
        "subtitles.entity.polar_bear.ambient": "Polar Bear groans",
        "subtitles.entity.polar_bear.baby_ambient": "Polar Bear hums",
        "subtitles.entity.polar_bear.death": "Polar Bear dies",
        "subtitles.entity.polar_bear.hurt": "Polar Bear hurts",
        "subtitles.entity.polar_bear.warning": "Polar Bear roars",
        "subtitles.entity.potion.splash": "Bottle smashes",
        "subtitles.entity.potion.throw": "Bottle thrown",
        "subtitles.entity.rabbit.ambient": "Rabbit squeaks",
        "subtitles.entity.rabbit.attack": "Rabbit attacks",
        "subtitles.entity.rabbit.death": "Rabbit dies",
        "subtitles.entity.rabbit.hurt": "Rabbit hurts",
        "subtitles.entity.rabbit.jump": "Rabbit hops",
        "subtitles.entity.sheep.ambient": "Sheep baahs",
        "subtitles.entity.sheep.death": "Sheep dies",
        "subtitles.entity.sheep.hurt": "Sheep hurts",
        "subtitles.entity.shulker.ambient": "Shulker lurks",
        "subtitles.entity.shulker.close": "Shulker closes",
        "subtitles.entity.shulker.death": "Shulker dies",
        "subtitles.entity.shulker.hurt": "Shulker hurts",
        "subtitles.entity.shulker.open": "Shulker opens",
        "subtitles.entity.shulker.shoot": "Shulker shoots",
        "subtitles.entity.shulker.teleport": "Shulker teleports",
        "subtitles.entity.shulker_bullet.hit": "Shulker bullet explodes",
        "subtitles.entity.shulker_bullet.hurt": "Shulker bullet breaks",
        "subtitles.entity.silverfish.ambient": "Silverfish hisses",
        "subtitles.entity.silverfish.death": "Silverfish dies",
        "subtitles.entity.silverfish.hurt": "Silverfish hurts",
        "subtitles.entity.skeleton.ambient": "Skeleton rattles",
        "subtitles.entity.skeleton.death": "Skeleton dies",
        "subtitles.entity.skeleton.hurt": "Skeleton hurts",
        "subtitles.entity.skeleton.shoot": "Skeleton shoots",
        "subtitles.entity.skeleton_horse.ambient": "Skeleton Horse cries",
        "subtitles.entity.skeleton_horse.death": "Skeleton Horse dies",
        "subtitles.entity.skeleton_horse.hurt": "Skeleton Horse hurts",
        "subtitles.entity.slime.attack": "Slime attacks",
        "subtitles.entity.slime.death": "Slime dies",
        "subtitles.entity.slime.hurt": "Slime hurts",
        "subtitles.entity.slime.squish": "Slime squishes",
        "subtitles.entity.snowball.throw": "Snowball flies",
        "subtitles.entity.snowman.death": "Snow Golem dies",
        "subtitles.entity.snowman.hurt": "Snow Golem hurts",
        "subtitles.entity.spider.ambient": "Spider hisses",
        "subtitles.entity.spider.death": "Spider dies",
        "subtitles.entity.spider.hurt": "Spider hurts",
        "subtitles.entity.squid.ambient": "Squid swims",
        "subtitles.entity.squid.death": "Squid dies",
        "subtitles.entity.squid.hurt": "Squid hurts",
        "subtitles.entity.stray.ambient": "Stray rattles",
        "subtitles.entity.stray.death": "Stray dies",
        "subtitles.entity.stray.hurt": "Stray hurts",
        "subtitles.entity.tnt.primed": "TNT fizzes",
        "subtitles.entity.vex.ambient": "Vex vexes",
        "subtitles.entity.vex.charge": "Vex shrieks",
        "subtitles.entity.vex.death": "Vex dies",
        "subtitles.entity.vex.hurt": "Vex hurts",
        "subtitles.entity.villager.ambient": "Villager mumbles",
        "subtitles.entity.villager.death": "Villager dies",
        "subtitles.entity.villager.hurt": "Villager hurts",
        "subtitles.entity.villager.no": "Villager disagrees",
        "subtitles.entity.villager.trading": "Villager trades",
        "subtitles.entity.villager.yes": "Villager agrees",
        "subtitles.entity.vindication_illager.ambient": "Vindicator mutters",
        "subtitles.entity.vindication_illager.death": "Vindicator dies",
        "subtitles.entity.vindication_illager.hurt": "Vindicator hurts",
        "subtitles.entity.witch.ambient": "Witch giggles",
        "subtitles.entity.witch.death": "Witch dies",
        "subtitles.entity.witch.drink": "Witch drinks",
        "subtitles.entity.witch.hurt": "Witch hurts",
        "subtitles.entity.witch.throw": "Witch throws",
        "subtitles.entity.wither.ambient": "Wither angers",
        "subtitles.entity.wither.death": "Wither dies",
        "subtitles.entity.wither.hurt": "Wither hurts",
        "subtitles.entity.wither.shoot": "Wither attacks",
        "subtitles.entity.wither.spawn": "Wither released",
        "subtitles.entity.wither_skeleton.ambient": "Wither Skeleton rattles",
        "subtitles.entity.wither_skeleton.death": "Wither Skeleton dies",
        "subtitles.entity.wither_skeleton.hurt": "Wither Skeleton hurts",
        "subtitles.entity.wolf.ambient": "Wolf pants",
        "subtitles.entity.wolf.death": "Wolf dies",
        "subtitles.entity.wolf.growl": "Wolf growls",
        "subtitles.entity.wolf.hurt": "Wolf hurts",
        "subtitles.entity.wolf.shake": "Wolf shakes",
        "subtitles.entity.zombie.ambient": "Zombie groans",
        "subtitles.entity.zombie.death": "Zombie dies",
        "subtitles.entity.zombie.hurt": "Zombie hurts",
        "subtitles.entity.zombie.infect": "Zombie infects",
        "subtitles.entity.zombie_horse.ambient": "Zombie Horse cries",
        "subtitles.entity.zombie_horse.death": "Zombie Horse dies",
        "subtitles.entity.zombie_horse.hurt": "Zombie Horse hurts",
        "subtitles.entity.zombie_pigman.ambient": "Zombie Pigman grunts",
        "subtitles.entity.zombie_pigman.angry": "Zombie Pigman angers",
        "subtitles.entity.zombie_pigman.death": "Zombie Pigman dies",
        "subtitles.entity.zombie_pigman.hurt": "Zombie Pigman hurts",
        "subtitles.entity.zombie_villager.ambient": "Zombie Villager groans",
        "subtitles.entity.zombie_villager.converted": "Zombie vociferates",
        "subtitles.entity.zombie_villager.cure": "Zombie snuffles",
        "subtitles.entity.zombie_villager.death": "Zombie Villager dies",
        "subtitles.entity.zombie_villager.hurt": "Zombie Villager hurts",
        "subtitles.item.armor.equip": "Gear equipped",
        "subtitles.item.armor.equip_chain": "Chain armor jingles",
        "subtitles.item.armor.equip_diamond": "Diamond armor clangs",
        "subtitles.item.armor.equip_elytra": "Elytra rustles",
        "subtitles.item.armor.equip_gold": "Gold armor clinks",
        "subtitles.item.armor.equip_iron": "Iron armor clanks",
        "subtitles.item.armor.equip_leather": "Leather armor rustles",
        "subtitles.item.bottle.fill": "Bottle fills",
        "subtitles.item.bucket.empty": "Bucket empties",
        "subtitles.item.bucket.fill": "Bucket fills",
        "subtitles.item.chorus_fruit.teleport": "Player teleports",
        "subtitles.item.firecharge.use": "Fireball whooshes",
        "subtitles.item.flintandsteel.use": "Flint and Steel click",
        "subtitles.item.hoe.till": "Hoe tills",
        "subtitles.item.shear": "Shears click",
        "subtitles.item.shield.block": "Shield blocks",
        "subtitles.item.shovel.flatten": "Shovel flattens",
        "subtitles.item.totem.use": "Totem activates",
        "subtitles.weather.rain": "Rain falls",
        "debug.reload_chunks.help": "F3 + A = Reload chunks",
        "debug.show_hitboxes.help": "F3 + B = Show hitboxes",
        "debug.clear_chat.help": "F3 + D = Clear chat",
        "debug.cycle_renderdistance.help": "F3 + F = Cycle render distance (Shift to invert)",
        "debug.chunk_boundaries.help": "F3 + G = Show chunk boundaries",
        "debug.advanced_tooltips.help": "F3 + H = Advanced tooltips",
        "debug.creative_spectator.help": "F3 + N = Cycle creative <-> spectator",
        "debug.pause_focus.help": "F3 + P = Pause on lost focus",
        "debug.help.help": "F3 + Q = Show this list",
        "debug.reload_resourcepacks.help": "F3 + T = Reload resource packs",
        "debug.reload_chunks.message": "Reloading all chunks",
        "debug.show_hitboxes.on": "Hitboxes: shown",
        "debug.show_hitboxes.off": "Hitboxes: hidden",
        "debug.cycle_renderdistance.message": "Render Distance: %s",
        "debug.chunk_boundaries.on": "Chunk borders: shown",
        "debug.chunk_boundaries.off": "Chunk borders: hidden",
        "debug.advanced_tooltips.on": "Advanced tooltips: shown",
        "debug.advanced_tooltips.off": "Advanced tooltips: hidden",
        "debug.creative_spectator.error": "Unable to switch gamemode, no permission",
        "debug.pause_focus.on": "Pause on lost focus: enabled",
        "debug.pause_focus.off": "Pause on lost focus: disabled",
        "debug.help.message": "Key bindings:",
        "debug.reload_resourcepacks.message": "Reloaded resource packs",
        "resourcepack.downloading": "Downloading Resource Pack",
        "resourcepack.requesting": "Making Request...",
        "resourcepack.progress": "Downloading file (%s MB)..."
      };
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/foods.json
  var require_foods = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/foods.json"(exports, module) {
      module.exports = [
        {
          id: 103,
          displayName: "Melon",
          name: "melon_block",
          stackSize: 64,
          foodPoints: 2,
          saturation: 1.2,
          effectiveQuality: 3.2,
          saturationRatio: 0.6
        },
        {
          id: 141,
          displayName: "Carrot",
          name: "carrots",
          stackSize: 64,
          foodPoints: 3,
          saturation: 3.6,
          effectiveQuality: 6.6,
          saturationRatio: 1.2
        },
        {
          id: 142,
          displayName: "Potato",
          name: "potatoes",
          stackSize: 64,
          foodPoints: 1,
          saturation: 0.6,
          effectiveQuality: 1.6,
          saturationRatio: 0.6
        },
        {
          id: 260,
          displayName: "Apple",
          stackSize: 64,
          name: "apple",
          foodPoints: 4,
          saturation: 2.4,
          effectiveQuality: 6.4,
          saturationRatio: 0.6
        },
        {
          id: 282,
          displayName: "Mushroom Stew",
          stackSize: 1,
          name: "mushroom_stew",
          foodPoints: 6,
          saturation: 7.2,
          effectiveQuality: 13.2,
          saturationRatio: 1.2
        },
        {
          id: 297,
          displayName: "Bread",
          stackSize: 64,
          name: "bread",
          foodPoints: 5,
          saturation: 6,
          effectiveQuality: 11,
          saturationRatio: 1.2
        },
        {
          id: 319,
          displayName: "Raw Porkchop",
          stackSize: 64,
          name: "porkchop",
          foodPoints: 3,
          saturation: 1.8,
          effectiveQuality: 4.8,
          saturationRatio: 0.6
        },
        {
          id: 320,
          displayName: "Cooked Porkchop",
          stackSize: 64,
          name: "cooked_porkchop",
          foodPoints: 8,
          saturation: 12.8,
          effectiveQuality: 20.8,
          saturationRatio: 1.6
        },
        {
          id: 322,
          displayName: "Golden Apple",
          stackSize: 64,
          name: "golden_apple",
          variations: [
            {
              metadata: 0,
              displayName: "Golden Apple"
            },
            {
              metadata: 1,
              displayName: "Enchanted Golden Apple"
            }
          ],
          foodPoints: 4,
          saturation: 9.6,
          effectiveQuality: 13.6,
          saturationRatio: 2.4
        },
        {
          id: 349,
          displayName: "Raw Fish",
          stackSize: 64,
          name: "fish",
          variations: [
            {
              metadata: 0,
              displayName: "Raw Fish"
            },
            {
              metadata: 1,
              displayName: "Raw Salmon"
            },
            {
              metadata: 2,
              displayName: "Clownfish"
            },
            {
              metadata: 3,
              displayName: "Pufferfish"
            }
          ],
          foodPoints: 2,
          saturation: 0.4,
          effectiveQuality: 2.4,
          saturationRatio: 0.2
        },
        {
          id: 350,
          displayName: "Cooked Fish",
          stackSize: 64,
          name: "cooked_fish",
          variations: [
            {
              metadata: 0,
              displayName: "Raw Fish"
            },
            {
              metadata: 1,
              displayName: "Raw Salmon"
            },
            {
              metadata: 2,
              displayName: "Clownfish"
            },
            {
              metadata: 3,
              displayName: "Pufferfish"
            }
          ],
          foodPoints: 5,
          saturation: 6,
          effectiveQuality: 11,
          saturationRatio: 1.2
        },
        {
          id: 354,
          displayName: "Cake",
          stackSize: 1,
          name: "cake",
          foodPoints: 2,
          saturation: 0.4,
          effectiveQuality: 2.4,
          saturationRatio: 0.2
        },
        {
          id: 357,
          displayName: "Cookie",
          stackSize: 64,
          name: "cookie",
          foodPoints: 2,
          saturation: 0.4,
          effectiveQuality: 2.4,
          saturationRatio: 0.2
        },
        {
          id: 363,
          displayName: "Raw Beef",
          stackSize: 64,
          name: "beef",
          foodPoints: 3,
          saturation: 1.8,
          effectiveQuality: 4.8,
          saturationRatio: 0.6
        },
        {
          id: 364,
          displayName: "Steak",
          stackSize: 64,
          name: "cooked_beef",
          foodPoints: 8,
          saturation: 12.8,
          effectiveQuality: 20.8,
          saturationRatio: 1.6
        },
        {
          id: 365,
          displayName: "Raw Chicken",
          stackSize: 64,
          name: "chicken",
          foodPoints: 2,
          saturation: 1.2,
          effectiveQuality: 3.2,
          saturationRatio: 0.6
        },
        {
          id: 366,
          displayName: "Cooked Chicken",
          stackSize: 64,
          name: "cooked_chicken",
          foodPoints: 6,
          saturation: 7.2,
          effectiveQuality: 13.2,
          saturationRatio: 1.2
        },
        {
          id: 367,
          displayName: "Rotten Flesh",
          stackSize: 64,
          name: "rotten_flesh",
          foodPoints: 4,
          saturation: 0.8,
          effectiveQuality: 4.8,
          saturationRatio: 0.2
        },
        {
          id: 375,
          displayName: "Spider Eye",
          stackSize: 64,
          name: "spider_eye",
          foodPoints: 2,
          saturation: 3.2,
          effectiveQuality: 5.2,
          saturationRatio: 1.6
        },
        {
          id: 393,
          displayName: "Baked Potato",
          stackSize: 64,
          name: "baked_potato",
          foodPoints: 5,
          saturation: 6,
          effectiveQuality: 11,
          saturationRatio: 1.2
        },
        {
          id: 394,
          displayName: "Poisonous Potato",
          stackSize: 64,
          name: "poisonous_potato",
          foodPoints: 2,
          saturation: 1.2,
          effectiveQuality: 3.2,
          saturationRatio: 0.6
        },
        {
          id: 396,
          displayName: "Golden Carrot",
          stackSize: 64,
          name: "golden_carrot",
          foodPoints: 6,
          saturation: 14.4,
          effectiveQuality: 20.4,
          saturationRatio: 2.4
        },
        {
          id: 400,
          displayName: "Pumpkin Pie",
          stackSize: 64,
          name: "pumpkin_pie",
          foodPoints: 8,
          saturation: 4.8,
          effectiveQuality: 12.8,
          saturationRatio: 0.6
        },
        {
          id: 411,
          displayName: "Raw Rabbit",
          stackSize: 64,
          name: "rabbit",
          foodPoints: 3,
          saturation: 1.8,
          effectiveQuality: 4.8,
          saturationRatio: 0.6
        },
        {
          id: 412,
          displayName: "Cooked Rabbit",
          stackSize: 64,
          name: "cooked_rabbit",
          foodPoints: 5,
          saturation: 6,
          effectiveQuality: 11,
          saturationRatio: 1.2
        },
        {
          id: 413,
          displayName: "Rabbit Stew",
          stackSize: 1,
          name: "rabbit_stew",
          foodPoints: 10,
          saturation: 12,
          effectiveQuality: 22,
          saturationRatio: 1.2
        },
        {
          id: 423,
          displayName: "Raw Mutton",
          stackSize: 64,
          name: "mutton",
          foodPoints: 2,
          saturation: 1.2,
          effectiveQuality: 3.2,
          saturationRatio: 0.6
        },
        {
          id: 424,
          displayName: "Cooked Mutton",
          stackSize: 64,
          name: "cooked_mutton",
          foodPoints: 6,
          saturation: 9.6,
          effectiveQuality: 15.6,
          saturationRatio: 1.5999999999999999
        },
        {
          id: 432,
          displayName: "Chorus Fruit",
          stackSize: 64,
          name: "chorus_fruit",
          foodPoints: 4,
          saturation: 2.4,
          effectiveQuality: 6.4,
          saturationRatio: 0.6
        },
        {
          id: 434,
          displayName: "Beetroot",
          stackSize: 64,
          name: "beetroot",
          foodPoints: 1,
          saturation: 1.2,
          effectiveQuality: 2.2,
          saturationRatio: 1.2
        },
        {
          id: 436,
          displayName: "Beetroot Soup",
          stackSize: 1,
          name: "beetroot_soup",
          foodPoints: 6,
          saturation: 7.2,
          effectiveQuality: 13.2,
          saturationRatio: 1.2
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/particles.json
  var require_particles = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/particles.json"(exports, module) {
      module.exports = [
        {
          id: 0,
          name: "explode"
        },
        {
          id: 1,
          name: "largeexplode"
        },
        {
          id: 2,
          name: "hugeexplosion"
        },
        {
          id: 3,
          name: "fireworksSpark"
        },
        {
          id: 4,
          name: "bubble"
        },
        {
          id: 5,
          name: "splash"
        },
        {
          id: 6,
          name: "wake"
        },
        {
          id: 7,
          name: "suspended"
        },
        {
          id: 8,
          name: "depthsuspend"
        },
        {
          id: 9,
          name: "crit"
        },
        {
          id: 10,
          name: "magicCrit"
        },
        {
          id: 11,
          name: "smoke"
        },
        {
          id: 12,
          name: "largesmoke"
        },
        {
          id: 13,
          name: "spell"
        },
        {
          id: 14,
          name: "instantSpell"
        },
        {
          id: 15,
          name: "mobSpell"
        },
        {
          id: 16,
          name: "mobSpellAmbient"
        },
        {
          id: 17,
          name: "witchMagic"
        },
        {
          id: 18,
          name: "dripWater"
        },
        {
          id: 19,
          name: "dripLava"
        },
        {
          id: 20,
          name: "angryVillager"
        },
        {
          id: 21,
          name: "happyVillager"
        },
        {
          id: 22,
          name: "townaura"
        },
        {
          id: 23,
          name: "note"
        },
        {
          id: 24,
          name: "portal"
        },
        {
          id: 25,
          name: "enchantmenttable"
        },
        {
          id: 26,
          name: "flame"
        },
        {
          id: 27,
          name: "lava"
        },
        {
          id: 28,
          name: "footstep"
        },
        {
          id: 29,
          name: "cloud"
        },
        {
          id: 30,
          name: "reddust"
        },
        {
          id: 31,
          name: "snowballpoof"
        },
        {
          id: 32,
          name: "snowshovel"
        },
        {
          id: 33,
          name: "slime"
        },
        {
          id: 34,
          name: "heart"
        },
        {
          id: 35,
          name: "barrier"
        },
        {
          id: 36,
          name: "iconcrack"
        },
        {
          id: 37,
          name: "blockcrack"
        },
        {
          id: 38,
          name: "blockdust"
        },
        {
          id: 39,
          name: "droplet"
        },
        {
          id: 40,
          name: "take"
        },
        {
          id: 41,
          name: "mobappearance"
        },
        {
          id: 42,
          name: "dragonbreath"
        },
        {
          id: 43,
          name: "endRod"
        },
        {
          id: 44,
          name: "damageIndicator"
        },
        {
          id: 45,
          name: "sweepAttack"
        },
        {
          id: 46,
          name: "fallingdust"
        },
        {
          id: 47,
          name: "totem"
        },
        {
          id: 48,
          name: "spit"
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.16.2/tints.json
  var require_tints = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.16.2/tints.json"(exports, module) {
      module.exports = {
        grass: {
          data: [
            {
              keys: [
                "badlands",
                "badlands_plateau",
                "eroded_badlands",
                "modified_badlands_plateau",
                "modified_wooded_badlands_plateau",
                "wooded_badlands_plateau"
              ],
              color: 9470285
            },
            {
              keys: [
                "desert",
                "desert_hills",
                "desert_lakes",
                "savanna",
                "savanna_plateau",
                "shattered_savanna",
                "shattered_savanna_plateau",
                "nether_wastes",
                "soul_sand_valley",
                "crimson_forest",
                "warped_forest",
                "basalt_deltas"
              ],
              color: 12564309
            },
            {
              keys: [
                "jungle",
                "jungle_hills",
                "modified_jungle",
                "bamboo_jungle",
                "bamboo_jungle_hills"
              ],
              color: 5884220
            },
            {
              keys: [
                "jungle_edge",
                "modified_jungle_edge"
              ],
              color: 6604607
            },
            {
              keys: [
                "forest",
                "flower_forest",
                "wooded_hills"
              ],
              color: 7979098
            },
            {
              keys: [
                "birch_forest",
                "birch_forest_hills",
                "tall_birch_forest",
                "tall_birch_hills"
              ],
              color: 8960871
            },
            {
              keys: [
                "dark_forest",
                "dark_forest_hills"
              ],
              color: 5274162
            },
            {
              keys: [
                "swamp",
                "swamp_hills"
              ],
              color: 6975545
            },
            {
              keys: [
                "swamp",
                "swamp_hills"
              ],
              color: 5011004
            },
            {
              keys: [
                "plains",
                "sunflower_plains",
                "beach"
              ],
              color: 9551193
            },
            {
              keys: [
                "ocean",
                "deep_ocean",
                "warm_ocean",
                "deep_warm_ocean",
                "lukewarm_ocean",
                "deep_lukewarm_ocean",
                "cold_ocean",
                "deep_cold_ocean",
                "deep_frozen_ocean",
                "river",
                "the_end",
                "small_end_islands",
                "end_barrens",
                "end_midlands",
                "end_highlands",
                "the_void"
              ],
              color: 9353585
            },
            {
              keys: [
                "mushroom_fields",
                "mushroom_field_shore"
              ],
              color: 5622079
            },
            {
              keys: [
                "mountains",
                "mountain_edge",
                "gravelly_mountains",
                "modified_gravelly_mountains",
                "wooded_mountains",
                "stone_shore"
              ],
              color: 9090697
            },
            {
              keys: [
                "snowy_beach"
              ],
              color: 8631699
            },
            {
              keys: [
                "giant_tree_taiga",
                "giant_tree_taiga_hills"
              ],
              color: 8829055
            },
            {
              keys: [
                "taiga",
                "taiga_hills",
                "taiga_mountains",
                "giant_spruce_taiga",
                "giant_spruce_taiga_hills"
              ],
              color: 8828803
            },
            {
              keys: [
                "snowy_tundra",
                "snowy_mountains",
                "ice_spikes",
                "snowy_taiga",
                "snowy_taiga_hills",
                "snowy_taiga_mountains",
                "frozen_ocean",
                "frozen_river"
              ],
              color: 8434839
            }
          ],
          default: 7979098
        },
        foliage: {
          data: [
            {
              keys: [
                "badlands",
                "badlands_plateau",
                "eroded_badlands",
                "modified_badlands_plateau",
                "modified_wooded_badlands_plateau",
                "wooded_badlands_plateau"
              ],
              color: 10387789
            },
            {
              keys: [
                "desert",
                "desert_hills",
                "desert_lakes",
                "savanna",
                "savanna_plateau",
                "shattered_savanna",
                "shattered_savanna_plateau",
                "nether_wastes",
                "soul_sand_valley",
                "crimson_forest",
                "warped_forest",
                "basalt_deltas"
              ],
              color: 11445290
            },
            {
              keys: [
                "jungle",
                "jungle_hills",
                "modified_jungle",
                "bamboo_jungle",
                "bamboo_jungle_hills"
              ],
              color: 3193611
            },
            {
              keys: [
                "jungle_edge",
                "modified_jungle_edge"
              ],
              color: 4110351
            },
            {
              keys: [
                "forest",
                "flower_forest",
                "wooded_hills",
                "dark_forest",
                "dark_forest_hills"
              ],
              color: 5877296
            },
            {
              keys: [
                "birch_forest",
                "birch_forest_hills",
                "tall_birch_forest",
                "tall_birch_hills"
              ],
              color: 7055681
            },
            {
              keys: [
                "swamp",
                "swamp_hills"
              ],
              color: 6975545
            },
            {
              keys: [
                "plains",
                "sunflower_plains",
                "beach"
              ],
              color: 7842607
            },
            {
              keys: [
                "ocean",
                "deep_ocean",
                "warm_ocean",
                "deep_warm_ocean",
                "lukewarm_ocean",
                "deep_lukewarm_ocean",
                "cold_ocean",
                "deep_cold_ocean",
                "deep_frozen_ocean",
                "river",
                "the_end",
                "small_end_islands",
                "end_barrens",
                "end_midlands",
                "end_highlands",
                "the_void"
              ],
              color: 7448397
            },
            {
              keys: [
                "mushroom_fields",
                "mushroom_field_shore"
              ],
              color: 2865935
            },
            {
              keys: [
                "mountains",
                "mountain_edge",
                "gravelly_mountains",
                "modified_gravelly_mountains",
                "wooded_mountains",
                "stone_shore"
              ],
              color: 7185259
            },
            {
              keys: [
                "snowy_beach"
              ],
              color: 6595192
            },
            {
              keys: [
                "giant_tree_taiga",
                "giant_tree_taiga_hills"
              ],
              color: 6858079
            },
            {
              keys: [
                "taiga",
                "taiga_hills",
                "taiga_mountains",
                "giant_spruce_taiga",
                "giant_spruce_taiga_hills"
              ],
              color: 6857828
            },
            {
              keys: [
                "snowy_tundra",
                "snowy_mountains",
                "ice_spikes",
                "snowy_taiga",
                "snowy_taiga_hills",
                "snowy_taiga_mountains",
                "frozen_ocean",
                "frozen_river"
              ],
              color: 6332795
            }
          ],
          default: 5877296
        },
        water: {
          data: [
            {
              keys: [
                "cold_ocean",
                "deep_cold_ocean"
              ],
              color: 4020182
            },
            {
              keys: [
                "frozen_ocean",
                "deep_frozen_ocean",
                "frozen_river"
              ],
              color: 3750089
            },
            {
              keys: [
                "lukewarm_ocean",
                "deep_lukewarm_ocean"
              ],
              color: 4566514
            },
            {
              keys: [
                "swamp",
                "swamp_hills"
              ],
              color: 6388580
            },
            {
              keys: [
                "warm_ocean",
                "deep_warm_ocean"
              ],
              color: 4445678
            }
          ],
          default: 4159204
        },
        redstone: {
          data: [
            {
              keys: [0],
              color: 4915200
            },
            {
              keys: [1],
              color: 7274496
            },
            {
              keys: [2],
              color: 7929856
            },
            {
              keys: [3],
              color: 8519680
            },
            {
              keys: [4],
              color: 9175040
            },
            {
              keys: [5],
              color: 9895936
            },
            {
              keys: [6],
              color: 10551296
            },
            {
              keys: [7],
              color: 11206656
            },
            {
              keys: [8],
              color: 11862016
            },
            {
              keys: [9],
              color: 12517376
            },
            {
              keys: [10],
              color: 13238272
            },
            {
              keys: [11],
              color: 13828096
            },
            {
              keys: [12],
              color: 14483456
            },
            {
              keys: [13],
              color: 15140352
            },
            {
              keys: [14],
              color: 15801088
            },
            {
              keys: [15],
              color: 16527616
            }
          ],
          default: 4915200
        },
        constant: {
          data: [
            {
              keys: ["birch_leaves"],
              color: 8431445
            },
            {
              keys: ["spruce_leaves"],
              color: 6396257
            },
            {
              keys: ["lily_pad"],
              color: 2129968
            }
          ],
          default: 0
        }
      };
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/mapIcons.json
  var require_mapIcons = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11/mapIcons.json"(exports, module) {
      module.exports = [
        {
          id: 0,
          name: "player",
          appearance: "White marker",
          visibleInItemFrame: false
        },
        {
          id: 1,
          name: "frame",
          appearance: "Green marker",
          visibleInItemFrame: true
        },
        {
          id: 2,
          name: "red_marker",
          appearance: "Red marker",
          visibleInItemFrame: false
        },
        {
          id: 3,
          name: "blue_marker",
          appearance: "Blue marker",
          visibleInItemFrame: false
        },
        {
          id: 4,
          name: "target_x",
          appearance: "White X",
          visibleInItemFrame: true
        },
        {
          id: 5,
          name: "target_point",
          appearance: "Red triangle",
          visibleInItemFrame: true
        },
        {
          id: 6,
          name: "player_off_map",
          appearance: "Large white dot",
          visibleInItemFrame: false
        },
        {
          id: 7,
          name: "player_off_limits",
          appearance: "Small white dot",
          visibleInItemFrame: false
        },
        {
          id: 8,
          name: "mansion",
          appearance: "Woodland mansion",
          visibleInItemFrame: true
        },
        {
          id: 9,
          name: "monument",
          appearance: "Ocean monument",
          visibleInItemFrame: true
        }
      ];
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11.2/version.json
  var require_version2 = __commonJS({
    "node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/minecraft-data/data/pc/1.11.2/version.json"(exports, module) {
      module.exports = {
        minecraftVersion: "1.11.2",
        version: 316,
        majorVersion: "1.11"
      };
    }
  });

  // node_modules/.pnpm/minecraft-data@3.60.0/node_modules/minecraft-data/mcData1.11.js
  Object.assign(window.mcData, {
    "1.11": {
      get attributes() {
        return require_attributes();
      },
      get blocks() {
        return require_blocks();
      },
      get blockCollisionShapes() {
        return require_blockCollisionShapes();
      },
      get biomes() {
        return require_biomes();
      },
      get effects() {
        return require_effects();
      },
      get enchantments() {
        return require_enchantments();
      },
      get items() {
        return require_items();
      },
      get recipes() {
        return require_recipes();
      },
      get instruments() {
        return require_instruments();
      },
      get materials() {
        return require_materials();
      },
      get entities() {
        return require_entities();
      },
      get protocol() {
        return require_protocol();
      },
      get protocolComments() {
        return require_protocolComments();
      },
      get windows() {
        return require_windows();
      },
      get version() {
        return require_version();
      },
      get language() {
        return require_language();
      },
      get foods() {
        return require_foods();
      },
      get particles() {
        return require_particles();
      },
      get tints() {
        return require_tints();
      },
      get mapIcons() {
        return require_mapIcons();
      }
    },
    "1.11.2": {
      get attributes() {
        return require_attributes();
      },
      get blocks() {
        return require_blocks();
      },
      get blockCollisionShapes() {
        return require_blockCollisionShapes();
      },
      get biomes() {
        return require_biomes();
      },
      get effects() {
        return require_effects();
      },
      get enchantments() {
        return require_enchantments();
      },
      get items() {
        return require_items();
      },
      get recipes() {
        return require_recipes();
      },
      get instruments() {
        return require_instruments();
      },
      get materials() {
        return require_materials();
      },
      get entities() {
        return require_entities();
      },
      get protocol() {
        return require_protocol();
      },
      get protocolComments() {
        return require_protocolComments();
      },
      get windows() {
        return require_windows();
      },
      get version() {
        return require_version2();
      },
      get language() {
        return require_language();
      },
      get foods() {
        return require_foods();
      },
      get particles() {
        return require_particles();
      },
      get tints() {
        return require_tints();
      },
      get mapIcons() {
        return require_mapIcons();
      }
    }
  });
})();
