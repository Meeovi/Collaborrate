"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setOrderByWithRelationInput_1 = require("../../../inputs/Product_attribute_setOrderByWithRelationInput");
const Product_attribute_setWhereInput_1 = require("../../../inputs/Product_attribute_setWhereInput");
const Product_attribute_setWhereUniqueInput_1 = require("../../../inputs/Product_attribute_setWhereUniqueInput");
let AggregateProduct_attribute_setArgs = class AggregateProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereInput_1.Product_attribute_setWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereInput_1.Product_attribute_setWhereInput)
], AggregateProduct_attribute_setArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setOrderByWithRelationInput_1.Product_attribute_setOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateProduct_attribute_setArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput)
], AggregateProduct_attribute_setArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProduct_attribute_setArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProduct_attribute_setArgs.prototype, "skip", void 0);
AggregateProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateProduct_attribute_setArgs);
exports.AggregateProduct_attribute_setArgs = AggregateProduct_attribute_setArgs;
