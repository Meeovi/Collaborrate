"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWebsitesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesWhereUniqueInput_1 = require("../../../inputs/WebsitesWhereUniqueInput");
let FindUniqueWebsitesOrThrowArgs = class FindUniqueWebsitesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WebsitesWhereUniqueInput_1.WebsitesWhereUniqueInput)
], FindUniqueWebsitesOrThrowArgs.prototype, "where", void 0);
FindUniqueWebsitesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueWebsitesOrThrowArgs);
exports.FindUniqueWebsitesOrThrowArgs = FindUniqueWebsitesOrThrowArgs;
