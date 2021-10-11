import { Prisma } from ".prisma/client";

export class ScheduleRG implements Prisma.RgUncheckedCreateInput {
  id?: string;
  nome_completo: string;
  nome_do_pai: string;
  nome_da_mae: string;
  cpf: string;
  rg: string;
  orgao: string;
  motivo: string;
  data_de_solicitacao: string;
  cidadao_sabe_cpf: boolean;
  cidadao_em_posse_da_certidao: boolean;
  contato: string;
  contato2?: string;
  contato3?: string;
  whatsapp?: string;
  estado_de_naturalidade: string;
  cidade_de_naturalidade: string;
  endereco_residencial: string;
  cidade_residencial: string;
  cep: string;
  status: string;
  local_de_agendamento: string;
  data_de_agendamento: string;
  hora_do_agendamento: string;
  resolvido: boolean;
  observacao: string;
  usuarioId: string;
  data_de_nascimento: string;

}
