"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboardgraphql = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Dashboardgraphql = class Dashboardgraphql {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Dashboardgraphql.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Dashboardgraphql.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Dashboardgraphql.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Dashboardgraphql.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Dashboardgraphql.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Dashboardgraphql.prototype, "urlValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Dashboardgraphql.prototype, "urlKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Dashboardgraphql.prototype, "description", void 0);
Dashboardgraphql = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Dashboardgraphql", {
        isAbstract: true
    })
], Dashboardgraphql);
exports.Dashboardgraphql = Dashboardgraphql;
