"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWebsitesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/WebsitesOrderByWithRelationAndSearchRelevanceInput");
const WebsitesWhereInput_1 = require("../../../inputs/WebsitesWhereInput");
const WebsitesWhereUniqueInput_1 = require("../../../inputs/WebsitesWhereUniqueInput");
const WebsitesScalarFieldEnum_1 = require("../../../../enums/WebsitesScalarFieldEnum");
let FindFirstWebsitesOrThrowArgs = class FindFirstWebsitesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereInput_1.WebsitesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereInput_1.WebsitesWhereInput)
], FindFirstWebsitesOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebsitesOrderByWithRelationAndSearchRelevanceInput_1.WebsitesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWebsitesOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput)
], FindFirstWebsitesOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWebsitesOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWebsitesOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebsitesScalarFieldEnum_1.WebsitesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWebsitesOrThrowArgs.prototype, "distinct", void 0);
FindFirstWebsitesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstWebsitesOrThrowArgs);
exports.FindFirstWebsitesOrThrowArgs = FindFirstWebsitesOrThrowArgs;
