var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8383271670645609,
        "pitch": 0.019560219442206872,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.8289029429724302,
          "pitch": 0.3362051548657661,
          "rotation": 18.06415775814132,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6563222781533611,
          "pitch": -0.1348686333832454,
          "title": "10 Manor Drive",
          "text": "This Virtual tour is for 10 Manor Drive, Hyde Park."
        }
      ]
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.3043241296467523,
        "pitch": 0.128381404192643,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.6762700474235963,
          "pitch": 0.48430383583614045,
          "rotation": 0,
          "target": "2-bedroom-1"
        },
        {
          "yaw": 2.059543298062275,
          "pitch": 0.5192738623096016,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 1.4821386208710798,
          "pitch": -0.2510387541957346,
          "rotation": 0.7853981633974483,
          "target": "11-i-floor"
        },
        {
          "yaw": -1.628238767196141,
          "pitch": 0.46480394343513787,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.7538847362878744,
        "pitch": 0.1720690817964794,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.8534215013205522,
          "pitch": 0.41369213855989884,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.7318387423149826,
        "pitch": 0.48431650200860155,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.258432176392539,
          "pitch": 0.3270516210305381,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 2.399168190934235,
          "pitch": 0.3366859981748327,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.372171587148964,
        "pitch": 0.08696284373671936,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.47161779428182626,
          "pitch": 0.25042904944843514,
          "rotation": 0,
          "target": "5-basement"
        },
        {
          "yaw": -0.08240025810783003,
          "pitch": 0.25633674789023075,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-basement",
      "name": "Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07941725105409958,
          "pitch": 0.36405572315101686,
          "rotation": 0,
          "target": "8-bedroom-3"
        },
        {
          "yaw": 1.0428239709250278,
          "pitch": 0.2931684203492324,
          "rotation": 0,
          "target": "7-bedroom-2"
        },
        {
          "yaw": -0.482414708866056,
          "pitch": 0.4660002860866541,
          "rotation": 5.497787143782138,
          "target": "6-basement"
        },
        {
          "yaw": -1.5996444261438114,
          "pitch": -0.08500676158129394,
          "rotation": 0.7853981633974483,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-basement",
      "name": "Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.662349588938394,
        "pitch": 0.2864226708093227,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.6935717158120003,
          "pitch": 0.4953321870443723,
          "rotation": 0,
          "target": "9-utility-area"
        },
        {
          "yaw": -1.543852270784182,
          "pitch": 0.6770283869701412,
          "rotation": 0.7853981633974483,
          "target": "5-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.6322600214095342,
        "pitch": 0.3418009651626299,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.256629726120183,
          "pitch": 0.3815465085691301,
          "rotation": 5.497787143782138,
          "target": "5-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.931628692537167,
        "pitch": 0.3257837987759462,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.1758903570177495,
          "pitch": 0.36263593747219147,
          "rotation": 0.7853981633974483,
          "target": "5-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-utility-area",
      "name": "Utility Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.2570560104583492,
        "pitch": 0.5616020686634684,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.32974595256436245,
          "pitch": 0.34019258615381176,
          "rotation": 0,
          "target": "10-bathroom-1"
        },
        {
          "yaw": 2.328800313419306,
          "pitch": 0.34674375095848475,
          "rotation": 0,
          "target": "6-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.764771180732092,
        "pitch": 0.8374228161067894,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.1845829594886927,
          "pitch": 0.5202879131947604,
          "rotation": 0,
          "target": "9-utility-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.0521189792441366,
        "pitch": 0.3111102506667489,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.3325470649338618,
          "pitch": 0.6697531677899118,
          "rotation": 0,
          "target": "12-bathroom-2"
        },
        {
          "yaw": -1.2675549357861797,
          "pitch": 0.552258063202256,
          "rotation": 0,
          "target": "14-i-floor"
        },
        {
          "yaw": -2.868444199196894,
          "pitch": 0.4722286366827362,
          "rotation": 0,
          "target": "13-bedroom-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.3575947140407898,
        "pitch": 1.516820317174762,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.6946605314983625,
          "pitch": 0.1935572947088584,
          "rotation": 0,
          "target": "11-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-5",
      "name": "Bedroom 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.7188285681863515,
        "pitch": 0.5107274466625995,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.7173376693999209,
          "pitch": 0.389572292887987,
          "rotation": 0,
          "target": "11-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.5510180844006687,
        "pitch": 0.1669542826967252,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.7419689646201117,
          "pitch": 0.5362135910561481,
          "rotation": 0,
          "target": "11-i-floor"
        },
        {
          "yaw": -1.4117092253248025,
          "pitch": 0.3550202115544856,
          "rotation": 0,
          "target": "15-bedroom-4"
        },
        {
          "yaw": 1.0772505136153967,
          "pitch": -0.3006965768876171,
          "rotation": 0.7853981633974483,
          "target": "16-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.9091944230752773,
        "pitch": 0.4796039924679363,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.7673733314371418,
          "pitch": 0.3780231112096679,
          "rotation": 0,
          "target": "14-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ii-floor",
      "name": "II Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.2005299052433056,
        "pitch": 0.5068712221752154,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.8511274381181657,
          "pitch": 0.6081453397870433,
          "rotation": 0,
          "target": "18-bedroom-7"
        },
        {
          "yaw": 1.3285617678874466,
          "pitch": 0.39874405141794256,
          "rotation": 0,
          "target": "17-bedroom-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-6",
      "name": "Bedroom 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.6076437831844821,
        "pitch": 0.5134457587896133,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.2547663991077105,
          "pitch": 0.4063201851320404,
          "rotation": 0,
          "target": "16-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-7",
      "name": "Bedroom 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.4208787803264062,
        "pitch": 0.6212985337530341,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.07524616880673918,
          "pitch": 0.3558827393457715,
          "rotation": 0,
          "target": "16-ii-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "10 Manor Drive",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
