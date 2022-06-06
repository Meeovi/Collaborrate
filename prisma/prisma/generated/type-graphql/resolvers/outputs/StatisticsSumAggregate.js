"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StatisticsSumAggregate = class StatisticsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatisticsSumAggregate.prototype, "id", void 0);
StatisticsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatisticsSumAggregate", {
        isAbstract: true
    })
], StatisticsSumAggregate);
exports.StatisticsSumAggregate = StatisticsSumAggregate;
