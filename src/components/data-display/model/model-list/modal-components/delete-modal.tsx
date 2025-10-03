import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/form/button';

export interface DeleteModalProps {
    isOpen: boolean;
    isLoading: boolean;
    error?: string;
    onClose: () => void;
    onConfirm: () => Promise<void>;
}

export function DeleteModal({ isOpen, isLoading, error, onClose, onConfirm }: DeleteModalProps) {
    if (!isOpen) return null;

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Modal.Header>Delete Item</Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                {error && <p className="text-error mt-2">{error}</p>}
            </Modal.Body>
            <Modal.Actions>
                <Button onClick={onClose} disabled={isLoading}>Cancel</Button>
                <Button color="error" onClick={onConfirm} processing={isLoading}>Delete</Button>
            </Modal.Actions>
        </Modal>
    );
}
