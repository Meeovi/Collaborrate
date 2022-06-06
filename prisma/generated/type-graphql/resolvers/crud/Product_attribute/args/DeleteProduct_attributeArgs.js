"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeWhereUniqueInput_1 = require("../../../inputs/Product_attributeWhereUniqueInput");
let DeleteProduct_attributeArgs = class DeleteProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], DeleteProduct_attributeArgs.prototype, "where", void 0);
DeleteProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteProduct_attributeArgs);
exports.DeleteProduct_attributeArgs = DeleteProduct_attributeArgs;
