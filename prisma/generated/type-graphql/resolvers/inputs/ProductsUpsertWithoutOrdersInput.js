"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutOrdersInput_1 = require("../inputs/ProductsCreateWithoutOrdersInput");
const ProductsUpdateWithoutOrdersInput_1 = require("../inputs/ProductsUpdateWithoutOrdersInput");
let ProductsUpsertWithoutOrdersInput = class ProductsUpsertWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutOrdersInput_1.ProductsUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutOrdersInput_1.ProductsUpdateWithoutOrdersInput)
], ProductsUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutOrdersInput_1.ProductsCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutOrdersInput_1.ProductsCreateWithoutOrdersInput)
], ProductsUpsertWithoutOrdersInput.prototype, "create", void 0);
ProductsUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpsertWithoutOrdersInput", {
        isAbstract: true
    })
], ProductsUpsertWithoutOrdersInput);
exports.ProductsUpsertWithoutOrdersInput = ProductsUpsertWithoutOrdersInput;
