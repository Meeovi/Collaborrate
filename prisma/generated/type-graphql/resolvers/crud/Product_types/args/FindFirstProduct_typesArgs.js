"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesOrderByWithRelationInput_1 = require("../../../inputs/Product_typesOrderByWithRelationInput");
const Product_typesWhereInput_1 = require("../../../inputs/Product_typesWhereInput");
const Product_typesWhereUniqueInput_1 = require("../../../inputs/Product_typesWhereUniqueInput");
const Product_typesScalarFieldEnum_1 = require("../../../../enums/Product_typesScalarFieldEnum");
let FindFirstProduct_typesArgs = class FindFirstProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereInput_1.Product_typesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesWhereInput_1.Product_typesWhereInput)
], FindFirstProduct_typesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_typesOrderByWithRelationInput_1.Product_typesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstProduct_typesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput)
], FindFirstProduct_typesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstProduct_typesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstProduct_typesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_typesScalarFieldEnum_1.Product_typesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstProduct_typesArgs.prototype, "distinct", void 0);
FindFirstProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstProduct_typesArgs);
exports.FindFirstProduct_typesArgs = FindFirstProduct_typesArgs;
