import { describe, it, expect, beforeEach, vi } from 'vitest';
import { z } from 'zod';

// Test schema validation (mirrors the actual form schema)
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

describe('ContactForm Validation', () => {
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
  });
});
