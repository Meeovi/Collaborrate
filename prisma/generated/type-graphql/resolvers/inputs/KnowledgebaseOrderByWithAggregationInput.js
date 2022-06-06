"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseAvgOrderByAggregateInput_1 = require("../inputs/KnowledgebaseAvgOrderByAggregateInput");
const KnowledgebaseCountOrderByAggregateInput_1 = require("../inputs/KnowledgebaseCountOrderByAggregateInput");
const KnowledgebaseMaxOrderByAggregateInput_1 = require("../inputs/KnowledgebaseMaxOrderByAggregateInput");
const KnowledgebaseMinOrderByAggregateInput_1 = require("../inputs/KnowledgebaseMinOrderByAggregateInput");
const KnowledgebaseSumOrderByAggregateInput_1 = require("../inputs/KnowledgebaseSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let KnowledgebaseOrderByWithAggregationInput = class KnowledgebaseOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithAggregationInput.prototype, "revision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithAggregationInput.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithAggregationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithAggregationInput.prototype, "approver", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseOrderByWithAggregationInput.prototype, "date_modified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseCountOrderByAggregateInput_1.KnowledgebaseCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseCountOrderByAggregateInput_1.KnowledgebaseCountOrderByAggregateInput)
], KnowledgebaseOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseAvgOrderByAggregateInput_1.KnowledgebaseAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseAvgOrderByAggregateInput_1.KnowledgebaseAvgOrderByAggregateInput)
], KnowledgebaseOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseMaxOrderByAggregateInput_1.KnowledgebaseMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseMaxOrderByAggregateInput_1.KnowledgebaseMaxOrderByAggregateInput)
], KnowledgebaseOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseMinOrderByAggregateInput_1.KnowledgebaseMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseMinOrderByAggregateInput_1.KnowledgebaseMinOrderByAggregateInput)
], KnowledgebaseOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseSumOrderByAggregateInput_1.KnowledgebaseSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseSumOrderByAggregateInput_1.KnowledgebaseSumOrderByAggregateInput)
], KnowledgebaseOrderByWithAggregationInput.prototype, "_sum", void 0);
KnowledgebaseOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("KnowledgebaseOrderByWithAggregationInput", {
        isAbstract: true
    })
], KnowledgebaseOrderByWithAggregationInput);
exports.KnowledgebaseOrderByWithAggregationInput = KnowledgebaseOrderByWithAggregationInput;
