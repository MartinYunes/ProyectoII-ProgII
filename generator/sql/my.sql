create schema proyectoprogII;

use proyectoprogII;

create table usuarios (
	id int unsigned primary key auto_increment,
    email varchar(500) unique not null,
    contraseña varchar(500) not null,
    foto_perfil varchar(500) not null,
    fecha_nacimiento date not null,
    DNI int not null,
    createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp
    
);

insert into usuarios values(default, 'lebron@udesa.edu.ar', 'lecap', 'fotoperfil1', '2003-03-03', 45489557, default, default);
insert into usuarios values(default, 'stephen@udesa.edu.ar', 'splash', 'fotoperfil2', '2003-03-03', 42415374, default, default);
insert into usuarios values(default, 'mateo@udesa.edu.ar', 'mate', 'fotoperfil3', '2003-03-03', 42415543, default, default);
insert into usuarios values(default, 'martin@udesa.edu.ar', 'mors', 'fotoperfil4', '2003-03-03', 43415398, default, default);
insert into usuarios values(default, 'marcelo@udesa.edu.ar', 'conocelo', 'fotoperfil5', '2003-03-03', 43514632, default, default);


create table productos(
	id int unsigned primary key auto_increment,
    id_usuario int unsigned,
    nombre_producto varchar(500) not null,
    descripcion_producto varchar(500) not null,
    createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

insert into productos values(default, 'Tesla Model S', 'El Tesla Model S es un sedán eléctrico de lujo que ofrece un rendimiento excepcional y una autonomía impresionante. Es uno de los vehículos eléctricos más populares del mercado.', 1, default, default);
insert into productos values(default, 'Ford Mustang', 'El Ford Mustang es un icónico auto deportivo estadounidense que ofrece un rendimiento emocionante, un estilo clásico y una amplia gama de opciones de personalización.', 2, default, default);
insert into productos values(default, 'Lamborghini Aventador', 'El Lamborghini Aventador es un súper deportivo italiano que ofrece un rendimiento de clase mundial, un diseño futurista y un precio exorbitante.', 2, default, default);
insert into productos values(default, 'Chevrolet Camaro', 'El Chevrolet Camaro es un auto deportivo americano que ofrece una experiencia de conducción emocionante, un estilo agresivo y un precio accesible.', 4, default, default);
insert into productos values(default, 'BMW M5', 'El BMW M5 es un sedán deportivo de lujo que ofrece un rendimiento excepcional, una tecnología avanzada y un estilo elegante', 5, default, default);
insert into productos values(default, 'Audi R8', 'El Audi R8 es un súper deportivo alemán que ofrece un rendimiento impresionante, un diseño aerodinámico y una tecnología de vanguardia.', 5, default, default);
insert into productos values(default, 'Porsche 911', 'El Porsche 911 es un auto deportivo alemán que ofrece un rendimiento de alto nivel, un diseño icónico y una experiencia de conducción emocionante.', 3, default, default);
insert into productos values(default, 'Mercedes benz AMG GT', 'El Mercedes-Benz AMG GT es un súper deportivo de lujo que ofrece un rendimiento de clase mundial, un diseño elegante y una tecnología avanzada.', 4, default, default);
insert into productos values(default, 'Dodge challenger', 'El Dodge Challenger es un auto deportivo americano que ofrece un estilo retro, una experiencia de conducción emocionante y una amplia variedad de opciones de motor.', 2, default, default);
insert into productos values(default, 'Toyota supra', 'El Toyota Supra es un deportivo japonés que ofrece un rendimiento emocionante, un diseño elegante y una historia icónica en el mundo de los autos deportivos.', 2, default, default);


create table comentarios (
	id int unsigned primary key auto_increment,
    post_id int unsigned,
    user_id int unsigned,
    texto varchar (500) not null,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES productos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)

);

insert into comentarios values(default, 'esta bueno', default, default, 3, 3);
insert into comentarios values(default, 'no me gusta', default, default, 4, 5);
insert into comentarios values(default, 'anda muy fluido', default, default, 4, 7);
insert into comentarios values(default, 'anda rapido', default, default, 3, 7);
insert into comentarios values(default, 'esta mas o menos', default, default, 2, 8);
insert into comentarios values(default, 'tremenda!', default, default, 4, 6);
insert into comentarios values(default, 'no me gustan los asientos', default, default, 1, 1);
insert into comentarios values(default, 'me convencio', default, default, 3, 9);
insert into comentarios values(default, 'no me convencio', default, default, 1, 10);
insert into comentarios values(default, 'me parecio rapida', default, default, 4, 2);
insert into comentarios values(default, 'es lenta', default, default, 5, 2);
insert into comentarios values(default, 'poco espacio dentro del auto', default, default, 4, 9);
insert into comentarios values(default, 'anda muy bien', default, default, 2, 3);
insert into comentarios values(default, 'baul es muy chico', default, default, 3, 2);
insert into comentarios values(default, 'sobrevalorado', default, default, 1, 4);
insert into comentarios values(default, 'no es recomendable', default, default, 1, 5);
insert into comentarios values(default, 'muy caro mantenerlo', default, default, 1, 3);
insert into comentarios values(default, 'no me gusta el interior', default, default, 2, 4);
insert into comentarios values(default, 'el mejor auto en el que anduve!', default, default, 1, 2);
insert into comentarios values(default, 'gasto de plata', default, default, 1, 7);
insert into comentarios values(default, 'no me parecio tan buena', default, default, 1, 8);
insert into comentarios values(default, 'me encanta el interior', default, default, 1, 7);
insert into comentarios values(default, 'anda re rapido', default, default, 2, 4);
insert into comentarios values(default, 'el volante es muy chico', default, default, 3, 5);
insert into comentarios values(default, 'pocos frenos', default, default, 2, 7);
insert into comentarios values(default, 'no me gusta la traccion', default, default, 3, 6);
insert into comentarios values(default, 'enamorado', default, default, 5, 6);
insert into comentarios values(default, 'me gustan los detalles', default, default, 1, 4);
insert into comentarios values(default, 'feo el tapizado', default, default, 2, 9);
insert into comentarios values(default, 'consume mucho', default, default, 3, 5);
insert into comentarios values(default, 'mejor compra que hice', default, default, 5, 10);
insert into comentarios values(default, 'facinado', default, default, 1, 7);
insert into comentarios values(default, 'me arrepiento', default, default, 2, 4);
insert into comentarios values(default, 'me encanta como anda pero gasto mucha plata en mantenimiento', default, default, 3, 5);
insert into comentarios values(default, 'no me convence', default, default, 2, 7);
insert into comentarios values(default, 'poco espacio atras', default, default, 3, 6);
insert into comentarios values(default, 'me parece buenisimo', default, default, 5, 6);
insert into comentarios values(default, 'mejor auto que tuve', default, default, 1, 4);
insert into comentarios values(default, 'divino el interior', default, default, 2, 9);
insert into comentarios values(default, 'caro pero valio la pena', default, default, 3, 5);
insert into comentarios values(default, 'valio la pena cada centavo', default, default, 5, 10);
