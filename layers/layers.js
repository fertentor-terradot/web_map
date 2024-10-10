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
var lyr_DEM_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5583970.000000, -2584890.000000, -5578820.000000, -2577340.000000]
                            })
                        });
var format_clusters_4 = new ol.format.GeoJSON();
var features_clusters_4 = format_clusters_4.readFeatures(json_clusters_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clusters_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clusters_4.addFeatures(features_clusters_4);
var lyr_clusters_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clusters_4, 
                style: style_clusters_4,
                popuplayertitle: "clusters",
                interactive: true,
    title: 'clusters<br />\
    <img src="styles/legend/clusters_4_0.png" /> {"rainfall": "1/3", "sand_5_30": "2/3", "clay_5_30": "2/3", "soil class": "Latossolo"}<br />\
    <img src="styles/legend/clusters_4_1.png" /> {"rainfall": "1/3", "sand_5_30": "3/3", "clay_5_30": "1/3", "soil class": "Latossolo"}<br />\
    <img src="styles/legend/clusters_4_2.png" /> {"rainfall": "1/3", "sand_5_30": "3/3", "clay_5_30": "2/3", "soil class": "Latossolo"}<br />\
    <img src="styles/legend/clusters_4_3.png" /> {"rainfall": "1/3", "sand_5_30": "3/3", "clay_5_30": "4/3", "soil class": "Latossolo"}<br />\
    <img src="styles/legend/clusters_4_4.png" /> <br />'
        });
var format_guaranta_plot_5 = new ol.format.GeoJSON();
var features_guaranta_plot_5 = format_guaranta_plot_5.readFeatures(json_guaranta_plot_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaranta_plot_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaranta_plot_5.addFeatures(features_guaranta_plot_5);
var lyr_guaranta_plot_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_guaranta_plot_5, 
                style: style_guaranta_plot_5,
                popuplayertitle: "guaranta_plot",
                interactive: true,
    title: 'guaranta_plot<br />\
    <img src="styles/legend/guaranta_plot_5_0.png" /> control<br />\
    <img src="styles/legend/guaranta_plot_5_1.png" /> deployment<br />\
    <img src="styles/legend/guaranta_plot_5_2.png" /> treatment<br />'
        });
var format_guaranta_6 = new ol.format.GeoJSON();
var features_guaranta_6 = format_guaranta_6.readFeatures(json_guaranta_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaranta_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaranta_6.addFeatures(features_guaranta_6);
var lyr_guaranta_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_guaranta_6, 
                style: style_guaranta_6,
                popuplayertitle: "guaranta",
                interactive: true,
                title: '<img src="styles/legend/guaranta_6.png" /> guaranta'
            });
var lyr_flowaccumulation_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "flowaccumulation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/flowaccumulation_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5583970.000000, -2584890.000000, -5578820.000000, -2577340.000000]
                            })
                        });
var format_FlowLine_8 = new ol.format.GeoJSON();
var features_FlowLine_8 = format_FlowLine_8.readFeatures(json_FlowLine_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlowLine_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlowLine_8.addFeatures(features_FlowLine_8);
var lyr_FlowLine_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlowLine_8, 
                style: style_FlowLine_8,
                popuplayertitle: "Flow Line",
                interactive: true,
                title: '<img src="styles/legend/FlowLine_8.png" /> Flow Line'
            });
var format_guaranta_preapp_241008_9 = new ol.format.GeoJSON();
var features_guaranta_preapp_241008_9 = format_guaranta_preapp_241008_9.readFeatures(json_guaranta_preapp_241008_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guaranta_preapp_241008_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guaranta_preapp_241008_9.addFeatures(features_guaranta_preapp_241008_9);
var lyr_guaranta_preapp_241008_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_guaranta_preapp_241008_9, 
                style: style_guaranta_preapp_241008_9,
                popuplayertitle: "guaranta_preapp_241008",
                interactive: true,
    title: 'guaranta_preapp_241008<br />\
    <img src="styles/legend/guaranta_preapp_241008_9_0.png" /> control<br />\
    <img src="styles/legend/guaranta_preapp_241008_9_1.png" /> deployment<br />\
    <img src="styles/legend/guaranta_preapp_241008_9_2.png" /> treatment<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_MaxNDVI_1.setVisible(true);lyr_LastNDVI_2.setVisible(true);lyr_DEM_3.setVisible(true);lyr_clusters_4.setVisible(true);lyr_guaranta_plot_5.setVisible(true);lyr_guaranta_6.setVisible(true);lyr_flowaccumulation_7.setVisible(true);lyr_FlowLine_8.setVisible(true);lyr_guaranta_preapp_241008_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MaxNDVI_1,lyr_LastNDVI_2,lyr_DEM_3,lyr_clusters_4,lyr_guaranta_plot_5,lyr_guaranta_6,lyr_flowaccumulation_7,lyr_FlowLine_8,lyr_guaranta_preapp_241008_9];
lyr_clusters_4.set('fieldAliases', {'dn': 'dn', 'inte2': 'inte2', 'inte': 'inte', 'rainfall': 'rainfall', 'sand_5_30': 'sand_5_30', 'clay_5_30': 'clay_5_30', 'soil_class': 'soil_class', 'var_params': 'var_params', 'gid': 'gid', });
lyr_guaranta_plot_5.set('fieldAliases', {'id': 'id', 'plot_type': 'plot_type', 'field_name': 'field_name', 'farm_name': 'farm_name', 'name': 'name', 'farm_id': 'farm_id', });
lyr_guaranta_6.set('fieldAliases', {'_uid_': '_uid_', 'name': 'name', 'farm_id': 'farm_id', 'field_boun': 'field_boun', 'id': 'id', 'initial_ph': 'initial_ph', 'fetch_from': 'fetch_from', 'strong_aci': 'strong_aci', 'soil_tempe': 'soil_tempe', 'cec_m_eq_p': 'cec_m_eq_p', 'soil_poros': 'soil_poros', 'texture_id': 'texture_id', 'bulk_densi': 'bulk_densi', 'organic_ca': 'organic_ca', 'precipitat': 'precipitat', 'management': 'management', 'land_use': 'land_use', 'field_note': 'field_note', 'associated': 'associated', 'uses_ferti': 'uses_ferti', 'fertilizer': 'fertilizer', 'p_co2_ppm': 'p_co2_ppm', 'status': 'status', 'sampling_s': 'sampling_s', 'spreading_': 'spreading_', 'trucking_s': 'trucking_s', 'net_primar': 'net_primar', 'rejected_r': 'rejected_r', 'initial_ar': 'initial_ar', 'farm_regis': 'farm_regis', });
lyr_FlowLine_8.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', });
lyr_guaranta_preapp_241008_9.set('fieldAliases', {'plot_type': 'plot_type', 'field_name': 'field_name', 'point_id': 'point_id', 'deep': 'deep', });
lyr_clusters_4.set('fieldImages', {'dn': 'TextEdit', 'inte2': 'TextEdit', 'inte': 'TextEdit', 'rainfall': 'TextEdit', 'sand_5_30': 'TextEdit', 'clay_5_30': 'TextEdit', 'soil_class': 'TextEdit', 'var_params': 'TextEdit', 'gid': 'TextEdit', });
lyr_guaranta_plot_5.set('fieldImages', {'id': 'TextEdit', 'plot_type': 'TextEdit', 'field_name': 'TextEdit', 'farm_name': 'TextEdit', 'name': 'TextEdit', 'farm_id': 'TextEdit', });
lyr_guaranta_6.set('fieldImages', {'_uid_': 'TextEdit', 'name': 'TextEdit', 'farm_id': 'TextEdit', 'field_boun': 'TextEdit', 'id': 'TextEdit', 'initial_ph': 'TextEdit', 'fetch_from': 'Range', 'strong_aci': 'TextEdit', 'soil_tempe': 'TextEdit', 'cec_m_eq_p': 'TextEdit', 'soil_poros': 'TextEdit', 'texture_id': 'TextEdit', 'bulk_densi': 'TextEdit', 'organic_ca': 'TextEdit', 'precipitat': 'TextEdit', 'management': 'TextEdit', 'land_use': 'TextEdit', 'field_note': 'TextEdit', 'associated': 'TextEdit', 'uses_ferti': 'Range', 'fertilizer': 'TextEdit', 'p_co2_ppm': 'TextEdit', 'status': 'TextEdit', 'sampling_s': 'TextEdit', 'spreading_': 'TextEdit', 'trucking_s': 'TextEdit', 'net_primar': 'TextEdit', 'rejected_r': 'TextEdit', 'initial_ar': 'TextEdit', 'farm_regis': 'TextEdit', });
lyr_FlowLine_8.set('fieldImages', {'fid': '', 'cat': '', });
lyr_guaranta_preapp_241008_9.set('fieldImages', {'plot_type': 'TextEdit', 'field_name': 'TextEdit', 'point_id': 'TextEdit', 'deep': 'TextEdit', });
lyr_clusters_4.set('fieldLabels', {'dn': 'no label', 'inte2': 'no label', 'inte': 'no label', 'rainfall': 'no label', 'sand_5_30': 'no label', 'clay_5_30': 'no label', 'soil_class': 'no label', 'var_params': 'no label', 'gid': 'no label', });
lyr_guaranta_plot_5.set('fieldLabels', {'id': 'no label', 'plot_type': 'no label', 'field_name': 'no label', 'farm_name': 'no label', 'name': 'no label', 'farm_id': 'no label', });
lyr_guaranta_6.set('fieldLabels', {'_uid_': 'no label', 'name': 'no label', 'farm_id': 'no label', 'field_boun': 'no label', 'id': 'no label', 'initial_ph': 'no label', 'fetch_from': 'no label', 'strong_aci': 'no label', 'soil_tempe': 'no label', 'cec_m_eq_p': 'no label', 'soil_poros': 'no label', 'texture_id': 'no label', 'bulk_densi': 'no label', 'organic_ca': 'no label', 'precipitat': 'no label', 'management': 'no label', 'land_use': 'no label', 'field_note': 'no label', 'associated': 'no label', 'uses_ferti': 'no label', 'fertilizer': 'no label', 'p_co2_ppm': 'no label', 'status': 'no label', 'sampling_s': 'no label', 'spreading_': 'no label', 'trucking_s': 'no label', 'net_primar': 'no label', 'rejected_r': 'no label', 'initial_ar': 'no label', 'farm_regis': 'no label', });
lyr_FlowLine_8.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', });
lyr_guaranta_preapp_241008_9.set('fieldLabels', {'plot_type': 'no label', 'field_name': 'no label', 'point_id': 'no label', 'deep': 'no label', });
lyr_guaranta_preapp_241008_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});