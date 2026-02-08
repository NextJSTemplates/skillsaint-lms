import React, { ReactElement, ReactNode, Ref } from "react";

type SlotProps = {
  children: ReactNode;
  ref?: Ref<any>;
};

export function Slot({ children, ref, ...props }: SlotProps) {
  if (!React.isValidElement(children)) {
    return null;
  }

  const originalRef = (children as any).ref;

  return React.cloneElement(children as ReactElement<any>, {
    ...props,
    ref: (node: HTMLElement) => {
      // Forward outer ref
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }

      // Preserve child's original ref
      if (typeof originalRef === "function") {
        originalRef(node);
      } else if (originalRef && typeof originalRef === "object") {
        (originalRef as React.MutableRefObject<HTMLElement | null>).current =
          node;
      }
    },
  });
}
