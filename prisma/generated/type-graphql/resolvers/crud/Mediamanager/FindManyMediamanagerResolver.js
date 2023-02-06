"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMediamanagerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyMediamanagerArgs_1 = require("./args/FindManyMediamanagerArgs");
const Mediamanager_1 = require("../../../models/Mediamanager");
const helpers_1 = require("../../../helpers");
let FindManyMediamanagerResolver = class FindManyMediamanagerResolver {
    async mediamanagers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Mediamanager_1.Mediamanager], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMediamanagerArgs_1.FindManyMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyMediamanagerResolver.prototype, "mediamanagers", null);
FindManyMediamanagerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], FindManyMediamanagerResolver);
exports.FindManyMediamanagerResolver = FindManyMediamanagerResolver;
