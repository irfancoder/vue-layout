# VueLayout

VueLayout is a simple yet dynamic way to handle your layouts inside a Vue application. This library is inspired by how [Inertia](https://inertiajs.com/pages#persistent-layouts) manages their persistent layouts, which I think should be adopted more in practice! You will benefit from **less boilerplate code** & **advanced nested layouts** with minimal setup. Let's have a look!

*****Supports only Vue 3. Vue 2 adaptation soon**

![vuejs](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## Prerequisite

```bash
# Peer dependency
vue-router
```

VueLayout leverages on `vue-router` as a way to manage the switching of layouts. If your project does not use vue-router, I am sorry, but this library will not be useful to you.


## Installation

Use any of the NPM package manager
```bash
# NPM
npm install vue-layout --save-dev

# Yarn
yarn add vue-layout -D
```

## Usage

### Requirements

1. All layout component must have (1) default slot!
2. Use `vue-router` as routing tool 


### Setup


1. Inside your `App.vue` or your main Vue instance. Choose ONE of the option:

- Component: `<layout-vue>`
- Composable: `useLayout(router)` 

#### Option 1: Component 


```javascript
<template>
    <layout-vue></layout-vue>
</template>

// Options API
<script>
import LayoutVue from 'vue-layout'

export default {
    components: {
        LayoutVue
    }
}
</script>


// Composition API
<script setup>
import LayoutVue from 'vue-layout'
</script>

```

#### Option 2: Composable

```javascript
<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

// Options / Composition API
<script>
import { useLayout } from 'vue-layout'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const { layout } = useLayout(useRoute())
        return { layout }
    }
}
</script>
```

2. Create your layouts! Below are some examples:
```javascript
// layouts/authenticated.vue
<template>
    <div>
        <navbar></navbar>
        <slot />
    </div>
</template>


// layouts/header-main-footer.vue
<template>
    <div>
        <header></header>
        <main><slot /></main>
        <footer></footer>
    </div>
</template>
```


3. Go to your `vue-router` setup file. Inside your routes list, append `meta.layout` to the relevant pages and list the layouts for the page in an array! Eg.
```javascript
// Example vue-router setup
import { createRouter, createWebHistory } from 'vue-router'

/* Pages */
import Home from '../pages/home.vue'
import Login from '../pages/login.vue'

/* Layouts */
import Authenticated from '../layouts/authenticated.vue'
import HeaderMainFooter from '../layouts/header-main-footer.vue'
import Guest from '../layouts/guest.vue'

/* Routes */
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home:index',
        meta: {
            layout: [Authenticated, HeaderMainFooter]
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'auth:login:index',
        meta: {
            layout: [Guest]
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
```

4. That's it! Your setup is done! Go & give a try

## Comparison to Traditional Way of Handling Layouts

You might have encountered the following code where we essentially wrap the entire page with the layout component(s):

```javascript
// home.vue
<template>
    <base-layout>
        ...
    </base-layout>
</template>

<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>


// about.vue
<template>
    <base-layout>
         <team-layout>
            ...
         </team-layout>
    </base-layout>
</template>

<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import TeamLayout from '@/layouts/TeamLayout.vue'
</script>

```

- If we have lots of pages, we are bound to repeat this same pattern over and over again, which sucks! By using `vue-layout`, we get rid of this repeating code and let the router handle the layouts for us.
- Layout nesting is done by listing the layouts in an **[array]** starting from the **outer layer to the inner layer**. The page content will be rendered inside the **last layout in the array!**




## Limitations

- You cannot directly pass props to your layout components. To mitigate this, you can use state management tool such as Vuex or Pinia to manage the state of your layout components.
- Does not handle custom layout slots.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
[irfanismail](https://github.com/irfancoder)
