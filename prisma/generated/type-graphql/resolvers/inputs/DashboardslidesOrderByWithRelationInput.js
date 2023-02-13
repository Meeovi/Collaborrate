"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardslidesOrderByWithRelationInput = class DashboardslidesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithRelationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithRelationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithRelationInput.prototype, "description", void 0);
DashboardslidesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslidesOrderByWithRelationInput", {
        isAbstract: true
    })
], DashboardslidesOrderByWithRelationInput);
exports.DashboardslidesOrderByWithRelationInput = DashboardslidesOrderByWithRelationInput;
