"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsOrderByWithRelationInput_1 = require("../../../inputs/BrandsOrderByWithRelationInput");
const BrandsWhereInput_1 = require("../../../inputs/BrandsWhereInput");
const BrandsWhereUniqueInput_1 = require("../../../inputs/BrandsWhereUniqueInput");
const BrandsScalarFieldEnum_1 = require("../../../../enums/BrandsScalarFieldEnum");
let FindManyBrandsArgs = class FindManyBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereInput_1.BrandsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsWhereInput_1.BrandsWhereInput)
], FindManyBrandsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandsOrderByWithRelationInput_1.BrandsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyBrandsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereUniqueInput_1.BrandsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsWhereUniqueInput_1.BrandsWhereUniqueInput)
], FindManyBrandsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyBrandsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyBrandsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandsScalarFieldEnum_1.BrandsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyBrandsArgs.prototype, "distinct", void 0);
FindManyBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyBrandsArgs);
exports.FindManyBrandsArgs = FindManyBrandsArgs;
