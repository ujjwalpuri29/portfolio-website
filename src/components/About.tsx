const About = () => {
  const highlights = [
    {
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions with modern best practices"
    },
    {
      title: "Design First",
      description: "Creating intuitive interfaces that users love to interact with"
    },
    {
      title: "Fast Delivery",
      description: "Turning ideas into reality with efficient workflows and rapid iteration"
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a student software engineer and web designer who loves bringing ideas to life through code and creativity.
            With a passion for both functionality and aesthetics, I create digital experiences that make an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg hover:border-primary/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-7 w-7 text-primary" />
              </div> */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;