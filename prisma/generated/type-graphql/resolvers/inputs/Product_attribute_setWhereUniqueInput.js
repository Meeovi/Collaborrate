"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attribute_setWhereUniqueInput = class Product_attribute_setWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setWhereUniqueInput.prototype, "id", void 0);
Product_attribute_setWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setWhereUniqueInput", {
        isAbstract: true
    })
], Product_attribute_setWhereUniqueInput);
exports.Product_attribute_setWhereUniqueInput = Product_attribute_setWhereUniqueInput;
