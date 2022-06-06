"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWebsitesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesCreateInput_1 = require("../../../inputs/WebsitesCreateInput");
let CreateWebsitesArgs = class CreateWebsitesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCreateInput_1.WebsitesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesCreateInput_1.WebsitesCreateInput)
], CreateWebsitesArgs.prototype, "data", void 0);
CreateWebsitesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateWebsitesArgs);
exports.CreateWebsitesArgs = CreateWebsitesArgs;
