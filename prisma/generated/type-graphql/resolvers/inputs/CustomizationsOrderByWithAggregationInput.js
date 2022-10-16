"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsAvgOrderByAggregateInput_1 = require("../inputs/CustomizationsAvgOrderByAggregateInput");
const CustomizationsCountOrderByAggregateInput_1 = require("../inputs/CustomizationsCountOrderByAggregateInput");
const CustomizationsMaxOrderByAggregateInput_1 = require("../inputs/CustomizationsMaxOrderByAggregateInput");
const CustomizationsMinOrderByAggregateInput_1 = require("../inputs/CustomizationsMinOrderByAggregateInput");
const CustomizationsSumOrderByAggregateInput_1 = require("../inputs/CustomizationsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CustomizationsOrderByWithAggregationInput = class CustomizationsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "site_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "nav_link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "banner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "footer_link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "announcement", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "site_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByWithAggregationInput.prototype, "allow_signup", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsCountOrderByAggregateInput_1.CustomizationsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsCountOrderByAggregateInput_1.CustomizationsCountOrderByAggregateInput)
], CustomizationsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsAvgOrderByAggregateInput_1.CustomizationsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsAvgOrderByAggregateInput_1.CustomizationsAvgOrderByAggregateInput)
], CustomizationsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsMaxOrderByAggregateInput_1.CustomizationsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsMaxOrderByAggregateInput_1.CustomizationsMaxOrderByAggregateInput)
], CustomizationsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsMinOrderByAggregateInput_1.CustomizationsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsMinOrderByAggregateInput_1.CustomizationsMinOrderByAggregateInput)
], CustomizationsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsSumOrderByAggregateInput_1.CustomizationsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsSumOrderByAggregateInput_1.CustomizationsSumOrderByAggregateInput)
], CustomizationsOrderByWithAggregationInput.prototype, "_sum", void 0);
CustomizationsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomizationsOrderByWithAggregationInput", {
        isAbstract: true
    })
], CustomizationsOrderByWithAggregationInput);
exports.CustomizationsOrderByWithAggregationInput = CustomizationsOrderByWithAggregationInput;
