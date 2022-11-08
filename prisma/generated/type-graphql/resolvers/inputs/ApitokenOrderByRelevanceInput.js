"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenOrderByRelevanceFieldEnum_1 = require("../../enums/ApitokenOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ApitokenOrderByRelevanceInput = class ApitokenOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenOrderByRelevanceFieldEnum_1.ApitokenOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ApitokenOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenOrderByRelevanceInput.prototype, "search", void 0);
ApitokenOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ApitokenOrderByRelevanceInput", {
        isAbstract: true
    })
], ApitokenOrderByRelevanceInput);
exports.ApitokenOrderByRelevanceInput = ApitokenOrderByRelevanceInput;
