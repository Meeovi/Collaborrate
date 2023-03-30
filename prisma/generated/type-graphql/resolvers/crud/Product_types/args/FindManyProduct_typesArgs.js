"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesOrderByWithRelationInput_1 = require("../../../inputs/Product_typesOrderByWithRelationInput");
const Product_typesWhereInput_1 = require("../../../inputs/Product_typesWhereInput");
const Product_typesWhereUniqueInput_1 = require("../../../inputs/Product_typesWhereUniqueInput");
const Product_typesScalarFieldEnum_1 = require("../../../../enums/Product_typesScalarFieldEnum");
let FindManyProduct_typesArgs = class FindManyProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereInput_1.Product_typesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesWhereInput_1.Product_typesWhereInput)
], FindManyProduct_typesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_typesOrderByWithRelationInput_1.Product_typesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProduct_typesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput)
], FindManyProduct_typesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProduct_typesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProduct_typesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_typesScalarFieldEnum_1.Product_typesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProduct_typesArgs.prototype, "distinct", void 0);
FindManyProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyProduct_typesArgs);
exports.FindManyProduct_typesArgs = FindManyProduct_typesArgs;
