// src/services/AccessibilityService.ts
/**
 * Utility service for accessibility-related functionality
 */
export class AccessibilityService {
  /**
   * Generates accessible alt text for badge images
   * @param badgeName The name of the badge
   * @returns Formatted alt text
   */
  static generateBadgeAltText(badgeName: string): string {
    return `Badge: ${badgeName}`;
  }

  /**
   * Formats a date for display in an accessible way
   * @param dateString ISO date string
   * @returns Formatted date string
   */
  static formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date);
    } catch (e) {
      return dateString;
    }
  }

  /**
   * Gets initials from a name for avatar placeholders
   * @param name Full name
   * @param maxLength Maximum number of characters to return
   * @returns Uppercase initials
   */
  static getInitials(name: string, maxLength = 2): string {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, maxLength);
  }

  /**
   * Truncates text with ellipsis if it exceeds maxLength
   * @param text Text to truncate
   * @param maxLength Maximum length before truncation
   * @returns Truncated text with ellipsis if needed
   */
  static truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {return text;}
    return text.substring(0, maxLength) + '…';
  }

  /**
   * Checks if a color has sufficient contrast against white or black
   * Simple implementation - for production use a full WCAG contrast checker
   * @param hexColor Hex color code (e.g., "#3182ce")
   * @returns Whether the color likely has sufficient contrast
   */
  static hasGoodContrast(hexColor: string): boolean {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate relative luminance
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    
    // Return true if the color is likely to have good contrast
    return luminance > 128;
  }

  /**
   * Applies a theme to the document by adding a class to the body
   * @param themeName Name of the theme to apply
   */
  static applyTheme(themeName: 'default' | 'dark' | 'high-contrast' | 'large-text' | 'dyslexia-friendly'): void {
    // Remove any existing theme classes
    document.body.classList.remove(
      'manus-dark-theme',
      'manus-high-contrast-theme',
      'manus-large-text-theme',
      'manus-dyslexia-friendly-theme'
    );
    
    // Add the new theme class if not default
    if (themeName !== 'default') {
      document.body.classList.add(`manus-${themeName}-theme`);
    }
  }

  /**
   * Checks if reduced motion is preferred
   * @returns Whether reduced motion is preferred
   */
  static prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
