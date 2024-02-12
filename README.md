# Sorteo equipos Fifa

## Descripción

Esta webapp permite realizar un sorteo de equipos de fútbol para el juego FIFA o cualquier simulador de futbol virtual.

Permite tanto obtener 2 equipos aleatorios random como también poder ingresar nombres de personas y asignarles un equipo aleatorio. Esta última funcionalidad contempla tanto el 1vs1 como el 2vs2.

Los equipos que se sortean son los populares que se suelen utilizar en el juego FIFA, tanto de clubes como de selecciones, esto sería de 5 estrellas ⭐⭐⭐⭐⭐ o bien de 4 y 1/2 pero con alto potencial.

![screen](https://github.com/fedekrenn/sorteo-equipos/assets/90353038/6a54e855-28b1-4340-a808-9b8884b6e96e)

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/fedekrenn/sorteo-equipos.git
```

### Instalar dependencias

```bash
pnpm install
```

### Iniciar el servidor

```bash
pnpm start
```

## Requisitos

- Node.js 16x o superior
- pnpm

## Quieres contribuir al proyecto?

Visita el archivo [CONTRIBUTING.md](CONTRIBUTING.md) para obtener más información sobre cómo contribuir al proyecto.

## Uso

### 1vs1

Se debe acceder al botón "1 vs 1", luego se elige la cantidad de jugadores y se ingresa el nombre de cada uno. Una vez ingresados los nombres, se debe clickear en "Sortear" y se mostrará el equipo asignado a cada jugador.

![example-1](https://github.com/fedekrenn/sorteo-equipos/assets/90353038/81ae50bd-6e1c-4870-b7e0-1dd62c60cdae)

### 2vs2

Similar a la opción anterior, se debe acceder al botón "2 vs 2", luego se elige la cantidad de jugadores y se ingresa el nombre de cada uno. Luego clickear en "Sortear" y se mostrarán las parejas de jugadores y el equipo asignado a cada uno. En el caso de ser número impar quedará un jugador "Libre" para que luego pueda ser asignado a un equipo según se desee.

![example-2](https://github.com/fedekrenn/sorteo-equipos/assets/90353038/c7bdae79-b49f-4088-9d5c-fae779742f7b)

### Random

Ingresar al botón "Equipos aleatorios" y clickear en "Sortear" para obtener 2 equipos aleatorios.

![example-3](https://github.com/fedekrenn/sorteo-equipos/assets/90353038/485dd445-0eda-46f6-a91a-5a5c48717b93)

### Funcionalidad por países

En cualquiera de las opciones anteriores tenemos el check "¿Incluir países?", el cual es opcional. Si se selecciona, se mostrarán selecciones en vez de equipos de clubes.

![example-4](https://github.com/fedekrenn/sorteo-equipos/assets/90353038/71822bb0-8f3b-4dd6-948d-a3c7743add82)

## Tecnologías

- React
- Flowbite
- Sonner
- Tailwind CSS

<br>

## 🙋‍♂️ Hola, Soy Federico Krenn
:nerd_face: Desarrollador web Fullstack
<br>
👨‍🎓 Realizando la Tecnicatura en Desarrollo Web en ISPC y Tecnicatura en Software Libre en la UNL
<br>
📫 Conectemos en Linkedin: https://www.linkedin.com/in/fkrenn/
