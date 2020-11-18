import PlantsService from '../Plants';

// Se crea un mock que simula el servicio
jest.mock('../Plants');

const data = {
  date: '2020-11-16T17:45:01.530Z',
  id: '161978',
  image: 'https://bs.floristic.org/image/o/95546f3e695dd2f36ad1f27037713afe20c5da29',
  name: 'Estrella de mar',
  slug: 'pallenis-maritima',
  links: {
    genus: '/api/v1/genus/pallenis',
    plant: '/api/v1/plants/pallenis-maritima',
    self: '/api/v1/species/pallenis-maritima',
  },
};

describe('Firebase Services -> Plants', () => {
  test('Should save a plant', async () => {
    const res = await PlantsService.post(data);
    expect(res).toBeDefined();
    expect(res).toHaveProperty('date');
    expect(res).toHaveProperty('id');
    expect(res).toHaveProperty('image');
    expect(res).toHaveProperty('name');
    expect(res).toHaveProperty('links');
  });
});
