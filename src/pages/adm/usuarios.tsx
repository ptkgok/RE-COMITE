import AppLayout from 'layouts/app';
import CreateUsers from 'organisms/forms/create-users';
import React from 'react';

const ManageUsersScreen: React.FC = () => {
  return (
    <AppLayout>
      <span>Gerenciar usuarios</span>
      <CreateUsers />
    </AppLayout>
  )
}

export default ManageUsersScreen;