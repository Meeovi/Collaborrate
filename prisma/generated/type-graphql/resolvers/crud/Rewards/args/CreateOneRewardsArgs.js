"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsCreateInput_1 = require("../../../inputs/RewardsCreateInput");
let CreateOneRewardsArgs = class CreateOneRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsCreateInput_1.RewardsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsCreateInput_1.RewardsCreateInput)
], CreateOneRewardsArgs.prototype, "data", void 0);
CreateOneRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneRewardsArgs);
exports.CreateOneRewardsArgs = CreateOneRewardsArgs;
