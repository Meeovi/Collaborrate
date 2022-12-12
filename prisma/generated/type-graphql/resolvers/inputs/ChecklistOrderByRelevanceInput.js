"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChecklistOrderByRelevanceFieldEnum_1 = require("../../enums/ChecklistOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ChecklistOrderByRelevanceInput = class ChecklistOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChecklistOrderByRelevanceFieldEnum_1.ChecklistOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ChecklistOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChecklistOrderByRelevanceInput.prototype, "search", void 0);
ChecklistOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChecklistOrderByRelevanceInput", {
        isAbstract: true
    })
], ChecklistOrderByRelevanceInput);
exports.ChecklistOrderByRelevanceInput = ChecklistOrderByRelevanceInput;
