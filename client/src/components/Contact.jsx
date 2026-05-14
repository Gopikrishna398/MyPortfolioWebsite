import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Replace this URL with your actual backend service endpoint later
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Simulating a successful backend response for now
      // In reality, you'd check: if (response.ok) { ... }
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);

    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
            What's Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Get In Touch
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-white/10 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-300 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-300 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-300 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all resize-none"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="mt-4 w-full py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg hover:shadow-primary/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : status === 'success' ? (
                'Message Sent Successfully!'
              ) : status === 'error' ? (
                'Failed to send. Try again.'
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default Contact;
