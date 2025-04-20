
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is where you would normally send the form data
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-light/80 mb-6">
              I'm always interested in new opportunities, collaborations, or just a friendly chat about accessibility and technology.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-accent1 font-medium mb-1">Email</h4>
                <p className="text-light/80">hello@alexmorgan.com</p>
              </div>
              <div>
                <h4 className="text-accent1 font-medium mb-1">Location</h4>
                <p className="text-light/80">San Francisco, California</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {/* Social Icons - placeholders */}
              {['twitter', 'linkedin', 'github'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com/alexmorgan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-light/80 hover:bg-accent1 hover:text-light transition-colors"
                  aria-label={`Visit my ${social} profile`}
                >
                  {social.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-muted">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your Name" 
                        required 
                        className="bg-muted/50 border-muted"
                        aria-required="true"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                        className="bg-muted/50 border-muted"
                        aria-required="true"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What's this about?" 
                        className="bg-muted/50 border-muted"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message..." 
                        required 
                        className="min-h-32 bg-muted/50 border-muted"
                        aria-required="true"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full mt-2">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
