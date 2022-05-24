"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ciao"), 1000);
});
function printUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.findMany();
        console.log("All users:", users);
    });
}
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
function createTag() {
    return __awaiter(this, void 0, void 0, function* () {
        const postTag1 = yield prisma.postTag.create({
            data: {
                tag: "Tag1",
                posts: {
                    connect: [
                        {
                            id: 1,
                        },
                        {
                            id: 2,
                        },
                    ],
                },
            },
        });
    });
}
createTag().then(process.exit(0));
