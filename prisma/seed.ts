import prisma from '../src/config/database/prisma';

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'user',
      email: 'user@gmail.com',
      dNasc: '1983-12-03T00:00:00.000Z',
      role: 'MANAGER',
      posts: {
        create: {
          title: 'Check out Prisma with Next.js',
          content: 'https://www.prisma.io/nextjs',
          published: true,
        },
      },
    },
  });
  const Admin = await prisma.user.create({
    data: {
      name: 'admin',
      email: 'admin@gmail.com',
      dNasc: '1983-12-03T00:00:00.000Z',
      role: 'ADMIN',
      posts: {
        create: {
          title: 'Check out Prisma with Next.js',
          content: 'https://www.prisma.io/nextjs',
          published: true,
        },
      },
    },
  });
  const manager = await prisma.user.create({
    data: {
      name: 'manager',
      email: 'manager@gmail.com',
      dNasc: '1983-12-03T00:00:00.000Z',
      role: 'MANAGER',
      posts: {
        create: {
          title: 'Check out Prisma with Next.js',
          content: 'https://www.prisma.io/nextjs',
          published: true,
        },
      },
      profile: {
        create: { bio: 'SR MANAGER'},
      },
    },
  });
  console.log({ user, Admin, manager });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
