
const baseUrl = './photo-sphere-viewer/assets/';

const viewer = new PhotoSphereViewer.Viewer({
    container: 'viewer',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    navbar: 'zoom move gallery fullscreen',

    plugins: [
        PhotoSphereViewer.MarkersPlugin,
        [PhotoSphereViewer.GalleryPlugin, {
            thumbnailSize: { width: 100, height: 100 },
        }],
        [PhotoSphereViewer.VirtualTourPlugin, {
            positionMode: 'gps',
            renderMode: '3d',
        }],
    ],
});

const virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);

virtualTour.setNodes([
    {
        id: '1',
        panorama: './img/1.jpg',
        thumbnail: './img/1-thumb.jpg',
        name: 'Лестница',
        links: [{ nodeId: '2', gps: [-200, 20] }],
        gps: [-110, -40],
    },
    {
        id: '2',
        panorama: './img/2.jpg',
        thumbnail: './img/2-thumb.jpg',
        name: '23 Кабинет',
        markers: [
          {
            "id": "marker-vgm2vskczrt",
            "image": baseUrl + "/pin-red.png",
            "position": {
              "yaw": 5.754,
              "pitch": 0.084
            },
            "size": {
              "width": 64,
              "height": 64
            },
            "anchor": "bottom center",
            "tooltip": {
              "content": "Кабинет №23",
              "position": "top center",
              "trigger": "hover"
            },
            content: "Лаборатория информационных технологий"
          }
        ],
        links: [
          { nodeId: '1', gps: [110, 0] },
          { nodeId: '3', gps: [-75, 20] }
        ],
        gps: [110, 20]
    },
    {
      id: '3',
      panorama: './img/3.jpg',
      thumbnail: './img/3-thumb.jpg',
      name: '24 Кабинет',
      markers: [
        {
          "id": "marker-7zftzfpa05h",
          "image": baseUrl + "/pin-red.png",
          "position": {
            "yaw": 4.645,
            "pitch": 0.064
          },
          "size": {
            "width": 64,
            "height": 64
          },
          "anchor": "bottom center",
          "tooltip": {
            "content": "Кабинет №24",
            "position": "top center",
            "trigger": "hover"
          },
          content: "Лаборатория компьютерного делопроизводства и оргтехники. Архивоведческие дисциплины"
        }
      ],
      links: [
        { nodeId: '2', gps: [-80, 0] },
        { nodeId: '4', gps: [100, 20] }
      ],
      gps: [-80.156168, 25.666623],
  },
  {
    id: '4',
    panorama: './img/4.jpg',
    thumbnail: './img/4-thumb.jpg',
    name: '25-26 Кабинет',
    markers: [
      {
        "id": "marker-ls2p2745vch",
        "image": "https://photo-sphere-viewer-data.netlify.app/assets/pictos/pin-red.png",
        "position": {
          "yaw": 5.916,
          "pitch": -0.025
        },
        "size": {
          "width": "64",
          "height": "64"
        },
        "anchor": "bottom center",
        "tooltip": {
          "content": "Кабинет №26",
          "position": "top center",
          "trigger": "hover"
        },
        content: "Кабинет информационной техники, мультимедиа-технологии и программирования, разработки веб-приложений"
      },
      {
        "id": "marker-6wodny6si6u",
        "image": "https://photo-sphere-viewer-data.netlify.app/assets/pictos/pin-red.png",
        "position": {
          "yaw": 3.749,
          "pitch": 0.079
        },
        "size": {
          "width": "64",
          "height": "64"
        },
        "anchor": "bottom center",
        "tooltip": {
          "content": "Кабинет №25",
          "position": "top center",
          "trigger": "hover"
        },
        content: "Лаборатория информационной безопасности. Программирования и баз данных"
      }
    ],
    links: [
      { nodeId: '3', gps: [-80, 0] },
      { nodeId: '5', gps: [95, 20] }
    ],
    gps: [-80.156168, 25.666623],
  },
  {
    id: '5',
    panorama: './img/5.jpg',
    thumbnail: './img/5-thumb.jpg',
    name: 'Лестница',
    links: [
      { nodeId: '4', gps: [-85, 0] },
    ],
    gps: [-80.156168, 25.666623],
  }
], '2');