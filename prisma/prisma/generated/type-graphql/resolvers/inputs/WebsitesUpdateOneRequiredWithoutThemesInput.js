"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesUpdateOneRequiredWithoutThemesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesCreateOrConnectWithoutThemesInput_1 = require("../inputs/WebsitesCreateOrConnectWithoutThemesInput");
const WebsitesCreateWithoutThemesInput_1 = require("../inputs/WebsitesCreateWithoutThemesInput");
const WebsitesUpdateWithoutThemesInput_1 = require("../inputs/WebsitesUpdateWithoutThemesInput");
const WebsitesUpsertWithoutThemesInput_1 = require("../inputs/WebsitesUpsertWithoutThemesInput");
const WebsitesWhereUniqueInput_1 = require("../inputs/WebsitesWhereUniqueInput");
let WebsitesUpdateOneRequiredWithoutThemesInput = class WebsitesUpdateOneRequiredWithoutThemesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCreateWithoutThemesInput_1.WebsitesCreateWithoutThemesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesCreateWithoutThemesInput_1.WebsitesCreateWithoutThemesInput)
], WebsitesUpdateOneRequiredWithoutThemesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCreateOrConnectWithoutThemesInput_1.WebsitesCreateOrConnectWithoutThemesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesCreateOrConnectWithoutThemesInput_1.WebsitesCreateOrConnectWithoutThemesInput)
], WebsitesUpdateOneRequiredWithoutThemesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesUpsertWithoutThemesInput_1.WebsitesUpsertWithoutThemesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesUpsertWithoutThemesInput_1.WebsitesUpsertWithoutThemesInput)
], WebsitesUpdateOneRequiredWithoutThemesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput)
], WebsitesUpdateOneRequiredWithoutThemesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesUpdateWithoutThemesInput_1.WebsitesUpdateWithoutThemesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesUpdateWithoutThemesInput_1.WebsitesUpdateWithoutThemesInput)
], WebsitesUpdateOneRequiredWithoutThemesInput.prototype, "update", void 0);
WebsitesUpdateOneRequiredWithoutThemesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesUpdateOneRequiredWithoutThemesInput", {
        isAbstract: true
    })
], WebsitesUpdateOneRequiredWithoutThemesInput);
exports.WebsitesUpdateOneRequiredWithoutThemesInput = WebsitesUpdateOneRequiredWithoutThemesInput;
