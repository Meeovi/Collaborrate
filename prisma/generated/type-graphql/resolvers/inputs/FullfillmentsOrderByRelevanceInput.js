"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsOrderByRelevanceFieldEnum_1 = require("../../enums/FullfillmentsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let FullfillmentsOrderByRelevanceInput = class FullfillmentsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FullfillmentsOrderByRelevanceFieldEnum_1.FullfillmentsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], FullfillmentsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByRelevanceInput.prototype, "search", void 0);
FullfillmentsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FullfillmentsOrderByRelevanceInput", {
        isAbstract: true
    })
], FullfillmentsOrderByRelevanceInput);
exports.FullfillmentsOrderByRelevanceInput = FullfillmentsOrderByRelevanceInput;
