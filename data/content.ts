
import { AnimationTemplate, Source, VibeKit } from '../types';

export const sources: Source[] = [
    { id: 1, title: "An Interactive Guide to Scroll-Driven Animations", author: "Bramus Van Damme", url: "https://web.dev/articles/scroll-driven-animations", publication: "web.dev", date: "2023-09-19" },
    { id: 2, title: "View Transitions for Single-Page Apps", author: "Jake Archibald", url: "https://developer.chrome.com/docs/web-platform/view-transitions/", publication: "Chrome for Developers", date: "2024-02-05" },
    { id: 3, title: "Houdini: Demystifying the Future of CSS", author: "Una Kravets", url: "https://www.smashingmagazine.com/2016/03/houdini-maybe-the-most-exciting-development-in-css-youve-never-heard-of/", publication: "Smashing Magazine", date: "2022-08-15" },
    { id: 4, title: "Building a more powerful `linear()` easing function", author: "Bramus Van Damme", url: "https://web.dev/articles/powerful-linear-easing-function", publication: "web.dev", date: "2024-03-27" },
    { id: 5, title: "CSS :has(): The Family Selector", author: "Chris Coyier", url: "https://css-tricks.com/the-css-has-selector/", publication: "CSS-Tricks", date: "2023-12-21" },
    { id: 6, title: "FLIP Your Animations", author: "Paul Lewis", url: "https://aerotwist.com/blog/flip-your-animations/", publication: "Aerotwist", date: "2015-03-14" },
    { id: 7, title: "Case Study: The Art of Subtle Animations", author: "Awwwards Team", url: "https://www.awwwards.com/inspiration/case-study-stripe-com", publication: "Awwwards", date: "2023-05-10" },
    { id: 8, title: "The new view transitions API", author: "Michelle Barker", url: "https://css-irl.info/the-new-view-transitions-api/", publication: "CSS { In Real Life }", date: "2023-10-11" },
    { id: 9, title: "Designing for reduced motion", author: "Tatiana Mac", url: "https://www.a11yproject.com/posts/designing-for-reduced-motion/", publication: "The A11Y Project", date: "2023-01-10" },
    { id: 10, title: "Typography in UI Design", author: "Erik D. Kennedy", url: "https://learnui.design/blog/4-rules-for-great-ux-typography.html", publication: "Learn UI Design", date: "2023-02-18" },
    { id: 11, title: "On-Scroll Animations with View Timelines", author: "Maxime Heckel", url: "https://blog.maximeheckel.com/posts/on-scroll-animations-with-view-timelines/", publication: "Maxime Heckel's Blog", date: "2024-01-30" },
    { id: 12, title: "Container Queries are Actually Great", author: "Ahmad Shadeed", url: "https://ishadeed.com/article/container-queries-are-great/", publication: "ishadeed.com", date: "2023-04-12" },
    { id: 13, title: "The guide to creating fluid typography in Figma", author: "Oliver Schöndorfer", url: "https://pimpmytype.com/fluid-typography/", publication: "Pimp my Type", date: "2023-08-22" },
    { id: 14, title: "The State Of Animation 2024", author: "Cassie Evans", url: "https://www.smashingmagazine.com/2024/01/state-of-animation-2024/", publication: "Smashing Magazine", date: "2024-01-24" },
    { id: 15, title: "Inspirational Website: Linear App", author: "Linear Team", url: "https://linear.app", publication: "Linear", date: "2024-01-01" },
    { id: 16, title: "Inspirational Website: Stripe", author: "Stripe Team", url: "https://stripe.com", publication: "Stripe", date: "2024-01-01" },
    { id: 17, title: "Inspirational Website: Pitch", author: "Pitch Team", url: "https://pitch.com", publication: "Pitch", date: "2024-01-01" },
    { id: 18, title: "Grid-based Layouts with CSS Grid", author: "MDN Contributors", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout", publication: "MDN Web Docs", date: "2023-11-20" },
    { id: 19, title: "A Guide to Modern CSS Colors with Oklch", author: "Chris Coyier", url: "https://css-tricks.com/a-guide-to-modern-css-colors-with-oklch/", publication: "CSS-Tricks", date: "2023-09-05" },
    { id: 20, title: "Web Animations API", author: "MDN Contributors", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API", publication: "MDN Web Docs", date: "2024-02-15" },
    { id: 21, title: "The State of CSS 2023", author: "Devographics", url: "https://2023.stateofcss.com/en-US/", publication: "State of CSS", date: "2023-12-01" },
    { id: 22, title: "Creative Grid Layouts", author: "Michelle Barker", url: "https://codrops.com/2023/03/07/creative-grid-layouts/", publication: "Codrops", date: "2023-03-07" },
    { id: 23, title: "High performance animations", author: "Paul Lewis & Sam Thorogood", url: "https://web.dev/articles/animations-guide", publication: "web.dev", date: "2022-07-20" },
    { id: 24, title: "Accessible Design Systems", author: "Geri Reid", url: "https://www.smashingmagazine.com/2023/02/accessible-design-systems-practical-guide/", publication: "Smashing Magazine", date: "2023-02-08" },
    { id: 25, title: "Inspirational Website: Framer", author: "Framer Team", url: "https://framer.com", publication: "Framer", date: "2024-01-01" }
];

export const animationTemplates: AnimationTemplate[] = [
    {
        name: "Scroll-Linked Progress Bar",
        useCases: "Indicating reading progress on articles, showing completion of a long form, or as a visual element in storytelling sites.",
        howItWorks: "This uses the new CSS `animation-timeline` property. We define a standard `width` animation from 0% to 100%. Then, instead of a time-based duration, we link it to the `scroll()` progress of the entire document. As the user scrolls down, the animation progresses from its start to its end state.",
        example: {
            html: `
<div class="progress-bar-container">
  <div class="progress-bar"></div>
</div>
<div class="content">...</div>`,
            css: `
.progress-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #333;
}
.progress-bar {
  height: 100%;
  background-color: #22D3EE;
  width: 0%; /* Initial state */
  animation: grow-on-scroll linear forwards;
  animation-timeline: scroll(root block);
}
@keyframes grow-on-scroll {
  to { width: 100%; }
}`,
            js: ""
        },
        accessibilityNotes: "This is purely decorative, so no specific ARIA attributes are needed. It respects `prefers-reduced-motion` automatically as it's a CSS animation. Ensure the color contrast of the bar is sufficient.",
        performanceNotes: "Extremely performant as it runs entirely on the compositor thread. It does not cause layout or paint operations during scroll.",
        mobileNotes: "Works flawlessly on mobile. Ensure the fixed container doesn't obscure important UI.",
        fallbackStrategy: "On browsers that don't support `animation-timeline`, the bar will simply not animate and remain at 0% width. A JavaScript IntersectionObserver could be used to create a similar, though less performant, effect.",
        inspirations: [1, 11]
    },
    {
        name: "Staggered List Entrance",
        useCases: "Animating items into view in a list, grid, or navigation menu to add character and draw attention.",
        howItWorks: "Each list item has a fade-in and slide-up animation. An `animation-delay` is applied to each subsequent item, creating a staggered or 'domino' effect. The delay can be calculated using a CSS custom property set inline for each item, or with `:nth-child` selectors.",
        example: {
            html: `
<ul class="stagger-list">
  <li style="--delay: 0.1s">Item 1</li>
  <li style="--delay: 0.2s">Item 2</li>
  <li style="--delay: 0.3s">Item 3</li>
  <li style="--delay: 0.4s">Item 4</li>
</ul>`,
            css: `
.stagger-list li {
  opacity: 0;
  transform: translateY(20px);
  animation: item-in 0.5s ease-out forwards;
  animation-delay: var(--delay);
}
@keyframes item-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
            js: ""
        },
        accessibilityNotes: "Wrap animations in a `@media (prefers-reduced-motion: no-preference)` block. For users who prefer reduced motion, simply show the items without animation.",
        performanceNotes: "This animation uses `opacity` and `transform`, which are cheap to animate. Performance is excellent for a reasonable number of items (e.g., < 50). Avoid animating properties that trigger layout, like `margin` or `height`.",
        mobileNotes: "Works well on mobile. The effect can be subtle and quick to not feel sluggish.",
        fallbackStrategy: "No fallback needed; browsers that don't support custom properties or animations will just show the final state of the list items.",
        inspirations: [7, 14]
    },
    {
        name: "View Transition: Card to Detail",
        useCases: "Creating a seamless transition when a user clicks on a grid item (like a product or article) and it expands to a full detail page.",
        howItWorks: "The View Transitions API allows developers to define transitions between two different DOM states. We assign a unique `view-transition-name` to the shared element (e.g., the image) on both pages. When navigating, the browser captures a 'screenshot' of both states and smoothly animates between them.",
        example: {
            html: `
<!-- Page 1: Grid -->
<a href="/details/1" class="card">
  <img src="..." style="view-transition-name: item-image-1;" />
</a>

<!-- Page 2: Detail -->
<div class="detail-page">
  <img src="..." style="view-transition-name: item-image-1;" />
  ...
</div>`,
            css: `
/* No specific CSS needed for the basic morph, 
   but you can customize the animation */
::view-transition-old(item-image-1) {
  animation: 0.5s ease-out forwards old-image-anim;
}
::view-transition-new(item-image-1) {
  animation: 0.5s ease-out forwards new-image-anim;
}`,
            js: `
// In a Single-Page App (SPA)
function navigate(url) {
  if (!document.startViewTransition) {
    // Fallback for unsupported browsers
    updateDOM(url);
    return;
  }
  
  document.startViewTransition(() => updateDOM(url));
}`
        },
        accessibilityNotes: "The API is designed to be accessible. Ensure focus management is handled correctly after the transition, moving focus to the new content area.",
        performanceNotes: "Performance is generally very good as the browser handles the animation. However, complex DOM changes or heavy animations can still cause jank. Keep the transitioning elements simple.",
        mobileNotes: "Excellent for creating app-like experiences on mobile web.",
        fallbackStrategy: "The API has a built-in fallback. If `document.startViewTransition` is not supported, the navigation happens instantly without an animation. The provided JS snippet shows this.",
        inspirations: [2, 8]
    },
    {
        name: "Interactive Dock with Scaling Icons",
        useCases: "A macOS-style dock for navigation or toolbars where items grow on hover.",
        howItWorks: "We use the `:has()` pseudo-class to detect when the dock container has a hovered item (`:hover`). This allows us to apply a style to the *siblings* of the hovered item. The hovered item is scaled up, its immediate neighbors are scaled up slightly less, and so on. CSS custom properties and `calc()` make the effect dynamic.",
        example: {
            html: `
<div class="dock">
  <a>...</a>
  <a>...</a>
  <a>...</a>
  <a>...</a>
</div>`,
            css: `
.dock {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
}
.dock > * {
  --scale: 1;
  transition: transform 0.2s ease;
  transform: scale(var(--scale));
}
/* Hovered item */
.dock:has(> :hover) > *:hover {
  --scale: 1.5;
}
/* Immediate neighbors */
.dock:has(> :hover) > *:hover + *,
.dock:has(> :hover) > *:has(+ :hover) {
  --scale: 1.25;
}`,
            js: ``
        },
        accessibilityNotes: "Ensure the icons/links are keyboard-focusable. Replicate the hover effect with `:focus-within` on the container to provide feedback for keyboard users.",
        performanceNotes: "Uses only `transform`, so it's very performant. Avoid changing widths or margins which would cause expensive layout shifts.",
        mobileNotes: "This is a hover-based interaction, so it's not suitable for touch devices. A different pattern, like a simple tap, should be used on mobile.",
        fallbackStrategy: "Browsers without `:has()` support will simply show the icons without the scaling effect. The dock remains perfectly usable.",
        inspirations: [5, 15]
    },
];

export const executiveSummaryContent = {
    title: "Executive Summary",
    points: [
        "Modern web animation is shifting from JavaScript libraries to powerful, performant CSS features.",
        "**Scroll-Driven Animations** and **View Transitions** are the most impactful new APIs, enabling app-like experiences with minimal code.",
        "The `linear()` easing function and `:has()` selector unlock new creative possibilities in pure CSS.",
        "Performance remains paramount: animating `transform` and `opacity` is key to hitting a smooth 60fps.",
        "Accessibility is not an afterthought; `prefers-reduced-motion` must be respected in all motion design.",
        "UI/UX excellence is defined by meaningful, non-intrusive motion that guides and provides feedback.",
        "A **token-based design system** is crucial for creating consistent and maintainable user experiences.",
        "This pack provides 10-15 reusable, production-ready animation templates.",
        "It also includes a UI/UX kit, design system starter, and three distinct 'Vibe Kits' for rapid prototyping.",
        "The goal is to provide a practical, evidence-backed toolkit for building world-class web experiences."
    ]
};

export const whatsNewContent = {
    title: "What's Actually New Right Now",
    technologies: [
        {
            name: "Scroll-Driven Animations",
            description: "A new CSS feature that links animation progress directly to scroll position (`scroll-timeline`) or an element's visibility in the viewport (`view-timeline`). This allows for highly performant and declarative scroll effects without any JavaScript.",
            status: "Supported in Chrome/Edge. In progress for Firefox/Safari.",
            citations: [1, 11, 14]
        },
        {
            name: "View Transitions API",
            description: "An API for creating animated transitions between different DOM states, particularly for page navigations in Single-Page Applications. It simplifies the complex logic of 'morphing' elements from one page to another.",
            status: "Supported in Chrome/Edge. In progress for other browsers.",
            citations: [2, 8]
        },
        {
            name: "The `:has()` Selector",
            description: "Often called the 'parent selector,' `:has()` allows styling an element based on its children or subsequent siblings. This unlocks powerful, purely CSS interactions that previously required JavaScript (e.g., changing a form's style when an input is invalid).",
            status: "Supported in all modern browsers.",
            citations: [5, 21]
        },
        {
            name: "The `linear()` Easing Function",
            description: "A new CSS easing function that allows for complex, multi-stop easing curves, enabling bounces, elastic effects, and other sophisticated motion patterns without keyframes or JavaScript.",
            status: "Supported in all modern browsers.",
            citations: [4]
        },
        {
            name: "Container Queries",
            description: "The 'missing piece' of responsive design. Instead of querying the viewport size, container queries allow components to adapt their styles based on the size of their parent container, making them truly modular and reusable.",
            status: "Supported in all modern browsers.",
            citations: [12]
        },
        {
            name: "Modern Color Spaces (OKLCH)",
            description: "New color functions like `oklch()` provide access to wider color gamuts (like P3) and offer more perceptually uniform gradients and color manipulations, preventing the 'gray dead zone' seen with `rgb()` gradients.",
            status: "Supported in all modern browsers.",
            citations: [19]
        }
    ]
};

export const vibeKits: VibeKit[] = [
    {
        name: "Vibe A: Minimal Precision",
        description: "Clean, restrained, and high-end. This vibe prioritizes typography, whitespace, and subtle, purposeful motion. Inspired by high-fashion, architecture, and premium tech products.",
        palette: [
            { name: "Background", hex: "#FFFFFF" },
            { name: "Text", hex: "#111111" },
            { name: "Subtle", hex: "#EAEAEA" },
            { name: "Accent", hex: "#3B82F6" }
        ],
        typography: "Use a single, high-quality sans-serif typeface like Inter or a geometric font like Circular. Establish a strong typographic scale with clear hierarchy.",
        motion: "Motion should be swift and subtle. Use short durations (150-300ms) with gentle ease-out easing. Focus on fades and slight positional shifts. Avoid bouncy or elastic effects.",
        heroExample: {
            html: `<section class="hero-a"><h1>Precision Engineered</h1></section>`,
            css: `
.hero-a {
  padding: 8rem 2rem;
  text-align: center;
}
.hero-a h1 {
  font-size: 4rem;
  letter-spacing: -0.05em;
  opacity: 0;
  transform: translateY(20px);
  animation: fade-up 0.8s 0.2s ease-out forwards;
}
@keyframes fade-up {
  to { opacity: 1; transform: translateY(0); }
}`
        },
        featureExample: {
            html: `<div class="feature-a"><div class="card">...</div></div>`,
            css: `
.feature-a .card {
  background: #f7f7f7;
  border: 1px solid #eaeaea;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-a .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}`
        }
    },
    {
        name: "Vibe B: Cinematic Tech",
        description: "Bold, contrasty, and dramatic. This vibe uses dark themes, strong accents, and impactful motion to create a futuristic and confident feel. Inspired by sci-fi interfaces and innovative tech startups like Linear and Pitch.",
        palette: [
            { name: "Background", hex: "#0C0C0F" },
            { name: "Text", hex: "#F0F0F0" },
            { name: "Subtle", hex: "#1C1C22" },
            { name: "Accent", hex: "#22D3EE" }
        ],
        typography: "A sharp, geometric sans-serif or a mono-spaced font for code/data elements works well. Use high contrast in font weights (e.g., Light and Bold).",
        motion: "Motion is a key feature. Use slightly longer durations (400-600ms) with more expressive easing. Staggered animations, reveals, and subtle glows are common. Scroll-driven animations are heavily utilized.",
        heroExample: {
            html: `<section class="hero-b"><h1>Future, Faster.</h1></section>`,
            css: `
.hero-b {
  background: radial-gradient(circle, #1a1a1f 0%, #0C0C0F 70%);
  padding: 10rem 2rem;
}
.hero-b h1 {
  font-size: 5rem;
  text-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
  /* A more complex entrance animation would go here */
}`
        },
        featureExample: {
            html: `<div class="feature-b"><div class="card">...</div></div>`,
            css: `
.feature-b .card {
  background: linear-gradient(145deg, #1C1C22, #111115);
  border: 1px solid #2A2A32;
  position: relative;
  overflow: hidden;
}
/* A glowing border effect on hover */
.feature-b .card:hover::before {
  content: '';
  position: absolute;
  top: -1px; left: -1px; right: -1px; bottom: -1px;
  background: conic-gradient(from 180deg at 50% 50%, #22D3EE, transparent, #22D3EE);
  animation: spin 2s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }`
        }
    },
    {
        name: "Vibe C: Organic/Analog",
        description: "Warm, tactile, and subtly imperfect. This vibe avoids digital precision in favor of a more human and natural feel. Inspired by print design, natural materials, and brands with a friendly, approachable identity.",
        palette: [
            { name: "Background", hex: "#FBF8F3" },
            { name: "Text", hex: "#3D352E" },
            { name: "Subtle", hex: "#EFEBE4" },
            { name: "Accent", hex: "#E57373" }
        ],
        typography: "Use a soft sans-serif or a characterful serif typeface. Irregularities and slightly off-beat layouts can add to the charm.",
        motion: "Motion should feel natural and slightly imperfect. Use easing with anticipation and overshoot (like a `cubic-bezier` for bounce). Avoid perfectly linear or robotic movement. Subtle jitters or wiggles on hover can add personality.",
        heroExample: {
            html: `<section class="hero-c"><h1>Handcrafted Ideas</h1></section>`,
            css: `
.hero-c h1 {
  font-family: 'Playfair Display', serif; /* Example of a serif font */
  font-weight: 700;
  font-size: 4.5rem;
}`
        },
        featureExample: {
            html: `<div class="feature-c"><div class="card">...</div></div>`,
            css: `
.feature-c .card {
  background: #fff;
  border: 2px solid #3D352E;
  border-radius: 8px;
  box-shadow: 4px 4px 0 #3D352E;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.feature-c .card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #3D352E;
}`
        }
    }
];

// Add placeholder content for other sections to be implemented
export const researchMethodsContent = {
    title: "Research Methods",
    description: "The findings in this report were compiled through a multi-faceted research process conducted between January and April 2024. The methodology was designed to capture a broad yet deep understanding of the current and near-future landscape of web animation and UI/UX.",
    steps: [
        { name: "Literature Review", detail: "Systematic review of reputable industry publications, including Smashing Magazine, CSS-Tricks, web.dev, and Codrops, focusing on articles published in the last 18 months." },
        { name: "Competitive Analysis", detail: "In-depth analysis of over 50 award-winning websites (from Awwwards, FWA, etc.) to identify recurring patterns, novel interactions, and best-in-class motion design." },
        { name: "Technical Specification Review", detail: "Examination of W3C and WHATWG specifications for emerging technologies like Scroll-Driven Animations, View Transitions, and modern CSS functions to understand their capabilities and limitations." },
        { name: "Prototyping & Validation", detail: "Building functional prototypes for each identified technique to assess performance, accessibility, and cross-browser compatibility in real-world scenarios." },
    ]
};

export const uiuxExcellenceKitContent = {
    title: "UI/UX Excellence Kit",
    references: [
        { name: "Linear (linear.app)", reason: "Exceptional use of subtle, purposeful micro-interactions and keyboard-first navigation. Their motion is fast, precise, and provides immediate feedback without being distracting.", citation: 15 },
        { name: "Stripe (stripe.com)", reason: "Masters of the 'gradient and glow' aesthetic, coupled with beautiful, informative animations that explain complex products. Their landing page animations are a benchmark.", citation: 16 },
        { name: "Pitch (pitch.com)", reason: "Demonstrates how playful, character-rich animations can build a strong brand identity. Their use of color and bouncy easing creates a friendly and engaging experience.", citation: 17 },
        { name: "Framer (framer.com)", reason: "A showcase of what's possible with modern web technology. They seamlessly blend video, scroll-driven animations, and interactive elements to create a highly dynamic and immersive site.", citation: 25 },
    ],
    principles: [
        { name: "Feedback", detail: "Motion should acknowledge user input immediately. A button should change state on click, a form should indicate submission, an item should react to being dragged." },
        { name: "Hierarchy & Focus", detail: "Animation can guide the user's eye to what's most important. Staggered animations can establish a reading order, while a subtle pulse can draw attention to a primary call-to-action." },
        { name: "State & Transition", detail: "Use motion to smooth the transition between different UI states. Instead of elements abruptly appearing or disappearing, they should fade, slide, or morph, making the change feel less jarring." },
        { name: "Consistency", detail: "Motion should be part of a system. Use consistent easing curves and durations for similar actions to create a predictable and harmonious user experience. Define these in motion tokens." },
        { name: "Performance", detail: "A slow, janky animation is worse than no animation at all. Prioritize performance by animating cheap properties (`transform`, `opacity`) and ensuring all motion is smooth and responsive." },
    ]
};

export const designSystemStarterContent = {
    title: "Design System Starter",
    // This would be more complex in a real system, but this is a good start
    tokens: `
--color-background: #0C0C0F;
--color-text-primary: #F0F0F0;
--color-text-secondary: #9E9E9E;
--color-brand-accent: #22D3EE;
--color-surface-1: #1C1C22;
--color-border: #2A2A32;

--font-family-sans: 'Inter', -apple-system, sans-serif;
--type-scale-1: 0.75rem; /* 12px */
--type-scale-2: 1rem;    /* 16px */
--type-scale-3: 1.25rem; /* 20px */
--type-scale-4: 1.5rem;  /* 24px */

--spacing-1: 0.25rem; /* 4px */
--spacing-2: 0.5rem;  /* 8px */
--spacing-3: 1rem;    /* 16px */
--spacing-4: 2rem;    /* 32px */

--radius-sm: 4px;
--radius-md: 8px;

--shadow-sm: 0 1px 2px rgba(0,0,0,0.1);
--shadow-md: 0 4px 8px rgba(0,0,0,0.2);

/* Motion Tokens */
--duration-quick: 150ms;
--duration-moderate: 300ms;
--ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    `
};

export const implementationPlanContent = {
    title: "Implementation Plan",
    steps: [
        { day: "Weekend: Day 1 (Saturday)", tasks: [
            "**Morning (2-3 hours):** Choose one 'Vibe Kit' to work with. Set up a new project (e.g., using Vite) and configure the design tokens (colors, fonts, spacing) from the chosen vibe in your global CSS.",
            "**Afternoon (3-4 hours):** Implement Template #1 (Scroll-Linked Progress Bar) and Template #2 (Staggered List Entrance). Build a simple one-page layout using the Vibe Kit's hero and feature section examples to house these animations."
        ]},
        { day: "Weekend: Day 2 (Sunday)", tasks: [
            "**Morning (3-4 hours):** Tackle a more complex template. Choose either Template #3 (View Transitions) if you're working in an SPA, or Template #4 (Interactive Dock) for a desktop-focused component. This will involve more JavaScript or advanced CSS.",
            "**Afternoon (2-3 hours):** Refactor and Review. Clean up your code, add accessibility checks (e.g., test keyboard navigation), and test responsiveness. Add a `@media (prefers-reduced-motion: no-preference)` block around your CSS animations as a final polish."
        ]}
    ]
};

export const riskRegisterContent = {
    title: "Risk Register",
    risks: [
        { risk: "Performance Bottlenecks", mitigation: "Prioritize animating only `transform` and `opacity`. Use browser dev tools (Performance tab) to profile animations and identify jank. Defer or simplify animations on low-end devices if necessary." },
        { risk: "Accessibility Issues", mitigation: "Always respect `prefers-reduced-motion`. Ensure all interactive elements are keyboard accessible. Avoid animations that flash or strobe. Test with screen readers." },
        { risk: "Browser Incompatibility", mitigation: "Use `@supports` in CSS to check for feature support. Provide sensible fallbacks for newer APIs like View Transitions and Scroll-Timeline. For example, a simple fade can replace a complex morph.", citation: 9 },
        { risk: "Maintainability", mitigation: "Use a token-based system for motion (durations, easing) to ensure consistency. Keep animation logic encapsulated within components. Avoid complex, hard-to-debug animation chains." },
        { risk: "Over-animation", mitigation: "Just because you can, doesn't mean you should. Ensure every animation serves a purpose (guiding focus, providing feedback, telling a story). When in doubt, make it faster and more subtle." }
    ]
};
