"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardgraphqlCreateInput = class DashboardgraphqlCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlCreateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlCreateInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlCreateInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlCreateInput.prototype, "urlValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlCreateInput.prototype, "urlKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlCreateInput.prototype, "description", void 0);
DashboardgraphqlCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardgraphqlCreateInput", {
        isAbstract: true
    })
], DashboardgraphqlCreateInput);
exports.DashboardgraphqlCreateInput = DashboardgraphqlCreateInput;
