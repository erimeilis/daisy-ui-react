// Basic model types for pagination component and model list

export interface BaseModel {
  id: string | number;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export interface PaginatedResponse<T> {
  data: T[]
  currentPage: number
  lastPage: number
  perPage: number
  total: number
  from: number | null
  to: number | null
  links: PaginationLink[]
  prevPageUrl: string | null
  nextPageUrl: string | null
  lastPageUrl: string | null
  meta?: Record<string, unknown> // Optional metadata field for table data responses (contains column definitions)
}

export interface PaginationLink {
  url: string | null
  label: string
  active: boolean
}

// Mass action interface
export interface MassAction {
  name: string;
  label: string;
  confirmMessage?: string;
}

// Base props interface for model lists
export interface ModelListProps<T extends BaseModel> {
  items?: PaginatedResponse<T> | null;
  filters?: {
    sort?: string;
    direction?: 'asc' | 'desc';
    [key: string]: unknown;
  };
}

// Base props interface for model edit forms
export interface ModelEditProps<T extends BaseModel> {
  item?: T;
  readonly?: boolean;
  onSubmit?: (data: T) => Promise<void> | void;
  onCancel?: () => void;
  validationErrors?: Partial<Record<keyof T, string>>;
  processing?: boolean;
}

// Legacy type aliases for backward compatibility
export type IPaginatedResponse<T> = PaginatedResponse<T>
export type IMassAction = MassAction
export type IModel = BaseModel
export type IModelListProps<T extends BaseModel> = ModelListProps<T>
export type IModelEditProps<T extends BaseModel> = ModelEditProps<T>

// Specific model interfaces
export interface User extends BaseModel {
  email: string;
  name: string;
  role?: string;
  googleId?: string;
  avatar?: string;
}

export interface Token extends BaseModel {
  name: string;
  token: string;
  permissions: 'read' | 'full';
  allowedDomains?: string[];
  expiresAt?: string;
  lastUsedAt?: string;
}

export interface Item extends BaseModel {
  name: string;
  description?: string;
  price?: number;
  category?: string;
  stock?: number;
  imageUrl?: string;
}

export interface AllowedEmail extends BaseModel {
  email?: string;
  domain?: string;
  type: 'email' | 'domain';
  createdBy?: string;
}