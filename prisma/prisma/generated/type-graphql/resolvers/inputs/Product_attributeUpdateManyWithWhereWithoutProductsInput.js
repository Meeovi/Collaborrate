"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeUpdateManyWithWhereWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeScalarWhereInput_1 = require("../inputs/Product_attributeScalarWhereInput");
const Product_attributeUpdateManyMutationInput_1 = require("../inputs/Product_attributeUpdateManyMutationInput");
let Product_attributeUpdateManyWithWhereWithoutProductsInput = class Product_attributeUpdateManyWithWhereWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeScalarWhereInput_1.Product_attributeScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeScalarWhereInput_1.Product_attributeScalarWhereInput)
], Product_attributeUpdateManyWithWhereWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeUpdateManyMutationInput_1.Product_attributeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeUpdateManyMutationInput_1.Product_attributeUpdateManyMutationInput)
], Product_attributeUpdateManyWithWhereWithoutProductsInput.prototype, "data", void 0);
Product_attributeUpdateManyWithWhereWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeUpdateManyWithWhereWithoutProductsInput", {
        isAbstract: true
    })
], Product_attributeUpdateManyWithWhereWithoutProductsInput);
exports.Product_attributeUpdateManyWithWhereWithoutProductsInput = Product_attributeUpdateManyWithWhereWithoutProductsInput;
