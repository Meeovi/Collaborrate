"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesWhereInput_1 = require("../inputs/WebsitesWhereInput");
let WebsitesRelationFilter = class WebsitesRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereInput_1.WebsitesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereInput_1.WebsitesWhereInput)
], WebsitesRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereInput_1.WebsitesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereInput_1.WebsitesWhereInput)
], WebsitesRelationFilter.prototype, "isNot", void 0);
WebsitesRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesRelationFilter", {
        isAbstract: true
    })
], WebsitesRelationFilter);
exports.WebsitesRelationFilter = WebsitesRelationFilter;
