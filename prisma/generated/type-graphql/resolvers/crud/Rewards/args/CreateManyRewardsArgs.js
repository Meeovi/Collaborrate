"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRewardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RewardsCreateManyInput_1 = require("../../../inputs/RewardsCreateManyInput");
let CreateManyRewardsArgs = class CreateManyRewardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RewardsCreateManyInput_1.RewardsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyRewardsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyRewardsArgs.prototype, "skipDuplicates", void 0);
CreateManyRewardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyRewardsArgs);
exports.CreateManyRewardsArgs = CreateManyRewardsArgs;
