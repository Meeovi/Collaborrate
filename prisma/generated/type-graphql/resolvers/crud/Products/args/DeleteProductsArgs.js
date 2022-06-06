"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsWhereUniqueInput_1 = require("../../../inputs/ProductsWhereUniqueInput");
let DeleteProductsArgs = class DeleteProductsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], DeleteProductsArgs.prototype, "where", void 0);
DeleteProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteProductsArgs);
exports.DeleteProductsArgs = DeleteProductsArgs;
