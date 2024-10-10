import Sidebar from "../Sidebar";
import UserProfile from "../UserProfile";
import * as S from "./styles";

const DashboardLayout = ({ children }) => (
  <S.DashboardLayout>
    <Sidebar />

    <S.MainContent>
      <S.Header>
        <UserProfile name="Name Surname" initials="CC" />
      </S.Header>

      {children}
    </S.MainContent>
  </S.DashboardLayout>
);

export default DashboardLayout;
