"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsUpdateInput_1 = require("../../../inputs/RewardsUpdateInput");
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
let UpdateRewardsArgs = class UpdateRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsUpdateInput_1.RewardsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsUpdateInput_1.RewardsUpdateInput)
], UpdateRewardsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], UpdateRewardsArgs.prototype, "where", void 0);
UpdateRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateRewardsArgs);
exports.UpdateRewardsArgs = UpdateRewardsArgs;
