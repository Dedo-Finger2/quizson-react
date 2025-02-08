type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-orange-900/10 w-45 h-55 rounded-xl border border-orange-400/15 p-4 flex flex-col gap-4">
      {icon}
      <div className="flex flex-col gap-5">
        <span className="font-bold text-md">{title}</span>
        <span className="text-sm text-orange-200/90">{description}</span>
      </div>
    </div>
  );
}

export default FeatureCard;
