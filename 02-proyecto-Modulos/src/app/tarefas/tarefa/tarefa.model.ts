export interface Tarefa {
  id: string;
  idUsuario: string;
  titulo: string;
  resume: string;
  expira: string;
}

export interface NovaTarefaInfo {
  titulo: string;
  resume: string;
  data: string;
}
