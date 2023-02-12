"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsOrderByWithRelationInput_1 = require("../../../inputs/RewardsOrderByWithRelationInput");
const RewardsWhereInput_1 = require("../../../inputs/RewardsWhereInput");
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
let AggregateRewardsArgs = class AggregateRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereInput_1.RewardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereInput_1.RewardsWhereInput)
], AggregateRewardsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsOrderByWithRelationInput_1.RewardsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateRewardsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], AggregateRewardsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRewardsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRewardsArgs.prototype, "skip", void 0);
AggregateRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateRewardsArgs);
exports.AggregateRewardsArgs = AggregateRewardsArgs;
