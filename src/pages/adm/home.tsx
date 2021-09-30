import { TitleOfSection } from 'atoms/title-section';
import AppLayout from 'layouts/app';
import ListOfOptionsFeatures from 'organisms/list-of-options-features';
import ListOfOptionsFeaturesSmallCard from 'organisms/list-of-options-features-small-card';
import React from 'react';
import { FeaturesCardList, FeaturesCardListAdm } from 'services/utils/features-card-list';

const HomeAdminScreen: React.FC = () => {
  return (
    <AppLayout>
      <TitleOfSection>Recursos Administrativos</TitleOfSection>
      <ListOfOptionsFeaturesSmallCard list={FeaturesCardListAdm} />
      
      <TitleOfSection>Recursos Comuns</TitleOfSection>
      <ListOfOptionsFeatures list={FeaturesCardList} />
    </AppLayout>
  )
}

export default HomeAdminScreen;