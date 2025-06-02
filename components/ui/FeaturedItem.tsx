import { CheckCircle } from "lucide-react";

const FeatureItem = ({ title }: { title: string }) => {
    return (
      <div className="group flex items-center space-x-3 mb-3">
        <div className="text-accent group-hover:text-primary transition-all duration-300">
          <CheckCircle size={18} />
        </div>
        <span className="text-gray-400 font-poppins">{title}</span>
      </div>
    );
  };

  export default FeatureItem;