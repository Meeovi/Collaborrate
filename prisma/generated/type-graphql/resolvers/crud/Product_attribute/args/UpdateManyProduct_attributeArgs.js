"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeUpdateManyMutationInput_1 = require("../../../inputs/Product_attributeUpdateManyMutationInput");
const Product_attributeWhereInput_1 = require("../../../inputs/Product_attributeWhereInput");
let UpdateManyProduct_attributeArgs = class UpdateManyProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeUpdateManyMutationInput_1.Product_attributeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeUpdateManyMutationInput_1.Product_attributeUpdateManyMutationInput)
], UpdateManyProduct_attributeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], UpdateManyProduct_attributeArgs.prototype, "where", void 0);
UpdateManyProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProduct_attributeArgs);
exports.UpdateManyProduct_attributeArgs = UpdateManyProduct_attributeArgs;
