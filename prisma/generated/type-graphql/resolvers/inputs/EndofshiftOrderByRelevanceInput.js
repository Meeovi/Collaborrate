"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndofshiftOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftOrderByRelevanceFieldEnum_1 = require("../../enums/EndofshiftOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let EndofshiftOrderByRelevanceInput = class EndofshiftOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EndofshiftOrderByRelevanceFieldEnum_1.EndofshiftOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], EndofshiftOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftOrderByRelevanceInput.prototype, "search", void 0);
EndofshiftOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EndofshiftOrderByRelevanceInput", {
        isAbstract: true
    })
], EndofshiftOrderByRelevanceInput);
exports.EndofshiftOrderByRelevanceInput = EndofshiftOrderByRelevanceInput;
