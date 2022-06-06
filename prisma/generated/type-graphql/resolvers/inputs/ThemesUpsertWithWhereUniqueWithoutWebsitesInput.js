"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesUpsertWithWhereUniqueWithoutWebsitesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesCreateWithoutWebsitesInput_1 = require("../inputs/ThemesCreateWithoutWebsitesInput");
const ThemesUpdateWithoutWebsitesInput_1 = require("../inputs/ThemesUpdateWithoutWebsitesInput");
const ThemesWhereUniqueInput_1 = require("../inputs/ThemesWhereUniqueInput");
let ThemesUpsertWithWhereUniqueWithoutWebsitesInput = class ThemesUpsertWithWhereUniqueWithoutWebsitesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereUniqueInput_1.ThemesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesWhereUniqueInput_1.ThemesWhereUniqueInput)
], ThemesUpsertWithWhereUniqueWithoutWebsitesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesUpdateWithoutWebsitesInput_1.ThemesUpdateWithoutWebsitesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesUpdateWithoutWebsitesInput_1.ThemesUpdateWithoutWebsitesInput)
], ThemesUpsertWithWhereUniqueWithoutWebsitesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCreateWithoutWebsitesInput_1.ThemesCreateWithoutWebsitesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesCreateWithoutWebsitesInput_1.ThemesCreateWithoutWebsitesInput)
], ThemesUpsertWithWhereUniqueWithoutWebsitesInput.prototype, "create", void 0);
ThemesUpsertWithWhereUniqueWithoutWebsitesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesUpsertWithWhereUniqueWithoutWebsitesInput", {
        isAbstract: true
    })
], ThemesUpsertWithWhereUniqueWithoutWebsitesInput);
exports.ThemesUpsertWithWhereUniqueWithoutWebsitesInput = ThemesUpsertWithWhereUniqueWithoutWebsitesInput;
