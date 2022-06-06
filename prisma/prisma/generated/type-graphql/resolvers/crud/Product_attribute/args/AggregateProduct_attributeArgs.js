"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeOrderByWithRelationInput_1 = require("../../../inputs/Product_attributeOrderByWithRelationInput");
const Product_attributeWhereInput_1 = require("../../../inputs/Product_attributeWhereInput");
const Product_attributeWhereUniqueInput_1 = require("../../../inputs/Product_attributeWhereUniqueInput");
let AggregateProduct_attributeArgs = class AggregateProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], AggregateProduct_attributeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeOrderByWithRelationInput_1.Product_attributeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateProduct_attributeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], AggregateProduct_attributeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProduct_attributeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProduct_attributeArgs.prototype, "skip", void 0);
AggregateProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateProduct_attributeArgs);
exports.AggregateProduct_attributeArgs = AggregateProduct_attributeArgs;
