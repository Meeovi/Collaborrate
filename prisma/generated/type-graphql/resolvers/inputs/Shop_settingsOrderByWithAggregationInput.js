"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop_settingsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsAvgOrderByAggregateInput_1 = require("../inputs/Shop_settingsAvgOrderByAggregateInput");
const Shop_settingsCountOrderByAggregateInput_1 = require("../inputs/Shop_settingsCountOrderByAggregateInput");
const Shop_settingsMaxOrderByAggregateInput_1 = require("../inputs/Shop_settingsMaxOrderByAggregateInput");
const Shop_settingsMinOrderByAggregateInput_1 = require("../inputs/Shop_settingsMinOrderByAggregateInput");
const Shop_settingsSumOrderByAggregateInput_1 = require("../inputs/Shop_settingsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Shop_settingsOrderByWithAggregationInput = class Shop_settingsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "store_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "store_phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "store_hours", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "vat_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "allow_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "state_required_for", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "allow_countries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "default_country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "optional_zip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "european_union_countries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "top_destinations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "base_currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "default_currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Shop_settingsOrderByWithAggregationInput.prototype, "allowed_currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsCountOrderByAggregateInput_1.Shop_settingsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsCountOrderByAggregateInput_1.Shop_settingsCountOrderByAggregateInput)
], Shop_settingsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsAvgOrderByAggregateInput_1.Shop_settingsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsAvgOrderByAggregateInput_1.Shop_settingsAvgOrderByAggregateInput)
], Shop_settingsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsMaxOrderByAggregateInput_1.Shop_settingsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsMaxOrderByAggregateInput_1.Shop_settingsMaxOrderByAggregateInput)
], Shop_settingsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsMinOrderByAggregateInput_1.Shop_settingsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsMinOrderByAggregateInput_1.Shop_settingsMinOrderByAggregateInput)
], Shop_settingsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsSumOrderByAggregateInput_1.Shop_settingsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsSumOrderByAggregateInput_1.Shop_settingsSumOrderByAggregateInput)
], Shop_settingsOrderByWithAggregationInput.prototype, "_sum", void 0);
Shop_settingsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Shop_settingsOrderByWithAggregationInput", {
        isAbstract: true
    })
], Shop_settingsOrderByWithAggregationInput);
exports.Shop_settingsOrderByWithAggregationInput = Shop_settingsOrderByWithAggregationInput;
