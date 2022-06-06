"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesWhereInput_1 = require("../inputs/ThemesWhereInput");
let ThemesListRelationFilter = class ThemesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereInput_1.ThemesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesWhereInput_1.ThemesWhereInput)
], ThemesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereInput_1.ThemesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesWhereInput_1.ThemesWhereInput)
], ThemesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereInput_1.ThemesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesWhereInput_1.ThemesWhereInput)
], ThemesListRelationFilter.prototype, "none", void 0);
ThemesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesListRelationFilter", {
        isAbstract: true
    })
], ThemesListRelationFilter);
exports.ThemesListRelationFilter = ThemesListRelationFilter;
