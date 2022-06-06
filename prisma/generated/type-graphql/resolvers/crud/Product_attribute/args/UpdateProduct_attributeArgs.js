"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeUpdateInput_1 = require("../../../inputs/Product_attributeUpdateInput");
const Product_attributeWhereUniqueInput_1 = require("../../../inputs/Product_attributeWhereUniqueInput");
let UpdateProduct_attributeArgs = class UpdateProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeUpdateInput_1.Product_attributeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeUpdateInput_1.Product_attributeUpdateInput)
], UpdateProduct_attributeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], UpdateProduct_attributeArgs.prototype, "where", void 0);
UpdateProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateProduct_attributeArgs);
exports.UpdateProduct_attributeArgs = UpdateProduct_attributeArgs;
