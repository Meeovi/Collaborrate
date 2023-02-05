"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
let FindUniqueRewardsArgs = class FindUniqueRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], FindUniqueRewardsArgs.prototype, "where", void 0);
FindUniqueRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRewardsArgs);
exports.FindUniqueRewardsArgs = FindUniqueRewardsArgs;
