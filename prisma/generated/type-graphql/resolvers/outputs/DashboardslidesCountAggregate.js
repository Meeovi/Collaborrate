"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardslidesCountAggregate = class DashboardslidesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesCountAggregate.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesCountAggregate.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesCountAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesCountAggregate.prototype, "_all", void 0);
DashboardslidesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardslidesCountAggregate", {
        isAbstract: true
    })
], DashboardslidesCountAggregate);
exports.DashboardslidesCountAggregate = DashboardslidesCountAggregate;
