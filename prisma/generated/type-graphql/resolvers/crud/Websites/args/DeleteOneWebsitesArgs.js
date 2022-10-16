"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneWebsitesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesWhereUniqueInput_1 = require("../../../inputs/WebsitesWhereUniqueInput");
let DeleteOneWebsitesArgs = class DeleteOneWebsitesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput)
], DeleteOneWebsitesArgs.prototype, "where", void 0);
DeleteOneWebsitesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneWebsitesArgs);
exports.DeleteOneWebsitesArgs = DeleteOneWebsitesArgs;
