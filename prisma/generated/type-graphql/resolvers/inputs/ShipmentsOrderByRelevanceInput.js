"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsOrderByRelevanceFieldEnum_1 = require("../../enums/ShipmentsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ShipmentsOrderByRelevanceInput = class ShipmentsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShipmentsOrderByRelevanceFieldEnum_1.ShipmentsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ShipmentsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByRelevanceInput.prototype, "search", void 0);
ShipmentsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShipmentsOrderByRelevanceInput", {
        isAbstract: true
    })
], ShipmentsOrderByRelevanceInput);
exports.ShipmentsOrderByRelevanceInput = ShipmentsOrderByRelevanceInput;
