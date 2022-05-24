import { PrismaClient } from "@prisma/client";
import express from "express";

// Per importare il PrismaClient
const prisma = new PrismaClient();

// Per usare express
const app = express();

// Per parsare il body
app.use(express.json());

app.get("/", async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      autor: {
        include: {
          Profile: true,
        },
      },
      tags: {
        select: {
          tag: true,
        },
      },
    },
  });
  return res.status(200).send(posts);
});

const userID = 2;

app.get("/me/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    where: {
      autor: {
        id: userID,
      },
    },
    include: {
      autor: {
        include: {
          Profile: true,
        },
      },
      tags: {
        select: {
          tag: true,
        },
      },
    },
  });
  return res.status(200).send(posts);
});

app.get("/me/posts/:id", async (req, res) => {
  const params = req.params;
  const id = Number(params["id"]);
  const post = await prisma.post.findFirst({
    where: {
      id: id,
      autor: {
        id: userID,
      },
    },
    include: {
      autor: {
        include: {
          Profile: true,
        },
      },
      tags: {
        select: {
          tag: true,
        },
      },
    },
  });
  if (!post) {
    return res.status(404).send({ msg: "Not found" });
  }
  return res.status(200).send(post);
});

app.post("/me/posts/", async (req, res) => {
  const body = req.body;
  try {
    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        description: body.description,
        autor: {
          connect: {
            id: userID,
          },
        },
      },
    });
    return res.status(201).send(newPost);
  } catch (error) {
    return res.status(400).send({ msg: "Cannot create post" });
  }
});

app.put("/me/posts/:id", async (req, res) => {
  const body = req.body;
  const params = req.params;
  const id = Number(params["id"]);
  try {
    const updatedPost = await prisma.post.update({
      where: {
        id_userId: {
          id: id,
          userId: userID,
        },
      },
      data: {
        title: body.title,
        content: body.content,
        description: body.description,
      },
    });
    return res.status(201).send(updatedPost);
  } catch (error) {
    return res.status(400).send({ msg: "Cannot update post" });
  }
});

app.delete("/me/posts/:id", async (req, res) => {
  const params = req.params;
  const id = Number(params["id"]);
  try {
    const postToDelete = await prisma.post.delete({
      where: {
        id_userId: {
          id: id,
          userId: userID,
        },
      },
      include: {
        autor: {
          include: {
            Profile: true,
          },
        },
        tags: {
          select: {
            tag: true,
          },
        },
      },
    });
    return res.status(200).send(postToDelete);
  } catch (error) {
    return res.status(404).send({ msg: "Cannot delete post" });
  }
});

const port = 4000;
app.listen(port, () => {
  console.log("🚀 app is running on http://localhost:4000");
});
