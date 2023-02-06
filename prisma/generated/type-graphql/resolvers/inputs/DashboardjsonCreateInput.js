"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardjsonCreateInput = class DashboardjsonCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonCreateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonCreateInput.prototype, "definition", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonCreateInput.prototype, "format", void 0);
DashboardjsonCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardjsonCreateInput", {
        isAbstract: true
    })
], DashboardjsonCreateInput);
exports.DashboardjsonCreateInput = DashboardjsonCreateInput;
