CREATE database CH35;

USE `ch35` ;

-- -----------------------------------------------------
-- Table `ch35`.`CLIENTES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`CLIENTES` (
  `idClientes` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(500) NOT NULL,
  `Telefono` VARCHAR(12) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idClientes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`PRODUCTOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`PRODUCTOS` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`idProducto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`PEDIDOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`PEDIDOS` (
  `idPedido` INT NOT NULL AUTO_INCREMENT,
  `fecha_pedido` DATE NOT NULL,
  `cantidad` INT NOT NULL,
  `Cliente_idClientes` INT NOT NULL,
  PRIMARY KEY (`idPedido`),
  INDEX `fk_Pedido_Cliente_idx` (`Cliente_idClientes` ASC),
  CONSTRAINT `fk_Pedido_Cliente`
    FOREIGN KEY (`Cliente_idClientes`)
    REFERENCES `ch35`.`CLIENTES` (`idClientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `ch35`.`PROOVEDORES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`PROOVEDORES` (
  `idProovedor` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idProovedor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`Empleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`Empleado` (
  `idEmpleado` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `puesto` VARCHAR(45) NOT NULL,
  `sueldo` DECIMAL(8,2) NOT NULL,
  PRIMARY KEY (`idEmpleado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`PEDIDOS-PRODUCTOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`PEDIDOS-PRODUCTOS` (
  `Producto_idProducto` INT NOT NULL,
  `Pedido_idPedido` INT NOT NULL,
  PRIMARY KEY (`Producto_idProducto`, `Pedido_idPedido`),
  INDEX `fk_PEDIDOS-PRODUCTOS_Pedido1_idx` (`Pedido_idPedido` ASC) VISIBLE,
  CONSTRAINT `fk_PEDIDOS-PRODUCTOS_Producto1`
    FOREIGN KEY (`Producto_idProducto`)
    REFERENCES `ch35`.`PRODUCTOS` (`idProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PEDIDOS-PRODUCTOS_Pedido1`
    FOREIGN KEY (`Pedido_idPedido`)
    REFERENCES `ch35`.`PEDIDOS` (`idPedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ch35`.`PROOVEDORES-PRODUCTOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ch35`.`PROOVEDORES-PRODUCTOS` (
  `PROOVEDORES_idProovedor` INT NOT NULL,
  `PRODUCTOS_idProducto` INT NOT NULL,
  PRIMARY KEY (`PROOVEDORES_idProovedor`, `PRODUCTOS_idProducto`),
  INDEX `fk_PROOVEDORES-PRODUCTOS_PRODUCTOS1_idx` (`PRODUCTOS_idProducto` ASC),
  CONSTRAINT `fk_PROOVEDORES-PRODUCTOS_PROOVEDORES1`
    FOREIGN KEY (`PROOVEDORES_idProovedor`)
    REFERENCES `ch35`.`PROOVEDORES` (`idProovedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PROOVEDORES-PRODUCTOS_PRODUCTOS1`
    FOREIGN KEY (`PRODUCTOS_idProducto`)
    REFERENCES `ch35`.`PRODUCTOS` (`idProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO Empleado (idEmpleado, nombre, puesto, sueldo)
values(1,'Martin','Desarrollador Fullstack',15000.56);

INSERT INTO Empleado (idEmpleado, nombre, puesto, sueldo)
values(2,'Maara','Instructor',12000.56);

INSERT INTO Empleado (idEmpleado, nombre, puesto, sueldo)
values(3,'Braulio','Desarrollador Backend',17000.56);

INSERT INTO Empleado (idEmpleado, nombre, puesto, sueldo)
values(4,'David','Desarrollador Fullstack',15000.56);

INSERT INTO Empleado (idEmpleado, nombre, puesto, sueldo)
values(5,'Eunice','Desarrollador Fullstack',15000.56);

INSERT INTO Empleado (idEmpleado, nombre, puesto, sueldo)
values(6,'Ximena','Desarrollador Fullstack',15000.56);

INSERT INTO Empleado (idEmpleado, nombre, puesto, sueldo)
values(7,'Pedro','Desarrollador FrontEnd',12000.78);

INSERT INTO Empleado (idEmpleado, nombre, puesto, sueldo)
values(8,'Marco','Desarrollador FrontEnd',12000.78);

ALTER TABLE productos
ADD COLUMN descripcion VARCHAR(150),
ADD COLUMN STOCK INT;

SHOW COLUMNS FROM PRODUCTOS;

INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES ('Taza Clásica Blanca', 'Taza de cerámica blanca con diseño clásico.', 9.99, 100);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza de Viaje Acero Inoxidable', 'Taza térmica de acero inoxidable ideal para viajes.', 14.99, 50);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza con Asa de Corazón', 'Taza de cerámica con asa en forma de corazón.', 12.99, 75);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza Grande de Colores', 'Taza grande con colores vibrantes y diseño moderno.', 11.99, 80);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza de Porcelana Floral', 'Taza de porcelana con delicado diseño floral.', 15.99, 60);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza de Café Expreso', 'Taza pequeña ideal para café expreso.', 8.99, 120);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Set de Tazas de Té', 'Conjunto de tazas elegantes para té con platos a juego.', 19.99, 40);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza con Mensaje Motivacional', 'Taza con mensaje positivo para empezar el día.', 10.99, 90);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza de Cristal Doble Pared', 'Taza transparente de doble pared para bebidas calientes.', 17.99, 55);
INSERT INTO productos (nombre, descripcion, precio, stock)
VALUES('Taza Personalizada con Foto', 'Taza personalizable con la imagen que desees.', 13.99, 70);

SHOW DATABASES;

-- Insertar datos en la tabla CLIENTES
INSERT INTO CLIENTES (nombre, direccion, Telefono, correo)
VALUES
  ('Juan Pérez', 'Calle A #123', '123456789', 'juan@example.com'),
  ('María López', 'Avenida B #456', '987654321', 'maria@example.com'),
  ('Carlos Rodríguez', 'Calle C #789', '555555555', 'carlos@example.com'),
  ('Ana García', 'Avenida D #1011', '111111111', 'ana@example.com'),
  ('Pedro Sánchez', 'Calle E #1213', '999999999', 'pedro@example.com');

-- Insertar datos en la tabla PRODUCTOS
INSERT INTO PRODUCTOS (nombre, precio, descripcion, STOCK)
VALUES
  ('Producto 1', 19.99, 'Descripción del Producto 1', 50),
  ('Producto 2', 29.99, 'Descripción del Producto 2', 30),
  ('Producto 3', 14.99, 'Descripción del Producto 3', 80),
  ('Producto 4', 9.99, 'Descripción del Producto 4', 100),
  ('Producto 5', 39.99, 'Descripción del Producto 5', 20);

-- Insertar datos en la tabla PEDIDOS
INSERT INTO PEDIDOS (fecha_pedido, cantidad, Cliente_idClientes)
VALUES
  ('2024-02-11', 2, 1),
  ('2024-02-10', 3, 2),
  ('2024-02-09', 1, 3),
  ('2024-02-08', 4, 4),
  ('2024-02-07', 2, 5);

-- Insertar datos en la tabla PROOVEDORES
INSERT INTO PROOVEDORES (nombre, direccion)
VALUES
  ('Proveedor 1', 'Dirección Proveedor 1'),
  ('Proveedor 2', 'Dirección Proveedor 2'),
  ('Proveedor 3', 'Dirección Proveedor 3'),
  ('Proveedor 4', 'Dirección Proveedor 4'),
  ('Proveedor 5', 'Dirección Proveedor 5');

-- Insertar datos en la tabla Empleado
INSERT INTO Empleado (idEmpleado, nombre, puesto, sueldo)
VALUES
  (9, 'Laura', 'Desarrollador FrontEnd', 13000.78),
  (10, 'Diego', 'Desarrollador Backend', 16000.56),
  (11, 'Sofía', 'Diseñador UX/UI', 14000.67),
  (12, 'Javier', 'Desarrollador Fullstack', 15000.56),
  (13, 'Isabel', 'Analista de Datos', 17000.89);

-- Insertar datos en la tabla PEDIDOS-PRODUCTOS
INSERT INTO `PEDIDOS-PRODUCTOS` (Producto_idProducto, Pedido_idPedido)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5);

-- Insertar datos en la tabla PROOVEDORES-PRODUCTOS
INSERT INTO `PROOVEDORES-PRODUCTOS` (PROOVEDORES_idProovedor, PRODUCTOS_idProducto)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5);

-- Consulta DML: Obtener todos los productos con su descripción y cantidad en stock
SELECT nombre, descripcion, STOCK FROM PRODUCTOS;

-- Consulta DML: Obtener los pedidos junto con los detalles del cliente que los realizó
SELECT p.idPedido, p.fecha_pedido, p.cantidad, c.nombre as nombre_cliente
FROM PEDIDOS p
JOIN CLIENTES c ON p.Cliente_idClientes = c.idClientes;

-- Consulta DML: Obtener el nombre y sueldo de los empleados que ganan más de 15000
SELECT nombre, sueldo FROM Empleado WHERE sueldo > 15000;

-- Consulta DML: Obtener los productos y sus proveedores correspondientes
SELECT pr.nombre as proveedor, pro.nombre as producto
FROM PROOVEDORES pr
JOIN `PROOVEDORES-PRODUCTOS` pp ON pr.idProovedor = pp.PROOVEDORES_idProovedor
JOIN PRODUCTOS pro ON pp.PRODUCTOS_idProducto = pro.idProducto;