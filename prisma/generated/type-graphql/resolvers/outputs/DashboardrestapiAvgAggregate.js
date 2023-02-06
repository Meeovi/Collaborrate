"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardrestapiAvgAggregate = class DashboardrestapiAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardrestapiAvgAggregate.prototype, "id", void 0);
DashboardrestapiAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardrestapiAvgAggregate", {
        isAbstract: true
    })
], DashboardrestapiAvgAggregate);
exports.DashboardrestapiAvgAggregate = DashboardrestapiAvgAggregate;
