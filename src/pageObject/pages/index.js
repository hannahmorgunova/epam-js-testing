const MainPage = require('./main.page');
const InvestorsPage = require('./investors.page');
const TravelAndHospitalityPage = require('./travelAndHospitality.page');
const ProjectToProductsPage = require('./projectToProduct.page');
const LocationsPage = require('./locations.page');
const JoinOurTeamPage = require('./joinOurTeam.page');
const PartnersPage = require('./partners.page');
const RelocateWithEpamPage = require('./relocateWithEpam.page');
const HistoryPage = require('./history.page');
const ContactUsPage = require('./contactUs.page');

function page(name) {
  const items = {
    main: new MainPage(),
    investors: new InvestorsPage(),
    travelAndHospitality: new TravelAndHospitalityPage(),
    projectToProduct: new ProjectToProductsPage(),
    locations: new LocationsPage(),
    joinOurTeam: new JoinOurTeamPage(),
    partners: new PartnersPage(),
    relocateWithEpam: new RelocateWithEpamPage(),
    history: new HistoryPage(),
    contactUs: new ContactUsPage(),
  };

  return items[name.replace(/^./, name[0].toLowerCase()).replace(/\s/g, '')];
}

module.exports = {
  MainPage,
  InvestorsPage,
  TravelAndHospitalityPage,
  ProjectToProductsPage,
  LocationsPage,
  JoinOurTeamPage,
  PartnersPage,
  RelocateWithEpamPage,
  HistoryPage,
  ContactUsPage,
  page,
};
