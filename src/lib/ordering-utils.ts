import React from 'react';

export type SortDirection = 'asc' | 'desc' | null;

export interface SortConfig {
  field: string;
  direction: SortDirection;
}

export function toggleSortDirection(current: SortDirection): SortDirection {
  if (current === null) return 'asc';
  if (current === 'asc') return 'desc';
  return null;
}

export function sortData<T>(data: T[], sortConfig: SortConfig): T[] {
  if (!sortConfig.direction || !sortConfig.field) {
    return data;
  }

  return [...data].sort((a, b) => {
    const aValue = getNestedValue(a, sortConfig.field);
    const bValue = getNestedValue(b, sortConfig.field);

    if (aValue === bValue) return 0;
    if (aValue === null || aValue === undefined) return 1;
    if (bValue === null || bValue === undefined) return -1;

    let comparison = 0;
    if (aValue > bValue) comparison = 1;
    if (aValue < bValue) comparison = -1;

    return sortConfig.direction === 'desc' ? -comparison : comparison;
  });
}

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

export function getSortIcon(direction: SortDirection): string {
  switch (direction) {
    case 'asc':
      return '↑';
    case 'desc':
      return '↓';
    default:
      return '↕';
  }
}

// Drag and Drop utilities
export interface DragState {
  isDragging: boolean;
  draggedItem: unknown | null;
  draggedIndex: number | null;
  dragOverIndex: number | null;
}

export interface OrderingContext {
  dragState: DragState;
  setDragState: (state: DragState) => void;
}

export function handleDragStart<T>(
  e: React.DragEvent<HTMLElement>,
  item: T,
  index: number,
  setDragState: (state: DragState) => void
) {
  setDragState({
    isDragging: true,
    draggedItem: item,
    draggedIndex: index,
    dragOverIndex: null,
  });

  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.outerHTML);
  }
}

export function handleDragOver(
  e: React.DragEvent<HTMLElement>,
  index: number,
  setDragState: (state: DragState) => void,
  dragState: DragState
) {
  e.preventDefault();
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'move';
  }

  if (dragState.dragOverIndex !== index) {
    setDragState({
      ...dragState,
      dragOverIndex: index,
    });
  }
}

export function handleDragEnd(setDragState: (state: DragState) => void) {
  setDragState({
    isDragging: false,
    draggedItem: null,
    draggedIndex: null,
    dragOverIndex: null,
  });
}

export function handleDrop<T>(
  e: React.DragEvent<HTMLElement>,
  targetIndex: number,
  items: T[],
  setItems: (items: T[]) => void,
  dragState: DragState,
  setDragState: (state: DragState) => void
) {
  e.preventDefault();

  if (dragState.draggedIndex !== null && dragState.draggedIndex !== targetIndex) {
    const newItems = moveItem(items, dragState.draggedIndex, targetIndex);
    setItems(newItems);
  }

  handleDragEnd(setDragState);
}

export function moveItem<T>(items: T[], fromIndex: number, toIndex: number): T[] {
  const newItems = [...items];
  const [removed] = newItems.splice(fromIndex, 1);
  newItems.splice(toIndex, 0, removed);
  return newItems;
}

export function getItemPositionInfo(index: number, total: number) {
  return {
    isFirst: index === 0,
    isLast: index === total - 1,
    canMoveUp: index > 0,
    canMoveDown: index < total - 1,
  };
}