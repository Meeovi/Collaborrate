"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let KnowledgebaseAvgOrderByAggregateInput = class KnowledgebaseAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], KnowledgebaseAvgOrderByAggregateInput.prototype, "id", void 0);
KnowledgebaseAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("KnowledgebaseAvgOrderByAggregateInput", {
        isAbstract: true
    })
], KnowledgebaseAvgOrderByAggregateInput);
exports.KnowledgebaseAvgOrderByAggregateInput = KnowledgebaseAvgOrderByAggregateInput;
