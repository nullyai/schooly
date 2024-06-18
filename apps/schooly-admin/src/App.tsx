import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { AchievementList } from "./achievement/AchievementList";
import { AchievementCreate } from "./achievement/AchievementCreate";
import { AchievementEdit } from "./achievement/AchievementEdit";
import { AchievementShow } from "./achievement/AchievementShow";
import { TeacherList } from "./teacher/TeacherList";
import { TeacherCreate } from "./teacher/TeacherCreate";
import { TeacherEdit } from "./teacher/TeacherEdit";
import { TeacherShow } from "./teacher/TeacherShow";
import { InteractionList } from "./interaction/InteractionList";
import { InteractionCreate } from "./interaction/InteractionCreate";
import { InteractionEdit } from "./interaction/InteractionEdit";
import { InteractionShow } from "./interaction/InteractionShow";
import { ChallengeList } from "./challenge/ChallengeList";
import { ChallengeCreate } from "./challenge/ChallengeCreate";
import { ChallengeEdit } from "./challenge/ChallengeEdit";
import { ChallengeShow } from "./challenge/ChallengeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Schooly"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Achievement"
          list={AchievementList}
          edit={AchievementEdit}
          create={AchievementCreate}
          show={AchievementShow}
        />
        <Resource
          name="Teacher"
          list={TeacherList}
          edit={TeacherEdit}
          create={TeacherCreate}
          show={TeacherShow}
        />
        <Resource
          name="Interaction"
          list={InteractionList}
          edit={InteractionEdit}
          create={InteractionCreate}
          show={InteractionShow}
        />
        <Resource
          name="Challenge"
          list={ChallengeList}
          edit={ChallengeEdit}
          create={ChallengeCreate}
          show={ChallengeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
