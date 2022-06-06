"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsReturnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsOrderByWithRelationInput_1 = require("../../../inputs/ReturnsOrderByWithRelationInput");
const ReturnsWhereInput_1 = require("../../../inputs/ReturnsWhereInput");
const ReturnsWhereUniqueInput_1 = require("../../../inputs/ReturnsWhereUniqueInput");
const ReturnsScalarFieldEnum_1 = require("../../../../enums/ReturnsScalarFieldEnum");
let ProductsReturnsArgs = class ProductsReturnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereInput_1.ReturnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsWhereInput_1.ReturnsWhereInput)
], ProductsReturnsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsOrderByWithRelationInput_1.ReturnsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsReturnsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], ProductsReturnsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsReturnsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsReturnsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReturnsScalarFieldEnum_1.ReturnsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsReturnsArgs.prototype, "distinct", void 0);
ProductsReturnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductsReturnsArgs);
exports.ProductsReturnsArgs = ProductsReturnsArgs;
