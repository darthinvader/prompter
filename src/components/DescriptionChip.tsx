import { Chip } from "@mui/material";
import { useDescriptions, useDescriptionsUpdate } from "./DescriptionContext";
// import {CloseIcon} from "@mui/icons-material/Close";
// import {DoneIcon} from "@mui/icons-material/Done";

const DescriptionChip = ({ label }) => {
  // const descriptionsUpdate = useDescriptionsUpdate();
  // const descriptions = useDescriptions();
  // TODO:: update on Click
  // TODO:: check if label in descriptions
  // const included = descriptions?.includes(label);
  // const handleIcon = () => (included ? <CloseIcon /> : <DoneIcon />);

  // const handleClick = () => {
  //   included ? descriptionsUpdate("") : null;
  // };
  return <Chip label={label} clickable />;
};
export default DescriptionChip;
