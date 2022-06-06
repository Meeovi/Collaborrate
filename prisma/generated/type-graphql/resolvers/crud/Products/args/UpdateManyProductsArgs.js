"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsUpdateManyMutationInput_1 = require("../../../inputs/ProductsUpdateManyMutationInput");
const ProductsWhereInput_1 = require("../../../inputs/ProductsWhereInput");
let UpdateManyProductsArgs = class UpdateManyProductsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateManyMutationInput_1.ProductsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateManyMutationInput_1.ProductsUpdateManyMutationInput)
], UpdateManyProductsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereInput_1.ProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereInput_1.ProductsWhereInput)
], UpdateManyProductsArgs.prototype, "where", void 0);
UpdateManyProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProductsArgs);
exports.UpdateManyProductsArgs = UpdateManyProductsArgs;
