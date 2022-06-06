"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsCreateInput_1 = require("../../../inputs/RewardsCreateInput");
let CreateRewardsArgs = class CreateRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsCreateInput_1.RewardsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsCreateInput_1.RewardsCreateInput)
], CreateRewardsArgs.prototype, "data", void 0);
CreateRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateRewardsArgs);
exports.CreateRewardsArgs = CreateRewardsArgs;
