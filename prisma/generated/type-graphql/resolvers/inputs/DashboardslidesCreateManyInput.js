"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardslidesCreateManyInput = class DashboardslidesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCreateManyInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCreateManyInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesCreateManyInput.prototype, "description", void 0);
DashboardslidesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslidesCreateManyInput", {
        isAbstract: true
    })
], DashboardslidesCreateManyInput);
exports.DashboardslidesCreateManyInput = DashboardslidesCreateManyInput;
