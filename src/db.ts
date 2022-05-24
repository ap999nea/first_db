import { PrismaClient } from "@prisma/client";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";
const prisma = new PrismaClient();

/* async function main() {
    try {
      const users = await prisma.user.findMany();
      console.log("Get users:", users);
    } catch (error) {
      console.log("Ho avuto un errore", error);
    }
  
    try {
      const res = await myPromise;
      console.log("Risultato della promessa", res);
    } catch (error) {
      console.log("Ho avuto un errore", error);
    }
  
    console.log("Ciao a tutti");
    process.exit(0);
  } */

console.log("Hey there!");

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("ciao"), 1000);
});

/* async function printUsers() {
  const users = await prisma.user.findMany();
  console.log("All users:", users);
}

printUsers().then(() => process.exit(0));
 */
/* async function main() {
  const usersPerAge = await prisma.user.findMany({
    orderBy: {
      age: "desc",
    },
    where: {
      age: {
        lte: 15,
      },
    },
  });
  console.log("All users:", usersPerAge);
  try {
    const user = await prisma.user.update({
      data: {
        age: 25,
      },
      where: {
        id: 1,
      },
    });
  } catch (error) {
    console.log("ops");
  }

  await printUsers();
} */

/* async function createUser() {
  try {
    const user = await prisma.user.create({
      data: {
        age: 56,
        email: "ho56anni@anni.it",
        name: "Marta Bove",
      },
    });
    console.log("Utente creato: ", user);
  } catch (error) {
    console.log("Non riesco a creare l'utente");
  }
}

async function main() {
  try {
    const res = await prisma.user.create({
      data: {
        age: 99,
        email: "mimmo@domenico.com",
        name: "Mimmo Domenico",
        Post: {
          create: {
            title: "Mio post",
            content: "il mio post è bello",
          },
        },
      },
      include: {
        Profile: true,
        Post: true,
      },
    });
    console.log(res);
  } catch (error) {
    console.log("Can't handle shit");
  }
}
createUser().then(() => process.exit(0)); */

/* async function main() {
  try {
    const res = await prisma.user.create({
      data: {
        age: 15,
        email: "martina@domenico.com",
        name: "Martina Bellina",
        Profile: {
          create: {
            bio: "Mi chiamo Martina Bellina",
            avatar: "Hehehehe",
          },
        },
      },
      include: {
        Profile: true,
        Post: true,
      },
    });
    console.log(res);
  } catch (error) {
    console.log("Can't handle shit");
  }
} */

//main().then(() => process.exit(0));

/*model Comment {
  id           Int      @id @default(autoincrement())
  comment      String
  creationTime DateTime @default(now())
  autor        User     @relation(fields: [userId], references: [id])
  userId       Int
  posts Post[]
} */

/*async function createUser() {
  try {
    const user = await prisma.user.create({
      data: {
        age: 23,
        email: "ovidiu@paunas.xp",
        name: "Ovidiu Paunas",
      },
    });
    console.log("Utente creato: ", user);
  } catch (error) {
    console.log("Non riesco a creare l'utente");
  }
}

createUser().then(() => process.exit(0));*/

/*async function createPost() {
  try {
    const post = await prisma.post.create({
      data: {
        title: "Nuovo post",
        content: "Whoa life is good you know what I mean..? PT.2",
        autor: {
          connect: {
            id: 3,
          },
        },
      },
    });
    console.log("Post creato: ", post);
  } catch (error) {
    console.log("Cannot create post");
  }
}

createPost().then(() => process.exit(0));*/

/*async function createTag() {
  try {
    const postTag3 = await prisma.postTag.create({
      data: {
        tag: "Tag3",
        posts: {
          connect: {
            id: 1,
          },
        },
      },
    });
    console.log("Tag creato: ", postTag3);
  } catch (error) {
    console.log("Cannot create tag");
  }
}
createTag().then(() => process.exit(0));

/* async function createProfile() {
  try {
    const profile = await prisma.profile.create({
      data: {
        bio: "Sono Giulia",
        avatar: "Mi piace studiare",
        userId: 2,
      },
    });
    console.log("Profilo creato, ", profile);
  } catch (error) {
    console.log("Cannot create profile, ", error);
  }
}

createProfile().then(() => process.exit); */
