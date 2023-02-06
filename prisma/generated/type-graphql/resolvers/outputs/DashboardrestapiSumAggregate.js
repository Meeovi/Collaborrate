"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardrestapiSumAggregate = class DashboardrestapiSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardrestapiSumAggregate.prototype, "id", void 0);
DashboardrestapiSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardrestapiSumAggregate", {
        isAbstract: true
    })
], DashboardrestapiSumAggregate);
exports.DashboardrestapiSumAggregate = DashboardrestapiSumAggregate;
