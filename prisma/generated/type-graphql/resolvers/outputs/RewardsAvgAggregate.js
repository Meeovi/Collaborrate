"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RewardsAvgAggregate = class RewardsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RewardsAvgAggregate.prototype, "id", void 0);
RewardsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RewardsAvgAggregate", {
        isAbstract: true
    })
], RewardsAvgAggregate);
exports.RewardsAvgAggregate = RewardsAvgAggregate;
