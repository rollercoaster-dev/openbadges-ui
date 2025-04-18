// src/services/AccessibilityAudit.ts
/**
 * Utility service for performing accessibility audits on components
 * This is a simple implementation for demonstration purposes
 */
export class AccessibilityAudit {
  /**
   * Performs a basic accessibility audit on an element
   * @param element The element to audit
   * @returns Array of issues found
   */
  static auditElement(element: HTMLElement): Array<{
    severity: 'error' | 'warning' | 'info';
    message: string;
    element: HTMLElement;
  }> {
    const issues: Array<{
      severity: 'error' | 'warning' | 'info';
      message: string;
      element: HTMLElement;
    }> = [];

    // Check for images without alt text
    const images = element.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('alt')) {
        issues.push({
          severity: 'error',
          message: 'Image is missing alt text',
          element: img as HTMLElement
        });
      }
    });

    // Check for form inputs without labels
    const inputs = element.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      if (id) {
        const label = element.querySelector(`label[for="${id}"]`);
        if (!label) {
          issues.push({
            severity: 'error',
            message: 'Form control is missing an associated label',
            element: input as HTMLElement
          });
        }
      } else {
        issues.push({
          severity: 'error',
          message: 'Form control is missing an ID for label association',
          element: input as HTMLElement
        });
      }
    });

    // Check for buttons without accessible names
    const buttons = element.querySelectorAll('button');
    buttons.forEach(button => {
      if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
        issues.push({
          severity: 'error',
          message: 'Button is missing an accessible name',
          element: button as HTMLElement
        });
      }
    });

    // Check for proper heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.substring(1));
      if (previousLevel > 0 && level > previousLevel + 1) {
        issues.push({
          severity: 'warning',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading as HTMLElement
        });
      }
      previousLevel = level;
    });

    // Check for color contrast (simplified check)
    const textElements = element.querySelectorAll('p, span, div, a, button, h1, h2, h3, h4, h5, h6');
    textElements.forEach(el => {
      const style = window.getComputedStyle(el);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // This is a simplified check - in a real implementation, 
      // you would use a proper color contrast algorithm
      if (color === backgroundColor) {
        issues.push({
          severity: 'warning',
          message: 'Text color matches background color, may have insufficient contrast',
          element: el as HTMLElement
        });
      }
    });

    // Check for interactive elements with small touch targets
    const interactiveElements = element.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        issues.push({
          severity: 'warning',
          message: 'Interactive element may be too small for touch targets (should be at least 44x44px)',
          element: el as HTMLElement
        });
      }
    });

    return issues;
  }

  /**
   * Checks if an element has proper ARIA attributes
   * @param element The element to check
   * @returns Array of issues found
   */
  static checkAriaAttributes(element: HTMLElement): Array<{
    severity: 'error' | 'warning' | 'info';
    message: string;
    element: HTMLElement;
  }> {
    const issues: Array<{
      severity: 'error' | 'warning' | 'info';
      message: string;
      element: HTMLElement;
    }> = [];

    // Check for elements with ARIA roles
    const elementsWithRoles = element.querySelectorAll('[role]');
    elementsWithRoles.forEach(el => {
      const role = el.getAttribute('role');
      
      // Check for common required attributes based on role
      if (role === 'checkbox' || role === 'switch') {
        if (!el.hasAttribute('aria-checked')) {
          issues.push({
            severity: 'error',
            message: `Element with role="${role}" is missing required aria-checked attribute`,
            element: el as HTMLElement
          });
        }
      }
      
      if (role === 'combobox' || role === 'listbox') {
        if (!el.hasAttribute('aria-expanded')) {
          issues.push({
            severity: 'error',
            message: `Element with role="${role}" is missing required aria-expanded attribute`,
            element: el as HTMLElement
          });
        }
      }
    });

    // Check for proper use of aria-label and aria-labelledby
    const elementsWithAriaLabel = element.querySelectorAll('[aria-label], [aria-labelledby]');
    elementsWithAriaLabel.forEach(el => {
      const ariaLabelledby = el.getAttribute('aria-labelledby');
      if (ariaLabelledby) {
        const labelElement = document.getElementById(ariaLabelledby);
        if (!labelElement) {
          issues.push({
            severity: 'error',
            message: `aria-labelledby references non-existent ID: ${ariaLabelledby}`,
            element: el as HTMLElement
          });
        }
      }
    });

    return issues;
  }

  /**
   * Checks keyboard navigation within an element
   * @param element The element to check
   * @returns Array of issues found
   */
  static checkKeyboardNavigation(element: HTMLElement): Array<{
    severity: 'error' | 'warning' | 'info';
    message: string;
    element: HTMLElement;
  }> {
    const issues: Array<{
      severity: 'error' | 'warning' | 'info';
      message: string;
      element: HTMLElement;
    }> = [];

    // Check for elements with tabindex > 0
    const elementsWithPositiveTabindex = element.querySelectorAll('[tabindex]');
    elementsWithPositiveTabindex.forEach(el => {
      const tabindex = parseInt(el.getAttribute('tabindex') || '0');
      if (tabindex > 0) {
        issues.push({
          severity: 'warning',
          message: `Element has tabindex=${tabindex}. Positive tabindex values should be avoided as they disrupt the natural tab order.`,
          element: el as HTMLElement
        });
      }
    });

    // Check for visible focus styles
    const interactiveElements = element.querySelectorAll('button, a, [role="button"], input, select, textarea');
    interactiveElements.forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.outlineStyle === 'none' && style.boxShadow === 'none') {
        issues.push({
          severity: 'warning',
          message: 'Interactive element may not have visible focus styles',
          element: el as HTMLElement
        });
      }
    });

    return issues;
  }
}
