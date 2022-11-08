"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationOrderByRelevanceFieldEnum_1 = require("../../enums/InternalizationOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let InternalizationOrderByRelevanceInput = class InternalizationOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationOrderByRelevanceFieldEnum_1.InternalizationOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], InternalizationOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InternalizationOrderByRelevanceInput.prototype, "search", void 0);
InternalizationOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InternalizationOrderByRelevanceInput", {
        isAbstract: true
    })
], InternalizationOrderByRelevanceInput);
exports.InternalizationOrderByRelevanceInput = InternalizationOrderByRelevanceInput;
