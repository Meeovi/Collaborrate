"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneWebsitesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesUpdateInput_1 = require("../../../inputs/WebsitesUpdateInput");
const WebsitesWhereUniqueInput_1 = require("../../../inputs/WebsitesWhereUniqueInput");
let UpdateOneWebsitesArgs = class UpdateOneWebsitesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesUpdateInput_1.WebsitesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesUpdateInput_1.WebsitesUpdateInput)
], UpdateOneWebsitesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput)
], UpdateOneWebsitesArgs.prototype, "where", void 0);
UpdateOneWebsitesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneWebsitesArgs);
exports.UpdateOneWebsitesArgs = UpdateOneWebsitesArgs;
