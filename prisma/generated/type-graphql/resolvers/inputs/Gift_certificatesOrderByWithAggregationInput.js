"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift_certificatesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesAvgOrderByAggregateInput_1 = require("../inputs/Gift_certificatesAvgOrderByAggregateInput");
const Gift_certificatesCountOrderByAggregateInput_1 = require("../inputs/Gift_certificatesCountOrderByAggregateInput");
const Gift_certificatesMaxOrderByAggregateInput_1 = require("../inputs/Gift_certificatesMaxOrderByAggregateInput");
const Gift_certificatesMinOrderByAggregateInput_1 = require("../inputs/Gift_certificatesMinOrderByAggregateInput");
const Gift_certificatesSumOrderByAggregateInput_1 = require("../inputs/Gift_certificatesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Gift_certificatesOrderByWithAggregationInput = class Gift_certificatesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "special_offers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "rewards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesCountOrderByAggregateInput_1.Gift_certificatesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesCountOrderByAggregateInput_1.Gift_certificatesCountOrderByAggregateInput)
], Gift_certificatesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesAvgOrderByAggregateInput_1.Gift_certificatesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesAvgOrderByAggregateInput_1.Gift_certificatesAvgOrderByAggregateInput)
], Gift_certificatesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesMaxOrderByAggregateInput_1.Gift_certificatesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesMaxOrderByAggregateInput_1.Gift_certificatesMaxOrderByAggregateInput)
], Gift_certificatesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesMinOrderByAggregateInput_1.Gift_certificatesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesMinOrderByAggregateInput_1.Gift_certificatesMinOrderByAggregateInput)
], Gift_certificatesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesSumOrderByAggregateInput_1.Gift_certificatesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesSumOrderByAggregateInput_1.Gift_certificatesSumOrderByAggregateInput)
], Gift_certificatesOrderByWithAggregationInput.prototype, "_sum", void 0);
Gift_certificatesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Gift_certificatesOrderByWithAggregationInput", {
        isAbstract: true
    })
], Gift_certificatesOrderByWithAggregationInput);
exports.Gift_certificatesOrderByWithAggregationInput = Gift_certificatesOrderByWithAggregationInput;
