import { Component, Input } from '@angular/core';
import { TarefaComponent } from './tarefa/tarefa.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';

@Component({
  selector: 'app-terefas',
  standalone: true,
  imports: [TarefaComponent, NovaTarefaComponent],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css',
})
export class TarefasComponent {
  @Input({ required: true }) nome?: string;
  @Input({ required: true }) idUsuario!: string;
  estaAdicionandoTarefaNova = false;

  tarefas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resume:
        'Aprender todas as características básicas e avançadas de Angular e como aplicá-las.',
      expira: '2025-01-01',
    },
    {
      id: 't2',
      idUsuario: 'u2',
      titulo: 'Criar o primeiro protótipo',
      resume: 'Criar o primeiro protótipo do site da loja.',
      expira: '2025-01-02',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar o template do carrinho',
      resume:
        'Preparar e descrever um template de carrinho de compras da loja online.',
      expira: '2025-01-03',
    },
    {
      id: 't4',
      idUsuario: 'u4',
      titulo: 'Estudar Vue.js',
      resume: 'Aprender as principais características e a estrutura do Vue.js.',
      expira: '2025-01-04',
    },
    {
      id: 't5',
      idUsuario: 'u5',
      titulo: 'Explorar Svelte',
      resume: 'Conhecer as vantagens do Svelte e criar uma pequena aplicação.',
      expira: '2025-01-05',
    },
    {
      id: 't6',
      idUsuario: 'u6',
      titulo: 'Entender Node.js',
      resume: 'Aprender como funciona o Node.js e criar um servidor básico.',
      expira: '2025-01-06',
    },
    {
      id: 't7',
      idUsuario: 'u7',
      titulo: 'Conhecer TypeScript',
      resume: 'Estudar os conceitos básicos do TypeScript e como integrá-lo.',
      expira: '2025-01-07',
    },
    {
      id: 't8',
      idUsuario: 'u1',
      titulo: 'Praticar JavaScript',
      resume:
        'Realizar exercícios práticos de JavaScript para melhorar habilidades.',
      expira: '2025-01-08',
    },
    {
      id: 't9',
      idUsuario: 'u2',
      titulo: 'Construir APIs REST',
      resume: 'Criar uma API REST usando Express e Node.js.',
      expira: '2025-01-09',
    },
    {
      id: 't10',
      idUsuario: 'u3',
      titulo: 'Usar GraphQL',
      resume:
        'Aprender os fundamentos do GraphQL e como construir uma API simples.',
      expira: '2025-01-10',
    },
    {
      id: 't11',
      idUsuario: 'u4',
      titulo: 'Desenvolver com Docker',
      resume: 'Configurar containers Docker para um projeto web.',
      expira: '2025-01-11',
    },
    {
      id: 't12',
      idUsuario: 'u5',
      titulo: 'Deploy na AWS',
      resume:
        'Aprender a fazer deploy de uma aplicação na Amazon Web Services.',
      expira: '2025-01-12',
    },
    {
      id: 't13',
      idUsuario: 'u6',
      titulo: 'Configurar CI/CD',
      resume: 'Automatizar o processo de integração e deploy contínuo.',
      expira: '2025-01-13',
    },
    {
      id: 't14',
      idUsuario: 'u7',
      titulo: 'Testar com Jest',
      resume: 'Criar testes unitários usando Jest para garantir qualidade.',
      expira: '2025-01-14',
    },
    {
      id: 't15',
      idUsuario: 'u1',
      titulo: 'Implementar Redux',
      resume: 'Gerenciar o estado de uma aplicação React com Redux.',
      expira: '2025-01-15',
    },
    {
      id: 't16',
      idUsuario: 'u2',
      titulo: 'Criar testes E2E',
      resume: 'Implementar testes end-to-end para uma aplicação web.',
      expira: '2025-01-16',
    },
    {
      id: 't17',
      idUsuario: 'u3',
      titulo: 'Estudar MongoDB',
      resume: 'Aprender a usar MongoDB para bancos de dados NoSQL.',
      expira: '2025-01-17',
    },
    {
      id: 't18',
      idUsuario: 'u4',
      titulo: 'Aprender SQL',
      resume: 'Realizar consultas e manipulação básica de bancos de dados SQL.',
      expira: '2025-01-18',
    },
    {
      id: 't19',
      idUsuario: 'u5',
      titulo: 'Explorar Firebase',
      resume: 'Conhecer as funcionalidades do Firebase para apps web e mobile.',
      expira: '2025-01-19',
    },
    {
      id: 't20',
      idUsuario: 'u6',
      titulo: 'Usar Tailwind CSS',
      resume:
        'Desenhar interfaces com Tailwind CSS para acelerar o desenvolvimento.',
      expira: '2025-01-20',
    },
    {
      id: 't21',
      idUsuario: 'u7',
      titulo: 'Entender Webpack',
      resume: 'Configurar Webpack para otimizar projetos frontend.',
      expira: '2025-01-21',
    },
    {
      id: 't22',
      idUsuario: 'u1',
      titulo: 'Otimizar performance',
      resume:
        'Melhorar o desempenho de aplicações web por meio de boas práticas.',
      expira: '2025-01-22',
    },
    {
      id: 't23',
      idUsuario: 'u2',
      titulo: 'Melhorar SEO',
      resume: 'Aplicar técnicas para melhorar o posicionamento em buscadores.',
      expira: '2025-01-23',
    },
    {
      id: 't24',
      idUsuario: 'u3',
      titulo: 'Construir PWA',
      resume:
        'Desenvolver aplicações web progressivas para melhor experiência móvel.',
      expira: '2025-01-24',
    },
    {
      id: 't25',
      idUsuario: 'u4',
      titulo: 'Aprender Next.js',
      resume: 'Criar aplicações React com renderização do lado servidor.',
      expira: '2025-01-25',
    },
    {
      id: 't26',
      idUsuario: 'u5',
      titulo: 'Estudar Nuxt.js',
      resume: 'Desenvolver aplicações Vue.js com Nuxt para SSR.',
      expira: '2025-01-26',
    },
    {
      id: 't27',
      idUsuario: 'u6',
      titulo: 'Criar componentes',
      resume: 'Desenhar e reutilizar componentes UI em frameworks modernos.',
      expira: '2025-01-27',
    },
    {
      id: 't28',
      idUsuario: 'u7',
      titulo: 'Praticar UX/UI',
      resume: 'Melhorar a experiência e design do usuário em aplicações.',
      expira: '2025-01-28',
    },
    {
      id: 't29',
      idUsuario: 'u1',
      titulo: 'Melhorar acessibilidade',
      resume: 'Tornar aplicações acessíveis para todos os usuários.',
      expira: '2025-02-01',
    },
    {
      id: 't30',
      idUsuario: 'u2',
      titulo: 'Entender OAuth',
      resume: 'Implementar autenticação segura com OAuth 2.0.',
      expira: '2025-02-02',
    },
    {
      id: 't31',
      idUsuario: 'u3',
      titulo: 'Gerenciar estado',
      resume: 'Controlar o estado global em aplicações complexas.',
      expira: '2025-02-03',
    },
    {
      id: 't32',
      idUsuario: 'u4',
      titulo: 'Estudar micro frontends',
      resume: 'Dividir aplicações em micro frontends para escalabilidade.',
      expira: '2025-02-04',
    },
    {
      id: 't33',
      idUsuario: 'u5',
      titulo: 'Aprender GraphQL Subscriptions',
      resume: 'Implementar assinaturas para dados em tempo real.',
      expira: '2025-02-05',
    },
    {
      id: 't34',
      idUsuario: 'u6',
      titulo: 'Criar chat em tempo real',
      resume: 'Desenvolver um chat usando WebSockets.',
      expira: '2025-02-06',
    },
    {
      id: 't35',
      idUsuario: 'u7',
      titulo: 'Configurar ambiente de desenvolvimento',
      resume: 'Preparar ambiente de desenvolvimento eficiente e organizado.',
      expira: '2025-02-07',
    },
    {
      id: 't36',
      idUsuario: 'u1',
      titulo: 'Deploy no Heroku',
      resume: 'Fazer deploy de aplicações web na plataforma Heroku.',
      expira: '2025-02-08',
    },
    {
      id: 't37',
      idUsuario: 'u2',
      titulo: 'Aprender Firebase Functions',
      resume: 'Criar funções serverless com Firebase.',
      expira: '2025-02-09',
    },
    {
      id: 't38',
      idUsuario: 'u3',
      titulo: 'Usar Serverless',
      resume: 'Implementar arquiteturas serverless para escalabilidade.',
      expira: '2025-02-10',
    },
    {
      id: 't39',
      idUsuario: 'u4',
      titulo: 'Automatizar tarefas',
      resume: 'Usar ferramentas para automatizar processos repetitivos.',
      expira: '2025-02-11',
    },
    {
      id: 't40',
      idUsuario: 'u5',
      titulo: 'Monitorar aplicações',
      resume: 'Implementar monitoramento para detectar falhas e otimizar.',
      expira: '2025-02-12',
    },
    {
      id: 't41',
      idUsuario: 'u6',
      titulo: 'Estudar segurança web',
      resume: 'Aplicar medidas para proteger aplicações web.',
      expira: '2025-02-13',
    },
    {
      id: 't42',
      idUsuario: 'u7',
      titulo: 'Configurar HTTPS',
      resume: 'Implementar certificados SSL para segurança na web.',
      expira: '2025-02-14',
    },
    {
      id: 't43',
      idUsuario: 'u1',
      titulo: 'Gerenciar erros',
      resume: 'Criar mecanismos para tratamento e registro de erros.',
      expira: '2025-02-15',
    },
    {
      id: 't44',
      idUsuario: 'u2',
      titulo: 'Criar documentação',
      resume: 'Documentar projetos para facilitar manutenção e uso.',
      expira: '2025-02-16',
    },
    {
      id: 't45',
      idUsuario: 'u3',
      titulo: 'Refatorar código',
      resume: 'Melhorar código existente para maior clareza e eficiência.',
      expira: '2025-02-17',
    },
    {
      id: 't46',
      idUsuario: 'u4',
      titulo: 'Aprimorar código legado',
      resume: 'Atualizar e melhorar código antigo para novas tecnologias.',
      expira: '2025-02-18',
    },
    {
      id: 't47',
      idUsuario: 'u5',
      titulo: 'Estudar padrões de design',
      resume: 'Conhecer e aplicar padrões comuns de design de software.',
      expira: '2025-02-19',
    },
    {
      id: 't48',
      idUsuario: 'u6',
      titulo: 'Aprender programação funcional',
      resume: 'Aplicar conceitos de programação funcional em JavaScript.',
      expira: '2025-02-20',
    },
    {
      id: 't49',
      idUsuario: 'u7',
      titulo: 'Entender programação reativa',
      resume: 'Conhecer princípios de programação reativa e RxJS.',
      expira: '2025-02-21',
    },
    {
      id: 't50',
      idUsuario: 'u1',
      titulo: 'Praticar TDD',
      resume:
        'Realizar desenvolvimento guiado por testes (Test Driven Development).',
      expira: '2025-02-22',
    },
    {
      id: 't51',
      idUsuario: 'u2',
      titulo: 'Melhorar código modular',
      resume: 'Dividir código em módulos para melhor manutenção.',
      expira: '2025-02-23',
    },
    {
      id: 't52',
      idUsuario: 'u3',
      titulo: 'Criar dashboards',
      resume: 'Desenhar painéis visuais para monitoramento de dados.',
      expira: '2025-02-24',
    },
  ];

  get tarefasUsuarioSelecionado() {
    return this.tarefas.filter((tarefa) => tarefa.idUsuario === this.idUsuario);
  }

  aoCompletarTarefa(id: string) {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
  }

  aoIniciarNovaTarefa() {
    this.estaAdicionandoTarefaNova = true;
  }

  aoCancelarNovaTarefa() {
    this.estaAdicionandoTarefaNova = false;
  }
}
