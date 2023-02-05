"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardslidesMaxAggregate = class DashboardslidesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesMaxAggregate.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesMaxAggregate.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesMaxAggregate.prototype, "description", void 0);
DashboardslidesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardslidesMaxAggregate", {
        isAbstract: true
    })
], DashboardslidesMaxAggregate);
exports.DashboardslidesMaxAggregate = DashboardslidesMaxAggregate;
