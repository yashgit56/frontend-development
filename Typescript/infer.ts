// extract route parameters

type ExtractRouteParams<T> = T extends `${string}:${infer Param}/${infer Rest}`
  ? { [K in Param | keyof ExtractRouteParams<`${Rest}`>]: string }
  : T extends `${string}:${infer Param}`
  ? { [K in Param]: string }
  : {};
type Params = ExtractRouteParams<"/users/:userId/posts/:postId">;

// /users/ : userId /posts/:postId
    // string   param   rest 


    // Recursive Type

type BinaryTree<T> = {
    value: T, 
    leftSubtree?: BinaryTree<T>;
    rightSubtree?: BinaryTree<T>;
}    

