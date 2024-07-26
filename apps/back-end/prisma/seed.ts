import { PrismaClient } from '@prisma/client';
import {
  Profissional as PrismaProfissional,
  Servico as PrimaServico,
} from '@prisma/client';
import { servicos, profissionais } from '@barba/core';

const prisma = new PrismaClient();

async function seed() {
  await prisma.profissional.createMany({
    data: profissionais as PrismaProfissional[],
  });
  await prisma.servico.createMany({ data: servicos as PrimaServico[] });
}

seed();
