"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWebsitesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesWhereInput_1 = require("../../../inputs/WebsitesWhereInput");
let DeleteManyWebsitesArgs = class DeleteManyWebsitesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereInput_1.WebsitesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesWhereInput_1.WebsitesWhereInput)
], DeleteManyWebsitesArgs.prototype, "where", void 0);
DeleteManyWebsitesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyWebsitesArgs);
exports.DeleteManyWebsitesArgs = DeleteManyWebsitesArgs;
