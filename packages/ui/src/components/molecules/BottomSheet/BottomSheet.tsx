import { forwardRef, useRef, type HTMLAttributes, type ReactNode } from 'react';
import { RichText } from '@components';
import { useDelayedUnmount, useDismissableLayer, useMergedRef } from '@hooks';
import { cn } from '@utils';
import {
  bottomSheetFooterStyles,
  bottomSheetHandleStyles,
  bottomSheetOverlayStyles,
  bottomSheetPanelStyles,
  bottomSheetTitleStyles,
} from './BottomSheet.styles';

const EXIT_DURATION_MS = 200;

export type BottomSheetProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  closeOnBackdropClick?: boolean;
};

export const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
  (
    { open, onClose, title, footer, closeOnBackdropClick = true, className, children, ...props },
    ref,
  ) => {
    const panelRef = useRef<HTMLDivElement | null>(null);
    const setPanelRef = useMergedRef(ref, panelRef);
    const { mounted, visible } = useDelayedUnmount(open, EXIT_DURATION_MS);

    useDismissableLayer(open, onClose, panelRef, closeOnBackdropClick);

    if (!mounted) {
      return null;
    }

    return (
      <div className={bottomSheetOverlayStyles({ visible })}>
        <div
          ref={setPanelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'bottom-sheet-title' : undefined}
          className={cn(bottomSheetPanelStyles({ visible }), className)}
          {...props}
        >
          <div aria-hidden className={bottomSheetHandleStyles} />
          {title && (
            <RichText as="h2" id="bottom-sheet-title" variant="s1" className={bottomSheetTitleStyles}>
              {title}
            </RichText>
          )}
          {children}
          {footer && <div className={bottomSheetFooterStyles}>{footer}</div>}
        </div>
      </div>
    );
  },
);

BottomSheet.displayName = 'BottomSheet';
