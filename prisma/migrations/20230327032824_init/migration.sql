-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT
);

-- CreateTable
CREATE TABLE "Rented" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carroId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "dataRetirada" TEXT,
    "dataDevolucao" TEXT,
    CONSTRAINT "Rented_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "Car" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Rented_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
