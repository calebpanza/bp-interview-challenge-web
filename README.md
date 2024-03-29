# BibleProject Web Challenge Overview

- Create a page that displays a BibleProject video series
- Spend no more than 6 hours on the challenge

## Design Requirements

- Style the page to match `index.png` as close as possible without access to the Figma file
- Make the page responsive
- Load a YouTube embed in the right section of the banner when a video tile is clicked

## Technical Requirements

- Use the provided template as a starting point
  - [Vite](https://vitejs.dev/) is included to support JSX and preview the page
  - No third-party packages should be installed
  - CSS should run in modern browsers without using any additional features provided by Vite or PostCSS
- Fetch the contents of `public/api/data.json` to render the page
- Allow the page to accept a URL query parameter called `debug` that will cause the video tile interaction to randomly fail and handle the error gracefully

## Stretch Goals

- Add at least one CSS enhancement (animation, effect, etc.)
- Create a simple theme using CSS custom properties
- Add any additional improvements or optimizations that you feel make the experience better

# Note from the Author

## Design Considerations

**Large Displays**

Users are greeted with a large hero image representing the entire series when the page first loads. The aspect ratio is set to `21 / 9` with a max height in order to not consume the entirety of the screen. This is done so that the user's eyes can be more easily drawn to the video items below.

Users can scroll down to see an evenly distributed grid layout of each video item. In order to take advantage of the most amount of space, the grid is split into 4 columns.

When users click on a video item, the page will scroll up and the video items will slide in from the trailing edge of the screen. This floating YouTube embed can be dismissed by pressing the `x` control.

**Medium Displays**

Users are greeted with a similar hero when the page first loads. The aspect ratio on tablets is set to `16 / 9`. This aspect ratio is used since table sized screens and devices are often used in landscape mode when browsing the web and this guarantees a larger image height when the screen first loads.

Users can scroll down to see an evenly distributed grid layout of each video item. Since there is less space, the grid is split into 3 columns.

When users click on a video item, the page will scroll up and the video items will slide in from the trailing edge of the screen. This floating YouTube embed can be dismissed by pressing the `x` control.

**Small Displays**

Users are greeted with a large hero image. On small devices, we set the minimum height to as aspect ratio of `1 / 1`. This will keep images from bring awkwardly small. Since small devices are often mobile phones, we don't set a max height. This avoid assistive features like font scaling from getting in the way of the presentation of the information.

When touch features are not available, we can safely assume that we are using a small desktop window. In this case, we preview each video item in a grid with 2 columns.

When touch feature **are** enabled, the video tiles are laid out in a horizontally scrolling container. This allows for the web app to feel more "native" to the user. It also take up less vertical space which makes accessing the content far easier.

Tapping on a video item will open up a video player modal covering the entirety of the hero section. The entering and exiting animations are centered to better fit this spacing. A "glassmorphic" background blur effect makes the entire modal feel more native to mobile OS's.

**Other Design Considerations**

A full-screen loading animation plays of the BibleProject logo stays on the screen until the data has loaded. This animated icon allows for a more easily manageable loading state visual and feels like a native "splash screen". When the effect is finished and content is displayed, the component will clean itself by unmounting to avoid pointer event conflicts.

## Technical Considerations

The file structure chosen takes into account the way that I typically structure my applications in order to allow for a balance between separation of concert _and_ reusability.

I opted to organize my CSS files with media queries spread out between "component styles" as opposed to consolidating all media-specific queries into 1 call. The page is simple enough and the styles are not heavy enough to slow down browser rendering beyond reasonable standards. I believe that this code organization offers an easier time for code maintenance and developer handoff. All styles for all components for all screen sizes are grouped together with comment headings.

I really like using a 4px implicit grid in my design systems, so you'll notice a `--base-unit` of 4 used for calculating sizes.

## Testing & Debugging

`?debug=true` Enables a random timer that fires off between 1 and 5 seconds that will trigger an error message to display in the video player. This effect fires off once per page load and can be re-simulated by reloading the page.

`?load_delay=[ number ]` Sets the amount of time in milliseconds that it will take for data to load. This allows the loading screen animation to play. The default is set to `2500`.

## Thoughts and Reflects

There are some additional design consideration I would make if expanding beyond the 6-hour constraint:

- Animated hover state to the navigation button on the video item
- Parallax effect to the hero background image
- Load the video from the center on large devices in order to provide more space for the "minimized" YouTube player. I would animate a background blur to the hero background image and animate the title to comfortably sit above the video modal.
- Dark mode

There are some additional technical considerations I would make it expanding beyond the 6-hour constraint:

- Support pre-loading a video by including an additional search parameter or path in the url
- Implement the application using Remix in order to take advantage of server-side loading and static site rendering
- Add metadata to the page header for the series and then each video
- Research the YouTube iframe for tracking watch state and responding accordingly on the UI. I would likely enable a "keep watching" or "watch again" call to action on each card
- Research the YouTube iframe settings for identifying when a video has completed in order to add a "watch next" call to action on the video player
- Clean up & refactor CSS variables and types to be more scalable for a larger project
- Leverage TailwindCSS for faster iterations and theme handling
- Use all sizes of the images in order to progressively load images to the larges available size. I would do this by rendering each of the smaller sizes on top of one another. They could "race" to be rendered until the `large` image has finished loading at which time the others will be dismounted to avoid eating up resources.
