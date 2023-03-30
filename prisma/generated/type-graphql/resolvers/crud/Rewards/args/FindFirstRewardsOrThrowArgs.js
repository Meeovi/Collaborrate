"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRewardsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsOrderByWithRelationInput_1 = require("../../../inputs/RewardsOrderByWithRelationInput");
const RewardsWhereInput_1 = require("../../../inputs/RewardsWhereInput");
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
const RewardsScalarFieldEnum_1 = require("../../../../enums/RewardsScalarFieldEnum");
let FindFirstRewardsOrThrowArgs = class FindFirstRewardsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereInput_1.RewardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereInput_1.RewardsWhereInput)
], FindFirstRewardsOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsOrderByWithRelationInput_1.RewardsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRewardsOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], FindFirstRewardsOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRewardsOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRewardsOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsScalarFieldEnum_1.RewardsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRewardsOrThrowArgs.prototype, "distinct", void 0);
FindFirstRewardsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstRewardsOrThrowArgs);
exports.FindFirstRewardsOrThrowArgs = FindFirstRewardsOrThrowArgs;
