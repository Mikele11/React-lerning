# React-lerning

## Changes

#### 09.10.2018 — redux-start
[start redux project](https://github.com/Mikele11/React-lerning/commit/ff8d9861c7764a6a2f44cd61a5d7618c45b28a44) - start simple redux project (counter)

[basics store and reducer](https://github.com/Mikele11/React-lerning/commit/8ff4dd3f5f010c53ed3363ab3066f0b222b4a36b) - basics store and reducer

[dispatching action](https://github.com/Mikele11/React-lerning/commit/2561cdf2fd8aca41c3887c21132a73317af32ed4) - dispatching action

[subscribe](https://github.com/Mikele11/React-lerning/commit/cfc5c45b05a40b4995682ee52c9dc9eaf9fbbf83) - subscribe

#### 10.10.2018 — redux-start

[connect redux to react](https://github.com/Mikele11/React-lerning/commit/977d39c411359c02685365a4cf28f56bfeab6792) - connect redux to react

[connect store to reactt](https://github.com/Mikele11/React-lerning/commit/a76b0d6c70926202962056f3d0baa23443508777) - connect store to react

[dispatching increment](https://github.com/Mikele11/React-lerning/commit/c5b6ac15921fe77621ff88c1279ce27a0878881e) - dispatching increment

[add other reducer](https://github.com/Mikele11/React-lerning/commit/e1ebebcd0327d58430039946d6346dfa324ffa75) - add other reducer

[switch case to reducer](https://github.com/Mikele11/React-lerning/commit/03f0e7d729f52808c8e0a1e89ac0b4b706487d1e) - switch case to reducer

[immutably state](https://github.com/Mikele11/React-lerning/commit/93a5a77088c8d0bc09667a24fee5f653ba9112b4) - immutably state

[delete immutably](https://github.com/Mikele11/React-lerning/commit/a32cf01366fbaffae0cd257fa5073ffa1f3ca0b3) - delete immutably

[outsoursing action](https://github.com/Mikele11/React-lerning/commit/2ad54fea86b7d3668ceac46be92d60b63c03476e) - outsoursing action

[multiple reducers](https://github.com/Mikele11/React-lerning/commit/a125cf5d18ab5c8121d0b161f8f36d71fcac6049) - multiple reducers

[adding middleware](https://github.com/Mikele11/React-lerning/commit/3f6575653aa2d26c13619bbec6647e7aa55de6d2) - adding middleware

#### 11.10.2018 — redux-start

[adding dev tools](https://github.com/Mikele11/React-lerning/commit/3dbd692ed908fa20ba1b4cce48f14e154eae2a8d) - adding dev tools

[action creators](https://github.com/Mikele11/React-lerning/commit/524444ccbdc40823c3c5c254fd1b2f57017b85c6) - action creators

[sync action creators](https://github.com/Mikele11/React-lerning/commit/9637fb502e9750ab8711e3ea468bb795faa4f68a) - sync action creators

[async handling](https://github.com/Mikele11/React-lerning/commit/ebae6f298f3b02faeaa3400b1b436b8f19cf6a19) - async handling

[restructuring action](https://github.com/Mikele11/React-lerning/commit/3d6bdf55bb799dfe4d2e8c3fd5e5db7a530b4ac2) - restructuring action

## Learned

#### 09.10.2018 — redux-start

I learned what a [store](#store) is

I learned what a [reducers](#reducers) is

I learned what a [action](#action) is

I learned what a [subscribe](#subscribe) is

#### 10.10.2018 — redux-start

I learned why need to use [immutably](#immutably) state

### Definitions

#### 09.10.2018 — redux-start

<a name="store"></a>Store - The Store have the entire state tree of your application. The only way to change the state inside it is to dispatch action to it.

<a name="reducers"></a>Reducers - this is pure functions that return a state. Reducers update state depending on what reducers is called.

<a name="action"></a>Action - These are the structures that transfer data from your application to the repository. They are the only sources of information for the repository. You send them to the store using the **store.dispatch()** method.

<a name="subscribe"></a>Subscribe - Return state of store. For this we must use **store.subscribe()**

#### 10.10.2018 — redux-start

<a name="immutably"></a>Immutably state - This is the preservation of the immutability of the original state, but the change and return of its copy. For this use 2 method - **'...'** and **Object.assign()**

## Questions

#### 09.10.2018 — redux-start

**There were no questions on this stage**

#### 09.10.2018 — redux-start

**I don't quite understand how use interceptors**


