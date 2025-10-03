# 🌼 DaisyUI React Component Library

A React UI component library built with **DaisyUI** and **TailwindCSS**. This library supports nearly all DaisyUI components, plus some special components like **ModelList** (an advanced data table with filtering, sorting, inline editing, and mass actions).

[![npm package](https://img.shields.io/npm/v/@redshoes/daisy-ui-react.svg)](https://www.npmjs.com/package/@redshoes/daisy-ui-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Chromatic](https://img.shields.io/badge/Chromatic-Visual%20Testing-orange.svg)](https://68e02aa9c235ac40cd3fe573-awnyozjsfn.chromatic.com)

## ⚠️ Important Notice

**For production use, we recommend using [daisyui/react-daisyui](https://github.com/daisyui/react-daisyui)** - a proven, well-maintained React component library for DaisyUI.

This library is maintained for personal use and may not be production-ready. Use at your own discretion.


## 🚀 Quick Start

### Installation

```bash
npm install @redshoes/daisy-ui-react
# or
yarn add @redshoes/daisy-ui-react
# or
pnpm add @redshoes/daisy-ui-react
```

### Prerequisites

This library requires **TailwindCSS 4+** and **DaisyUI** in your project:

```bash
npm install tailwindcss@latest daisyui@latest
```

### TailwindCSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@redshoes/daisy-ui-react/dist/**/*.{js,mjs}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: true, // Enable all themes
    // Or specify themes: ['light', 'dark', 'cupcake', ...]
  },
};
```

### Basic Usage

```tsx
import React from 'react';
import { Button, Card, Badge } from '@redshoes/daisy-ui-react';
import { IconHeart } from '@tabler/icons-react';

function App() {
  return (
    <Card className="w-96">
      <Card.Body>
        <Card.Title>Welcome to DaisyUI React!</Card.Title>
        <p>Build beautiful UIs with ease.</p>
        <Badge color="primary">New</Badge>
        <Card.Actions>
          <Button
            color="primary"
            size="lg"
            icon={IconHeart}
            onClick={() => console.log('Clicked!')}
          >
            Get Started
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
```

## ⭐ Featured Components

#### **ModelList** - Advanced Data Table
Our flagship component featuring:
- ✅ Sorting and filtering (text, select, date)
- ✅ Inline editing with validation
- ✅ Mass actions (bulk operations)
- ✅ Custom row actions
- ✅ Drag-and-drop row ordering
- ✅ Custom cell rendering
- ✅ Pagination support
- ✅ Full TypeScript generics

```tsx
import { ModelList } from '@redshoes/daisy-ui-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

<ModelList<User>
  title="Users Management"
  items={usersData}
  columns={[
    { key: 'name', label: 'Name', sortable: true, filterable: true },
    { key: 'email', label: 'Email', sortable: true, editableInline: true },
    { key: 'role', label: 'Role', filterType: 'select' }
  ]}
  massActions={[
    { name: 'delete', label: 'Delete Selected' }
  ]}
  editRoute={(id) => `/users/${id}/edit`}
  deleteRoute={(id) => `/users/${id}`}
/>
```

## 🎨 Theme System

Full support for all **35+ DaisyUI themes** with real-time switching:

```tsx
import { ThemeController } from '@redshoes/daisy-ui-react';

// Simple theme toggle
<ThemeController />

// Or manually control theme
<div data-theme="synthwave">
  <Button color="primary">Synthwave Button</Button>
</div>

<div data-theme="corporate">
  <Button color="primary">Corporate Button</Button>
</div>
```

**Available themes**: light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, and more!

## 🔧 API Examples

### Button Component

```tsx
import { Button } from '@redshoes/daisy-ui-react';
import { IconDownload } from '@tabler/icons-react';

// Colors and variants
<Button color="primary">Primary</Button>
<Button color="secondary" style="outline">Outline</Button>
<Button color="accent" style="ghost">Ghost</Button>

// Sizes and modifiers
<Button size="xs">Extra Small</Button>
<Button size="lg" modifier="wide">Large Wide</Button>
<Button size="icon" icon={IconDownload} />

// States
<Button processing={loading}>
  {loading ? 'Processing...' : 'Submit'}
</Button>

<Button success={isSuccess} fail={hasError}>
  Save Changes
</Button>
```

### Card Component

```tsx
import { Card, Badge } from '@redshoes/daisy-ui-react';

<Card className="w-96" imageSrc="/product.jpg" imageAlt="Product">
  <Card.Body>
    <Card.Title>Product Name</Card.Title>
    <p>Description goes here...</p>
    <div className="flex gap-2">
      <Badge color="primary">New</Badge>
      <Badge color="success">In Stock</Badge>
    </div>
    <Card.Actions>
      <Button color="primary">Buy Now</Button>
    </Card.Actions>
  </Card.Body>
</Card>
```

### Form Components

```tsx
import { Input, Select, Checkbox, Toggle } from '@redshoes/daisy-ui-react';

<Input
  type="email"
  placeholder="Enter email"
  label="Email Address"
  helper="We'll never share your email"
  error={errors.email}
/>

<Select
  label="Country"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
/>

<Checkbox
  label="Accept terms and conditions"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
/>

<Toggle
  label="Enable notifications"
  checked={notifications}
  onChange={(e) => setNotifications(e.target.checked)}
/>
```

### Modal Component

```tsx
import { Modal, Button } from '@redshoes/daisy-ui-react';

const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>Open Modal</Button>

  <Modal open={open} onClose={() => setOpen(false)}>
    <Modal.Header>Confirm Action</Modal.Header>
    <Modal.Body>
      <p>Are you sure you want to continue?</p>
    </Modal.Body>
    <Modal.Actions>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button color="primary" onClick={handleConfirm}>Confirm</Button>
    </Modal.Actions>
  </Modal>
</>
```

## 📚 Documentation

- **[Live Storybook](https://erimeilis.github.io/daisy-ui-react)** - Interactive component documentation
- **[GitHub Repository](https://github.com/erimeilis/daisy-ui-react)** - Source code and examples
- **[DaisyUI Docs](https://daisyui.com/)** - Original DaisyUI reference
- **[TailwindCSS Docs](https://tailwindcss.com/)** - TailwindCSS utilities

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/erimeilis/daisy-ui-react.git
cd daisy-ui-react

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run type checking
npm run type-check

# Run linting
npm run lint

# Build library
npm run build

# Run tests
npm run test
```

### Project Structure

```
daisy-ui-react/
├── src/
│   ├── components/
│   │   ├── form/          # Form components
│   │   ├── data-display/  # Display components
│   │   ├── navigation/    # Navigation components
│   │   ├── feedback/      # Feedback components
│   │   ├── layout/        # Layout components
│   │   └── ui/            # Core UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   ├── types/             # TypeScript type definitions
│   └── stories/           # Storybook stories
├── tests/                 # Test files
└── dist/                  # Built package
```

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- **[DaisyUI](https://daisyui.com/)** - Beautiful semantic component classes by Pouya Saadeghi
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework by Adam Wathan
- **[Radix UI](https://radix-ui.com/)** - Unstyled, accessible UI primitives
- **[@tabler/icons-react](https://tabler-icons.io/)** - 4000+ beautiful SVG icons
- **[Headless UI](https://headlessui.com/)** - Unstyled, accessible components

## 🔗 Links

- **NPM Package**: [@redshoes/daisy-ui-react](https://www.npmjs.com/package/@redshoes/daisy-ui-react)
- **GitHub**: [erimeilis/daisy-ui-react](https://github.com/erimeilis/daisy-ui-react)
- **Issues**: [Report a bug](https://github.com/erimeilis/daisy-ui-react/issues)
- **Storybook**: [Component Documentation](https://erimeilis.github.io/daisy-ui-react)
- **Chromatic**: [Visual Testing](https://68e02aa9c235ac40cd3fe573-awnyozjsfn.chromatic.com)

---

**Built with ❤️ by Eri Meilis**

_Making beautiful, accessible UIs easier - one component at a time._
