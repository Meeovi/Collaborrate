"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsCreateInput_1 = require("../../../inputs/RewardsCreateInput");
const RewardsUpdateInput_1 = require("../../../inputs/RewardsUpdateInput");
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
let UpsertRewardsArgs = class UpsertRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], UpsertRewardsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsCreateInput_1.RewardsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsCreateInput_1.RewardsCreateInput)
], UpsertRewardsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsUpdateInput_1.RewardsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsUpdateInput_1.RewardsUpdateInput)
], UpsertRewardsArgs.prototype, "update", void 0);
UpsertRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertRewardsArgs);
exports.UpsertRewardsArgs = UpsertRewardsArgs;
