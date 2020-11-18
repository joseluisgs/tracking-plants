import PlantsService from '../Plants';

// Se crea un mock que simula el servicio
jest.mock('../Plants');

describe('API Services -> Plants', () => {
  test('Should get plants with custom name', async () => {
    const plants = await PlantsService.findPlant('coco');
    expect(plants).toBeDefined();
    expect(plants.length).toBe(2);
    expect(plants[0]).toHaveProperty('id');
    expect(plants[0]).toHaveProperty('name');
    expect(plants[0]).toHaveProperty('slug');
    expect(plants[0]).toHaveProperty('scientificName');
    expect(plants[0]).toHaveProperty('links');
    expect(plants[0]).toHaveProperty('image');
    expect(plants[0].name).toBe('Coconut palm');
    expect(plants[0].slug).toBe('cocos-nucifera');
  });
});
