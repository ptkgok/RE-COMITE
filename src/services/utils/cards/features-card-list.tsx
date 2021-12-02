import React from 'react'
import { BiCalendarPlus, BiHistory, BiHourglass, BiIdCard, BiListUl, BiLocationPlus, BiReceipt, BiUser } from 'react-icons/bi'

export const FeaturesCardList = [
  {
    icon: <BiListUl size="1.2rem" />,
    title: 'Listar',
    description: 'Liste todos os RGS agendados e pesquise por um específico.',
    url: '/listar-todos'
  },
  {
    icon: <BiCalendarPlus size="1.2rem" />,
    title: 'Agendar RG',
    description: 'Agendar um dia para emissão de rg do cidadão',
    url: '/agendar-rg'
  },
  {
    icon: <BiReceipt size="1.2rem" />,
    title: 'Relatório',
    description:
      'Relatório de Agendamento, Reeimpressão e Produtividade diária',
    url: '/relatorios'
  },
  {
    icon: <BiIdCard size="1.2rem" />,
    title: 'Certidão',
    description: 'Registrar Solicitação de Certidão',
    url: '/solicitar-certidao'
  }
]