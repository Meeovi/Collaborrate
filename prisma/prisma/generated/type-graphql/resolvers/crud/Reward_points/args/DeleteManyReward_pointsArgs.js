"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReward_pointsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsWhereInput_1 = require("../../../inputs/Reward_pointsWhereInput");
let DeleteManyReward_pointsArgs = class DeleteManyReward_pointsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsWhereInput_1.Reward_pointsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Reward_pointsWhereInput_1.Reward_pointsWhereInput)
], DeleteManyReward_pointsArgs.prototype, "where", void 0);
DeleteManyReward_pointsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReward_pointsArgs);
exports.DeleteManyReward_pointsArgs = DeleteManyReward_pointsArgs;
