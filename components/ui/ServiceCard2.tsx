interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-background p-6 rounded-lg border border-border hover:border-accent transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/20">
      <div className="text-[#6a59ee] group-hover:text-primary mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 font-montserrat text-text">
        {title}
      </h3>
      <p className="text-text/80 font-poppins">{description}</p>
    </div>
  );
};

export default ServiceCard;