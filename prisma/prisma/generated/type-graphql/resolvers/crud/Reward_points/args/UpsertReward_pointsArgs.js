"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReward_pointsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsCreateInput_1 = require("../../../inputs/Reward_pointsCreateInput");
const Reward_pointsUpdateInput_1 = require("../../../inputs/Reward_pointsUpdateInput");
const Reward_pointsWhereUniqueInput_1 = require("../../../inputs/Reward_pointsWhereUniqueInput");
let UpsertReward_pointsArgs = class UpsertReward_pointsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsWhereUniqueInput_1.Reward_pointsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Reward_pointsWhereUniqueInput_1.Reward_pointsWhereUniqueInput)
], UpsertReward_pointsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsCreateInput_1.Reward_pointsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Reward_pointsCreateInput_1.Reward_pointsCreateInput)
], UpsertReward_pointsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsUpdateInput_1.Reward_pointsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Reward_pointsUpdateInput_1.Reward_pointsUpdateInput)
], UpsertReward_pointsArgs.prototype, "update", void 0);
UpsertReward_pointsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertReward_pointsArgs);
exports.UpsertReward_pointsArgs = UpsertReward_pointsArgs;
