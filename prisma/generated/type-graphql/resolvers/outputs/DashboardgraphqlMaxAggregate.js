"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardgraphqlMaxAggregate = class DashboardgraphqlMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardgraphqlMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMaxAggregate.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMaxAggregate.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMaxAggregate.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMaxAggregate.prototype, "urlValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMaxAggregate.prototype, "urlKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlMaxAggregate.prototype, "description", void 0);
DashboardgraphqlMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardgraphqlMaxAggregate", {
        isAbstract: true
    })
], DashboardgraphqlMaxAggregate);
exports.DashboardgraphqlMaxAggregate = DashboardgraphqlMaxAggregate;
