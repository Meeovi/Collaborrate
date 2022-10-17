"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsOrderByRelevanceFieldEnum_1 = require("../../enums/LeadsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let LeadsOrderByRelevanceInput = class LeadsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LeadsOrderByRelevanceFieldEnum_1.LeadsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LeadsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LeadsOrderByRelevanceInput.prototype, "search", void 0);
LeadsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LeadsOrderByRelevanceInput", {
        isAbstract: true
    })
], LeadsOrderByRelevanceInput);
exports.LeadsOrderByRelevanceInput = LeadsOrderByRelevanceInput;
