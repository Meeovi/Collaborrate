"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWebsitesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesUpdateManyMutationInput_1 = require("../../../inputs/WebsitesUpdateManyMutationInput");
const WebsitesWhereInput_1 = require("../../../inputs/WebsitesWhereInput");
let UpdateManyWebsitesArgs = class UpdateManyWebsitesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesUpdateManyMutationInput_1.WebsitesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesUpdateManyMutationInput_1.WebsitesUpdateManyMutationInput)
], UpdateManyWebsitesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereInput_1.WebsitesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereInput_1.WebsitesWhereInput)
], UpdateManyWebsitesArgs.prototype, "where", void 0);
UpdateManyWebsitesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyWebsitesArgs);
exports.UpdateManyWebsitesArgs = UpdateManyWebsitesArgs;
