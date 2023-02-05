"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsWhereUniqueInput_1 = require("../../../inputs/ProductsWhereUniqueInput");
let FindUniqueProductsOrThrowArgs = class FindUniqueProductsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], FindUniqueProductsOrThrowArgs.prototype, "where", void 0);
FindUniqueProductsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProductsOrThrowArgs);
exports.FindUniqueProductsOrThrowArgs = FindUniqueProductsOrThrowArgs;
