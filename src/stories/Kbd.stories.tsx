import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Kbd,
  KeyCombination,
  ArrowKeys,
  ModifierKeys,
  KeyboardLayout,
  QwertyKeyboard,
  InlineKbd,
} from '../components/ui/kbd';
import { Button } from '../components/form/button';

const meta: Meta<typeof Kbd> = {
  title: 'UI/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Kbd component for displaying keyboard keys and shortcuts with various sizes and combinations.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the keyboard key',
    },
    children: {
      control: 'text',
      description: 'The key content to display',
    },
  },
  args: {
    size: 'md',
    children: 'Ctrl',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic kbd element
export const Default: Story = {
  args: {
    children: 'Ctrl',
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Kbd size="xs">XS</Kbd>
      <Kbd size="sm">SM</Kbd>
      <Kbd size="md">MD</Kbd>
      <Kbd size="lg">LG</Kbd>
      <Kbd size="xl">XL</Kbd>
    </div>
  ),
};

// Single keys
export const SingleKeys: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-2 w-fit">
      <Kbd>A</Kbd>
      <Kbd>S</Kbd>
      <Kbd>D</Kbd>
      <Kbd>F</Kbd>
      <Kbd>G</Kbd>
      <Kbd>H</Kbd>
      <Kbd>1</Kbd>
      <Kbd>2</Kbd>
      <Kbd>3</Kbd>
      <Kbd>4</Kbd>
      <Kbd>5</Kbd>
      <Kbd>6</Kbd>
      <Kbd>F1</Kbd>
      <Kbd>F2</Kbd>
      <Kbd>F3</Kbd>
      <Kbd>F4</Kbd>
      <Kbd>F5</Kbd>
      <Kbd>F6</Kbd>
    </div>
  ),
};

// Key combinations
export const KeyCombinations: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-semibold">Common Shortcuts:</h4>
        <div className="space-y-2">
          <KeyCombination keys={['Ctrl', 'C']} />
          <KeyCombination keys={['Ctrl', 'V']} />
          <KeyCombination keys={['Ctrl', 'Z']} />
          <KeyCombination keys={['Ctrl', 'Shift', 'Z']} />
          <KeyCombination keys={['Alt', 'Tab']} />
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold">Mac Shortcuts:</h4>
        <div className="space-y-2">
          <KeyCombination keys={['⌘', 'C']} />
          <KeyCombination keys={['⌘', 'V']} />
          <KeyCombination keys={['⌘', 'Z']} />
          <KeyCombination keys={['⌘', '⇧', 'Z']} />
          <KeyCombination keys={['⌘', 'Space']} />
        </div>
      </div>
    </div>
  ),
};

// Arrow keys
export const ArrowKeysExample: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-4">Arrow Keys - Different Sizes:</h4>
        <div className="space-y-4">
          <div>
            <p className="text-sm mb-2">Small:</p>
            <ArrowKeys size="sm" />
          </div>
          <div>
            <p className="text-sm mb-2">Medium:</p>
            <ArrowKeys size="md" />
          </div>
          <div>
            <p className="text-sm mb-2">Large:</p>
            <ArrowKeys size="lg" />
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">With Labels (hover to see):</h4>
        <ArrowKeys showLabels />
      </div>
    </div>
  ),
};

// Modifier keys
export const ModifierKeysExample: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-4">Mac Modifier Keys:</h4>
        <ModifierKeys />
      </div>
      <div>
        <h4 className="font-semibold mb-4">Windows Modifier Keys:</h4>
        <ModifierKeys
          keys={['Ctrl', 'Alt', 'Shift', 'Win']}
          labels={['Control', 'Alt', 'Shift', 'Windows']}
        />
      </div>
      <div>
        <h4 className="font-semibold mb-4">Large Size:</h4>
        <ModifierKeys size="lg" />
      </div>
    </div>
  ),
};

// Custom keyboard layouts
export const CustomLayouts: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-semibold mb-4">Number Row:</h4>
        <KeyboardLayout
          rows={[['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']]}
        />
      </div>
      <div>
        <h4 className="font-semibold mb-4">Function Keys:</h4>
        <KeyboardLayout
          rows={[['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12']]}
          size="sm"
        />
      </div>
      <div>
        <h4 className="font-semibold mb-4">Gaming Keys (WASD):</h4>
        <KeyboardLayout
          rows={[
            ['', 'W', ''],
            ['A', 'S', 'D'],
          ]}
          size="lg"
        />
      </div>
    </div>
  ),
};

// QWERTY keyboard
export const QwertyLayout: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-4">QWERTY Keyboard Layout:</h4>
        <QwertyKeyboard />
      </div>
      <div>
        <h4 className="font-semibold mb-4">Small QWERTY:</h4>
        <QwertyKeyboard size="sm" />
      </div>
    </div>
  ),
};

// Interactive keyboard
export const InteractiveKeyboard: Story = {
  render: function Component() {
    const [pressedKeys, setPressedKeys] = React.useState<string[]>([]);
    const [lastKey, setLastKey] = React.useState<string>('');

    const handleKeyClick = (key: string) => {
      setLastKey(key);
      setPressedKeys(prev => {
        const newKeys = [...prev, key];
        return newKeys.slice(-10); // Keep only last 10 keys
      });
    };

    const clearKeys = () => {
      setPressedKeys([]);
      setLastKey('');
    };

    return (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-4">Click on Keys:</h4>
          <QwertyKeyboard onKeyClick={handleKeyClick} />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <strong>Last Key:</strong> {lastKey && <Kbd size="sm">{lastKey}</Kbd>}
          </div>
          <Button size="sm" onClick={clearKeys}>Clear</Button>
        </div>
        <div>
          <strong>Pressed Keys:</strong>
          <div className="flex flex-wrap gap-1 mt-2">
            {pressedKeys.map((key, index) => (
              <Kbd key={index} size="xs">{key}</Kbd>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Inline keyboard elements
export const InlineUsage: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <div>
        <h4 className="font-semibold mb-4">Inline Kbd in Text:</h4>
        <div className="space-y-3 text-sm">
          <p>
            To copy text, press <InlineKbd>Ctrl</InlineKbd> + <InlineKbd>C</InlineKbd> on Windows
            or <InlineKbd>⌘</InlineKbd> + <InlineKbd>C</InlineKbd> on Mac.
          </p>
          <p>
            Use <InlineKbd>Tab</InlineKbd> to navigate between form fields and
            <InlineKbd>Shift</InlineKbd> + <InlineKbd>Tab</InlineKbd> to go backwards.
          </p>
          <p>
            Press <InlineKbd>Esc</InlineKbd> to close dialogs or cancel operations.
          </p>
          <p>
            The <InlineKbd>F5</InlineKbd> key refreshes the page in most browsers.
          </p>
        </div>
      </div>
    </div>
  ),
};

// Help documentation style
export const HelpDocumentation: Story = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Keyboard Shortcuts</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-3">Text Editing:</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Copy</span>
                <KeyCombination keys={['Ctrl', 'C']} size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span>Paste</span>
                <KeyCombination keys={['Ctrl', 'V']} size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span>Undo</span>
                <KeyCombination keys={['Ctrl', 'Z']} size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span>Redo</span>
                <KeyCombination keys={['Ctrl', 'Shift', 'Z']} size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span>Select All</span>
                <KeyCombination keys={['Ctrl', 'A']} size="sm" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Navigation:</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Move cursor</span>
                <ArrowKeys size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span>Jump to word</span>
                <KeyCombination keys={['Ctrl', '←']} size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span>Go to beginning</span>
                <KeyCombination keys={['Ctrl', 'Home']} size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span>Go to end</span>
                <KeyCombination keys={['Ctrl', 'End']} size="sm" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Application:</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>New document</span>
                <KeyCombination keys={['Ctrl', 'N']} size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span>Open file</span>
                <KeyCombination keys={['Ctrl', 'O']} size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span>Save</span>
                <KeyCombination keys={['Ctrl', 'S']} size="sm" />
              </div>
              <div className="flex justify-between items-center">
                <span>Find</span>
                <KeyCombination keys={['Ctrl', 'F']} size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Game controls
export const GameControls: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-4">Game Controls:</h4>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="font-medium mb-3">Movement:</h5>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Move</span>
                <KeyboardLayout
                  rows={[
                    ['', 'W', ''],
                    ['A', 'S', 'D'],
                  ]}
                  size="sm"
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Jump</span>
                <Kbd size="sm">Space</Kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>Run</span>
                <Kbd size="sm">Shift</Kbd>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-medium mb-3">Actions:</h5>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Attack</span>
                <Kbd size="sm">LMB</Kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>Block</span>
                <Kbd size="sm">RMB</Kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>Use Item</span>
                <Kbd size="sm">E</Kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>Inventory</span>
                <Kbd size="sm">I</Kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Hotkey reference
export const HotkeyReference: Story = {
  render: () => (
    <div className="max-w-3xl">
      <h3 className="text-lg font-semibold mb-6">Application Hotkeys</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3 text-primary">File Operations</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>New File</span>
                <KeyCombination keys={['Ctrl', 'N']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Open File</span>
                <KeyCombination keys={['Ctrl', 'O']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Save</span>
                <KeyCombination keys={['Ctrl', 'S']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Save As</span>
                <KeyCombination keys={['Ctrl', 'Shift', 'S']} size="xs" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-secondary">View</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Zoom In</span>
                <KeyCombination keys={['Ctrl', '+']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Zoom Out</span>
                <KeyCombination keys={['Ctrl', '-']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Reset Zoom</span>
                <KeyCombination keys={['Ctrl', '0']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Full Screen</span>
                <Kbd size="xs">F11</Kbd>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3 text-accent">Edit</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Find</span>
                <KeyCombination keys={['Ctrl', 'F']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Replace</span>
                <KeyCombination keys={['Ctrl', 'H']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Go to Line</span>
                <KeyCombination keys={['Ctrl', 'G']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Comment</span>
                <KeyCombination keys={['Ctrl', '/']} size="xs" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-info">Window</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>New Tab</span>
                <KeyCombination keys={['Ctrl', 'T']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Close Tab</span>
                <KeyCombination keys={['Ctrl', 'W']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Next Tab</span>
                <KeyCombination keys={['Ctrl', 'Tab']} size="xs" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-base-200 rounded">
                <span>Previous Tab</span>
                <KeyCombination keys={['Ctrl', 'Shift', 'Tab']} size="xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Custom separators for key combinations
export const CustomSeparators: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold mb-4">Different Separators:</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="w-24">Default (+):</span>
            <KeyCombination keys={['Ctrl', 'Shift', 'N']} />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24">Arrow (→):</span>
            <KeyCombination keys={['Ctrl', 'Shift', 'N']} separator="→" />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24">Pipe (|):</span>
            <KeyCombination keys={['Ctrl', 'Shift', 'N']} separator="|" />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24">Dash (-):</span>
            <KeyCombination keys={['Ctrl', 'Shift', 'N']} separator="-" />
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24">Space ( ):</span>
            <KeyCombination keys={['Ctrl', 'Shift', 'N']} separator=" " />
          </div>
        </div>
      </div>
    </div>
  ),
};