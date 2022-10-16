"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsAvgOrderByAggregateInput_1 = require("../inputs/AgreementsAvgOrderByAggregateInput");
const AgreementsCountOrderByAggregateInput_1 = require("../inputs/AgreementsCountOrderByAggregateInput");
const AgreementsMaxOrderByAggregateInput_1 = require("../inputs/AgreementsMaxOrderByAggregateInput");
const AgreementsMinOrderByAggregateInput_1 = require("../inputs/AgreementsMinOrderByAggregateInput");
const AgreementsSumOrderByAggregateInput_1 = require("../inputs/AgreementsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AgreementsOrderByWithAggregationInput = class AgreementsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "reference_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "user_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "shop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithAggregationInput.prototype, "mediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsCountOrderByAggregateInput_1.AgreementsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsCountOrderByAggregateInput_1.AgreementsCountOrderByAggregateInput)
], AgreementsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsAvgOrderByAggregateInput_1.AgreementsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsAvgOrderByAggregateInput_1.AgreementsAvgOrderByAggregateInput)
], AgreementsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsMaxOrderByAggregateInput_1.AgreementsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsMaxOrderByAggregateInput_1.AgreementsMaxOrderByAggregateInput)
], AgreementsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsMinOrderByAggregateInput_1.AgreementsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsMinOrderByAggregateInput_1.AgreementsMinOrderByAggregateInput)
], AgreementsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsSumOrderByAggregateInput_1.AgreementsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsSumOrderByAggregateInput_1.AgreementsSumOrderByAggregateInput)
], AgreementsOrderByWithAggregationInput.prototype, "_sum", void 0);
AgreementsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgreementsOrderByWithAggregationInput", {
        isAbstract: true
    })
], AgreementsOrderByWithAggregationInput);
exports.AgreementsOrderByWithAggregationInput = AgreementsOrderByWithAggregationInput;
