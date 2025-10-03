import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pagination, SimplePagination } from '../components/navigation/pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Pagination component for navigating through multiple pages of content using DaisyUI join and button classes.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the pagination buttons',
    },
    currentPage: {
      control: 'number',
      description: 'Current active page',
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first and last page buttons',
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show previous and next buttons',
    },
    maxVisiblePages: {
      control: 'number',
      description: 'Maximum number of page buttons to show',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all pagination controls',
    },
  },
  args: {
    size: 'md',
    currentPage: 1,
    totalPages: 10,
    showFirstLast: true,
    showPrevNext: true,
    maxVisiblePages: 5,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic pagination
export const BasicPagination: Story = {
  render: function Component() {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 10;

    return (
      <div className="space-y-4">
        <p className="text-center text-sm">Page {currentPage} of {totalPages}</p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

// Different sizes
export const Sizes: Story = {
  render: function Component() {
    const [currentPage, setCurrentPage] = React.useState(3);
    const totalPages = 5;

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="font-semibold mb-2">Extra Small (xs)</h3>
          <Pagination
            size="xs"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        <div className="text-center">
          <h3 className="font-semibold mb-2">Small (sm)</h3>
          <Pagination
            size="sm"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        <div className="text-center">
          <h3 className="font-semibold mb-2">Medium (md) - Default</h3>
          <Pagination
            size="md"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        <div className="text-center">
          <h3 className="font-semibold mb-2">Large (lg)</h3>
          <Pagination
            size="lg"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    );
  },
};

// Many pages with ellipsis
export const ManyPages: Story = {
  render: function Component() {
    const [currentPage, setCurrentPage] = React.useState(15);
    const totalPages = 100;

    return (
      <div className="space-y-4">
        <p className="text-center text-sm">Page {currentPage} of {totalPages}</p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          maxVisiblePages={5}
        />
      </div>
    );
  },
};

// Few pages (no ellipsis needed)
export const FewPages: Story = {
  render: function Component() {
    const [currentPage, setCurrentPage] = React.useState(2);
    const totalPages = 4;

    return (
      <div className="space-y-4">
        <p className="text-center text-sm">Page {currentPage} of {totalPages}</p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

// Without first/last buttons
export const WithoutFirstLast: Story = {
  render: function Component() {
    const [currentPage, setCurrentPage] = React.useState(5);
    const totalPages = 20;

    return (
      <div className="space-y-4">
        <p className="text-center text-sm">Page {currentPage} of {totalPages}</p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          showFirstLast={false}
          maxVisiblePages={7}
        />
      </div>
    );
  },
};

// Without prev/next buttons
export const WithoutPrevNext: Story = {
  render: function Component() {
    const [currentPage, setCurrentPage] = React.useState(3);
    const totalPages = 8;

    return (
      <div className="space-y-4">
        <p className="text-center text-sm">Page {currentPage} of {totalPages}</p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          showPrevNext={false}
        />
      </div>
    );
  },
};

// Disabled state
export const Disabled: Story = {
  render: function Component() {
    const [currentPage] = React.useState(3);
    const totalPages = 10;

    return (
      <div className="space-y-4">
        <p className="text-center text-sm opacity-50">Page {currentPage} of {totalPages} (Disabled)</p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={() => {}}
          disabled={true}
        />
      </div>
    );
  },
};

// Simple pagination (prev/next only)
export const SimplePaginationStory: Story = {
  render: function Component() {
    const [currentPage, setCurrentPage] = React.useState(5);
    const totalPages = 20;

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="font-semibold mb-2">Simple Pagination (with page info)</h3>
          <SimplePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showPageInfo={true}
          />
        </div>

        <div className="text-center">
          <h3 className="font-semibold mb-2">Simple Pagination (without page info)</h3>
          <SimplePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showPageInfo={false}
          />
        </div>
      </div>
    );
  },
};

// Interactive example with data
export const WithDataExample: Story = {
  render: function Component() {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 8;
    const itemsPerPage = 5;

    // Mock data
    const allItems = Array.from({ length: totalPages * itemsPerPage }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`,
    }));

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="w-full max-w-md space-y-4">
        <h3 className="font-semibold text-center">Data Table with Pagination</h3>

        <div className="bg-base-100 rounded-lg border overflow-hidden">
          <div className="bg-base-200 px-4 py-2 font-semibold">Items</div>
          {currentItems.map((item) => (
            <div key={item.id} className="px-4 py-2 border-t border-base-300">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm opacity-70">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Pagination
            size="sm"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            maxVisiblePages={3}
          />
        </div>

        <p className="text-center text-xs opacity-70">
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, allItems.length)} of {allItems.length} items
        </p>
      </div>
    );
  },
};

// Edge cases
export const EdgeCases: Story = {
  render: function Component() {
    const [singlePage] = React.useState(1);
    const [firstPage, setFirstPage] = React.useState(1);
    const [lastPage, setLastPage] = React.useState(5);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="font-semibold mb-2">Single Page (1 of 1)</h3>
          <Pagination
            currentPage={singlePage}
            totalPages={1}
            onPageChange={() => {}}
          />
        </div>

        <div className="text-center">
          <h3 className="font-semibold mb-2">First Page (1 of 5)</h3>
          <Pagination
            currentPage={firstPage}
            totalPages={5}
            onPageChange={setFirstPage}
          />
        </div>

        <div className="text-center">
          <h3 className="font-semibold mb-2">Last Page (5 of 5)</h3>
          <Pagination
            currentPage={lastPage}
            totalPages={5}
            onPageChange={setLastPage}
          />
        </div>
      </div>
    );
  },
};