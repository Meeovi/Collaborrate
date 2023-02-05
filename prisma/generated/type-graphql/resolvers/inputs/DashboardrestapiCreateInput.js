"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardrestapiCreateInput = class DashboardrestapiCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiCreateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiCreateInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiCreateInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiCreateInput.prototype, "authenticationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiCreateInput.prototype, "description", void 0);
DashboardrestapiCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardrestapiCreateInput", {
        isAbstract: true
    })
], DashboardrestapiCreateInput);
exports.DashboardrestapiCreateInput = DashboardrestapiCreateInput;
