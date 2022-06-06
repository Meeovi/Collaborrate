"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpsertWithoutProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutProduct_attributeInput_1 = require("../inputs/ProductsCreateWithoutProduct_attributeInput");
const ProductsUpdateWithoutProduct_attributeInput_1 = require("../inputs/ProductsUpdateWithoutProduct_attributeInput");
let ProductsUpsertWithoutProduct_attributeInput = class ProductsUpsertWithoutProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutProduct_attributeInput_1.ProductsUpdateWithoutProduct_attributeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutProduct_attributeInput_1.ProductsUpdateWithoutProduct_attributeInput)
], ProductsUpsertWithoutProduct_attributeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_attributeInput_1.ProductsCreateWithoutProduct_attributeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutProduct_attributeInput_1.ProductsCreateWithoutProduct_attributeInput)
], ProductsUpsertWithoutProduct_attributeInput.prototype, "create", void 0);
ProductsUpsertWithoutProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpsertWithoutProduct_attributeInput", {
        isAbstract: true
    })
], ProductsUpsertWithoutProduct_attributeInput);
exports.ProductsUpsertWithoutProduct_attributeInput = ProductsUpsertWithoutProduct_attributeInput;
