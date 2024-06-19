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
var format_ubicaciones_mty_1 = new ol.format.GeoJSON();
var features_ubicaciones_mty_1 = format_ubicaciones_mty_1.readFeatures(json_ubicaciones_mty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ubicaciones_mty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ubicaciones_mty_1.addFeatures(features_ubicaciones_mty_1);cluster_ubicaciones_mty_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ubicaciones_mty_1
});
var lyr_ubicaciones_mty_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ubicaciones_mty_1, 
                style: style_ubicaciones_mty_1,
                interactive: false,
                title: '<img src="styles/legend/ubicaciones_mty_1.png" /> ubicaciones_mty'
            });
var format_coord_media_MTY_2 = new ol.format.GeoJSON();
var features_coord_media_MTY_2 = format_coord_media_MTY_2.readFeatures(json_coord_media_MTY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coord_media_MTY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_media_MTY_2.addFeatures(features_coord_media_MTY_2);
var lyr_coord_media_MTY_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coord_media_MTY_2, 
                style: style_coord_media_MTY_2,
                interactive: true,
                title: '<img src="styles/legend/coord_media_MTY_2.png" /> coord_media_MTY'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ubicaciones_mty_1.setVisible(true);lyr_coord_media_MTY_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ubicaciones_mty_1,lyr_coord_media_MTY_2];
lyr_ubicaciones_mty_1.set('fieldAliases', {'Folio': 'Folio', '# Cliente': '# Cliente', 'Fecha de creación': 'Fecha de creación', 'Tipo de envío': 'Tipo de envío', 'Tamaño': 'Tamaño', 'Fecha ETA': 'Fecha ETA', 'Detalles ETA': 'Detalles ETA', 'ID Empresa': 'ID Empresa', 'Empresa': 'Empresa', 'Servicio': 'Servicio', 'ShipHero Order': 'ShipHero Order', 'Carrier ID': 'Carrier ID', 'External Tracking ID': 'External Tracking ID', '$ COD': '$ COD', 'COD Pagado por Don veloz': 'COD Pagado por Don veloz', 'City to city': 'City to city', 'Origen: Estación (relación por CP)': 'Origen: Estación (relación por CP)', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Destino: Estación': 'Destino: Estación', 'Destino: Estación (relación por CP)': 'Destino: Estación (relación por CP)', 'Destino: CP': 'Destino: CP', 'Destino: Zonificación': 'Destino: Zonificación', 'Asignación: Fecha': 'Asignación: Fecha', 'Asignación: Estatus': 'Asignación: Estatus', 'Asignación: Descripción': 'Asignación: Descripción', 'Asignación: Don Veloz': 'Asignación: Don Veloz', 'Asignación: Nombre Don Veloz': 'Asignación: Nombre Don Veloz', 'Asignación: Proveedor': 'Asignación: Proveedor', 'Cierre: Fecha': 'Cierre: Fecha', 'Cierre: Estatus': 'Cierre: Estatus', 'Cierre: Descripción': 'Cierre: Descripción', 'Estación: Fecha': 'Estación: Fecha', 'Estación: Estatus': 'Estación: Estatus', 'Estación final: Fecha del primer 4.2': 'Estación final: Fecha del primer 4.2', 'Sin éxito: Fecha': 'Sin éxito: Fecha', 'Sin éxito: Estatus': 'Sin éxito: Estatus', 'Sin éxito: Motivo': 'Sin éxito: Motivo', '# Eventos: Sin éxito': '# Eventos: Sin éxito', 'Sin éxito: Coordenadas de cierre': 'Sin éxito: Coordenadas de cierre', 'Sin éxito: diferencia (mts) entre coordenada destino': 'Sin éxito: diferencia (mts) entre coordenada destino', 'Entrega: Fecha': 'Entrega: Fecha', 'Entrega: Estatus': 'Entrega: Estatus', '# Eventos: Entrega': '# Eventos: Entrega', 'Entrega: Coordenadas de cierre': 'Entrega: Coordenadas de cierre', 'Entrega: diferencia (mts) entre coordenada destino': 'Entrega: diferencia (mts) entre coordenada destino', 'Devolución sin éxito: Fecha': 'Devolución sin éxito: Fecha', 'Devolución sin éxito: Motivo': 'Devolución sin éxito: Motivo', 'Devolución terminada: Fecha': 'Devolución terminada: Fecha', 'Estatus actual: Fecha': 'Estatus actual: Fecha', 'Estatus actual: Estatus': 'Estatus actual: Estatus', 'Estatus actual: Descripción': 'Estatus actual: Descripción', 'Estatus actual: Don Veloz': 'Estatus actual: Don Veloz', 'Estatus actual: Nombre Don Veloz': 'Estatus actual: Nombre Don Veloz', 'Ruta: Inicio': 'Ruta: Inicio', 'Ruta: Finalización': 'Ruta: Finalización', 'Ruta: Kms': 'Ruta: Kms', });
lyr_coord_media_MTY_2.set('fieldAliases', {'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'estacion': 'estacion', });
lyr_ubicaciones_mty_1.set('fieldImages', {'Folio': 'TextEdit', '# Cliente': 'TextEdit', 'Fecha de creación': 'TextEdit', 'Tipo de envío': 'TextEdit', 'Tamaño': 'TextEdit', 'Fecha ETA': 'TextEdit', 'Detalles ETA': 'TextEdit', 'ID Empresa': 'Range', 'Empresa': 'TextEdit', 'Servicio': 'TextEdit', 'ShipHero Order': 'TextEdit', 'Carrier ID': 'TextEdit', 'External Tracking ID': 'TextEdit', '$ COD': 'TextEdit', 'COD Pagado por Don veloz': 'CheckBox', 'City to city': 'TextEdit', 'Origen: Estación (relación por CP)': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Destino: Estación': 'TextEdit', 'Destino: Estación (relación por CP)': 'TextEdit', 'Destino: CP': 'Range', 'Destino: Zonificación': 'TextEdit', 'Asignación: Fecha': 'TextEdit', 'Asignación: Estatus': 'TextEdit', 'Asignación: Descripción': 'TextEdit', 'Asignación: Don Veloz': 'TextEdit', 'Asignación: Nombre Don Veloz': 'TextEdit', 'Asignación: Proveedor': 'TextEdit', 'Cierre: Fecha': 'TextEdit', 'Cierre: Estatus': 'TextEdit', 'Cierre: Descripción': 'TextEdit', 'Estación: Fecha': 'TextEdit', 'Estación: Estatus': 'TextEdit', 'Estación final: Fecha del primer 4.2': 'TextEdit', 'Sin éxito: Fecha': 'TextEdit', 'Sin éxito: Estatus': 'TextEdit', 'Sin éxito: Motivo': 'TextEdit', '# Eventos: Sin éxito': 'Range', 'Sin éxito: Coordenadas de cierre': 'TextEdit', 'Sin éxito: diferencia (mts) entre coordenada destino': 'TextEdit', 'Entrega: Fecha': 'TextEdit', 'Entrega: Estatus': 'TextEdit', '# Eventos: Entrega': 'Range', 'Entrega: Coordenadas de cierre': 'TextEdit', 'Entrega: diferencia (mts) entre coordenada destino': 'TextEdit', 'Devolución sin éxito: Fecha': 'TextEdit', 'Devolución sin éxito: Motivo': 'TextEdit', 'Devolución terminada: Fecha': 'TextEdit', 'Estatus actual: Fecha': 'TextEdit', 'Estatus actual: Estatus': 'TextEdit', 'Estatus actual: Descripción': 'TextEdit', 'Estatus actual: Don Veloz': 'TextEdit', 'Estatus actual: Nombre Don Veloz': 'TextEdit', 'Ruta: Inicio': 'TextEdit', 'Ruta: Finalización': 'TextEdit', 'Ruta: Kms': 'TextEdit', });
lyr_coord_media_MTY_2.set('fieldImages', {'MEAN_X': 'TextEdit', 'MEAN_Y': 'TextEdit', 'estacion': '', });
lyr_ubicaciones_mty_1.set('fieldLabels', {'Folio': 'no label', '# Cliente': 'no label', 'Fecha de creación': 'no label', 'Tipo de envío': 'no label', 'Tamaño': 'no label', 'Fecha ETA': 'no label', 'Detalles ETA': 'no label', 'ID Empresa': 'no label', 'Empresa': 'no label', 'Servicio': 'no label', 'ShipHero Order': 'no label', 'Carrier ID': 'no label', 'External Tracking ID': 'no label', '$ COD': 'no label', 'COD Pagado por Don veloz': 'no label', 'City to city': 'no label', 'Origen: Estación (relación por CP)': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Destino: Estación': 'no label', 'Destino: Estación (relación por CP)': 'no label', 'Destino: CP': 'no label', 'Destino: Zonificación': 'no label', 'Asignación: Fecha': 'no label', 'Asignación: Estatus': 'no label', 'Asignación: Descripción': 'no label', 'Asignación: Don Veloz': 'no label', 'Asignación: Nombre Don Veloz': 'no label', 'Asignación: Proveedor': 'no label', 'Cierre: Fecha': 'no label', 'Cierre: Estatus': 'no label', 'Cierre: Descripción': 'no label', 'Estación: Fecha': 'no label', 'Estación: Estatus': 'no label', 'Estación final: Fecha del primer 4.2': 'no label', 'Sin éxito: Fecha': 'no label', 'Sin éxito: Estatus': 'no label', 'Sin éxito: Motivo': 'no label', '# Eventos: Sin éxito': 'no label', 'Sin éxito: Coordenadas de cierre': 'no label', 'Sin éxito: diferencia (mts) entre coordenada destino': 'no label', 'Entrega: Fecha': 'no label', 'Entrega: Estatus': 'no label', '# Eventos: Entrega': 'no label', 'Entrega: Coordenadas de cierre': 'no label', 'Entrega: diferencia (mts) entre coordenada destino': 'no label', 'Devolución sin éxito: Fecha': 'no label', 'Devolución sin éxito: Motivo': 'no label', 'Devolución terminada: Fecha': 'no label', 'Estatus actual: Fecha': 'no label', 'Estatus actual: Estatus': 'no label', 'Estatus actual: Descripción': 'no label', 'Estatus actual: Don Veloz': 'no label', 'Estatus actual: Nombre Don Veloz': 'no label', 'Ruta: Inicio': 'no label', 'Ruta: Finalización': 'no label', 'Ruta: Kms': 'no label', });
lyr_coord_media_MTY_2.set('fieldLabels', {'MEAN_X': 'header label', 'MEAN_Y': 'header label', 'estacion': 'header label', });
lyr_coord_media_MTY_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});