"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardsAvgAggregate = class DashboardsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardsAvgAggregate.prototype, "id", void 0);
DashboardsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardsAvgAggregate", {
        isAbstract: true
    })
], DashboardsAvgAggregate);
exports.DashboardsAvgAggregate = DashboardsAvgAggregate;
