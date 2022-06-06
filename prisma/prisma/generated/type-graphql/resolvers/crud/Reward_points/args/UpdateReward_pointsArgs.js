"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReward_pointsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsUpdateInput_1 = require("../../../inputs/Reward_pointsUpdateInput");
const Reward_pointsWhereUniqueInput_1 = require("../../../inputs/Reward_pointsWhereUniqueInput");
let UpdateReward_pointsArgs = class UpdateReward_pointsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsUpdateInput_1.Reward_pointsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Reward_pointsUpdateInput_1.Reward_pointsUpdateInput)
], UpdateReward_pointsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsWhereUniqueInput_1.Reward_pointsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Reward_pointsWhereUniqueInput_1.Reward_pointsWhereUniqueInput)
], UpdateReward_pointsArgs.prototype, "where", void 0);
UpdateReward_pointsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateReward_pointsArgs);
exports.UpdateReward_pointsArgs = UpdateReward_pointsArgs;
