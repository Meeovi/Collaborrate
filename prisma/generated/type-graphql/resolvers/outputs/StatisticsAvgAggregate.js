"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StatisticsAvgAggregate = class StatisticsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatisticsAvgAggregate.prototype, "id", void 0);
StatisticsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatisticsAvgAggregate", {
        isAbstract: true
    })
], StatisticsAvgAggregate);
exports.StatisticsAvgAggregate = StatisticsAvgAggregate;
