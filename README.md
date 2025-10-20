# Next.js Template

A Next.js-based web application with strict code quality standards and modern styling.

## 🛠️ Tech Stack

- **Next.js 15** - The React Framework for the Web (with App Router)
- **React 19** - UI component library
- **TypeScript** - Type-safe JavaScript
- **CSS/SCSS** - Pure CSS and SCSS for styling (no utility frameworks)

## 🚀 Project Structure

Inside of your Next.js project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.ico
│   └── (other static assets)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── (your components)
│   └── styles/
│       ├── globals.css
│       ├── variables.css
│       └── utilities.scss
└── package.json
```

To learn more about the folder structure of a Next.js project, refer to [the Next.js documentation on project structure](https://nextjs.org/docs/getting-started/project-structure).

## 🎨 Styling Design System

This project uses **pure CSS and SCSS** for styling. We do NOT use utility-first CSS frameworks like Tailwind CSS or similar.

### Styling Guidelines

- **CSS/SCSS Only**: All styles should be written in CSS or SCSS files
- **Use `rem` Instead of `px`**:
    - The base font size is set to `10px` on the `html` element for easier calculations
    - This means `1rem = 10px`, making conversions simple
    - Always use `rem` units for sizes, spacing, and typography
    - Example: `16px` → `1.6rem`, `20px` → `2rem`, `32px` → `3.2rem`
    - Benefits: Better accessibility, easier responsive design, consistent scaling
- **CSS Modules**: Use Next.js CSS Modules for component-specific styles (`.module.css`)
- **No Utility Frameworks**: Avoid Tailwind, Bootstrap, or similar utility-first frameworks
- **Custom Properties**: Use CSS custom properties (variables) for theming and consistency
- **Semantic Class Names**: Use meaningful, semantic class names that describe content, not appearance
- **Mobile-First**: Write mobile-first responsive styles using min-width media queries
- **Modern CSS**: Leverage modern CSS features like Grid, Flexbox, Container Queries, and CSS Nesting

### File Organization

```
src/
├── styles/
│   ├── globals.css      # Global styles and resets
│   ├── variables.css    # CSS custom properties
│   └── utilities.scss   # Common utility styles (if needed)
├── app/
│   ├── layout.tsx       # Root layout with font optimization
│   ├── page.tsx         # Home page
│   └── page.module.css  # Page-specific styles
└── components/
    ├── Button.tsx
    └── Button.module.css
```

## 🔍 Code Quality & Linting

This project enforces strict code quality standards using ESLint and Prettier.

### ESLint Rules

**TypeScript Rules:**

- `@typescript-eslint/no-unused-vars`: Error on unused variables (except those prefixed with `_`)
- `@typescript-eslint/no-explicit-any`: Warn when using `any` type
- `@typescript-eslint/no-non-null-assertion`: Warn on non-null assertions

**General Rules:**

- `no-console`: Warn on console usage (except `console.warn` and `console.error`)
- `no-debugger`: Error on debugger statements
- `prefer-const`: Enforce `const` for variables that are never reassigned
- `no-var`: Disallow `var`, use `let` or `const`
- `eqeqeq`: Require strict equality (`===` and `!==`)
- `curly`: Require curly braces for all control statements
- `brace-style`: Enforce one true brace style

**Accessibility Rules (jsx-a11y):**

- `jsx-a11y/alt-text`: Require alt text on images
- `jsx-a11y/anchor-is-valid`: Ensure anchors are valid
- `jsx-a11y/aria-props`: Validate ARIA props
- `jsx-a11y/aria-role`: Validate ARIA roles
- `jsx-a11y/role-has-required-aria-props`: Ensure roles have required ARIA props

**React Rules:**

- `react/react-in-jsx-scope`: Off (not needed in React 17+)
- `react/prop-types`: Off (using TypeScript for prop validation)
- `react/jsx-uses-react`: Error on unused React imports
- `react/jsx-uses-vars`: Error on unused variables in JSX
- `react/jsx-key`: Require keys in lists
- `react/no-array-index-key`: Warn against using array index as key
- `react/jsx-no-duplicate-props`: Error on duplicate props
- `react/no-children-prop`: Error on children as a prop
- `react/no-danger-with-children`: Error on dangerous props with children
- `react/no-deprecated`: Warn on deprecated React APIs
- `react/no-direct-mutation-state`: Error on direct state mutation

**React Hooks Rules:**

- `react-hooks/rules-of-hooks`: Enforce hooks rules
- `react-hooks/exhaustive-deps`: Warn on missing dependencies

**Next.js-Specific Rules:**

- `@next/next/no-html-link-for-pages`: Use Next.js `Link` component instead of `<a>` tags
- `@next/next/no-img-element`: Use Next.js `Image` component for optimized images
- `@next/next/no-head-element`: Use Next.js `Head` from `next/head` or metadata API
- `@next/next/google-font-display`: Ensure Google Fonts have font-display
- `@next/next/no-page-custom-font`: Prevent custom fonts in pages

### Prettier Configuration

- **Semi**: Semicolons required
- **Single Quote**: Use single quotes for strings
- **Tab Width**: 4 spaces
- **Trailing Comma**: All (ES5+ compatible)
- **Print Width**: 100 characters
- **Arrow Parens**: Avoid parentheses when possible
- **End of Line**: LF (Unix-style)

### EditorConfig

An `.editorconfig` file is included to ensure consistent coding styles across different editors and IDEs:

- **Charset**: UTF-8
- **End of Line**: LF (Unix-style)
- **Indent Style**: Spaces
- **Indent Size**: 4 spaces for JS/TS/CSS/SCSS/JSON files, 2 spaces for YAML
- **Insert Final Newline**: Enabled
- **Trim Trailing Whitespace**: Enabled (except in Markdown files)

Most modern editors automatically detect and apply EditorConfig settings. If your editor doesn't support it natively, you may need to install a plugin.

### Git Hooks

**Pre-push Hook**: Automatically runs before every `git push`

- Runs `pnpm run lint` to check for linting errors
- Runs `pnpm run format:check` to verify code formatting

This ensures that only properly formatted and linted code is pushed to the repository.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `pnpm install`      | Installs dependencies                        |
| `pnpm dev`          | Starts local dev server at `localhost:3000`  |
| `pnpm build`        | Build your production site to `./.next/`     |
| `pnpm start`        | Preview your build locally, before deploying |
| `pnpm lint`         | Check code for linting errors                |
| `pnpm lint:fix`     | Fix auto-fixable linting errors              |
| `pnpm format`       | Format all code with Prettier                |
| `pnpm format:check` | Check if code is properly formatted          |

## 👀 Want to learn more?

Feel free to check [the Next.js documentation](https://nextjs.org/docs) or join the [Next.js Discord server](https://discord.gg/nextjs).
