import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ModelList } from '../components/data-display/model/model-list';
import type { IModel } from '../types/models';
import {
  IconEye,
  IconDownload,
  IconStar,
  IconUser,
  IconMail,
  IconCalendar,
} from '@tabler/icons-react';

// Sample data interface extending IModel
interface User extends IModel {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  created_at: string;
  position?: number;
}

// Mock data
const mockUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', created_at: '2024-01-15', position: 1 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active', created_at: '2024-02-20', position: 2 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive', created_at: '2024-03-10', position: 3 },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'pending', created_at: '2024-04-05', position: 4 },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Admin', status: 'active', created_at: '2024-05-12', position: 5 },
];

const meta: Meta<typeof ModelList> = {
  title: 'Advanced/ModelList',
  component: ModelList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Advanced data table component with sorting, filtering, inline editing, mass actions, and drag-and-drop ordering. The star component of the library used in multiple projects.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic table with sorting and pagination
export const BasicTable: Story = {
  render: function Component() {
    const [items, setItems] = useState({
      data: mockUsers,
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: mockUsers.length,
    });

    return (
      <div className="w-full max-w-6xl">
        <ModelList
          title="Users Management"
          items={items}
          setItems={setItems}
          createRoute="/users/create"
          editRoute={(id) => `/users/${id}/edit`}
          deleteRoute={(id) => `/users/${id}`}
          massActionRoute="/users/mass-action"
          columns={[
            { key: 'name', label: 'Name', sortable: true },
            { key: 'email', label: 'Email', sortable: true },
            { key: 'role', label: 'Role', sortable: true },
            { key: 'status', label: 'Status', sortable: true },
            { key: 'created_at', label: 'Created', sortable: true },
          ]}
        />
      </div>
    );
  },
};

// With filtering
export const WithFiltering: Story = {
  render: function Component() {
    const [items, setItems] = useState({
      data: mockUsers,
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: mockUsers.length,
    });

    return (
      <div className="w-full max-w-6xl">
        <ModelList
          title="Users with Filters"
          items={items}
          setItems={setItems}
          createRoute="/users/create"
          editRoute={(id) => `/users/${id}/edit`}
          deleteRoute={(id) => `/users/${id}`}
          massActionRoute="/users/mass-action"
          columns={[
            {
              key: 'name',
              label: 'Name',
              sortable: true,
              filterable: true,
              filterType: 'text'
            },
            {
              key: 'email',
              label: 'Email',
              sortable: true,
              filterable: true,
              filterType: 'text'
            },
            {
              key: 'role',
              label: 'Role',
              sortable: true,
              filterable: true,
              filterType: 'select',
              filterOptions: [
                { value: 'Admin', label: 'Admin' },
                { value: 'Editor', label: 'Editor' },
                { value: 'Viewer', label: 'Viewer' },
              ]
            },
            {
              key: 'status',
              label: 'Status',
              sortable: true,
              filterable: true,
              filterType: 'select',
              filterOptions: [
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
                { value: 'pending', label: 'Pending' },
              ]
            },
            {
              key: 'created_at',
              label: 'Created',
              sortable: true,
              filterable: true,
              filterType: 'date'
            },
          ]}
        />
      </div>
    );
  },
};

// With inline editing
export const WithInlineEditing: Story = {
  render: function Component() {
    const [items, setItems] = useState({
      data: mockUsers,
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: mockUsers.length,
    });

    return (
      <div className="w-full max-w-6xl">
        <ModelList
          title="Users - Inline Editing"
          items={items}
          setItems={setItems}
          createRoute="/users/create"
          editRoute={(id) => `/users/${id}/edit`}
          deleteRoute={(id) => `/users/${id}`}
          inlineEditRoute={(id) => `/users/${id}`}
          massActionRoute="/users/mass-action"
          columns={[
            {
              key: 'name',
              label: 'Name',
              sortable: true,
              editableInline: true,
              editType: 'text',
              editValidation: { required: true, minLength: 2 }
            },
            {
              key: 'email',
              label: 'Email',
              sortable: true,
              editableInline: true,
              editType: 'email',
              editValidation: { required: true }
            },
            {
              key: 'role',
              label: 'Role',
              sortable: true,
              editableInline: true,
              editType: 'select',
              editOptions: [
                { value: 'Admin', label: 'Admin' },
                { value: 'Editor', label: 'Editor' },
                { value: 'Viewer', label: 'Viewer' },
              ]
            },
            { key: 'status', label: 'Status', sortable: true },
            { key: 'created_at', label: 'Created', sortable: true },
          ]}
        />
      </div>
    );
  },
};

// With mass actions
export const WithMassActions: Story = {
  render: function Component() {
    const [items, setItems] = useState({
      data: mockUsers,
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: mockUsers.length,
    });

    return (
      <div className="w-full max-w-6xl">
        <ModelList
          title="Users - Mass Actions"
          items={items}
          setItems={setItems}
          createRoute="/users/create"
          editRoute={(id) => `/users/${id}/edit`}
          deleteRoute={(id) => `/users/${id}`}
          massActionRoute="/users/mass-action"
          columns={[
            { key: 'name', label: 'Name', sortable: true },
            { key: 'email', label: 'Email', sortable: true },
            { key: 'role', label: 'Role', sortable: true },
            { key: 'status', label: 'Status', sortable: true },
            { key: 'created_at', label: 'Created', sortable: true },
          ]}
          massActions={[
            {
              name: 'activate',
              label: 'Activate Selected',
              confirmMessage: 'Are you sure you want to activate the selected users?',
            },
            {
              name: 'deactivate',
              label: 'Deactivate Selected',
              confirmMessage: 'Are you sure you want to deactivate the selected users?',
            },
            {
              name: 'delete',
              label: 'Delete Selected',
              confirmMessage: 'Are you sure you want to delete the selected users? This action cannot be undone.',
            },
          ]}
        />
      </div>
    );
  },
};

// With custom row actions
export const WithCustomRowActions: Story = {
  render: function Component() {
    const [items, setItems] = useState({
      data: mockUsers,
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: mockUsers.length,
    });

    return (
      <div className="w-full max-w-6xl">
        <ModelList
          title="Users - Custom Actions"
          items={items}
          setItems={setItems}
          createRoute="/users/create"
          editRoute={(id) => `/users/${id}/edit`}
          deleteRoute={(id) => `/users/${id}`}
          massActionRoute="/users/mass-action"
          columns={[
            { key: 'name', label: 'Name', sortable: true },
            { key: 'email', label: 'Email', sortable: true },
            { key: 'role', label: 'Role', sortable: true },
            { key: 'status', label: 'Status', sortable: true },
          ]}
          rowActions={[
            {
              icon: IconEye,
              title: 'View Details',
              color: 'info',
              onClick: (item) => alert(`Viewing ${item.name}`),
            },
            {
              icon: IconDownload,
              title: 'Download Data',
              color: 'secondary',
              onClick: (item) => alert(`Downloading data for ${item.name}`),
            },
            {
              icon: IconStar,
              title: 'Mark as Featured',
              color: 'warning',
              onClick: (item) => alert(`Marked ${item.name} as featured`),
            },
          ]}
        />
      </div>
    );
  },
};

// With drag-and-drop ordering
export const WithDragAndDrop: Story = {
  render: function Component() {
    const [items, setItems] = useState({
      data: mockUsers,
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: mockUsers.length,
    });

    return (
      <div className="w-full max-w-6xl">
        <ModelList
          title="Users - Drag & Drop Ordering"
          items={items}
          setItems={setItems}
          createRoute="/users/create"
          editRoute={(id) => `/users/${id}/edit`}
          deleteRoute={(id) => `/users/${id}`}
          massActionRoute="/users/mass-action"
          columns={[
            { key: 'position', label: '#', sortable: true, className: 'w-16' },
            { key: 'name', label: 'Name', sortable: true },
            { key: 'email', label: 'Email', sortable: true },
            { key: 'role', label: 'Role', sortable: true },
            { key: 'status', label: 'Status', sortable: true },
          ]}
          orderingConfig={{
            enabled: true,
            swapEndpoint: '/users/swap',
            positionField: 'position',
            idField: 'id',
            recountEndpoint: '/users/recount',
            recountDelay: 2000,
          }}
        />
      </div>
    );
  },
};

// With custom cell rendering
export const WithCustomRendering: Story = {
  render: function Component() {
    const [items, setItems] = useState({
      data: mockUsers,
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: mockUsers.length,
    });

    return (
      <div className="w-full max-w-6xl">
        <ModelList
          title="Users - Custom Rendering"
          items={items}
          setItems={setItems}
          createRoute="/users/create"
          editRoute={(id) => `/users/${id}/edit`}
          deleteRoute={(id) => `/users/${id}`}
          massActionRoute="/users/mass-action"
          columns={[
            {
              key: 'name',
              label: 'Name',
              sortable: true,
              render: (item) => (
                <div className="flex items-center gap-2">
                  <IconUser className="w-4 h-4" />
                  <span className="font-semibold">{item.name}</span>
                </div>
              )
            },
            {
              key: 'email',
              label: 'Email',
              sortable: true,
              render: (item) => (
                <div className="flex items-center gap-2">
                  <IconMail className="w-4 h-4 text-gray-400" />
                  <a href={`mailto:${item.email}`} className="text-primary hover:underline">
                    {item.email}
                  </a>
                </div>
              )
            },
            {
              key: 'role',
              label: 'Role',
              sortable: true,
              render: (item) => (
                <span className={`badge ${
                  item.role === 'Admin' ? 'badge-error' :
                  item.role === 'Editor' ? 'badge-warning' :
                  'badge-info'
                }`}>
                  {item.role}
                </span>
              )
            },
            {
              key: 'status',
              label: 'Status',
              sortable: true,
              render: (item) => (
                <span className={`badge ${
                  item.status === 'active' ? 'badge-success' :
                  item.status === 'inactive' ? 'badge-error' :
                  'badge-warning'
                }`}>
                  {item.status}
                </span>
              )
            },
            {
              key: 'created_at',
              label: 'Created',
              sortable: true,
              render: (item) => (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <IconCalendar className="w-4 h-4" />
                  {new Date(item.created_at).toLocaleDateString()}
                </div>
              )
            },
          ]}
        />
      </div>
    );
  },
};

// Complete example with all features
export const CompleteExample: Story = {
  render: function Component() {
    const [items, setItems] = useState({
      data: mockUsers,
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: mockUsers.length,
    });

    return (
      <div className="w-full max-w-6xl">
        <ModelList
          title="Users - Complete Example"
          items={items}
          setItems={setItems}
          createRoute="/users/create"
          editRoute={(id) => `/users/${id}/edit`}
          deleteRoute={(id) => `/users/${id}`}
          inlineEditRoute={(id) => `/users/${id}`}
          massActionRoute="/users/mass-action"
          columns={[
            {
              key: 'name',
              label: 'Name',
              sortable: true,
              filterable: true,
              filterType: 'text',
              editableInline: true,
              editType: 'text',
              render: (item) => (
                <div className="flex items-center gap-2">
                  <IconUser className="w-4 h-4" />
                  <span className="font-semibold">{item.name}</span>
                </div>
              )
            },
            {
              key: 'email',
              label: 'Email',
              sortable: true,
              filterable: true,
              filterType: 'text',
              editableInline: true,
              editType: 'email',
            },
            {
              key: 'role',
              label: 'Role',
              sortable: true,
              filterable: true,
              filterType: 'select',
              filterOptions: [
                { value: 'Admin', label: 'Admin' },
                { value: 'Editor', label: 'Editor' },
                { value: 'Viewer', label: 'Viewer' },
              ],
              editableInline: true,
              editType: 'select',
              editOptions: [
                { value: 'Admin', label: 'Admin' },
                { value: 'Editor', label: 'Editor' },
                { value: 'Viewer', label: 'Viewer' },
              ],
              render: (item) => (
                <span className={`badge ${
                  item.role === 'Admin' ? 'badge-error' :
                  item.role === 'Editor' ? 'badge-warning' :
                  'badge-info'
                }`}>
                  {item.role}
                </span>
              )
            },
            {
              key: 'status',
              label: 'Status',
              sortable: true,
              filterable: true,
              filterType: 'select',
              filterOptions: [
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
                { value: 'pending', label: 'Pending' },
              ],
              render: (item) => (
                <span className={`badge ${
                  item.status === 'active' ? 'badge-success' :
                  item.status === 'inactive' ? 'badge-error' :
                  'badge-warning'
                }`}>
                  {item.status}
                </span>
              )
            },
          ]}
          massActions={[
            {
              name: 'activate',
              label: 'Activate Selected',
              confirmMessage: 'Are you sure you want to activate the selected users?',
            },
            {
              name: 'delete',
              label: 'Delete Selected',
              confirmMessage: 'Are you sure you want to delete the selected users?',
            },
          ]}
          rowActions={[
            {
              icon: IconEye,
              title: 'View Details',
              color: 'info',
              onClick: (item) => alert(`Viewing ${item.name}`),
            },
            {
              icon: IconStar,
              title: 'Mark as Featured',
              color: 'warning',
              onClick: (item) => alert(`Marked ${item.name} as featured`),
            },
          ]}
        />
      </div>
    );
  },
};
