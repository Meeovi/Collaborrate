"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWebsites = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesAvgAggregate_1 = require("../outputs/WebsitesAvgAggregate");
const WebsitesCountAggregate_1 = require("../outputs/WebsitesCountAggregate");
const WebsitesMaxAggregate_1 = require("../outputs/WebsitesMaxAggregate");
const WebsitesMinAggregate_1 = require("../outputs/WebsitesMinAggregate");
const WebsitesSumAggregate_1 = require("../outputs/WebsitesSumAggregate");
let AggregateWebsites = class AggregateWebsites {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCountAggregate_1.WebsitesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesCountAggregate_1.WebsitesCountAggregate)
], AggregateWebsites.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesAvgAggregate_1.WebsitesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesAvgAggregate_1.WebsitesAvgAggregate)
], AggregateWebsites.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesSumAggregate_1.WebsitesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesSumAggregate_1.WebsitesSumAggregate)
], AggregateWebsites.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesMinAggregate_1.WebsitesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesMinAggregate_1.WebsitesMinAggregate)
], AggregateWebsites.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesMaxAggregate_1.WebsitesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesMaxAggregate_1.WebsitesMaxAggregate)
], AggregateWebsites.prototype, "_max", void 0);
AggregateWebsites = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateWebsites", {
        isAbstract: true
    })
], AggregateWebsites);
exports.AggregateWebsites = AggregateWebsites;
