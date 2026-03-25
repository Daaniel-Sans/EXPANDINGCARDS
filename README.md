# Expanding Cards

An interactive expanding cards component built with HTML, CSS and vanilla JavaScript, no libraries or dependencies required.

## Demo
![Demo](https://github.com/user-attachments/assets/289848a6-52b2-4c54-be71-9c68dddb4420)

Click on any card to expand it and reveal its content, while the rest collapse. Each card button toggles between `+` when inactive and `-` when active.

## Tech stack

- HTML5
- CSS3 (Flexbox, Custom Properties, transitions)
- Vanilla JavaScript

## Project structure
```
expanding-cards/
├── index.html
├── style.css
└── main.js
```

## Key concepts

**CSS:** Cards are distributed using `flex`. The active card gets `flex: 5` while inactive ones get `flex: 1`, creating the expand animation via `transition: all 0.7s ease`. Paragraph visibility is controlled with `opacity` and `height` to avoid layout jumps during transitions.

**JavaScript:** Each card listens for a `click` event. When triggered, the `active` class is added and the button label updates. The `removeActiveClasses()` function resets all cards before activating the new one.

**Responsive:** Below 1024px the card layout switches from horizontal to vertical using a media query.
