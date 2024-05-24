import { Drawer, Box, Typography } from "@mui/material";
import Profile from "./Profile";
import { ArrowBack } from "@mui/icons-material";
import styled from "@emotion/styled";
const Header = styled(Box)`
  display: flex;
  background: #008069;
  height: 107px;
  color: #ffffff;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
const Text = styled(Box)``;
const drawerStyle = {
  left: 20,

  top: 17,

  height: "95%",

  width: "30%",

  boxShadow: "none",
};

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack onClick={() => setOpen(false)} />

        <Typography>Profile</Typography>
      </Header>

      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
