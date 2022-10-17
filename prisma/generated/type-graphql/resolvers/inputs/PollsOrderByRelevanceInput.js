"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsOrderByRelevanceFieldEnum_1 = require("../../enums/PollsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let PollsOrderByRelevanceInput = class PollsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PollsOrderByRelevanceFieldEnum_1.PollsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PollsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PollsOrderByRelevanceInput.prototype, "search", void 0);
PollsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PollsOrderByRelevanceInput", {
        isAbstract: true
    })
], PollsOrderByRelevanceInput);
exports.PollsOrderByRelevanceInput = PollsOrderByRelevanceInput;
