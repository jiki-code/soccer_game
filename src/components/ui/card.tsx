export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`rounded-2xl shadow-md bg-white/5 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`md:p-2 p-4 ${className}`}>{children}</div>;

export const ScrollArea = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`overflow-y-auto ${className}`}>{children}</div>;

