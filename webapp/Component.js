jQuery.sap.declare("ui.s2p.mm.purcontract.approve.zmmsaapvext.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "ui.s2p.mm.purcontract.approve",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on cloud
	// Remove the url parameter once your application is deployed to productive account
	url: jQuery.sap.getModulePath("ui.s2p.mm.purcontract.approve.zmmsaapvext") + "/parent" // we use a URL relative to our own component
		// extension application is deployed with customer namespace
});
this.ui.s2p.mm.purcontract.approve.Component.extend("ui.s2p.mm.purcontract.approve.zmmsaapvext.Component", {
	metadata: {
		manifest: "json",
		version: "1.0.0",
		config: {
			"sap.ca.i18Nconfigs": {
				"bundleName": "ui.s2p.mm.purcontract.approve.zmmsaapvext.i18n.i18n"
			}
		},
		customizing: {
			"sap.ui.viewReplacements": {
				"ui.s2p.mm.purcontract.approve.view.S2": {
					"viewName": "ui.s2p.mm.purcontract.approve.zmmsaapvext.view.S2Custom",
					"type": "XML"
				},
				"ui.s2p.mm.purcontract.approve.view.ItemDetails": {
					"viewName": "ui.s2p.mm.purcontract.approve.zmmsaapvext.view.ItemDetailsCustom",
					"type": "XML"
				},
				"ui.s2p.mm.purcontract.approve.view.S3": {
					"viewName": "ui.s2p.mm.purcontract.approve.zmmsaapvext.view.S3Custom",
					"type": "XML"
				}
			},
			"sap.ui.viewModifications": {
				"ui.s2p.mm.purcontract.approve.view.S3": {
					"PCInformationAccountAssignment": {
						"visible": false
					},
					"PCInformationPlant": {
						"visible": false
					},
					"PCInformationContractType": {
						"visible": false
					}
				},
				"ui.s2p.mm.purcontract.approve.view.ItemDetails": {
					"PricingCondTableColumnQuantity": {
						"visible": false
					},
					"PricingCondTableColumnScale": {
						"visible": false
					}
				}
			},
			"sap.ui.viewExtensions": {
				"ui.s2p.mm.purcontract.approve.view.S3": {
					"extInformation": {
						"className": "sap.ui.core.Fragment",
						"fragmentName": "ui.s2p.mm.purcontract.approve.zmmsaapvext.view.S3_extInformationCustom",
						"type": "XML"
					}
				}
			},
			"sap.ui.controllerExtensions": {
				"ui.s2p.mm.purcontract.approve.view.S3": {
					"controllerName": "ui.s2p.mm.purcontract.approve.zmmsaapvext.view.S3Custom"
				}
			}
		}
	}
});