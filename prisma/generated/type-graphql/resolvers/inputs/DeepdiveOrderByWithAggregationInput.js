"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveAvgOrderByAggregateInput_1 = require("../inputs/DeepdiveAvgOrderByAggregateInput");
const DeepdiveCountOrderByAggregateInput_1 = require("../inputs/DeepdiveCountOrderByAggregateInput");
const DeepdiveMaxOrderByAggregateInput_1 = require("../inputs/DeepdiveMaxOrderByAggregateInput");
const DeepdiveMinOrderByAggregateInput_1 = require("../inputs/DeepdiveMinOrderByAggregateInput");
const DeepdiveSumOrderByAggregateInput_1 = require("../inputs/DeepdiveSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DeepdiveOrderByWithAggregationInput = class DeepdiveOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithAggregationInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithAggregationInput.prototype, "attendees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithAggregationInput.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveOrderByWithAggregationInput.prototype, "whid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveCountOrderByAggregateInput_1.DeepdiveCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveCountOrderByAggregateInput_1.DeepdiveCountOrderByAggregateInput)
], DeepdiveOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveAvgOrderByAggregateInput_1.DeepdiveAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveAvgOrderByAggregateInput_1.DeepdiveAvgOrderByAggregateInput)
], DeepdiveOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveMaxOrderByAggregateInput_1.DeepdiveMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveMaxOrderByAggregateInput_1.DeepdiveMaxOrderByAggregateInput)
], DeepdiveOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveMinOrderByAggregateInput_1.DeepdiveMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveMinOrderByAggregateInput_1.DeepdiveMinOrderByAggregateInput)
], DeepdiveOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveSumOrderByAggregateInput_1.DeepdiveSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveSumOrderByAggregateInput_1.DeepdiveSumOrderByAggregateInput)
], DeepdiveOrderByWithAggregationInput.prototype, "_sum", void 0);
DeepdiveOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DeepdiveOrderByWithAggregationInput", {
        isAbstract: true
    })
], DeepdiveOrderByWithAggregationInput);
exports.DeepdiveOrderByWithAggregationInput = DeepdiveOrderByWithAggregationInput;
