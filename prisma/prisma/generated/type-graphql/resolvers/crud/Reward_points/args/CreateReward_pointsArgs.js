"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReward_pointsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsCreateInput_1 = require("../../../inputs/Reward_pointsCreateInput");
let CreateReward_pointsArgs = class CreateReward_pointsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reward_pointsCreateInput_1.Reward_pointsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Reward_pointsCreateInput_1.Reward_pointsCreateInput)
], CreateReward_pointsArgs.prototype, "data", void 0);
CreateReward_pointsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateReward_pointsArgs);
exports.CreateReward_pointsArgs = CreateReward_pointsArgs;
