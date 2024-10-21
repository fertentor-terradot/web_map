var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_MaxNDVI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Max NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MaxNDVI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5583970.000000, -2584896.717612, -5578820.000000, -2577337.325953]
                            })
                        });
var lyr_LastNDVI_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Last NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LastNDVI_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5583970.000000, -2584896.717612, -5578820.000000, -2577337.325953]
                            })
                        });
var format_clusters_3 = new ol.format.GeoJSON();
var features_clusters_3 = format_clusters_3.readFeatures(json_clusters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clusters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clusters_3.addFeatures(features_clusters_3);
var lyr_clusters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clusters_3, 
                style: style_clusters_3,
                popuplayertitle: "clusters",
                interactive: true,
    title: 'clusters<br />\
    <img src="styles/legend/clusters_3_0.png" /> rainfall: Low, sand_5_30: High, clay_5_30: 4/3, soil class: Latossolo<br />\
    <img src="styles/legend/clusters_3_1.png" /> rainfall: Low, sand_5_30: High, clay_5_30: Low, soil class: Latossolo<br />\
    <img src="styles/legend/clusters_3_2.png" /> rainfall: Low, sand_5_30: High, clay_5_30: Medium, soil class: Latossolo<br />\
    <img src="styles/legend/clusters_3_3.png" /> rainfall: Low, sand_5_30: Medium, clay_5_30: Medium, soil class: Latossolo<br />\
    <img src="styles/legend/clusters_3_4.png" /> <br />'
        });
var format_guaranta_4 = new ol.format.GeoJSON();
var features_guaranta_4 = format_guaranta_4.readFeatures(json_guaranta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaranta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaranta_4.addFeatures(features_guaranta_4);
var lyr_guaranta_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_guaranta_4, 
                style: style_guaranta_4,
                popuplayertitle: "guaranta",
                interactive: true,
                title: '<img src="styles/legend/guaranta_4.png" /> guaranta'
            });
var lyr_MaskedDEM_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Masked DEM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MaskedDEM_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5583970.000000, -2584890.000000, -5578820.000000, -2577340.000000]
                            })
                        });
var lyr_flowaccumulation_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "flowaccumulation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/flowaccumulation_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5583970.000000, -2584890.000000, -5578820.000000, -2577340.000000]
                            })
                        });
var format_FlowLine_7 = new ol.format.GeoJSON();
var features_FlowLine_7 = format_FlowLine_7.readFeatures(json_FlowLine_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlowLine_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlowLine_7.addFeatures(features_FlowLine_7);
var lyr_FlowLine_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlowLine_7, 
                style: style_FlowLine_7,
                popuplayertitle: "Flow Line",
                interactive: true,
                title: '<img src="styles/legend/FlowLine_7.png" /> Flow Line'
            });
var format_guarantacluster_8 = new ol.format.GeoJSON();
var features_guarantacluster_8 = format_guarantacluster_8.readFeatures(json_guarantacluster_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guarantacluster_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guarantacluster_8.addFeatures(features_guarantacluster_8);
var lyr_guarantacluster_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_guarantacluster_8, 
                style: style_guarantacluster_8,
                popuplayertitle: "guaranta cluster",
                interactive: true,
    title: 'guaranta cluster<br />\
    <img src="styles/legend/guarantacluster_8_0.png" /> 0<br />\
    <img src="styles/legend/guarantacluster_8_1.png" /> 1<br />\
    <img src="styles/legend/guarantacluster_8_2.png" /> 2<br />'
        });
var format_guaranta_plot_9 = new ol.format.GeoJSON();
var features_guaranta_plot_9 = format_guaranta_plot_9.readFeatures(json_guaranta_plot_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaranta_plot_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaranta_plot_9.addFeatures(features_guaranta_plot_9);
var lyr_guaranta_plot_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_guaranta_plot_9, 
                style: style_guaranta_plot_9,
                popuplayertitle: "guaranta_plot",
                interactive: true,
    title: 'guaranta_plot<br />\
    <img src="styles/legend/guaranta_plot_9_0.png" /> control<br />\
    <img src="styles/legend/guaranta_plot_9_1.png" /> deployment<br />\
    <img src="styles/legend/guaranta_plot_9_2.png" /> treatment<br />\
    <img src="styles/legend/guaranta_plot_9_3.png" /> <br />'
        });
var format_PreappSampligPlan_10 = new ol.format.GeoJSON();
var features_PreappSampligPlan_10 = format_PreappSampligPlan_10.readFeatures(json_PreappSampligPlan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PreappSampligPlan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PreappSampligPlan_10.addFeatures(features_PreappSampligPlan_10);
var lyr_PreappSampligPlan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PreappSampligPlan_10, 
                style: style_PreappSampligPlan_10,
                popuplayertitle: "Pre app Samplig Plan ",
                interactive: true,
                title: '<img src="styles/legend/PreappSampligPlan_10.png" /> Pre app Samplig Plan '
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MaxNDVI_1.setVisible(true);lyr_LastNDVI_2.setVisible(true);lyr_clusters_3.setVisible(true);lyr_guaranta_4.setVisible(true);lyr_MaskedDEM_5.setVisible(true);lyr_flowaccumulation_6.setVisible(true);lyr_FlowLine_7.setVisible(true);lyr_guarantacluster_8.setVisible(true);lyr_guaranta_plot_9.setVisible(true);lyr_PreappSampligPlan_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MaxNDVI_1,lyr_LastNDVI_2,lyr_clusters_3,lyr_guaranta_4,lyr_MaskedDEM_5,lyr_flowaccumulation_6,lyr_FlowLine_7,lyr_guarantacluster_8,lyr_guaranta_plot_9,lyr_PreappSampligPlan_10];
lyr_clusters_3.set('fieldAliases', {'dn': 'dn', 'inte2': 'inte2', 'inte': 'inte', 'rainfall': 'rainfall', 'sand_5_30': 'sand_5_30', 'clay_5_30': 'clay_5_30', 'soil_class': 'soil_class', 'var_params': 'var_params', 'gid': 'gid', });
lyr_guaranta_4.set('fieldAliases', {'field_name': 'field_name', });
lyr_FlowLine_7.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', });
lyr_guarantacluster_8.set('fieldAliases', {'ndvi': 'ndvi', 'clay_0_5': 'clay_0_5', 'clay_5_15': 'clay_5_15', 'clay_15_30': 'clay_15_30', 'sand_0_5': 'sand_0_5', 'sand_5_15': 'sand_5_15', 'sand_15_30': 'sand_15_30', 'lat': 'lat', 'lon': 'lon', 'field_name': 'field_name', 'cluster': 'cluster', });
lyr_guaranta_plot_9.set('fieldAliases', {'field_name': 'field_name', 'plot_type': 'plot_type', });
lyr_PreappSampligPlan_10.set('fieldAliases', {'plot_type': 'plot_type', 'field_name': 'field_name', 'point_id': 'point_id', 'deep': 'deep', });
lyr_clusters_3.set('fieldImages', {'dn': 'TextEdit', 'inte2': 'TextEdit', 'inte': 'TextEdit', 'rainfall': 'TextEdit', 'sand_5_30': 'TextEdit', 'clay_5_30': 'TextEdit', 'soil_class': 'TextEdit', 'var_params': 'TextEdit', 'gid': 'TextEdit', });
lyr_guaranta_4.set('fieldImages', {'field_name': '', });
lyr_FlowLine_7.set('fieldImages', {'fid': '', 'cat': '', });
lyr_guarantacluster_8.set('fieldImages', {'ndvi': 'TextEdit', 'clay_0_5': 'TextEdit', 'clay_5_15': 'TextEdit', 'clay_15_30': 'TextEdit', 'sand_0_5': 'TextEdit', 'sand_5_15': 'TextEdit', 'sand_15_30': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'field_name': 'TextEdit', 'cluster': 'Range', });
lyr_guaranta_plot_9.set('fieldImages', {'field_name': 'TextEdit', 'plot_type': 'TextEdit', });
lyr_PreappSampligPlan_10.set('fieldImages', {'plot_type': '', 'field_name': '', 'point_id': '', 'deep': '', });
lyr_clusters_3.set('fieldLabels', {'dn': 'no label', 'inte2': 'no label', 'inte': 'no label', 'rainfall': 'no label', 'sand_5_30': 'no label', 'clay_5_30': 'no label', 'soil_class': 'no label', 'var_params': 'no label', 'gid': 'no label', });
lyr_guaranta_4.set('fieldLabels', {'field_name': 'no label', });
lyr_FlowLine_7.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', });
lyr_guarantacluster_8.set('fieldLabels', {'ndvi': 'no label', 'clay_0_5': 'no label', 'clay_5_15': 'no label', 'clay_15_30': 'no label', 'sand_0_5': 'no label', 'sand_5_15': 'no label', 'sand_15_30': 'no label', 'lat': 'no label', 'lon': 'no label', 'field_name': 'no label', 'cluster': 'no label', });
lyr_guaranta_plot_9.set('fieldLabels', {'field_name': 'no label', 'plot_type': 'no label', });
lyr_PreappSampligPlan_10.set('fieldLabels', {'plot_type': 'no label', 'field_name': 'no label', 'point_id': 'no label', 'deep': 'no label', });
lyr_PreappSampligPlan_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});