"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeWhereInput_1 = require("../../../inputs/Product_attributeWhereInput");
let DeleteManyProduct_attributeArgs = class DeleteManyProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], DeleteManyProduct_attributeArgs.prototype, "where", void 0);
DeleteManyProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyProduct_attributeArgs);
exports.DeleteManyProduct_attributeArgs = DeleteManyProduct_attributeArgs;
