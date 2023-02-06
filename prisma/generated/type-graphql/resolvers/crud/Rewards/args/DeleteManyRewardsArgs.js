"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsWhereInput_1 = require("../../../inputs/RewardsWhereInput");
let DeleteManyRewardsArgs = class DeleteManyRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RewardsWhereInput_1.RewardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RewardsWhereInput_1.RewardsWhereInput)
], DeleteManyRewardsArgs.prototype, "where", void 0);
DeleteManyRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRewardsArgs);
exports.DeleteManyRewardsArgs = DeleteManyRewardsArgs;
