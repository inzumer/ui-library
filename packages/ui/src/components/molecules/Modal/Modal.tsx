import { forwardRef, useRef, type HTMLAttributes, type ReactNode } from 'react';
import { RichText } from '@components';
import { useDelayedUnmount, useDismissableLayer, useMergedRef } from '@hooks';
import { cn } from '@utils';
import {
  modalFooterStyles,
  modalOverlayStyles,
  modalPanelStyles,
  modalTitleStyles,
} from './Modal.styles';

const EXIT_DURATION_MS = 200;

export type ModalProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  closeOnBackdropClick?: boolean;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
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
      <div className={modalOverlayStyles({ visible })}>
        <div
          ref={setPanelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          className={cn(modalPanelStyles({ visible }), className)}
          {...props}
        >
          {title && (
            <RichText as="h2" id="modal-title" variant="s1" className={modalTitleStyles}>
              {title}
            </RichText>
          )}
          {children}
          {footer && <div className={modalFooterStyles}>{footer}</div>}
        </div>
      </div>
    );
  },
);

Modal.displayName = 'Modal';
