"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsOrderByWithRelationInput_1 = require("../../../inputs/RewardsOrderByWithRelationInput");
const RewardsWhereInput_1 = require("../../../inputs/RewardsWhereInput");
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
const RewardsScalarFieldEnum_1 = require("../../../../enums/RewardsScalarFieldEnum");
let FindManyRewardsArgs = class FindManyRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereInput_1.RewardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereInput_1.RewardsWhereInput)
], FindManyRewardsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsOrderByWithRelationInput_1.RewardsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyRewardsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], FindManyRewardsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyRewardsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyRewardsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsScalarFieldEnum_1.RewardsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyRewardsArgs.prototype, "distinct", void 0);
FindManyRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyRewardsArgs);
exports.FindManyRewardsArgs = FindManyRewardsArgs;
