"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsOrderByRelevanceInput_1 = require("../inputs/ChannelsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ChannelsOrderByWithRelationAndSearchRelevanceInput = class ChannelsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "default_lang", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "include_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "default_zone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "default_shipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsOrderByRelevanceInput_1.ChannelsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsOrderByRelevanceInput_1.ChannelsOrderByRelevanceInput)
], ChannelsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
ChannelsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChannelsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], ChannelsOrderByWithRelationAndSearchRelevanceInput);
exports.ChannelsOrderByWithRelationAndSearchRelevanceInput = ChannelsOrderByWithRelationAndSearchRelevanceInput;
