"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsAvgOrderByAggregateInput_1 = require("../inputs/WishlistsAvgOrderByAggregateInput");
const WishlistsCountOrderByAggregateInput_1 = require("../inputs/WishlistsCountOrderByAggregateInput");
const WishlistsMaxOrderByAggregateInput_1 = require("../inputs/WishlistsMaxOrderByAggregateInput");
const WishlistsMinOrderByAggregateInput_1 = require("../inputs/WishlistsMinOrderByAggregateInput");
const WishlistsSumOrderByAggregateInput_1 = require("../inputs/WishlistsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WishlistsOrderByWithAggregationInput = class WishlistsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithAggregationInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithAggregationInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WishlistsOrderByWithAggregationInput.prototype, "occassions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsCountOrderByAggregateInput_1.WishlistsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsCountOrderByAggregateInput_1.WishlistsCountOrderByAggregateInput)
], WishlistsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsAvgOrderByAggregateInput_1.WishlistsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsAvgOrderByAggregateInput_1.WishlistsAvgOrderByAggregateInput)
], WishlistsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsMaxOrderByAggregateInput_1.WishlistsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsMaxOrderByAggregateInput_1.WishlistsMaxOrderByAggregateInput)
], WishlistsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsMinOrderByAggregateInput_1.WishlistsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsMinOrderByAggregateInput_1.WishlistsMinOrderByAggregateInput)
], WishlistsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsSumOrderByAggregateInput_1.WishlistsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsSumOrderByAggregateInput_1.WishlistsSumOrderByAggregateInput)
], WishlistsOrderByWithAggregationInput.prototype, "_sum", void 0);
WishlistsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WishlistsOrderByWithAggregationInput", {
        isAbstract: true
    })
], WishlistsOrderByWithAggregationInput);
exports.WishlistsOrderByWithAggregationInput = WishlistsOrderByWithAggregationInput;
