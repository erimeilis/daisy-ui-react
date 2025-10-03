import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal, ModalBox, ModalAction, ModalBackdrop, ModalTrigger } from '../components/ui/modal';
import { Button } from '../components/form/button';
import { Input } from '../components/form/input';
import { IconX, IconAlertTriangle, IconCheck, IconInfoCircle } from '@tabler/icons-react';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Modal component using native HTML dialog with DaisyUI styling. Supports different placements and can be controlled via triggers or state.',
      },
    },
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['default', 'top', 'middle', 'bottom', 'start', 'end'],
      description: 'Modal placement on screen',
    },
    modifier: {
      control: 'select',
      options: ['default', 'open'],
      description: 'Modal state modifier',
    },
  },
  args: {
    placement: 'default',
    modifier: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic modal with trigger
export const BasicModal: Story = {
  render: () => (
    <div>
      <ModalTrigger targetModal="basic-modal" color="primary">
        Open Basic Modal
      </ModalTrigger>

      <Modal id="basic-modal">
        <ModalBox>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <ModalAction>
            <form method="dialog">
              <Button color="primary">Close</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>
    </div>
  ),
};

// Different placements
export const Placements: Story = {
  render: () => (
    <div className="space-x-4">
      <ModalTrigger targetModal="top-modal" color="secondary">
        Top
      </ModalTrigger>
      <ModalTrigger targetModal="middle-modal" color="accent">
        Middle
      </ModalTrigger>
      <ModalTrigger targetModal="bottom-modal" color="info">
        Bottom
      </ModalTrigger>

      {/* Top Modal */}
      <Modal id="top-modal" placement="top">
        <ModalBox>
          <h3 className="font-bold text-lg">Top Placement</h3>
          <p className="py-4">This modal appears at the top of the screen.</p>
          <ModalAction>
            <form method="dialog">
              <Button>Close</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>

      {/* Middle Modal */}
      <Modal id="middle-modal" placement="middle">
        <ModalBox>
          <h3 className="font-bold text-lg">Middle Placement</h3>
          <p className="py-4">This modal appears in the middle of the screen.</p>
          <ModalAction>
            <form method="dialog">
              <Button>Close</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>

      {/* Bottom Modal */}
      <Modal id="bottom-modal" placement="bottom">
        <ModalBox>
          <h3 className="font-bold text-lg">Bottom Placement</h3>
          <p className="py-4">This modal appears at the bottom of the screen.</p>
          <ModalAction>
            <form method="dialog">
              <Button>Close</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>
    </div>
  ),
};

// Confirmation dialog
export const ConfirmationDialog: Story = {
  render: () => (
    <div>
      <ModalTrigger targetModal="confirm-modal" color="error">
        Delete Item
      </ModalTrigger>

      <Modal id="confirm-modal">
        <ModalBox>
          <div className="flex items-center gap-3 mb-4">
            <IconAlertTriangle className="w-6 h-6 text-warning" />
            <h3 className="font-bold text-lg">Confirm Deletion</h3>
          </div>
          <p className="py-4">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <ModalAction>
            <form method="dialog" className="flex gap-2">
              <Button color="error">Delete</Button>
              <Button style="outline">Cancel</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>
    </div>
  ),
};

// Form modal
export const FormModal: Story = {
  render: () => (
    <div>
      <ModalTrigger targetModal="form-modal" color="primary">
        Create Account
      </ModalTrigger>

      <Modal id="form-modal">
        <ModalBox className="w-11/12 max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Create New Account</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost">
                <IconX className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <Input placeholder="John" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <Input placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <Input type="email" placeholder="john.doe@example.com" />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <Input type="password" placeholder="••••••••" />
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">I agree to the terms and conditions</span>
                <input type="checkbox" className="checkbox" />
              </label>
            </div>
          </div>

          <ModalAction>
            <Button color="primary" modifier="wide">Create Account</Button>
            <form method="dialog">
              <Button style="outline">Cancel</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>
    </div>
  ),
};

// Success/Info modals
export const NotificationModals: Story = {
  render: () => (
    <div className="space-x-4">
      <ModalTrigger targetModal="success-modal" color="success">
        Success
      </ModalTrigger>
      <ModalTrigger targetModal="info-modal" color="info">
        Info
      </ModalTrigger>
      <ModalTrigger targetModal="warning-modal" color="warning">
        Warning
      </ModalTrigger>

      {/* Success Modal */}
      <Modal id="success-modal">
        <ModalBox className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
              <IconCheck className="w-8 h-8 text-success" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">Success!</h3>
          <p className="py-4">Your account has been created successfully.</p>
          <ModalAction>
            <form method="dialog">
              <Button color="success">Continue</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>

      {/* Info Modal */}
      <Modal id="info-modal">
        <ModalBox className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-info/20 rounded-full flex items-center justify-center">
              <IconInfoCircle className="w-8 h-8 text-info" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">Information</h3>
          <p className="py-4">Here's some important information you should know.</p>
          <ModalAction>
            <form method="dialog">
              <Button color="info">Got it</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>

      {/* Warning Modal */}
      <Modal id="warning-modal">
        <ModalBox className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center">
              <IconAlertTriangle className="w-8 h-8 text-warning" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">Warning</h3>
          <p className="py-4">Please review your settings before proceeding.</p>
          <ModalAction>
            <form method="dialog" className="flex gap-2">
              <Button color="warning">Review</Button>
              <Button style="outline">Ignore</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>
    </div>
  ),
};

// Modal without backdrop (can't close by clicking outside)
export const NoBackdropModal: Story = {
  render: () => (
    <div>
      <ModalTrigger targetModal="no-backdrop-modal" color="neutral">
        Modal Without Backdrop
      </ModalTrigger>

      <Modal id="no-backdrop-modal">
        <ModalBox>
          <h3 className="font-bold text-lg">No Backdrop</h3>
          <p className="py-4">
            This modal cannot be closed by clicking outside. You must use the close button.
          </p>
          <ModalAction>
            <form method="dialog">
              <Button color="primary">Close Modal</Button>
            </form>
          </ModalAction>
        </ModalBox>
        {/* No ModalBackdrop component */}
      </Modal>
    </div>
  ),
};

// Controlled modal with React state
export const ControlledModal: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
      setIsOpen(true);
      // Programmatically open the dialog
      const modal = document.getElementById('controlled-modal') as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    };

    const closeModal = () => {
      setIsOpen(false);
      // Programmatically close the dialog
      const modal = document.getElementById('controlled-modal') as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
    };

    return (
      <div>
        <Button color="primary" onClick={openModal}>
          Open Controlled Modal
        </Button>

        <Modal id="controlled-modal">
          <ModalBox>
            <h3 className="font-bold text-lg">Controlled Modal</h3>
            <p className="py-4">
              This modal is controlled by React state. Status: {isOpen ? 'Open' : 'Closed'}
            </p>
            <ModalAction>
              <Button color="primary" onClick={closeModal}>
                Close via State
              </Button>
              <form method="dialog" onSubmit={() => setIsOpen(false)}>
                <Button style="outline">Close via Form</Button>
              </form>
            </ModalAction>
          </ModalBox>
          <ModalBackdrop onClick={closeModal} />
        </Modal>
      </div>
    );
  },
};

// Large content modal with scrolling
export const LargeContentModal: Story = {
  render: () => (
    <div>
      <ModalTrigger targetModal="large-modal" color="accent">
        Large Content Modal
      </ModalTrigger>

      <Modal id="large-modal">
        <ModalBox className="w-11/12 max-w-5xl max-h-96 overflow-y-auto">
          <h3 className="font-bold text-lg mb-4">Terms and Conditions</h3>
          <div className="space-y-4">
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i} className="text-sm">
                {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            ))}
          </div>
          <ModalAction className="sticky bottom-0 bg-base-100 pt-4 mt-4 border-t">
            <form method="dialog" className="flex gap-2">
              <Button color="primary">Accept</Button>
              <Button style="outline">Decline</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>
    </div>
  ),
};

// Nested modals example
export const NestedModals: Story = {
  render: () => (
    <div>
      <ModalTrigger targetModal="parent-modal" color="primary">
        Open Parent Modal
      </ModalTrigger>

      {/* Parent Modal */}
      <Modal id="parent-modal">
        <ModalBox>
          <h3 className="font-bold text-lg">Parent Modal</h3>
          <p className="py-4">This is the first modal. You can open another modal from here.</p>
          <ModalAction>
            <ModalTrigger targetModal="child-modal" color="secondary">
              Open Child Modal
            </ModalTrigger>
            <form method="dialog">
              <Button style="outline">Close</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>

      {/* Child Modal */}
      <Modal id="child-modal">
        <ModalBox>
          <h3 className="font-bold text-lg">Child Modal</h3>
          <p className="py-4">This is a nested modal opened from the parent modal.</p>
          <ModalAction>
            <form method="dialog">
              <Button color="secondary">Close Child</Button>
            </form>
          </ModalAction>
        </ModalBox>
        <ModalBackdrop />
      </Modal>
    </div>
  ),
};