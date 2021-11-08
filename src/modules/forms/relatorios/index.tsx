import Button from 'atomic/atoms/button'
import Input from 'atomic/atoms/input'
import Select from 'atomic/atoms/select'
import { SelectData } from 'atomic/atoms/select/test-data'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiAbacus, BiArrowBack } from 'react-icons/bi'

import * as O from './styles'

const Relatorios: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState('')
  console.log(result)
  const onSubmit = data => setResult(data)

  const [option, setOption] = useState(0)

  return (
    <>
      <O.Container_Centralize>
        {option === 0 && (
          <>
            <Button
              title="Relatório De Produtividade Diária"
              height="40px"
              width="100%"
              icon={<BiAbacus />}
              onClick={() => setOption(1)}
            />
            <Button
              title="Relatório de Reeimpressão"
              height="40px"
              width="100%"
              icon={<BiAbacus />}
              onClick={() => setOption(2)}
            />
            <Button
              title="Relatório De Agendamento"
              height="40px"
              width="100%"
              icon={<BiAbacus />}
              onClick={() => setOption(3)}
            />
          </>
        )}

        {option === 1 && (
          <O.Container_Form onSubmit={handleSubmit(onSubmit)}>
            <h4>
              <BiArrowBack onClick={() => window.location.reload()} /> Relatório
              de Produtividade Diária
            </h4>
            <Select
              title="Status"
              reg={{ ...register('status') }}
              options={SelectData}
            />
            <Input title="Orgao Solicitante" reg={{ ...register('orgao') }} />
            <Input
              title="Data de Solicitação Inicial"
              reg={{ ...register('data_de_agendamento_inicial') }}
              type="date"
            />
            <Input
              title="Data de Solicitação Final"
              reg={{ ...register('data_de_agendamento_final') }}
              type="date"
            />

            <Select
              title="Local de Agendamento"
              reg={{ ...register('local_de_agendamento') }}
              options={SelectData}
            />

            <Button
              title="Enviar"
              height="40px"
              width="100%"
              icon={<BiAbacus />}
            />
          </O.Container_Form>
        )}

        {option === 2 && (
          <O.Container_Form onSubmit={handleSubmit(onSubmit)}>
            <h4>
              <BiArrowBack onClick={() => window.location.reload()} /> Relatório
              de Reeimpressão
            </h4>
            <Input
              title="Nome Completo"
              reg={{ ...register('nome_completo') }}
            />
            <Input title="Nome da Mãe" reg={{ ...register('nome_da_mae') }} />

            <Input
              title="Data de Solicitação Inicial"
              reg={{ ...register('data_de_solicitaçao_inicial') }}
            />
            <Input
              title="Data de Solicitação Final"
              reg={{ ...register('data_de_solicitaçao_final') }}
            />
            <Button
              title="Enviar"
              height="40px"
              width="100%"
              icon={<BiAbacus />}
            />
          </O.Container_Form>
        )}

        {option === 3 && (
          <O.Container_Form onSubmit={handleSubmit(onSubmit)}>
            <h4>
              <BiArrowBack onClick={() => window.location.reload()} /> Relatório
              De Agendamento
            </h4>
            <Select
              title="Status"
              reg={{ ...register('status') }}
              options={SelectData}
            />
            <Input title="Orgao Solicitante" reg={{ ...register('orgao') }} />
            <Input
              title="Data de Agendamento Inicial"
              reg={{ ...register('data_de_solicitaçao_inicial') }}
            />
            <Input
              title="Data de Agendamento Final"
              reg={{ ...register('data_de_solicitaçao_final') }}
            />
            <Button
              title="Enviar"
              height="40px"
              width="100%"
              icon={<BiAbacus />}
            />
          </O.Container_Form>
        )}
      </O.Container_Centralize>
    </>
  )
}

export default Relatorios
