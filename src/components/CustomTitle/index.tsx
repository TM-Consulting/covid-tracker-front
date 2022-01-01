import CustomTitleWrapper from "./CustomTitleWrapper";

const CustomTitle = ({ title, amt }: CustomTitleProps) => {
  return (
    <CustomTitleWrapper>
      <p>{title}</p>
      <h5>{amt}</h5>
    </CustomTitleWrapper>
  );
};

export default CustomTitle;
