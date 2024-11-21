BEGIN;

CREATE TABLE Mesero (
    Id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    identificacion VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Cliente (
    Id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    identificacion VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Mesa (
    Id SERIAL PRIMARY KEY,
    numero INTEGER NOT NULL,
    mesero_id INTEGER,
    cliente_id INTEGER,
    FOREIGN KEY (mesero_id) REFERENCES Mesero(Id),
    FOREIGN KEY (cliente_id) REFERENCES Cliente(Id)
);

CREATE TABLE Menu (
    Id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE TipoItemMenu (
    Id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE MenuItem (
    Id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT,
    menu_id INTEGER NOT NULL,
    tipo_item_menu_id INTEGER NOT NULL,
    FOREIGN KEY (menu_id) REFERENCES Menu(Id),
    FOREIGN KEY (tipo_item_menu_id) REFERENCES TipoItemMenu(Id)
);

CREATE TABLE Pedido (
    Id SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    cliente_id INTEGER NOT NULL,
    mesa_id INTEGER NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(Id),
    FOREIGN KEY (mesa_id) REFERENCES Mesa(Id)
);

CREATE TABLE PedidoMenuItem (
    pedido_id INTEGER NOT NULL,
    menu_item_id INTEGER NOT NULL,
    PRIMARY KEY (pedido_id, menu_item_id),
    FOREIGN KEY (pedido_id) REFERENCES Pedido(Id),
    FOREIGN KEY (menu_item_id) REFERENCES MenuItem(Id)
);

COMMIT;