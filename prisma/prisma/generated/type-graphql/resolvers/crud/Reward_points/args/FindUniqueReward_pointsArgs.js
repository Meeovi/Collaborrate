"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReward_pointsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsWhereUniqueInput_1 = require("../../../inputs/Reward_pointsWhereUniqueInput");
let FindUniqueReward_pointsArgs = class FindUniqueReward_pointsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsWhereUniqueInput_1.Reward_pointsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Reward_pointsWhereUniqueInput_1.Reward_pointsWhereUniqueInput)
], FindUniqueReward_pointsArgs.prototype, "where", void 0);
FindUniqueReward_pointsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueReward_pointsArgs);
exports.FindUniqueReward_pointsArgs = FindUniqueReward_pointsArgs;
