"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardslidesSumAggregate = class DashboardslidesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesSumAggregate.prototype, "id", void 0);
DashboardslidesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardslidesSumAggregate", {
        isAbstract: true
    })
], DashboardslidesSumAggregate);
exports.DashboardslidesSumAggregate = DashboardslidesSumAggregate;
