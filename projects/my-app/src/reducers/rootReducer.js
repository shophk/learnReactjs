const initState = {
  posts: [
    {
      id: '1',
      title: 'Squirtle laid an egg',
      body:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolorum voluptatibus officiis nihil ipsa molestias voluptatem ut expedita voluptas corrupti voluptate, maiores, autem cumque numquam ea architecto sunt voluptatum ad!'
    },
    {
      id: '2',
      title: 'Charmander laid an egg',
      body:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolorum voluptatibus officiis nihil ipsa molestias voluptatem ut expedita voluptas corrupti voluptate, maiores, autem cumque numquam ea architecto sunt voluptatum ad!'
    },
    {
      id: '3',
      title: 'A Helix fossil was found',
      body:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolorum voluptatibus officiis nihil ipsa molestias voluptatem ut expedita voluptas corrupti voluptate, maiores, autem cumque numquam ea architecto sunt voluptatum ad!'
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
