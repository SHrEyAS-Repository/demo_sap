sap.ui.controller("ui.s2p.mm.purcontract.approve.zmmsaapvext.view.S3Custom", {

	extHookSetHeaderFooterOptions: function (l) {
		// Place your hook implementation code here 
		var that = this;
		this.oHeaderFooterOptions = {
			oPositiveAction: {
				sI18nBtnTxt: that.resourceBundle.getText("XBUT_APPROVE"),
				onBtnPressed: jQuery.proxy(that.openApproveDialog, that)
			},
		/*	oNegativeAction: {
				sI18nBtnTxt: that.resourceBundle.getText("XBUT_REJECT"),
				onBtnPressed: jQuery.proxy(that.openRejectDialog, that)
			},*/
			buttonList: [{
				sId: "btn_Forward",
				sI18nBtnTxt: "XBUT_FORWARD",
				onBtnPressed: jQuery.proxy(this.handleForward, that)
			}],
			onBack: jQuery.proxy(function () {
				if (sap.ui.Device.system.phone) {
					window.history.go(-1);
				}
			}, this)
		};
		this.setHeaderFooterOptions(this.oHeaderFooterOptions);

	}
/*
	openRejectDialog: function (a) {
		var C = this.oView.getBindingContext().getProperty("CreatedByID");
		var d = this.resourceBundle.getText("dialog.question.reject", [C]);
		var D = this.resourceBundle.getText("XTIT_REJECT");
		this.sTextKey = "dialog.success.reject";
		var t = this;
		new sap.m.Dialog(this.createId("s3ApproveDialog"), {
			title: D,
			showHeader: true,
			content: [new sap.ui.layout.VerticalLayout({
				width: "100%",
				content: [
					new sap.m.Text(this.createId("S3ConfirmRejectDialogTextField"), {
						text: d
					}).addStyleClass("sapUiSmallMarginBottom"),
					new sap.m.TextArea(this.createId("S3ConfirmRejectDialogTextFieldForNotes"), {
						maxLength: 0,
						width: "100%",
						placeholder: this.resourceBundle.getText("dialog.ApproveRejectForward.NotePlaceHolder"),
						editable: true
					})
				]
			})],
			beginButton: new sap.m.Button({
				text: this.resourceBundle.getText("XBUT_OK"),
				press: function () {
					var n = t.byId("S3ConfirmRejectDialogTextFieldForNotes").getValue();
					var r = {
						isConfirmed: true,
						sNote: n
					};
					t.handleApproveReject(r);
					t.byId("s3ApproveDialog").close();
				}
			}),
			endButton: new sap.m.Button({
				text: this.resourceBundle.getText("XBUT_CANCEL"),
				press: function () {
					t.byId("s3ApproveDialog").close();
				}
			}),
			afterClose: function (e) {
				this.destroy();
			}
		}).addStyleClass("sapUiPopupWithPadding").open();
	},
	handleApproveReject: function (r) {
		var d = this.oView.getModel().getProperty(this.oView.getBindingContext().getPath());
		var c;
		if (r.sNote) {
			c = r.sNote;
		} else {
			c = "";
		}
		this.oDataModel.setRefreshAfterChange(false);
		this.oDataModel.callFunction("ApplyDecision", "POST", {
			SAP__Origin: d.SAP__Origin,
			WorkitemID: d.WorkitemID,
			DecisionKey: "0002",
			Comment: c
		}, undefined, jQuery.proxy(this._handleApproveSuccess, this), jQuery.proxy(this._handleApproveForwardFail, this));

	}
*/
});