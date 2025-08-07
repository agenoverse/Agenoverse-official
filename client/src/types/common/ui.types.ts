/**
 * Common UI Types for Agenoverse
 * Shared interfaces for UI components
 */

// Base Component Props
export interface BaseComponentProps {
  className?: string;
  id?: string;
  "data-testid"?: string;
}

// Loading Component Props
export interface LoadingProps extends BaseComponentProps {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "pulse";
  text?: string;
}

// Error Component Props
export interface ErrorProps extends BaseComponentProps {
  error: string | Error;
  onRetry?: () => void;
  showRetry?: boolean;
  variant?: "inline" | "card" | "banner";
}

// Modal Props
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

// Form Field Props
export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

// Button Variants
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

// Button Props
export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

// Card Props
export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  image?: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

// Navigation Item
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  children?: NavItem[];
}

// Theme Types
export type ThemeMode = "light" | "dark" | "system";

// Responsive Breakpoints
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
