"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardjsonSumAggregate = class DashboardjsonSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardjsonSumAggregate.prototype, "id", void 0);
DashboardjsonSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardjsonSumAggregate", {
        isAbstract: true
    })
], DashboardjsonSumAggregate);
exports.DashboardjsonSumAggregate = DashboardjsonSumAggregate;
