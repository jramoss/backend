import prisma from '../src/config/database/prisma';
import { $Enums } from '@prisma/client';

const pwd = 'aabbccddee';

interface IseedUsers {
  name: string;
  email: string;
  role: $Enums.Role;
  dNasc: string;
  password: string;
  profile: {
    create: {
      bio: string;
    };
  };
  posts: {
    create: {
      title: string;
      content: string;
      published: boolean;
    };
  };
}

const seedDB: IseedUsers[] = [
  //users
  {
    name: 'User FirstName LastName',
    email: 'user@email.com',
    password: pwd, // Store hash in your password DB.
    role: 'USER',
    dNasc: '1983-12-03T00:00:00.000Z',
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'User02 FirstName LastName',
    email: '',
    role: 'USER',
    password: pwd, // Store hash in your password DB.
    dNasc: '1983-12-03T00:00:00.000Z',
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'User03 FirstName LastName',
    email: 'user03@email.com',
    role: 'USER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'User04 FirstName LastName',
    email: 'user04@email.com',
    role: 'USER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'user05 FirstName LastName',
    email: 'user05@email.com',
    role: 'USER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'User06 FirstName LastName',
    email: 'user06@email.com',
    role: 'USER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'User07 FirstName LastName',
    email: 'user07@email.com',
    role: 'USER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'User08 FirstName LastName',
    email: 'user08@email.com',
    role: 'USER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'User09 FirstName LastName',
    email: 'user09@email.com',
    role: 'USER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'User10 FirstName LastName',
    email: 'user10@email.com',
    role: 'USER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'User11 FirstName LastName',
    email: 'user11@email.com',
    role: 'USER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'USER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  // admins
  {
    name: 'Admin FirstName LastName',
    email: 'admin@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Admin02 FirstName LastName',
    email: 'admin02@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Admin03 FirstName LastName',
    email: 'admin03@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Admin04 FirstName LastName',
    email: 'admin04@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Admin05 FirstName LastName',
    email: 'admin05@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Admin06 FirstName LastName',
    email: 'admin06@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Admin07 FirstName LastName',
    email: 'admin07@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Admin08 FirstName LastName',
    email: 'admin08@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Admin09 FirstName LastName',
    email: 'admin09@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Admin10 FirstName LastName',
    email: 'admin10@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Admin11 FirstName LastName',
    email: 'admin11@email.com',
    role: 'ADMIN',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'ADMIN',
      },
    },
    posts: {
      create: {
        title: 'Post manager ',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  //manager
  {
    name: 'manager FirstName LastName',
    email: 'manager@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'manager02 FirstName LastName',
    email: 'manager02@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'manager03 FirstName LastName',
    email: 'manager03@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'manager05 FirstName LastName',
    email: 'manager05@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'manager04 FirstName LastName',
    email: 'manager04@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'manager08 FirstName LastName',
    email: 'manager08@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'manager06 FirstName LastName',
    email: 'manager06@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'Manager07 FirstName LastName',
    email: 'manager07@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'manager09 FirstName LastName',
    email: 'manager09@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd, // Store hash in your password DB.
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'manager10 FirstName LastName',
    email: 'manager10@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd,
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
  {
    name: 'manager11 FirstName LastName',
    email: 'manager11@email.com',
    role: 'MANAGER',
    dNasc: '1983-12-03T00:00:00.000Z',
    password: pwd,
    profile: {
      create: {
        bio: 'MANAGER',
      },
    },
    posts: {
      create: {
        title: 'Post User',
        content:
          'I´m Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.',
        published: true,
      },
    },
  },
];

async function main() {
  // posts
  const rum = async () => {
    seedDB.map(async (user) => {
      if (user) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            dNasc: user.dNasc,
            role: user.role,
            password: user.password,
            posts: user.posts,
            profile: user.profile,
          },
        });
      } else {
        console.log('user not found');
      }
    });
  };
  await rum();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('erro', e);
    await prisma.$disconnect();
    process.exit(1);
  });
