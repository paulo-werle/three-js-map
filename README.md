# Nome da Sua Biblioteca

A Biblioteca Three.js Map é uma ferramenta de mapas interativos projetada para facilitar a criação de mapas 3D envolventes. Com suporte para interatividade do usuário e dependência do Three.js, esta biblioteca permite a incorporação de mapas detalhados em projetos de forma simples e eficiente.

## Principais Recursos

- Renderização de mapas em 3D
- Controle total da câmera para uma experiência imersiva
- Interação do usuário através de cliques
- Documentação abrangente para facilitar a utilização
- Adaptação para dispositivos móveis

## Instalação

```bash
  npm install three-js-map
```

## Parametros

### ThreeJs3DMap
| Propriedade               | Tipo                                          | Descrição                                                                  |
|---------------------------|-----------------------------------------------|----------------------------------------------------------------------------|
| `elementID`               | `string`                                      | ID do elemento HTML onde o canvas será renderizado.                        |
| `development`             | `boolean`                                     | Modo de desenvolvimento para ativar helpers visuais.                       |
| `objects`                 | `Object[]`                                    | Lista de objetos 3D a serem carregados e interativos.                      |
| `onLoadComplete`          | `() => void`                                  | Callback chamado quando todos os objetos foram carregados e renderizados.  |
| `container.width`         | `number`                                      | Largura do container de renderização.                                      |
| `container.height`        | `number`                                      | Altura do container de renderização.                                       |
| `container.background`    | `number`                                      | Cor de fundo da cena.                                                      |
| `container.cameraPosition`| `Coordinates`                                 | Posição inicial da câmera.                                                 |
| `control.minDistance`     | `number`                                      | Distância mínima dos controles.                                            |
| `control.maxDistance`     | `number`                                      | Distância máxima dos controles.                                            |
| `control.cameraLook`      | `Coordinates`                                 | Posição de olhar da câmera.                                                |
| `control.minPan`          | `Coordinates`                                 | Posição mínima para o controle de pan.                                     |
| `control.maxPan`          | `Coordinates`                                 | Posição máxima para o controle de pan.                                     |
| `light.color`             | `number`                                      | Cor da luz.                                                                |
| `light.position`          | `Coordinates`                                 | Posição da luz.                                                            |
| `light.intensity`         | `number`                                      | Intensidade da luz.                                                        |
| `helper.size`             | `number`                                      | Tamanho dos helpers visuais.                                               |
| `helper.colorCenterLine`  | `number`                                      | Cor da linha central do grid helper.                                       |
| `helper.colorGrid`        | `number`                                      | Cor do grid helper.                                                        |
| `map.path`                | `string`                                      | Caminho do arquivo do mapa 3D a ser carregado.                             |
| `map.scale`               | `Coordinates`                                 | Escala do mapa 3D.                                                         |
| `map.onLoadCallback`      | `(gltf: GLTF) => void`                        | Callback chamado quando o mapa é carregado.                                |
| `map.onProgressCallback`  | `(event: ProgressEvent<EventTarget>) => void` | Callback de progresso de carregamento do mapa.                             |
| `map.onErrorCallback`     | `(err: unknown) => void`                      | Callback chamado em caso de erro no carregamento do mapa.                  |


### Camera
| Parâmetro        | Tipo          | Valor Padrão            | Descrição                                      |
|------------------|---------------|-------------------------|------------------------------------------------|
| `cameraPosition` | `Coordinates` | `{ x: 0, y: 2, z: 0 }`  | Posição da câmera no espaço tridimensional.    |
| `aspect`         | `number`      | Calculado dinamicamente | Razão de aspecto da câmera.                    |
| `near`           | `number`      | `0.1`                   | Distância para o plano de corte próximo.       |
| `fov`            | `number`      | `75`                    | Campo de visão da câmera em graus.             |
| `far`            | `number`      | `1000`                  | Distância para o plano de corte distante.      |

### Canvas
| Parâmetro   | Tipo     | Descrição                                            |
|-------------|----------|------------------------------------------------------|
| `elementID` | `string` | ID do elemento HTML `<canvas>` onde será renderizado.|

### Controls
| Parâmetro      | Tipo                                           | Valor Padrão                                           | Descrição                                              |
|----------------|------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| `camera`       | `THREE.Camera`                                 | -                                                      | Câmera que será controlada pelos OrbitControls.        |
| `domElement`   | `HTMLElement`                                  | -                                                      | Elemento HTML onde os controles serão aplicados.       |
| `minDistance`  | `number`                                       | -                                                      | Distância mínima permitida para afastamento da câmera. |
| `maxDistance`  | `number`                                       | -                                                      | Distância máxima permitida para aproximação da câmera. |
| `minPan`       | `{ x: number; z: number; }`                    | -                                                      | Limites mínimos de movimento horizontal e vertical.    |
| `maxPan`       | `{ x: number; z: number; }`                    | -                                                      | Limites máximos de movimento horizontal e vertical.    |
| `enableRotate` | `boolean`                                      | `false`                                                | Habilita ou desabilita a rotação dos controles.        |
| `mouseButtons` | `{ LEFT?: THREE.MOUSE; RIGHT?: THREE.MOUSE; }` | `{ LEFT: THREE.MOUSE.PAN, RIGHT: null }`               | Configuração dos botões do mouse para interação.       |
| `touches`      | `{ ONE?: THREE.TOUCH; TWO?: THREE.TOUCH; }`    | `{ ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN }` | Configuração dos gestos de toque para interação.       |
| `cameraLook`   | `Coordinates`                                  | `{ x: 0, y: 0, z: 0 }`                                 | Coordenadas de rotação da câmera.                      |


### GridHelper
| Parâmetro         | Tipo                        | Valor Padrão | Descrição                         |
|-------------------|-----------------------------|--------------|-----------------------------------|
| `colorCenterLine` | `THREE.ColorRepresentation` | `0xffffff`   | Cor da linha central do grid.     |
| `colorGrid`       | `THREE.ColorRepresentation` | `0x555555`   | Cor das linhas do grid.           |
| `scene`           | `THREE.Scene`               | -            | Cena onde o grid será adicionado. |
| `size`            | `number`                    | -            | Tamanho do grid.                  |


### AxesHelper
| Parâmetro         | Tipo          | Valor Padrão  | Descrição                         |
|-------------------|---------------|---------------|-----------------------------------|
| `scene`           | `THREE.Scene` | -             | Cena onde o grid será adicionado. |
| `size`            | `number`      | -             | Tamanho do grid.                  |

### Light
| Parâmetro   | Tipo                       | Valor Padrão  | Descrição                                |
|-------------|----------------------------|---------------|------------------------------------------|
| `scene`     | `THREE.Scene`              | -             | Cena onde a luz será adicionada.         |
| `position`  | `Coordinates`              | -             | Posição da luz no espaço tridimensional. |
| `color`     | `THREE.ColorRepresentation`| `0xffffff`    | Cor da luz.                              |
| `intensity` | `number`                   | `1`           | Intensidade da luz.                      |

### MapLoader
| Parâmetro             | Tipo                                          | Descrição                                                   |
|-----------------------|-----------------------------------------------|-------------------------------------------------------------|
| `path`                | `string`                                      | Caminho do arquivo GLTF a ser carregado.                    |
| `scene`               | `THREE.Scene`                                 | Cena onde o modelo será adicionado.                         |
| `scale`               | `Coordinates`                                 | Escala aplicada ao modelo carregado.                        |
| `onLoadCallback`      | `(data: GLTF) => void`                        | Callback chamado quando o modelo é carregado com sucesso.   |
| `onProgressCallback`  | `(event: ProgressEvent<EventTarget>) => void` | Callback chamado durante o progresso do carregamento.       |
| `onErrorCallback`     | `(err: unknown) => void`                      | Callback chamado se ocorrer um erro durante o carregamento. |

### ObjectLoader
| Parâmetro             | Tipo                                          | Descrição                                                   |
|-----------------------|-----------------------------------------------|-------------------------------------------------------------|
| `path`                | `string`                                      | Caminho do arquivo GLTF a ser carregado.                    |
| `scene`               | `THREE.Scene`                                 | Cena onde o modelo será adicionado.                         |
| `scale`               | `Coordinates`                                 | Escala aplicada ao modelo carregado.                        |
| `position`            | `Coordinates`                                 | Posição inicial do modelo no espaço tridimensional.         |
| `onLoadCallback`      | `(data: GLTF) => void`                        | Callback chamado quando o modelo é carregado com sucesso.   |
| `onProgressCallback`  | `(event: ProgressEvent<EventTarget>) => void` | Callback chamado durante o progresso do carregamento.       |
| `onErrorCallback`     | `(err: unknown) => void`                      | Callback chamado se ocorrer um erro durante o carregamento. |

### Raycaster
| Parâmetro      | Tipo                              | Valor Padrão | Descrição                                                    |
|----------------|-----------------------------------|--------------|--------------------------------------------------------------|
| `model`        | `THREE.Object3D`                  | -            | Objeto 3D a ser testado para interseção.                     |
| `camera`       | `THREE.Camera`                    | -            | Câmera usada para a visão do raio.                           |
| `distance`     | `number`                          | -            | Distância máxima para interseção.                            |
| `callback`     | `(intersection, event) => void`   | `() => {}`   | Função callback chamada quando ocorre uma interseção válida. |


### Render
| Parâmetro   | Tipo                 | Valor Padrão         | Descrição                                           |
|-------------|----------------------|----------------------|-----------------------------------------------------|
| `canvas`    | `HTMLCanvasElement`  | -                    | Elemento `<canvas>` onde a renderização será feita. |
| `width`     | `number`             | `window.innerWidth`  | Largura da área de renderização.                    |
| `height`    | `number`             | `window.innerHeight` | Altura da área de renderização.                     |

### Scene
| Parâmetro     | Tipo                       | Valor Padrão | Descrição             |
|---------------|----------------------------|--------------|-----------------------|
| `background`  | `THREE.ColorRepresentation`| `0x000000`   | Cor de fundo da cena. |

# Desenvolvimento
Desenvolvido por Paulo E. R. Werle