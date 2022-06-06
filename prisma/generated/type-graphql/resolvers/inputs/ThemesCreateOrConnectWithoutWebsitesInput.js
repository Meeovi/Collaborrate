"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesCreateOrConnectWithoutWebsitesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesCreateWithoutWebsitesInput_1 = require("../inputs/ThemesCreateWithoutWebsitesInput");
const ThemesWhereUniqueInput_1 = require("../inputs/ThemesWhereUniqueInput");
let ThemesCreateOrConnectWithoutWebsitesInput = class ThemesCreateOrConnectWithoutWebsitesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereUniqueInput_1.ThemesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesWhereUniqueInput_1.ThemesWhereUniqueInput)
], ThemesCreateOrConnectWithoutWebsitesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCreateWithoutWebsitesInput_1.ThemesCreateWithoutWebsitesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesCreateWithoutWebsitesInput_1.ThemesCreateWithoutWebsitesInput)
], ThemesCreateOrConnectWithoutWebsitesInput.prototype, "create", void 0);
ThemesCreateOrConnectWithoutWebsitesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesCreateOrConnectWithoutWebsitesInput", {
        isAbstract: true
    })
], ThemesCreateOrConnectWithoutWebsitesInput);
exports.ThemesCreateOrConnectWithoutWebsitesInput = ThemesCreateOrConnectWithoutWebsitesInput;
