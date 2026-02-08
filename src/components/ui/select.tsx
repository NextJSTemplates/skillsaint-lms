"use client";
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  size,
} from "@floating-ui/react-dom";

import { cn } from "@/lib/utils";
import { ChevronDown } from "@/lib/icons";

// Types
interface SelectContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedValue: string;
  handleSelect: (value: string) => void;
  // eslint-disable-next-line
  refs: any;
  floatingStyles: React.CSSProperties;
  selectedLabel?: ReactNode;
}

interface SelectProps {
  children: ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

interface SelectTriggerProps {
  children: ReactNode;
  className?: string;
  dataState?: "error" | "default" | "success";
}

interface SelectValueProps {
  placeholder?: string;
  placeholderClass?: string;
  className?: string;
}

interface SelectContentProps {
  children: ReactNode;
  className?: string;
}

interface SelectItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

// Context for sharing state between compound components
const SelectContext = createContext<SelectContextType | null>(null);

const useSelectContext = (): SelectContextType => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used within Select");
  }
  return context;
};

// Helper to recursively find label from children based on value
const getLabel = (
  children: ReactNode,
  value: string,
): ReactNode | undefined => {
  let label: ReactNode | undefined;

  React.Children.forEach(children, (child) => {
    if (label) return; // Found
    if (!React.isValidElement(child)) return;

    const props = child.props as { value?: string; children?: ReactNode };

    if (props.value === value && props.children) {
      label = props.children;
      return;
    }

    if (props.children) {
      label = getLabel(props.children, value);
    }
  });

  return label;
};

// Main Select component
export const Select = ({
  children,
  value,
  onValueChange,
  defaultValue = "",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const currentValue = value !== undefined ? value : selectedValue;
  const selectedLabel = React.useMemo(
    () => getLabel(children, currentValue),
    [children, currentValue],
  );

  const { refs, floatingStyles } = useFloating({
    strategy: "fixed",
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      shift(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
    ],
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refs.reference.current instanceof HTMLElement &&
        !refs.reference.current.contains(event.target as Node) &&
        refs.floating.current &&
        !refs.floating.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, refs]);

  const handleSelect = (val: string): void => {
    if (value === undefined) {
      setSelectedValue(val);
    }
    onValueChange?.(val);
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedValue: currentValue,
        handleSelect,
        refs,
        floatingStyles,
        selectedLabel,
      }}
    >
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
};

// Trigger component
export const SelectTrigger = ({
  children,
  className,
  dataState,
}: SelectTriggerProps) => {
  const { isOpen, setIsOpen, refs } = useSelectContext();

  return (
    <button
      ref={refs.setReference}
      type="button"
      data-state={dataState}
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex h-11 w-full items-center justify-between gap-2.5 rounded-full border border-gray-200 bg-primary px-5 py-2.5 text-secondary transition-all hover:bg-slate-50 focus:border-purple-200 focus:shadow-[0_0_0_4px_rgba(70,95,255,0.12)] data-[state=error]:border-[#FB3748] sm:h-12",
        className,
      )}
    >
      {children}
      <ChevronDown
        className={`size-5 shrink-0 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

// Value display component
export const SelectValue = ({
  placeholder = "Select...",
  placeholderClass,
  className,
}: SelectValueProps) => {
  const { selectedValue, selectedLabel } = useSelectContext();

  return (
    <span
      className={cn(
        "text-sm leading-5 font-medium tracking-sm capitalize",
        className,
      )}
    >
      {selectedLabel || selectedValue || (
        <span className={cn("text-gray-400", placeholderClass)}>
          {placeholder}
        </span>
      )}
    </span>
  );
};

// Content wrapper component
export const SelectContent = ({ children, className }: SelectContentProps) => {
  const { isOpen, refs, floatingStyles } = useSelectContext();

  if (!isOpen) return null;

  return (
    <div
      ref={refs.setFloating}
      style={floatingStyles}
      className={cn(
        "absolute z-50 mt-1 w-full min-w-max overflow-hidden rounded-2xl bg-primary shadow-2xl",
        className,
      )}
    >
      <div className="max-h-68 overflow-auto px-1.5 py-2">{children}</div>
    </div>
  );
};

// Individual item component
export const SelectItem = ({ value, children, className }: SelectItemProps) => {
  const { selectedValue, handleSelect } = useSelectContext();
  const isSelected = selectedValue === value;

  return (
    <button
      type="button"
      data-state={isSelected ? "selected" : "default"}
      onClick={() => handleSelect(value)}
      className={cn(
        "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm leading-6 font-medium text-secondary capitalize transition-all hover:bg-gray-50 hover:text-purple-500",
        className,
        isSelected ? "bg-gray-50 text-purple-500" : "",
      )}
    >
      <span>{children}</span>
      {/* {isSelected && (
        <CheckIcon className="h-4 w-4 text-slate-900 flex-shrink-0 ml-2" />
      )} */}
    </button>
  );
};
