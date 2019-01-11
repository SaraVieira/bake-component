# 🍰 Bake Component 🍰

A CLI for generating several types of react components.

## Install

```bash
  npm i -g bake-component
  # or
  yarn global add bake-component
  # or
  npx bake-component
```

## Commands

```bash
  bake-component
```

Will prompt you with what component to create, name and path.

### Functional Component

```bash
  bake-component functional

  # or

  bake-component f
```

Creates a functional Component with the name `Component` in `index.js`

### Arguments

- name: The name of the component
- path: Where to create this Component based on your current directory

## Class Component

```bash
  bake-component component

  # or

  bake-component c
```

Creates a class Component with the name `Component` in `index.js`

### Arguments

- name: The name of the component
- path: Where to create this Component based on your current directory

### Styled Component

```bash
  bake-component styled

  # or

  bake-component s
```

### Arguments

- name: The name of the component
- path: Where to create this Component based on your current directory

Creates a styled Component with the name `Component` in `index.js`

## License

MIT - see LICENSE
