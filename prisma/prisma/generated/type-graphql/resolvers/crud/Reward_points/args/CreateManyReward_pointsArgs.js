"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReward_pointsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reward_pointsCreateManyInput_1 = require("../../../inputs/Reward_pointsCreateManyInput");
let CreateManyReward_pointsArgs = class CreateManyReward_pointsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reward_pointsCreateManyInput_1.Reward_pointsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReward_pointsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReward_pointsArgs.prototype, "skipDuplicates", void 0);
CreateManyReward_pointsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReward_pointsArgs);
exports.CreateManyReward_pointsArgs = CreateManyReward_pointsArgs;
