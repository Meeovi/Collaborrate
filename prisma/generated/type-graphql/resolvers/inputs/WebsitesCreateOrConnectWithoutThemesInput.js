"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesCreateOrConnectWithoutThemesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesCreateWithoutThemesInput_1 = require("../inputs/WebsitesCreateWithoutThemesInput");
const WebsitesWhereUniqueInput_1 = require("../inputs/WebsitesWhereUniqueInput");
let WebsitesCreateOrConnectWithoutThemesInput = class WebsitesCreateOrConnectWithoutThemesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput)
], WebsitesCreateOrConnectWithoutThemesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCreateWithoutThemesInput_1.WebsitesCreateWithoutThemesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesCreateWithoutThemesInput_1.WebsitesCreateWithoutThemesInput)
], WebsitesCreateOrConnectWithoutThemesInput.prototype, "create", void 0);
WebsitesCreateOrConnectWithoutThemesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesCreateOrConnectWithoutThemesInput", {
        isAbstract: true
    })
], WebsitesCreateOrConnectWithoutThemesInput);
exports.WebsitesCreateOrConnectWithoutThemesInput = WebsitesCreateOrConnectWithoutThemesInput;
