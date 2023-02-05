"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMediamanagerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueMediamanagerArgs_1 = require("./args/FindUniqueMediamanagerArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const helpers_1 = require("../../../helpers");
let FindUniqueMediamanagerResolver = class FindUniqueMediamanagerResolver {
    async mediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMediamanagerArgs_1.FindUniqueMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueMediamanagerResolver.prototype, "mediamanager", null);
FindUniqueMediamanagerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], FindUniqueMediamanagerResolver);
exports.FindUniqueMediamanagerResolver = FindUniqueMediamanagerResolver;
