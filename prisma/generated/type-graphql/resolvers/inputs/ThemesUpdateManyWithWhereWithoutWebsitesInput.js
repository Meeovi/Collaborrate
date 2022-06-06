"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesUpdateManyWithWhereWithoutWebsitesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesScalarWhereInput_1 = require("../inputs/ThemesScalarWhereInput");
const ThemesUpdateManyMutationInput_1 = require("../inputs/ThemesUpdateManyMutationInput");
let ThemesUpdateManyWithWhereWithoutWebsitesInput = class ThemesUpdateManyWithWhereWithoutWebsitesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesScalarWhereInput_1.ThemesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesScalarWhereInput_1.ThemesScalarWhereInput)
], ThemesUpdateManyWithWhereWithoutWebsitesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesUpdateManyMutationInput_1.ThemesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesUpdateManyMutationInput_1.ThemesUpdateManyMutationInput)
], ThemesUpdateManyWithWhereWithoutWebsitesInput.prototype, "data", void 0);
ThemesUpdateManyWithWhereWithoutWebsitesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesUpdateManyWithWhereWithoutWebsitesInput", {
        isAbstract: true
    })
], ThemesUpdateManyWithWhereWithoutWebsitesInput);
exports.ThemesUpdateManyWithWhereWithoutWebsitesInput = ThemesUpdateManyWithWhereWithoutWebsitesInput;
