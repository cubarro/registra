var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Merida_poblacion_Residencial_1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Merida_poblacion_Residencial_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Merida_poblacion_Residencial_1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7996200.000000, 925025.870134, -7862200.000000, 1000376.537357]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Merida_poblacion_Residencial_1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Merida_poblacion_Residencial_1_1];
