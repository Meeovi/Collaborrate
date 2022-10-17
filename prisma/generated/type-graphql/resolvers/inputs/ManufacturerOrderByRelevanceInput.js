"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerOrderByRelevanceFieldEnum_1 = require("../../enums/ManufacturerOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ManufacturerOrderByRelevanceInput = class ManufacturerOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerOrderByRelevanceFieldEnum_1.ManufacturerOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ManufacturerOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerOrderByRelevanceInput.prototype, "search", void 0);
ManufacturerOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ManufacturerOrderByRelevanceInput", {
        isAbstract: true
    })
], ManufacturerOrderByRelevanceInput);
exports.ManufacturerOrderByRelevanceInput = ManufacturerOrderByRelevanceInput;
