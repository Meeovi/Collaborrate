"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsOrderByWithRelationInput_1 = require("../../../inputs/RewardsOrderByWithRelationInput");
const RewardsWhereInput_1 = require("../../../inputs/RewardsWhereInput");
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
const RewardsScalarFieldEnum_1 = require("../../../../enums/RewardsScalarFieldEnum");
let FindFirstRewardsArgs = class FindFirstRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereInput_1.RewardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereInput_1.RewardsWhereInput)
], FindFirstRewardsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsOrderByWithRelationInput_1.RewardsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRewardsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], FindFirstRewardsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRewardsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRewardsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsScalarFieldEnum_1.RewardsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRewardsArgs.prototype, "distinct", void 0);
FindFirstRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstRewardsArgs);
exports.FindFirstRewardsArgs = FindFirstRewardsArgs;
