"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReward_pointsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsWhereUniqueInput_1 = require("../../../inputs/Reward_pointsWhereUniqueInput");
let DeleteReward_pointsArgs = class DeleteReward_pointsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsWhereUniqueInput_1.Reward_pointsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Reward_pointsWhereUniqueInput_1.Reward_pointsWhereUniqueInput)
], DeleteReward_pointsArgs.prototype, "where", void 0);
DeleteReward_pointsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteReward_pointsArgs);
exports.DeleteReward_pointsArgs = DeleteReward_pointsArgs;
