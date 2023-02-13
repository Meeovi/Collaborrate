"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesAvgOrderByAggregateInput_1 = require("../inputs/DashboardslidesAvgOrderByAggregateInput");
const DashboardslidesCountOrderByAggregateInput_1 = require("../inputs/DashboardslidesCountOrderByAggregateInput");
const DashboardslidesMaxOrderByAggregateInput_1 = require("../inputs/DashboardslidesMaxOrderByAggregateInput");
const DashboardslidesMinOrderByAggregateInput_1 = require("../inputs/DashboardslidesMinOrderByAggregateInput");
const DashboardslidesSumOrderByAggregateInput_1 = require("../inputs/DashboardslidesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardslidesOrderByWithAggregationInput = class DashboardslidesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesCountOrderByAggregateInput_1.DashboardslidesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesCountOrderByAggregateInput_1.DashboardslidesCountOrderByAggregateInput)
], DashboardslidesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesAvgOrderByAggregateInput_1.DashboardslidesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesAvgOrderByAggregateInput_1.DashboardslidesAvgOrderByAggregateInput)
], DashboardslidesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesMaxOrderByAggregateInput_1.DashboardslidesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesMaxOrderByAggregateInput_1.DashboardslidesMaxOrderByAggregateInput)
], DashboardslidesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesMinOrderByAggregateInput_1.DashboardslidesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesMinOrderByAggregateInput_1.DashboardslidesMinOrderByAggregateInput)
], DashboardslidesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesSumOrderByAggregateInput_1.DashboardslidesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesSumOrderByAggregateInput_1.DashboardslidesSumOrderByAggregateInput)
], DashboardslidesOrderByWithAggregationInput.prototype, "_sum", void 0);
DashboardslidesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslidesOrderByWithAggregationInput", {
        isAbstract: true
    })
], DashboardslidesOrderByWithAggregationInput);
exports.DashboardslidesOrderByWithAggregationInput = DashboardslidesOrderByWithAggregationInput;
