export const dogs = [
  {
    id: 'bella',
    name: 'Bella',
    breed: 'Golden Retriever',
    age: 3,
    ageLabel: 'Adult',
    gender: 'Female',
    image: '/dogs/bella.jpg',
    shortDescription: 'Gentle, friendly, and always ready for a family walk.',
    description:
      'Bella is a sunny Golden Retriever who loves people of all ages. She is house-trained, enjoys fetch, and settles well after playtime. She would thrive in a home that can give her daily outdoor time.',
    personality: 'Affectionate, patient, and playful. Great with children and other dogs.',
    health:
      'Vaccinated, spayed, and microchipped. Recent checkup showed she is in excellent health.',
  },
  {
    id: 'max',
    name: 'Max',
    breed: 'Labrador Retriever',
    age: 2,
    ageLabel: 'Young',
    gender: 'Male',
    image: '/dogs/max.jpg',
    shortDescription: 'Energetic Lab who loves swimming, toys, and snacks.',
    description:
      'Max is a bright young Labrador with a big heart. He is learning basic commands and already sits for treats. He needs an active home that enjoys parks, games, and plenty of exercise.',
    personality: 'Curious, loyal, and full of energy. Learns quickly with positive training.',
    health:
      'Vaccinated, neutered, and microchipped. No known medical issues.',
  },
  {
    id: 'luna',
    name: 'Luna',
    breed: 'Siberian Husky',
    age: 4,
    ageLabel: 'Adult',
    gender: 'Female',
    image: '/dogs/luna.jpg',
    shortDescription: 'Talkative Husky who enjoys long walks and cool weather.',
    description:
      'Luna is an independent but loving Husky. She enjoys running, exploring, and “talking” to her people. A securely fenced yard and daily exercise will help her stay happy.',
    personality: 'Smart, vocal, and adventurous. Best with experienced dog owners.',
    health:
      'Vaccinated, spayed, and microchipped. Coat and joints are in good condition.',
  },
  {
    id: 'charlie',
    name: 'Charlie',
    breed: 'Beagle',
    age: 1,
    ageLabel: 'Puppy',
    gender: 'Male',
    image: '/dogs/charlie.jpg',
    shortDescription: 'Curious Beagle puppy with a nose for adventure.',
    description:
      'Charlie is a sweet Beagle puppy who follows scents everywhere he goes. He is crate-training well and loves puzzle toys. He will do best with patient owners who enjoy training.',
    personality: 'Friendly, sniffy, and cheerful. Gets along with other pets.',
    health:
      'Age-appropriate vaccines started, microchipped, and recently dewormed.',
  },
  {
    id: 'daisy',
    name: 'Daisy',
    breed: 'Corgi',
    age: 5,
    ageLabel: 'Adult',
    gender: 'Female',
    image: '/dogs/daisy.jpg',
    shortDescription: 'Short legs, big personality, and a talent for making people smile.',
    description:
      'Daisy is a confident Corgi who enjoys short walks, naps, and being part of family life. She is already house-trained and knows sit, stay, and paw.',
    personality: 'Bold, funny, and people-focused. Enjoys being the center of attention.',
    health:
      'Vaccinated, spayed, and microchipped. Weight is monitored for joint health.',
  },
  {
    id: 'rocky',
    name: 'Rocky',
    breed: 'German Shepherd',
    age: 6,
    ageLabel: 'Adult',
    gender: 'Male',
    image: '/dogs/rocky.jpg',
    shortDescription: 'Loyal companion who likes structure, training, and quiet evenings.',
    description:
      'Rocky is a calm German Shepherd looking for a steady home. He already knows several commands and enjoys puzzle toys. He would love a family that can continue gentle training.',
    personality: 'Protective, intelligent, and calm indoors after exercise.',
    health:
      'Vaccinated, neutered, and microchipped. Hip screening was normal at last visit.',
  },
  {
    id: 'milo',
    name: 'Milo',
    breed: 'Poodle',
    age: 8,
    ageLabel: 'Senior',
    gender: 'Male',
    image: '/dogs/milo.jpg',
    shortDescription: 'Gentle senior Poodle who enjoys calm homes and soft beds.',
    description:
      'Milo is a low-energy senior who still loves short strolls and cuddles. He is great for apartments and first-time adopters who want a quieter companion.',
    personality: 'Soft, polite, and snuggly. Comfortable around visitors.',
    health:
      'Vaccinated, neutered, and microchipped. Takes a daily joint supplement as recommended by our vet.',
  },
  {
    id: 'coco',
    name: 'Coco',
    breed: 'Mixed Breed',
    age: 2,
    ageLabel: 'Young',
    gender: 'Female',
    image: '/dogs/coco.jpg',
    shortDescription: 'Happy mixed-breed dog who gets along with almost everyone.',
    description:
      'Coco is a medium-sized mix with a wagging tail and a goofy grin. She is adaptable, crate-trained, and already used to car rides. A wonderful choice for an active household.',
    personality: 'Easygoing, social, and eager to please.',
    health:
      'Vaccinated, spayed, and microchipped. Healthy weight and shiny coat.',
  },
]

export const ageFilters = ['All ages', 'Puppy', 'Young', 'Adult', 'Senior']

export function getDogById(id) {
  return dogs.find((dog) => dog.id === id)
}

export function getFeaturedDogs() {
  return dogs.slice(0, 4)
}

export function getBreeds() {
  return ['All breeds', ...new Set(dogs.map((dog) => dog.breed))]
}
