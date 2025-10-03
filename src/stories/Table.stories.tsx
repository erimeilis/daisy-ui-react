import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Table,
  TableWrapper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell
} from '../components/data-display/table';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/form/button';
import { Avatar } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';
import {
  IconArrowUp,
  IconArrowDown,
  IconEdit,
  IconTrash,
  IconEye,
  IconSearch,
  IconFilter,
  IconDownload,
  IconPlus
} from '@tabler/icons-react';

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Table component for displaying tabular data with sorting, filtering, and various styling options. Includes responsive design and interactive features.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the table',
    },
    zebra: {
      control: 'boolean',
      description: 'Zebra striping for alternating row colors',
    },
    pinRows: {
      control: 'boolean',
      description: 'Pin header and footer rows',
    },
    pinCols: {
      control: 'boolean',
      description: 'Pin first and last columns',
    },
  },
  args: {
    size: 'md',
    zebra: false,
    pinRows: false,
    pinCols: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic table
export const BasicTable: Story = {
  render: () => (
    <div className="p-6">
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Job</TableHeaderCell>
              <TableHeaderCell>Company</TableHeaderCell>
              <TableHeaderCell>Location</TableHeaderCell>
              <TableHeaderCell>Last Login</TableHeaderCell>
              <TableHeaderCell>Favorite Color</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=john" alt="John" />
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                Desktop Support Technician
                <br />
                <Badge variant="ghost" size="sm">Tech</Badge>
              </TableCell>
              <TableCell>Zemlak, Daniel and Leannon</TableCell>
              <TableCell>Purple</TableCell>
              <TableCell>12/16/2020</TableCell>
              <TableCell>Blue</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=brice" alt="Brice" />
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                Tax Accountant
                <br />
                <Badge variant="ghost" size="sm">Finance</Badge>
              </TableCell>
              <TableCell>Carroll Group</TableCell>
              <TableCell>Red</TableCell>
              <TableCell>12/5/2020</TableCell>
              <TableCell>Red</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar size="sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=marjy" alt="Marjy" />
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                Office Assistant I
                <br />
                <Badge variant="ghost" size="sm">Office</Badge>
              </TableCell>
              <TableCell>Rowe-Schoen</TableCell>
              <TableCell>Crimson</TableCell>
              <TableCell>12/10/2020</TableCell>
              <TableCell>Purple</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  ),
};

// Sortable table
export const SortableTable: Story = {
  render: function Component() {
    const [data, setData] = React.useState([
      { id: 1, name: 'John Doe', age: 32, department: 'Engineering', salary: 85000, status: 'active' },
      { id: 2, name: 'Jane Smith', age: 28, department: 'Design', salary: 75000, status: 'active' },
      { id: 3, name: 'Bob Johnson', age: 45, department: 'Marketing', salary: 70000, status: 'inactive' },
      { id: 4, name: 'Alice Brown', age: 35, department: 'Engineering', salary: 95000, status: 'active' },
      { id: 5, name: 'Charlie Wilson', age: 29, department: 'Sales', salary: 65000, status: 'active' },
    ]);

    const [sortField, setSortField] = React.useState<string>('');
    const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }

      const sortedData = [...data].sort((a, b) => {
        const aVal = a[field as keyof typeof a];
        const bVal = b[field as keyof typeof b];

        if (sortDirection === 'asc') {
          return aVal > bVal ? 1 : -1;
        } else {
          return aVal < bVal ? 1 : -1;
        }
      });

      setData(sortedData);
    };

    const SortableHeader = ({ field, children }: { field: string; children: React.ReactNode }) => (
      <TableHeaderCell
        className="cursor-pointer hover:bg-base-200 transition-colors"
        onClick={() => handleSort(field)}
      >
        <div className="flex items-center gap-2">
          {children}
          {sortField === field && (
            sortDirection === 'asc' ?
              <IconArrowUp className="w-4 h-4" /> :
              <IconArrowDown className="w-4 h-4" />
          )}
        </div>
      </TableHeaderCell>
    );

    return (
      <div className="p-6">
        <TableWrapper>
          <Table zebra>
            <TableHead>
              <TableRow>
                <SortableHeader field="name">Name</SortableHeader>
                <SortableHeader field="age">Age</SortableHeader>
                <SortableHeader field="department">Department</SortableHeader>
                <SortableHeader field="salary">Salary</SortableHeader>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((person) => (
                <TableRow key={person.id} className="hover">
                  <TableCell className="font-medium">{person.name}</TableCell>
                  <TableCell>{person.age}</TableCell>
                  <TableCell>{person.department}</TableCell>
                  <TableCell>${person.salary.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge
                      variant={person.status === 'active' ? 'success' : 'error'}
                      size="sm"
                    >
                      {person.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="xs" style="ghost">
                        <IconEye className="w-4 h-4" />
                      </Button>
                      <Button size="xs" style="ghost">
                        <IconEdit className="w-4 h-4" />
                      </Button>
                      <Button size="xs" style="ghost" color="error">
                        <IconTrash className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </div>
    );
  },
};

// Data table with filters
export const DataTableWithFilters: Story = {
  render: function Component() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [statusFilter, setStatusFilter] = React.useState('all');
    const [departmentFilter, setDepartmentFilter] = React.useState('all');

    const allData = [
      { id: 1, name: 'Sarah Connor', email: 'sarah@company.com', department: 'Engineering', role: 'Senior Developer', status: 'active', progress: 85 },
      { id: 2, name: 'John Smith', email: 'john@company.com', department: 'Design', role: 'UI Designer', status: 'active', progress: 92 },
      { id: 3, name: 'Mike Johnson', email: 'mike@company.com', department: 'Marketing', role: 'Marketing Manager', status: 'inactive', progress: 67 },
      { id: 4, name: 'Emily Davis', email: 'emily@company.com', department: 'Engineering', role: 'DevOps Engineer', status: 'active', progress: 78 },
      { id: 5, name: 'David Wilson', email: 'david@company.com', department: 'Sales', role: 'Sales Representative', status: 'active', progress: 45 },
      { id: 6, name: 'Lisa Brown', email: 'lisa@company.com', department: 'HR', role: 'HR Specialist', status: 'inactive', progress: 89 },
    ];

    const filteredData = allData.filter(person => {
      const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           person.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || person.status === statusFilter;
      const matchesDepartment = departmentFilter === 'all' || person.department === departmentFilter;

      return matchesSearch && matchesStatus && matchesDepartment;
    });

    const departments = [...new Set(allData.map(p => p.department))];

    return (
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Employee Directory</h2>
            <p className="text-gray-600">Manage your team members and their information</p>
          </div>
          <Button color="primary">
            <IconPlus className="w-4 h-4 mr-2" />
            Add Employee
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-4 items-center flex-wrap">
          <div className="form-control">
            <div className="input-group">
              <span>
                <IconSearch className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search employees..."
                className="input input-bordered"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <select
            className="select select-bordered"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <select
            className="select select-bordered"
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          <Button style="outline">
            <IconFilter className="w-4 h-4 mr-2" />
            More Filters
          </Button>

          <Button style="outline">
            <IconDownload className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Results count */}
        <div className="text-sm text-gray-600">
          Showing {filteredData.length} of {allData.length} employees
        </div>

        {/* Table */}
        <TableWrapper>
          <Table zebra>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Employee</TableHeaderCell>
                <TableHeaderCell>Department</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Progress</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((person) => (
                <TableRow key={person.id} className="hover">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar
                        size="sm"
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.name}`}
                        alt={person.name}
                      />
                      <div>
                        <div className="font-bold">{person.name}</div>
                        <div className="text-sm opacity-50">{person.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="ghost" size="sm">{person.department}</Badge>
                  </TableCell>
                  <TableCell>{person.role}</TableCell>
                  <TableCell>
                    <Badge
                      variant={person.status === 'active' ? 'success' : 'warning'}
                      size="sm"
                    >
                      {person.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress
                        value={person.progress}
                        size="sm"
                        color={person.progress >= 80 ? 'success' : person.progress >= 60 ? 'warning' : 'error'}
                        className="w-20"
                      />
                      <span className="text-sm">{person.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="xs" style="ghost" title="View">
                        <IconEye className="w-4 h-4" />
                      </Button>
                      <Button size="xs" style="ghost" title="Edit">
                        <IconEdit className="w-4 h-4" />
                      </Button>
                      <Button size="xs" style="ghost" color="error" title="Delete">
                        <IconTrash className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No employees found matching your criteria.</p>
            <Button
              style="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
                setDepartmentFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    );
  },
};

// Different table styles
export const TableStyles: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      {/* Compact table */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Compact Table (xs)</h3>
        <TableWrapper>
          <Table size="xs">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Product</TableHeaderCell>
                <TableHeaderCell>Price</TableHeaderCell>
                <TableHeaderCell>Stock</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Laptop</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>15</TableCell>
                <TableCell><Badge variant="success" size="sm">In Stock</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mouse</TableCell>
                <TableCell>$29</TableCell>
                <TableCell>0</TableCell>
                <TableCell><Badge variant="error" size="sm">Out of Stock</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </div>

      {/* Zebra striped table */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Zebra Striped Table</h3>
        <TableWrapper>
          <Table zebra>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Transaction ID</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Method</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>#TXN001</TableCell>
                <TableCell>2024-03-15</TableCell>
                <TableCell>$125.00</TableCell>
                <TableCell>Credit Card</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#TXN002</TableCell>
                <TableCell>2024-03-14</TableCell>
                <TableCell>$89.50</TableCell>
                <TableCell>PayPal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#TXN003</TableCell>
                <TableCell>2024-03-13</TableCell>
                <TableCell>$234.75</TableCell>
                <TableCell>Bank Transfer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#TXN004</TableCell>
                <TableCell>2024-03-12</TableCell>
                <TableCell>$67.25</TableCell>
                <TableCell>Credit Card</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </div>

      {/* Large table */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Large Table (lg)</h3>
        <TableWrapper>
          <Table size="lg">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Campaign</TableHeaderCell>
                <TableHeaderCell>Impressions</TableHeaderCell>
                <TableHeaderCell>Clicks</TableHeaderCell>
                <TableHeaderCell>CTR</TableHeaderCell>
                <TableHeaderCell>Cost</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className="hover">
                <TableCell className="font-medium">Summer Sale 2024</TableCell>
                <TableCell>125,430</TableCell>
                <TableCell>3,247</TableCell>
                <TableCell>2.59%</TableCell>
                <TableCell>$1,247.50</TableCell>
              </TableRow>
              <TableRow className="hover">
                <TableCell className="font-medium">Black Friday</TableCell>
                <TableCell>89,230</TableCell>
                <TableCell>4,156</TableCell>
                <TableCell>4.66%</TableCell>
                <TableCell>$2,890.25</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </div>
    </div>
  ),
};