"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RewardsSumAggregate = class RewardsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RewardsSumAggregate.prototype, "id", void 0);
RewardsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RewardsSumAggregate", {
        isAbstract: true
    })
], RewardsSumAggregate);
exports.RewardsSumAggregate = RewardsSumAggregate;
