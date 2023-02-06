"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardjsonAvgAggregate = class DashboardjsonAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardjsonAvgAggregate.prototype, "id", void 0);
DashboardjsonAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardjsonAvgAggregate", {
        isAbstract: true
    })
], DashboardjsonAvgAggregate);
exports.DashboardjsonAvgAggregate = DashboardjsonAvgAggregate;
