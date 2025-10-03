// TODO: Calendar component needs to be created
// import { Calendar } from '@/components/form/calendar';
import { createPortal } from 'react-dom';
import type { IDateFilterCalendarProps } from './types';

export function DateFilterCalendar({ openDateFilters, calendarPositions }: IDateFilterCalendarProps) {
    if (openDateFilters.size === 0) return null;

    return createPortal(
        <div data-calendar-portal>
            {Array.from(openDateFilters).map((columnKey) => {
                const position = calendarPositions[columnKey];

                if (!position) return null;

                return (
                    <div
                        key={columnKey}
                        className="fixed z-[9999] rounded-box bg-base-100 shadow-xl"
                        style={{
                            top: position.top,
                            left: position.left,
                            minWidth: Math.max(position.width, 280), // Ensure minimum width for calendar
                        }}
                    >
                        {/* TODO: Replace with actual Calendar component */}
                        <div className="p-4">Calendar component not implemented yet</div>
                    </div>
                );
            })}
        </div>,
        document.body,
    );
}
