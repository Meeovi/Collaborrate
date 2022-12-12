"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const VisitsOrderByRelevanceFieldEnum_1 = require("../../enums/VisitsOrderByRelevanceFieldEnum");
let VisitsOrderByRelevanceInput = class VisitsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisitsOrderByRelevanceFieldEnum_1.VisitsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VisitsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByRelevanceInput.prototype, "search", void 0);
VisitsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisitsOrderByRelevanceInput", {
        isAbstract: true
    })
], VisitsOrderByRelevanceInput);
exports.VisitsOrderByRelevanceInput = VisitsOrderByRelevanceInput;
