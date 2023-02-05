"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersAvgOrderByAggregateInput_1 = require("../inputs/PartnersAvgOrderByAggregateInput");
const PartnersCountOrderByAggregateInput_1 = require("../inputs/PartnersCountOrderByAggregateInput");
const PartnersMaxOrderByAggregateInput_1 = require("../inputs/PartnersMaxOrderByAggregateInput");
const PartnersMinOrderByAggregateInput_1 = require("../inputs/PartnersMinOrderByAggregateInput");
const PartnersSumOrderByAggregateInput_1 = require("../inputs/PartnersSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PartnersOrderByWithAggregationInput = class PartnersOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithAggregationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithAggregationInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithAggregationInput.prototype, "business_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersCountOrderByAggregateInput_1.PartnersCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersCountOrderByAggregateInput_1.PartnersCountOrderByAggregateInput)
], PartnersOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersAvgOrderByAggregateInput_1.PartnersAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersAvgOrderByAggregateInput_1.PartnersAvgOrderByAggregateInput)
], PartnersOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersMaxOrderByAggregateInput_1.PartnersMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersMaxOrderByAggregateInput_1.PartnersMaxOrderByAggregateInput)
], PartnersOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersMinOrderByAggregateInput_1.PartnersMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersMinOrderByAggregateInput_1.PartnersMinOrderByAggregateInput)
], PartnersOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersSumOrderByAggregateInput_1.PartnersSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersSumOrderByAggregateInput_1.PartnersSumOrderByAggregateInput)
], PartnersOrderByWithAggregationInput.prototype, "_sum", void 0);
PartnersOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PartnersOrderByWithAggregationInput", {
        isAbstract: true
    })
], PartnersOrderByWithAggregationInput);
exports.PartnersOrderByWithAggregationInput = PartnersOrderByWithAggregationInput;
