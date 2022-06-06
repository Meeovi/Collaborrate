"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWebsitesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesOrderByWithRelationInput_1 = require("../../../inputs/WebsitesOrderByWithRelationInput");
const WebsitesWhereInput_1 = require("../../../inputs/WebsitesWhereInput");
const WebsitesWhereUniqueInput_1 = require("../../../inputs/WebsitesWhereUniqueInput");
let AggregateWebsitesArgs = class AggregateWebsitesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereInput_1.WebsitesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereInput_1.WebsitesWhereInput)
], AggregateWebsitesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebsitesOrderByWithRelationInput_1.WebsitesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateWebsitesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput)
], AggregateWebsitesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateWebsitesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateWebsitesArgs.prototype, "skip", void 0);
AggregateWebsitesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateWebsitesArgs);
exports.AggregateWebsitesArgs = AggregateWebsitesArgs;
