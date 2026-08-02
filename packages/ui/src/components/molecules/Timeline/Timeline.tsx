import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { RichText } from '@components';
import { cn } from '@utils';
import {
  timelineDescriptionListStyles,
  timelineDescriptionStyles,
  timelineItemStyles,
  timelineNodeStyles,
  timelineStyles,
  timelineTitleStyles,
} from './Timeline.styles';

export interface TimelineItem {
  id?: string;
  title: ReactNode;
  description: ReactNode[];
}

export type TimelineProps = HTMLAttributes<HTMLUListElement> & {
  items: TimelineItem[];
};

export const Timeline = forwardRef<HTMLUListElement, TimelineProps>(
  ({ items, className, ...props }, ref) => (
    <ul ref={ref} className={cn(timelineStyles, className)} {...props}>
      {items.map((item, index) => (
        <li key={item.id ?? index} className={timelineItemStyles}>
          <span className={timelineNodeStyles} />
          <RichText as="p" variant="p2" className={timelineTitleStyles}>
            {item.title}
          </RichText>
          <div className={timelineDescriptionListStyles}>
            {item.description.map((description, descriptionIndex) => (
              <RichText key={descriptionIndex} as="p" variant="p3" className={timelineDescriptionStyles}>
                {description}
              </RichText>
            ))}
          </div>
        </li>
      ))}
    </ul>
  ),
);

Timeline.displayName = 'Timeline';
