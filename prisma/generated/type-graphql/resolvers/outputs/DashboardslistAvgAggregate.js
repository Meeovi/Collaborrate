"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslistAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardslistAvgAggregate = class DashboardslistAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslistAvgAggregate.prototype, "id", void 0);
DashboardslistAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardslistAvgAggregate", {
        isAbstract: true
    })
], DashboardslistAvgAggregate);
exports.DashboardslistAvgAggregate = DashboardslistAvgAggregate;
