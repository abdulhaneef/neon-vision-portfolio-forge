
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-8 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-light/70">
              &copy; {currentYear} Abdul Haneef Mohamad. All rights reserved.
            </p>
          </div>
          
          <div>
            <nav className="flex space-x-6">
              {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-light/70 hover:text-light transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-6 text-center text-light/50 text-sm">
          <p>
            This site was built with accessibility as a priority. If you experience any issues,
            please <a href="#contact" className="text-accent1 hover:underline">let me know</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
