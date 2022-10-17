"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OotoOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoOrderByRelevanceFieldEnum_1 = require("../../enums/OotoOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let OotoOrderByRelevanceInput = class OotoOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoOrderByRelevanceFieldEnum_1.OotoOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OotoOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByRelevanceInput.prototype, "search", void 0);
OotoOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OotoOrderByRelevanceInput", {
        isAbstract: true
    })
], OotoOrderByRelevanceInput);
exports.OotoOrderByRelevanceInput = OotoOrderByRelevanceInput;
