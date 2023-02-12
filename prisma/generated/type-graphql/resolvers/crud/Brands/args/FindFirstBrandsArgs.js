"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsOrderByWithRelationInput_1 = require("../../../inputs/BrandsOrderByWithRelationInput");
const BrandsWhereInput_1 = require("../../../inputs/BrandsWhereInput");
const BrandsWhereUniqueInput_1 = require("../../../inputs/BrandsWhereUniqueInput");
const BrandsScalarFieldEnum_1 = require("../../../../enums/BrandsScalarFieldEnum");
let FindFirstBrandsArgs = class FindFirstBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereInput_1.BrandsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsWhereInput_1.BrandsWhereInput)
], FindFirstBrandsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandsOrderByWithRelationInput_1.BrandsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBrandsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereUniqueInput_1.BrandsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsWhereUniqueInput_1.BrandsWhereUniqueInput)
], FindFirstBrandsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBrandsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBrandsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandsScalarFieldEnum_1.BrandsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBrandsArgs.prototype, "distinct", void 0);
FindFirstBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstBrandsArgs);
exports.FindFirstBrandsArgs = FindFirstBrandsArgs;
