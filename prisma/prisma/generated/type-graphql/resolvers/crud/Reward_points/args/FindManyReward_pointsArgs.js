"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReward_pointsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsOrderByWithRelationInput_1 = require("../../../inputs/Reward_pointsOrderByWithRelationInput");
const Reward_pointsWhereInput_1 = require("../../../inputs/Reward_pointsWhereInput");
const Reward_pointsWhereUniqueInput_1 = require("../../../inputs/Reward_pointsWhereUniqueInput");
const Reward_pointsScalarFieldEnum_1 = require("../../../../enums/Reward_pointsScalarFieldEnum");
let FindManyReward_pointsArgs = class FindManyReward_pointsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsWhereInput_1.Reward_pointsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsWhereInput_1.Reward_pointsWhereInput)
], FindManyReward_pointsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reward_pointsOrderByWithRelationInput_1.Reward_pointsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReward_pointsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsWhereUniqueInput_1.Reward_pointsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsWhereUniqueInput_1.Reward_pointsWhereUniqueInput)
], FindManyReward_pointsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReward_pointsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReward_pointsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reward_pointsScalarFieldEnum_1.Reward_pointsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReward_pointsArgs.prototype, "distinct", void 0);
FindManyReward_pointsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyReward_pointsArgs);
exports.FindManyReward_pointsArgs = FindManyReward_pointsArgs;
