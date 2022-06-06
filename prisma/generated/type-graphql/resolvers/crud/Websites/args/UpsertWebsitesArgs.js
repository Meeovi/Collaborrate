"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertWebsitesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesCreateInput_1 = require("../../../inputs/WebsitesCreateInput");
const WebsitesUpdateInput_1 = require("../../../inputs/WebsitesUpdateInput");
const WebsitesWhereUniqueInput_1 = require("../../../inputs/WebsitesWhereUniqueInput");
let UpsertWebsitesArgs = class UpsertWebsitesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput)
], UpsertWebsitesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCreateInput_1.WebsitesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesCreateInput_1.WebsitesCreateInput)
], UpsertWebsitesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesUpdateInput_1.WebsitesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesUpdateInput_1.WebsitesUpdateInput)
], UpsertWebsitesArgs.prototype, "update", void 0);
UpsertWebsitesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertWebsitesArgs);
exports.UpsertWebsitesArgs = UpsertWebsitesArgs;
