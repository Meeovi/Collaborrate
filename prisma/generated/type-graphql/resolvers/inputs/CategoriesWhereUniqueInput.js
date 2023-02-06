"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoriesWhereUniqueInput = class CategoriesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CategoriesWhereUniqueInput.prototype, "id", void 0);
CategoriesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoriesWhereUniqueInput", {
        isAbstract: true
    })
], CategoriesWhereUniqueInput);
exports.CategoriesWhereUniqueInput = CategoriesWhereUniqueInput;
