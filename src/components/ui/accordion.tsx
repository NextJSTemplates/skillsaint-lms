"use client";
import { ChevronDown } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types
type AccordionType = "single" | "multiple";

interface AccordionContextValue {
  toggleItem: (value: string) => void;
  isItemOpen: (value: string) => boolean;
  type: AccordionType;
}

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
}

interface AccordionProps {
  children: ReactNode;
  type?: AccordionType;
  collapsible?: boolean;
  defaultValue?: string | string[] | null;
  value?: string | string[];
  onValueChange?: (value: any) => void;
  className?: string;
}

interface AccordionItemProps {
  children: ReactNode;
  value: string;
  className?: string;
}

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

// Accordion Context
const AccordionContext = createContext<AccordionContextValue | null>(null);

const useAccordionContext = (): AccordionContextValue => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within Accordion");
  }
  return context;
};

// Accordion Item Context
const AccordionItemContext = createContext<AccordionItemContextValue | null>(
  null,
);

const useAccordionItemContext = (): AccordionItemContextValue => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordionTrigger and AccordionContent must be used within AccordionItem",
    );
  }
  return context;
};

// Main Accordion Component
export const Accordion = ({
  children,
  type = "single",
  collapsible = false,
  defaultValue = null,
  value: controlledValue,
  onValueChange,
  className,
}: AccordionProps) => {
  const isControlled = controlledValue !== undefined;

  const [internalOpenItems, setInternalOpenItems] = useState<string[]>(() => {
    if (isControlled) return [];
    if (!defaultValue) return [];
    if (type === "single") {
      return typeof defaultValue === "string" ? [defaultValue] : [];
    }
    return Array.isArray(defaultValue) ? defaultValue : [];
  });

  const openItems = isControlled
    ? typeof controlledValue === "string"
      ? controlledValue
        ? [controlledValue]
        : []
      : Array.isArray(controlledValue)
        ? controlledValue
        : []
    : internalOpenItems;

  const toggleItem = (itemValue: string): void => {
    let newOpenItems: string[] = [];

    if (type === "single") {
      const isOpen = openItems.includes(itemValue);
      if (isOpen && collapsible) {
        newOpenItems = [];
      } else if (isOpen) {
        newOpenItems = openItems;
      } else {
        newOpenItems = [itemValue];
      }
    } else {
      newOpenItems = openItems.includes(itemValue)
        ? openItems.filter((item) => item !== itemValue)
        : [...openItems, itemValue];
    }

    if (!isControlled) {
      setInternalOpenItems(newOpenItems);
    }

    if (onValueChange) {
      if (type === "single") {
        onValueChange(newOpenItems[0] || "");
      } else {
        onValueChange(newOpenItems);
      }
    }
  };

  const isItemOpen = (value: string): boolean => openItems.includes(value);

  return (
    <AccordionContext.Provider value={{ toggleItem, isItemOpen, type }}>
      <div className={cn(`w-full`, className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

// Accordion Item Component
export const AccordionItem = ({
  children,
  value,
  className,
}: AccordionItemProps) => {
  const { isItemOpen } = useAccordionContext();
  const isOpen = isItemOpen(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        data-state={isOpen ? "active" : "inactive"}
        className={cn(
          `rounded-[20px] bg-gray-50 px-2 transition-all duration-300 data-[state=active]:pb-2`,
          className,
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

// Accordion Trigger Component
export const AccordionTrigger = ({
  children,
  className,
}: AccordionTriggerProps) => {
  const { toggleItem } = useAccordionContext();
  const { value, isOpen } = useAccordionItemContext();

  return (
    <button
      onClick={() => toggleItem(value)}
      aria-expanded={isOpen}
      data-state={isOpen ? "active" : "inactive"}
      type="button"
      className={cn(
        `flex w-full capitalize items-start justify-between gap-x-3 px-4 pt-6 pb-6 text-start leading-6 font-medium tracking-base transition-all duration-300 data-[state=active]:pb-4`,
        className,
      )}
    >
      {children}
      <ChevronDown
        className={`shrink-0 text-secondary transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

// Accordion Content Component
export const AccordionContent = ({
  children,
  className,
}: AccordionContentProps) => {
  const { isOpen } = useAccordionItemContext();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: "auto",
            opacity: 1,
            transition: {
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.2, delay: 0.1 },
            },
          }}
          exit={{
            height: 0,
            opacity: 0,
            transition: {
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.1 },
            },
          }}
          className="origin-top overflow-hidden"
        >
          <div
            data-state={isOpen ? "active" : "inactive"}
            className={cn(
              `overflow-hidden rounded-2xl bg-primary p-4 leading-6 tracking-base text-secondary transition-all duration-200`,
              className,
            )}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
