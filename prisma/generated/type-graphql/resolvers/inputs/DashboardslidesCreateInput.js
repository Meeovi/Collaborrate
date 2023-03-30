"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardslidesCreateInput = class DashboardslidesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCreateInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCreateInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCreateInput.prototype, "description", void 0);
DashboardslidesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslidesCreateInput", {
        isAbstract: true
    })
], DashboardslidesCreateInput);
exports.DashboardslidesCreateInput = DashboardslidesCreateInput;
