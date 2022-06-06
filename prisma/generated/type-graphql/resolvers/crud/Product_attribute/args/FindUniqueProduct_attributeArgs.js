"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeWhereUniqueInput_1 = require("../../../inputs/Product_attributeWhereUniqueInput");
let FindUniqueProduct_attributeArgs = class FindUniqueProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], FindUniqueProduct_attributeArgs.prototype, "where", void 0);
FindUniqueProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProduct_attributeArgs);
exports.FindUniqueProduct_attributeArgs = FindUniqueProduct_attributeArgs;
