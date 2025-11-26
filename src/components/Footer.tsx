const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Il Tuo Nome. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
