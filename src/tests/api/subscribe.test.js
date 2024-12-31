import handler from '@/pages/api/subscribe';

describe('Subscribe API', () => {
    it('returns 405 for non-POST requests', async () => {
      const req = { method: 'GET' };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
  
      await handler(req, res);
  
      expect(res.status).toHaveBeenCalledWith(405);
      expect(res.json).toHaveBeenCalledWith({ error: 'Method not allowed' });
    });
  
    it('validates email format', async () => {
      const req = {
        method: 'POST',
        body: JSON.stringify({ email: 'invalid-email' }),
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
  
      await handler(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid email address' });
    });
  
    it('handles successful subscription', async () => {
      const req = {
        method: 'POST',
        body: JSON.stringify({ email: 'test@example.com' }),
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
  
      await handler(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ 
        message: 'Successfully joined! Check your email.' 
      });
    });
  });