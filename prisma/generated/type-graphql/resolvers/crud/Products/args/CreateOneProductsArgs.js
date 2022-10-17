"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateInput_1 = require("../../../inputs/ProductsCreateInput");
let CreateOneProductsArgs = class CreateOneProductsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateInput_1.ProductsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateInput_1.ProductsCreateInput)
], CreateOneProductsArgs.prototype, "data", void 0);
CreateOneProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneProductsArgs);
exports.CreateOneProductsArgs = CreateOneProductsArgs;
