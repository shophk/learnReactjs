//File for 'Action Creators'

//function tha returns an action
export const deletePost = id => {
  //es6 if parm and key is same, just use one is ok
  return { type: 'DELETE_POST', id };
};
