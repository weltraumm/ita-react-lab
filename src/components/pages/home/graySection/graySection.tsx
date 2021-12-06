import "./graySection.scss";

interface Props {
  title: string;
  children: JSX.Element;
}

export const GraySection: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <div className="gray_section">
      <p className="section_title">{title}</p>
      {children}
    </div>
  );
};
