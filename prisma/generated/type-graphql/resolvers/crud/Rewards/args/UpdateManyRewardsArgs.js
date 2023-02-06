"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsUpdateManyMutationInput_1 = require("../../../inputs/RewardsUpdateManyMutationInput");
const RewardsWhereInput_1 = require("../../../inputs/RewardsWhereInput");
let UpdateManyRewardsArgs = class UpdateManyRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsUpdateManyMutationInput_1.RewardsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RewardsUpdateManyMutationInput_1.RewardsUpdateManyMutationInput)
], UpdateManyRewardsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereInput_1.RewardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereInput_1.RewardsWhereInput)
], UpdateManyRewardsArgs.prototype, "where", void 0);
UpdateManyRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRewardsArgs);
exports.UpdateManyRewardsArgs = UpdateManyRewardsArgs;
