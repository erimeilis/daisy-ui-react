import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/form/button';
import type { IMassAction } from '@/types/models';

export interface MassActionModalProps {
    isOpen: boolean;
    isLoading: boolean;
    selectedAction: IMassAction | null;
    selectedCount: number;
    error?: string;
    onClose: () => void;
    onConfirm: () => Promise<void>;
}

export function MassActionModal({ isOpen, isLoading, selectedAction, selectedCount, error, onClose, onConfirm }: MassActionModalProps) {
    if (!selectedAction || !isOpen) return null;

    // Determine action color
    const actionColor = selectedAction.name === 'delete' ? 'error' : 'warning';

    // Use the action's label as the title
    const title = selectedAction.label;

    // Use the action's confirm message if provided, otherwise generate a generic one
    const message = selectedAction.confirmMessage ||
        `Are you sure you want to ${selectedAction.label.toLowerCase()} ${selectedCount} selected item${selectedCount === 1 ? '' : 's'}?`;

    // Extract confirm button text from label (e.g., "Delete Tables" -> "Delete")
    const confirmButtonText = selectedAction.label.split(' ')[0];

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Modal.Header>{title}</Modal.Header>
            <Modal.Body>
                <p>{message}</p>
                {error && <p className="text-error mt-2">{error}</p>}
            </Modal.Body>
            <Modal.Actions>
                <Button onClick={onClose} disabled={isLoading}>Cancel</Button>
                <Button color={actionColor} onClick={onConfirm} processing={isLoading}>{confirmButtonText}</Button>
            </Modal.Actions>
        </Modal>
    );
}
