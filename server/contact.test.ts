import { describe, it, expect, beforeEach, vi } from 'vitest';
import { z } from 'zod';

// Test schema validation (mirrors the actual form schema)
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

describe('Contact Form Validation', () => {
  describe('name field', () => {
    it('should reject names shorter than 2 characters', () => {
      const result = contactFormSchema.safeParse({
        name: 'A',
        email: 'test@example.com',
        message: 'This is a valid message',
      });
      expect(result.success).toBe(false);
    });

    it('should accept valid names', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'test@example.com',
        message: 'This is a valid message',
      });
      expect(result.success).toBe(true);
    });
  });

  describe('email field', () => {
    it('should reject invalid email addresses', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'invalid-email',
        message: 'This is a valid message',
      });
      expect(result.success).toBe(false);
    });

    it('should accept valid email addresses', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a valid message',
      });
      expect(result.success).toBe(true);
    });

    it('should accept various valid email formats', () => {
      const validEmails = [
        'user@example.com',
        'user.name@example.com',
        'user+tag@example.co.uk',
        'user_name@example.org',
      ];

      validEmails.forEach((email) => {
        const result = contactFormSchema.safeParse({
          name: 'John Doe',
          email,
          message: 'This is a valid message',
        });
        expect(result.success).toBe(true);
      });
    });
  });

  describe('message field', () => {
    it('should reject messages shorter than 10 characters', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'test@example.com',
        message: 'Short',
      });
      expect(result.success).toBe(false);
    });

    it('should accept messages with 10 or more characters', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'test@example.com',
        message: 'This is a valid message',
      });
      expect(result.success).toBe(true);
    });

    it('should accept long messages', () => {
      const longMessage = 'A'.repeat(500);
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'test@example.com',
        message: longMessage,
      });
      expect(result.success).toBe(true);
    });
  });

  describe('company field', () => {
    it('should be optional', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'test@example.com',
        message: 'This is a valid message',
      });
      expect(result.success).toBe(true);
    });

    it('should accept company names when provided', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'test@example.com',
        company: 'Acme Corp',
        message: 'This is a valid message',
      });
      expect(result.success).toBe(true);
    });

    it('should accept empty string as company', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'test@example.com',
        company: '',
        message: 'This is a valid message',
      });
      expect(result.success).toBe(true);
    });
  });

  describe('complete form validation', () => {
    it('should validate a complete form submission', () => {
      const result = contactFormSchema.safeParse({
        name: 'Jane Smith',
        email: 'jane@example.com',
        company: 'Tech Startup',
        message: 'I am interested in learning more about your AI systems architecture services.',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('Jane Smith');
        expect(result.data.email).toBe('jane@example.com');
        expect(result.data.company).toBe('Tech Startup');
      }
    });

    it('should reject incomplete form submission', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'test@example.com',
      });
      expect(result.success).toBe(false);
    });

    it('should handle form data with special characters', () => {
      const result = contactFormSchema.safeParse({
        name: "O'Brien & Associates",
        email: 'test@example.com',
        company: 'Smith, Johnson & Co.',
        message: 'We need help with "AI systems" & digital strategy (urgent)',
      });
      expect(result.success).toBe(true);
    });

    it('should handle form data with unicode characters', () => {
      const result = contactFormSchema.safeParse({
        name: 'José García',
        email: 'test@example.com',
        company: '北京科技公司',
        message: 'Nous avons besoin daide avec les systèmes IA et la stratégie numérique.',
      });
      expect(result.success).toBe(true);
    });

    it('should reject form with all fields empty', () => {
      const result = contactFormSchema.safeParse({
        name: '',
        email: '',
        message: '',
      });
      expect(result.success).toBe(false);
    });

    it('should provide specific error messages for invalid fields', () => {
      const result = contactFormSchema.safeParse({
        name: 'A',
        email: 'invalid',
        message: 'short',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.length).toBeGreaterThan(0);
      }
    });
  });

  describe('edge cases', () => {
    it('should handle whitespace in names', () => {
      const result = contactFormSchema.safeParse({
        name: '  John Doe  ',
        email: 'test@example.com',
        message: 'This is a valid message',
      });
      // Note: Zod doesn't trim by default, so this will pass
      expect(result.success).toBe(true);
    });

    it('should handle maximum length inputs', () => {
      const result = contactFormSchema.safeParse({
        name: 'A'.repeat(255),
        email: 'test@example.com',
        message: 'A'.repeat(5000),
      });
      expect(result.success).toBe(true);
    });

    it('should reject null values', () => {
      const result = contactFormSchema.safeParse({
        name: null,
        email: 'test@example.com',
        message: 'This is a valid message',
      });
      expect(result.success).toBe(false);
    });

    it('should reject undefined values', () => {
      const result = contactFormSchema.safeParse({
        name: undefined,
        email: 'test@example.com',
        message: 'This is a valid message',
      });
      expect(result.success).toBe(false);
    });
  });
});
