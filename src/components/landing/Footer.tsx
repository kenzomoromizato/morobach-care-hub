const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h3 className="font-serif text-2xl text-foreground mb-8 tracking-wide">
          Morobach
        </h3>
        <div className="gold-line mb-8" />

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 font-sans text-sm text-muted-foreground">
          <a href="tel:+5500000000000" className="hover:text-foreground transition-colors">
            Telefone
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a href="https://wa.me/5500000000000" className="hover:text-foreground transition-colors">
            WhatsApp
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a href="mailto:contato@morobach.com.br" className="hover:text-foreground transition-colors">
            contato@morobach.com.br
          </a>
        </div>

        <p className="font-serif text-sm text-muted-foreground italic">
          Morobach — Medicina preventiva onde a vida acontece.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
