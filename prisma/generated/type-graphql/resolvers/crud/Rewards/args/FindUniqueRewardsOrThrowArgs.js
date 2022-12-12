"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRewardsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsWhereUniqueInput_1 = require("../../../inputs/RewardsWhereUniqueInput");
let FindUniqueRewardsOrThrowArgs = class FindUniqueRewardsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereUniqueInput_1.RewardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsWhereUniqueInput_1.RewardsWhereUniqueInput)
], FindUniqueRewardsOrThrowArgs.prototype, "where", void 0);
FindUniqueRewardsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRewardsOrThrowArgs);
exports.FindUniqueRewardsOrThrowArgs = FindUniqueRewardsOrThrowArgs;
