const ServiceCard = ({ skills, index }) => {
  const Icon = skills.icon;

  return (
    <div
      className="hover-lift group animate-blur-reveal relative rounded-2xl border border-border  bg-black p-8 transition-all duration-500 hover:border-white/50"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect */}
      <div className="bg-background absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

      {/* Icon */}
      <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary transition-colors duration-300 group-hover:bg-gold/10">
        <Icon className="h-7 w-7 text-sky-300" />
      </div>

      {/* Content */}
      <h3 className="group-hover:text-gradient-white mb-3 font-display text-xl font-medium transition-all duration-300">
        {skills.title}
      </h3>

      <p className="leading-relaxed text-muted-foreground">
        {skills.description}
      </p>

      {/* Decorative Corner */}
      <div className="absolute right-4 top-4 h-8 w-8 rounded-tr-lg border-r border-t border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-4 left-4 h-8 w-8 rounded-bl-lg border-b border-l border-gold/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

export default ServiceCard;
