import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DonorList } from "./donor/DonorList";
import { DonorCreate } from "./donor/DonorCreate";
import { DonorEdit } from "./donor/DonorEdit";
import { DonorShow } from "./donor/DonorShow";
import { BloodRequestList } from "./bloodRequest/BloodRequestList";
import { BloodRequestCreate } from "./bloodRequest/BloodRequestCreate";
import { BloodRequestEdit } from "./bloodRequest/BloodRequestEdit";
import { BloodRequestShow } from "./bloodRequest/BloodRequestShow";
import { BloodBankList } from "./bloodBank/BloodBankList";
import { BloodBankCreate } from "./bloodBank/BloodBankCreate";
import { BloodBankEdit } from "./bloodBank/BloodBankEdit";
import { BloodBankShow } from "./bloodBank/BloodBankShow";
import { DonationList } from "./donation/DonationList";
import { DonationCreate } from "./donation/DonationCreate";
import { DonationEdit } from "./donation/DonationEdit";
import { DonationShow } from "./donation/DonationShow";
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
        title={"Blood Bank Management Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Donor"
          list={DonorList}
          edit={DonorEdit}
          create={DonorCreate}
          show={DonorShow}
        />
        <Resource
          name="BloodRequest"
          list={BloodRequestList}
          edit={BloodRequestEdit}
          create={BloodRequestCreate}
          show={BloodRequestShow}
        />
        <Resource
          name="BloodBank"
          list={BloodBankList}
          edit={BloodBankEdit}
          create={BloodBankCreate}
          show={BloodBankShow}
        />
        <Resource
          name="Donation"
          list={DonationList}
          edit={DonationEdit}
          create={DonationCreate}
          show={DonationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
