"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesOrderByRelevanceFieldEnum_1 = require("../../enums/OpportunitiesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let OpportunitiesOrderByRelevanceInput = class OpportunitiesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OpportunitiesOrderByRelevanceFieldEnum_1.OpportunitiesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OpportunitiesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesOrderByRelevanceInput.prototype, "search", void 0);
OpportunitiesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OpportunitiesOrderByRelevanceInput", {
        isAbstract: true
    })
], OpportunitiesOrderByRelevanceInput);
exports.OpportunitiesOrderByRelevanceInput = OpportunitiesOrderByRelevanceInput;
