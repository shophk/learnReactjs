const initState = {
  posts: [
    {
      id: '1',
      title: 'Squirtle laid an egg',
      body:
        '1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolorum voluptatibus officiis nihil ipsa molestias voluptatem ut expedita voluptas corrupti voluptate, maiores, autem cumque numquam ea architecto sunt voluptatum ad!'
    },
    {
      id: '2',
      title: 'Charmander laid an egg',
      body:
        '2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolorum voluptatibus officiis nihil ipsa molestias voluptatem ut expedita voluptas corrupti voluptate, maiores, autem cumque numquam ea architecto sunt voluptatum ad!'
    },
    {
      id: '3',
      title: 'A Helix fossil was found',
      body:
        '3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, dolorum voluptatibus officiis nihil ipsa molestias voluptatem ut expedita voluptas corrupti voluptate, maiores, autem cumque numquam ea architecto sunt voluptatum ad!'
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    //go through each item in posts comparing its id
    //only returning posts that does not match id
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });

    //First put full current state, then override posts
    //with new posts
    return {
      ...state,
      posts: newPosts
    };
  }

  return state;
};

export default rootReducer;
