"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMediamanagerOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueMediamanagerOrThrowArgs_1 = require("./args/FindUniqueMediamanagerOrThrowArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const helpers_1 = require("../../../helpers");
let FindUniqueMediamanagerOrThrowResolver = class FindUniqueMediamanagerOrThrowResolver {
    async getMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Mediamanager_1.Mediamanager, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMediamanagerOrThrowArgs_1.FindUniqueMediamanagerOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueMediamanagerOrThrowResolver.prototype, "getMediamanager", null);
FindUniqueMediamanagerOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], FindUniqueMediamanagerOrThrowResolver);
exports.FindUniqueMediamanagerOrThrowResolver = FindUniqueMediamanagerOrThrowResolver;
