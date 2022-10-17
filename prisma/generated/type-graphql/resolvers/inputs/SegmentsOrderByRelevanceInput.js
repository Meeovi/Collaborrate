"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsOrderByRelevanceFieldEnum_1 = require("../../enums/SegmentsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let SegmentsOrderByRelevanceInput = class SegmentsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SegmentsOrderByRelevanceFieldEnum_1.SegmentsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SegmentsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SegmentsOrderByRelevanceInput.prototype, "search", void 0);
SegmentsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SegmentsOrderByRelevanceInput", {
        isAbstract: true
    })
], SegmentsOrderByRelevanceInput);
exports.SegmentsOrderByRelevanceInput = SegmentsOrderByRelevanceInput;
