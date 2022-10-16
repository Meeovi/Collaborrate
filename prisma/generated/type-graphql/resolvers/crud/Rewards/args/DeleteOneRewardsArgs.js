"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
let DeleteOneRewardsArgs = class DeleteOneRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], DeleteOneRewardsArgs.prototype, "where", void 0);
DeleteOneRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneRewardsArgs);
exports.DeleteOneRewardsArgs = DeleteOneRewardsArgs;
