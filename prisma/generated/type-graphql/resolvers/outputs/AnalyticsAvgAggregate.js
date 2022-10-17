"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AnalyticsAvgAggregate = class AnalyticsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AnalyticsAvgAggregate.prototype, "id", void 0);
AnalyticsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AnalyticsAvgAggregate", {
        isAbstract: true
    })
], AnalyticsAvgAggregate);
exports.AnalyticsAvgAggregate = AnalyticsAvgAggregate;
