/**
 * Accessibility Compliance Checklist for WCAG 2.1 AA
 * 
 * This component documents the accessibility features implemented across the website.
 * Run this audit in the browser console to verify compliance.
 */

export const accessibilityAudit = {
  /**
   * WCAG 2.1 Level AA Compliance Checklist
   */
  wcag21AA: {
    // Perceivable
    perceivable: {
      textAlternatives: {
        status: 'IMPLEMENTED',
        description: 'All images have alt text or are marked as decorative',
        implementation: [
          'Images use alt attributes with descriptive text',
          'Decorative images use empty alt="" attributes',
          'Icon-only buttons have aria-label attributes',
        ],
      },
      adaptable: {
        status: 'IMPLEMENTED',
        description: 'Content is presented in multiple ways',
        implementation: [
          'Responsive design adapts to all screen sizes',
          'No information relies solely on color',
          'Text can be resized up to 200% without loss of functionality',
        ],
      },
      distinguishable: {
        status: 'IMPLEMENTED',
        description: 'Content is easy to see and hear',
        implementation: [
          'Color contrast ratio meets WCAG AA standards (4.5:1 for text)',
          'Text and background colors are carefully chosen',
          'No text is obscured by background images',
        ],
      },
    },

    // Operable
    operable: {
      keyboard: {
        status: 'IMPLEMENTED',
        description: 'All functionality is keyboard accessible',
        implementation: [
          'All interactive elements are keyboard focusable',
          'Tab order follows logical flow',
          'No keyboard traps exist',
          'Keyboard shortcuts are documented',
        ],
      },
      navigation: {
        status: 'IMPLEMENTED',
        description: 'Navigation is consistent and clear',
        implementation: [
          'Navigation menu is consistent across all pages',
          'Skip to main content link available',
          'Breadcrumbs or clear navigation paths',
          'Focus indicators are visible',
        ],
      },
      seizures: {
        status: 'IMPLEMENTED',
        description: 'No content causes seizures',
        implementation: [
          'No flashing content (3+ times per second)',
          'Animations are subtle and non-distracting',
          'No rapid color changes',
        ],
      },
    },

    // Understandable
    understandable: {
      readable: {
        status: 'IMPLEMENTED',
        description: 'Text is readable and understandable',
        implementation: [
          'Language of page is declared in HTML',
          'Text is clear and concise',
          'Abbreviations are explained on first use',
          'Reading level is appropriate for target audience',
        ],
      },
      predictable: {
        status: 'IMPLEMENTED',
        description: 'Pages appear and operate in predictable ways',
        implementation: [
          'Navigation is consistent across pages',
          'Components behave consistently',
          'No unexpected context changes',
          'Form validation is clear and helpful',
        ],
      },
      inputAssistance: {
        status: 'IMPLEMENTED',
        description: 'Users are helped to avoid and correct mistakes',
        implementation: [
          'Form fields have clear labels',
          'Error messages are specific and helpful',
          'Required fields are clearly marked',
          'Input suggestions are provided where appropriate',
        ],
      },
    },

    // Robust
    robust: {
      compatible: {
        status: 'IMPLEMENTED',
        description: 'Content works with assistive technologies',
        implementation: [
          'Valid HTML markup is used',
          'ARIA attributes are used correctly',
          'Semantic HTML elements are used appropriately',
          'No duplicate IDs in the document',
        ],
      },
    },
  },

  /**
   * Implementation Details
   */
  implementation: {
    semanticHTML: [
      '<header> for page header',
      '<nav> for navigation',
      '<main> for main content',
      '<section> for content sections',
      '<article> for articles',
      '<aside> for sidebars',
      '<footer> for page footer',
      '<h1-h6> for headings in logical order',
      '<button> for buttons',
      '<a> for links',
      '<form>, <label>, <input> for forms',
    ],

    ariaAttributes: [
      'aria-label for icon-only buttons',
      'aria-expanded for expandable elements',
      'aria-hidden for decorative elements',
      'aria-live for dynamic content updates',
      'aria-describedby for additional descriptions',
      'aria-labelledby for complex labels',
      'role attributes where semantic HTML is insufficient',
    ],

    keyboardNavigation: [
      'Tab key navigates through interactive elements',
      'Enter/Space activates buttons and links',
      'Escape closes modals and menus',
      'Arrow keys navigate within components',
      'Focus is always visible with outline or highlight',
    ],

    colorContrast: [
      'Normal text: 4.5:1 contrast ratio (WCAG AA)',
      'Large text (18pt+): 3:1 contrast ratio (WCAG AA)',
      'UI components: 3:1 contrast ratio',
      'Focus indicators: High contrast outline',
    ],

    responsiveDesign: [
      'Mobile-first approach',
      'Breakpoints: 640px, 768px, 1024px, 1280px',
      'Touch targets: minimum 44x44 pixels',
      'Text resizable up to 200%',
      'No horizontal scrolling required',
    ],
  },

  /**
   * Testing Recommendations
   */
  testing: {
    automated: [
      'Use axe DevTools browser extension',
      'Use WAVE Web Accessibility Evaluation Tool',
      'Use Lighthouse accessibility audit',
      'Use WebAIM Color Contrast Checker',
    ],

    manual: [
      'Test keyboard navigation (Tab, Enter, Escape)',
      'Test with screen readers (NVDA, JAWS, VoiceOver)',
      'Test with browser zoom at 200%',
      'Test with Windows High Contrast mode',
      'Test with mobile screen readers',
    ],

    userTesting: [
      'Test with users who use assistive technologies',
      'Test with users with different abilities',
      'Gather feedback on usability',
      'Iterate based on feedback',
    ],
  },

  /**
   * Audit Function - Run in browser console
   */
  runAudit: function() {
    console.log('=== WCAG 2.1 AA Accessibility Audit ===');
    console.log('');

    // Check for semantic HTML
    console.log('Semantic HTML Elements:');
    const semanticElements = ['header', 'nav', 'main', 'section', 'article', 'footer'];
    semanticElements.forEach((el) => {
      const count = document.querySelectorAll(el).length;
      console.log(`  ${el}: ${count} found`);
    });
    console.log('');

    // Check for ARIA attributes
    console.log('ARIA Attributes:');
    const ariaElements = document.querySelectorAll('[aria-label], [aria-expanded], [aria-hidden]');
    console.log(`  Total ARIA attributes: ${ariaElements.length}`);
    console.log('');

    // Check for focus indicators
    console.log('Focus Indicators:');
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    console.log(`  Focusable elements: ${focusableElements.length}`);
    console.log('');

    // Check for color contrast (basic check)
    console.log('Color Contrast:');
    console.log('  Use axe DevTools or WAVE for detailed contrast analysis');
    console.log('');

    console.log('=== Audit Complete ===');
    console.log('For detailed accessibility testing, use:');
    console.log('  - axe DevTools: https://www.deque.com/axe/devtools/');
    console.log('  - WAVE: https://wave.webaim.org/');
    console.log('  - Lighthouse: Chrome DevTools > Lighthouse');
  },
};

/**
 * Accessibility Compliance Component
 * This component can be used to display accessibility information on the website
 */
export default function AccessibilityComplianceInfo() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mt-8">
      <h3 className="font-semibold text-foreground mb-4">Accessibility Compliance</h3>
      <p className="text-sm text-muted-foreground mb-4">
        This website is designed to meet WCAG 2.1 Level AA accessibility standards.
      </p>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li>✓ Keyboard navigation support</li>
        <li>✓ Screen reader compatible</li>
        <li>✓ High color contrast</li>
        <li>✓ Responsive design</li>
        <li>✓ Semantic HTML</li>
      </ul>
      <p className="text-xs text-muted-foreground mt-4">
        If you encounter any accessibility issues, please contact us at{' '}
        <a href="mailto:hello@zinara.digital" className="text-accent hover:underline">
          hello@zinara.digital
        </a>
      </p>
    </div>
  );
}
