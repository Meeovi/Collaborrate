"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryAvgOrderByAggregateInput_1 = require("../inputs/GlossaryAvgOrderByAggregateInput");
const GlossaryCountOrderByAggregateInput_1 = require("../inputs/GlossaryCountOrderByAggregateInput");
const GlossaryMaxOrderByAggregateInput_1 = require("../inputs/GlossaryMaxOrderByAggregateInput");
const GlossaryMinOrderByAggregateInput_1 = require("../inputs/GlossaryMinOrderByAggregateInput");
const GlossarySumOrderByAggregateInput_1 = require("../inputs/GlossarySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let GlossaryOrderByWithAggregationInput = class GlossaryOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryCountOrderByAggregateInput_1.GlossaryCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryCountOrderByAggregateInput_1.GlossaryCountOrderByAggregateInput)
], GlossaryOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryAvgOrderByAggregateInput_1.GlossaryAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryAvgOrderByAggregateInput_1.GlossaryAvgOrderByAggregateInput)
], GlossaryOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryMaxOrderByAggregateInput_1.GlossaryMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryMaxOrderByAggregateInput_1.GlossaryMaxOrderByAggregateInput)
], GlossaryOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryMinOrderByAggregateInput_1.GlossaryMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryMinOrderByAggregateInput_1.GlossaryMinOrderByAggregateInput)
], GlossaryOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossarySumOrderByAggregateInput_1.GlossarySumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossarySumOrderByAggregateInput_1.GlossarySumOrderByAggregateInput)
], GlossaryOrderByWithAggregationInput.prototype, "_sum", void 0);
GlossaryOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlossaryOrderByWithAggregationInput", {
        isAbstract: true
    })
], GlossaryOrderByWithAggregationInput);
exports.GlossaryOrderByWithAggregationInput = GlossaryOrderByWithAggregationInput;
