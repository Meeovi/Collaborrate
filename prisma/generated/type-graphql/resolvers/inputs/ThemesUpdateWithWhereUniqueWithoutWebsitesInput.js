"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesUpdateWithWhereUniqueWithoutWebsitesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesUpdateWithoutWebsitesInput_1 = require("../inputs/ThemesUpdateWithoutWebsitesInput");
const ThemesWhereUniqueInput_1 = require("../inputs/ThemesWhereUniqueInput");
let ThemesUpdateWithWhereUniqueWithoutWebsitesInput = class ThemesUpdateWithWhereUniqueWithoutWebsitesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereUniqueInput_1.ThemesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesWhereUniqueInput_1.ThemesWhereUniqueInput)
], ThemesUpdateWithWhereUniqueWithoutWebsitesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesUpdateWithoutWebsitesInput_1.ThemesUpdateWithoutWebsitesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesUpdateWithoutWebsitesInput_1.ThemesUpdateWithoutWebsitesInput)
], ThemesUpdateWithWhereUniqueWithoutWebsitesInput.prototype, "data", void 0);
ThemesUpdateWithWhereUniqueWithoutWebsitesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesUpdateWithWhereUniqueWithoutWebsitesInput", {
        isAbstract: true
    })
], ThemesUpdateWithWhereUniqueWithoutWebsitesInput);
exports.ThemesUpdateWithWhereUniqueWithoutWebsitesInput = ThemesUpdateWithWhereUniqueWithoutWebsitesInput;
