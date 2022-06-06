"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateInput_1 = require("../../../inputs/ProductsCreateInput");
const ProductsUpdateInput_1 = require("../../../inputs/ProductsUpdateInput");
const ProductsWhereUniqueInput_1 = require("../../../inputs/ProductsWhereUniqueInput");
let UpsertProductsArgs = class UpsertProductsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], UpsertProductsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateInput_1.ProductsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateInput_1.ProductsCreateInput)
], UpsertProductsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateInput_1.ProductsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateInput_1.ProductsUpdateInput)
], UpsertProductsArgs.prototype, "update", void 0);
UpsertProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertProductsArgs);
exports.UpsertProductsArgs = UpsertProductsArgs;
