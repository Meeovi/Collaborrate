"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setScalarWhereInput_1 = require("../inputs/Product_attribute_setScalarWhereInput");
const Product_attribute_setUpdateManyMutationInput_1 = require("../inputs/Product_attribute_setUpdateManyMutationInput");
let Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput = class Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setScalarWhereInput_1.Product_attribute_setScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setScalarWhereInput_1.Product_attribute_setScalarWhereInput)
], Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setUpdateManyMutationInput_1.Product_attribute_setUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setUpdateManyMutationInput_1.Product_attribute_setUpdateManyMutationInput)
], Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput.prototype, "data", void 0);
Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput", {
        isAbstract: true
    })
], Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput);
exports.Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput = Product_attribute_setUpdateManyWithWhereWithoutProduct_attributeInput;
