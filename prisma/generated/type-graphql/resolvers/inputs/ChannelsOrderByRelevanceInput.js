"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsOrderByRelevanceFieldEnum_1 = require("../../enums/ChannelsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ChannelsOrderByRelevanceInput = class ChannelsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChannelsOrderByRelevanceFieldEnum_1.ChannelsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ChannelsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByRelevanceInput.prototype, "search", void 0);
ChannelsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChannelsOrderByRelevanceInput", {
        isAbstract: true
    })
], ChannelsOrderByRelevanceInput);
exports.ChannelsOrderByRelevanceInput = ChannelsOrderByRelevanceInput;
