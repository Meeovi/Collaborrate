"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesCreateNestedOneWithoutThemesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesCreateOrConnectWithoutThemesInput_1 = require("../inputs/WebsitesCreateOrConnectWithoutThemesInput");
const WebsitesCreateWithoutThemesInput_1 = require("../inputs/WebsitesCreateWithoutThemesInput");
const WebsitesWhereUniqueInput_1 = require("../inputs/WebsitesWhereUniqueInput");
let WebsitesCreateNestedOneWithoutThemesInput = class WebsitesCreateNestedOneWithoutThemesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCreateWithoutThemesInput_1.WebsitesCreateWithoutThemesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesCreateWithoutThemesInput_1.WebsitesCreateWithoutThemesInput)
], WebsitesCreateNestedOneWithoutThemesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCreateOrConnectWithoutThemesInput_1.WebsitesCreateOrConnectWithoutThemesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesCreateOrConnectWithoutThemesInput_1.WebsitesCreateOrConnectWithoutThemesInput)
], WebsitesCreateNestedOneWithoutThemesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput)
], WebsitesCreateNestedOneWithoutThemesInput.prototype, "connect", void 0);
WebsitesCreateNestedOneWithoutThemesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesCreateNestedOneWithoutThemesInput", {
        isAbstract: true
    })
], WebsitesCreateNestedOneWithoutThemesInput);
exports.WebsitesCreateNestedOneWithoutThemesInput = WebsitesCreateNestedOneWithoutThemesInput;
