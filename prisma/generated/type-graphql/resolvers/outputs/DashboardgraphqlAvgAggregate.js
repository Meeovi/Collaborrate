"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardgraphqlAvgAggregate = class DashboardgraphqlAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardgraphqlAvgAggregate.prototype, "id", void 0);
DashboardgraphqlAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardgraphqlAvgAggregate", {
        isAbstract: true
    })
], DashboardgraphqlAvgAggregate);
exports.DashboardgraphqlAvgAggregate = DashboardgraphqlAvgAggregate;
