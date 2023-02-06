"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardslidesAvgAggregate = class DashboardslidesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesAvgAggregate.prototype, "id", void 0);
DashboardslidesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardslidesAvgAggregate", {
        isAbstract: true
    })
], DashboardslidesAvgAggregate);
exports.DashboardslidesAvgAggregate = DashboardslidesAvgAggregate;
