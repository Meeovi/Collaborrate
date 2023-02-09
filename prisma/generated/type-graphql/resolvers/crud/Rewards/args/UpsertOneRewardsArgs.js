"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsCreateInput_1 = require("../../../inputs/RewardsCreateInput");
const RewardsUpdateInput_1 = require("../../../inputs/RewardsUpdateInput");
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
let UpsertOneRewardsArgs = class UpsertOneRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], UpsertOneRewardsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsCreateInput_1.RewardsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsCreateInput_1.RewardsCreateInput)
], UpsertOneRewardsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsUpdateInput_1.RewardsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsUpdateInput_1.RewardsUpdateInput)
], UpsertOneRewardsArgs.prototype, "update", void 0);
UpsertOneRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneRewardsArgs);
exports.UpsertOneRewardsArgs = UpsertOneRewardsArgs;
