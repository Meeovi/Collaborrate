"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReward_pointsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsUpdateManyMutationInput_1 = require("../../../inputs/Reward_pointsUpdateManyMutationInput");
const Reward_pointsWhereInput_1 = require("../../../inputs/Reward_pointsWhereInput");
let UpdateManyReward_pointsArgs = class UpdateManyReward_pointsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsUpdateManyMutationInput_1.Reward_pointsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Reward_pointsUpdateManyMutationInput_1.Reward_pointsUpdateManyMutationInput)
], UpdateManyReward_pointsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsWhereInput_1.Reward_pointsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsWhereInput_1.Reward_pointsWhereInput)
], UpdateManyReward_pointsArgs.prototype, "where", void 0);
UpdateManyReward_pointsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReward_pointsArgs);
exports.UpdateManyReward_pointsArgs = UpdateManyReward_pointsArgs;
