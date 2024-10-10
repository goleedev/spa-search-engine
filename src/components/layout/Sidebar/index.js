import { cloneElement } from "react";

import { ContactsIcon, FilesIcon, HomeIcon, InfoIcon, SearchIcon, SettingIcon, SuitcaseIcon } from "../../../assets";
import theme from "../../../styles/theme";
import * as S from "./styles";

const ICONS_MAP = {
  HomeIcon: <HomeIcon />,
  SuitcaseIcon: <SuitcaseIcon />,
  ContactsIcon: <ContactsIcon />,
  FilesIcon: <FilesIcon />,
  SearchIcon: <SearchIcon />,
  SettingIcon: <SettingIcon />,
  InfoIcon: <InfoIcon />,
};

const SidebarItem = ({ icon, isActive }) => {
  const strokeColor = isActive ? theme.colors.primaryDark : theme.colors.primaryMutedDark;

  return <S.SidebarItem isActive={isActive}>{cloneElement(icon, { stroke: strokeColor })}</S.SidebarItem>;
};

const Sidebar = () => {
  const activeIconName = "SearchIcon";

  return (
    <S.SidebarContainer>
      <S.Logo src="/icon.png" />

      <S.SidebarItems>
        {Object.entries(ICONS_MAP).map(([key, icon]) => (
          <SidebarItem key={key} icon={icon} isActive={key === activeIconName} />
        ))}
      </S.SidebarItems>
    </S.SidebarContainer>
  );
};

export default Sidebar;
