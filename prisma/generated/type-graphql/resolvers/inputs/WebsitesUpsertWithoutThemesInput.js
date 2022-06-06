"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesUpsertWithoutThemesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesCreateWithoutThemesInput_1 = require("../inputs/WebsitesCreateWithoutThemesInput");
const WebsitesUpdateWithoutThemesInput_1 = require("../inputs/WebsitesUpdateWithoutThemesInput");
let WebsitesUpsertWithoutThemesInput = class WebsitesUpsertWithoutThemesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesUpdateWithoutThemesInput_1.WebsitesUpdateWithoutThemesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesUpdateWithoutThemesInput_1.WebsitesUpdateWithoutThemesInput)
], WebsitesUpsertWithoutThemesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCreateWithoutThemesInput_1.WebsitesCreateWithoutThemesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesCreateWithoutThemesInput_1.WebsitesCreateWithoutThemesInput)
], WebsitesUpsertWithoutThemesInput.prototype, "create", void 0);
WebsitesUpsertWithoutThemesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesUpsertWithoutThemesInput", {
        isAbstract: true
    })
], WebsitesUpsertWithoutThemesInput);
exports.WebsitesUpsertWithoutThemesInput = WebsitesUpsertWithoutThemesInput;
