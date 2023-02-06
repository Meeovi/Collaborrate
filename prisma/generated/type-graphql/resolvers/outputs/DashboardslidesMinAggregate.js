"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardslidesMinAggregate = class DashboardslidesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesMinAggregate.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesMinAggregate.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesMinAggregate.prototype, "description", void 0);
DashboardslidesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardslidesMinAggregate", {
        isAbstract: true
    })
], DashboardslidesMinAggregate);
exports.DashboardslidesMinAggregate = DashboardslidesMinAggregate;
