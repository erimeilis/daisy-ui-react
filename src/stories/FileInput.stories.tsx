import type { Meta, StoryObj } from '@storybook/react';
import {
  FileInput,
  FileInputWithFieldset,
  FileInputWithPreview,
  FileInputDragDrop
} from '../components/form/file-input';
import { useState } from 'react';
import { IconUpload, IconFile, IconPhoto, IconVideo, IconMusic } from '@tabler/icons-react';

const meta: Meta<typeof FileInput> = {
  title: 'Form/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile file input component with multiple variants including drag & drop, preview, and fieldset wrapper. Perfect for file uploads in forms and applications.',
      },
    },
  },
  argTypes: {
    style: {
      control: 'select',
      options: ['default', 'ghost'],
      description: 'The style variant of the file input',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'neutral', 'info', 'success', 'warning', 'error'],
      description: 'The color variant of the file input',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the file input',
    },
    width: {
      control: 'select',
      options: ['default', 'full', 'max'],
      description: 'The width variant of the file input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the file input',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
  },
  args: {
    style: 'default',
    color: 'default',
    size: 'md',
    width: 'default',
    disabled: false,
    multiple: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick a file</span>
      </label>
      <FileInput {...args} />
    </div>
  ),
};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
};

// Color variations
export const Colors: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="label">
          <span className="label-text">Default</span>
        </label>
        <FileInput color="default" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Primary</span>
        </label>
        <FileInput color="primary" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Secondary</span>
        </label>
        <FileInput color="secondary" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Accent</span>
        </label>
        <FileInput color="accent" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Info</span>
        </label>
        <FileInput color="info" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Success</span>
        </label>
        <FileInput color="success" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Warning</span>
        </label>
        <FileInput color="warning" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Error</span>
        </label>
        <FileInput color="error" width="full" />
      </div>
    </div>
  ),
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="label">
          <span className="label-text">Extra Small</span>
        </label>
        <FileInput size="xs" width="full" color="primary" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Small</span>
        </label>
        <FileInput size="sm" width="full" color="primary" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Medium</span>
        </label>
        <FileInput size="md" width="full" color="primary" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Large</span>
        </label>
        <FileInput size="lg" width="full" color="primary" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Extra Large</span>
        </label>
        <FileInput size="xl" width="full" color="primary" />
      </div>
    </div>
  ),
};

// Style variations
export const Styles: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="label">
          <span className="label-text">Default Style</span>
        </label>
        <FileInput style="default" color="primary" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Ghost Style</span>
        </label>
        <FileInput style="ghost" color="primary" width="full" />
      </div>
    </div>
  ),
};

// Width variations
export const Widths: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="label">
          <span className="label-text">Default Width</span>
        </label>
        <FileInput width="default" color="primary" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Full Width</span>
        </label>
        <FileInput width="full" color="primary" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Max Width</span>
        </label>
        <FileInput width="max" color="primary" />
      </div>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="label">
          <span className="label-text">Normal</span>
        </label>
        <FileInput color="primary" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Disabled</span>
        </label>
        <FileInput color="primary" width="full" disabled />
      </div>
    </div>
  ),
};

// File types
export const FileTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="label">
          <span className="label-text">Images Only</span>
        </label>
        <FileInput accept="image/*" color="info" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Documents</span>
        </label>
        <FileInput accept=".pdf,.doc,.docx,.txt" color="accent" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Videos</span>
        </label>
        <FileInput accept="video/*" color="error" width="full" />
      </div>
      <div>
        <label className="label">
          <span className="label-text">Audio Files</span>
        </label>
        <FileInput accept="audio/*" color="success" width="full" />
      </div>
    </div>
  ),
};

// With Fieldset
export const WithFieldset: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <FileInputWithFieldset
        legend="Upload Document"
        label="Choose a PDF or Word document"
        accept=".pdf,.doc,.docx"
        color="primary"
        width="full"
      />
      <FileInputWithFieldset
        legend="Profile Picture"
        label="Upload your profile image"
        accept="image/*"
        color="secondary"
        width="full"
      />
    </div>
  ),
};

// With Preview
export const WithPreview: Story = {
  render: function Component() {
    return (
      <div className="space-y-6 w-96">
        <div>
          <label className="label">
            <span className="label-text">Upload with Preview</span>
          </label>
          <FileInputWithPreview
            color="primary"
            width="full"
            multiple
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Images with Preview</span>
          </label>
          <FileInputWithPreview
            accept="image/*"
            color="accent"
            width="full"
            multiple
            showFileSize
            showFileType
          />
        </div>
      </div>
    );
  },
};

// Drag and Drop
export const DragAndDrop: Story = {
  render: function Component() {
    const [uploadedFiles, setUploadedFiles] = useState<FileList | null>(null);

    return (
      <div className="space-y-6 w-96">
        <div>
          <h3 className="text-lg font-semibold mb-2">Basic Drag & Drop</h3>
          <FileInputDragDrop
            onFileChange={setUploadedFiles}
            multiple
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Custom Drag & Drop</h3>
          <FileInputDragDrop
            accept="image/*"
            multiple
            className="min-h-[120px]"
          >
            <div className="flex flex-col items-center gap-3">
              <IconUpload size={32} className="text-primary" />
              <div className="text-center">
                <div className="font-medium">Upload Images</div>
                <div className="text-sm text-base-content/60">
                  Drag and drop or click to select
                </div>
                <div className="text-xs text-base-content/40 mt-1">
                  Supports: JPG, PNG, GIF
                </div>
              </div>
            </div>
          </FileInputDragDrop>
        </div>

        {uploadedFiles && uploadedFiles.length > 0 && (
          <div className="alert alert-success">
            <span>
              {uploadedFiles.length} file(s) uploaded successfully
            </span>
          </div>
        )}
      </div>
    );
  },
};

// Controlled component
export const Controlled: Story = {
  render: function Component() {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

    const handleFileChange = (files: FileList | null) => {
      setSelectedFiles(files);
      setUploadStatus('idle');
    };

    const handleUpload = async () => {
      if (!selectedFiles || selectedFiles.length === 0) return;

      setUploadStatus('uploading');

      // Simulate upload
      setTimeout(() => {
        setUploadStatus('success');
        setTimeout(() => {
          setUploadStatus('idle');
          setSelectedFiles(null);
        }, 2000);
      }, 2000);
    };

    const getStatusColor = () => {
      switch (uploadStatus) {
        case 'uploading': return 'warning';
        case 'success': return 'success';
        case 'error': return 'error';
        default: return 'primary';
      }
    };

    const getStatusText = () => {
      switch (uploadStatus) {
        case 'uploading': return 'Uploading...';
        case 'success': return 'Upload successful!';
        case 'error': return 'Upload failed';
        default: return 'Ready to upload';
      }
    };

    return (
      <div className="card bg-base-100 shadow-xl w-96">
        <div className="card-body">
          <h2 className="card-title">File Upload</h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Select files</span>
            </label>
            <FileInputWithPreview
              multiple
              color={getStatusColor()}
              width="full"
              onFileChange={handleFileChange}
              disabled={uploadStatus === 'uploading'}
            />
          </div>

          {selectedFiles && selectedFiles.length > 0 && (
            <div className="alert alert-info">
              <span>{selectedFiles.length} file(s) selected</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <span className="text-sm">{getStatusText()}</span>
            {uploadStatus === 'uploading' && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
          </div>

          <div className="card-actions justify-end">
            <button
              className={`btn btn-${getStatusColor()}`}
              onClick={handleUpload}
              disabled={!selectedFiles || selectedFiles.length === 0 || uploadStatus === 'uploading'}
            >
              {uploadStatus === 'uploading' ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </div>
      </div>
    );
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Profile picture upload */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex items-center gap-2">
            <IconPhoto size={20} />
            Profile Picture
          </h2>
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-16 rounded-full bg-neutral-focus text-neutral-content">
                <span className="text-2xl">👤</span>
              </div>
            </div>
            <div className="flex-1">
              <FileInputDragDrop
                accept="image/*"
                className="min-h-[80px]"
              >
                <div className="text-center">
                  <div className="text-sm">Upload new picture</div>
                  <div className="text-xs text-base-content/60">
                    JPG, PNG up to 5MB
                  </div>
                </div>
              </FileInputDragDrop>
            </div>
          </div>
        </div>
      </div>

      {/* Document upload */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex items-center gap-2">
            <IconFile size={20} />
            Documents
          </h2>
          <FileInputWithPreview
            accept=".pdf,.doc,.docx,.txt"
            multiple
            color="accent"
            width="full"
            showFileSize
            showFileType
          />
          <div className="text-xs text-base-content/60">
            Supported formats: PDF, DOC, DOCX, TXT
          </div>
        </div>
      </div>

      {/* Media upload */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex items-center gap-2">
            <IconVideo size={20} />
            Media Files
          </h2>
          <FileInputDragDrop
            accept="video/*,audio/*,image/*"
            multiple
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                <IconPhoto size={24} className="text-info" />
                <IconVideo size={24} className="text-error" />
                <IconMusic size={24} className="text-success" />
              </div>
              <div className="text-center">
                <div className="font-medium">Upload Media</div>
                <div className="text-sm text-base-content/60">
                  Images, Videos, Audio
                </div>
              </div>
            </div>
          </FileInputDragDrop>
        </div>
      </div>

      {/* Bulk upload */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Bulk Upload</h2>
          <FileInputDragDrop
            multiple
            className="min-h-[120px]"
          >
            <div className="flex flex-col items-center gap-3">
              <IconUpload size={32} className="text-primary" />
              <div className="text-center">
                <div className="font-medium">Drop Multiple Files</div>
                <div className="text-sm text-base-content/60">
                  Select or drag multiple files
                </div>
                <div className="text-xs text-base-content/40 mt-1">
                  No file type restrictions
                </div>
              </div>
            </div>
          </FileInputDragDrop>
        </div>
      </div>
    </div>
  ),
};

// Form integration
export const FormIntegration: Story = {
  render: function Component() {
    const [formData, setFormData] = useState({
      avatar: null as FileList | null,
      documents: null as FileList | null,
      resume: null as FileList | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted with files:', formData);
      alert('Form submitted! Check console for file data.');
    };

    return (
      <div className="card bg-base-100 shadow-xl w-full max-w-2xl">
        <div className="card-body">
          <h2 className="card-title">Job Application Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="text" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="text" className="input input-bordered" required />
              </div>
            </div>

            {/* Avatar Upload */}
            <FileInputWithFieldset
              legend="Profile Picture"
              label="Upload your profile photo (optional)"
              accept="image/*"
              color="primary"
              width="full"
              onFileChange={(files) => setFormData(prev => ({ ...prev, avatar: files }))}
            />

            {/* Resume Upload */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume *</span>
              </label>
              <FileInputDragDrop
                accept=".pdf,.doc,.docx"
                onFileChange={(files) => setFormData(prev => ({ ...prev, resume: files }))}
              >
                <div className="flex flex-col items-center gap-2">
                  <IconFile size={24} className="text-accent" />
                  <div className="text-center">
                    <div className="font-medium">Upload Resume</div>
                    <div className="text-sm text-base-content/60">
                      PDF, DOC, DOCX only
                    </div>
                  </div>
                </div>
              </FileInputDragDrop>
            </div>

            {/* Supporting Documents */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supporting Documents</span>
                <span className="label-text-alt">Optional</span>
              </label>
              <FileInputWithPreview
                multiple
                accept=".pdf,.doc,.docx,.jpg,.png"
                color="secondary"
                width="full"
                showFileSize
                showFileType
                onFileChange={(files) => setFormData(prev => ({ ...prev, documents: files }))}
              />
              <div className="label">
                <span className="label-text-alt">
                  Portfolio, certificates, or other relevant documents
                </span>
              </div>
            </div>

            {/* Submit */}
            <div className="card-actions justify-end">
              <button type="button" className="btn btn-outline">Cancel</button>
              <button type="submit" className="btn btn-primary">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    );
  },
};