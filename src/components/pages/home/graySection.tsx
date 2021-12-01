import "./graySection.scss";

interface Props {
  title: string;
}

export const GraySection: React.FC<Props> = (props) => {
  return (
    <div className="gray_section">
      <p className="section_title">{props.title}</p>
      {props.children}
    </div>
  );
};
