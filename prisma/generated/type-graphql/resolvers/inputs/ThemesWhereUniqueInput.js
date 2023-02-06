"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThemesWhereUniqueInput = class ThemesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ThemesWhereUniqueInput.prototype, "id", void 0);
ThemesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesWhereUniqueInput", {
        isAbstract: true
    })
], ThemesWhereUniqueInput);
exports.ThemesWhereUniqueInput = ThemesWhereUniqueInput;
