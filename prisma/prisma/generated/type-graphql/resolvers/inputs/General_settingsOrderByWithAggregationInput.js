"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsAvgOrderByAggregateInput_1 = require("../inputs/General_settingsAvgOrderByAggregateInput");
const General_settingsCountOrderByAggregateInput_1 = require("../inputs/General_settingsCountOrderByAggregateInput");
const General_settingsMaxOrderByAggregateInput_1 = require("../inputs/General_settingsMaxOrderByAggregateInput");
const General_settingsMinOrderByAggregateInput_1 = require("../inputs/General_settingsMinOrderByAggregateInput");
const General_settingsSumOrderByAggregateInput_1 = require("../inputs/General_settingsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let General_settingsOrderByWithAggregationInput = class General_settingsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "access_restrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "restriction_mode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "startup_page", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "landing_page", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "http_response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "store_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "store_contact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "store_contact_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], General_settingsOrderByWithAggregationInput.prototype, "customer_support", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsCountOrderByAggregateInput_1.General_settingsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsCountOrderByAggregateInput_1.General_settingsCountOrderByAggregateInput)
], General_settingsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsAvgOrderByAggregateInput_1.General_settingsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsAvgOrderByAggregateInput_1.General_settingsAvgOrderByAggregateInput)
], General_settingsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsMaxOrderByAggregateInput_1.General_settingsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsMaxOrderByAggregateInput_1.General_settingsMaxOrderByAggregateInput)
], General_settingsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsMinOrderByAggregateInput_1.General_settingsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsMinOrderByAggregateInput_1.General_settingsMinOrderByAggregateInput)
], General_settingsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsSumOrderByAggregateInput_1.General_settingsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsSumOrderByAggregateInput_1.General_settingsSumOrderByAggregateInput)
], General_settingsOrderByWithAggregationInput.prototype, "_sum", void 0);
General_settingsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("General_settingsOrderByWithAggregationInput", {
        isAbstract: true
    })
], General_settingsOrderByWithAggregationInput);
exports.General_settingsOrderByWithAggregationInput = General_settingsOrderByWithAggregationInput;
