import React, { useEffect, useState } from 'react';
import AppLayout from '@layouts/app';
import { DoubleElementsInRow, Column } from '@layouts/common';
import { CriarOrgaosForm, Table } from 'organisms';
import axios from 'axios';
import AddHoursForm from '@organisms/forms/adicionar-horarios';


const ManageHoursScreen: React.FC = () => {
  const [hours, setHours] = useState([])
  console.log(hours)

  useEffect(() => {
    ; (async () => {
      const { data } = await axios.get('/api/horarios/list-all')
      setHours(data)
    })()
  }, [])

  return (
    <AppLayout>
      <DoubleElementsInRow style={{ alignItems: 'flex-start' }}>
        <Column>
          <span>Adicionar Horarios</span>
          <AddHoursForm />
        </Column>
        <Column>
          <span>Horarios</span>
          <Table data={hours} contents={['posto', 'data']} />
        </Column>
      </DoubleElementsInRow>
    </AppLayout>
  )
}

export default ManageHoursScreen;