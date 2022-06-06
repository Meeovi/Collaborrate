"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attributeWhereUniqueInput = class Product_attributeWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attributeWhereUniqueInput.prototype, "id", void 0);
Product_attributeWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeWhereUniqueInput", {
        isAbstract: true
    })
], Product_attributeWhereUniqueInput);
exports.Product_attributeWhereUniqueInput = Product_attributeWhereUniqueInput;
