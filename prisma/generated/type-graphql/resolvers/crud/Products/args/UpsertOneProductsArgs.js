"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateInput_1 = require("../../../inputs/ProductsCreateInput");
const ProductsUpdateInput_1 = require("../../../inputs/ProductsUpdateInput");
const ProductsWhereUniqueInput_1 = require("../../../inputs/ProductsWhereUniqueInput");
let UpsertOneProductsArgs = class UpsertOneProductsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], UpsertOneProductsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateInput_1.ProductsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateInput_1.ProductsCreateInput)
], UpsertOneProductsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateInput_1.ProductsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateInput_1.ProductsUpdateInput)
], UpsertOneProductsArgs.prototype, "update", void 0);
UpsertOneProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneProductsArgs);
exports.UpsertOneProductsArgs = UpsertOneProductsArgs;
