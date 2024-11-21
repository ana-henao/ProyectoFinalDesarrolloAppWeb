BEGIN;

-- Insertar meseros
INSERT INTO Mesero (nombre, identificacion) VALUES
('Carlos Pérez', '123456789'),
('Ana Gómez', '987654321'),
('Luis Martínez', '456789123'),
('María Rodríguez', '321654987');

-- Insertar mesas
INSERT INTO Mesa (numero, mesero_id) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 3),
(5, 4);

-- Insertar tipos de ítems de menú
INSERT INTO TipoItemMenu (nombre) VALUES
('Entrada'),
('Platos Fuertes'),
('Postres y Bebidas');

-- Insertar menú
INSERT INTO Menu (nombre) VALUES
('Diario');

-- Insertar ítems de menú (5 por cada tipo de ítem)
INSERT INTO MenuItem (nombre, precio, descripcion, menu_id, tipo_item_menu_id) VALUES
-- Entradas
('Arepas con Queso', 6000.00, 'Arepas tradicionales rellenas de queso fresco', 1, 1),
('Patacones con Hogao', 8000.00, 'Plátanos fritos con salsa de tomate y cebolla', 1, 1),
('Empanadas Colombianas', 5000.00, 'Empanadas rellenas de carne y papa', 1, 1),
('Ajiaco Santafereño', 12000.00, 'Sopa de pollo, papas y maíz, acompañada de alcaparras y crema de leche', 1, 1),
('Pandebono', 3000.00, 'Panecillos de queso típicos de Colombia', 1, 1),

-- Platos Fuertes
('Bandeja Paisa', 22000.00, 'Plato tradicional con frijoles, arroz, chicharrón, carne molida, huevo frito, plátano maduro, arepa y aguacate', 1, 2),
('Sancocho de Gallina', 18000.00, 'Sopa espesa con pollo, plátano, yuca y mazorca', 1, 2),
('Lechona Tolimense', 20000.00, 'Cerdo asado relleno de arroz, arvejas y especias', 1, 2),
('Arroz con Coco y Pescado Frito', 15000.00, 'Pescado frito acompañado de arroz con coco', 1, 2),
('Tamales Colombianos', 13000.00, 'Masa de maíz rellena de carne, pollo, cerdo, vegetales y especias, envuelta en hoja de plátano', 1, 2),

-- Postres y Bebidas
('Postre de Natas', 6000.00, 'Postre hecho de capas de nata de leche, con azúcar y canela', 1, 3),
('Brevas con Arequipe', 5000.00, 'Higos dulces servidos con dulce de leche', 1, 3),
('Natilla Colombiana', 7000.00, 'Postre tradicional de leche, maicena y panela', 1, 3),
('Chicha Colombiana', 4000.00, 'Bebida fermentada de maíz', 1, 3),
('Lulada', 5000.00, 'Bebida refrescante hecha con lulo, jugo de limón y azúcar', 1, 3);


COMMIT;