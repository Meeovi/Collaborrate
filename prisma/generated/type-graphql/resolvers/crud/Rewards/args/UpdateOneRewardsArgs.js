"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsUpdateInput_1 = require("../../../inputs/RewardsUpdateInput");
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
let UpdateOneRewardsArgs = class UpdateOneRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsUpdateInput_1.RewardsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsUpdateInput_1.RewardsUpdateInput)
], UpdateOneRewardsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], UpdateOneRewardsArgs.prototype, "where", void 0);
UpdateOneRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneRewardsArgs);
exports.UpdateOneRewardsArgs = UpdateOneRewardsArgs;
