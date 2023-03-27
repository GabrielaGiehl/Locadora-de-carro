import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

const port = 5555;


app.post("/client", async (request, response) => {
  const { name, email, phone } = request.body;

  const client = await prisma.client.create({
    data:{
      name,
      email,
      phone,
    }
  });

  response.json(client);
});
app.post("/car", async (request, response) => {
  const { brand, model, year, rented} = request.body;

  const car = await prisma.car.create({
    data:{
      brand,
      model,
      year,
      rented,
    }
  });

  response.json(car);
});

app.post("/rented", async (request, response) => {
  const { dataRetirada,  carroId, clienteId } = request.body;
  const rented = await prisma.rented.create({
    data:{
      carro: { connect: { id: parseInt(carroId)}},
      cliente: { connect: { id: parseInt(clienteId)}},
      dataRetirada,
    }
  });
  response.json(rented);
});

app.get("/listClient", async (request, response) => {
  const tableClient = await prisma.client.findMany();

  response.json(tableClient);
});
app.get("/listRented", async (request, response) => {
  const tableRented = await prisma.rented.findMany();
  
  response.json(tableRented);
});
app.get("/listCar", async (request, response) => {
  const tableCar = await prisma.car.findMany();

  response.json(tableCar);
});
app.get("/Client/:id", async (request, response) => {
  const { id } = request.params;
  const client = await prisma.client.findUnique({ where: { id: Number(id) } });

  response.json(client)
});
app.get("/Car/:id", async (request, response) => {
  const { id } = request.params;
  const car = await prisma.car.findUnique({ where: { id: Number(id) } });

  response.json(car)
});
app.put("/Client/:id", async (request, response) => {
  const { id  } = request.params;
  const { name, email, phone } = request.body;


  
  const attClient = await prisma.client.update({
    where: {
      id: Number(id),
    },
    data:{
      name,
      email,
      phone
    }
  });

  response.json(attClient);
});

app.put("/Car/:id", async (request, response) => {
  const { id  } = request.params;
  const { brand, model, year } = request.body;


  
  const attCar = await prisma.car.update({
    where: {
      id: Number(id),
    },
    data:{
      brand,
      model,
      year,
    }
  });

  response.json(attCar);
});

app.delete("/Client/:id", async (request, response) => {
  const { id  } = request.params;
  const deleteClient = await prisma.client.delete({
    where: {
      id: Number(id),
    },
  });

  response.json(deleteClient);
});

app.delete("/Car/:id", async (request, response) => {
  const { id  } = request.params;
  const deleteCar = await prisma.car.delete({
    where: {
      id: Number(id),
    },
  });

  response.json(deleteCar);
});
app.listen(5555, () => {
  console.log(`Server Running = in port http://localhost:${port}`);
});